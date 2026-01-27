import type { Location } from '../types/puzzle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../utils/iconMapping';

interface LocationsCardProps {
  locations: Location[];
}

export default function LocationsCard({ locations }: LocationsCardProps) {
  return (
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4 flex items-center">
        <span className="text-3xl mr-2">📍</span>
        Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {locations.map((location, idx) => (
          <div 
            key={idx}
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all shadow-lg"
          >
            {/* Font Awesome Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-blue-500/20 rounded-full">
              <FontAwesomeIcon icon={getIcon(location.icon)} className="text-3xl text-blue-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white text-center mb-2">{location.name}</h3>
            <p className="text-sm text-gray-400 text-center mb-3 min-h-[40px]">{location.description}</p>
            
            <div className="flex flex-wrap gap-1.5 justify-center text-xs">
              <span className="bg-gray-700/50 px-2 py-1 rounded text-gray-300">{location.setting}</span>
              <span className="bg-gray-700/50 px-2 py-1 rounded text-gray-300">{location.access}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}