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
    'The murder occurred between 10 PM and 11 PM.',
    'James was in the basement level mopping floors until 10:45 PM.',
    'The Knife was missing from its display case after the murder.',
    'Sarah was seen leaving the Storage Room at 10:30 PM.',
    'Robert left the museum at 9:30 PM according to security logs.',
    'The killer was in the Egyptian Wing during the time of death.'
  ],
  statements: [
    {
      suspect: 'James Porter',
      claim: 'I was cleaning the basement all evening. I came upstairs around 11 and found Dr. Moore\'s body - it was horrible.'
    },
    {
      suspect: 'Sarah Kim',
      claim: 'I was doing inventory in the Storage Room until about 10:30. I saw Helen was still in her office when I left for the night.'
    },
    {
      suspect: 'Robert Greene',
      claim: 'Helen and I discussed a potential acquisition at 9 PM. Our meeting went well, and I left the museum at 9:30 as the logs show.'
    }
  ],
  hints: [
    'Check each person\'s whereabouts during the murder window.',
    'Who had opportunity to be in the Egyptian Wing at the right time?',
    'The missing weapon tells you something important about the murder location.'
  ],
  solution: { suspect: 'Sarah Kim', weapon: 'Knife', location: 'Egyptian Wing' }
};