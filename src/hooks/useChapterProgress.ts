import { useCallback, useMemo, useState } from 'react';
import { STORAGE_KEYS } from '../constants';
import type { StoryModeProgress, ChapterProgress } from '../types/chapterTypes';
import { chapters } from '../data/chapters';

const DEFAULT_PROGRESS: StoryModeProgress = {
  currentChapterId: 'chapter-1',
  chapters: {
    'chapter-1': {
      chapterId: 'chapter-1',
      completedPuzzleIds: [],
      currentPuzzleIndex: 0,
      unlockedAt: new Date().toISOString(),
    },
  },
};

function loadProgress(): StoryModeProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STORY_MODE_PROGRESS);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as StoryModeProgress;
    if (parsed?.chapters && typeof parsed.currentChapterId === 'string') {
      return parsed;
    }
  } catch {
    // ignore
  }
  return DEFAULT_PROGRESS;
}

function saveProgress(progress: StoryModeProgress): void {
  localStorage.setItem(STORAGE_KEYS.STORY_MODE_PROGRESS, JSON.stringify(progress));
}

export function useChapterProgress() {
  const [progress, setProgress] = useState<StoryModeProgress>(loadProgress);

  const persist = useCallback((next: StoryModeProgress) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const getChapterProgress = useCallback(
    (chapterId: string): ChapterProgress | undefined => {
      return progress.chapters[chapterId];
    },
    [progress.chapters]
  );

  const isChapterUnlocked = useCallback(
    (chapterId: string): boolean => {
      const index = chapters.findIndex((c) => c.id === chapterId);
      if (index <= 0) return true;
      const prevChapter = chapters[index - 1];
      const prev = progress.chapters[prevChapter.id];
      if (!prev) return false;
      const total = prevChapter.puzzles.length;
      return prev.completedPuzzleIds.length >= total && prev.currentPuzzleIndex >= total;
    },
    [progress.chapters]
  );

  const canAccessPuzzle = useCallback(
    (chapterId: string, puzzleIndex: number): boolean => {
      if (!isChapterUnlocked(chapterId)) return false;
      const chapter = chapters.find((c) => c.id === chapterId);
      if (!chapter || puzzleIndex < 0 || puzzleIndex >= chapter.puzzles.length) return false;
      const cp = progress.chapters[chapterId];
      const currentIndex = cp?.currentPuzzleIndex ?? 0;
      const completed = new Set(cp?.completedPuzzleIds ?? []);
      const puzzleId = chapter.puzzles[puzzleIndex].id;
      return puzzleIndex <= currentIndex || completed.has(puzzleId);
    },
    [progress.chapters, isChapterUnlocked]
  );

  const markPuzzleComplete = useCallback(
    (chapterId: string, puzzleIndex: number) => {
      const chapter = chapters.find((c) => c.id === chapterId);
      if (!chapter || puzzleIndex < 0 || puzzleIndex >= chapter.puzzles.length) return;
      const puzzle = chapter.puzzles[puzzleIndex];
      const next = { ...progress };
      const cp: ChapterProgress = next.chapters[chapterId] ?? {
        chapterId,
        completedPuzzleIds: [],
        currentPuzzleIndex: 0,
        unlockedAt: new Date().toISOString(),
      };
      if (cp.completedPuzzleIds.includes(puzzle.id)) return;
      cp.completedPuzzleIds = [...cp.completedPuzzleIds, puzzle.id];
      cp.currentPuzzleIndex = puzzleIndex + 1;
      next.chapters[chapterId] = cp;
      next.currentChapterId = chapterId;

      const allDone = cp.currentPuzzleIndex >= chapter.puzzles.length;
      if (allDone) {
        const chapterIdx = chapters.findIndex((c) => c.id === chapterId);
        if (chapterIdx >= 0 && chapterIdx < chapters.length - 1) {
          const nextChapter = chapters[chapterIdx + 1];
          next.chapters[nextChapter.id] = {
            chapterId: nextChapter.id,
            completedPuzzleIds: [],
            currentPuzzleIndex: 0,
            unlockedAt: new Date().toISOString(),
          };
        }
      }
      persist(next);
    },
    [progress, persist]
  );

  const markChapterComplete = useCallback(
    (chapterId: string) => {
      const index = chapters.findIndex((c) => c.id === chapterId);
      if (index < 0 || index >= chapters.length - 1) return;
      const nextChapter = chapters[index + 1];
      const next = { ...progress };
      next.chapters[nextChapter.id] = {
        chapterId: nextChapter.id,
        completedPuzzleIds: [],
        currentPuzzleIndex: 0,
        unlockedAt: new Date().toISOString(),
      };
      next.currentChapterId = nextChapter.id;
      persist(next);
    },
    [progress, persist]
  );

  const getCarryForwardClues = useCallback(
    (chapterId: string): { puzzleIndex: number; fact: string }[] => {
      const chapter = chapters.find((c) => c.id === chapterId);
      const cp = progress.chapters[chapterId];
      if (!chapter || !cp) return [];
      const completedIds = new Set(cp.completedPuzzleIds);
      const out: { puzzleIndex: number; fact: string }[] = [];
      chapter.puzzles.forEach((p, idx) => {
        if (!completedIds.has(p.id) || !p.carryForwardClues) return;
        p.carryForwardClues.forEach((c) => {
          out.push({ puzzleIndex: idx, fact: c.fact });
        });
      });
      out.sort((a, b) => a.puzzleIndex - b.puzzleIndex);
      return out;
    },
    [progress.chapters]
  );

  const storySummary = useMemo(() => {
    let chapterNum = 0;
    let puzzlesSolved = 0;
    for (const c of chapters) {
      const cp = progress.chapters[c.id];
      if (cp) {
        chapterNum = c.chapterNumber;
        puzzlesSolved += cp.completedPuzzleIds.length;
      }
    }
    const totalChapters = chapters.length;
    return { chapterNum, puzzlesSolved, totalChapters };
  }, [progress.chapters]);

  const storyNextLabel = useMemo(() => {
    let puzzlesSolved = 0;
    for (const c of chapters) {
      const cp = progress.chapters[c.id];
      if (cp) puzzlesSolved += cp.completedPuzzleIds.length;
    }
    if (puzzlesSolved === 0) return 'Start Story Mode';
    for (const c of chapters) {
      const cp = progress.chapters[c.id];
      if (!cp) continue;
      const idx = cp.currentPuzzleIndex ?? 0;
      if (idx < c.puzzles.length) {
        const puzzle = c.puzzles[idx];
        return `Continue: Chapter ${c.chapterNumber} — ${puzzle.title}`;
      }
    }
    return 'Review Story Mode';
  }, [progress.chapters]);

  return {
    progress,
    getChapterProgress,
    isChapterUnlocked,
    canAccessPuzzle,
    markPuzzleComplete,
    markChapterComplete,
    getCarryForwardClues,
    storySummary,
    storyNextLabel,
  };
}
