import type { Puzzle } from '../types/puzzle';

export const puzzles: Puzzle[] = [
  // PUZZLE #1 - Easy
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
  },

  // PUZZLE #12 - LUDICROUS (5x5)
  {
    id: 'puzzle-12',
    title: 'The Impossible Case at Blackwood Estate',
    difficulty: 'ludicrous',
    releaseDate: '2025-12-12T12:00:00Z',
    backstory: 'Renowned detective critic Lord Percival Blackwood was found dead during his annual "Unsolvable Mystery" dinner party. Five master detectives were present. The killer must be among them. This is Detective Finch\'s greatest challenge.',
    
    suspects: [
      { name: 'Inspector Aria Chen', bio: 'Forensic specialist who solved the "Crimson Cipher" case in 47 minutes.' },
      { name: 'Detective Nikolas Voss', bio: 'Psychological profiler known for the "Mirror Murders" breakthrough.' },
      { name: 'Agent Sophia Romano', bio: 'Undercover expert who infiltrated three crime syndicates.' },
      { name: 'Professor Marcus Hyde', bio: 'Criminal psychology professor and author of "The Perfect Crime".' },
      { name: 'Captain Elena Frost', bio: 'Retired homicide detective with 200+ solved cases.' }
    ],
    
    weapons: [
      { name: 'Antique Syringe', description: 'Victorian-era medical instrument containing traces of aconite poison.' },
      { name: 'Crystal Decanter', description: 'Heavy lead crystal containing aged scotch, found shattered.' },
      { name: 'Fencing Foil', description: 'Competition-grade épée with unusually sharp point, unbuttoned.' },
      { name: 'Marble Bust', description: 'Sculpture of Sherlock Holmes, surprisingly heavy, chipped base.' },
      { name: 'Silk Garrote', description: 'Custom-made strangling wire disguised as decorative cord.' }
    ],
    
    locations: [
      { name: 'Library', description: 'Three-story room with rolling ladder, rare book collection behind glass.' },
      { name: 'Billiard Room', description: 'Victorian gaming room with full-size table and wall-mounted cue rack.' },
      { name: 'Wine Cellar', description: 'Temperature-controlled basement vault, keypad access, hundreds of bottles.' },
      { name: 'Conservatory', description: 'Glass-enclosed garden with exotic plants and koi pond.' },
      { name: 'Trophy Room', description: 'Display of Lord Blackwood\'s case memorabilia and awards.' }
    ],
    
    clues: [
      'Lord Blackwood died between 9:45 PM and 10:15 PM according to the coroner.',
      'Inspector Chen was examining evidence in the Library from 9:30 PM until she discovered the body at 10:20 PM. She never left the room.',
      'The murder weapon was the Antique Syringe, but it was found in a location where the murder did NOT occur.',
      'Detective Voss was seen entering the Wine Cellar at 9:40 PM. The cellar\'s keypad logs show it was accessed again at 10:05 PM, but Voss had already left by then.',
      'Agent Romano was playing billiards with Captain Frost from 9:15 PM to 9:50 PM. Multiple witnesses confirm this.',
      'Professor Hyde gave a toast in the Trophy Room at 9:35 PM, attended by everyone except the person who was in the Wine Cellar at that time.',
      'The killer was in the Conservatory at exactly 10:00 PM, which is when the murder occurred.',
      'Captain Frost went to the Billiard Room after playing billiards, but before 10:15 PM.',
      'The person who accessed the Wine Cellar at 10:05 PM was NOT the same person who was there at 9:40 PM.',
      'Neither Inspector Chen nor the person who was in the Trophy Room at 9:35 PM could have been in the Conservatory at 10:00 PM.',
      'Agent Romano was never in the Wine Cellar at any point during the evening.',
      'The murder did not take place in the Library, Wine Cellar, or Billiard Room.',
      'Professor Hyde was not in the Conservatory between 9:45 PM and 10:15 PM.',
      'The person who gave the toast at 9:35 PM was in a different location at 10:00 PM than they were at 9:35 PM.',
      'Detective Voss left the Wine Cellar before Agent Romano finished playing billiards.'
    ],
    
    hints: [
      'Start by mapping out who was WHERE and WHEN. Create a timeline from 9:30-10:20.',
      'Inspector Chen has an ironclad alibi - she\'s eliminated. Focus on the other four.',
      'The Wine Cellar was accessed twice - once by Voss at 9:40, and once by someone else at 10:05. Who was free at 10:05?',
      'The murder happened at 10:00 PM in the Conservatory. Who has NO alibi for that exact time?',
      'If Professor Hyde gave the toast at 9:35 in the Trophy Room, and everyone except one person attended, who was missing? (The person in the Wine Cellar)',
      'Captain Frost was playing billiards until 9:50, then went to the Billiard Room. She couldn\'t have been in the Conservatory at 10:00.',
      'Agent Romano finished billiards at 9:50 and was never in the Wine Cellar. Where could she be at 10:00 PM?',
      'Professor Hyde was NOT in the Conservatory during the murder window. But was he somewhere with an alibi?',
      'Process of elimination: Chen (Library alibi), Frost (wrong location at 10:00), Hyde (explicitly not in Conservatory). That leaves two people...',
      'Detective Voss left the Wine Cellar before 9:50 PM (when billiards ended). Where did he go after? Who can verify his location at 10:00 PM? No one.'
    ],
    
    solution: {
      suspect: 'Detective Nikolas Voss',
      weapon: 'Antique Syringe',
      location: 'Conservatory'
    }
  },

  // PUZZLE #13 - LUDICROUS (5x5)
  {
    id: 'puzzle-13',
    title: 'The Quantum Heist Paradox',
    difficulty: 'ludicrous',
    releaseDate: '2025-12-13T12:00:00Z',
    backstory: 'Tech billionaire Dr. Quantum was found dead in his smart home during a power outage. The automated security system logged every movement, but the timestamps seem impossible. Five people had access codes.',
    
    suspects: [
      { name: 'Dr. Sarah Chen', bio: 'Quantum physicist and business partner in the AI research lab.' },
      { name: 'Marcus Kane', bio: 'Head of security who designed the entire surveillance system.' },
      { name: 'Isabella Torres', bio: 'Personal assistant with master override codes to all systems.' },
      { name: 'Professor James Wei', bio: 'Research rival who recently lost funding to Dr. Quantum.' },
      { name: 'Alexandra Park', bio: 'Ex-spouse who still had access codes from the divorce settlement.' }
    ],
    
    weapons: [
      { name: 'Electromagnetic Pulse Device', description: 'Prototype EMP that caused the building-wide blackout.' },
      { name: 'Liquid Nitrogen Canister', description: 'Lab equipment storing cryogenic samples, freezing cold.' },
      { name: 'Carbon Fiber Cable', description: 'Ultra-thin research equipment cable, incredibly strong.' },
      { name: 'Microscope Base', description: 'Heavy titanium base from electron microscope, sharp edges.' },
      { name: 'Smart Glass Shard', description: 'Fragment from shattered electrochromic window panel.' }
    ],
    
    locations: [
      { name: 'Lab', description: 'Quantum computing research facility with biometric access.' },
      { name: 'Server Room', description: 'Climate-controlled room housing backup power and data systems.' },
      { name: 'Penthouse', description: 'Residential floor with panoramic views and smart home integration.' },
      { name: 'Garage', description: 'Underground parking with electric vehicle charging stations.' },
      { name: 'Rooftop', description: 'Helipad and solar panel array on building\'s top floor.' }
    ],
    
    clues: [
      'Dr. Quantum died between 11:50 PM and 12:10 AM during the power outage.',
      'The security logs show Dr. Chen scanned into the Lab at 11:30 PM and didn\'t leave until power was restored at 12:15 AM.',
      'Marcus Kane was monitoring the Server Room remotely from his home. His VPN connection logs confirm he never entered the building.',
      'The EMP device was activated at exactly 11:48 PM from the Rooftop, causing the power outage.',
      'Isabella Torres was logged entering the Garage at 11:40 PM. Her car\'s GPS shows she left the building at 11:55 PM.',
      'Professor Wei had his access code revoked two weeks ago and cannot enter the building.',
      'Alexandra Park used her access code to enter the Penthouse at 11:45 PM.',
      'The murder weapon was found in the Server Room, but the murder did not occur there.',
      'The killer was on the Rooftop at the time of the murder.',
      'During the power outage, biometric scanners failed but backup keypad codes still worked.',
      'The person who activated the EMP at 11:48 PM is the same person who committed the murder.',
      'Isabella\'s car left the building before the murder occurred.',
      'The only people physically in the building during the murder were those who entered before 11:48 PM.',
      'Alexandra Park\'s access logs show no exit from the Penthouse between 11:45 PM and 12:15 AM.',
      'The murder took place on the Rooftop at approximately 12:00 AM, during total darkness.'
    ],
    
    hints: [
      'Marcus Kane was remote - eliminate him immediately.',
      'Professor Wei had no access - eliminate him.',
      'Isabella left at 11:55 PM, before the murder at 12:00 AM - eliminate her.',
      'That leaves Dr. Chen and Alexandra Park. Both were in the building.',
      'Dr. Chen was locked in the Lab when power went out. Biometric scanners failed - could she leave?',
      'The EMP was activated from the Rooftop at 11:48 PM. Who was on the Rooftop?',
      'Alexandra entered the Penthouse at 11:45 PM. Her logs show no exit. Could she reach the Rooftop?',
      'The Penthouse and Rooftop are adjacent - rooftop access is through the Penthouse.',
      'Alexandra had keypad backup codes that worked during the outage. She could move freely.',
      'The killer activated the EMP at 11:48, committed murder at 12:00, and was still logged in the Penthouse because she never "officially" left through scanners.'
    ],
    
    solution: {
      suspect: 'Alexandra Park',
      weapon: 'Electromagnetic Pulse Device',
      location: 'Rooftop'
    }
  },

  // PUZZLE #14 - LUDICROUS (5x5)
  {
    id: 'puzzle-14',
    title: 'Murder on the Midnight Express',
    difficulty: 'ludicrous',
    releaseDate: '2025-12-14T12:00:00Z',
    backstory: 'International arms dealer Viktor Volkov was found dead in his private train car during an overnight journey through the Alps. Five passengers had access to his cabin. The train never stopped.',
    
    suspects: [
      { name: 'Natasha Ivanova', bio: 'Volkov\'s former bodyguard turned rival, traveling under fake passport.' },
      { name: 'Ambassador Chen Li', bio: 'Diplomat secretly negotiating weapons deal with Volkov.' },
      { name: 'Dr. Heinrich Mueller', bio: 'Swiss banker managing Volkov\'s offshore accounts.' },
      { name: 'Captain Maria Santos', bio: 'Interpol agent working undercover as train staff.' },
      { name: 'Dmitri Federov', bio: 'Volkov\'s nephew and sole heir to the weapons empire.' }
    ],
    
    weapons: [
      { name: 'Poison Dart', description: 'Miniature dart coated with fast-acting neurotoxin, from blowgun.' },
      { name: 'Train Cable', description: 'Emergency brake cable, 8 feet long, steel-reinforced.' },
      { name: 'Ice Pick', description: 'Bar tool from the dining car, pointed and deadly.' },
      { name: 'Crystal Ashtray', description: 'Heavy cut crystal from smoking lounge, sharp edges.' },
      { name: 'Syringe', description: 'Medical supply from first aid kit, found empty.' }
    ],
    
    locations: [
      { name: 'Private Car', description: 'Volkov\'s luxury compartment with bulletproof windows.' },
      { name: 'Dining Car', description: 'Restaurant car serving late-night meals and drinks.' },
      { name: 'Observation Deck', description: 'Glass-domed car with panoramic Alpine views.' },
      { name: 'Baggage Car', description: 'Cargo storage area with locked luggage compartments.' },
      { name: 'Staff Quarters', description: 'Crew sleeping area restricted to train employees.' }
    ],
    
    clues: [
      'Volkov was killed between 2:15 AM and 2:45 AM while the train passed through a tunnel.',
      'Natasha was playing poker in the Dining Car with three witnesses from 2:00 AM to 3:00 AM continuously.',
      'Ambassador Chen was in his cabin (not Volkov\'s Private Car) from 1:00 AM until breakfast. The cabin door was locked from inside.',
      'Dr. Mueller was conducting a video conference call from the Observation Deck from 2:10 AM to 2:50 AM. The timestamp is verified.',
      'Captain Santos was required to do a security sweep of the Baggage Car at 2:30 AM. Log confirms she was there.',
      'Dmitri Federov was seen leaving the Private Car at 2:05 AM by a passenger.',
      'The murder weapon was the Poison Dart, found in the Staff Quarters.',
      'The killer was in the Private Car at the time of death.',
      'During the tunnel passage (2:20-2:40 AM), all cameras were disabled due to darkness protocol.',
      'The Staff Quarters can only be accessed by train employees or someone with a staff key.',
      'Dmitri had a staff key card stolen from his uncle two months ago.',
      'The poker game in the Dining Car had four players and never paused.',
      'Ambassador Chen\'s cabin was three cars away from Volkov\'s Private Car.',
      'Captain Santos\'s security sweep took exactly 15 minutes according to procedure.',
      'The person who left the Private Car at 2:05 AM returned during the tunnel blackout at 2:25 AM.',
      'Neither the Observation Deck nor anyone\'s locked cabin can be confused with the Private Car.'
    ],
    
    hints: [
      'Four people have solid alibis. Find them first.',
      'Natasha was playing poker with witnesses the entire time - eliminated.',
      'Dr. Mueller was on video call with timestamp verification - eliminated.',
      'Ambassador Chen was locked in his cabin three cars away - eliminated.',
      'Captain Santos was in Baggage Car at 2:30 AM (during the murder window) - but verify the timing carefully.',
      'Dmitri left at 2:05 AM and returned at 2:25 AM during the blackout.',
      'The murder happened between 2:15-2:45. Who was in the Private Car during that window?',
      'Captain Santos was in Baggage Car at 2:30 AM - but could she have been in Private Car at 2:20 or 2:40?',
      'The security sweep took 15 minutes. If she started at 2:30, she was occupied until 2:45.',
      'But the murder could have occurred at 2:20 AM, before her sweep. Who was there then? Dmitri returned at 2:25.',
      'Wait - Dmitri LEFT at 2:05 but RETURNED at 2:25. He was in the Private Car during the critical 2:25-2:40 window.',
      'Dmitri had the staff key to access Staff Quarters. He committed the murder during the blackout and stashed the weapon where only staff should go.'
    ],
    
    solution: {
      suspect: 'Dmitri Federov',
      weapon: 'Poison Dart',
      location: 'Private Car'
    }
  }
];