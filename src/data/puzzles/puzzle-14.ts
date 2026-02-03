import type { Puzzle } from '../../types/puzzle';

export const puzzle14: Puzzle = {
  id: 'puzzle-14',
  title: 'Murder on the Midnight Express',
  difficulty: 'ludicrous',
  releaseDate: '2025-12-14T12:00:00Z',
  backstory: 'International arms dealer Viktor Volkov was found dead in his private train car during an overnight journey through the Alps. Five passengers had access to his cabin. The train never stopped.',

  suspects: [
    {
      name: 'Natasha Ivanova',
      bio: 'Volkov\'s former bodyguard turned rival, traveling under fake passport.',
      height: '5\'10"',
      build: 'Muscular',
      eyeColor: 'Gray eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Mid-30s',
      icon: 'user-shield'
    },
    {
      name: 'Ambassador Chen Li',
      bio: 'Diplomat secretly negotiating weapons deal with Volkov.',
      height: '5\'9"',
      build: 'Average',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Early 50s',
      icon: 'user-tie'
    },
    {
      name: 'Dr. Heinrich Mueller',
      bio: 'Swiss banker managing Volkov\'s offshore accounts.',
      height: '6\'1"',
      build: 'Slim',
      eyeColor: 'Blue eyes',
      hairColor: 'Blonde hair',
      handedness: 'Left-handed',
      age: 'Late 40s',
      icon: 'user-tie'
    },
    {
      name: 'Captain Maria Santos',
      bio: 'Interpol agent working undercover as train staff.',
      height: '5\'7"',
      build: 'Athletic',
      eyeColor: 'Brown eyes',
      hairColor: 'Brown hair',
      handedness: 'Right-handed',
      age: 'Early 40s',
      icon: 'user-secret'
    },
    {
      name: 'Dmitri Federov',
      bio: 'Volkov\'s nephew and sole heir to the weapons empire.',
      height: '5\'11"',
      build: 'Average',
      eyeColor: 'Brown eyes',
      hairColor: 'Brown hair',
      handedness: 'Right-handed',
      age: 'Late 20s',
      icon: 'user'
    }
  ],

  weapons: [
    {
      name: 'Poison Dart',
      description: 'Miniature dart coated with fast-acting neurotoxin, from blowgun.',
      weight: 'Light-weight',
      type: 'Poison',
      icon: 'syringe'
    },
    {
      name: 'Train Cable',
      description: 'Emergency brake cable, 8 feet long, steel-reinforced.',
      weight: 'Medium-weight',
      type: 'Other',
      icon: 'anchor'
    },
    {
      name: 'Ice Pick',
      description: 'Bar tool from the dining car, pointed and deadly.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'knife'
    },
    {
      name: 'Crystal Ashtray',
      description: 'Heavy cut crystal from smoking lounge, sharp edges.',
      weight: 'Medium-weight',
      type: 'Blunt',
      icon: 'glass-cheers'
    },
    {
      name: 'Syringe',
      description: 'Medical supply from first aid kit, found empty.',
      weight: 'Light-weight',
      type: 'Poison',
      icon: 'syringe'
    }
  ],

  locations: [
    {
      name: 'Private Car',
      description: 'Volkov\'s luxury compartment with bulletproof windows.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'bed'
    },
    {
      name: 'Dining Car',
      description: 'Restaurant car serving late-night meals and drinks.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'utensils'
    },
    {
      name: 'Observation Deck',
      description: 'Glass-domed car with panoramic Alpine views.',
      setting: 'Mixed',
      access: 'Public',
      icon: 'train'
    },
    {
      name: 'Baggage Car',
      description: 'Cargo storage area with locked luggage compartments.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'warehouse'
    },
    {
      name: 'Staff Quarters',
      description: 'Crew sleeping area restricted to train employees.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'door-open'
    }
  ],

  clues: [
    'Natasha Ivanova was playing poker in the Dining Car, seen by three other players.',
    'Ambassador Chen was locked in his cabin three cars away from the Private Car.',
    'Dr. Mueller was on a video conference call on the Observation Deck with timestamp verification.',
    'Captain Santos was conducting a security sweep of the Baggage Car.',
    'Dmitri Federov was seen entering the Private Car by a passenger.',
    'The murder weapon was the Poison Dart, found in the Staff Quarters.',
    'The killer was in the Private Car.',
    'Dmitri had a staff key card that allowed him access to the Staff Quarters.',
    'The Dining Car poker game never paused.',
    'The person in the Baggage Car was not the killer.',
    'The killer stashed the weapon in a location restricted to train employees.',
    'Dmitri was the only guest with access to the Staff Quarters.'
  ],
  statements: [
    {
      suspect: 'Natasha Ivanova',
      claim: 'I was playing poker in the Dining Car the whole night. We had a four-handed game going and none of us even took a bathroom break.'
    },
    {
      suspect: 'Ambassador Chen Li',
      claim: 'I retired to my cabin early and locked the door. I didn\'t leave until the train arrived at the next station for breakfast.'
    },
    {
      suspect: 'Dr. Heinrich Mueller',
      claim: 'I was on the Observation Deck for a video call with my clients in Tokyo. The connection logs prove I was there for the duration.'
    },
    {
      suspect: 'Captain Maria Santos',
      claim: 'I was performing my security sweep of the Baggage Car. It\'s a required protocol and I have the logs to show I was occupied there.'
    },
    {
      suspect: 'Dmitri Federov',
      claim: 'I went to my uncle\'s car for a drink, but he seemed tired so I left. I spent the rest of the night in the Observation Deck watching the mountains.'
    }
  ],
  hints: [
    'Natasha Ivanova, Ambassador Chen, and Dr. Mueller all have solid alibis with witnesses or electronic logs.',
    'Captain Maria Santos was in the Baggage Car - check if anyone else was unaccounted for in the Private Car.',
    'Dmitri Federov admits to being in the Private Car - does he have a witness for his later location?',
    'The murder weapon (Poison Dart) was found in the Staff Quarters - who had a way to access that restricted area?',
    'Dmitri had his uncle\'s staff key card.'
  ],

  solution: {
    suspect: 'Dmitri Federov',
    weapon: 'Poison Dart',
    location: 'Private Car'
  }
};