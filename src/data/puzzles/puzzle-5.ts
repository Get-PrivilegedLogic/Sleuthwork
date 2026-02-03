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
    'Peter Walsh was in the Reading Room.',
    'Frank Miller was at the Main Desk.',
    'The murder occurred in the Vault.',
    'The person in the Reading Room had the Scarf.',
    'The Bookend was not at the Main Desk.',
    'Catherine Lee has no witness for her whereabouts.'
  ],
  statements: [
    {
      suspect: 'Peter Walsh',
      claim: 'I was in the Reading Room all evening working on my thesis. I had my silk scarf with me as the room was quite drafty.'
    },
    {
      suspect: 'Catherine Lee',
      claim: 'I was busy with library business. I don\'t have to explain myself to you.'
    },
    {
      suspect: 'Frank Miller',
      claim: 'I was at the Main Desk keep an eye on things. I had the letter opener with me to open the night mail.'
    }
  ],
  hints: [
    'Peter Walsh has a solid alibi for being in the Reading Room.',
    'Frank Miller was outside the building, making it difficult for him to reach the Vault unnoticed.',
    'Catherine Lee admits to opening the Vault - check where she went afterward.',
    'The murder weapon\'s location (Main Desk) is near Catherine Lee\'s reported position. What does that suggest?'
  ],
  solution: { suspect: 'Catherine Lee', weapon: 'Bookend', location: 'Vault' }
};