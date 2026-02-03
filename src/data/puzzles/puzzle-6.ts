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
    'Jessica Hunt was seen by multiple witnesses on the training floor.',
    'The Dumbbell was found in the Yoga Studio.',
    'Tom Bradley was at home, as verified by his smart lock logs.',
    'Rachel Kim was teaching a class in the main studio earlier, then left.',
    'The murder occurred in the Sauna.',
    'The person in the Yoga Studio was the killer.'
  ],
  statements: [
    {
      suspect: 'Jessica Hunt',
      claim: 'I was on the weight floor for a late session. The gym was quiet, but a few other members saw me training.'
    },
    {
      suspect: 'Tom Bradley',
      claim: 'I only train in the mornings. I was at home with my family all evening - you can check my home security logs.'
    },
    {
      suspect: 'Rachel Kim',
      claim: 'I was teaching until late, but I left immediately after my class. I was exhausted and went straight to bed.'
    }
  ],
  hints: [
    'Tom Bradley has a solid alibi for being at home.',
    'Jessica Hunt was seen on the training floor, but was she there the whole time?',
    'The murder weapon (Dumbbell) was found in the Yoga Studio - who had access to that area?',
    'Rachel Kim says she left early - does anyone verify her departure?'
  ],
  solution: { suspect: 'Jessica Hunt', weapon: 'Dumbbell', location: 'Sauna' }
};