import type { Puzzle } from '../../types/puzzle';

export const puzzle11: Puzzle = {
  id: 'puzzle-11',
  title: 'Murder at the Casino',
  difficulty: 'hard',
  releaseDate: '2025-12-11T12:00:00Z',
  backstory: 'Casino owner Vincent Romano was found dead in the high-roller suite. Four people had VIP access to the private gaming floor that night.',
  suspects: [
    { 
      name: 'Nicholas Carver', 
      bio: 'Professional gambler who owed Vincent $500,000.',
      height: '6\'0"',
      build: 'Slim',
      eyeColor: 'Gray eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Late 30s',
      icon: 'user-secret'
    },
    { 
      name: 'Elena Petrova', 
      bio: 'Casino floor manager responsible for security.',
      height: '5\'9"',
      build: 'Athletic',
      eyeColor: 'Green eyes',
      hairColor: 'Red hair',
      handedness: 'Right-handed',
      age: 'Mid-30s',
      icon: 'user-shield'
    },
    { 
      name: 'Marcus DeVille', 
      bio: 'Rival casino owner from across the street.',
      height: '6\'2"',
      build: 'Average',
      eyeColor: 'Brown eyes',
      hairColor: 'Brown hair',
      handedness: 'Left-handed',
      age: 'Early 50s',
      icon: 'user-tie'
    },
    { 
      name: 'Sophia Romano', 
      bio: 'Vincent\'s sister and casino part-owner.',
      height: '5\'6"',
      build: 'Average',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Late 40s',
      icon: 'user'
    }
  ],
  weapons: [
    { 
      name: 'Poker Chip Rack', 
      description: 'Heavy acrylic chip carrier, 10 pounds when full.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'chess'
    },
    { 
      name: 'Crystal Decanter', 
      description: 'Lead crystal whiskey decanter, expensive and heavy.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'wine-bottle'
    },
    { 
      name: 'Tie', 
      description: 'Designer silk necktie, 58 inches long.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'user'
    },
    { 
      name: 'Dice', 
      description: 'Oversized novelty dice made of solid brass, 3 inches per side.',
      weight: 'Medium-weight',
      type: 'Blunt',
      icon: 'dice'
    }
  ],
  locations: [
    { 
      name: 'High-Roller Suite', 
      description: 'Private room for big-stakes poker games.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'chess'
    },
    { 
      name: 'Security Office', 
      description: 'Monitoring room with live camera feeds.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'warehouse'
    },
    { 
      name: 'Bar', 
      description: 'Exclusive VIP bar on the gaming floor.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'glass-cheers'
    },
    { 
      name: 'Vault', 
      description: 'Secure room where cash and chips are stored.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'key'
    }
  ],
  clues: [
    'Vincent was killed between 2 AM and 3 AM.',
    'Nicholas was playing poker in the High-Roller Suite from 1 AM to 2:30 AM.',
    'Elena was reviewing security footage in the Security Office from 2:15 AM to 3:15 AM.',
    'The Crystal Decanter was found in the Vault.',
    'Marcus was seen entering the casino at 1:45 AM by the valet.',
    'Sophia was at the Bar until 2 AM, then went to get cash.',
    'Nicholas left the High-Roller Suite at 2:30 AM.',
    'The murder took place in the Vault.',
    'Elena was in the Security Office during the murder.',
    'Marcus was not at the Bar during the time of death.'
  ],
  statements: [
    {
      suspect: 'Nicholas Carver',
      claim: 'Yes, I owe Vincent money. But I was at the poker table trying to win it back. I played until 2:30 AM - the dealer can confirm.'
    },
    {
      suspect: 'Elena Petrova',
      claim: 'I was in the Security Office reviewing footage from earlier in the evening. We had a suspected card counter and I was checking the tapes.'
    },
    {
      suspect: 'Marcus DeVille',
      claim: 'Vincent and I are business rivals, but I came to talk partnership. I arrived around 1:45 and we had drinks at the Bar to discuss terms.'
    },
    {
      suspect: 'Sophia Romano',
      claim: 'I was at the Bar having a nightcap until about 2 AM. Then I needed to get cash from the Vault for tomorrow\'s operations.'
    }
  ],
  hints: [
    'Elena was watching cameras - she has a verifiable alibi.',
    'Nicholas left the poker game at 2:30 AM - where did he go?',
    'Sophia went to get cash at 2 AM - which room has cash?',
    'Marcus entered at 1:45 AM but where was he during the murder?',
    'The murder was in the Vault - who had reason to go there?'
  ],
  solution: { suspect: 'Sophia Romano', weapon: 'Crystal Decanter', location: 'Vault' }
};