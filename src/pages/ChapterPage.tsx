import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { chapters } from '../data/chapters';
import { useChapterProgress } from '../hooks/useChapterProgress';
import ChapterProgressBar from '../components/ChapterProgressBar';
import { CHAPTER_ARTWORK } from '../constants';
import { motion } from 'framer-motion';

function ChapterArtwork({ chapterId }: { chapterId: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const src = CHAPTER_ARTWORK[chapterId];
  if (!src) return null;
  return (
    <div className="mb-8 w-full max-w-2xl aspect-video rounded-2xl overflow-hidden bg-gray-700/50 flex items-center justify-center border-2 border-white/10">
      {!error ? (
        <img
          src={src}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      ) : null}
      {(!loaded || error) && <span className="text-5xl opacity-50">📖</span>}
    </div>
  );
}

export default function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();
  const { getChapterProgress, canAccessPuzzle } = useChapterProgress();

  const chapter = chapters.find((c) => c.id === chapterId);
  const progress = chapter ? getChapterProgress(chapter.id) : undefined;

  if (!chapter) {
    return (
      <Layout maxWidth="4xl">
        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Chapter not found</h2>
          <Link to="/story" className="text-purple-400 hover:underline">
            ← Back to Story Mode
          </Link>
        </div>
      </Layout>
    );
  }

  const handlePuzzleClick = (index: number) => {
    if (canAccessPuzzle(chapter.id, index)) {
      navigate(`/story/${chapter.id}/${index}`);
    }
  };

  const total = chapter.puzzles.length;
  const completed = progress?.completedPuzzleIds.length ?? 0;
  const isChapterComplete = total > 0 && completed >= total;
  const nextPuzzleIndex = progress?.currentPuzzleIndex ?? 0;

  return (
    <Layout maxWidth="4xl">
      <div className="relative z-10">
        <Link
          to="/story"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Story Mode
        </Link>

        <ChapterArtwork chapterId={chapter.id} />

        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
            Chapter {chapter.chapterNumber}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{chapter.title}</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">{chapter.subtitle}</p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {chapter.description}
          </p>
        </div>

        <ChapterProgressBar
          chapter={chapter}
          progress={progress}
          currentPuzzleIndex={nextPuzzleIndex}
          onPuzzleClick={handlePuzzleClick}
        />

        <div className="mt-8 space-y-4">
          {chapter.puzzles.map((puzzle, index) => {
            const canAccess = canAccessPuzzle(chapter.id, index);
            const isCompleted = progress?.completedPuzzleIds.includes(puzzle.id) ?? false;
            const isCurrent = index === nextPuzzleIndex && !isCompleted;
            const isFinale = index === total - 1;

            return (
              <motion.div
                key={puzzle.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {canAccess ? (
                  <button
                    type="button"
                    onClick={() => handlePuzzleClick(index)}
                    className="w-full text-left bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-5 border-2 border-white dark:border-white/10 hover:border-purple-500/50 transition-all shadow-lg flex flex-col sm:flex-row sm:items-center gap-4 group"
                  >
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          isCompleted
                            ? 'bg-green-500 text-white'
                            : isCurrent
                              ? 'bg-purple-600 text-white ring-4 ring-purple-500/30'
                              : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {isCompleted ? '✓' : isFinale ? '⚑' : index + 1}
                      </span>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors">
                          {puzzle.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {puzzle.difficulty}
                          {isFinale ? ' · Finale' : ''}
                        </div>
                      </div>
                    </div>
                    <p className="flex-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {puzzle.backstory}
                    </p>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold shrink-0 group-hover:translate-x-1 transition-transform">
                      {isCompleted ? 'Review' : 'Play'} →
                    </span>
                  </button>
                ) : (
                  <div className="w-full text-left bg-gray-800/50 dark:bg-gray-900/50 rounded-xl p-5 border-2 border-gray-700 dark:border-gray-600 opacity-75 cursor-not-allowed">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-gray-700 text-gray-500 flex items-center justify-center font-bold text-sm">
                        {isFinale ? '⚑' : index + 1}
                      </span>
                      <div>
                        <div className="font-bold text-gray-500">{puzzle.title}</div>
                        <div className="text-xs text-gray-500">Locked — complete previous puzzles first</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {isChapterComplete && (
          <div className="mt-8 p-6 rounded-xl bg-green-900/20 border border-green-500/30 text-center">
            <p className="text-green-400 font-semibold mb-2">Chapter complete!</p>
            <p className="text-gray-400 text-sm mb-4">
              {chapter.chapterNumber < chapters.length
                ? 'The next chapter is now available in Story Mode.'
                : 'You\'ve finished the story. Well done, Detective.'}
            </p>
            <Link
              to="/story"
              className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
            >
              Back to Story Mode
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
