import { useCallback, useState } from 'react';
import type { GridCell } from '../types/puzzle';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';

interface PuzzleGridProps {
  suspects: string[];
  weapons: string[];
  locations: string[];
  suspectWeaponGrid: GridCell[][];
  setSuspectWeaponGrid: React.Dispatch<React.SetStateAction<GridCell[][]>>;
  suspectLocationGrid: GridCell[][];
  setSuspectLocationGrid: React.Dispatch<React.SetStateAction<GridCell[][]>>;
  weaponLocationGrid: GridCell[][];
  setWeaponLocationGrid: React.Dispatch<React.SetStateAction<GridCell[][]>>;
}

const getCellContent = (cell: GridCell) => {
  if (cell === 'check') return '✓';
  if (cell === 'cross') return '✗';
  return '';
};

const getCellColor = (cell: GridCell) => {
  if (cell === 'check') return 'bg-green-600 hover:bg-green-700';
  if (cell === 'cross') return 'bg-red-600 hover:bg-red-700';
  return 'bg-gray-700 hover:bg-gray-600';
};

type ActiveGrid = 'suspectWeapon' | 'suspectLocation' | 'weaponLocation';

export default function PuzzleGrid({
  suspects,
  weapons,
  locations,
  suspectWeaponGrid,
  setSuspectWeaponGrid,
  suspectLocationGrid,
  setSuspectLocationGrid,
  weaponLocationGrid,
  setWeaponLocationGrid
}: PuzzleGridProps) {
  const [activeGrid, setActiveGrid] = useState<ActiveGrid>('suspectWeapon');

  const handleSuspectWeaponClick = useCallback((row: number, col: number) => {
    setSuspectWeaponGrid(prev => {
      const newGrid = prev.map(r => [...r]);
      const current = newGrid[row][col];
      
      if (current === 'empty') newGrid[row][col] = 'check';
      else if (current === 'check') newGrid[row][col] = 'cross';
      else newGrid[row][col] = 'empty';
      
      return newGrid;
    });
  }, [setSuspectWeaponGrid]);

  const handleSuspectLocationClick = useCallback((row: number, col: number) => {
    setSuspectLocationGrid(prev => {
      const newGrid = prev.map(r => [...r]);
      const current = newGrid[row][col];
      
      if (current === 'empty') newGrid[row][col] = 'check';
      else if (current === 'check') newGrid[row][col] = 'cross';
      else newGrid[row][col] = 'empty';
      
      return newGrid;
    });
  }, [setSuspectLocationGrid]);

  const handleWeaponLocationClick = useCallback((row: number, col: number) => {
    setWeaponLocationGrid(prev => {
      const newGrid = prev.map(r => [...r]);
      const current = newGrid[row][col];
      
      if (current === 'empty') newGrid[row][col] = 'check';
      else if (current === 'check') newGrid[row][col] = 'cross';
      else newGrid[row][col] = 'empty';
      
      return newGrid;
    });
  }, [setWeaponLocationGrid]);

  // Keyboard navigation for each grid
  const suspectWeaponNav = useKeyboardNavigation({
    rows: suspects.length,
    cols: weapons.length,
    onToggle: handleSuspectWeaponClick,
    isActive: activeGrid === 'suspectWeapon'
  });

  const suspectLocationNav = useKeyboardNavigation({
    rows: suspects.length,
    cols: locations.length,
    onToggle: handleSuspectLocationClick,
    isActive: activeGrid === 'suspectLocation'
  });

  const weaponLocationNav = useKeyboardNavigation({
    rows: weapons.length,
    cols: locations.length,
    onToggle: handleWeaponLocationClick,
    isActive: activeGrid === 'weaponLocation'
  });

  return (
    <div className="p-2 md:p-4">
      {/* Keyboard Shortcuts Help */}
      <div className="hidden md:block bg-blue-950/30 border border-blue-500/30 rounded-lg p-3 mb-4 text-sm text-blue-200">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <span>⌨️</span> Keyboard Shortcuts
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div><kbd className="bg-gray-700 px-2 py-1 rounded">Tab</kbd> Switch grids</div>
          <div><kbd className="bg-gray-700 px-2 py-1 rounded">Arrow Keys</kbd> Navigate cells</div>
          <div><kbd className="bg-gray-700 px-2 py-1 rounded">Space/Enter</kbd> Toggle cell</div>
          <div><kbd className="bg-gray-700 px-2 py-1 rounded">Esc</kbd> Close modals</div>
        </div>
      </div>

      {/* Suspect vs Weapon Grid */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-white">Suspect vs Weapon</h3>
          {activeGrid === 'suspectWeapon' && (
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Active</span>
          )}
        </div>
        <div className="overflow-x-auto">
          <div 
            className={`inline-block border-2 ${activeGrid === 'suspectWeapon' ? 'border-blue-500 shadow-lg shadow-blue-500/50' : 'border-gray-600'} rounded transition-all`}
            onClick={() => setActiveGrid('suspectWeapon')}
            role="grid"
            aria-label="Suspect vs Weapon grid"
            tabIndex={0}
            onFocus={() => setActiveGrid('suspectWeapon')}
          >
            <div className="flex">
              <div className="w-24 sm:w-28 md:w-32 lg:w-36 shrink-0"></div>
              {weapons.map((weapon, idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 flex items-center justify-center border border-gray-600 bg-gray-800 text-white font-semibold text-xs sm:text-sm md:text-base p-1 text-center"
                >
                  {weapon}
                </div>
              ))}
            </div>
            {suspects.map((suspect, rowIdx) => (
              <div key={rowIdx} className="flex">
                <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-36 lg:h-28 shrink-0 flex items-center justify-center border border-gray-600 bg-gray-800 text-white font-semibold text-xs sm:text-sm md:text-base p-1 text-center">
                  {suspect}
                </div>
                {weapons.map((_, colIdx) => {
                  const isFocused = activeGrid === 'suspectWeapon' && 
                                   suspectWeaponNav.focusedCell.row === rowIdx && 
                                   suspectWeaponNav.focusedCell.col === colIdx;
                  return (
                    <button
                      type="button"
                      key={colIdx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveGrid('suspectWeapon');
                        handleSuspectWeaponClick(rowIdx, colIdx);
                      }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 border text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-150 active:scale-90 ${
                        isFocused ? 'border-blue-500 border-4 ring-4 ring-blue-500/50' : 'border-gray-600'
                      } ${getCellColor(suspectWeaponGrid[rowIdx][colIdx])}`}
                      aria-label={`${suspect} with ${weapons[colIdx]}: ${suspectWeaponGrid[rowIdx][colIdx]}`}
                      role="gridcell"
                    >
                      {getCellContent(suspectWeaponGrid[rowIdx][colIdx])}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suspect vs Location Grid */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-white">Suspect vs Location</h3>
          {activeGrid === 'suspectLocation' && (
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Active</span>
          )}
        </div>
        <div className="overflow-x-auto">
          <div 
            className={`inline-block border-2 ${activeGrid === 'suspectLocation' ? 'border-blue-500 shadow-lg shadow-blue-500/50' : 'border-gray-600'} rounded transition-all`}
            onClick={() => setActiveGrid('suspectLocation')}
            role="grid"
            aria-label="Suspect vs Location grid"
            tabIndex={0}
            onFocus={() => setActiveGrid('suspectLocation')}
          >
            <div className="flex">
              <div className="w-24 sm:w-28 md:w-32 lg:w-36 shrink-0"></div>
              {locations.map((location, idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 flex items-center justify-center border border-gray-600 bg-gray-800 text-white font-semibold text-xs sm:text-sm md:text-base p-1 text-center"
                >
                  {location}
                </div>
              ))}
            </div>
            {suspects.map((suspect, rowIdx) => (
              <div key={rowIdx} className="flex">
                <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-36 lg:h-28 shrink-0 flex items-center justify-center border border-gray-600 bg-gray-800 text-white font-semibold text-xs sm:text-sm md:text-base p-1 text-center">
                  {suspect}
                </div>
                {locations.map((_, colIdx) => {
                  const isFocused = activeGrid === 'suspectLocation' && 
                                   suspectLocationNav.focusedCell.row === rowIdx && 
                                   suspectLocationNav.focusedCell.col === colIdx;
                  return (
                    <button
                      type="button"
                      key={colIdx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveGrid('suspectLocation');
                        handleSuspectLocationClick(rowIdx, colIdx);
                      }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 border text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-150 active:scale-90 ${
                        isFocused ? 'border-blue-500 border-4 ring-4 ring-blue-500/50' : 'border-gray-600'
                      } ${getCellColor(suspectLocationGrid[rowIdx][colIdx])}`}
                      aria-label={`${suspect} at ${locations[colIdx]}: ${suspectLocationGrid[rowIdx][colIdx]}`}
                      role="gridcell"
                    >
                      {getCellContent(suspectLocationGrid[rowIdx][colIdx])}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weapon vs Location Grid */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-white">Weapon vs Location</h3>
          {activeGrid === 'weaponLocation' && (
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Active</span>
          )}
        </div>
        <div className="overflow-x-auto">
          <div 
            className={`inline-block border-2 ${activeGrid === 'weaponLocation' ? 'border-blue-500 shadow-lg shadow-blue-500/50' : 'border-gray-600'} rounded transition-all`}
            onClick={() => setActiveGrid('weaponLocation')}
            role="grid"
            aria-label="Weapon vs Location grid"
            tabIndex={0}
            onFocus={() => setActiveGrid('weaponLocation')}
          >
            <div className="flex">
              <div className="w-24 sm:w-28 md:w-32 lg:w-36 shrink-0"></div>
              {locations.map((location, idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 flex items-center justify-center border border-gray-600 bg-gray-800 text-white font-semibold text-xs sm:text-sm md:text-base p-1 text-center"
                >
                  {location}
                </div>
              ))}
            </div>
            {weapons.map((weapon, rowIdx) => (
              <div key={rowIdx} className="flex">
                <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-36 lg:h-28 shrink-0 flex items-center justify-center border border-gray-600 bg-gray-800 text-white font-semibold text-xs sm:text-sm md:text-base p-1 text-center">
                  {weapon}
                </div>
                {locations.map((_, colIdx) => {
                  const isFocused = activeGrid === 'weaponLocation' && 
                                   weaponLocationNav.focusedCell.row === rowIdx && 
                                   weaponLocationNav.focusedCell.col === colIdx;
                  return (
                    <button
                      type="button"
                      key={colIdx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveGrid('weaponLocation');
                        handleWeaponLocationClick(rowIdx, colIdx);
                      }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 border text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-150 active:scale-90 ${
                        isFocused ? 'border-blue-500 border-4 ring-4 ring-blue-500/50' : 'border-gray-600'
                      } ${getCellColor(weaponLocationGrid[rowIdx][colIdx])}`}
                      aria-label={`${weapon} at ${locations[colIdx]}: ${weaponLocationGrid[rowIdx][colIdx]}`}
                      role="gridcell"
                    >
                      {getCellContent(weaponLocationGrid[rowIdx][colIdx])}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}