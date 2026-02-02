import { useState, useCallback } from 'react';
import type { GridCell } from '../types/puzzle';

interface UsePuzzleGridProps {
  suspectCount: number;
  weaponCount: number;
  locationCount: number;
}

const createEmptyGrid = (rows: number, cols: number): GridCell[][] => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 'empty' as GridCell)
  );
};

export function usePuzzleGrid({ suspectCount, weaponCount, locationCount }: UsePuzzleGridProps) {
  const [suspectWeaponGrid, setSuspectWeaponGrid] = useState<GridCell[][]>(
    createEmptyGrid(suspectCount, weaponCount)
  );

  const [suspectLocationGrid, setSuspectLocationGrid] = useState<GridCell[][]>(
    createEmptyGrid(suspectCount, locationCount)
  );

  const [weaponLocationGrid, setWeaponLocationGrid] = useState<GridCell[][]>(
    createEmptyGrid(weaponCount, locationCount)
  );

  const resetGrids = useCallback(() => {
    setSuspectWeaponGrid(createEmptyGrid(suspectCount, weaponCount));
    setSuspectLocationGrid(createEmptyGrid(suspectCount, locationCount));
    setWeaponLocationGrid(createEmptyGrid(weaponCount, locationCount));
  }, [suspectCount, weaponCount, locationCount]);

  return {
    suspectWeaponGrid,
    setSuspectWeaponGrid,
    suspectLocationGrid,
    setSuspectLocationGrid,
    weaponLocationGrid,
    setWeaponLocationGrid,
    resetGrids
  };
}