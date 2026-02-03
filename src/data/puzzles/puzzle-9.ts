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
    'David Park was giving a speech in the Conference Room, seen by everyone.',
    'The Scissors were found in the Break Room.',
    'Rachel Green was networking at the party but left for a private meeting.',
    'Kevin Tran was in the Server Room dealing with a system crash.',
    'Lisa Chen was constant moving between the Break Room and Conference Room.',
    'The murder took place in the Executive Suite.',
    'The person with the Stapler was in the Conference Room.',
    'David was not in the Executive Suite.'
  ],
  statements: [
    {
      suspect: 'David Park',
      claim: 'I was center stage in the Conference Room. I gave the year-end financial update and then spoke with investors.'
    },
    {
      suspect: 'Rachel Green',
      claim: 'I was at the party for a while, but I eventually went to the executive suite to prepare some notes for tomorrow.'
    },
    {
      suspect: 'Kevin Tran',
      claim: 'I spent the entire party level in the Server Room. We had a major system failure that required my full attention.'
    },
    {
      suspect: 'Lisa Chen',
      claim: 'I was everywhere but the executive suite! I was managing the catering in the Break Room and the setup in the Conference Room.'
    }
  ],
  hints: [
    'David Park and Kevin Tran both have solid alibis for their locations.',
    'Lisa Chen was seen in specific public areas throughout the evening.',
    'Rachel Green admits to being in the Executive Suite - check who else had access.',
    'The murder weapon (Scissors) was found in the Break Room - what does that tell you about the killer\'s path?'
  ],
  solution: { suspect: 'Rachel Green', weapon: 'Scissors', location: 'Executive Suite' }
};