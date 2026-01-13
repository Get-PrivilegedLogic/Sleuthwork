import { useEffect, useState, useCallback } from 'react';

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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { focusedCell };
}