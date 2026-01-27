import type { Puzzle } from '../../types/puzzle';

export const puzzle5: Puzzle = {
  id: 'puzzle-5',
  title: 'Murder at the Library',
  difficulty: 'easy',
  releaseDate: '2025-12-05T12:00:00Z',
  backstory: 'Head librarian Margaret Foster was found dead in the rare books vault. Three people had access to the restricted archives that evening.',
  suspects: [
    { 
      name: 'Peter Walsh', 
      bio: 'Graduate student researching historical manuscripts.',
      height: '5\'11"',
      build: 'Slim',
      eyeColor: 'Green eyes',
      hairColor: 'Red hair',
      handedness: 'Left-handed',
      age: 'Mid-20s',
      icon: 'user-graduate'
    },
    { 
      name: 'Catherine Lee', 
      bio: 'Fellow librarian who worked the evening shift.',
      height: '5\'5"',
      build: 'Average',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Early 40s',
      icon: 'user'
    },
    { 
      name: 'Frank Miller', 
      bio: 'Security guard on duty that night.',
      height: '6\'3"',
      build: 'Stocky',
      eyeColor: 'Blue eyes',
      hairColor: 'Bald',
      handedness: 'Right-handed',
      age: 'Late 50s',
      icon: 'user-shield'
    }
  ],
  weapons: [
    { 
      name: 'Bookend', 
      description: 'Heavy brass bookend shaped like a lion, 8 pounds.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'book'
    },
    { 
      name: 'Letter Opener', 
      description: 'Ornate Victorian letter opener with sharp point.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'knife'
    },
    { 
      name: 'Scarf', 
      description: 'Silk scarf from the lost and found, 60 inches long.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'user'
    }
  ],
  locations: [
    { 
      name: 'Vault', 
      description: 'Climate-controlled rare books vault with coded access.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'warehouse'
    },
    { 
      name: 'Reading Room', 
      description: 'Quiet study area with large oak tables.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'book'
    },
    { 
      name: 'Main Desk', 
      description: 'Central circulation desk near the library entrance.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'briefcase'
    }
  ],
  clues: [
    'Margaret was killed between 7 PM and 8 PM.',
    'Peter was in the Reading Room studying until 7:45 PM, seen by multiple people.',
    'The Bookend was found at the Main Desk.',
    'Catherine had the vault access code and opened it at 6:55 PM.',
    'Frank was doing his rounds of the parking lot from 7 PM to 7:30 PM.',
    'The murder took place in the Vault.'
  ],
  statements: [
    {
      suspect: 'Peter Walsh',
      claim: 'I was in the Reading Room all evening working on my thesis. Several other students can confirm I was there the whole time.'
    },
    {
      suspect: 'Catherine Lee',
      claim: 'Margaret asked me to open the vault so she could retrieve some documents. I let her in around 7 PM and went back to the main desk.'
    },
    {
      suspect: 'Frank Miller',
      claim: 'I was outside checking the parking lot during my rounds. I do the same route every night - takes about 30 minutes.'
    }
  ],
  hints: [
    'Who had access to the Vault and opportunity during the murder time?',
    'Where the weapon ended up tells you the killer\'s path.',
    'Frank was outside - could he have gotten to the Vault in time?'
  ],
  solution: { suspect: 'Catherine Lee', weapon: 'Bookend', location: 'Vault' }
};