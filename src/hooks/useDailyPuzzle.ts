import { useState, useEffect, useMemo, useCallback } from 'react';
import { puzzles } from '../data/puzzles';
import type { Puzzle, GridCell } from '../types/puzzle';
import { STORAGE_KEYS } from '../constants';
import { getTodayDateString, dateToSeed, getDaysDifference } from '../utils/dateUtils';

/**
 * Hook for managing daily puzzle state and logic
 */
export function useDailyPuzzle() {
    const today = getTodayDateString();
    const storedDate = localStorage.getItem(STORAGE_KEYS.DAILY_PUZZLE_DATE);
    const isNewDay = storedDate !== today;

    // Initialize state based on whether it's a new day
    const [currentDate] = useState(today);
    const [isCompleted, setIsCompleted] = useState(() => {
        if (isNewDay) return false;
        return localStorage.getItem(STORAGE_KEYS.DAILY_PUZZLE_COMPLETED) === 'true';
    });
    const [gridState, setGridState] = useState<Record<string, GridCell>>(() => {
        if (isNewDay) return {};
        const saved = localStorage.getItem(STORAGE_KEYS.DAILY_PUZZLE_GRID);
        return saved ? JSON.parse(saved) : {};
    });
    const [timeElapsed, setTimeElapsed] = useState(() => {
        if (isNewDay) return 0;
        return parseInt(localStorage.getItem(STORAGE_KEYS.DAILY_PUZZLE_TIME) || '0');
    });
    const [streak, setStreak] = useState(() =>
        parseInt(localStorage.getItem(STORAGE_KEYS.DAILY_STREAK) || '0')
    );
    const [lastCompletedDate, setLastCompletedDate] = useState(() =>
        localStorage.getItem(STORAGE_KEYS.LAST_COMPLETED_DATE) || ''
    );

    // Get today's puzzle based on date
    const dailyPuzzle = useMemo((): Puzzle => {
        const seed = dateToSeed(currentDate);
        const index = seed % puzzles.length;
        return puzzles[index];
    }, [currentDate]);

    // Clear localStorage for new day on mount
    useEffect(() => {
        if (isNewDay) {
            localStorage.removeItem(STORAGE_KEYS.DAILY_PUZZLE_COMPLETED);
            localStorage.removeItem(STORAGE_KEYS.DAILY_PUZZLE_GRID);
            localStorage.removeItem(STORAGE_KEYS.DAILY_PUZZLE_TIME);
            localStorage.setItem(STORAGE_KEYS.DAILY_PUZZLE_DATE, today);
        }
    }, [isNewDay, today]); // Run once on mount or if day changes

    // Check for new day periodically and on focus
    useEffect(() => {
        const checkForNewDay = () => {
            const today = getTodayDateString();
            if (today !== currentDate) {
                // New day detected! Reload the page to reset state
                window.location.reload();
            }
        };

        // Check when user returns to tab
        window.addEventListener('focus', checkForNewDay);

        // Check every minute
        const interval = setInterval(checkForNewDay, 60000);

        return () => {
            window.removeEventListener('focus', checkForNewDay);
            clearInterval(interval);
        };
    }, [currentDate]);

    // Save grid state to localStorage whenever it changes
    useEffect(() => {
        if (Object.keys(gridState).length > 0) {
            localStorage.setItem(STORAGE_KEYS.DAILY_PUZZLE_GRID, JSON.stringify(gridState));
        }
    }, [gridState]);

    // Save time elapsed to localStorage
    useEffect(() => {
        if (timeElapsed > 0) {
            localStorage.setItem(STORAGE_KEYS.DAILY_PUZZLE_TIME, String(timeElapsed));
        }
    }, [timeElapsed]);

    // Update streak based on completion
    const updateStreak = useCallback((completionDate: string): number => {
        if (!lastCompletedDate) {
            // First time completing a puzzle
            return 1;
        }

        const daysDiff = getDaysDifference(lastCompletedDate, completionDate);

        if (daysDiff === 1) {
            // Consecutive day! Increment streak
            return streak + 1;
        } else if (daysDiff === 0) {
            // Same day (shouldn't happen, but handle it)
            return streak;
        } else {
            // Streak broken! Reset to 1
            return 1;
        }
    }, [lastCompletedDate, streak]);

    // Mark puzzle as complete
    const markComplete = useCallback((finalTime: number) => {
        const newStreak = updateStreak(currentDate);

        setIsCompleted(true);
        setStreak(newStreak);
        setLastCompletedDate(currentDate);
        setTimeElapsed(finalTime);

        // Save to localStorage
        localStorage.setItem(STORAGE_KEYS.DAILY_PUZZLE_COMPLETED, 'true');
        localStorage.setItem(STORAGE_KEYS.DAILY_STREAK, String(newStreak));
        localStorage.setItem(STORAGE_KEYS.LAST_COMPLETED_DATE, currentDate);
        localStorage.setItem(STORAGE_KEYS.DAILY_PUZZLE_TIME, String(finalTime));
    }, [currentDate, updateStreak]);

    // Update grid state
    const updateGridState = useCallback((newGridState: Record<string, GridCell>) => {
        setGridState(newGridState);
    }, []);

    return {
        puzzle: dailyPuzzle,
        currentDate,
        isCompleted,
        gridState,
        timeElapsed,
        streak,
        lastCompletedDate,
        markComplete,
        updateGridState,
    };
}
