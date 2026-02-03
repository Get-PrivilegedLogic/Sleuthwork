import type { Puzzle } from '../../types/puzzle';

export const puzzle9: Puzzle = {
  id: 'puzzle-9',
  title: 'Murder at the Office',
  difficulty: 'medium',
  releaseDate: '2025-12-09T12:00:00Z',
  backstory: 'CEO Jennifer Blake was found dead in the executive suite during the company holiday party. Four employees had access to the secured floor.',
  suspects: [
    {
      name: 'David Park',
      bio: 'CFO recently accused of embezzling company funds.',
      height: '5\'10"',
      build: 'Average',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Early 40s',
      icon: 'user-tie'
    },
    {
      name: 'Rachel Green',
      bio: 'VP of Sales competing for Jennifer\'s position.',
      height: '5\'9"',
      build: 'Athletic',
      eyeColor: 'Green eyes',
      hairColor: 'Blonde hair',
      handedness: 'Right-handed',
      age: 'Mid-30s',
      icon: 'user-tie'
    },
    {
      name: 'Kevin Tran',
      bio: 'IT director with access to all security systems.',
      height: '5\'8"',
      build: 'Slim',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Left-handed',
      age: 'Late 20s',
      icon: 'user'
    },
    {
      name: 'Lisa Chen',
      bio: 'Executive assistant who organized the holiday party.',
      height: '5\'4"',
      build: 'Petite',
      eyeColor: 'Dark brown eyes',
      hairColor: 'Black hair',
      handedness: 'Right-handed',
      age: 'Early 30s',
      icon: 'user'
    }
  ],
  weapons: [
    {
      name: 'Trophy',
      description: 'Glass award from executive credenza, heavy base.',
      weight: 'Medium-weight',
      type: 'Blunt',
      icon: 'trophy'
    },
    {
      name: 'Scissors',
      description: 'Large office scissors from supply closet, 10 inches.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'scissors'
    },
    {
      name: 'USB Cable',
      description: 'Reinforced charging cable, 6 feet long.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'lightbulb'
    },
    {
      name: 'Stapler',
      description: 'Heavy-duty metal stapler, industrial size.',
      weight: 'Medium-weight',
      type: 'Blunt',
      icon: 'briefcase'
    }
  ],
  locations: [
    {
      name: 'Executive Suite',
      description: 'Corner office with view, private entrance.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'briefcase'
    },
    {
      name: 'Server Room',
      description: 'Climate-controlled IT room with backup systems.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'warehouse'
    },
    {
      name: 'Conference Room',
      description: 'Large meeting room where the party was held.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'building'
    },
    {
      name: 'Break Room',
      description: 'Staff kitchen area on the executive floor.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'coffee'
    }
  ],
  clues: [
    'David Park was in the Conference Room.',
    'Kevin Tran was in the Server Room.',
    'Lisa Chen was in the Break Room.',
    'The murder occurred in the Executive Suite.',
    'The person in the Conference Room had the Stapler.',
    'The person in the Server Room had the USB Cable.',
    'The Scissors were not in the Break Room.',
    'Rachel Green was seen entering the Executive Suite.'
  ],
  statements: [
    {
      suspect: 'David Park',
      claim: 'I was in the Conference Room. I had the Stapler with me to attach some last-minute reports.'
    },
    {
      suspect: 'Rachel Green',
      claim: 'I was just trying to prepare for our meeting. I didn\'t see Jennifer!'
    },
    {
      suspect: 'Kevin Tran',
      claim: 'I was in the Server Room all night. I had the USB Cable with me for my work.'
    },
    {
      suspect: 'Lisa Chen',
      claim: 'I was in the Break Room managing the catering. I had the Trophy with me to polish it for the awards part of the party.'
    }
  ],
  hints: [
    'David Park was in the Conference Room with the Stapler.',
    'Kevin Tran was in the Server Room with the USB Cable.',
    'Lisa Chen was in the Break Room with the Trophy.',
    'The murder occurred in the Executive Suite - who entered it?'
  ],
  solution: { suspect: 'Rachel Green', weapon: 'Scissors', location: 'Executive Suite' }
};