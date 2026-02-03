import type { Weapon } from '../types/puzzle';
import { getIcon } from '../utils/iconMapping';

interface WeaponsCardProps {
  weapons: Weapon[];
}

export default function WeaponsCard({ weapons }: WeaponsCardProps) {
  return (
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4 flex items-center">
        <span className="text-3xl mr-2">🔪</span>
        Weapons
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weapons.map((weapon, idx) => (
          <div
            key={idx}
            className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border-2 border-orange-500/30 hover:border-orange-500/50 transition-all shadow-lg"
          >
            {/* Lucide Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-orange-500/20 rounded-full">
              {(() => {
                const Icon = getIcon(weapon.icon);
                return <Icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />;
              })()}
            </div>

            <h3 className="text-xl font-bold dark:text-white text-center mb-2">{weapon.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3 min-h-[40px]">{weapon.description}</p>

            <div className="flex flex-wrap gap-1.5 justify-center text-xs">
              <span className="bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-transparent">{weapon.weight}</span>
              <span className="bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-transparent">{weapon.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}