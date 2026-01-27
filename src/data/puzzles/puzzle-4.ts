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
    'Antoine died between 11 PM and midnight on closing night.',
    'Maria was cleaning the Kitchen until 11:45 PM.',
    'The Cleaver was found in the Office, covered with a towel.',
    'Kevin was in the Office counting money from 10:30 PM to 11:30 PM.',
    'Nina finished her shift and left the restaurant at 10:45 PM.',
    'The killer was in the Freezer with Antoine at the time of death.'
  ],
  statements: [
    {
      suspect: 'Maria Santos',
      claim: 'I was disappointed about not getting promoted, but I stayed late cleaning the kitchen like I always do. I was there until nearly midnight.'
    },
    {
      suspect: 'Kevin Wright',
      claim: 'I was in the office doing the books from 10:30 to 11:30. After that I went home - I have the alarm system logs to prove when I left.'
    },
    {
      suspect: 'Nina Patel',
      claim: 'Yes, Antoine docked my tips unfairly, but I just wanted to go home. I clocked out at 10:45 and left immediately.'
    }
  ],
  hints: [
    'Consider who was still at the restaurant during the murder window.',
    'Where was the murder weapon found, and what does that tell you?',
    'Did Nina have opportunity given when she left?'
  ],
  solution: { suspect: 'Maria Santos', weapon: 'Cleaver', location: 'Freezer' }
};