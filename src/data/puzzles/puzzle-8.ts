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
    'Victoria Winters was on the Main Deck.',
    'Gregory Marsh was at the Stern.',
    'Captain James Reed was on the Bridge.',
    'The murder occurred in the Cabin.',
    'The person on the Main Deck had the Champagne Flute.',
    'The person at the Stern had the Rope.',
    'The Fishing Gaff was not on the Bridge.',
    'Sophie Laurent has no alibi.'
  ],
  statements: [
    {
      suspect: 'Victoria Winters',
      claim: 'I was on the Main Deck enjoying the sunset. I had a Champagne Flute of cider.'
    },
    {
      suspect: 'Gregory Marsh',
      claim: 'I was at the Stern for a cigarette. I had the Rope with me to secure some gear.'
    },
    {
      suspect: 'Sophie Laurent',
      claim: 'I was just trying to do my job. I didn\'t kill anyone!'
    },
    {
      suspect: 'Captain James Reed',
      claim: 'I was at the helm on the Bridge the entire time. I had the Anchor ready for when we reached the bay.'
    }
  ],
  hints: [
    'Victoria Winters was on the Main Deck with the Champagne Flute.',
    'Gregory Marsh was at the Stern with the Rope.',
    'Captain James Reed was on the Bridge with the Anchor.',
    'The murder occurred in the Cabin - who has no witness?'
  ],
  solution: { suspect: 'Sophie Laurent', weapon: 'Fishing Gaff', location: 'Cabin' }
};