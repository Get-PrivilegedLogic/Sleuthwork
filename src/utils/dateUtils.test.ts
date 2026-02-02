import { describe, it, expect, vi } from 'vitest';
import {
    getTodayDateString,
    dateToSeed,
    formatDateString,
    getDaysDifference,
    getTimeUntilMidnight
} from './dateUtils';

describe('dateUtils', () => {
    it('getTodayDateString returns date in YYYY-MM-DD format', () => {
        const date = getTodayDateString();
        expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('dateToSeed returns consistent number for same date', () => {
        const seed1 = dateToSeed('2026-02-02');
        const seed2 = dateToSeed('2026-02-02');
        const seed3 = dateToSeed('2026-02-03');

        expect(seed1).toBe(seed2);
        expect(seed1).not.toBe(seed3);
        expect(typeof seed1).toBe('number');
    });

    it('formatDateString formats date correctly', () => {
        const formatted = formatDateString('2026-02-02');
        expect(formatted).toBe('February 2, 2026');
    });

    it('getDaysDifference calculates days between dates correctly', () => {
        const diff1 = getDaysDifference('2026-02-01', '2026-02-02');
        const diff2 = getDaysDifference('2026-02-01', '2026-02-03');
        const diff3 = getDaysDifference('2026-02-02', '2026-02-02');

        expect(diff1).toBe(1);
        expect(diff2).toBe(2);
        expect(diff3).toBe(0);
    });

    it('getTimeUntilMidnight returns correct time components', () => {
        // Mock date to 10:30:15 PM
        const mockDate = new Date('2026-02-02T22:30:15');
        vi.useFakeTimers();
        vi.setSystemTime(mockDate);

        const time = getTimeUntilMidnight();

        // 22:30:15 to midnight is 1h 29m 45s
        expect(time.hours).toBe(1);
        expect(time.minutes).toBe(29);
        expect(time.seconds).toBe(45);

        vi.useRealTimers();
    });
});
