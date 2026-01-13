import { Link } from 'react-router-dom';
import { useState } from 'react';
import { puzzles } from '../data/puzzles';

export default function HomePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  const todaysPuzzle = puzzles[0];

  const getBestTime = (puzzleId: string): number | null => {
    const stored = localStorage.getItem(`best-time-${puzzleId}`);
    return stored ? parseInt(stored) : null;
  };

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const bestTime = getBestTime(todaysPuzzle.id);
  const hasPlayedBefore = bestTime !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-4 md:p-8 relative overflow-hidden animate-gradientShift">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with enhanced styling */}
        <div className="text-center mb-8 md:mb-12 animate-slideUp">
          <div className="inline-block mb-4">
            <div className="text-6xl md:text-8xl mb-4 animate-float">🕵️</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradientShift">
            Sleuthwork
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-light">
            Daily mysteries. Pure deduction.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-sm text-gray-300">⚡ New puzzle daily</span>
          </div>
        </div>

        {/* Detective Character Card */}
        <div className="relative mb-6 animate-slideUp" style={{ animationDelay: '0.05s' }}>
          <div className="relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-xl p-4 md:p-6 border-2 border-purple-500/30 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="text-5xl md:text-6xl animate-float shrink-0">🦅</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-300">Detective Marlowe Finch</h3>
                  <span className="text-sm bg-purple-500/30 text-purple-200 px-2 py-1 rounded">The Chaos Detective</span>
                </div>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3">
                  A brilliant but scatterbrained detective who solves cases through "controlled chaos." Former mathematician who quit academia because "real puzzles have blood." Drinks chamomile tea obsessively and maintains a conspiracy board of yarn for every case. Has a pet raven named "Evidence" who judges your deduction skills.
                </p>
                <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                  <span className="bg-white/10 px-3 py-1 rounded-full">🍵 Chamomile Enthusiast</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full">🧵 Yarn Board Expert</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full">🔢 Ex-Mathematician</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Puzzle Card - Premium Edition */}
        <div className="relative mb-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-xl opacity-50 animate-pulse-glow"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 md:p-8 border-2 border-white/10 shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  TODAY'S PUZZLE
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 flex items-center gap-2">
                  {todaysPuzzle.title}
                  {hasPlayedBefore && <span className="text-green-400 text-xl">✓</span>}
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  A murder mystery with {todaysPuzzle.suspects.length} suspects, {todaysPuzzle.weapons.length} weapons, 
                  and {todaysPuzzle.locations.length} locations
                </p>
              </div>
              <div className="text-5xl md:text-6xl animate-float">🔍</div>
            </div>

            {/* Quick Stats with enhanced design */}
            {hasPlayedBefore && (
              <div className="bg-gradient-to-r from-green-950/50 to-emerald-950/50 rounded-lg p-4 mb-4 border border-green-500/30 backdrop-blur-sm">
                <div className="text-sm text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <span>🏆</span> Your Stats for This Puzzle
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Best Time</div>
                    <div className="text-2xl md:text-3xl font-bold text-green-400 font-mono">{formatTime(bestTime)}</div>
                  </div>
                  <div className="h-12 w-px bg-green-500/30"></div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Status</div>
                    <div className="text-lg md:text-xl font-semibold text-green-400">Completed</div>
                  </div>
                </div>
              </div>
            )}

            {/* Preview with enhanced styling */}
            <div className="bg-gradient-to-r from-amber-950/30 to-orange-950/30 rounded-lg p-4 mb-6 border-l-4 border-amber-500">
              <div className="text-sm text-amber-400 font-semibold mb-2 flex items-center gap-2">
                <span>📖</span> Case Preview
              </div>
              <p className="text-gray-200 text-sm md:text-base line-clamp-3 leading-relaxed">
                {todaysPuzzle.backstory.split('\n\n')[0].trim()}
              </p>
            </div>

            {/* Premium CTA Button */}
            <Link to="/puzzle" className="block">
              <button className="relative w-full group overflow-hidden">
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 animate-shimmer"></div>
                
                {/* Button content */}
                <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-6 py-4 md:py-5 rounded-lg font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3">
                  <span className="text-2xl">🎮</span>
                  <span>Start Solving the Mystery</span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Features Grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {[
            { emoji: '🧩', title: 'Logic Puzzles', desc: 'Use deductive reasoning to eliminate possibilities and find the solution', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30' },
            { emoji: '⏱️', title: 'Race the Clock', desc: 'Track your solve times and compete against your personal best', color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30' },
            { emoji: '💡', title: 'Smart Hints', desc: 'Get progressive hints if you\'re stuck without spoiling the solution', color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/30' }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className={`card-hover bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-xl p-5 md:p-6 border ${feature.border} shadow-lg animate-slideUp`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl mb-3 animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                {feature.emoji}
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2 text-white">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon Button with enhanced style */}
        <div className="text-center animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <button 
            onClick={() => setShowComingSoon(true)}
            className="bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-white/20 text-gray-300 hover:text-white shadow-lg"
          >
            📚 Browse All Puzzles
          </button>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></span>
            <span>✨</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></span>
          </div>
          <p>New puzzles coming soon • Built with React + TypeScript + AWS</p>
        </div>

        {/* Premium Coming Soon Modal */}
        {showComingSoon && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl border-2 border-purple-500/50 max-w-md animate-slideUp shadow-2xl">
              <div className="text-6xl mb-4 text-center animate-float">🚧</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Coming Soon!</h2>
              <p className="text-gray-300 mb-6 text-center">
                The puzzle library is under construction. Check back soon for more mysteries to solve!
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}