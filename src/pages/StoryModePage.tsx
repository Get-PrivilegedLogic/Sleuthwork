import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { chapters } from '../data/chapters';
import { useChapterProgress } from '../hooks/useChapterProgress';
import { CHAPTER_ARTWORK, STORY_MODE_IMAGES } from '../constants';
import { motion } from 'framer-motion';

function ChapterImage({ chapterId, isComplete }: { chapterId: string; isComplete: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const src = CHAPTER_ARTWORK[chapterId];
  const showImg = src && !error;
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-gray-700/50 flex items-center justify-center">
      {showImg ? (
        <img
          src={src}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      ) : null}
      {(!showImg || !loaded) && (
        <span className="text-4xl sm:text-5xl">{isComplete ? '✅' : '📖'}</span>
      )}
    </div>
  );
}

export default function StoryModePage() {
  const { getChapterProgress, isChapterUnlocked, storySummary } = useChapterProgress();
  const [detectiveImgLoaded, setDetectiveImgLoaded] = useState(false);
  const [detectiveImgError, setDetectiveImgError] = useState(false);
  const showDetectiveImg = !detectiveImgError;

  return (
    <Layout maxWidth="4xl">
      <div className="relative z-10">
        <Link
          to="/"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>

        <div className="mb-10 flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="shrink-0 mx-auto sm:mx-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border-2 border-amber-500/40 shadow-xl overflow-hidden bg-gray-700/50 flex items-center justify-center">
            {showDetectiveImg ? (
              <img
                src={STORY_MODE_IMAGES.DETECTIVE}
                alt="Detective Rook Pemberton"
                className={`w-full h-full object-cover transition-opacity duration-300 ${detectiveImgLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setDetectiveImgLoaded(true)}
                onError={() => setDetectiveImgError(true)}
              />
            ) : null}
            {(!showDetectiveImg || !detectiveImgLoaded) && (
              <span className="text-5xl sm:text-6xl" aria-hidden="true">🕵️</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Story Mode</h1>
            <p className="text-amber-200/90 text-sm font-semibold mb-1">Detective Rook Pemberton</p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Murder on the Utopia — follow Rook across 5 chapters aboard the luxury liner as he unravels the conspiracy.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              A separate story from the daily cases — you play as Detective Rook Pemberton.
            </p>
            {storySummary.puzzlesSolved > 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Chapter {storySummary.chapterNum} / {storySummary.totalChapters} — {storySummary.puzzlesSolved} puzzles solved
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:gap-8">
          {chapters.map((chapter, index) => {
            const unlocked = isChapterUnlocked(chapter.id);
            const cp = getChapterProgress(chapter.id);
            const completed = cp?.completedPuzzleIds.length ?? 0;
            const total = chapter.puzzles.length;
            const isComplete = total > 0 && completed >= total;

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {unlocked ? (
                  <Link to={`/story/${chapter.id}`} className="block group">
                    <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-white dark:border-white/10 hover:border-purple-500/50 transition-all shadow-lg h-full overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <ChapterImage chapterId={chapter.id} isComplete={isComplete} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                              Chapter {chapter.chapterNumber}
                            </span>
                            {isComplete && (
                              <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30">
                                Complete
                              </span>
                            )}
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors">
                            {chapter.title}
                          </h2>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{chapter.subtitle}</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                            {chapter.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {completed} / {total} puzzles
                            </span>
                            <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                              {isComplete ? 'Review' : 'Continue'} →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-gray-800/50 dark:bg-gray-900/50 rounded-2xl p-6 border-2 border-gray-700 dark:border-gray-600 opacity-75">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="text-5xl sm:text-6xl shrink-0 opacity-60">🔒</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                          Chapter {chapter.chapterNumber}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-500">
                          {chapter.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">{chapter.subtitle}</p>
                        <p className="text-gray-600 dark:text-gray-500 text-sm">
                          Complete the previous chapter to unlock.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
