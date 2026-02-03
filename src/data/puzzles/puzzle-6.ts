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
    'Tom Bradley was at the Training Floor.',
    'Rachel Kim was in the Yoga Studio.',
    'The murder occurred in the Sauna.',
    'The person in the Yoga Studio had the Yoga Mat.',
    'The person on the Training Floor did not have the Dumbbell.',
    'Jessica Hunt has no alibi.'
  ],
  statements: [
    {
      suspect: 'Jessica Hunt',
      claim: 'I was just looking for a quiet place to relax. I didn\'t see anyone in the Sauna!'
    },
    {
      suspect: 'Tom Bradley',
      claim: 'I was at the Training Floor. I had the Jump Rope with me for my cardio session.'
    },
    {
      suspect: 'Rachel Kim',
      claim: 'I was in the Yoga Studio preparing for my class. I had my Yoga Mat with me as always.'
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