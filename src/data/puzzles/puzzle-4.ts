import type { Puzzle } from '../../types/puzzle';

export const puzzle4: Puzzle = {
  id: 'puzzle-4',
  title: 'Death at the Restaurant',
  difficulty: 'easy',
  releaseDate: '2025-12-04T12:00:00Z',
  backstory: 'Celebrity chef Antoine Rousseau was found dead in the walk-in freezer of his Michelin-starred restaurant. Three staff members were working the closing shift.',
  suspects: [
    {
      name: 'Maria Santos',
      bio: 'Sous chef who was passed over for head chef position.',
      height: '5\'3"',
      build: 'Petite',
      eyeColor: 'Dark brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Early 30s',
      icon: 'user'
    },
    {
      name: 'Kevin Wright',
      bio: 'Restaurant manager handling the night\'s receipts.',
      height: '6\'1"',
      build: 'Average',
      eyeColor: 'Blue eyes',
      hairColor: 'Brown hair',
      handedness: 'Right-handed',
      age: 'Late 30s',
      icon: 'user-tie'
    },
    {
      name: 'Nina Patel',
      bio: 'Server who had her tips docked by Antoine last week.',
      height: '5\'6"',
      build: 'Slim',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Left-handed',
      age: 'Mid-20s',
      icon: 'user'
    }
  ],
  weapons: [
    {
      name: 'Cleaver',
      description: 'Professional kitchen cleaver, freshly sharpened.',
      weight: 'Medium-weight',
      type: 'Sharp',
      icon: 'knife'
    },
    {
      name: 'Pan',
      description: 'Cast iron skillet, 12 inches, very heavy.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'utensils'
    },
    {
      name: 'Corkscrew',
      description: 'Sommelier corkscrew with sharp spiral blade.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'wine-bottle'
    }
  ],
  locations: [
    {
      name: 'Freezer',
      description: 'Large walk-in freezer at -10°F, door locks from outside.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'warehouse'
    },
    {
      name: 'Kitchen',
      description: 'Main prep kitchen with all cooking equipment.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'utensils'
    },
    {
      name: 'Office',
      description: 'Small back office where Antoine kept records and safe.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'briefcase'
    }
  ],
  clues: [
    'Kevin Wright was in the Office.',
    'Nina Patel was working in the Kitchen.',
    'The murder occurred in the Freezer.',
    'The person in the Kitchen had the Pan.',
    'The Cleaver was not in the Office.',
    'Maria Santos has no alibi.'
  ],
  statements: [
    {
      suspect: 'Maria Santos',
      claim: 'I was just trying to finish my shift. I don\'t know anything about a murder!'
    },
    {
      suspect: 'Kevin Wright',
      claim: 'I was in the office counting the night\'s receipts. I didn\'t leave until I was finished.'
    },
    {
      suspect: 'Nina Patel',
      claim: 'I was in the Kitchen cleaning up. I had the heavy cast iron pan with me to scour.'
    }
  ],
  hints: [
    'Kevin Wright was in the Office.',
    'Nina Patel was in the Kitchen with the Pan.',
    'The murder occurred in the Freezer - who doesn\'t have an alibi?',
    'The Cleaver was not in the Office - who must have had it?'
  ],
  solution: { suspect: 'Maria Santos', weapon: 'Cleaver', location: 'Freezer' }
};
