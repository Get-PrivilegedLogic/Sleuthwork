import type { Puzzle } from '../../types/puzzle';

export const puzzle6: Puzzle = {
  id: 'puzzle-6',
  title: 'Death at the Gym',
  difficulty: 'easy',
  releaseDate: '2025-12-06T12:00:00Z',
  backstory: 'Personal trainer Brad Morrison was found dead in the gym\'s sauna room after closing. Three clients had keys to the facility for after-hours access.',
  suspects: [
    { 
      name: 'Jessica Hunt', 
      bio: 'Competitive bodybuilder training for a championship.',
      height: '5\'9"',
      build: 'Muscular',
      eyeColor: 'Brown eyes',
      hairColor: 'Blonde hair',
      handedness: 'Right-handed',
      age: 'Late 20s',
      icon: 'user'
    },
    { 
      name: 'Tom Bradley', 
      bio: 'Business executive who trains early mornings.',
      height: '6\'0"',
      build: 'Average',
      eyeColor: 'Blue eyes',
      hairColor: 'Gray hair',
      handedness: 'Right-handed',
      age: 'Mid-50s',
      icon: 'user-tie'
    },
    { 
      name: 'Rachel Kim', 
      bio: 'Yoga instructor who rents studio space in the gym.',
      height: '5\'4"',
      build: 'Slim',
      eyeColor: 'Dark brown eyes',
      hairColor: 'Black hair',
      handedness: 'Left-handed',
      age: 'Early 30s',
      icon: 'user'
    }
  ],
  weapons: [
    { 
      name: 'Dumbbell', 
      description: '45-pound hexagonal dumbbell from the weight rack.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'dumbbell'
    },
    { 
      name: 'Towel', 
      description: 'Thick cotton towel from the laundry bin.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'user'
    },
    { 
      name: 'Jump Rope', 
      description: 'Heavy-duty leather jump rope, 9 feet long.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'anchor'
    }
  ],
  locations: [
    { 
      name: 'Sauna', 
      description: 'Traditional Finnish sauna, temperature set to 180°F.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'hospital'
    },
    { 
      name: 'Weight Room', 
      description: 'Main training floor with free weights and machines.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'dumbbell'
    },
    { 
      name: 'Yoga Studio', 
      description: 'Mirrored studio with mats and peaceful atmosphere.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'couch'
    }
  ],
  clues: [
    'Brad was killed between 9 PM and 10 PM after the gym closed.',
    'Jessica was spotted on security cameras entering at 9:15 PM.',
    'The Dumbbell was found in the Yoga Studio.',
    'Tom\'s key card shows he entered at 6 AM, not in the evening.',
    'Rachel was teaching a private class until 8:45 PM.',
    'The murder occurred in the Sauna.'
  ],
  statements: [
    {
      suspect: 'Jessica Hunt',
      claim: 'I came in for a late workout after my regular training session. The gym was empty when I arrived around 9:15.'
    },
    {
      suspect: 'Tom Bradley',
      claim: 'I only train in the mornings before work. I wasn\'t at the gym that evening - you can check the key card logs.'
    },
    {
      suspect: 'Rachel Kim',
      claim: 'I was teaching a private yoga session that ended at 8:45. After that I went straight home, I was exhausted.'
    }
  ],
  hints: [
    'Check the security timestamps carefully.',
    'Who was actually at the gym during the murder window?',
    'The weapon location reveals the killer\'s movements after the crime.'
  ],
  solution: { suspect: 'Jessica Hunt', weapon: 'Dumbbell', location: 'Sauna' }
};