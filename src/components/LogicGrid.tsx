import { useState, useMemo, useCallback } from 'react';
import type { GridCell } from '../types/puzzle';
import type { Suspect, Weapon, Location } from '../types/puzzle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../utils/iconMapping';

interface LogicGridProps {
  suspects: Suspect[];
  weapons: Weapon[];
  locations: Location[];
  grid: Record<string, GridCell>;
  onCellClick: (key: string) => void;
}

export default function LogicGrid({ suspects, weapons, locations, grid, onCellClick }: LogicGridProps) {
  const [activeGrid, setActiveGrid] = useState<'suspect-weapon' | 'suspect-location' | 'weapon-location'>('suspect-weapon');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const getCellValue = useCallback((row: string, col: string): GridCell => {
    return grid[`${row}-${col}`] || 'empty';
  }, [grid]);

  const handleCellClick = useCallback((row: string, col: string) => {
    onCellClick(`${row}-${col}`);
  }, [onCellClick]);

  const renderCell = useCallback((value: GridCell) => {
    if (value === 'check') {
      return <span className="text-green-400 text-xl">✓</span>;
    } else if (value === 'cross') {
      return <span className="text-red-400 text-xl">✗</span>;
    }
    return null;
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
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-lg border-2 border-purple-500/30 shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-purple-400 mb-4 flex items-center">
        <span className="text-2xl mr-2">📊</span>
        Logic Grid
      </h2>

      {/* Grid Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveGrid('suspect-weapon')}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeGrid === 'suspect-weapon'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
          <span className="text-purple-400">👤</span>
          <span>×</span>
          <span className="text-orange-400">🔪</span>
          <span className="hidden sm:inline">Suspect × Weapon</span>
        </button>

        <button
          onClick={() => setActiveGrid('suspect-location')}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeGrid === 'suspect-location'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
          <span className="text-purple-400">👤</span>
          <span>×</span>
          <span className="text-blue-400">📍</span>
          <span className="hidden sm:inline">Suspect × Location</span>
        </button>

        <button
          onClick={() => setActiveGrid('weapon-location')}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeGrid === 'weapon-location'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
          <span className="text-orange-400">🔪</span>
          <span>×</span>
          <span className="text-blue-400">📍</span>
          <span className="hidden sm:inline">Weapon × Location</span>
        </button>
      </div>

      {/* Instructions */}
      <p className="text-sm text-gray-400 mb-4">
        <span className="font-semibold">How to use:</span> Hover over icons to see names. Click cells to mark them.
        <span className="text-green-400 ml-2">✓ = Yes</span>
        <span className="text-red-400 ml-2">✗ = No</span>
      </p>

      {/* Grid */}
      {gridContent}
    </div>
  );
}