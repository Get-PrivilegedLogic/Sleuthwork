import type { Puzzle } from '../../types/puzzle';

export const puzzle10: Puzzle = {
  id: 'puzzle-10',
  title: 'Death at the Manor',
  difficulty: 'hard',
  releaseDate: '2025-12-10T12:00:00Z',
  backstory: 'Lord Edmund Ashford was found dead in his private study. Four members of the household were present on the estate that stormy evening.',
  suspects: [
    {
      name: 'Lady Charlotte',
      bio: 'Edmund\'s wife who inherited nothing under the current will.',
      height: '5\'7"',
      build: 'Slim',
      eyeColor: 'Blue eyes',
      hairColor: 'Blonde hair',
      handedness: 'Right-handed',
      age: 'Late 30s',
      icon: 'user'
    },
    {
      name: 'Arthur Ashford',
      bio: 'Edmund\'s younger brother and potential heir.',
      height: '6\'1"',
      build: 'Athletic',
      eyeColor: 'Brown eyes',
      hairColor: 'Brown hair',
      handedness: 'Right-handed',
      age: 'Mid-40s',
      icon: 'user-tie'
    },
    {
      name: 'Dr. Philip Hayes',
      bio: 'Family physician making a house call that evening.',
      height: '5\'9"',
      build: 'Average',
      eyeColor: 'Hazel eyes',
      hairColor: 'Gray hair',
      handedness: 'Left-handed',
      age: 'Late 50s',
      icon: 'user-nurse'
    },
    {
      name: 'Margaret Price',
      bio: 'Head housekeeper who has served the family for 30 years.',
      height: '5\'5"',
      build: 'Stocky',
      eyeColor: 'Brown eyes',
      hairColor: 'White hair',
      handedness: 'Right-handed',
      age: 'Early 60s',
      icon: 'user'
    }
  ],
  weapons: [
    {
      name: 'Fireplace Poker',
      description: 'Heavy iron poker from the study fireplace.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'hammer'
    },
    {
      name: 'Letter Opener',
      description: 'Victorian silver letter opener with 6-inch blade.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'knife'
    },
    {
      name: 'Candlestick',
      description: 'Solid brass candlestick, 14 inches tall, ornate.',
      weight: 'Medium-weight',
      type: 'Blunt',
      icon: 'lightbulb'
    },
    {
      name: 'Rope',
      description: 'Silk curtain tie from the drawing room, 8 feet long.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'anchor'
    }
  ],
  locations: [
    {
      name: 'Study',
      description: 'Wood-paneled room with locked desk and fireplace.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'book'
    },
    {
      name: 'Drawing Room',
      description: 'Formal sitting room with piano and portraits.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'couch'
    },
    {
      name: 'Kitchen',
      description: 'Large servants\' kitchen in the basement level.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'utensils'
    },
    {
      name: 'Conservatory',
      description: 'Glass-enclosed garden room with tropical plants.',
      setting: 'Mixed',
      access: 'Public',
      icon: 'tree'
    }
  ],
  clues: [
    'Lady Charlotte was in the Drawing Room.',
    'Margaret Price was in the Kitchen.',
    'Arthur Ashford was in the Conservatory.',
    'The murder occurred in the Study.',
    'The person in the Drawing Room had the Rope.',
    'The person in the Kitchen had the Fireplace Poker.',
    'The Letter Opener was not in the Conservatory.',
    'Dr. Philip Hayes has no witness for his presence.'
  ],
  statements: [
    {
      suspect: 'Lady Charlotte',
      claim: 'I was in the Drawing Room playing piano. I had my silk Rope tie with me as part of my gown.'
    },
    {
      suspect: 'Arthur Ashford',
      claim: 'I was in the Conservatory enjoying the storm. I had the Candlestick with me to light my way.'
    },
    {
      suspect: 'Dr. Philip Hayes',
      claim: 'I was just trying to help. I didn\'t see Edmund!'
    },
    {
      suspect: 'Margaret Price',
      claim: 'I was in the Kitchen preparing tea. I had the Fireplace Poker with me to tend to the secondary stove.'
    }
  ],
  hints: [
    'Lady Charlotte was in the Drawing Room with the Rope.',
    'Margaret Price was in the Kitchen with the Fireplace Poker.',
    'Arthur Ashford was in the Conservatory with the Candlestick.',
    'The murder occurred in the Study - who was unaccounted for?'
  ],
  solution: { suspect: 'Dr. Philip Hayes', weapon: 'Letter Opener', location: 'Study' }
};