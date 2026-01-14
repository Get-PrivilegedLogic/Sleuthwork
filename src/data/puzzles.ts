import type { Puzzle } from '../types/puzzle';

export const puzzles: Puzzle[] = [
  // PUZZLE #1 - Easy (Already rewritten above)
  {
    id: 'puzzle-1',
    title: 'Murder at the Gala',
    difficulty: 'easy',
    releaseDate: '2025-12-01T12:00:00Z',
    backstory: 'Billionaire Victor Blackwood was found dead in his study during the annual charity gala at Ravencrest Manor. Three guests had access to the locked wing where the body was discovered.',
    suspects: [
      { name: 'Alice Chen', bio: 'Victor\'s business partner who arrived 30 minutes late to the gala.' },
      { name: 'Marcus Webb', bio: 'Former security chief fired by Victor six months ago.' },
      { name: 'Diana Cross', bio: 'Victor\'s ex-wife who was seen arguing with him in the hallway.' }
    ],
    weapons: [
      { name: 'Letter Opener', description: 'Silver antique from Victor\'s desk, recently sharpened.' },
      { name: 'Candlestick', description: 'Heavy brass candlestick from the mantle, 12 inches tall.' },
      { name: 'Poison', description: 'Rat poison from the manor\'s storage room, fast-acting.' }
    ],
    locations: [
      { name: 'Study', description: 'Victor\'s private study with locked door, key kept on his person.' },
      { name: 'Library', description: 'Large room adjacent to the study, connected by side door.' },
      { name: 'Conservatory', description: 'Glass-walled room at the back of the manor, recently renovated.' }
    ],
    clues: [
      'The victim was killed between 9:00 PM and 9:30 PM.',
      'Alice Chen was giving a speech in the main ballroom from 8:45 PM to 9:15 PM.',
      'The murder weapon was found in the Library.',
      'Marcus Webb was seen in the Conservatory at 9:20 PM by two witnesses.',
      'Diana Cross had access to the storage room where the poison was kept.',
      'The person in the Study at the time of death was not Marcus Webb.'
    ],
    hints: [
      'Consider where each person was during the time of the murder.',
      'The murder weapon\'s location tells you where the killer went after the crime.',
      'Alice has an alibi for most of the murder window - could she have killed Victor before or after her speech?',
      'If Marcus was in the Conservatory at 9:20 PM, could he have been in the Study earlier?'
    ],
    solution: { suspect: 'Diana Cross', weapon: 'Poison', location: 'Study' }
  },

  // PUZZLE #2 - Easy
  {
    id: 'puzzle-2',
    title: 'Death at the Museum',
    difficulty: 'easy',
    releaseDate: '2025-12-02T12:00:00Z',
    backstory: 'Dr. Helen Moore, curator of the City Museum, was found dead in the Egyptian wing after closing time. Security footage shows three people entered the restricted area.',
    suspects: [
      { name: 'James Porter', bio: 'Night janitor who discovered the body at 11 PM.' },
      { name: 'Sarah Kim', bio: 'Assistant curator working late on inventory records.' },
      { name: 'Robert Greene', bio: 'Private collector who met with Helen at 9 PM.' }
    ],
    weapons: [
      { name: 'Statue', description: 'Heavy marble statue of Anubis, approximately 15 pounds.' },
      { name: 'Knife', description: 'Ancient ceremonial dagger from the display case.' },
      { name: 'Rope', description: 'Velvet rope barrier from the hallway entrance.' }
    ],
    locations: [
      { name: 'Egyptian Wing', description: 'Main exhibit hall containing artifacts and display cases.' },
      { name: 'Storage Room', description: 'Climate-controlled room where valuable items are kept.' },
      { name: 'Office', description: 'Helen\'s private office on the second floor of the museum.' }
    ],
    clues: [
      'The murder occurred between 10 PM and 11 PM.',
      'James was in the basement level mopping floors until 10:45 PM.',
      'The Knife was missing from its display case after the murder.',
      'Sarah was seen leaving the Storage Room at 10:30 PM.',
      'Robert left the museum at 9:30 PM according to security logs.',
      'The killer was in the Egyptian Wing during the time of death.'
    ],
    hints: [
      'Check each person\'s whereabouts during the murder window.',
      'Who had opportunity to be in the Egyptian Wing at the right time?',
      'The missing weapon tells you something important about the murder location.'
    ],
    solution: { suspect: 'Sarah Kim', weapon: 'Knife', location: 'Egyptian Wing' }
  },

  // PUZZLE #3 - Easy
  {
    id: 'puzzle-3',
    title: 'Murder at the Theater',
    difficulty: 'easy',
    releaseDate: '2025-12-03T12:00:00Z',
    backstory: 'Director Thomas Laurent was found dead backstage during intermission of opening night. Three cast members had access to the restricted backstage area.',
    suspects: [
      { name: 'Emma Stone', bio: 'Lead actress who had a public dispute with Thomas last week.' },
      { name: 'David Chen', bio: 'Stage manager responsible for props and equipment.' },
      { name: 'Lisa Brown', bio: 'Understudy hoping to replace Emma as the lead.' }
    ],
    weapons: [
      { name: 'Stage Weight', description: 'Iron counterweight used for rigging, 20 pounds.' },
      { name: 'Prop Sword', description: 'Metal stage sword with dulled blade but heavy hilt.' },
      { name: 'Cable', description: 'Electrical cable from lighting equipment, 6 feet long.' }
    ],
    locations: [
      { name: 'Backstage', description: 'Narrow area behind the main stage with quick-change stations.' },
      { name: 'Prop Room', description: 'Locked room containing costumes and props.' },
      { name: 'Lighting Booth', description: 'Elevated control booth overlooking the stage.' }
    ],
    clues: [
      'Thomas was killed between 8:15 PM and 8:30 PM during intermission.',
      'Emma was on stage performing until 8:10 PM and back on at 8:35 PM.',
      'The Stage Weight was found in the Prop Room after the murder.',
      'David was operating lights from the Lighting Booth during intermission.',
      'Lisa was seen in Backstage at 8:20 PM by two witnesses.',
      'The murder did not take place in the Lighting Booth.'
    ],
    hints: [
      'Who had both the opportunity and access to Backstage during intermission?',
      'The murder weapon\'s location suggests where the killer went after.',
      'Emma was performing - could she have left the stage during the right window?'
    ],
    solution: { suspect: 'Lisa Brown', weapon: 'Stage Weight', location: 'Backstage' }
  },

  // PUZZLE #4 - Easy
  {
    id: 'puzzle-4',
    title: 'Death at the Restaurant',
    difficulty: 'easy',
    releaseDate: '2025-12-04T12:00:00Z',
    backstory: 'Celebrity chef Antoine Rousseau was found dead in the walk-in freezer of his Michelin-starred restaurant. Three staff members were working the closing shift.',
    suspects: [
      { name: 'Maria Santos', bio: 'Sous chef who was passed over for head chef position.' },
      { name: 'Kevin Wright', bio: 'Restaurant manager handling the night\'s receipts.' },
      { name: 'Nina Patel', bio: 'Server who had her tips docked by Antoine last week.' }
    ],
    weapons: [
      { name: 'Cleaver', description: 'Professional kitchen cleaver, freshly sharpened.' },
      { name: 'Pan', description: 'Cast iron skillet, 12 inches, very heavy.' },
      { name: 'Corkscrew', description: 'Sommelier corkscrew with sharp spiral blade.' }
    ],
    locations: [
      { name: 'Freezer', description: 'Large walk-in freezer at -10°F, door locks from outside.' },
      { name: 'Kitchen', description: 'Main prep kitchen with all cooking equipment.' },
      { name: 'Office', description: 'Small back office where Antoine kept records and safe.' }
    ],
    clues: [
      'Antoine died between 11 PM and midnight on closing night.',
      'Maria was cleaning the Kitchen until 11:45 PM.',
      'The Cleaver was found in the Office, covered with a towel.',
      'Kevin was in the Office counting money from 10:30 PM to 11:30 PM.',
      'Nina finished her shift and left the restaurant at 10:45 PM.',
      'The killer was in the Freezer with Antoine at the time of death.'
    ],
    hints: [
      'Consider who was still at the restaurant during the murder window.',
      'Where was the murder weapon found, and what does that tell you?',
      'Did Nina have opportunity given when she left?'
    ],
    solution: { suspect: 'Maria Santos', weapon: 'Cleaver', location: 'Freezer' }
  },

  // PUZZLE #5 - Easy
  {
    id: 'puzzle-5',
    title: 'Murder at the Library',
    difficulty: 'easy',
    releaseDate: '2025-12-05T12:00:00Z',
    backstory: 'Head librarian Margaret Foster was found dead in the rare books vault. Three people had access to the restricted archives that evening.',
    suspects: [
      { name: 'Peter Walsh', bio: 'Graduate student researching historical manuscripts.' },
      { name: 'Catherine Lee', bio: 'Fellow librarian who worked the evening shift.' },
      { name: 'Frank Miller', bio: 'Security guard on duty that night.' }
    ],
    weapons: [
      { name: 'Bookend', description: 'Heavy brass bookend shaped like a lion, 8 pounds.' },
      { name: 'Letter Opener', description: 'Ornate Victorian letter opener with sharp point.' },
      { name: 'Scarf', description: 'Silk scarf from the lost and found, 60 inches long.' }
    ],
    locations: [
      { name: 'Vault', description: 'Climate-controlled rare books vault with coded access.' },
      { name: 'Reading Room', description: 'Quiet study area with large oak tables.' },
      { name: 'Main Desk', description: 'Central circulation desk near the library entrance.' }
    ],
    clues: [
      'Margaret was killed between 7 PM and 8 PM.',
      'Peter was in the Reading Room studying until 7:45 PM, seen by multiple people.',
      'The Bookend was found at the Main Desk.',
      'Catherine had the vault access code and opened it at 6:55 PM.',
      'Frank was doing his rounds of the parking lot from 7 PM to 7:30 PM.',
      'The murder took place in the Vault.'
    ],
    hints: [
      'Who had access to the Vault and opportunity during the murder time?',
      'Where the weapon ended up tells you the killer\'s path.',
      'Frank was outside - could he have gotten to the Vault in time?'
    ],
    solution: { suspect: 'Catherine Lee', weapon: 'Bookend', location: 'Vault' }
  },

  // PUZZLE #6 - Easy  
  {
    id: 'puzzle-6',
    title: 'Death at the Gym',
    difficulty: 'easy',
    releaseDate: '2025-12-06T12:00:00Z',
    backstory: 'Personal trainer Brad Morrison was found dead in the gym\'s sauna room after closing. Three clients had keys to the facility for after-hours access.',
    suspects: [
      { name: 'Jessica Hunt', bio: 'Competitive bodybuilder training for a championship.' },
      { name: 'Tom Bradley', bio: 'Business executive who trains early mornings.' },
      { name: 'Rachel Kim', bio: 'Yoga instructor who rents studio space in the gym.' }
    ],
    weapons: [
      { name: 'Dumbbell', description: '45-pound hexagonal dumbbell from the weight rack.' },
      { name: 'Towel', description: 'Thick cotton towel from the laundry bin.' },
      { name: 'Jump Rope', description: 'Heavy-duty leather jump rope, 9 feet long.' }
    ],
    locations: [
      { name: 'Sauna', description: 'Traditional Finnish sauna, temperature set to 180°F.' },
      { name: 'Weight Room', description: 'Main training floor with free weights and machines.' },
      { name: 'Yoga Studio', description: 'Mirrored studio with mats and peaceful atmosphere.' }
    ],
    clues: [
      'Brad was killed between 9 PM and 10 PM after the gym closed.',
      'Jessica was spotted on security cameras entering at 9:15 PM.',
      'The Dumbbell was found in the Yoga Studio.',
      'Tom\'s key card shows he entered at 6 AM, not in the evening.',
      'Rachel was teaching a private class until 8:45 PM.',
      'The murder occurred in the Sauna.'
    ],
    hints: [
      'Check the security timestamps carefully.',
      'Who was actually at the gym during the murder window?',
      'The weapon location reveals the killer\'s movements after the crime.'
    ],
    solution: { suspect: 'Jessica Hunt', weapon: 'Dumbbell', location: 'Sauna' }
  },

  // PUZZLE #7 - Medium (4x4)
  {
    id: 'puzzle-7',
    title: 'Murder at the Hotel',
    difficulty: 'medium',
    releaseDate: '2025-12-07T12:00:00Z',
    backstory: 'Tech billionaire Steven Park was found dead in his penthouse suite. Four people had access to the executive floor that evening.',
    suspects: [
      { name: 'Amanda Cole', bio: 'Steven\'s executive assistant who manages his schedule.' },
      { name: 'Richard Torres', bio: 'Business rival staying on the same floor.' },
      { name: 'Jennifer Wu', bio: 'Hotel concierge with master key access.' },
      { name: 'Michael Santos', bio: 'Steven\'s personal bodyguard on duty that night.' }
    ],
    weapons: [
      { name: 'Champagne Bottle', description: 'Dom Perignon, 1.5L magnum, very heavy.' },
      { name: 'Laptop Cord', description: 'Power cable, 6 feet long, heavy-duty connector.' },
      { name: 'Ice Pick', description: 'Stainless steel ice pick from the bar cart.' },
      { name: 'Paperweight', description: 'Crystal paperweight, 5 pounds, sharp edges.' }
    ],
    locations: [
      { name: 'Penthouse', description: 'Luxury suite on the 40th floor with private elevator.' },
      { name: 'Spa', description: 'Executive spa with sauna and massage rooms.' },
      { name: 'Rooftop Bar', description: 'Open-air bar overlooking the city skyline.' },
      { name: 'Gym', description: 'Private gym facility exclusive to penthouse guests.' }
    ],
    clues: [
      'Steven was killed between 10 PM and 11 PM.',
      'Amanda left the hotel at 9 PM, confirmed by valet parking records.',
      'Richard was seen at the Rooftop Bar from 10:15 PM to 11:30 PM.',
      'The Ice Pick was found in the Gym.',
      'Jennifer was responding to a call in the Spa at 10:30 PM.',
      'Michael took a break and was in the lobby from 10 PM to 10:45 PM.',
      'The murder did not occur in the Spa or Rooftop Bar.',
      'The killer was in the Penthouse at the time of death.'
    ],
    hints: [
      'Amanda left before the murder - she\'s eliminated.',
      'Cross-reference who was where during the specific time window.',
      'Michael\'s break location is verifiable by security.',
      'Who lacks an alibi for the Penthouse during the murder time?'
    ],
    solution: { suspect: 'Jennifer Wu', weapon: 'Ice Pick', location: 'Penthouse' }
  },

  // PUZZLE #8 - Medium (4x4)
  {
    id: 'puzzle-8',
    title: 'Death on the Yacht',
    difficulty: 'medium',
    releaseDate: '2025-12-08T12:00:00Z',
    backstory: 'Shipping magnate Charles Winters was found dead on his private yacht during a sunset cruise. Four guests were aboard the vessel.',
    suspects: [
      { name: 'Victoria Winters', bio: 'Charles\' daughter and heir to the shipping empire.' },
      { name: 'Gregory Marsh', bio: 'Business partner negotiating a major merger.' },
      { name: 'Sophie Laurent', bio: 'Charles\' personal attorney handling his will.' },
      { name: 'Captain James Reed', bio: 'Yacht captain with 20 years of service.' }
    ],
    weapons: [
      { name: 'Anchor', description: 'Decorative brass anchor, 25 pounds.' },
      { name: 'Fishing Gaff', description: 'Sharp metal hook on wooden pole, 4 feet long.' },
      { name: 'Champagne Flute', description: 'Crystal glass with sharp broken stem.' },
      { name: 'Rope', description: 'Nautical rope used for mooring, 30 feet coiled.' }
    ],
    locations: [
      { name: 'Main Deck', description: 'Open deck with seating area and bar setup.' },
      { name: 'Bridge', description: 'Control room where captain operates the yacht.' },
      { name: 'Cabin', description: 'Master cabin below deck with private quarters.' },
      { name: 'Stern', description: 'Rear deck with fishing equipment and swim platform.' }
    ],
    clues: [
      'Charles died between 7 PM and 8 PM as the sun was setting.',
      'Victoria was on the Main Deck with Gregory from 6:45 PM to 7:30 PM.',
      'The Fishing Gaff was found on the Bridge.',
      'Captain Reed was piloting the yacht from the Bridge from 6 PM to 8 PM.',
      'Sophie was in the Cabin reviewing documents until 7:15 PM.',
      'Gregory went to the Stern to smoke at 7:30 PM.',
      'The murder occurred in the Cabin.',
      'Victoria was not in the Cabin at the time of death.'
    ],
    hints: [
      'Victoria and Gregory were together - they alibi each other.',
      'Captain Reed was busy piloting - could he have left the Bridge?',
      'Sophie was in the Cabin until 7:15 PM - what happened after she left?',
      'Who had access to the Cabin during the murder window?'
    ],
    solution: { suspect: 'Sophie Laurent', weapon: 'Fishing Gaff', location: 'Cabin' }
  },

  // PUZZLE #9 - Medium (4x4)
  {
    id: 'puzzle-9',
    title: 'Murder at the Office',
    difficulty: 'medium',
    releaseDate: '2025-12-09T12:00:00Z',
    backstory: 'CEO Jennifer Blake was found dead in the executive suite during the company holiday party. Four employees had access to the secured floor.',
    suspects: [
      { name: 'David Park', bio: 'CFO recently accused of embezzling company funds.' },
      { name: 'Rachel Green', bio: 'VP of Sales competing for Jennifer\'s position.' },
      { name: 'Kevin Tran', bio: 'IT director with access to all security systems.' },
      { name: 'Lisa Chen', bio: 'Executive assistant who organized the holiday party.' }
    ],
    weapons: [
      { name: 'Trophy', description: 'Glass award from executive credenza, heavy base.' },
      { name: 'Scissors', description: 'Large office scissors from supply closet, 10 inches.' },
      { name: 'USB Cable', description: 'Reinforced charging cable, 6 feet long.' },
      { name: 'Stapler', description: 'Heavy-duty metal stapler, industrial size.' }
    ],
    locations: [
      { name: 'Executive Suite', description: 'Corner office with view, private entrance.' },
      { name: 'Server Room', description: 'Climate-controlled IT room with backup systems.' },
      { name: 'Conference Room', description: 'Large meeting room where the party was held.' },
      { name: 'Break Room', description: 'Staff kitchen area on the executive floor.' }
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
    hints: [
      'David was giving a speech - he has witnesses.',
      'Kevin was working in the Server Room the entire time.',
      'Rachel was seen until 8:30 PM - what about after?',
      'Lisa\'s presence in the Break Room is key - when was she there?'
    ],
    solution: { suspect: 'Rachel Green', weapon: 'Scissors', location: 'Executive Suite' }
  },

  // PUZZLE #10 - Hard (4x4)
  {
    id: 'puzzle-10',
    title: 'Death at the Manor',
    difficulty: 'hard',
    releaseDate: '2025-12-10T12:00:00Z',
    backstory: 'Lord Edmund Ashford was found dead in his private study. Four members of the household were present on the estate that stormy evening.',
    suspects: [
      { name: 'Lady Charlotte', bio: 'Edmund\'s wife who inherited nothing under the current will.' },
      { name: 'Arthur Ashford', bio: 'Edmund\'s younger brother and potential heir.' },
      { name: 'Dr. Philip Hayes', bio: 'Family physician making a house call that evening.' },
      { name: 'Margaret Price', bio: 'Head housekeeper who has served the family for 30 years.' }
    ],
    weapons: [
      { name: 'Fireplace Poker', description: 'Heavy iron poker from the study fireplace.' },
      { name: 'Letter Opener', description: 'Victorian silver letter opener with 6-inch blade.' },
      { name: 'Candlestick', description: 'Solid brass candlestick, 14 inches tall, ornate.' },
      { name: 'Rope', description: 'Silk curtain tie from the drawing room, 8 feet long.' }
    ],
    locations: [
      { name: 'Study', description: 'Wood-paneled room with locked desk and fireplace.' },
      { name: 'Drawing Room', description: 'Formal sitting room with piano and portraits.' },
      { name: 'Kitchen', description: 'Large servants\' kitchen in the basement level.' },
      { name: 'Conservatory', description: 'Glass-enclosed garden room with tropical plants.' }
    ],
    clues: [
      'Edmund was killed between 9 PM and 10 PM during the thunderstorm.',
      'Lady Charlotte was playing piano in the Drawing Room from 8:45 PM to 9:30 PM, heard by servants.',
      'Arthur arrived at the manor at 9:15 PM, delayed by the storm.',
      'The Candlestick was found in the Conservatory.',
      'Dr. Hayes was examining a patient in the Kitchen at 9 PM.',
      'Margaret was serving tea in the Drawing Room at 9 PM.',
      'The murder weapon was the Letter Opener.',
      'The killer was in the Study at the time of death.',
      'Charlotte was not in the Study when the murder occurred.',
      'Arthur did not use the Candlestick.'
    ],
    hints: [
      'Charlotte was playing piano with witnesses - she\'s eliminated.',
      'Arthur arrived after the murder started - could he have done it?',
      'The murder weapon is the Letter Opener, not the Candlestick.',
      'Who was unaccounted for during the exact murder window?',
      'Dr. Hayes and Margaret both have alibis at 9 PM - what about 9:30 PM?'
    ],
    solution: { suspect: 'Dr. Philip Hayes', weapon: 'Letter Opener', location: 'Study' }
  },

  // PUZZLE #11 - Hard (4x4)
  {
    id: 'puzzle-11',
    title: 'Murder at the Casino',
    difficulty: 'hard',
    releaseDate: '2025-12-11T12:00:00Z',
    backstory: 'Casino owner Vincent Romano was found dead in the high-roller suite. Four people had VIP access to the private gaming floor that night.',
    suspects: [
      { name: 'Nicholas Carver', bio: 'Professional gambler who owed Vincent $500,000.' },
      { name: 'Elena Petrova', bio: 'Casino floor manager responsible for security.' },
      { name: 'Marcus DeVille', bio: 'Rival casino owner from across the street.' },
      { name: 'Sophia Romano', bio: 'Vincent\'s sister and casino part-owner.' }
    ],
    weapons: [
      { name: 'Poker Chip Rack', description: 'Heavy acrylic chip carrier, 10 pounds when full.' },
      { name: 'Crystal Decanter', description: 'Lead crystal whiskey decanter, expensive and heavy.' },
      { name: 'Tie', description: 'Designer silk necktie, 58 inches long.' },
      { name: 'Dice', description: 'Oversized novelty dice made of solid brass, 3 inches per side.' }
    ],
    locations: [
      { name: 'High-Roller Suite', description: 'Private room for big-stakes poker games.' },
      { name: 'Security Office', description: 'Monitoring room with live camera feeds.' },
      { name: 'Bar', description: 'Exclusive VIP bar on the gaming floor.' },
      { name: 'Vault', description: 'Secure room where cash and chips are stored.' }
    ],
    clues: [
      'Vincent was killed between 2 AM and 3 AM.',
      'Nicholas was playing poker in the High-Roller Suite from 1 AM to 2:30 AM.',
      'Elena was reviewing security footage in the Security Office from 2:15 AM to 3:15 AM.',
      'The Crystal Decanter was found in the Vault.',
      'Marcus was seen entering the casino at 1:45 AM by the valet.',
      'Sophia was at the Bar until 2 AM, then went to get cash.',
      'Nicholas left the High-Roller Suite at 2:30 AM.',
      'The murder took place in the Vault.',
      'Elena was in the Security Office during the murder.',
      'Marcus was not at the Bar during the time of death.'
    ],
    hints: [
      'Elena was watching cameras - she has a verifiable alibi.',
      'Nicholas left the poker game at 2:30 AM - where did he go?',
      'Sophia went to get cash at 2 AM - which room has cash?',
      'Marcus entered at 1:45 AM but where was he during the murder?',
      'The murder was in the Vault - who had reason to go there?'
    ],
    solution: { suspect: 'Sophia Romano', weapon: 'Crystal Decanter', location: 'Vault' }
  }
];
  
  // Helper function to get a puzzle by ID
  export function getPuzzleById(id: string): Puzzle | undefined {
    return puzzles.find(p => p.id === id);
  }