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
      icon: 'anchor'
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
    'Inspector Chen was examining evidence in the Library and never left the room.',
    'The murder weapon was the Antique Syringe, but it was found in the Trophy Room.',
    'Detective Voss was seen in the Wine Cellar by Professor Hyde, but left before the billiards game ended.',
    'Agent Romano and Captain Frost played billiards together in the Billiard Room.',
    'Professor Hyde gave a toast in the Trophy Room, attended by Frost and Romano.',
    'The killer was in the Conservatory.',
    'Captain Frost was practicing shots in the Billiard Room after her game.',
    'The person in the Wine Cellar after Voss left was the killer.',
    'Neither Inspector Chen nor Agent Romano could have been in the Conservatory.',
    'Professor Hyde was in the Trophy Room and then went to the Wine Cellar.',
    'The murder did not take place in the Library, Wine Cellar, or Billiard Room.',
    'The person who gave the toast was not in the Conservatory.',
    'Inspector Chen has a verified location for the entire evening.'
  ],
  statements: [
    {
      suspect: 'Inspector Aria Chen',
      claim: 'I was in the Library examining the case files. I never left, and I have the evidence logs to prove I was there when the crime was discovered.'
    },
    {
      suspect: 'Detective Nikolas Voss',
      claim: 'I went to the Wine Cellar to select a vintage, but I left and went to the Conservatory to enjoy some quiet time.'
    },
    {
      suspect: 'Agent Sophia Romano',
      claim: 'Captain Frost and I were in the Billiard Room practically the whole night. We were locked in a very competitive game.'
    },
    {
      suspect: 'Professor Marcus Hyde',
      claim: 'I was in the Trophy Room giving my annual toast. Frost and Romano were there, as were most of the other guests.'
    },
    {
      suspect: 'Captain Elena Frost',
      claim: 'After Romano and I finished our game, I stayed in the Billiard Room alone to practice. I was there until the alarm was raised.'
    }
  ],
  hints: [
    'Inspector Chen, Agent Romano, and Captain Frost all have verified locations or alibis from each other.',
    'Professor Hyde was in the Trophy Room - check where he went after his toast.',
    'The murder occurred in the Conservatory - who has no witness for that location?',
    'The murder weapon (Antique Syringe) was found in the Trophy Room - what does that tell you about the killer\'s path?',
    'Nikolas Voss admits to being in the Conservatory.'
  ],

  solution: {
    suspect: 'Detective Nikolas Voss',
    weapon: 'Antique Syringe',
    location: 'Conservatory'
  }
};