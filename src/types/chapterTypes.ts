import type { Puzzle } from './puzzle';

export interface NarrativeSegment {
    position: 'before' | 'after';
    text: string;
    speakerName?: string;
}

export interface CarryForwardClue {
    puzzleIndex: number; // Which puzzle revealed this
    fact: string;        // e.g., "The butler was in the library"
}

export interface ChapterPuzzle extends Puzzle {
    narratives: NarrativeSegment[];
    carryForwardClues?: CarryForwardClue[]; // Facts revealed upon solving this puzzle
}

export interface Chapter {
    id: string;
    chapterNumber: number;
    title: string;
    subtitle: string;  // e.g., "Embarkation Night"
    description: string;
    artworkPath?: string;
    puzzles: ChapterPuzzle[];
}

export interface ChapterProgress {
    chapterId: string;
    completedPuzzleIds: string[];
    currentPuzzleIndex: number;
    unlockedAt: string; // ISO timestamp
}

export interface StoryModeProgress {
    chapters: Record<string, ChapterProgress>;
    currentChapterId: string;
}
