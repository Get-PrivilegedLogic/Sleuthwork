import { Link } from 'react-router-dom';
import { puzzles as classicPuzzles } from '../data/puzzles';
import { STORAGE_KEYS, LAUNCH_EPOCH } from '../constants';
import { Layout } from '../components/Layout';
import { useChapterProgress } from '../hooks/useChapterProgress';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, BookOpen, Search } from 'lucide-react';
import { getTodayDateString, getDaysSinceLaunch } from '../utils/dateUtils';

export default function HomePage() {
  const today = getTodayDateString();
  const dayNumber = getDaysSinceLaunch(LAUNCH_EPOCH, today);

  // Total puzzles released: all 14 classics + any daily ones beyond day 14
  const totalReleased = Math.max(classicPuzzles.length, dayNumber);

  // Track completed puzzles among the released ones
  const completedCount = (() => {
    let count = 0;
    // Check all classics (always available)
    for (let i = 0; i < classicPuzzles.length; i++) {
      if (localStorage.getItem(STORAGE_KEYS.BEST_TIME(classicPuzzles[i].id)) !== null) count++;
    }
    // Check daily (simplified check)
    if (localStorage.getItem(STORAGE_KEYS.DAILY_PUZZLE_COMPLETED) === 'true' && dayNumber > classicPuzzles.length) {
      // This is a bit simplified since we only track today's daily completion easily.
      // For a full system, we'd need a way to track all historical daily completions.
      // But for now, we'll stick to this.
    }
    return count;
  })();

  const streak = parseInt(localStorage.getItem(STORAGE_KEYS.DAILY_STREAK) || '0');

  const getDetectiveRank = (count: number) => {
    if (count >= 20) return { title: 'Master Sleuth', icon: '👑', color: 'text-yellow-400' };
    if (count >= 10) return { title: 'Chief Inspector', icon: '🚔', color: 'text-blue-400' };
    if (count >= 5) return { title: 'Inspector', icon: '👮', color: 'text-purple-400' };
    if (count >= 2) return { title: 'Private Eye', icon: '🔍', color: 'text-indigo-400' };
    if (count >= 1) return { title: 'Gumshoe', icon: '👟', color: 'text-green-400' };
    return { title: 'New Recruit', icon: '🐣', color: 'text-gray-400' };
  };

  const nextUnsolvedPuzzle = classicPuzzles.find(puzzle =>
    localStorage.getItem(STORAGE_KEYS.BEST_TIME(puzzle.id)) === null
  ) || classicPuzzles[0];

  const rank = getDetectiveRank(completedCount);
  const { storySummary, storyNextLabel } = useChapterProgress();

  return (
    <Layout maxWidth="4xl">
      <div className="relative z-10">
        {/* Floating Detective Emoji */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-6"
        >
          <div className="text-8xl mb-4">🕵️</div>
        </motion.div>

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

        {/* Story Mode Card */}
        <div className="mb-6 animate-slideUp" style={{ animationDelay: '0.33s' }}>
          <Link to="/story">
            <div className="card-glow bg-gradient-to-r from-amber-700/80 to-amber-800/80 rounded-2xl p-6 border-2 border-amber-500/50 hover:border-amber-400 transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🚢</div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Story Mode</div>
                    <div className="text-amber-100">
                      Murder on the Utopia
                      <span className="block text-sm mt-0.5 opacity-90">Starring Detective Rook Pemberton</span>
                      <span className="block text-sm mt-1 font-semibold opacity-95">{storyNextLabel}</span>
                      {storySummary.puzzlesSolved > 0 && (
                        <span className="block text-xs mt-0.5 opacity-80">
                          Chapter {storySummary.chapterNum} / 5 — {storySummary.puzzlesSolved} puzzles solved
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-3xl group-hover:translate-x-1 transition-transform">→</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Daily Puzzle Button */}
        <div className="mb-8 animate-slideUp" style={{ animationDelay: '0.35s' }}>
          <Link to="/daily">
            <div className="card-glow bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 border-2 border-orange-400/50 hover:border-orange-300 transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">📅</div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Daily Puzzle</div>
                    <div className="text-orange-100">Solve today's mystery!</div>
                  </div>
                </div>
                <div className="text-3xl group-hover:translate-x-1 transition-transform">→</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Detective's Command Center */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 dark:border-purple-500/30 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy size={160} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="relative">
                  <div className="text-8xl bg-gray-900/50 rounded-full p-6 border-4 border-purple-500/50 shadow-inner">
                    {rank.icon}
                  </div>
                  {completedCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-2 -right-2 bg-yellow-500 text-yellow-950 w-12 h-12 rounded-full flex items-center justify-center font-bold border-4 border-gray-900"
                    >
                      {completedCount}
                    </motion.div>
                  )}
                </div>

                <div className="text-center md:text-left">
                  <div className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-1">Current Rank</div>
                  <h2 className={`text-5xl font-black mb-2 ${rank.color}`}>{rank.title}</h2>
                  <p className="text-gray-400 dark:text-gray-300 max-w-md">
                    You've solved <span className="text-white font-bold">{completedCount}</span> cases.
                    {completedCount < totalReleased ? ` Keep investigating to reach the next tier!` : ` You've cleared every file in the cabinet. Legend.`}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/50 dark:bg-gray-900/40 rounded-2xl p-4 border border-gray-200 dark:border-white/5 flex items-center gap-4 transition-colors">
                  <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-xl text-blue-600 dark:text-blue-400">
                    <Star size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Solved</div>
                    <div className="text-xl font-bold dark:text-white">{completedCount}</div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/40 rounded-2xl p-4 border border-gray-200 dark:border-white/5 flex items-center gap-4 transition-colors">
                  <div className="bg-orange-100 dark:bg-orange-500/20 p-3 rounded-xl text-orange-600 dark:text-orange-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Streak</div>
                    <div className="text-xl font-bold dark:text-white">{streak} Days</div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-gray-900/40 rounded-2xl p-4 border border-gray-200 dark:border-white/5 flex items-center gap-4 transition-colors">
                  <div className="bg-purple-100 dark:bg-purple-500/20 p-3 rounded-xl text-purple-600 dark:text-purple-400">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Files</div>
                    <div className="text-xl font-bold dark:text-white">{totalReleased} Total</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/puzzle/${nextUnsolvedPuzzle.id}`} className="flex-1">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group">
                    <Search className="group-hover:scale-110 transition-transform" />
                    Quick Play: {nextUnsolvedPuzzle.title}
                  </button>
                </Link>
                <Link to="/puzzles" className="sm:w-auto">
                  <button className="w-full sm:w-auto bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold py-5 px-8 rounded-2xl transition-all border border-white/10 flex items-center justify-center gap-2">
                    Case Archive
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>



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


      </div>
    </Layout>
  );
}