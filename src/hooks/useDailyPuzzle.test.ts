import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDailyPuzzle } from './useDailyPuzzle';
import { STORAGE_KEYS } from '../constants';
import * as dateUtils from '../utils/dateUtils';

// Mock dateUtils
vi.mock('../utils/dateUtils', async () => {
    const actual = await vi.importActual('../utils/dateUtils');
    return {
        ...actual,
        getTodayDateString: vi.fn(),
    };
});

describe('useDailyPuzzle', () => {
    const mockToday = '2026-02-02';
    const mockYesterday = '2026-02-01';

    beforeEach(() => {
        localStorage.clear();
        vi.mocked(dateUtils.getTodayDateString).mockReturnValue(mockToday);
    });

    it('initializes with default state for a new player', () => {
        const { result } = renderHook(() => useDailyPuzzle());

        expect(result.current.isCompleted).toBe(false);
        expect(result.current.streak).toBe(0);
        expect(result.current.gridState).toEqual({});
    });

    it('keeps streak if completing consecutive days', () => {
        // Setup: completed yesterday
        localStorage.setItem(STORAGE_KEYS.DAILY_STREAK, '5');
        localStorage.setItem(STORAGE_KEYS.LAST_COMPLETED_DATE, mockYesterday);

        const { result } = renderHook(() => useDailyPuzzle());

        act(() => {
            result.current.markComplete(120);
        });

        expect(result.current.streak).toBe(6);
        expect(result.current.isCompleted).toBe(true);
    });

    it('resets streak if a day is missed', () => {
        // Setup: completed 2 days ago
        localStorage.setItem(STORAGE_KEYS.DAILY_STREAK, '5');
        localStorage.setItem(STORAGE_KEYS.LAST_COMPLETED_DATE, '2026-01-31');

        const { result } = renderHook(() => useDailyPuzzle());

        act(() => {
            result.current.markComplete(120);
        });

        expect(result.current.streak).toBe(1);
    });

    it('persists grid state to localStorage', () => {
        const { result } = renderHook(() => useDailyPuzzle());

        const newState = { 'Alice-Poison': 'check' as const };
        act(() => {
            result.current.updateGridState(newState);
        });

        expect(localStorage.getItem(STORAGE_KEYS.DAILY_PUZZLE_GRID)).toBe(JSON.stringify(newState));
    });
});
