import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PuzzleGrid from '../components/PuzzleGrid';
import SolutionForm from '../components/SolutionForm';
import CollapsibleSection from '../components/CollapsibleSection';
import StatementsSection from '../components/StatementsSection';
import { puzzles } from '../data/puzzles';
import { usePuzzleGrid } from '../hooks/usePuzzleGrid';
import { useTimer } from '../hooks/useTimer';

export default function PuzzlePage() {
  const { puzzleId } = useParams<{ puzzleId: string }>();
  const navigate = useNavigate();
  
  // Find the puzzle by ID, fallback to first puzzle if not found
  const puzzle = puzzles.find(p => p.id === puzzleId) || puzzles[0];
  
  // Find the next puzzle
  const currentIndex = puzzles.findIndex(p => p.id === puzzle.id);
  const nextPuzzle = puzzles[currentIndex + 1];

  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [solveTime, setSolveTime] = useState<number>(0);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [showGiveUpConfirm, setShowGiveUpConfirm] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);

  const timer = useTimer();

  const {
    suspectWeaponGrid,
    setSuspectWeaponGrid,
    suspectLocationGrid,
    setSuspectLocationGrid,
    weaponLocationGrid,
    setWeaponLocationGrid,
    resetGrids
  } = usePuzzleGrid({
    suspectCount: puzzle.suspects.length,
    weaponCount: puzzle.weapons.length,
    locationCount: puzzle.locations.length
  });

  // Reset state when puzzle changes
  useEffect(() => {
    setShowResult(false);
    setIsCorrect(false);
    setGaveUp(false);
    setHintsUsed(0);
    setIsNewRecord(false);
    setShowGiveUpConfirm(false);
    setRedirectCountdown(null);
    resetGrids();
    timer.reset();
  }, [puzzleId]);

  // Scroll to top when puzzle changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [puzzleId]);

  // Check if first visit for tutorial
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('sleuthwork-tutorial-seen');
    if (!hasSeenTutorial) {
      setShowTutorial(true);
    }
  }, []);

  // Countdown timer for redirect after giving up
  useEffect(() => {
    if (redirectCountdown === null) return;

    if (redirectCountdown === 0) {
      navigate('/');
      return;
    }

    const timer = setTimeout(() => {
      setRedirectCountdown(redirectCountdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [redirectCountdown, navigate]);

  // Add Escape key listener for closing modals
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showGiveUpConfirm) {
          setShowGiveUpConfirm(false);
        } else if (showResult && !gaveUp) {
          setShowResult(false);
        } else if (showTutorial) {
          closeTutorial();
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showResult, showGiveUpConfirm, showTutorial, gaveUp]);

  // Get best time from localStorage
  const getBestTime = (): number | null => {
    const stored = localStorage.getItem(`best-time-${puzzle.id}`);
    return stored ? parseInt(stored) : null;
  };

  // Save best time to localStorage
  const saveBestTime = (time: number) => {
    const currentBest = getBestTime();
    if (currentBest === null || time < currentBest) {
      localStorage.setItem(`best-time-${puzzle.id}`, time.toString());
      return true; // New record!
    }
    return false;
  };

  const handleSubmitSolution = (guess: { suspect: string; weapon: string; location: string }) => {
    const correct = 
      guess.suspect === puzzle.solution.suspect &&
      guess.weapon === puzzle.solution.weapon &&
      guess.location === puzzle.solution.location;

    if (correct) {
      timer.stop();
      setSolveTime(timer.seconds);
      const newRecord = saveBestTime(timer.seconds);
      setIsNewRecord(newRecord);
    }

    setIsCorrect(correct);
    setGaveUp(false);
    setShowResult(true);
  };

  const resetPuzzle = () => {
    setShowResult(false);
    setIsCorrect(false);
    setGaveUp(false);
    setHintsUsed(0);
    setIsNewRecord(false);
    resetGrids();
    timer.reset();
    
    setTimeout(() => {
      document.getElementById('clues-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const getNextHint = () => {
    setShowResult(false);
    setHintsUsed(prev => prev + 1);
    
    setTimeout(() => {
      document.getElementById('hints-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const confirmGiveUp = () => {
    timer.stop();
    setGaveUp(true);
    setIsCorrect(false);
    setShowResult(true);
    setShowGiveUpConfirm(false);
    setRedirectCountdown(3);
  };

  const closeTutorial = () => {
    localStorage.setItem('sleuthwork-tutorial-seen', 'true');
    setShowTutorial(false);
  };

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const bestTime = getBestTime();

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <Link to="/" className="inline-block text-sm md:text-base text-blue-400 hover:text-blue-300 transition">
            ← Back to Home
          </Link>
          
          {/* Timer Display */}
          <div className="flex items-center gap-4">
            {bestTime !== null && (
              <div className="text-xs md:text-sm text-gray-400">
                Best: <span className="text-green-400 font-semibold">{formatTime(bestTime)}</span>
              </div>
            )}
            <div className="bg-gray-800 px-3 md:px-4 py-2 rounded-lg border-2 border-blue-500">
              <div className="text-xs md:text-sm text-gray-400">Time</div>
              <div className="text-lg md:text-2xl font-bold text-white font-mono">{timer.formattedTime}</div>
            </div>
          </div>
        </div>
        
        {/* Detective Badge */}
        <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-lg p-3 mb-3 flex items-center gap-3">
          <div className="text-3xl">🦅</div>
          <div>
            <div className="text-sm font-semibold text-purple-300">Detective Marlowe Finch</div>
            <div className="text-xs text-gray-400">Evidence (the raven) is watching your deductions...</div>
          </div>
        </div>
        
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">{puzzle.title}</h1>
        
        {/* Collapsible Backstory */}
        <CollapsibleSection 
          title="The Crime" 
          titleColor="text-amber-400" 
          borderColor="border-amber-400"
          defaultOpen={true}
        >
          <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-2 md:space-y-3">
            {puzzle.backstory.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
          </div>
        </CollapsibleSection>

        {/* Collapsible Suspects */}
       {/* Collapsible Suspects */}
       <CollapsibleSection 
          title="Suspects" 
          titleColor="text-red-400" 
          borderColor="border-red-400"
          defaultOpen={true}
        >
          <div className="space-y-3 md:space-y-4">
            {puzzle.suspects.map((suspect, idx) => (
              <div key={idx} className="border-l-4 border-red-500 pl-3 md:pl-4">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{suspect.name}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-2">{suspect.bio}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <span className="bg-gray-800 px-2 py-1 rounded">{suspect.height}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{suspect.build}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{suspect.eyeColor}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{suspect.hairColor}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{suspect.handedness}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{suspect.age}</span>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Collapsible Weapons */}
        {/* Collapsible Weapons */}
        <CollapsibleSection 
          title="Weapons" 
          titleColor="text-orange-400" 
          borderColor="border-orange-400"
          defaultOpen={true}
        >
          <div className="space-y-3 md:space-y-4">
            {puzzle.weapons.map((weapon, idx) => (
              <div key={idx} className="border-l-4 border-orange-500 pl-3 md:pl-4">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{weapon.name}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-2">{weapon.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <span className="bg-gray-800 px-2 py-1 rounded">{weapon.weight}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{weapon.type}</span>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Collapsible Locations */}
        {/* Collapsible Locations */}
        <CollapsibleSection 
          title="Locations" 
          titleColor="text-blue-400" 
          borderColor="border-blue-400"
          defaultOpen={true}
        >
          <div className="space-y-3 md:space-y-4">
            {puzzle.locations.map((location, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-3 md:pl-4">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{location.name}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-2">{location.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <span className="bg-gray-800 px-2 py-1 rounded">{location.setting}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{location.access}</span>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Clues - ALWAYS VISIBLE, HIGHLIGHTED */}
        <div id="clues-section" className="bg-gradient-to-br from-green-900 to-green-800 p-4 md:p-6 rounded-lg mb-6 md:mb-8 border-2 border-green-500 shadow-lg shadow-green-900/50">
          <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-3 md:mb-4 flex items-center">
            <span className="text-2xl mr-2">🔍</span>
            Clues - Use These to Solve the Mystery
          </h2>
          <ul className="space-y-2">
            {puzzle.clues.map((clue, idx) => (
              <li key={idx} className="text-sm md:text-base text-white flex bg-green-950/50 p-2 rounded">
                <span className="text-green-400 font-bold mr-2 shrink-0">{idx + 1}.</span>
                <span className="font-medium">{clue}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Statements Section */}
        {puzzle.statements && puzzle.statements.length > 0 && (
          <StatementsSection statements={puzzle.statements} />
        )}
        {/* Hints Section */}
        {hintsUsed > 0 && (
          <div id="hints-section" className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-2 border-yellow-500 p-4 md:p-6 rounded-lg mb-6 md:mb-8 animate-fadeIn shadow-lg shadow-yellow-900/50">
            <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Hints ({hintsUsed}/{puzzle.hints.length})
            </h2>
            <ul className="space-y-2">
              {puzzle.hints.slice(0, hintsUsed).map((hint, idx) => (
                <li key={idx} className="text-sm md:text-base text-yellow-50 flex bg-yellow-950/50 p-2 rounded">
                  <span className="text-yellow-400 font-bold mr-2 shrink-0">{idx + 1}.</span>
                  <span>{hint}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <PuzzleGrid
          suspects={puzzle.suspects.map(s => s.name)}
          weapons={puzzle.weapons.map(w => w.name)}
          locations={puzzle.locations.map(l => l.name)}
          suspectWeaponGrid={suspectWeaponGrid}
          setSuspectWeaponGrid={setSuspectWeaponGrid}
          suspectLocationGrid={suspectLocationGrid}
          setSuspectLocationGrid={setSuspectLocationGrid}
          weaponLocationGrid={weaponLocationGrid}
          setWeaponLocationGrid={setWeaponLocationGrid}
        />

        <div className="mt-6 md:mt-8">
          <SolutionForm
            suspects={puzzle.suspects.map(s => s.name)}
            weapons={puzzle.weapons.map(w => w.name)}
            locations={puzzle.locations.map(l => l.name)}
            onSubmit={handleSubmitSolution}
          />
        </div>

        {showResult && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fadeIn">
            {gaveUp ? (
              // GAVE UP MODAL - Show countdown then redirect
              <div className="max-w-md w-full p-6 md:p-8 rounded-lg bg-gray-800 border-4 border-gray-600 animate-slideUp">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-300">🏳️ Case Abandoned</h2>
                <p className="text-base md:text-lg text-gray-300 mb-4">
                  Detective Finch understands - sometimes the yarn gets too tangled. The mystery remains unsolved, but that's the nature of detective work.
                </p>
                <p className="text-sm text-gray-400 mb-6 italic">
                  "Evidence (the raven) is judging you, but he's seen worse." - Det. Finch
                </p>
                
                {/* Countdown */}
                <div className="bg-gray-950/50 border border-gray-600 rounded-lg p-4 mb-4 text-center">
                  <p className="text-gray-300 text-sm mb-2">Returning to headquarters...</p>
                  <div className="text-4xl font-bold text-blue-400 font-mono">{redirectCountdown}</div>
                </div>

                {hintsUsed > 0 && (
                  <p className="text-sm text-gray-400 text-center">Hints used: {hintsUsed}/{puzzle.hints.length}</p>
                )}
              </div>
            ) : isCorrect ? (
              // SUCCESS MODAL - Congratulations, stats, navigation
              <div className="max-w-md w-full p-6 md:p-8 rounded-lg bg-green-900 border-4 border-green-500 animate-slideUp">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-green-400 animate-bounce">🎉 Case Solved!</h2>
                
                {/* New Record Badge */}
                {isNewRecord && (
                  <div className="bg-yellow-500 text-yellow-950 font-bold py-2 px-4 rounded-lg mb-3 text-center animate-pulse">
                    🏆 NEW RECORD! 🏆
                  </div>
                )}
                
                <p className="text-base md:text-lg text-white mb-3">
                  Excellent work, detective! Your deductive reasoning was flawless. {puzzle.solution.suspect} committed 
                  the murder with the {puzzle.solution.weapon} in the {puzzle.solution.location}.
                </p>

                <div className="bg-green-950/50 p-3 rounded-lg mb-3 border border-green-500/30">
                  <p className="text-sm text-green-200 italic">
                    "Evidence approves of your yarn board technique." - Det. Marlowe Finch
                  </p>
                </div>

                {/* Stats */}
                <div className="bg-green-950/50 p-3 md:p-4 rounded-lg mb-4 md:mb-6 space-y-2">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-green-200">Solve Time:</span>
                    <span className="text-white font-bold font-mono">{formatTime(solveTime)}</span>
                  </div>
                  {bestTime !== null && !isNewRecord && (
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-green-200">Best Time:</span>
                      <span className="text-green-400 font-bold font-mono">{formatTime(bestTime)}</span>
                    </div>
                  )}
                  {hintsUsed > 0 && (
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-green-200">Hints Used:</span>
                      <span className="text-white font-bold">{hintsUsed}/{puzzle.hints.length}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button onClick={() => setShowResult(false)} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 text-sm md:text-base">
                    Close
                  </button>
                  {nextPuzzle ? (
                    <button 
                      onClick={() => navigate(`/puzzle/${nextPuzzle.id}`)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 text-sm md:text-base"
                    >
                      Next Puzzle →
                    </button>
                  ) : (
                    <button 
                      onClick={() => navigate('/puzzles')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 text-sm md:text-base"
                    >
                      Browse Puzzles
                    </button>
                  )}
                </div>
              </div>
            ) : (
              // INCORRECT MODAL - Keep existing options
              <div className="max-w-md w-full p-6 md:p-8 rounded-lg bg-red-900 border-4 border-red-500 animate-slideUp">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-red-400">❌ Incorrect</h2>
                <p className="text-base md:text-lg text-white mb-4 md:mb-6">Not quite right. What would you like to do?</p>
                <div className="space-y-3">
                  <button onClick={resetPuzzle} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 text-sm md:text-base">
                    🔄 Try Again (Reset Puzzle)
                  </button>
                  {hintsUsed < puzzle.hints.length ? (
                    <button onClick={getNextHint} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 text-sm md:text-base">
                      💡 Get a Hint ({hintsUsed}/{puzzle.hints.length} used)
                    </button>
                  ) : (
                    <button disabled className="w-full bg-gray-700 text-gray-500 font-bold py-3 rounded-lg cursor-not-allowed text-sm md:text-base">
                      💡 No More Hints Available
                    </button>
                  )}
                  <button 
                    onClick={() => setShowGiveUpConfirm(true)} 
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 border-2 border-gray-500 text-sm md:text-base"
                  >
                    🏳️ Give Up
                  </button>
                </div>
                <button onClick={() => setShowResult(false)} className="w-full mt-3 md:mt-4 text-gray-400 hover:text-white py-2 transition text-sm md:text-base">
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}

        {/* Give Up Confirmation Modal */}
        {showGiveUpConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="max-w-md w-full p-6 md:p-8 rounded-lg bg-gray-800 border-4 border-yellow-600 animate-slideUp">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-yellow-400">⚠️ Are You Sure?</h2>
              <p className="text-base md:text-lg text-gray-300 mb-4">
                If you give up, you won't see the answer. The mystery will remain unsolved.
              </p>
              <div className="bg-yellow-950/30 border border-yellow-600/30 rounded-lg p-3 mb-6">
                <p className="text-sm text-yellow-200 italic">
                  "Evidence (the raven) believes you can solve this. But it's your choice." - Det. Finch
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setShowGiveUpConfirm(false)} 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 text-sm md:text-base"
                >
                  Keep Trying
                </button>
                <button 
                  onClick={confirmGiveUp} 
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 border-2 border-gray-500 text-sm md:text-base"
                >
                  Yes, Give Up
                </button>
              </div>
            </div>
          </div>
        )}

        {/* First-Time Tutorial Modal */}
        {showTutorial && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="max-w-2xl w-full p-6 md:p-8 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-purple-500 animate-slideUp overflow-y-auto max-h-[90vh]">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🦅</div>
                <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">Welcome to Sleuthwork!</h2>
                <p className="text-gray-300">Detective Marlowe Finch here. Let me show you the ropes.</p>
              </div>

              {/* How to Play */}
              <div className="bg-gray-950/50 rounded-lg p-4 mb-4 border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
                  <span>🎯</span> How to Play
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-3">
                  You'll use <strong>logic grids</strong> to eliminate possibilities and find the killer. 
                  Click cells to mark them:
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-green-600/20 border border-green-500/30 rounded p-2">
                    <div className="text-2xl mb-1">✓</div>
                    <div className="text-xs text-green-300">Mark as TRUE</div>
                  </div>
                  <div className="bg-red-600/20 border border-red-500/30 rounded p-2">
                    <div className="text-2xl mb-1">✗</div>
                    <div className="text-xs text-red-300">Mark as FALSE</div>
                  </div>
                </div>
              </div>

              {/* The Clues */}
              <div className="bg-gray-950/50 rounded-lg p-4 mb-4 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-300 mb-3 flex items-center gap-2">
                  <span>🔍</span> The Clues
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Read the clues carefully. Each one gives you information to eliminate possibilities. 
                  For example: <em>"Alice was not in the Kitchen"</em> means you can mark that cell with an ✗.
                </p>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="bg-gray-950/50 rounded-lg p-4 mb-4 border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-300 mb-3 flex items-center gap-2">
                  <span>⌨️</span> Keyboard Shortcuts
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                  <div className="text-gray-300"><kbd className="bg-gray-700 px-2 py-1 rounded">Arrow Keys</kbd> Navigate</div>
                  <div className="text-gray-300"><kbd className="bg-gray-700 px-2 py-1 rounded">Space/Enter</kbd> Toggle</div>
                  <div className="text-gray-300"><kbd className="bg-gray-700 px-2 py-1 rounded">Tab/Click</kbd> Switch grids</div>
                  <div className="text-gray-300"><kbd className="bg-gray-700 px-2 py-1 rounded">Esc</kbd> Close modals</div>
                </div>
              </div>

              {/* Need Help? */}
              <div className="bg-yellow-950/30 rounded-lg p-4 mb-6 border border-yellow-500/30">
                <h3 className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
                  <span>💡</span> Need Help?
                </h3>
                <p className="text-gray-300 text-sm">
                  If you get stuck, you can request hints. But try solving it yourself first - 
                  that's where the real detective work happens!
                </p>
              </div>

              {/* Quote */}
              <div className="bg-purple-950/30 rounded-lg p-3 mb-6 border-l-4 border-purple-500">
                <p className="text-purple-200 text-sm italic">
                  "Remember: every puzzle is solvable with logic alone. Trust your reasoning, 
                  and Evidence (the raven) will be proud." - Det. Marlowe Finch
                </p>
              </div>

              <button 
                onClick={closeTutorial}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg shadow-lg"
              >
                Start Your First Case! 🚀
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}