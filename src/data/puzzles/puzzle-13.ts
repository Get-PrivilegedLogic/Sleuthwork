import type { Puzzle } from '../../types/puzzle';

export const puzzle13: Puzzle = {
  id: 'puzzle-13',
  title: 'The Quantum Heist Paradox',
  difficulty: 'ludicrous',
  releaseDate: '2025-12-13T12:00:00Z',
  backstory: 'Tech billionaire Dr. Quantum was found dead in his smart home during a power outage. The automated security system logged every movement, but the timestamps seem impossible. Five people had access codes.',
  
  suspects: [
    { 
      name: 'Dr. Sarah Chen', 
      bio: 'Quantum physicist and business partner in the AI research lab.',
      height: '5\'4"',
      build: 'Petite',
      eyeColor: 'Dark brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Mid-30s',
      icon: 'user-graduate'
    },
    { 
      name: 'Marcus Kane', 
      bio: 'Head of security who designed the entire surveillance system.',
      height: '6\'2"',
      build: 'Muscular',
      eyeColor: 'Brown eyes',
      hairColor: 'Bald',
      handedness: 'Right-handed',
      age: 'Early 40s',
      icon: 'user-shield'
    },
    { 
      name: 'Isabella Torres', 
      bio: 'Personal assistant with master override codes to all systems.',
      height: '5\'7"',
      build: 'Average',
      eyeColor: 'Hazel eyes',
      hairColor: 'Brown hair',
      handedness: 'Left-handed',
      age: 'Late 20s',
      icon: 'user-tie'
    },
    { 
      name: 'Professor James Wei', 
      bio: 'Research rival who recently lost funding to Dr. Quantum.',
      height: '5\'10"',
      build: 'Slim',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Early 50s',
      icon: 'user-graduate'
    },
    { 
      name: 'Alexandra Park', 
      bio: 'Ex-spouse who still had access codes from the divorce settlement.',
      height: '5\'9"',
      build: 'Athletic',
      eyeColor: 'Blue eyes',
      hairColor: 'Blonde hair',
      handedness: 'Right-handed',
      age: 'Late 30s',
      icon: 'user'
    }
  ],
  
  weapons: [
    { 
      name: 'Electromagnetic Pulse Device', 
      description: 'Prototype EMP that caused the building-wide blackout.',
      weight: 'Medium-weight',
      type: 'Other',
      icon: 'bomb'
    },
    { 
      name: 'Liquid Nitrogen Canister', 
      description: 'Lab equipment storing cryogenic samples, freezing cold.',
      weight: 'Heavy-weight',
      type: 'Other',
      icon: 'flask'
    },
    { 
      name: 'Carbon Fiber Cable', 
      description: 'Ultra-thin research equipment cable, incredibly strong.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'lightbulb'
    },
    { 
      name: 'Microscope Base', 
      description: 'Heavy titanium base from electron microscope, sharp edges.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'hammer'
    },
    { 
      name: 'Smart Glass Shard', 
      description: 'Fragment from shattered electrochromic window panel.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'knife'
    }
  ],
  
  locations: [
    { 
      name: 'Lab', 
      description: 'Quantum computing research facility with biometric access.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'flask'
    },
    { 
      name: 'Server Room', 
      description: 'Climate-controlled room housing backup power and data systems.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'warehouse'
    },
    { 
      name: 'Penthouse', 
      description: 'Residential floor with panoramic views and smart home integration.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'building'
    },
    { 
      name: 'Garage', 
      description: 'Underground parking with electric vehicle charging stations.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'car'
    },
    { 
      name: 'Rooftop', 
      description: 'Helipad and solar panel array on building\'s top floor.',
      setting: 'Outdoors',
      access: 'Restricted',
      icon: 'plane'
    }
  ],
  
  clues: [
    'Dr. Quantum died between 11:50 PM and 12:10 AM during the power outage.',
    'The security logs show Dr. Chen scanned into the Lab at 11:30 PM and didn\'t leave until power was restored at 12:15 AM.',
    'Marcus Kane was monitoring the Server Room remotely from his home. His VPN connection logs confirm he never entered the building.',
    'The EMP device was activated at exactly 11:48 PM from the Rooftop, causing the power outage.',
    'Isabella Torres was logged entering the Garage at 11:40 PM. Her car\'s GPS shows she left the building at 11:55 PM.',
    'Professor Wei had his access code revoked two weeks ago and cannot enter the building.',
    'Alexandra Park used her access code to enter the Penthouse at 11:45 PM.',
    'The murder weapon was found in the Server Room, but the murder did not occur there.',
    'The killer was on the Rooftop at the time of the murder.',
    'During the power outage, biometric scanners failed but backup keypad codes still worked.',
    'The person who activated the EMP at 11:48 PM is the same person who committed the murder.',
    'Isabella\'s car left the building before the murder occurred.',
    'The only people physically in the building during the murder were those who entered before 11:48 PM.',
    'Alexandra Park\'s access logs show no exit from the Penthouse between 11:45 PM and 12:15 AM.',
    'The murder took place on the Rooftop at approximately 12:00 AM, during total darkness.'
  ],
  
  statements: [
    {
      suspect: 'Dr. Sarah Chen',
      claim: 'I was running critical quantum experiments that couldn\'t be interrupted. I was locked in the Lab when the power went out - the biometric door wouldn\'t open without electricity.'
    },
    {
      suspect: 'Marcus Kane',
      claim: 'I was monitoring the systems remotely from home. My VPN logs prove I was never at the building. When the power went out, I was trying to diagnose it from my home office.'
    },
    {
      suspect: 'Isabella Torres',
      claim: 'I was in the Garage getting my car to leave for the night. My GPS shows I left the building at 11:55 - before the murder even happened.'
    },
    {
      suspect: 'Professor James Wei',
      claim: 'My access was revoked after the funding dispute. I couldn\'t enter the building even if I wanted to. The security system would have flagged any attempt.'
    },
    {
      suspect: 'Alexandra Park',
      claim: 'I went to the Penthouse to pick up some belongings from when we were married. I was in the apartment when the lights went out. It was terrifying - completely dark.'
    }
  ],
  
  hints: [
    'Marcus Kane was remote - eliminate him immediately.',
    'Professor Wei had no access - eliminate him.',
    'Isabella left at 11:55 PM, before the murder at 12:00 AM - eliminate her.',
    'That leaves Dr. Chen and Alexandra Park. Both were in the building.',
    'Dr. Chen was locked in the Lab when power went out. Biometric scanners failed - could she leave?',
    'The EMP was activated from the Rooftop at 11:48 PM. Who was on the Rooftop?',
    'Alexandra entered the Penthouse at 11:45 PM. Her logs show no exit. Could she reach the Rooftop?',
    'The Penthouse and Rooftop are adjacent - rooftop access is through the Penthouse.',
    'Alexandra had keypad backup codes that worked during the outage. She could move freely.',
    'The killer activated the EMP at 11:48, committed murder at 12:00, and was still logged in the Penthouse because she never "officially" left through scanners.'
  ],
  
  solution: {
    suspect: 'Alexandra Park',
    weapon: 'Electromagnetic Pulse Device',
    location: 'Rooftop'
  }
};