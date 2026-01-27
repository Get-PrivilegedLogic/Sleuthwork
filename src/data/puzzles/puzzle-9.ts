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
    'Jennifer was killed between 8 PM and 9 PM during the party.',
    'David gave a speech in the Conference Room from 8:15 PM to 8:45 PM.',
    'The Scissors were found in the Break Room.',
    'Rachel was seen by multiple witnesses in the Conference Room until 8:30 PM.',
    'Kevin was rebooting servers in the Server Room from 7:45 PM to 9 PM.',
    'Lisa was setting up food in the Break Room at 8:20 PM.',
    'The murder took place in the Executive Suite.',
    'David was not in the Executive Suite during the murder.'
  ],
  statements: [
    {
      suspect: 'David Park',
      claim: 'Those embezzlement accusations are false. I was giving the year-end financial update during the party - everyone saw me present.'
    },
    {
      suspect: 'Rachel Green',
      claim: 'Jennifer and I had our differences professionally, but I was networking at the party. I need witnesses to speak up if I want her job now.'
    },
    {
      suspect: 'Kevin Tran',
      claim: 'I was stuck in the Server Room dealing with a critical system update. Terrible timing, but the servers don\'t care about parties.'
    },
    {
      suspect: 'Lisa Chen',
      claim: 'I spent the whole evening running between the Break Room and the Conference Room making sure everything was perfect. So much work!'
    }
  ],
  hints: [
    'David was giving a speech - he has witnesses.',
    'Kevin was working in the Server Room the entire time.',
    'Rachel was seen until 8:30 PM - what about after?',
    'Lisa\'s presence in the Break Room is key - when was she there?'
  ],
  solution: { suspect: 'Rachel Green', weapon: 'Scissors', location: 'Executive Suite' }
};