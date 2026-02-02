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
} as const;
