// Date utility functions for daily puzzle

/**
 * Get today's date as a string in YYYY-MM-DD format (local time)
 */
export const getTodayDateString = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

/**
 * Convert date string to a seed number for puzzle selection
 * Example: "2026-02-02" -> 20260202
 */
export const dateToSeed = (dateString: string): number => {
    return parseInt(dateString.replace(/-/g, ''));
};

/**
 * Format date string for display
 * Example: "2026-02-02" -> "February 2, 2026"
 */
export const formatDateString = (dateString: string): string => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

/**
 * Calculate difference in days between two date strings
 */
export const getDaysDifference = (date1: string, date2: string): number => {
    const d1 = new Date(date1 + 'T00:00:00');
    const d2 = new Date(date2 + 'T00:00:00');
    const diffTime = d2.getTime() - d1.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Get time remaining until midnight (next puzzle)
 */
export const getTimeUntilMidnight = (): { hours: number; minutes: number; seconds: number } => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diff = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
};

/**
 * Get the number of days since the launch epoch
 */
export const getDaysSinceLaunch = (launchDate: string, currentDate: string): number => {
    return getDaysDifference(launchDate, currentDate) + 1; // 1-indexed
};
