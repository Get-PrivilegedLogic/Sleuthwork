import { useState } from 'react';

interface SolutionFormProps {
  suspects: string[];
  weapons: string[];
  locations: string[];
  onSubmit: (guess: { suspect: string; weapon: string; location: string }) => void;
}

export default function SolutionForm({ suspects, weapons, locations, onSubmit }: SolutionFormProps) {
  const [selectedSuspect, setSelectedSuspect] = useState('');
  const [selectedWeapon, setSelectedWeapon] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSubmit = () => {
    if (!selectedSuspect || !selectedWeapon || !selectedLocation) {
      alert('Please make a complete accusation!');
      return;
    }

    onSubmit({
      suspect: selectedSuspect,
      weapon: selectedWeapon,
      location: selectedLocation
    });
  };

  const isComplete = selectedSuspect && selectedWeapon && selectedLocation;

  return (
    <div className="bg-gray-800 p-6 rounded-lg border-2 border-purple-500">
      <h2 className="text-2xl font-bold text-purple-400 mb-4">Make Your Accusation</h2>
      <p className="text-gray-400 mb-6">
        Who committed the murder, with what weapon, and where?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Suspect Dropdown */}
        <div>
          <label className="block text-white font-semibold mb-2">Suspect</label>
          <select
            value={selectedSuspect}
            onChange={(e) => setSelectedSuspect(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          >
            <option value="">Select suspect...</option>
            {suspects.map((suspect, idx) => (
              <option key={idx} value={suspect}>{suspect}</option>
            ))}
          </select>
        </div>

        {/* Weapon Dropdown */}
        <div>
          <label className="block text-white font-semibold mb-2">Weapon</label>
          <select
            value={selectedWeapon}
            onChange={(e) => setSelectedWeapon(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          >
            <option value="">Select weapon...</option>
            {weapons.map((weapon, idx) => (
              <option key={idx} value={weapon}>{weapon}</option>
            ))}
          </select>
        </div>

        {/* Location Dropdown */}
        <div>
          <label className="block text-white font-semibold mb-2">Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          >
            <option value="">Select location...</option>
            {locations.map((location, idx) => (
              <option key={idx} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!isComplete}
        className={`w-full py-4 rounded-lg font-bold text-lg transition ${
          isComplete
            ? 'bg-purple-600 hover:bg-purple-700 text-white cursor-pointer'
            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isComplete ? 'Submit Accusation' : 'Complete Your Accusation'}
      </button>

      {/* Preview */}
      {isComplete && (
        <div className="mt-4 p-4 bg-gray-900 rounded border border-purple-500">
          <p className="text-white text-center">
            <span className="text-purple-400 font-semibold">Your accusation:</span>{' '}
            <span className="font-bold">{selectedSuspect}</span> with the{' '}
            <span className="font-bold">{selectedWeapon}</span> in the{' '}
            <span className="font-bold">{selectedLocation}</span>
          </p>
        </div>
      )}
    </div>
  );
}