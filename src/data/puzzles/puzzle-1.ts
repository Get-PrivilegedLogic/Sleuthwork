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
      name: 'Ballroom',
      description: 'Large room adjacent to the study, connected by side door.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'music'
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
    'Marcus Webb was seen in the Conservatory.',
    'Alice Chen was in the Ballroom with many witnesses.',
    'The murder occurred in the Study.',
    'The person in the Conservatory had the Candlestick.',
    'Alice Chen did not have the Poison.',
    'The Letter Opener was not in the Study.'
  ],
  statements: [
    {
      suspect: 'Alice Chen',
      claim: 'I was in the Ballroom the whole time. Ask anyone, I never left the main floor.'
    },
    {
      suspect: 'Marcus Webb',
      claim: 'I was in the Conservatory with my heavy Candlestick. I didn\'t want any trouble.'
    },
    {
      suspect: 'Diana Cross',
      claim: 'I was just trying to talk to Victor. I don\'t know how he ended up dead!'
    }
  ],
  hints: [
    'Alice Chen was in the Ballroom and didn\'t have the Poison.',
    'Marcus Webb was in the Conservatory with the Candlestick.',
    'The murder occurred in the Study - who was seen there?',
    'The Letter Opener was not in the Study, so who had it?'
  ],
  solution: { suspect: 'Diana Cross', weapon: 'Poison', location: 'Study' }
};