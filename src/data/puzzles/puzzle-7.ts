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
    'Amanda Cole left the hotel entirely and was seen at a local restaurant.',
    'Richard Torres was at the Rooftop Bar, as confirmed by several patrons.',
    'The Ice Pick was found in the Gym.',
    'Jennifer Wu was seen in the Spa by hotel guests.',
    'Michael Santos was in the Lobby, as seen on security cameras.',
    'The murder did not occur in the Spa or Rooftop Bar.',
    'The killer was in the Penthouse.',
    'The person with the Paperweight was not Jennifer Wu.'
  ],
  statements: [
    {
      suspect: 'Amanda Cole',
      claim: 'I finished my work and left. I went to the diner across the street - several waiters saw me there.'
    },
    {
      suspect: 'Richard Torres',
      claim: 'I was at the Rooftop Bar all evening. I\'m a well-known regular, the bartender and other guests can verify.'
    },
    {
      suspect: 'Jennifer Wu',
      claim: 'I was assigned to the Spa area. I was helping multiple guests with their requests throughout the evening.'
    },
    {
      suspect: 'Michael Santos',
      claim: 'I was on my break in the Lobby. I explicitly checked the lobby cameras to make sure I was in view the whole time.'
    }
  ],
  hints: [
    'Amanda Cole has an alibi for being outside the hotel.',
    'Richard Torres and Jennifer Wu were both in public areas with witnesses.',
    'Michael Santos says he was in the Lobby - check if anyone else had access to the Penthouse.',
    'The murder occurred in the Penthouse - who was seen there or had the most opportunity to be there?'
  ],
  solution: { suspect: 'Jennifer Wu', weapon: 'Ice Pick', location: 'Penthouse' }
};