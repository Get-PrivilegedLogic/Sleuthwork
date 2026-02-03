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
    'Richard Torres was at the Rooftop Bar.',
    'Michael Santos was at the Spa.',
    'Amanda Cole was at the Gym.',
    'The murder occurred in the Penthouse.',
    'The person at the Rooftop Bar had the Champagne Bottle.',
    'The person at the Gym had the Paperweight.',
    'The Ice Pick was not at the Spa.',
    'Jennifer Wu was seen near the Penthouse.'
  ],
  statements: [
    {
      suspect: 'Amanda Cole',
      claim: 'I was in the Gym trying to get a workout in. I had the heavy Paperweight with me as a makeshift weight.'
    },
    {
      suspect: 'Richard Torres',
      claim: 'I was at the Rooftop Bar all evening. I had a Champagne Bottle and was enjoying the view.'
    },
    {
      suspect: 'Jennifer Wu',
      claim: 'I was busy attending to the Penthouse guest. I don\'t know what happened!'
    },
    {
      suspect: 'Michael Santos',
      claim: 'I was in the Spa relaxing. I had my Laptop Cord with me to charge my phone.'
    }
  ],
  hints: [
    'Richard Torres was at the Rooftop Bar with the Champagne Bottle.',
    'Michael Santos was at the Spa with the Laptop Cord.',
    'Amanda Cole was at the Gym with the Paperweight.',
    'The murder occurred in the Penthouse - who was seen near there?'
  ],
  solution: { suspect: 'Jennifer Wu', weapon: 'Ice Pick', location: 'Penthouse' }
};