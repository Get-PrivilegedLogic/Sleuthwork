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
    'Natasha Ivanova was in the Dining Car.',
    'Ambassador Chen Li was on the Observation Deck.',
    'Dr. Heinrich Mueller was in the Baggage Car.',
    'Captain Maria Santos was in the Staff Quarters.',
    'The murder occurred in the Private Car.',
    'The person in the Dining Car had the Crystal Ashtray.',
    'The person on the Observation Deck had the Train Cable.',
    'The person in the Baggage Car had the Ice Pick.',
    'The Poison Dart was not in the Staff Quarters.',
    'Dmitri Federov has no alibi.'
  ],
  statements: [
    {
      suspect: 'Natasha Ivanova',
      claim: 'I was in the Dining Car. I had the Crystal Ashtray with me while I played cards.'
    },
    {
      suspect: 'Ambassador Chen Li',
      claim: 'I was on the Observation Deck. I had the Train Cable with me - I found it loose and was going to report it.'
    },
    {
      suspect: 'Dr. Heinrich Mueller',
      claim: 'I was in the Baggage Car checking on my luggage. I had the Ice Pick with me to open a stubborn crate.'
    },
    {
      suspect: 'Captain Maria Santos',
      claim: 'I was in the Staff Quarters. I had the Syringe with me for my evening vitamins.'
    },
    {
      suspect: 'Dmitri Federov',
      claim: 'I was just wandering around. I didn\'t see anything unusual!'
    }
  ],
  hints: [
    'Natasha, Ambassador Chen, and Dr. Mueller all have verified locations.',
    'Captain Maria Santos was in the Staff Quarters with the Syringe.',
    'The murder occurred in the Private Car - who was seen there?',
    'The Poison Dart was not in the Staff Quarters.'
  ],

  solution: {
    suspect: 'Dmitri Federov',
    weapon: 'Poison Dart',
    location: 'Private Car'
  }
};