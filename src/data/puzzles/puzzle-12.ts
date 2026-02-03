import type { Puzzle } from '../../types/puzzle';

export const puzzle12: Puzzle = {
  id: 'puzzle-12',
  title: 'The Impossible Case at Blackwood Estate',
  difficulty: 'ludicrous',
  releaseDate: '2025-12-12T12:00:00Z',
  backstory: 'Renowned detective critic Lord Percival Blackwood was found dead during his annual "Unsolvable Mystery" dinner party. Five master detectives were present. The killer must be among them. This is Detective Finch\'s greatest challenge.',

  suspects: [
    {
      name: 'Inspector Aria Chen',
      bio: 'Forensic specialist who solved the "Crimson Cipher" case in 47 minutes.',
      height: '5\'5"',
      build: 'Slim',
      eyeColor: 'Dark brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Early 40s',
      icon: 'user-shield'
    },
    {
      name: 'Detective Nikolas Voss',
      bio: 'Psychological profiler known for the "Mirror Murders" breakthrough.',
      height: '6\'1"',
      build: 'Athletic',
      eyeColor: 'Blue eyes',
      hairColor: 'Blonde hair',
      handedness: 'Left-handed',
      age: 'Mid-30s',
      icon: 'user-secret'
    },
    {
      name: 'Agent Sophia Romano',
      bio: 'Undercover expert who infiltrated three crime syndicates.',
      height: '5\'8"',
      build: 'Athletic',
      eyeColor: 'Green eyes',
      hairColor: 'Brown hair',
      handedness: 'Right-handed',
      age: 'Late 30s',
      icon: 'user-secret'
    },
    {
      name: 'Professor Marcus Hyde',
      bio: 'Criminal psychology professor and author of "The Perfect Crime".',
      height: '5\'11"',
      build: 'Average',
      eyeColor: 'Hazel eyes',
      hairColor: 'Gray hair',
      handedness: 'Right-handed',
      age: 'Late 50s',
      icon: 'user-graduate'
    },
    {
      name: 'Captain Elena Frost',
      bio: 'Retired homicide detective with 200+ solved cases.',
      height: '5\'10"',
      build: 'Stocky',
      eyeColor: 'Brown eyes',
      hairColor: 'White hair',
      handedness: 'Left-handed',
      age: 'Early 60s',
      icon: 'user-shield'
    }
  ],

  weapons: [
    {
      name: 'Antique Syringe',
      description: 'Victorian-era medical instrument containing traces of aconite poison.',
      weight: 'Light-weight',
      type: 'Poison',
      icon: 'syringe'
    },
    {
      name: 'Crystal Decanter',
      description: 'Heavy lead crystal containing aged scotch, found shattered.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'wine-bottle'
    },
    {
      name: 'Fencing Foil',
      description: 'Competition-grade épée with unusually sharp point, unbuttoned.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'knife'
    },
    {
      name: 'Marble Bust',
      description: 'Sculpture of Sherlock Holmes, surprisingly heavy, chipped base.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'landmark'
    },
    {
      name: 'Silk Garrote',
      description: 'Custom-made strangling wire disguised as decorative cord.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'zap'
    }
  ],

  locations: [
    {
      name: 'Library',
      description: 'Three-story room with rolling ladder, rare book collection behind glass.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'book'
    },
    {
      name: 'Billiard Room',
      description: 'Victorian gaming room with full-size table and wall-mounted cue rack.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'chess'
    },
    {
      name: 'Wine Cellar',
      description: 'Temperature-controlled basement vault, keypad access, hundreds of bottles.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'wine-bottle'
    },
    {
      name: 'Conservatory',
      description: 'Glass-enclosed garden with exotic plants and koi pond.',
      setting: 'Mixed',
      access: 'Public',
      icon: 'tree'
    },
    {
      name: 'Trophy Room',
      description: 'Display of Lord Blackwood\'s case memorabilia and awards.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'trophy'
    }
  ],

  clues: [
    'Inspector Aria Chen was in the Library.',
    'Agent Sophia Romano was in the Billiard Room.',
    'Professor Marcus Hyde was in the Trophy Room.',
    'Captain Elena Frost was in the Wine Cellar.',
    'The murder occurred in the Conservatory.',
    'The person in the Library had the Silk Garrote.',
    'The person in the Billiard Room had the Fencing Foil.',
    'The person in the Trophy Room had the Crystal Decanter.',
    'The Antique Syringe was not in the Wine Cellar.',
    'Detective Nikolas Voss has no alibi.',
    'The person with the Marble Bust was not the killer.'
  ],
  statements: [
    {
      suspect: 'Inspector Aria Chen',
      claim: 'I was in the Library examining the case files. I had my Silk Garrote with me to secure the evidence boxes.'
    },
    {
      suspect: 'Detective Nikolas Voss',
      claim: 'I was just wandering around. I didn\'t see anything unusual!'
    },
    {
      suspect: 'Agent Sophia Romano',
      claim: 'I was in the Billiard Room. I had the Fencing Foil with me to show Elena my technique.'
    },
    {
      suspect: 'Professor Marcus Hyde',
      claim: 'I was in the Trophy Room giving my annual toast. I had the Crystal Decanter with me to serve the guests.'
    },
    {
      suspect: 'Captain Elena Frost',
      claim: 'I was in the Wine Cellar selecting a vintage. I had the Marble Bust with me - I was moving it to the basement for storage.'
    }
  ],
  hints: [
    'Inspector Chen, Agent Romano, and Captain Frost all have verified locations.',
    'Professor Hyde was in the Trophy Room with the Crystal Decanter.',
    'The murder occurred in the Conservatory - who has no alibi?',
    'The Antique Syringe was not in the Wine Cellar where Elena was.'
  ],

  solution: {
    suspect: 'Detective Nikolas Voss',
    weapon: 'Antique Syringe',
    location: 'Conservatory'
  }
};