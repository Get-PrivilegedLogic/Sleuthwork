import { Link } from 'react-router-dom';
import { puzzles } from '../data/puzzles';

export default function HomePage() {
  // Get stats for completed puzzles
  const getCompletedCount = () => {
    return puzzles.filter(puzzle => 
      localStorage.getItem(`best-time-${puzzle.id}`) !== null
    ).length;
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

  const completedCount = getCompletedCount();
  const firstPuzzle = puzzles[0];
  const bestTime = getBestTime(firstPuzzle.id);
  const isCompleted = bestTime !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-4 md:p-8 relative overflow-hidden animate-gradientShift">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Floating Detective Emoji */}
        <div className="text-center mb-6 animate-float">
          <div className="text-8xl mb-4 animate-slideUp">🕵️</div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 animate-slideUp bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: '0.1s' }}>
          Sleuthwork
        </h1>
        
        <p className="text-xl md:text-2xl text-center text-gray-300 mb-2 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          Daily mysteries. Pure deduction.
        </p>

        {/* New Puzzle Badge */}
        <div className="flex justify-center mb-8 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-yellow-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
            ⚡ New puzzle daily
          </span>
        </div>

        {/* Main Puzzle Card */}
        <div className="mb-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <Link to={`/puzzle/${firstPuzzle.id}`}>
            <div className="card-glow bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10 hover:border-purple-500/50 transition-all shadow-2xl relative overflow-hidden group">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 animate-shimmer"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-purple-400 mb-2 font-semibold uppercase tracking-wide">
                      {isCompleted ? 'Featured Puzzle' : 'Start Your Investigation'}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition">
                      {firstPuzzle.title}
                    </h2>
                  </div>
                  {isCompleted && (
                    <div className="text-4xl animate-bounce">✓</div>
                  )}
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {firstPuzzle.backstory}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                    {firstPuzzle.suspects.length} Suspects
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                    {firstPuzzle.clues.length} Clues
                  </span>
                  <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm border border-pink-500/30 capitalize">
                    {firstPuzzle.difficulty}
                  </span>
                </div>

                {isCompleted && bestTime && (
                  <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 mb-4">
                    <div className="text-sm text-green-300">Your Best Time</div>
                    <div className="text-2xl font-bold text-green-400 font-mono">{formatTime(bestTime)}</div>
                  </div>
                )}

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg shadow-lg">
                  {isCompleted ? 'Play Again →' : 'Start Investigation →'}
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Browse All Puzzles Button */}
        <div className="text-center animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <Link to="/puzzles">
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-white/20 text-gray-300 hover:text-white shadow-lg">
              📚 Browse All Puzzles
            </button>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="card-hover bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl mb-3">🧩</div>
            <h3 className="text-xl font-bold mb-2 text-blue-300">Logic Puzzles</h3>
            <p className="text-gray-300 text-sm">Use pure deduction to solve mysteries. No guessing required.</p>
          </div>

          <div className="card-hover bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30" style={{ animationDelay: '0.65s' }}>
            <div className="text-4xl mb-3">⏱️</div>
            <h3 className="text-xl font-bold mb-2 text-purple-300">Race the Clock</h3>
            <p className="text-gray-300 text-sm">Track your solve times and beat your personal records.</p>
          </div>

          <div className="card-hover bg-gradient-to-br from-amber-900/50 to-amber-800/50 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30" style={{ animationDelay: '0.7s' }}>
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-bold mb-2 text-amber-300">Smart Hints</h3>
            <p className="text-gray-300 text-sm">Get progressive hints if you're stuck. Detective Finch has your back.</p>
          </div>
        </div>

        {/* Detective Marlowe Finch Character Card */}
        <div className="mt-12 card-hover bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 animate-slideUp" style={{ animationDelay: '0.75s' }}>
          <div className="flex items-start gap-4">
            <div className="text-6xl">🦅</div>
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Meet Detective Marlowe Finch</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Former mathematician turned detective who solves cases through "controlled chaos." 
                Drinks chamomile tea obsessively, names all office supplies, and maintains an elaborate 
                conspiracy board of yarn for every case. His pet raven, Evidence, judges your deduction skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  🍵 Chamomile Enthusiast
                </span>
                <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm border border-indigo-500/30">
                  🧵 Yarn Board Expert
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  🔢 Ex-Mathematician
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Stats */}
        {completedCount > 0 && (
          <div className="mt-8 text-center animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-sm text-green-300 mb-1">Your Progress</div>
              <div className="text-3xl font-bold text-green-400 mb-1">{completedCount} / {puzzles.length}</div>
              <div className="text-sm text-gray-400">Mysteries Solved</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}