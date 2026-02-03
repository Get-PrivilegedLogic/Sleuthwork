import type { Puzzle } from '../../types/puzzle';

export const puzzle2: Puzzle = {
  id: 'puzzle-2',
  title: 'Death at the Museum',
  difficulty: 'easy',
  releaseDate: '2025-12-02T12:00:00Z',
  backstory: 'Dr. Helen Moore, curator of the City Museum, was found dead in the Egyptian wing after closing time. Security footage shows three people entered the restricted area.',
  suspects: [
    {
      name: 'James Porter',
      bio: 'Night janitor who discovered the body at 11 PM.',
      height: '5\'10"',
      build: 'Stocky',
      eyeColor: 'Brown eyes',
      hairColor: 'Bald',
      handedness: 'Right-handed',
      age: 'Early 50s',
      icon: 'user'
    },
    {
      name: 'Sarah Kim',
      bio: 'Assistant curator working late on inventory records.',
      height: '5\'4"',
      build: 'Petite',
      eyeColor: 'Dark brown eyes',
      hairColor: 'Black hair',
      handedness: 'Left-handed',
      age: 'Late 20s',
      icon: 'user-graduate'
    },
    {
      name: 'Robert Greene',
      bio: 'Private collector who met with Helen at 9 PM.',
      height: '6\'0"',
      build: 'Average',
      eyeColor: 'Gray eyes',
      hairColor: 'Salt and pepper',
      handedness: 'Right-handed',
      age: 'Mid-60s',
      icon: 'user-tie'
    }
  ],
  weapons: [
    {
      name: 'Statue',
      description: 'Heavy marble statue of Anubis, approximately 15 pounds.',
      weight: 'Heavy-weight',
      type: 'Blunt',
      icon: 'landmark'
    },
    {
      name: 'Knife',
      description: 'Ancient ceremonial dagger from the display case.',
      weight: 'Light-weight',
      type: 'Sharp',
      icon: 'knife'
    },
    {
      name: 'Rope',
      description: 'Velvet rope barrier from the hallway entrance.',
      weight: 'Light-weight',
      type: 'Other',
      icon: 'zap'
    }
  ],
  locations: [
    {
      name: 'Egyptian Wing',
      description: 'Main exhibit hall containing artifacts and display cases.',
      setting: 'Indoors',
      access: 'Public',
      icon: 'landmark'
    },
    {
      name: 'Storage Room',
      description: 'Climate-controlled room where valuable items are kept.',
      setting: 'Indoors',
      access: 'Restricted',
      icon: 'warehouse'
    },
    {
      name: 'Office',
      description: 'Helen\'s private office on the second floor of the museum.',
      setting: 'Indoors',
      access: 'Private',
      icon: 'briefcase'
    }
  ],
  clues: [
    'James Porter was seen in the Storage Room.',
    'Robert Greene was in the Office.',
    'The murder occurred in the Egyptian Wing.',
    'The person in the Office had the Rope.',
    'The Statue was not in the Egyptian Wing.',
    'The Knife was missing from its display case in the Egyptian Wing.'
  ],
  statements: [
    {
      suspect: 'James Porter',
      claim: 'I was cleaning the Storage Room. I spent the whole night organizing the statues and heavy equipment.'
    },
    {
      suspect: 'Sarah Kim',
      claim: 'I was in the Egyptian Wing doing inventory. I saw Helen in her office earlier, but I didn\'t go in there.'
    },
    {
      suspect: 'Robert Greene',
      claim: 'I was in the Office for our scheduled meeting. I waited there for Phoebe but she never showed up.'
    }
  ],
  hints: [
    'James Porter was in the Storage Room with the Statue.',
    'Robert Greene was in the Office with the Rope.',
    'The murder occurred in the Egyptian Wing - who was there?',
    'The Knife was missing from the Egyptian Wing exhibit.'
  ],
  solution: { suspect: 'Sarah Kim', weapon: 'Knife', location: 'Egyptian Wing' }
};