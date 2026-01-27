import type { Puzzle } from '../../types/puzzle';

export const puzzle8: Puzzle = {
  id: 'puzzle-8',
  title: 'Death on the Yacht',
  difficulty: 'medium',
  releaseDate: '2025-12-08T12:00:00Z',
  backstory: 'Shipping magnate Charles Winters was found dead on his private yacht during a sunset cruise. Four guests were aboard the vessel.',
  suspects: [
    { 
      name: 'Victoria Winters', 
      bio: 'Charles\' daughter and heir to the shipping empire.',
      height: '5\'8"',
      build: 'Slim',
      eyeColor: 'Blue eyes',
      hairColor: 'Blonde hair',
      handedness: 'Right-handed',
      age: 'Early 30s',
      icon: 'user'
    },
    { 
      name: 'Gregory Marsh', 
      bio: 'Business partner negotiating a major merger.',
      height: '6\'0"',
      build: 'Average',
      eyeColor: 'Brown eyes',
      hairColor: 'Brown hair',
      handedness: 'Right-handed',
      age: 'Mid-40s',
      icon: 'user-tie'
    },
    { 
      name: 'Sophie Laurent', 
      bio: 'Charles\' personal attorney handling his will.',
      height: '5\'6"',
      build: 'Average',
      eyeColor: 'Green eyes',
      hairColor: 'Red hair',
      handedness: 'Left-handed',
      age: 'Late 30s',
      icon: 'user-tie'
    },
    { 
      name: 'Captain James Reed', 
      bio: 'Yacht captain with 20 years of service.',
      height: '5\'11"',
      build: 'Stocky',
      eyeColor: 'Gray eyes',
      hairColor: 'White hair',
      handedness: 'Right-handed',
      age: 'Late 50s',
      icon: 'user-shield'
    }
  ],
  weapons: [
    { 
      name: 'Anchor', 
      description: 'Decorative brass anchor, 25 pounds.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'anchor'
    },
    { 
      name: 'Fishing Gaff', 
      description: 'Sharp metal hook on wooden pole, 4 feet long.',
      weight: 'Medium-weight',
      type: 'Sharp',
      icon: 'fish'
    },
    { 
      name: 'Champagne Flute', 
      description: 'Crystal glass with sharp broken stem.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'glass-cheers'
    },
    { 
      name: 'Rope', 
      description: 'Nautical rope used for mooring, 30 feet coiled.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'anchor'
    }
  ],
  locations: [
    { 
      name: 'Main Deck', 
      description: 'Open deck with seating area and bar setup.',
      setting: 'Outdoors',
      access: 'Public',
      icon: 'ship'
    },
    { 
      name: 'Bridge', 
      description: 'Control room where captain operates the yacht.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'briefcase'
    },
    { 
      name: 'Cabin', 
      description: 'Master cabin below deck with private quarters.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'bed'
    },
    { 
      name: 'Stern', 
      description: 'Rear deck with fishing equipment and swim platform.',
      setting: 'Outdoors',
      access: 'Public',
      icon: 'ship'
    }
  ],
  clues: [
    'Charles died between 7 PM and 8 PM as the sun was setting.',
    'Victoria was on the Main Deck with Gregory from 6:45 PM to 7:30 PM.',
    'The Fishing Gaff was found on the Bridge.',
    'Captain Reed was piloting the yacht from the Bridge from 6 PM to 8 PM.',
    'Sophie was in the Cabin reviewing documents until 7:15 PM.',
    'Gregory went to the Stern to smoke at 7:30 PM.',
    'The murder occurred in the Cabin.',
    'Victoria was not in the Cabin at the time of death.'
  ],
  statements: [
    {
      suspect: 'Victoria Winters',
      claim: 'Gregory and I were on the Main Deck enjoying the sunset together. We were discussing the business when we heard the commotion.'
    },
    {
      suspect: 'Gregory Marsh',
      claim: 'Victoria and I were together on deck until I went to the Stern for a cigarette around 7:30. Beautiful evening, terrible end.'
    },
    {
      suspect: 'Sophie Laurent',
      claim: 'Charles asked me to review some estate documents in his cabin. I was down there working until about 7:15, then went up to get fresh air.'
    },
    {
      suspect: 'Captain James Reed',
      claim: 'I was at the helm the entire cruise. You can\'t leave the Bridge when you\'re navigating - it\'s basic seamanship.'
    }
  ],
  hints: [
    'Victoria and Gregory were together - they alibi each other.',
    'Captain Reed was busy piloting - could he have left the Bridge?',
    'Sophie was in the Cabin until 7:15 PM - what happened after she left?',
    'Who had access to the Cabin during the murder window?'
  ],
  solution: { suspect: 'Sophie Laurent', weapon: 'Fishing Gaff', location: 'Cabin' }
};