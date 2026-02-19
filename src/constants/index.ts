// Timer constants
export const TIMER_INTERVAL_MS = 1000;

// LocalStorage keys
export const STORAGE_KEYS = {
  GRID_STATE: (puzzleId: string) => `grid-${puzzleId}`,
  BEST_TIME: (puzzleId: string) => `best-time-${puzzleId}`,
  HINTS_UNLOCKED: (puzzleId: string) => `hints-unlocked-${puzzleId}`,

  // Daily puzzle keys
  DAILY_PUZZLE_DATE: 'daily-puzzle-date',
  DAILY_PUZZLE_COMPLETED: 'daily-puzzle-completed',
  DAILY_PUZZLE_GRID: 'daily-puzzle-grid',
  DAILY_PUZZLE_TIME: 'daily-puzzle-time',
  DAILY_STREAK: 'daily-streak',
  LAST_COMPLETED_DATE: 'last-completed-date',

  // Chapter / Story Mode keys
  STORY_MODE_PROGRESS: 'story-mode-progress',
  CHAPTER_GRID: (chapterId: string, puzzleIndex: number) =>
    `chapter-grid-${chapterId}-${puzzleIndex}`,
  CHAPTER_PUZZLE_TIME: (chapterId: string, puzzleIndex: number) =>
    `chapter-time-${chapterId}-${puzzleIndex}`,
} as const;

// The date the app was launched (Day 1)
// For existing puzzles 1-14 to align with early February 2026
export const LAUNCH_EPOCH = '2026-02-01';

// Story Mode concept art (place files in public/images/story-mode/)
export const STORY_MODE_IMAGES = {
  DETECTIVE: '/images/story-mode/rook-pemberton.png',
  CHAPTER_1: '/images/story-mode/chapter-1-maiden-voyage.png',
  CHAPTER_2: '/images/story-mode/chapter-2-calm-before-storm.png',
  CHAPTER_3: '/images/story-mode/chapter-3-deep-waters.png',
  CHAPTER_4: '/images/story-mode/chapter-4-the-storm.png',
  CHAPTER_5: '/images/story-mode/chapter-5-final-port.png',
} as const;

export const CHAPTER_ARTWORK: Record<string, string> = {
  'chapter-1': STORY_MODE_IMAGES.CHAPTER_1,
  'chapter-2': STORY_MODE_IMAGES.CHAPTER_2,
  'chapter-3': STORY_MODE_IMAGES.CHAPTER_3,
  'chapter-4': STORY_MODE_IMAGES.CHAPTER_4,
  'chapter-5': STORY_MODE_IMAGES.CHAPTER_5,
};
