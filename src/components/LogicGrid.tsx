import { useState, useMemo, useCallback } from 'react';
import type { GridCell } from '../types/puzzle';
import type { Suspect, Weapon, Location } from '../types/puzzle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../utils/iconMapping';
import { motion, AnimatePresence } from 'framer-motion';

interface LogicGridProps {
  suspects: Suspect[];
  weapons: Weapon[];
  locations: Location[];
  grid: Record<string, GridCell>;
  onCellClick: (key: string) => void;
  onClearGrid?: () => void;
}

export default function LogicGrid({ suspects, weapons, locations, grid, onCellClick, onClearGrid }: LogicGridProps) {
  const [activeGrid, setActiveGrid] = useState<'suspect-weapon' | 'suspect-location' | 'weapon-location'>('suspect-weapon');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const hasMarks = useMemo(() => Object.keys(grid).length > 0, [grid]);

  const getCellValue = useCallback((row: string, col: string): GridCell => {
    return grid[`${row}-${col}`] || 'empty';
  }, [grid]);

  const handleCellClick = useCallback((row: string, col: string) => {
    onCellClick(`${row}-${col}`);
  }, [onCellClick]);

  const renderCell = useCallback((value: GridCell) => {
    return (
      <AnimatePresence mode="wait">
        {value === 'check' && (
          <motion.span
            key="check"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            className="text-green-500 dark:text-green-400 text-2xl font-bold block"
          >
            ✓
          </motion.span>
        )}
        {value === 'cross' && (
          <motion.span
            key="cross"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="text-red-500 dark:text-red-400 text-2xl font-bold block"
          >
            ✗
          </motion.span>
        )}
      </AnimatePresence>
    );
  }, []);

  const gridContent = useMemo(() => {
    let rows: (Suspect | Weapon)[] = [];
    let cols: (Suspect | Weapon | Location)[] = [];
    let rowColor = '';
    let colColor = '';

    if (activeGrid === 'suspect-weapon') {
      rows = suspects;
      cols = weapons;
      rowColor = 'text-purple-400';
      colColor = 'text-orange-400';
    } else if (activeGrid === 'suspect-location') {
      rows = suspects;
      cols = locations;
      rowColor = 'text-purple-400';
      colColor = 'text-blue-400';
    } else {
      rows = weapons;
      cols = locations;
      rowColor = 'text-orange-400';
      colColor = 'text-blue-400';
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-600 bg-gray-800/50 p-2 w-12"></th>
              {cols.map((col) => (
                <th
                  key={col.name}
                  className={`border border-gray-600 bg-gray-800/50 p-2 min-w-[60px] relative group ${colColor}`}
                  onMouseEnter={() => setHoveredItem(col.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={getIcon(col.icon)} className="text-2xl" />
                    {/* Tooltip */}
                    {hoveredItem === col.name && (
                      <div className="absolute top-full mt-1 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 shadow-lg">
                        {col.name}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td
                  className={`border border-gray-600 bg-gray-800/50 p-2 font-semibold text-center relative group ${rowColor}`}
                  onMouseEnter={() => setHoveredItem(row.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon icon={getIcon(row.icon)} className="text-2xl" />
                    {/* Tooltip */}
                    {hoveredItem === row.name && (
                      <div className="absolute left-full ml-1 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 shadow-lg">
                        {row.name}
                      </div>
                    )}
                  </div>
                </td>
                {cols.map((col) => {
                  const cellValue = getCellValue(row.name, col.name);
                  return (
                    <td
                      key={col.name}
                      className="border border-gray-600 bg-gray-900/30 p-2 text-center cursor-pointer hover:bg-gray-700/50 transition-colors min-h-[60px]"
                      onClick={() => handleCellClick(row.name, col.name)}
                    >
                      {renderCell(cellValue)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }, [activeGrid, suspects, weapons, locations, hoveredItem, getCellValue, handleCellClick, renderCell]);

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-4 md:p-6 rounded-lg border-2 border-purple-500/30 shadow-lg transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center">
          <span className="text-2xl mr-2">📊</span>
          Logic Grid
        </h2>
        {onClearGrid && (
          <button
            onClick={onClearGrid}
            disabled={!hasMarks}
            className="text-xs font-semibold px-3 py-1.5 rounded bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 border border-red-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <span>🗑️</span>
            Clear Grid
          </button>
        )}
      </div>

      {/* Grid Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveGrid('suspect-weapon')}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeGrid === 'suspect-weapon'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
        >
          <span className="text-purple-600 dark:text-purple-400">👤</span>
          <span className="dark:text-white">×</span>
          <span className="text-orange-600 dark:text-orange-400">🔪</span>
          <span className="hidden sm:inline">Suspect × Weapon</span>
        </button>

        <button
          onClick={() => setActiveGrid('suspect-location')}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeGrid === 'suspect-location'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
        >
          <span className="text-purple-600 dark:text-purple-400">👤</span>
          <span className="dark:text-white">×</span>
          <span className="text-blue-600 dark:text-blue-400">📍</span>
          <span className="hidden sm:inline">Suspect × Location</span>
        </button>

        <button
          onClick={() => setActiveGrid('weapon-location')}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeGrid === 'weapon-location'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
        >
          <span className="text-orange-600 dark:text-orange-400">🔪</span>
          <span className="dark:text-white">×</span>
          <span className="text-blue-600 dark:text-blue-400">📍</span>
          <span className="hidden sm:inline">Weapon × Location</span>
        </button>
      </div>

      {/* Instructions */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        <span className="font-semibold">How to use:</span> Hover over icons to see names. Click cells to mark them.
        <span className="text-green-600 dark:text-green-400 ml-2">✓ = Yes</span>
        <span className="text-red-600 dark:text-red-400 ml-2">✗ = No</span>
      </p>

      {/* Grid */}
      {gridContent}
    </div>
  );
}