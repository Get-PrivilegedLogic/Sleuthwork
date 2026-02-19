import { motion } from 'framer-motion';
import type { Chapter } from '../types/chapterTypes';
import type { ChapterProgress } from '../types/chapterTypes';

interface ChapterProgressBarProps {
    chapter: Chapter;
    progress: ChapterProgress | undefined;
    currentPuzzleIndex: number;
    onPuzzleClick?: (index: number) => void;
}

export default function ChapterProgressBar({
    chapter,
    progress,
    currentPuzzleIndex,
    onPuzzleClick,
}: ChapterProgressBarProps) {
    const totalPuzzles = chapter.puzzles.length;
    const completedIds = new Set(progress?.completedPuzzleIds ?? []);

    return (
        <div className="w-full py-4">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Chapter Progress
                </span>
                <span className="text-xs text-gray-400">
                    {completedIds.size} / {totalPuzzles}
                </span>
            </div>

            <div className="relative flex items-center gap-1">
                {/* Connecting line */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-700 z-0" />

                {chapter.puzzles.map((puzzle, index) => {
                    const isCompleted = completedIds.has(puzzle.id);
                    const isCurrent = index === currentPuzzleIndex;
                    const isLocked = index > currentPuzzleIndex && !isCompleted;
                    const isFinale = index === totalPuzzles - 1;
                    const canClick = (isCompleted || isCurrent) && !!onPuzzleClick;

                    let nodeStyle = '';
                    if (isCompleted) {
                        nodeStyle = 'bg-green-500 border-green-400 text-white';
                    } else if (isCurrent) {
                        nodeStyle = 'bg-purple-600 border-purple-400 text-white ring-4 ring-purple-500/30';
                    } else {
                        nodeStyle = 'bg-gray-800 border-gray-600 text-gray-500';
                    }

                    return (
                        <div key={puzzle.id} className="flex-1 flex flex-col items-center relative z-10">
                            <motion.button
                                whileHover={canClick ? { scale: 1.15 } : {}}
                                whileTap={canClick ? { scale: 0.95 } : {}}
                                animate={isCurrent ? { scale: [1, 1.05, 1] } : {}}
                                transition={isCurrent ? { repeat: Infinity, duration: 2 } : {}}
                                onClick={() => canClick && onPuzzleClick(index)}
                                disabled={isLocked}
                                aria-label={`Puzzle ${index + 1}: ${puzzle.title} — ${isCompleted ? 'Completed' : isCurrent ? 'Current' : 'Locked'}`}
                                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all shadow-md ${nodeStyle} ${canClick ? 'cursor-pointer' : isLocked ? 'cursor-not-allowed' : ''}`}
                            >
                                {isCompleted ? '✓' : isFinale ? '⚑' : index + 1}
                            </motion.button>

                            {/* Label below node */}
                            <span className={`mt-1 text-[10px] font-semibold text-center max-w-[60px] leading-tight truncate ${isCurrent ? 'text-purple-300' : isCompleted ? 'text-green-400' : 'text-gray-500'}`}>
                                {isFinale ? 'Finale' : `P${index + 1}`}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
