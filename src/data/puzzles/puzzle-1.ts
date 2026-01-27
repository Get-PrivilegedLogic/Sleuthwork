import type { Puzzle } from '../../types/puzzle';

export const puzzle1: Puzzle = {
  id: 'puzzle-1',
  title: 'Murder at the Gala',
  difficulty: 'easy',
  releaseDate: '2025-12-01T12:00:00Z',
  backstory: 'Billionaire Victor Blackwood was found dead in his study during the annual charity gala at Ravencrest Manor. Three guests had access to the locked wing where the body was discovered.',
  suspects: [
    { 
      name: 'Alice Chen', 
      bio: 'Victor\'s business partner who arrived 30 minutes late to the gala.',
      height: '5\'6"',
      build: 'Slim',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Mid-30s',
      icon: 'user-tie'
    },
    { 
      name: 'Marcus Webb', 
      bio: 'Former security chief fired by Victor six months ago.',
      height: '6\'2"',
      build: 'Athletic',
      eyeColor: 'Blue eyes',
      hairColor: 'Gray hair',
      handedness: 'Left-handed',
      age: 'Late 40s',
      icon: 'user-shield'
    },
    { 
      name: 'Diana Cross', 
      bio: 'Victor\'s ex-wife who was seen arguing with him in the hallway.',
      height: '5\'8"',
      build: 'Average',
      eyeColor: 'Green eyes',
      hairColor: 'Blonde hair',
      handedness: 'Right-handed',
      age: 'Early 40s',
      icon: 'user'
    }
  ],
  weapons: [
    { 
      name: 'Letter Opener', 
      description: 'Silver antique from Victor\'s desk, recently sharpened.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'knife'
    },
    { 
      name: 'Candlestick', 
      description: 'Heavy brass candlestick from the mantle, 12 inches tall.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'lightbulb'
    },
    { 
      name: 'Poison', 
      description: 'Rat poison from the manor\'s storage room, fast-acting.',
      weight: 'Light-weight',
      type: 'Poison',
      icon: 'skull'
    }
  ],
  locations: [
    { 
      name: 'Study', 
      description: 'Victor\'s private study with locked door, key kept on his person.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'book'
    },
    { 
      name: 'Library', 
      description: 'Large room adjacent to the study, connected by side door.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'book'
    },
    { 
      name: 'Conservatory', 
      description: 'Glass-walled room at the back of the manor, recently renovated.',
      setting: 'Mixed',
      access: 'Public',
      icon: 'tree'
    }
  ],
  clues: [
    'The victim was killed between 9:00 PM and 9:30 PM.',
    'Alice Chen was giving a speech in the main ballroom from 8:45 PM to 9:15 PM.',
    'The murder weapon was found in the Library.',
    'Marcus Webb was seen in the Conservatory at 9:20 PM by two witnesses.',
    'Diana Cross had access to the storage room where the poison was kept.',
    'The person in the Study at the time of death was not Marcus Webb.'
  ],
  statements: [
    {
      suspect: 'Alice Chen',
      claim: 'I arrived late because of traffic, but I was on stage giving my presentation during the time Victor must have died.'
    },
    {
      suspect: 'Marcus Webb',
      claim: 'Yes, I was fired, but I moved on. I was in the Conservatory smoking when it happened - two people saw me there.'
    },
    {
      suspect: 'Diana Cross',
      claim: 'We argued earlier about the divorce settlement, but I left him alive. I needed time to think, so I went to the storage room to cool off.'
    }
  ],
  hints: [
    'Consider where each person was during the time of the murder.',
    'The murder weapon\'s location tells you where the killer went after the crime.',
    'Alice has an alibi for most of the murder window - could she have killed Victor before or after her speech?',
    'If Marcus was in the Conservatory at 9:20 PM, could he have been in the Study earlier?'
  ],
  solution: { suspect: 'Diana Cross', weapon: 'Poison', location: 'Study' }
};