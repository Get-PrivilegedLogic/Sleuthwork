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
    'Lord Blackwood died between 9:45 PM and 10:15 PM according to the coroner.',
    'Inspector Chen was examining evidence in the Library from 9:30 PM until she discovered the body at 10:20 PM. She never left the room.',
    'The murder weapon was the Antique Syringe, but it was found in a location where the murder did NOT occur.',
    'Detective Voss was seen entering the Wine Cellar at 9:40 PM. The cellar\'s keypad logs show it was accessed again at 10:05 PM, but Voss had already left by then.',
    'Agent Romano was playing billiards with Captain Frost from 9:15 PM to 9:50 PM. Multiple witnesses confirm this.',
    'Professor Hyde gave a toast in the Trophy Room at 9:35 PM, attended by everyone except the person who was in the Wine Cellar at that time.',
    'The killer was in the Conservatory at exactly 10:00 PM, which is when the murder occurred.',
    'Captain Frost went to the Billiard Room after playing billiards, but before 10:15 PM.',
    'The person who accessed the Wine Cellar at 10:05 PM was NOT the same person who was there at 9:40 PM.',
    'Neither Inspector Chen nor the person who was in the Trophy Room at 9:35 PM could have been in the Conservatory at 10:00 PM.',
    'Agent Romano was never in the Wine Cellar at any point during the evening.',
    'The murder did not take place in the Library, Wine Cellar, or Billiard Room.',
    'Professor Hyde was not in the Conservatory between 9:45 PM and 10:15 PM.',
    'The person who gave the toast at 9:35 PM was in a different location at 10:00 PM than they were at 9:35 PM.',
    'Detective Voss left the Wine Cellar before Agent Romano finished playing billiards.'
  ],
  
  statements: [
    {
      suspect: 'Inspector Aria Chen',
      claim: 'I was in the Library examining Lord Blackwood\'s collection of solved case files. I never left - I was there when the body was discovered.'
    },
    {
      suspect: 'Detective Nikolas Voss',
      claim: 'I went to the Wine Cellar around 9:40 to select a vintage for dinner. I left before the billiards game ended and... well, I was alone after that.'
    },
    {
      suspect: 'Agent Sophia Romano',
      claim: 'Captain Frost and I played billiards from about 9:15 until nearly 10:00. It was quite competitive - we both wanted to win.'
    },
    {
      suspect: 'Professor Marcus Hyde',
      claim: 'I gave a toast to Lord Blackwood in the Trophy Room at 9:35. Everyone was there except whoever was in the cellar. After that, I... I don\'t recall exactly.'
    },
    {
      suspect: 'Captain Elena Frost',
      claim: 'Romano and I played billiards until about 9:50. Then I stayed in the Billiard Room practicing my shots. I wanted to redeem myself after losing.'
    }
  ],
  
  hints: [
    'Start by mapping out who was WHERE and WHEN. Create a timeline from 9:30-10:20.',
    'Inspector Chen has an ironclad alibi - she\'s eliminated. Focus on the other four.',
    'The Wine Cellar was accessed twice - once by Voss at 9:40, and once by someone else at 10:05. Who was free at 10:05?',
    'The murder happened at 10:00 PM in the Conservatory. Who has NO alibi for that exact time?',
    'If Professor Hyde gave the toast at 9:35 in the Trophy Room, and everyone except one person attended, who was missing? (The person in the Wine Cellar)',
    'Captain Frost was playing billiards until 9:50, then went to the Billiard Room. She couldn\'t have been in the Conservatory at 10:00.',
    'Agent Romano finished billiards at 9:50 and was never in the Wine Cellar. Where could she be at 10:00 PM?',
    'Professor Hyde was NOT in the Conservatory during the murder window. But was he somewhere with an alibi?',
    'Process of elimination: Chen (Library alibi), Frost (wrong location at 10:00), Hyde (explicitly not in Conservatory). That leaves two people...',
    'Detective Voss left the Wine Cellar before 9:50 PM (when billiards ended). Where did he go after? Who can verify his location at 10:00 PM? No one.'
  ],
  
  solution: {
    suspect: 'Detective Nikolas Voss',
    weapon: 'Antique Syringe',
    location: 'Conservatory'
  }
};