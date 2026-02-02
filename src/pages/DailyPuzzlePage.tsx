import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDailyPuzzle } from '../hooks/useDailyPuzzle';
import { useTimer } from '../hooks/useTimer';
import CollapsibleSection from '../components/CollapsibleSection';
import SuspectsCard from '../components/SuspectsCard';
import WeaponsCard from '../components/WeaponsCard';
import LocationsCard from '../components/LocationsCard';
import LogicGrid from '../components/LogicGrid';
import StatementsSection from '../components/StatementsSection';
import { formatDateString, getTimeUntilMidnight, getTodayDateString } from '../utils/dateUtils';
import { formatShareText, copyToClipboard } from '../utils/shareUtils';
import { Share2, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import useSound from 'use-sound';

export default function DailyPuzzlePage() {
    const { date } = useParams<{ date: string }>();
    const {
        puzzle,
        currentDate,
        isCompleted,
        gridState,
        timeElapsed,
        streak,
        markComplete,
        updateGridState,
    } = useDailyPuzzle(date);

    const { seconds, formattedTime, stop: stopTimer, isRunning } = useTimer();

    // Sound effects
    const [playSuccess] = useSound('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3', { volume: 0.5, html5: true });
    const [playFailure] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.3, html5: true });

    const [showSolution, setShowSolution] = useState(false);
    const [currentHint, setCurrentHint] = useState(0);
    const [hintsUnlocked, setHintsUnlocked] = useState(false);

    // Solution checker state
    const [selectedSuspect, setSelectedSuspect] = useState('');
    const [selectedWeapon, setSelectedWeapon] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [checkResult, setCheckResult] = useState<'correct' | 'incorrect' | null>(null);

    // Countdown to next puzzle
    const [timeUntilNext, setTimeUntilNext] = useState(getTimeUntilMidnight());
    const [shareCopied, setShareCopied] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Update countdown every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeUntilNext(getTimeUntilMidnight());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // If already completed, stop timer
    useEffect(() => {
        if (isCompleted && isRunning) {
            stopTimer();
        }
    }, [isCompleted, isRunning, stopTimer]);

    const handleCellClick = (key: string) => {
        if (isCompleted) return; // Don't allow changes after completion

        const current = gridState[key] || 'empty';
        const next = current === 'empty' ? 'cross' : current === 'cross' ? 'check' : 'empty';
        updateGridState({ ...gridState, [key]: next });
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
            // Stop timer and mark complete
            stopTimer();
            markComplete(seconds);
        } else {
            playFailure();
            // Unlock hints on first incorrect attempt
            setHintsUnlocked(true);
        }
    };

    const handleShare = async () => {
        const text = formatShareText(currentDate, timeElapsed, streak);
        const success = await copyToClipboard(text);
        if (success) {
            setShareCopied(true);
            setTimeout(() => setShareCopied(false), 2000);
        }
    };

    const getDifficultyBadgeColor = (difficulty: string) => {
        switch (difficulty) {
            case 'easy':
                return 'bg-green-900/30 border-green-500 text-green-400';
            case 'medium':
                return 'bg-yellow-900/30 border-yellow-500 text-yellow-400';
            case 'hard':
                return 'bg-red-900/30 border-red-500 text-red-400';
            default:
                return 'bg-gray-900/30 border-gray-500 text-gray-400';
        }
    };

    // If completed, show completion screen
    if (isCompleted) {
        return (
            <Layout maxWidth="4xl">
                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="bg-white/70 dark:bg-gradient-to-br dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 border-2 border-green-500/50 rounded-lg p-8 text-center shadow-xl backdrop-blur-sm"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                            className="text-6xl mb-4"
                        >
                            🎉
                        </motion.div>
                        <h1 className="text-4xl font-bold text-green-400 mb-4">
                            Daily Puzzle Complete!
                        </h1>
                        <p className="text-xl text-gray-300 mb-6">
                            {formatDateString(currentDate)}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/30">
                                <div className="text-4xl mb-2">⏱️</div>
                                <div className="text-2xl font-bold text-purple-400">
                                    {Math.floor(timeElapsed / 60)}:{String(timeElapsed % 60).padStart(2, '0')}
                                </div>
                                <div className="text-sm text-gray-400">Your Time</div>
                            </div>

                            <div className="bg-gray-900/50 rounded-lg p-6 border border-orange-500/30">
                                <div className="text-4xl mb-2">🔥</div>
                                <div className="text-2xl font-bold text-orange-400">{streak}</div>
                                <div className="text-sm text-gray-400">Day Streak</div>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 rounded-lg p-6 border border-blue-500/30 mb-6">
                            <div className="text-lg font-semibold text-blue-400 mb-2">
                                Next Puzzle In:
                            </div>
                            <div className="text-3xl font-mono font-bold text-white">
                                {String(timeUntilNext.hours).padStart(2, '0')}:
                                {String(timeUntilNext.minutes).padStart(2, '0')}:
                                {String(timeUntilNext.seconds).padStart(2, '0')}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleShare}
                                className={`px-6 py-3 font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${shareCopied
                                    ? 'bg-green-600 text-white'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/50 hover:scale-105 active:scale-95'
                                    }`}
                            >
                                {shareCopied ? (
                                    <>
                                        <Check className="w-5 h-5" />
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <Share2 className="w-5 h-5" />
                                        Share Results
                                    </>
                                )}
                            </button>
                            <button
                                onClick={() => setShowSolution(!showSolution)}
                                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
                            >
                                {showSolution ? 'Hide Solution' : 'View Solution'}
                            </button>
                            <Link
                                to="/"
                                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors text-center"
                            >
                                Browse All Puzzles
                            </Link>
                        </div>

                        {showSolution && (
                            <div className="mt-8 bg-gray-900/50 rounded-lg p-6 border border-green-500/30 text-left">
                                <h3 className="text-xl font-bold text-green-400 mb-4">Solution:</h3>
                                <div className="space-y-2 text-gray-300">
                                    <p><span className="font-semibold text-purple-400">Suspect:</span> {puzzle.solution.suspect}</p>
                                    <p><span className="font-semibold text-orange-400">Weapon:</span> {puzzle.solution.weapon}</p>
                                    <p><span className="font-semibold text-blue-400">Location:</span> {puzzle.solution.location}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </Layout>
        );
    }

    // Active puzzle UI
    return (
        <Layout maxWidth="6xl">
            <div className="relative z-10 space-y-6">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border-2 border-purple-500/30 shadow-lg"
                >
                    <div className="flex justify-between items-start mb-4">
                        <Link
                            to="/"
                            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                        >
                            <span className="mr-2">←</span>
                            Back to All Puzzles
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="text-sm text-gray-500 dark:text-gray-400">Daily Puzzle</div>
                                {date && date !== getTodayDateString() && (
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        Archive
                                    </span>
                                )}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">{puzzle.title}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{formatDateString(currentDate)}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={`inline-block px-4 py-2 rounded-lg border-2 font-bold text-sm uppercase tracking-wider ${getDifficultyBadgeColor(puzzle.difficulty)}`}>
                                {puzzle.difficulty}
                            </span>
                            {/* Timer Display */}
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-bold text-sm ${isRunning ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500/50 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-900/30 border-gray-400/50 text-gray-500 dark:text-gray-400'
                                }`}>
                                <span>⏱️</span>
                                <span className="font-mono">{formattedTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Streak Display */}
                    {streak > 0 && (
                        <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-500/30 rounded-lg px-4 py-2 inline-flex items-center gap-2">
                            <span className="text-2xl">🔥</span>
                            <span className="font-bold text-orange-600 dark:text-orange-400">{streak} Day Streak!</span>
                        </div>
                    )}

                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">{puzzle.backstory}</p>
                </motion.div>

                {/* Daily Clues / Evidence Area (Emerald Theme) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-lg border-2 border-green-500 shadow-lg shadow-green-900/50"
                >
                    <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                        <span className="text-2xl mr-2">🔍</span>
                        Daily Evidence
                    </h2>
                    <div className="space-y-4">
                        <SuspectsCard suspects={puzzle.suspects} />
                        <WeaponsCard weapons={puzzle.weapons} />
                        <LocationsCard locations={puzzle.locations} />
                    </div>
                </motion.div>

                {/* Logic Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <LogicGrid
                        suspects={puzzle.suspects}
                        weapons={puzzle.weapons}
                        locations={puzzle.locations}
                        grid={gridState}
                        onCellClick={handleCellClick}
                    />
                </motion.div>

                {/* Statements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <StatementsSection statements={puzzle.statements} />
                </motion.div>

                {/* Hints */}
                <CollapsibleSection title="Hints" titleColor="text-yellow-400" borderColor="border-yellow-500/30" defaultOpen={false}>
                    {!hintsUnlocked ? (
                        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 text-center">
                            <p className="text-yellow-400 font-semibold">
                                💡 Hints will unlock after your first incorrect guess
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-300">
                                    Hint {currentHint + 1} of {puzzle.hints.length}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setCurrentHint(Math.max(0, currentHint - 1))}
                                        disabled={currentHint === 0}
                                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded transition-colors"
                                    >
                                        ← Previous
                                    </button>
                                    <button
                                        onClick={() => setCurrentHint(Math.min(puzzle.hints.length - 1, currentHint + 1))}
                                        disabled={currentHint === puzzle.hints.length - 1}
                                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded transition-colors"
                                    >
                                        Next →
                                    </button>
                                </div>
                            </div>
                            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                                <p className="text-gray-200">{puzzle.hints[currentHint]}</p>
                            </div>
                        </div>
                    )}
                </CollapsibleSection>

                {/* Solution Form (Indigo Theme) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-900 to-indigo-800 p-6 rounded-lg border-2 border-purple-500 shadow-lg shadow-purple-900/50"
                >
                    <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                        <span className="text-2xl mr-2">💼</span>
                        Submit Your Solution
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="suspect" className="block text-sm font-semibold text-purple-300 mb-2">
                                Who is the culprit?
                            </label>
                            <select
                                id="suspect"
                                value={selectedSuspect}
                                onChange={(e) => setSelectedSuspect(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-900 border-2 border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-500"
                            >
                                <option value="">-- Select Suspect --</option>
                                {puzzle.suspects.map((suspect) => (
                                    <option key={suspect.name} value={suspect.name}>
                                        {suspect.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="weapon" className="block text-sm font-semibold text-orange-300 mb-2">
                                What was the weapon?
                            </label>
                            <select
                                id="weapon"
                                value={selectedWeapon}
                                onChange={(e) => setSelectedWeapon(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-900 border-2 border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-500"
                            >
                                <option value="">-- Select Weapon --</option>
                                {puzzle.weapons.map((weapon) => (
                                    <option key={weapon.name} value={weapon.name}>
                                        {weapon.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-sm font-semibold text-blue-300 mb-2">
                                Where did it happen?
                            </label>
                            <select
                                id="location"
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-900 border-2 border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-purple-500"
                            >
                                <option value="">-- Select Location --</option>
                                {puzzle.locations.map((location) => (
                                    <option key={location.name} value={location.name}>
                                        {location.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleCheckSolution}
                            disabled={!selectedSuspect || !selectedWeapon || !selectedLocation}
                            className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-purple-900/50"
                        >
                            Check Solution
                        </button>

                        {checkResult === 'correct' && (
                            <div className="bg-green-900/30 border-2 border-green-500 rounded-lg p-4 text-center">
                                <p className="text-green-400 font-bold text-lg">
                                    🎉 Correct! Well done, Detective!
                                </p>
                            </div>
                        )}

                        {checkResult === 'incorrect' && (
                            <div className="space-y-4 mt-4">
                                <div className="bg-red-900/30 border-2 border-red-500 rounded-lg p-4 text-center">
                                    <p className="text-red-400 font-bold text-lg">
                                        ❌ Not quite right. Keep investigating!
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        // Auto-solves the dropdowns for the user and marks complete
                                        setSelectedSuspect(puzzle.solution.suspect);
                                        setSelectedWeapon(puzzle.solution.weapon);
                                        setSelectedLocation(puzzle.solution.location);
                                        setCheckResult('correct');
                                        stopTimer();
                                        markComplete(seconds);
                                    }}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors text-sm shadow-lg shadow-red-900/50"
                                >
                                    Give Up - Reveal Solution
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
