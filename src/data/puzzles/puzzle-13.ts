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
      icon: 'zap'
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
    'Dr. Sarah Chen was in the Lab.',
    'Marcus Kane was in the Server Room.',
    'Isabella Torres was in the Garage.',
    'Professor James Wei was in the Penthouse.',
    'The murder occurred on the Rooftop.',
    'The person in the Lab had the Microscope Base.',
    'The person in the Server Room had the Liquid Nitrogen.',
    'The person in the Garage had the Smart Glass Shard.',
    'The EMP Device was not in the Penthouse.',
    'Alexandra Park has no alibi.'
  ],

  statements: [
    {
      suspect: 'Dr. Sarah Chen',
      claim: 'I was in the Lab. I had the heavy Microscope Base with me for my experiments.'
    },
    {
      suspect: 'Marcus Kane',
      claim: 'I was in the Server Room. I had the Liquid Nitrogen with me to cool the backup systems.'
    },
    {
      suspect: 'Isabella Torres',
      claim: 'I was in the Garage. I had a Smart Glass Shard that I found and was going to report.'
    },
    {
      suspect: 'Professor James Wei',
      claim: 'I was in the Penthouse. I had the Carbon Fiber Cable with me to show Dr. Quantum my latest research.'
    },
    {
      suspect: 'Alexandra Park',
      claim: 'I was just wandering around. I didn\'t see anything unusual!'
    }
  ],

  hints: [
    'Dr. Sarah Chen was in the Lab with the Microscope Base.',
    'Marcus Kane was in the Server Room with the Liquid Nitrogen.',
    'Isabella Torres was in the Garage with the Smart Glass Shard.',
    'The murder occurred on the Rooftop - who hasn\'t provided a location?',
    'The EMP Device was not in the Penthouse where James was.'
  ],

  solution: {
    suspect: 'Alexandra Park',
    weapon: 'Electromagnetic Pulse Device',
    location: 'Rooftop'
  }
};