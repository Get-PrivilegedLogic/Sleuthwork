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
    'Lady Charlotte was playing piano in the Drawing Room, overheard by all the house staff.',
    'Arthur Ashford arrived at the manor soaked from the storm, seen by the butler.',
    'The Candlestick was found in the Conservatory.',
    'Dr. Philip Hayes was in the Kitchen treating an ill staff member.',
    'Margaret Price was serving tea in the Drawing Room and then went to the Kitchen.',
    'The murder weapon was the Letter Opener.',
    'The killer was in the Study.',
    'Lady Charlotte was not in the Study.',
    'Arthur Ashford did not use the Candlestick.',
    'The person in the Kitchen was not the killer.'
  ],
  statements: [
    {
      suspect: 'Lady Charlotte',
      claim: 'I was in the Drawing Room playing piano all evening. Ask any of the servants, they couldn\'t miss the noise.'
    },
    {
      suspect: 'Arthur Ashford',
      claim: 'I just arrived from the train station! I was drenched and went straight to my room to change. I never even saw Edmund.'
    },
    {
      suspect: 'Dr. Philip Hayes',
      claim: 'I was in the Kitchen tending to one of the maids who had a sudden fever. Margaret was there with me for part of the time.'
    },
    {
      suspect: 'Margaret Price',
      claim: 'I served tea to Lady Charlotte and then went downstairs to help the doctor with the sick staff member.'
    }
  ],
  hints: [
    'Lady Charlotte has multiple witnesses for her location in the Drawing Room.',
    'Arthur Ashford claims he went straight to his room, but where was he really seen first?',
    'Dr. Hayes and Margaret alibi each other for being in the Kitchen.',
    'The murder weapon (Letter Opener) was taken from the Study - who had no witness for their whereabouts during that time?'
  ],
  solution: { suspect: 'Dr. Philip Hayes', weapon: 'Letter Opener', location: 'Study' }
};