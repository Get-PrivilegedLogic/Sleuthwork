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
    'David Chen was in the Lighting Booth.',
    'Emma Stone was waiting in the Prop Room.',
    'The murder occurred Backstage.',
    'The person in the Lighting Booth had the Cable.',
    'The Stage Weight was not in the Prop Room or Lighting Booth.',
    'Lisa Brown has no alibi.'
  ],
  statements: [
    {
      suspect: 'Emma Stone',
      claim: 'I was in the Prop Room waiting for my cue. I had my Prop Sword with me and was practicing my lines.'
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
    'Emma Stone was in the Prop Room with the Prop Sword.',
    'David Chen was in the Lighting Booth with the Cable.',
    'The murder occurred Backstage - who has no alibi?',
    'The Stage Weight was not in the Lighting Booth or Prop Room.'
  ],
  solution: { suspect: 'Lisa Brown', weapon: 'Stage Weight', location: 'Backstage' }
};