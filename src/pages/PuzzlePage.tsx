import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { puzzles } from '../data/puzzles';
import CollapsibleSection from '../components/CollapsibleSection';
import SuspectsCard from '../components/SuspectsCard';
import WeaponsCard from '../components/WeaponsCard';
import LocationsCard from '../components/LocationsCard';
import LogicGrid from '../components/LogicGrid';
import StatementsSection from '../components/StatementsSection';
import type { GridCell } from '../types/puzzle';
import { useTimer } from '../hooks/useTimer';
import { STORAGE_KEYS } from '../constants';
import { Layout } from '../components/Layout';
import useSound from 'use-sound';

export default function PuzzlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const puzzle = puzzles.find((p) => p.id === id);

  const [showSolution, setShowSolution] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [checkResult, setCheckResult] = useState<'correct' | 'incorrect' | null>(null);

  // Timer integration
  const { seconds, formattedTime, stop: stopTimer, reset: resetTimer, isRunning } = useTimer();

  // Sound effects
  const [playSuccess] = useSound('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3', { volume: 0.5, html5: true });
  const [playFailure] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.3, html5: true });

  // Load grid state from localStorage
  const [grid, setGrid] = useState<Record<string, GridCell>>(() => {
    if (!id) return {};
    const saved = localStorage.getItem(STORAGE_KEYS.GRID_STATE(id));
    return saved ? JSON.parse(saved) : {};
  });

  // Load hints unlocked state from localStorage
  const [hintsUnlocked, setHintsUnlocked] = useState(() => {
    if (!id) return false;
    return localStorage.getItem(STORAGE_KEYS.HINTS_UNLOCKED(id)) === 'true';
  });

  // Solution checker state
  const [selectedSuspect, setSelectedSuspect] = useState('');
  const [selectedWeapon, setSelectedWeapon] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Scroll to top and reset timer on puzzle change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    resetTimer();
  }, [id, resetTimer]);

  // Save grid state to localStorage whenever it changes
  useEffect(() => {
    if (id) {
      localStorage.setItem(STORAGE_KEYS.GRID_STATE(id), JSON.stringify(grid));
    }
  }, [grid, id]);

  // Save hints unlocked state to localStorage
  useEffect(() => {
    if (id) {
      localStorage.setItem(STORAGE_KEYS.HINTS_UNLOCKED(id), hintsUnlocked.toString());
    }
  }, [hintsUnlocked, id]);

  const handleCellClick = (key: string) => {
    setGrid((prev) => {
      const current = prev[key] || 'empty';
      const next = current === 'empty' ? 'cross' : current === 'cross' ? 'check' : 'empty';
      return { ...prev, [key]: next };
    });
  };

  const handleCheckSolution = () => {
    if (!puzzle || !selectedSuspect || !selectedWeapon || !selectedLocation) {
      return;
    }

    const isCorrect =
      selectedSuspect === puzzle.solution.suspect &&
      selectedWeapon === puzzle.solution.weapon &&
      selectedLocation === puzzle.solution.location;

    setCheckResult(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      playSuccess();
      // Stop timer on correct solution
      stopTimer();

      // Save best time to localStorage
      const currentBest = localStorage.getItem(STORAGE_KEYS.BEST_TIME(puzzle.id));
      if (!currentBest || seconds < parseInt(currentBest)) {
        localStorage.setItem(STORAGE_KEYS.BEST_TIME(puzzle.id), seconds.toString());
      }
    } else {
      playFailure();
      // Unlock hints on first incorrect attempt
      setHintsUnlocked(true);
    }
  };

  if (!puzzle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Puzzle Not Found</h2>
          <p className="text-gray-300 mb-4">The puzzle you are looking for does not exist.</p>
          <Link to="/" className="text-red-400 hover:text-red-300 underline">
            Return to Puzzle List
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyBadgeColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-900/30 border-green-500/50 text-green-400';
      case 'medium':
        return 'bg-yellow-900/30 border-yellow-500/50 text-yellow-400';
      case 'hard':
        return 'bg-red-900/30 border-red-500/50 text-red-400';
      case 'ludicrous':
        return 'bg-purple-900/30 border-purple-500/50 text-purple-400';
      default:
        return 'bg-gray-900/30 border-gray-500/50 text-gray-400';
    }
  };

  return (
    <Layout maxWidth="6xl">
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-4 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to All Puzzles
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">{puzzle.title}</h1>
            <div className="flex items-center gap-3">
              <span className={`inline-block px-4 py-2 rounded-lg border-2 font-bold text-sm uppercase tracking-wider ${getDifficultyBadgeColor(puzzle.difficulty)}`}>
                {puzzle.difficulty}
              </span>
              {/* Timer Display */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-bold text-sm ${isRunning
                ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500/50 text-blue-600 dark:text-blue-400'
                : 'bg-gray-100 dark:bg-gray-900/30 border-gray-400/50 text-gray-500 dark:text-gray-400'
                }`}>
                <span>⏱️</span>
                <span className="font-mono">{formattedTime}</span>
              </div>
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{puzzle.backstory}</p>
        </div>

        {/* Card-Based Layout - Suspects, Weapons, Locations */}
        <SuspectsCard suspects={puzzle.suspects} />
        <WeaponsCard weapons={puzzle.weapons} />
        <LocationsCard locations={puzzle.locations} />

        {/* Clues Section */}
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

        {/* Statements Section */}
        {puzzle.statements && puzzle.statements.length > 0 && (
          <StatementsSection statements={puzzle.statements} />
        )}

        {/* Logic Grid */}
        <LogicGrid
          suspects={puzzle.suspects}
          weapons={puzzle.weapons}
          locations={puzzle.locations}
          grid={grid}
          onCellClick={handleCellClick}
        />

        {/* Hints Section - Only shows after incorrect attempt */}
        {hintsUnlocked && (
          <CollapsibleSection
            title="Hints (Unlocked)"
            titleColor="text-yellow-400"
            borderColor="border-yellow-400"
            defaultOpen={true}
          >
            <div className="mb-4">
              <p className="text-yellow-200 text-sm mb-3 italic">
                💡 Not quite right? Here are some hints to help you solve the mystery:
              </p>
              <div className="flex items-center gap-3 mb-3">
                <button
                  onClick={() => setCurrentHint(Math.max(0, currentHint - 1))}
                  disabled={currentHint === 0}
                  className="px-3 py-1.5 bg-yellow-700 hover:bg-yellow-600 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded transition-colors text-sm"
                >
                  ← Previous
                </button>
                <span className="text-yellow-400 font-semibold text-sm">
                  Hint {currentHint + 1} of {puzzle.hints.length}
                </span>
                <button
                  onClick={() => setCurrentHint(Math.min(puzzle.hints.length - 1, currentHint + 1))}
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

        {/* Solution Checker Section */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-800 p-4 md:p-6 rounded-lg mb-6 md:mb-8 border-2 border-purple-500 shadow-lg shadow-purple-900/50">
          <h2 className="text-xl md:text-2xl font-bold text-purple-400 mb-3 md:mb-4 flex items-center">
            <span className="text-2xl mr-2">✅</span>
            Check Your Solution
          </h2>

          {checkResult === 'correct' ? (
            <div className="bg-green-900/30 border-2 border-green-500 rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Correct!</h3>
              <p className="text-green-100 mb-4">You solved the mystery! Detective Finch is impressed.</p>
              <button
                onClick={() => navigate('/puzzles')}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
              >
                Solve Another Puzzle
              </button>
            </div>
          ) : (
            <div>
              <p className="text-purple-100 mb-4 text-sm md:text-base">
                Think you've cracked the case? Select your suspects and check your answer:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {/* Suspect Dropdown */}
                <div>
                  <label className="block text-purple-300 font-semibold mb-2 text-sm">Suspect</label>
                  <select
                    value={selectedSuspect}
                    onChange={(e) => setSelectedSuspect(e.target.value)}
                    className="w-full bg-gray-800 text-white border-2 border-purple-500/50 rounded-lg p-2 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">-- Select Suspect --</option>
                    {puzzle.suspects.map((suspect) => (
                      <option key={suspect.name} value={suspect.name}>
                        {suspect.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Weapon Dropdown */}
                <div>
                  <label className="block text-purple-300 font-semibold mb-2 text-sm">Weapon</label>
                  <select
                    value={selectedWeapon}
                    onChange={(e) => setSelectedWeapon(e.target.value)}
                    className="w-full bg-gray-800 text-white border-2 border-purple-500/50 rounded-lg p-2 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">-- Select Weapon --</option>
                    {puzzle.weapons.map((weapon) => (
                      <option key={weapon.name} value={weapon.name}>
                        {weapon.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Dropdown */}
                <div>
                  <label className="block text-purple-300 font-semibold mb-2 text-sm">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-gray-800 text-white border-2 border-purple-500/50 rounded-lg p-2 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">-- Select Location --</option>
                    {puzzle.locations.map((location) => (
                      <option key={location.name} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Check Solution Button */}
              <button
                onClick={handleCheckSolution}
                disabled={!selectedSuspect || !selectedWeapon || !selectedLocation}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold py-3 rounded-lg transition-colors mb-4"
              >
                Check Solution
              </button>

              {/* Incorrect Feedback */}
              {checkResult === 'incorrect' && (
                <div className="bg-red-900/30 border-2 border-red-500 rounded-lg p-4 mb-4">
                  <p className="text-red-100 font-semibold">❌ Not quite right. Hints have been unlocked above to help you!</p>
                </div>
              )}

              {/* Give Up Button */}
              {checkResult === 'incorrect' && (
                <button
                  onClick={() => setShowSolution(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors text-sm"
                >
                  Give Up - Reveal Solution
                </button>
              )}
            </div>
          )}
        </div>

        {/* Solution Section (Only shows after giving up) */}
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
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}