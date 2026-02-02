import { useState, useEffect, useRef, useCallback } from 'react';
import { TIMER_INTERVAL_MS } from '../constants';

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, TIMER_INTERVAL_MS);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const stop = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setSeconds(0);
    setIsRunning(true);
  }, []);

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    seconds,
    formattedTime: formatTime(seconds),
    stop,
    reset,
    isRunning
  };
}