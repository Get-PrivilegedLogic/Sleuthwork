import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { chapters } from '../data/chapters';
import { STORAGE_KEYS } from '../constants';
import { Layout } from '../components/Layout';
import CollapsibleSection from '../components/CollapsibleSection';
import SuspectsCard from '../components/SuspectsCard';
import WeaponsCard from '../components/WeaponsCard';
import LocationsCard from '../components/LocationsCard';
import LogicGrid from '../components/LogicGrid';
import StatementsSection from '../components/StatementsSection';
import NarrativePanel from '../components/NarrativePanel';
import type { GridCell } from '../types/puzzle';
import type { ChapterPuzzle } from '../types/chapterTypes';
import { useTimer } from '../hooks/useTimer';
import { useChapterProgress } from '../hooks/useChapterProgress';
import useSound from 'use-sound';

const CHAPTER_THEME_COLORS: Record<string, string> = {
  'chapter-1': 'teal',
  'chapter-2': 'amber',
  'chapter-3': 'slate',
  'chapter-4': 'red',
  'chapter-5': 'indigo',
};

export default function ChapterPuzzlePage() {
  const { chapterId, puzzleIndex: puzzleIndexParam } = useParams<{ chapterId: string; puzzleIndex: string }>();
  const navigate = useNavigate();
  const puzzleIndex = puzzleIndexParam ? parseInt(puzzleIndexParam, 10) : 0;
  const { canAccessPuzzle, markPuzzleComplete, getCarryForwardClues } = useChapterProgress();

  const chapter = chapters.find((c) => c.id === chapterId);
  const puzzle: ChapterPuzzle | undefined =
    chapter && puzzleIndex >= 0 && puzzleIndex < chapter.puzzles.length
      ? chapter.puzzles[puzzleIndex]
      : undefined;

  const [showSolution, setShowSolution] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [checkResult, setCheckResult] = useState<'correct' | 'incorrect' | null>(null);
  const [selectedSuspect, setSelectedSuspect] = useState('');
  const [selectedWeapon, setSelectedWeapon] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedMotive, setSelectedMotive] = useState('');

  const { seconds, formattedTime, stop: stopTimer, reset: resetTimer, isRunning } = useTimer();
  const [playSuccess] = useSound(
    'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3',
    { volume: 0.5, html5: true }
  );
  const [playFailure] = useSound(
    'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
    { volume: 0.3, html5: true }
  );

  const gridKey = chapterId && Number.isInteger(puzzleIndex) ? STORAGE_KEYS.CHAPTER_GRID(chapterId, puzzleIndex) : '';
  const timeKey = chapterId && Number.isInteger(puzzleIndex) ? STORAGE_KEYS.CHAPTER_PUZZLE_TIME(chapterId, puzzleIndex) : '';

  const [grid, setGrid] = useState<Record<string, GridCell>>(() => {
    if (!gridKey) return {};
    const saved = localStorage.getItem(gridKey);
    return saved ? JSON.parse(saved) : {};
  });

  const [hintsUnlocked, setHintsUnlocked] = useState(false);
  const themeColor = (chapterId && CHAPTER_THEME_COLORS[chapterId]) || 'teal';
  const carryForwardClues = chapterId ? getCarryForwardClues(chapterId) : [];
  const showCarryForward = puzzleIndex > 0 && carryForwardClues.length > 0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    resetTimer();
    // Reset all solution/UI state when navigating to a different puzzle so we don't show the previous puzzle's result or the new puzzle's answer
    setShowSolution(false);
    setCheckResult(null);
    setSelectedSuspect('');
    setSelectedWeapon('');
    setSelectedLocation('');
    setSelectedMotive('');
    setHintsUnlocked(false);
    setCurrentHint(0);
    if (gridKey) {
      const saved = localStorage.getItem(gridKey);
      setGrid(saved ? JSON.parse(saved) : {});
    } else {
      setGrid({});
    }
  }, [chapterId, puzzleIndex, resetTimer, gridKey]);

  useEffect(() => {
    if (gridKey) {
      localStorage.setItem(gridKey, JSON.stringify(grid));
    }
  }, [grid, gridKey]);

  const handleCellClick = (key: string) => {
    setGrid((prev) => {
      const current = prev[key] || 'empty';
      const next = current === 'empty' ? 'cross' : current === 'cross' ? 'check' : 'empty';
      return { ...prev, [key]: next };
    });
  };

  const handleCheckSolution = () => {
    if (!puzzle || !selectedSuspect || !selectedWeapon || !selectedLocation) return;
    const hasMotive = puzzle.motives && puzzle.motives.length > 0;
    const motiveOk = !hasMotive || (puzzle.solution.motive && selectedMotive === puzzle.solution.motive);
    const isCorrect =
      selectedSuspect === puzzle.solution.suspect &&
      selectedWeapon === puzzle.solution.weapon &&
      selectedLocation === puzzle.solution.location &&
      motiveOk;

    setCheckResult(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      playSuccess();
      stopTimer();
      if (chapterId && Number.isInteger(puzzleIndex)) {
        const currentBest = localStorage.getItem(timeKey);
        if (!currentBest || seconds < parseInt(currentBest, 10)) {
          localStorage.setItem(timeKey, seconds.toString());
        }
        markPuzzleComplete(chapterId, puzzleIndex);
      }
    } else {
      playFailure();
      setHintsUnlocked(true);
    }
  };

  const handleClearGrid = () => {
    if (window.confirm('Clear all marks on the grid?')) setGrid({});
  };

  const narrativeBefore = puzzle?.narratives?.filter((n) => n.position === 'before') ?? [];
  const narrativeAfter = puzzle?.narratives?.filter((n) => n.position === 'after') ?? [];

  if (!chapterId || !chapter || puzzle === undefined) {
    return (
      <Layout maxWidth="6xl">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-2">Puzzle not found</h2>
            <Link to="/story" className="text-purple-400 hover:underline">
              ← Back to Story Mode
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  if (!canAccessPuzzle(chapterId, puzzleIndex)) {
    return (
      <Layout maxWidth="6xl">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-amber-900/20 border border-amber-500 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-2">This puzzle is locked</h2>
            <p className="text-gray-300 mb-4">Complete the previous puzzles in this chapter first.</p>
            <Link to={`/story/${chapterId}`} className="text-purple-400 hover:underline">
              ← Back to Chapter
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Stub / "Coming Soon" puzzles have no suspects — show a friendly message instead of broken UI
  const isStubPuzzle = puzzle.suspects.length === 0;
  if (isStubPuzzle) {
    return (
      <Layout maxWidth="6xl">
        <div className="relative z-10">
          <Link
            to={`/story/${chapterId}`}
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to {chapter.title}
          </Link>
          <div className="max-w-2xl mx-auto py-12 px-6 text-center bg-white/5 dark:bg-gray-800/50 rounded-2xl border-2 border-amber-500/30">
            <div className="text-6xl mb-4">📖</div>
            <h2 className="text-2xl font-bold text-amber-400 mb-2">Coming soon</h2>
            <p className="text-gray-300 mb-6">
              This puzzle is still in development. Check back later — or continue with Chapter 1 in the meantime.
            </p>
            <Link
              to={`/story/${chapterId}`}
              className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors"
            >
              Back to Chapter
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const getDifficultyBadgeColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-900/30 border-green-500/50 text-green-400';
      case 'medium': return 'bg-yellow-900/30 border-yellow-500/50 text-yellow-400';
      case 'hard': return 'bg-red-900/30 border-red-500/50 text-red-400';
      case 'ludicrous': return 'bg-purple-900/30 border-purple-500/50 text-purple-400';
      default: return 'bg-gray-900/30 border-gray-500/50 text-gray-400';
    }
  };

  const hasMotives = !!(puzzle.motives && puzzle.motives.length > 0);
  const canCheck = !!selectedSuspect && !!selectedWeapon && !!selectedLocation && (!hasMotives || !!selectedMotive);
  const nextIndex = puzzleIndex + 1;
  const hasNext = chapter.puzzles.length > nextIndex;

  return (
    <Layout maxWidth="6xl">
      <div className="relative z-10">
        <Link
          to={`/story/${chapterId}`}
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-4 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to {chapter.title}
        </Link>

        {/* Narrative before puzzle */}
        {narrativeBefore.map((n, i) => (
          <NarrativePanel key={`before-${i}`} narrative={n} chapterThemeColor={themeColor} />
        ))}

        {/* Carry-forward clues */}
        {showCarryForward && (
          <CollapsibleSection
            title="Facts revealed so far"
            titleColor="text-amber-400"
            borderColor="border-amber-400"
            defaultOpen={true}
          >
            <ul className="space-y-2">
              {carryForwardClues.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-amber-100 text-sm">
                  <span className="text-amber-400 shrink-0">•</span>
                  <span>{c.fact}</span>
                </li>
              ))}
            </ul>
          </CollapsibleSection>
        )}

        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">{puzzle.title}</h1>
            <div className="flex items-center gap-3">
              <span className={`inline-block px-4 py-2 rounded-lg border-2 font-bold text-sm uppercase tracking-wider ${getDifficultyBadgeColor(puzzle.difficulty)}`}>
                {puzzle.difficulty}
              </span>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-bold text-sm ${isRunning ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500/50 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-900/30 border-gray-400/50 text-gray-500 dark:text-gray-400'}`}>
                <span>⏱️</span>
                <span className="font-mono">{formattedTime}</span>
              </div>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{puzzle.backstory}</p>
        </div>

        <SuspectsCard suspects={puzzle.suspects} />
        <WeaponsCard weapons={puzzle.weapons} />
        <LocationsCard locations={puzzle.locations} />

        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-4 md:p-6 rounded-lg mb-6 md:mb-8 border-2 border-green-500 shadow-lg shadow-green-900/50">
          <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-3 md:mb-4 flex items-center">
            <span className="text-2xl mr-2">🔍</span>
            Clues & Evidence
          </h2>
          <ul className="space-y-2 md:space-y-3">
            {puzzle.clues.map((clue, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-400 font-bold mr-2 md:mr-3 mt-0.5 shrink-0">{idx + 1}.</span>
                <span className="text-sm md:text-base text-green-100">{clue}</span>
              </li>
            ))}
          </ul>
        </div>

        {puzzle.statements && puzzle.statements.length > 0 && (
          <StatementsSection statements={puzzle.statements} />
        )}

        <LogicGrid
          suspects={puzzle.suspects}
          weapons={puzzle.weapons}
          locations={puzzle.locations}
          motives={puzzle.motives}
          grid={grid}
          onCellClick={handleCellClick}
          onClearGrid={handleClearGrid}
        />

        {/* Easy puzzles: no hints per design. Medium+: show hints after first wrong guess. */}
        {hintsUnlocked && puzzle.difficulty === 'easy' && (
          <div className="bg-amber-900/20 border border-amber-500/40 rounded-xl p-4 mb-6">
            <p className="text-amber-200 text-sm italic">No hints for this one — pure deduction. Keep at it!</p>
          </div>
        )}
        {hintsUnlocked && puzzle.hints.length > 0 && puzzle.difficulty !== 'easy' && (
          <CollapsibleSection title="Hints (Unlocked)" titleColor="text-yellow-400" borderColor="border-yellow-400" defaultOpen={true}>
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <button
                  type="button"
                  onClick={() => setCurrentHint((h) => Math.max(0, h - 1))}
                  disabled={currentHint === 0}
                  className="px-3 py-1.5 bg-yellow-700 hover:bg-yellow-600 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded transition-colors text-sm"
                >
                  ← Previous
                </button>
                <span className="text-yellow-400 font-semibold text-sm">
                  Hint {currentHint + 1} of {puzzle.hints.length}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentHint((h) => Math.min(puzzle.hints.length - 1, h + 1))}
                  disabled={currentHint === puzzle.hints.length - 1}
                  className="px-3 py-1.5 bg-yellow-700 hover:bg-yellow-600 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded transition-colors text-sm"
                >
                  Next →
                </button>
              </div>
              <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-sm md:text-base text-yellow-100">{puzzle.hints[currentHint]}</p>
              </div>
            </div>
          </CollapsibleSection>
        )}

        {/* Solution checker */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-800 p-4 md:p-6 rounded-lg mb-6 md:mb-8 border-2 border-purple-500 shadow-lg shadow-purple-900/50">
          <h2 className="text-xl md:text-2xl font-bold text-purple-400 mb-3 md:mb-4 flex items-center">
            <span className="text-2xl mr-2">✅</span>
            Check Your Solution
          </h2>

          {checkResult === 'correct' ? (
            <div className="bg-green-900/30 border-2 border-green-500 rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Correct!</h3>
              <p className="text-green-100 mb-4">Rook Pemberton would be proud.</p>
              {narrativeAfter.map((n, i) => (
                <NarrativePanel key={`after-${i}`} narrative={n} chapterThemeColor={themeColor} />
              ))}
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                {hasNext ? (
                  <button
                    type="button"
                    onClick={() => navigate(`/story/${chapterId}/${nextIndex}`)}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
                  >
                    Next Puzzle →
                  </button>
                ) : null}
                <Link
                  to={`/story/${chapterId}`}
                  className="inline-block px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors"
                >
                  Back to Chapter
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-purple-100 mb-4 text-sm md:text-base">
                Select your solution and check your answer:
              </p>
              <div className={`grid gap-4 mb-4 ${hasMotives ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
                <div>
                  <label className="block text-purple-300 font-semibold mb-2 text-sm">Suspect</label>
                  <select
                    value={selectedSuspect}
                    onChange={(e) => setSelectedSuspect(e.target.value)}
                    className="w-full bg-gray-800 text-white border-2 border-purple-500/50 rounded-lg p-2 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">-- Select --</option>
                    {puzzle.suspects.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-purple-300 font-semibold mb-2 text-sm">Weapon</label>
                  <select
                    value={selectedWeapon}
                    onChange={(e) => setSelectedWeapon(e.target.value)}
                    className="w-full bg-gray-800 text-white border-2 border-purple-500/50 rounded-lg p-2 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">-- Select --</option>
                    {puzzle.weapons.map((w) => (
                      <option key={w.name} value={w.name}>{w.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-purple-300 font-semibold mb-2 text-sm">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-gray-800 text-white border-2 border-purple-500/50 rounded-lg p-2 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">-- Select --</option>
                    {puzzle.locations.map((loc) => (
                      <option key={loc.name} value={loc.name}>{loc.name}</option>
                    ))}
                  </select>
                </div>
                {hasMotives && (
                  <div>
                    <label className="block text-purple-300 font-semibold mb-2 text-sm">Motive</label>
                    <select
                      value={selectedMotive}
                      onChange={(e) => setSelectedMotive(e.target.value)}
                      className="w-full bg-gray-800 text-white border-2 border-purple-500/50 rounded-lg p-2 focus:border-purple-500 focus:outline-none"
                    >
                      <option value="">-- Select --</option>
                      {puzzle.motives!.map((m) => (
                        <option key={m.name} value={m.name}>{m.name}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={handleCheckSolution}
                disabled={!canCheck}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold py-3 rounded-lg transition-colors mb-4"
              >
                Check Solution
              </button>
              {checkResult === 'incorrect' && (
                <div className="bg-red-900/30 border-2 border-red-500 rounded-lg p-4 mb-4">
                  <p className="text-red-100 font-semibold">
                    ❌ Not quite right.{' '}
                    {puzzle.difficulty === 'easy' ? 'No hints for this one — pure deduction!' : 'Hints unlocked above.'}
                  </p>
                </div>
              )}
              {checkResult === 'incorrect' && (
                <button
                  type="button"
                  onClick={() => setShowSolution(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors text-sm"
                >
                  Give Up — Reveal Solution
                </button>
              )}
            </div>
          )}
        </div>

        {showSolution && (
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-4 md:p-6 rounded-lg mb-6 md:mb-8 border-2 border-red-500 shadow-lg shadow-red-900/50">
            <h2 className="text-xl md:text-2xl font-bold text-red-400 mb-3 md:mb-4 flex items-center">
              <span className="text-2xl mr-2">🔓</span>
              Solution Revealed
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center text-base md:text-lg">
                <span className="font-bold text-red-300 mr-3 w-24">Suspect:</span>
                <span className="text-white">{puzzle.solution.suspect}</span>
              </div>
              <div className="flex items-center text-base md:text-lg">
                <span className="font-bold text-red-300 mr-3 w-24">Weapon:</span>
                <span className="text-white">{puzzle.solution.weapon}</span>
              </div>
              <div className="flex items-center text-base md:text-lg">
                <span className="font-bold text-red-300 mr-3 w-24">Location:</span>
                <span className="text-white">{puzzle.solution.location}</span>
              </div>
              {puzzle.solution.motive && (
                <div className="flex items-center text-base md:text-lg">
                  <span className="font-bold text-red-300 mr-3 w-24">Motive:</span>
                  <span className="text-white">{puzzle.solution.motive}</span>
                </div>
              )}
            </div>
            <div className="mt-6 flex gap-3">
              {hasNext && (
                <button
                  type="button"
                  onClick={() => navigate(`/story/${chapterId}/${nextIndex}`)}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
                >
                  Next Puzzle →
                </button>
              )}
              <Link to={`/story/${chapterId}`} className="inline-block px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors">
                Back to Chapter
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
