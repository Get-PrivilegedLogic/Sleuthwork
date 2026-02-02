import { useEffect, useState, useCallback, useRef } from 'react';

interface Position {
  row: number;
  col: number;
}

interface UseKeyboardNavigationProps {
  rows: number;
  cols: number;
  onToggle: (row: number, col: number) => void;
  isActive: boolean;
}

export function useKeyboardNavigation({
  rows,
  cols,
  onToggle,
  isActive
}: UseKeyboardNavigationProps) {
  const [focusedCell, setFocusedCell] = useState<Position>({ row: 0, col: 0 });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isActive) return;

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        setFocusedCell(prev => ({
          ...prev,
          row: Math.max(0, prev.row - 1)
        }));
        break;

      case 'ArrowDown':
        e.preventDefault();
        setFocusedCell(prev => ({
          ...prev,
          row: Math.min(rows - 1, prev.row + 1)
        }));
        break;

      case 'ArrowLeft':
        e.preventDefault();
        setFocusedCell(prev => ({
          ...prev,
          col: Math.max(0, prev.col - 1)
        }));
        break;

      case 'ArrowRight':
        e.preventDefault();
        setFocusedCell(prev => ({
          ...prev,
          col: Math.min(cols - 1, prev.col + 1)
        }));
        break;

      case ' ':
      case 'Enter':
        e.preventDefault();
        onToggle(focusedCell.row, focusedCell.col);
        break;
    }
  }, [isActive, rows, cols, focusedCell, onToggle]);

  // Store the latest callback in a ref to avoid re-attaching event listeners
  const handleKeyDownRef = useRef(handleKeyDown);

  useEffect(() => {
    handleKeyDownRef.current = handleKeyDown;
  }, [handleKeyDown]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => handleKeyDownRef.current(e);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []); // Empty deps - only attach once

  return { focusedCell };
}