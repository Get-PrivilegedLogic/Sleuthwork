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
    'The person who brought the Letter Opener was not Alice Chen.',
    'The murder weapon was found in the Library.',
    'Marcus Webb was seen in the Conservatory with a witness.',
    'Diana Cross had access to the storage room where the poison was kept.',
    'The person in the Study was not Marcus Webb.',
    'Alice Chen was seen in the Ballroom with many witnesses.'
  ],
  statements: [
    {
      suspect: 'Alice Chen',
      claim: 'I was in the Ballroom the whole time. Ask anyone, I never left the main floor.'
    },
    {
      suspect: 'Marcus Webb',
      claim: 'I was in the Conservatory trying to calm down. Someone saw me there, so I couldn\'t have been in the Study.'
    },
    {
      suspect: 'Diana Cross',
      claim: 'I went to the storage room to clear my head. Victor was alive when I left him, I swear!'
    }
  ],
  hints: [
    'Alice has a solid alibi for being in the Ballroom.',
    'Marcus was in the Conservatory - check who that leaves for the Study.',
    'The murder weapon\'s location tells you where the killer went after the crime.',
    'Diana mentions Victor was in his Study - what weapon did she have access to?'
  ],
  solution: { suspect: 'Diana Cross', weapon: 'Poison', location: 'Study' }
};