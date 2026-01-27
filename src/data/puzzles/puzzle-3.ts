import type { Puzzle } from '../../types/puzzle';

export const puzzle3: Puzzle = {
  id: 'puzzle-3',
  title: 'Murder at the Theater',
  difficulty: 'easy',
  releaseDate: '2025-12-03T12:00:00Z',
  backstory: 'Director Thomas Laurent was found dead backstage during intermission of opening night. Three cast members had access to the restricted backstage area.',
  suspects: [
    { 
      name: 'Emma Stone', 
      bio: 'Lead actress who had a public dispute with Thomas last week.',
      height: '5\'5"',
      build: 'Slim',
      eyeColor: 'Hazel eyes',
      hairColor: 'Auburn hair',
      handedness: 'Right-handed',
      age: 'Early 30s',
      icon: 'user'
    },
    { 
      name: 'David Chen', 
      bio: 'Stage manager responsible for props and equipment.',
      height: '5\'9"',
      build: 'Average',
      eyeColor: 'Brown eyes',
      hairColor: 'Black hair',
      handedness: 'Left-handed',
      age: 'Mid-40s',
      icon: 'user-tie'
    },
    { 
      name: 'Lisa Brown', 
      bio: 'Understudy hoping to replace Emma as the lead.',
      height: '5\'7"',
      build: 'Athletic',
      eyeColor: 'Blue eyes',
      hairColor: 'Blonde hair',
      handedness: 'Right-handed',
      age: 'Late 20s',
      icon: 'user'
    }
  ],
  weapons: [
    { 
      name: 'Stage Weight', 
      description: 'Iron counterweight used for rigging, 20 pounds.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'dumbbell'
    },
    { 
      name: 'Prop Sword', 
      description: 'Metal stage sword with dulled blade but heavy hilt.',
      weight: 'Medium-weight',
      type: 'Blunt',
      icon: 'knife'
    },
    { 
      name: 'Cable', 
      description: 'Electrical cable from lighting equipment, 6 feet long.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'lightbulb'
    }
  ],
  locations: [
    { 
      name: 'Backstage', 
      description: 'Narrow area behind the main stage with quick-change stations.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'door-open'
    },
    { 
      name: 'Prop Room', 
      description: 'Locked room containing costumes and props.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'warehouse'
    },
    { 
      name: 'Lighting Booth', 
      description: 'Elevated control booth overlooking the stage.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'lightbulb'
    }
  ],
  clues: [
    'Thomas was killed between 8:15 PM and 8:30 PM during intermission.',
    'Emma was on stage performing until 8:10 PM and back on at 8:35 PM.',
    'The Stage Weight was found in the Prop Room after the murder.',
    'David was operating lights from the Lighting Booth during intermission.',
    'Lisa was seen in Backstage at 8:20 PM by two witnesses.',
    'The murder did not take place in the Lighting Booth.'
  ],
  statements: [
    {
      suspect: 'Emma Stone',
      claim: 'Thomas and I had our differences, but I was performing on stage. I barely had time for a costume change during intermission.'
    },
    {
      suspect: 'David Chen',
      claim: 'I was in the Lighting Booth the entire intermission managing the spotlight cues. I never left my post.'
    },
    {
      suspect: 'Lisa Brown',
      claim: 'I was backstage helping with quick changes. Several people saw me there during intermission.'
    }
  ],
  hints: [
    'Who had both the opportunity and access to Backstage during intermission?',
    'The murder weapon\'s location suggests where the killer went after.',
    'Emma was performing - could she have left the stage during the right window?'
  ],
  solution: { suspect: 'Lisa Brown', weapon: 'Stage Weight', location: 'Backstage' }
};