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
      icon: 'anchor'
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
    'The person in the Egyptian Wing was not James Porter.',
    'James was in the basement level mopping floors while the museum was closed.',
    'The Knife was missing from its display case in the Egyptian Wing.',
    'Sarah were seen leaving the Storage Room by security.',
    'Robert Greene left the building completely before the museum closed.',
    'The murder weapon was not the Rope barrier.'
  ],
  statements: [
    {
      suspect: 'James Porter',
      claim: 'I was cleaning the basement all evening. I only came upstairs to find Dr. Moore in the Egyptian Wing.'
    },
    {
      suspect: 'Sarah Kim',
      claim: 'I was in the Storage Room doing inventory. I saw Helen in her office earlier, but I didn\'t go in there.'
    },
    {
      suspect: 'Robert Greene',
      claim: 'I had a meeting with Helen, but I left the museum right after. The security guards saw me exit.'
    }
  ],
  hints: [
    'Robert Greene has an alibi for being outside the building.',
    'James Porter was in the basement during the crime.',
    'Who does that leave in the Egyptian Wing?',
    'The missing weapon was a Knife - where was it taken from?'
  ],
  solution: { suspect: 'Sarah Kim', weapon: 'Knife', location: 'Egyptian Wing' }
};