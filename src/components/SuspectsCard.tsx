import type { Suspect } from '../types/puzzle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../utils/iconMapping';

interface SuspectsCardProps {
  suspects: Suspect[];
}

export default function SuspectsCard({ suspects }: SuspectsCardProps) {
  return (
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-4 flex items-center">
        <span className="text-3xl mr-2">🕵️</span>
        Suspects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suspects.map((suspect, idx) => (
          <div 
            key={idx}
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-4 border-2 border-red-500/30 hover:border-red-500/50 transition-all shadow-lg"
          >
            {/* Font Awesome Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-red-500/20 rounded-full">
              <FontAwesomeIcon icon={getIcon(suspect.icon)} className="text-3xl text-red-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white text-center mb-2">{suspect.name}</h3>
            <p className="text-sm text-gray-400 text-center mb-3 min-h-[40px]">{suspect.bio}</p>
            
            <div className="flex flex-wrap gap-1.5 justify-center text-xs">
              <span className="bg-gray-700/50 px-2 py-1 rounded text-gray-300">{suspect.height}</span>
              <span className="bg-gray-700/50 px-2 py-1 rounded text-gray-300">{suspect.build}</span>
              <span className="bg-gray-700/50 px-2 py-1 rounded text-gray-300">{suspect.eyeColor}</span>
              <span className="bg-gray-700/50 px-2 py-1 rounded text-gray-300">{suspect.hairColor}</span>
              <span className="bg-gray-700/50 px-2 py-1 rounded text-gray-300">{suspect.handedness}</span>
              <span className="bg-gray-700/50 px-2 py-1 rounded text-gray-300">{suspect.age}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}