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
    'Volkov was killed between 2:15 AM and 2:45 AM while the train passed through a tunnel.',
    'Natasha was playing poker in the Dining Car with three witnesses from 2:00 AM to 3:00 AM continuously.',
    'Ambassador Chen was in his cabin (not Volkov\'s Private Car) from 1:00 AM until breakfast. The cabin door was locked from inside.',
    'Dr. Mueller was conducting a video conference call from the Observation Deck from 2:10 AM to 2:50 AM. The timestamp is verified.',
    'Captain Santos was required to do a security sweep of the Baggage Car at 2:30 AM. Log confirms she was there.',
    'Dmitri Federov was seen leaving the Private Car at 2:05 AM by a passenger.',
    'The murder weapon was the Poison Dart, found in the Staff Quarters.',
    'The killer was in the Private Car at the time of death.',
    'During the tunnel passage (2:20-2:40 AM), all cameras were disabled due to darkness protocol.',
    'The Staff Quarters can only be accessed by train employees or someone with a staff key.',
    'Dmitri had a staff key card stolen from his uncle two months ago.',
    'The poker game in the Dining Car had four players and never paused.',
    'Ambassador Chen\'s cabin was three cars away from Volkov\'s Private Car.',
    'Captain Santos\'s security sweep took exactly 15 minutes according to procedure.',
    'The person who left the Private Car at 2:05 AM returned during the tunnel blackout at 2:25 AM.',
    'Neither the Observation Deck nor anyone\'s locked cabin can be confused with the Private Car.'
  ],
  
  statements: [
    {
      suspect: 'Natasha Ivanova',
      claim: 'Viktor and I had our falling out, but I was playing poker all night. Four-handed Texas Hold\'em - we never stopped, not even for a bathroom break.'
    },
    {
      suspect: 'Ambassador Chen Li',
      claim: 'I was negotiating with Viktor earlier in the evening. After we finished at 1 AM, I retired to my cabin and locked the door. I didn\'t leave until morning.'
    },
    {
      suspect: 'Dr. Heinrich Mueller',
      claim: 'I had a video call with clients in Tokyo that couldn\'t be rescheduled. I was on the Observation Deck from 2:10 to 2:50 - the call logs prove it.'
    },
    {
      suspect: 'Captain Maria Santos',
      claim: 'I\'m... I was undercover as staff. My assignment was to watch Volkov. I was doing my required security sweep of the Baggage Car at 2:30 AM when he was killed.'
    },
    {
      suspect: 'Dmitri Federov',
      claim: 'Uncle Viktor and I had drinks in his car around 2 AM. I left at 2:05 because he wanted to sleep. When I heard what happened, I... I should have stayed.'
    }
  ],
  
  hints: [
    'Four people have solid alibis. Find them first.',
    'Natasha was playing poker with witnesses the entire time - eliminated.',
    'Dr. Mueller was on video call with timestamp verification - eliminated.',
    'Ambassador Chen was locked in his cabin three cars away - eliminated.',
    'Captain Santos was in Baggage Car at 2:30 AM (during the murder window) - but verify the timing carefully.',
    'Dmitri left at 2:05 AM and returned at 2:25 AM during the blackout.',
    'The murder happened between 2:15-2:45. Who was in the Private Car during that window?',
    'Captain Santos was in Baggage Car at 2:30 AM - but could she have been in Private Car at 2:20 or 2:40?',
    'The security sweep took 15 minutes. If she started at 2:30, she was occupied until 2:45.',
    'But the murder could have occurred at 2:20 AM, before her sweep. Who was there then? Dmitri returned at 2:25.',
    'Wait - Dmitri LEFT at 2:05 but RETURNED at 2:25. He was in the Private Car during the critical 2:25-2:40 window.',
    'Dmitri had the staff key to access Staff Quarters. He committed the murder during the blackout and stashed the weapon where only staff should go.'
  ],
  
  solution: {
    suspect: 'Dmitri Federov',
    weapon: 'Poison Dart',
    location: 'Private Car'
  }
};