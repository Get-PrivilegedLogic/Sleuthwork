import { useState, useEffect, useMemo, useCallback } from 'react';
import { puzzles } from '../data/puzzles';
import type { Puzzle, GridCell } from '../types/puzzle';
import { STORAGE_KEYS, LAUNCH_EPOCH } from '../constants';
import { getTodayDateString, getDaysDifference, getDaysSinceLaunch } from '../utils/dateUtils';
import { generatePuzzle } from '../utils/puzzleGenerator';

/**
 * Hook for managing daily puzzle state and logic
 */
export function useDailyPuzzle(targetDate?: string) {
    const today = getTodayDateString();
    const activeDate = targetDate || today;
    const storedDate = localStorage.getItem(STORAGE_KEYS.DAILY_PUZZLE_DATE);
    const isNewDay = storedDate !== today;
    const isHistorical = !!targetDate && targetDate !== today;

    // Initialize state based on whether it's a new day
    const [currentDate] = useState(activeDate);
    const [isCompleted, setIsCompleted] = useState(() => {
        const key = isHistorical ? `daily-completed-${activeDate}` : STORAGE_KEYS.DAILY_PUZZLE_COMPLETED;
        if (isHistorical) return localStorage.getItem(key) === 'true';
        if (isNewDay) return false;
        return localStorage.getItem(STORAGE_KEYS.DAILY_PUZZLE_COMPLETED) === 'true';
    });
    const [gridState, setGridState] = useState<Record<string, GridCell>>(() => {
        const key = isHistorical ? `daily-grid-${activeDate}` : STORAGE_KEYS.DAILY_PUZZLE_GRID;
        if (!isHistorical && isNewDay) return {};
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : {};
    });
    const [timeElapsed, setTimeElapsed] = useState(() => {
        const key = isHistorical ? `daily-time-${activeDate}` : STORAGE_KEYS.DAILY_PUZZLE_TIME;
        if (!isHistorical && isNewDay) return 0;
        return parseInt(localStorage.getItem(key) || '0');
    });
    const [streak, setStreak] = useState(() =>
        parseInt(localStorage.getItem(STORAGE_KEYS.DAILY_STREAK) || '0')
    );
    const [lastCompletedDate, setLastCompletedDate] = useState(() =>
        localStorage.getItem(STORAGE_KEYS.LAST_COMPLETED_DATE) || ''
    );

    // Get today's puzzle based on date
    const dailyPuzzle = useMemo((): Puzzle => {
        const dayNumber = getDaysSinceLaunch(LAUNCH_EPOCH, currentDate);

        if (dayNumber <= puzzles.length) {
            // First 14 days use hand-crafted puzzles
            return puzzles[dayNumber - 1];
        }

        // Day 15+ use infinite generator
        return generatePuzzle(currentDate, `daily-${dayNumber}`);
    }, [currentDate]);

    // Clear localStorage for new day on mount (only for today's puzzle)
    useEffect(() => {
        if (isNewDay && !isHistorical) {
            localStorage.removeItem(STORAGE_KEYS.DAILY_PUZZLE_COMPLETED);
            localStorage.removeItem(STORAGE_KEYS.DAILY_PUZZLE_GRID);
            localStorage.removeItem(STORAGE_KEYS.DAILY_PUZZLE_TIME);
            localStorage.setItem(STORAGE_KEYS.DAILY_PUZZLE_DATE, today);
        }
    }, [isNewDay, isHistorical, today]); // Run once on mount or if day changes

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
            const key = isHistorical ? `daily-grid-${currentDate}` : STORAGE_KEYS.DAILY_PUZZLE_GRID;
            localStorage.setItem(key, JSON.stringify(gridState));
        }
    }, [gridState, isHistorical, currentDate]);

    // Save time elapsed to localStorage
    useEffect(() => {
        if (timeElapsed > 0) {
            const key = isHistorical ? `daily-time-${currentDate}` : STORAGE_KEYS.DAILY_PUZZLE_TIME;
            localStorage.setItem(key, String(timeElapsed));
        }
    }, [timeElapsed, isHistorical, currentDate]);

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
        if (isHistorical) {
            setIsCompleted(true);
            setTimeElapsed(finalTime);
            localStorage.setItem(`daily-completed-${currentDate}`, 'true');
            localStorage.setItem(`daily-time-${currentDate}`, String(finalTime));
            return; // Don't update streaks for historical
        }

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
    }, [currentDate, updateStreak, isHistorical]);

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
