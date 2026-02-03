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
    'Victoria Winters and Gregory Marsh were together on the Main Deck.',
    'The Fishing Gaff was found on the Bridge.',
    'Captain Reed was piloting the yacht from the Bridge and never left the helm.',
    'Victoria was not in the Cabin.',
    'The person in the Cabin had the Fishing Gaff.',
    'Sophie Laurent was seen entering the Cabin alone.',
    'Gregory went to the Stern to smoke after leaving Victoria on the Main Deck.',
    'The murder occurred in the Cabin.'
  ],
  statements: [
    {
      suspect: 'Victoria Winters',
      claim: 'Gregory and I were on the Main Deck enjoying the sunset. We were together the whole time until the alarm was raised.'
    },
    {
      suspect: 'Gregory Marsh',
      claim: 'I was with Victoria on the deck until I stepped away to the Stern for a cigarette. I was only gone for a minute.'
    },
    {
      suspect: 'Sophie Laurent',
      claim: 'Charles asked me to review his will in the cabin. I was down there working, but I left when I finished to get some air.'
    },
    {
      suspect: 'Captain James Reed',
      claim: 'I was at the helm the entire time. You can\'t leave the Bridge when the yacht is in motion - it\'s dangerous.'
    }
  ],
  hints: [
    'Victoria and Gregory alibi each other for being on the Main Deck.',
    'Captain Reed has a professional alibi for being on the Bridge.',
    'Sophie Laurent admits to being in the Cabin - check if anyone else was there.',
    'The murder weapon (Fishing Gaff) was found on the Bridge - where did the killer go after the crime?'
  ],
  solution: { suspect: 'Sophie Laurent', weapon: 'Fishing Gaff', location: 'Cabin' }
};