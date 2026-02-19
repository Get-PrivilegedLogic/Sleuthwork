import { Link } from 'react-router-dom';
import { puzzles as classicPuzzles } from '../data/puzzles';
import { Layout } from '../components/Layout';
import { LAUNCH_EPOCH } from '../constants';
import { getTodayDateString, getDaysSinceLaunch, formatDateString } from '../utils/dateUtils';
import { generatePuzzle } from '../utils/puzzleGenerator';

export default function PuzzleArchive() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'ludicrous': return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/50 animate-pulse';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '⭐';
      case 'medium': return '⭐⭐';
      case 'hard': return '⭐⭐⭐';
      case 'ludicrous': return '💀💀💀💀💀';
      default: return '⭐';
    }
  };

  // Check if puzzle is completed
  const isPuzzleCompleted = (puzzleId: string) => {
    return localStorage.getItem(`best-time-${puzzleId}`) !== null;
  };

  const getBestTime = (puzzleId: string): number | null => {
    const stored = localStorage.getItem(`best-time-${puzzleId}`);
    return stored ? parseInt(stored) : null;
  };

  const today = getTodayDateString();
  const dayNumber = getDaysSinceLaunch(LAUNCH_EPOCH, today);

  // Generate the list of available puzzles
  const availablePuzzles = (() => {
    const list = [];

    // Add all classic puzzles (Founder's Collection)
    for (let i = 0; i < classicPuzzles.length; i++) {
      list.push({ ...classicPuzzles[i], isClassic: true, dayIndex: i + 1 });
    }

    // Add generated puzzles from day 15 up to today
    if (dayNumber > classicPuzzles.length) {
      // Only show a manageable number of generated ones if needed, 
      // but for now, we'll show all up to today.
      for (let i = classicPuzzles.length + 1; i <= dayNumber; i++) {
        // We need a date string for each day.
        // Simplified: we'll use a hacky date calculation or just focus on the count.
        // For the archive, we can just generate them on the fly.
        const date = new Date(LAUNCH_EPOCH + 'T00:00:00');
        date.setDate(date.getDate() + (i - 1));
        const dateStr = date.toISOString().split('T')[0];
        list.push({ ...generatePuzzle(dateStr, `daily-${i}`), isClassic: false, dayIndex: i });
      }
    }

    return list; // Show in order (Puzzle 1 first)
  })();

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Layout maxWidth="5xl">
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 animate-slideUp">
          <Link to="/" className="inline-block mb-4 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Puzzle Archive</h1>
          <p className="text-gray-600 dark:text-gray-300">All available mysteries for Detective Marlowe Finch</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Prefer one continuous story? Try{' '}
            <Link to="/story" className="text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 font-semibold underline underline-offset-2">
              Story Mode: Murder on the Utopia
            </Link>
            {' '}— starring Detective Rook Pemberton.
          </p>
        </div>

        {/* Puzzle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {availablePuzzles.map((puzzle, index) => {
            const completed = isPuzzleCompleted(puzzle.id);
            const bestTime = getBestTime(puzzle.id);

            return (
              <Link
                key={puzzle.id}
                to={puzzle.isClassic ? `/puzzle/${puzzle.id}` : `/daily/${puzzle.releaseDate.split('T')[0]}`}
                className={`card-hover group ${puzzle.difficulty === 'ludicrous' ? 'ludicrous-glow' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-5 border-2 transition-all shadow-lg h-full flex flex-col ${puzzle.difficulty === 'ludicrous'
                  ? 'border-red-500/50 hover:border-red-400'
                  : 'border-white dark:border-white/10 hover:border-purple-500/50'
                  }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Puzzle #{puzzle.dayIndex}</span>
                        {puzzle.isClassic && (
                          <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Classic
                          </span>
                        )}
                        {!puzzle.isClassic && (
                          <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            Daily
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-300 transition line-clamp-2">
                        {puzzle.title}
                      </h3>
                      {!puzzle.isClassic && (
                        <div className="text-xs text-gray-500 mt-1">{formatDateString(puzzle.releaseDate.split('T')[0])}</div>
                      )}
                    </div>
                    {completed && (
                      <div className="text-2xl animate-bounce ml-2 flex-shrink-0">✓</div>
                    )}
                  </div>

                  {/* Difficulty Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-3 self-start ${getDifficultyColor(puzzle.difficulty)}`}>
                    <span>{getDifficultyIcon(puzzle.difficulty)}</span>
                    <span className="capitalize">{puzzle.difficulty}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                    {puzzle.backstory}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div>
                      {puzzle.suspects.length} suspects • {puzzle.clues.length} clues
                    </div>
                    {completed && bestTime && (
                      <div className="text-green-400 font-semibold">
                        Best: {formatTime(bestTime)}
                      </div>
                    )}
                  </div>

                  {/* Play Button */}
                  <div className="mt-auto">
                    <div className={`text-center font-bold py-2 px-4 rounded-lg transition-all group-hover:scale-105 ${puzzle.difficulty === 'ludicrous'
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}>
                      {completed ? 'Play Again' : 'Start Puzzle'} →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}