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
    'The person cleaning the Kitchen was Maria Santos.',
    'The Cleaver was found in the Office, hidden under a towel.',
    'Kevin was in the Office for the entire evening shift.',
    'Nina Patel left the restaurant and was seen getting into a taxi.',
    'The murder weapon was not the Pan.',
    'The killer was in the Freezer with Antoine.'
  ],
  statements: [
    {
      suspect: 'Maria Santos',
      claim: 'I was cleaning the kitchen after the dinner rush. I never even went near the freezer.'
    },
    {
      suspect: 'Kevin Wright',
      claim: 'I was in the office counting the night\'s receipts. I didn\'t leave until I was finished.'
    },
    {
      suspect: 'Nina Patel',
      claim: 'I left early because I wasn\'t feeling well. I caught a taxi right outside - the driver can confirm.'
    }
  ],
  hints: [
    'Nina Patel has an outside witness for her alibi.',
    'Kevin was in the Office - check who else had access to the Kitchen and Freezer.',
    'Where was the Cleaver found, and who was in that room?',
    'The killer must have been in the Freezer - who doesn\'t have a solid alibi for their location?'
  ],
  solution: { suspect: 'Maria Santos', weapon: 'Cleaver', location: 'Freezer' }
};