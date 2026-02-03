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
    'Nicholas Carver was at the poker table in the High-Roller Suite, seen by the dealer.',
    'Elena Petrova was in the Security Office monitoring the casino floor.',
    'The Crystal Decanter was found in the Vault.',
    'Marcus DeVille was at the VIP Bar having drinks with several patrons.',
    'Sophia Romano was seen entering the Vault by a security guard.',
    'The murder took place in the Vault.',
    'The person with the Dice was in the Bar.',
    'Elena was in the Security Office and never left her post.',
    'Marcus was not in the High-Roller Suite.',
    'The killer did not use the Poker Chip Rack.'
  ],
  statements: [
    {
      suspect: 'Nicholas Carver',
      claim: 'I was at the poker table all night. I didn\'t leave until the game broke up - the dealer can confirm I never even stood up.'
    },
    {
      suspect: 'Elena Petrova',
      claim: 'I was assigned to the Security Office. I was watching the cards on the floor for counters and didn\'t leave for any reason.'
    },
    {
      suspect: 'Marcus DeVille',
      claim: 'I was at the VIP Bar. I\'m a rival, sure, but I was there for business and many people saw me enjoying a drink.'
    },
    {
      suspect: 'Sophia Romano',
      claim: 'I went to the Vault to get some cash for the morning shift. I was only there for a few minutes while searching for the ledger.'
    }
  ],
  hints: [
    'Elena Petrova has a professional alibi for being in the Security Office.',
    'Nicholas Carver and Marcus DeVille were both in public areas with witnesses.',
    'Sophia Romano admits to being in the Vault - check if anyone else was there or if her alibi holds up.',
    'The murder weapon (Crystal Decanter) was found in the Vault - who was the only one admitted to being there?'
  ],
  solution: { suspect: 'Sophia Romano', weapon: 'Crystal Decanter', location: 'Vault' }
};