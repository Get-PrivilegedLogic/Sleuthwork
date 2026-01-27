import type { Puzzle } from '../../types/puzzle';

export const puzzle7: Puzzle = {
  id: 'puzzle-7',
  title: 'Murder at the Hotel',
  difficulty: 'medium',
  releaseDate: '2025-12-07T12:00:00Z',
  backstory: 'Tech billionaire Steven Park was found dead in his penthouse suite. Four people had access to the executive floor that evening.',
  suspects: [
    { 
      name: 'Amanda Cole', 
      bio: 'Steven\'s executive assistant who manages his schedule.',
      height: '5\'7"',
      build: 'Slim',
      eyeColor: 'Hazel eyes',
      hairColor: 'Brown hair',
      handedness: 'Right-handed',
      age: 'Late 20s',
      icon: 'user-tie'
    },
    { 
      name: 'Richard Torres', 
      bio: 'Business rival staying on the same floor.',
      height: '6\'1"',
      build: 'Athletic',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Early 40s',
      icon: 'user-tie'
    },
    { 
      name: 'Jennifer Wu', 
      bio: 'Hotel concierge with master key access.',
      height: '5\'5"',
      build: 'Average',
      eyeColor: 'Dark brown eyes',
      hairColor: 'Black hair',
      handedness: 'Left-handed',
      age: 'Mid-30s',
      icon: 'user'
    },
    { 
      name: 'Michael Santos', 
      bio: 'Steven\'s personal bodyguard on duty that night.',
      height: '6\'3"',
      build: 'Muscular',
      eyeColor: 'Brown eyes',
      hairColor: 'Bald',
      handedness: 'Right-handed',
      age: 'Late 30s',
      icon: 'user-shield'
    }
  ],
  weapons: [
    { 
      name: 'Champagne Bottle', 
      description: 'Dom Perignon, 1.5L magnum, very heavy.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'wine-bottle'
    },
    { 
      name: 'Laptop Cord', 
      description: 'Power cable, 6 feet long, heavy-duty connector.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'lightbulb'
    },
    { 
      name: 'Ice Pick', 
      description: 'Stainless steel ice pick from the bar cart.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'knife'
    },
    { 
      name: 'Paperweight', 
      description: 'Crystal paperweight, 5 pounds, sharp edges.',
      weight: 'Medium-weight',
      type: 'Blunt',
      icon: 'dice'
    }
  ],
  locations: [
    { 
      name: 'Penthouse', 
      description: 'Luxury suite on the 40th floor with private elevator.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'hotel'
    },
    { 
      name: 'Spa', 
      description: 'Executive spa with sauna and massage rooms.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'hospital'
    },
    { 
      name: 'Rooftop Bar', 
      description: 'Open-air bar overlooking the city skyline.',
      setting: 'Outdoors',
      access: 'Public',
      icon: 'glass-cheers'
    },
    { 
      name: 'Gym', 
      description: 'Private gym facility exclusive to penthouse guests.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'dumbbell'
    }
  ],
  clues: [
    'Steven was killed between 10 PM and 11 PM.',
    'Amanda left the hotel at 9 PM, confirmed by valet parking records.',
    'Richard was seen at the Rooftop Bar from 10:15 PM to 11:30 PM.',
    'The Ice Pick was found in the Gym.',
    'Jennifer was responding to a call in the Spa at 10:30 PM.',
    'Michael took a break and was in the lobby from 10 PM to 10:45 PM.',
    'The murder did not occur in the Spa or Rooftop Bar.',
    'The killer was in the Penthouse at the time of death.'
  ],
  statements: [
    {
      suspect: 'Amanda Cole',
      claim: 'I finished my work and left at 9 PM. The valet gave me my car - I have the timestamp on my parking receipt.'
    },
    {
      suspect: 'Richard Torres',
      claim: 'Steven and I are competitors, but I was at the Rooftop Bar having drinks with colleagues all evening. The bartender can verify.'
    },
    {
      suspect: 'Jennifer Wu',
      claim: 'I was helping a guest in the Spa with their room amenities around 10:30. Hotel protocol requires me to log every guest interaction.'
    },
    {
      suspect: 'Michael Santos',
      claim: 'I took my scheduled break at 10 PM. I was in the lobby grabbing coffee and checking my phone. Security cameras will show me there.'
    }
  ],
  hints: [
    'Amanda left before the murder - she\'s eliminated.',
    'Cross-reference who was where during the specific time window.',
    'Michael\'s break location is verifiable by security.',
    'Who lacks an alibi for the Penthouse during the murder time?'
  ],
  solution: { suspect: 'Jennifer Wu', weapon: 'Ice Pick', location: 'Penthouse' }
};