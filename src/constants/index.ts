// Timer constants
export const TIMER_INTERVAL_MS = 1000;

// LocalStorage keys
export const STORAGE_KEYS = {
  GRID_STATE: (puzzleId: string) => `grid-${puzzleId}`,
  BEST_TIME: (puzzleId: string) => `best-time-${puzzleId}`,
  HINTS_UNLOCKED: (puzzleId: string) => `hints-unlocked-${puzzleId}`,
} as const;
