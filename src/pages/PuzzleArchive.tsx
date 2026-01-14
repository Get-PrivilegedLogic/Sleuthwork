import { Link } from 'react-router-dom';
import { puzzles } from '../data/puzzles';

export default function PuzzleArchive() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '⭐';
      case 'medium': return '⭐⭐';
      case 'hard': return '⭐⭐⭐';
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

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-4 md:p-8 relative overflow-hidden animate-gradientShift">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 animate-slideUp">
          <Link to="/" className="inline-block mb-4 text-blue-400 hover:text-blue-300 transition">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Puzzle Archive</h1>
          <p className="text-gray-300">All available mysteries for Detective Marlowe Finch</p>
        </div>

        {/* Puzzle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {puzzles.map((puzzle, index) => {
            const completed = isPuzzleCompleted(puzzle.id);
            const bestTime = getBestTime(puzzle.id);

            return (
              <Link
                key={puzzle.id}
                to={`/puzzle/${puzzle.id}`}
                className="card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-5 border-2 border-white/10 hover:border-purple-500/50 transition-all shadow-lg">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">Puzzle #{index + 1}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
                        {puzzle.title}
                      </h3>
                    </div>
                    {completed && (
                      <div className="text-2xl animate-bounce">✓</div>
                    )}
                  </div>

                  {/* Difficulty Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${getDifficultyColor(puzzle.difficulty)}`}>
                    <span>{getDifficultyIcon(puzzle.difficulty)}</span>
                    <span className="capitalize">{puzzle.difficulty}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {puzzle.backstory}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
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
                  <div className="mt-4 text-center">
                    <div className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all group-hover:scale-105">
                      {completed ? 'Play Again' : 'Start Puzzle'} →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}