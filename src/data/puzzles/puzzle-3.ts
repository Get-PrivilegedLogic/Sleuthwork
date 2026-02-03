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
    'Emma was on stage performing during the entire intermission.',
    'The Stage Weight was found in the Prop Room after the murder.',
    'David was operating lights from the Lighting Booth and never left his post.',
    'Lisa was seen in the Backstage area by several stagehands.',
    'The murder did not take place in the Lighting Booth.',
    'The person in the Prop Room was not the killer.'
  ],
  statements: [
    {
      suspect: 'Emma Stone',
      claim: 'I was center stage. I barely had time for a costume change, let alone a trip backstage.'
    },
    {
      suspect: 'David Chen',
      claim: 'I was in the Lighting Booth managing the cues. I never left my post, and I have the logs to prove it.'
    },
    {
      suspect: 'Lisa Brown',
      claim: 'I was backstage helping with quick changes. Several people saw me there during the intermission.'
    }
  ],
  hints: [
    'Emma Stone and David Chen both have verified locations during the murder.',
    'Lisa Brown admits to being in the Backstage area - check if anyone else was there.',
    'The murder weapon was found in the Prop Room - what does that tell you about the killer\'s path?',
    'The murder occurred in the Backstage area - who was seen there?'
  ],
  solution: { suspect: 'Lisa Brown', weapon: 'Stage Weight', location: 'Backstage' }
};