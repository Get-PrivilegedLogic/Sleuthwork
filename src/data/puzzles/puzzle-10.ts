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
    'Edmund was killed between 9 PM and 10 PM during the thunderstorm.',
    'Lady Charlotte was playing piano in the Drawing Room from 8:45 PM to 9:30 PM, heard by servants.',
    'Arthur arrived at the manor at 9:15 PM, delayed by the storm.',
    'The Candlestick was found in the Conservatory.',
    'Dr. Hayes was examining a patient in the Kitchen at 9 PM.',
    'Margaret was serving tea in the Drawing Room at 9 PM.',
    'The murder weapon was the Letter Opener.',
    'The killer was in the Study at the time of death.',
    'Charlotte was not in the Study when the murder occurred.',
    'Arthur did not use the Candlestick.'
  ],
  statements: [
    {
      suspect: 'Lady Charlotte',
      claim: 'Edmund and I had a loveless marriage, but I was playing piano all evening. The servants heard me - they always complain about the noise.'
    },
    {
      suspect: 'Arthur Ashford',
      claim: 'The storm delayed me terribly. I didn\'t arrive until after 9 PM. When I got here, the house was in chaos - Edmund was already dead.'
    },
    {
      suspect: 'Dr. Philip Hayes',
      claim: 'Margaret called me because one of the kitchen staff had taken ill. I was treating them in the Kitchen when the tragedy occurred.'
    },
    {
      suspect: 'Margaret Price',
      claim: 'I\'ve served this family for 30 years. I was doing my duties - bringing tea to Lady Charlotte in the Drawing Room, then attending to the sick staff member with the doctor.'
    }
  ],
  hints: [
    'Charlotte was playing piano with witnesses - she\'s eliminated.',
    'Arthur arrived after the murder started - could he have done it?',
    'The murder weapon is the Letter Opener, not the Candlestick.',
    'Who was unaccounted for during the exact murder window?',
    'Dr. Hayes and Margaret both have alibis at 9 PM - what about 9:30 PM?'
  ],
  solution: { suspect: 'Dr. Philip Hayes', weapon: 'Letter Opener', location: 'Study' }
};