import type { Chapter } from '../../types/chapterTypes';

/**
 * Chapter 1: "Maiden Voyage"
 * Setting: Embarkation Night — the Utopia of the Seas
 * Tone: Glamorous, lighthearted intrigue
 *
 * Victim: Marcus Webb (tech mogul)
 * Mini-puzzles: 5 (Easy → Medium)
 * Finale: 3×3, Medium
 *
 * Carry-forward facts unlocked across the chapter:
 *   Puzzle 1 → "Sasha Ivanova had a drink with Marcus Webb two hours before his death"
 *   Puzzle 2 → "The murder weapon was not a kitchen implement"
 *   Puzzle 3 → "Dominic Hale was seen near the VIP Lounge at the time of death"
 *   Puzzle 4 → "Celeste Moreau received a message from Webb moments before he died"
 *   Puzzle 5 → "The killer entered through the Grand Atrium"
 *   Finale  → "Felix Marsh arranged the VIP Lounge booking himself" (seeds Ch. 2)
 */
export const chapter1: Chapter = {
    id: 'chapter-1',
    chapterNumber: 1,
    title: 'Maiden Voyage',
    subtitle: 'Embarkation Night',
    description:
        'The Utopia of the Seas has barely left port when a body turns up in the VIP Lounge. Detective Rook Pemberton — technically on holiday — can\'t help himself.',

    puzzles: [
        // ─────────────────────────────────────────────────────────
        // PUZZLE 1-1: "The Welcome Party" (Easy 3×3)
        // Who was arguing with Webb at the embarkation party?
        // Solution: Dominic Hale | Crystal Decanter | Grand Atrium
        // ─────────────────────────────────────────────────────────
        {
            id: 'ch1-p1',
            title: 'The Welcome Party',
            difficulty: 'easy',
            releaseDate: '2026-02-19T00:00:00',
            backstory:
                'The Utopia\'s embarkation party is in full swing. Rook has already located the canapés and is trying very hard not to make eye contact with anyone. Then a passenger reports a heated argument near the champagne bar — someone was seen confronting the newly boarded tech mogul Marcus Webb.',
            suspects: [
                {
                    name: 'Dominic Hale',
                    bio: 'Tech rival. Boarded the same cruise as Webb — "an unfortunate coincidence."',
                    height: '6\'1"',
                    build: 'Broad-shouldered',
                    eyeColor: 'Blue eyes',
                    hairColor: 'Dark brown hair',
                    handedness: 'Right-handed',
                    age: 'Mid-40s',
                    icon: 'laptop',
                },
                {
                    name: 'Celeste Moreau',
                    bio: 'Webb\'s personal assistant. Knows all his secrets.',
                    height: '5\'4"',
                    build: 'Petite',
                    eyeColor: 'Green eyes',
                    hairColor: 'Chestnut hair',
                    handedness: 'Right-handed',
                    age: 'Early 30s',
                    icon: 'briefcase',
                },
                {
                    name: 'Sasha Ivanova',
                    bio: 'Professional poker player. Webb owed her money.',
                    height: '5\'9"',
                    build: 'Athletic',
                    eyeColor: 'Gray eyes',
                    hairColor: 'Dark auburn hair',
                    handedness: 'Ambidextrous',
                    age: 'Late 30s',
                    icon: 'spade',
                },
            ],
            weapons: [
                {
                    name: 'Crystal Decanter',
                    description: 'Lead-free crystal, monogrammed with the Utopia\'s crest.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'glass-water',
                },
                {
                    name: 'Champagne Bottle',
                    description: 'Magnum of Veuve Clicquot. Heavy base.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'wine',
                },
                {
                    name: 'Letter Opener',
                    description: 'Silver, from a premium stateroom writing desk.',
                    weight: 'Light-weight',
                    type: 'Sharp',
                    icon: 'knife',
                },
            ],
            locations: [
                {
                    name: 'Grand Atrium',
                    description: 'The ship\'s seven-deck central atrium. Always busy — but plenty of alcoves.',
                    setting: 'Indoors',
                    access: 'Public',
                    icon: 'building',
                },
                {
                    name: 'Pool Deck',
                    description: 'Heated pools and a swim-up bar. Quiet this early in the voyage.',
                    setting: 'Outdoors',
                    access: 'Public',
                    icon: 'waves',
                },
                {
                    name: 'Casino Royale',
                    description: 'The ship\'s casino. Cameras everywhere — except the private VIP room.',
                    setting: 'Indoors',
                    access: 'Public',
                    icon: 'diamond',
                },
            ],
            clues: [
                'Celeste Moreau was seen in the Casino Royale all evening — several dealers confirmed it.',
                'The person arguing with Webb had the Crystal Decanter in their possession.',
                'Sasha Ivanova was at the Pool Deck bar when the argument took place.',
                'The Crystal Decanter was found in the Grand Atrium after the incident.',
                'The Champagne Bottle was accounted for at the Pool Deck bar, unbroken.',
                'Celeste Moreau did not have the Letter Opener.',
            ],
            statements: [
                {
                    suspect: 'Dominic Hale',
                    claim: 'I was in the Grand Atrium. I don\'t know what you\'re implying.',
                },
                {
                    suspect: 'Celeste Moreau',
                    claim: 'I was in the Casino Royale the entire time. Ask the dealers.',
                },
                {
                    suspect: 'Sasha Ivanova',
                    claim: 'I was at the Pool Deck bar. I hadn\'t even spoken to Webb yet.',
                },
            ],
            hints: [
                'Celeste Moreau has an alibi — multiple witnesses place her in the Casino.',
                'Sasha Ivanova was at the Pool Deck; the argument was not there.',
                'The Crystal Decanter was found in the Grand Atrium. Who was there?',
            ],
            solution: {
                suspect: 'Dominic Hale',
                weapon: 'Crystal Decanter',
                location: 'Grand Atrium',
            },
            narratives: [
                {
                    position: 'before',
                    text: '"Right," Rook said to nobody in particular, surveying the embarkation party from behind a canapé. "Someone on this ship is going to be murdered. Possibly by me, if the string quartet plays another Celine Dion arrangement." He paused. "Actually — no. Look at that. The tech mogul and the man in the Italian suit. They\'re not shaking hands at all. They\'re arguing." He grabbed his notebook. Holiday officially cancelled.',
                    speakerName: 'Rook Pemberton',
                },
                {
                    position: 'after',
                    text: '"Dominic Hale," Rook announced, circling the atrium three times before anyone had asked him anything. "Confrontation, Crystal Decanter, Grand Atrium. Classic opening move." He tapped the decanter with his pen. "Not murder — yet. But someone wanted Webb frightened. The question is why now, on this particular ship, on this particular night." He looked at the ocean through the porthole. "We\'re barely past the harbour wall."',
                    speakerName: 'Rook Pemberton',
                },
            ],
            carryForwardClues: [
                {
                    puzzleIndex: 0,
                    fact: 'Dominic Hale confronted Marcus Webb in the Grand Atrium at the embarkation party.',
                },
            ],
        },

        // ─────────────────────────────────────────────────────────
        // PUZZLE 1-2: "The Poker Debt" (Easy 3×3)
        // Who had access to Webb's private financial records?
        // Solution: Celeste Moreau | Letter Opener | Passenger Cabin
        // ─────────────────────────────────────────────────────────
        {
            id: 'ch1-p2',
            title: 'The Poker Debt',
            difficulty: 'easy',
            releaseDate: '2026-02-19T00:00:00',
            backstory:
                'Rook discovers that Marcus Webb\'s private cabin was accessed during the embarkation party — someone rifled through his documents. A confidential record of Webb\'s private poker debts was removed from a locked briefcase. But the lock wasn\'t forced. Someone had a key.',
            suspects: [
                {
                    name: 'Celeste Moreau',
                    bio: 'Webb\'s personal assistant. Held a spare key to all his travel cases.',
                    height: '5\'4"',
                    build: 'Petite',
                    eyeColor: 'Green eyes',
                    hairColor: 'Chestnut hair',
                    handedness: 'Right-handed',
                    age: 'Early 30s',
                    icon: 'briefcase',
                },
                {
                    name: 'Sasha Ivanova',
                    bio: 'Professional poker player. Named in the debt records.',
                    height: '5\'9"',
                    build: 'Athletic',
                    eyeColor: 'Gray eyes',
                    hairColor: 'Dark auburn hair',
                    handedness: 'Ambidextrous',
                    age: 'Late 30s',
                    icon: 'spade',
                },
                {
                    name: 'Felix Marsh',
                    bio: 'Cruise Director. Has a master key to all passenger cabins.',
                    height: '6\'0"',
                    build: 'Trim',
                    eyeColor: 'Blue eyes',
                    hairColor: 'Sandy blond hair',
                    handedness: 'Right-handed',
                    age: 'Late 30s',
                    icon: 'mic',
                },
            ],
            weapons: [
                {
                    name: 'Letter Opener',
                    description: 'Silver, monogrammed. Used to force a secondary lock on the briefcase.',
                    weight: 'Light-weight',
                    type: 'Sharp',
                    icon: 'knife',
                },
                {
                    name: 'Ice Pick',
                    description: 'Cocktail bar issue. Could pick a standard travel lock.',
                    weight: 'Light-weight',
                    type: 'Sharp',
                    icon: 'pickaxe',
                },
                {
                    name: 'Corkscrew',
                    description: 'Sommelier issue, from the wine bar. The foil cutter is sharpened.',
                    weight: 'Light-weight',
                    type: 'Sharp',
                    icon: 'cog',
                },
            ],
            locations: [
                {
                    name: 'Passenger Cabin',
                    description: 'Webb\'s outside cabin on Deck 8. Lock accessed without force.',
                    setting: 'Indoors',
                    access: 'Private',
                    icon: 'bed',
                },
                {
                    name: 'Grand Atrium',
                    description: 'The seven-deck central atrium. Everyone passes through here.',
                    setting: 'Indoors',
                    access: 'Public',
                    icon: 'building',
                },
                {
                    name: 'VIP Lounge',
                    description: 'Keycard-access lounge for suite passengers. Webb had a suite.',
                    setting: 'Indoors',
                    access: 'Restricted',
                    icon: 'crown',
                },
            ],
            clues: [
                'Felix Marsh\'s master key was logged out at the VIP Lounge at the time of the break-in — not the cabin deck.',
                'Sasha Ivanova was observed in the Grand Atrium during the relevant timeframe.',
                'The Letter Opener was found in Webb\'s cabin, consistent with a secondary lock mechanism.',
                'Only the ship\'s spare key and Webb\'s personal key could open the cabin door without the master — Celeste Moreau held the spare.',
                'The Ice Pick was found behind the VIP Lounge bar, accounted for.',
                'Sasha Ivanova did not have the Corkscrew.',
            ],
            statements: [
                {
                    suspect: 'Celeste Moreau',
                    claim: 'Mr. Webb asked me to retrieve some documents earlier. I had every right to be there.',
                },
                {
                    suspect: 'Sasha Ivanova',
                    claim: 'I was in the Grand Atrium. Someone needed to watch the lobby while Marcus was "busy."',
                },
                {
                    suspect: 'Felix Marsh',
                    claim: 'My master key usage is logged. I was at the VIP Lounge all evening. Check the system.',
                },
            ],
            hints: [
                'Felix Marsh\'s master key was logged elsewhere — he has an alibi.',
                'Sasha Ivanova was in the Grand Atrium, not the cabin.',
                'Celeste Moreau had the spare key. Only she could enter without using the master key.',
            ],
            solution: {
                suspect: 'Celeste Moreau',
                weapon: 'Letter Opener',
                location: 'Passenger Cabin',
            },
            narratives: [
                {
                    position: 'before',
                    text: 'Rook crouched in Webb\'s cabin doorway, tilting his head at an angle that suggested either profound insight or a neck problem. "Someone was in here. Didn\'t break in — walked in. Only three people hold keys to this cabin." He straightened up suddenly. "Also, the Letter Opener has been moved. I know because it wasn\'t where a person of Webb\'s organisational habits would put it." He looked at the ocean. "He was meticulous. Someone borrowed his opener and put it back wrong."',
                    speakerName: 'Rook Pemberton',
                },
                {
                    position: 'after',
                    text: '"Celeste Moreau," Rook said, with the tone of someone reading a grocery list. "Spare key. Letter Opener. Passenger Cabin. She took the poker debt records." He paused. "She wasn\'t stealing them to destroy them. She was collecting evidence. Against Webb." He looked at the poker ledger in the evidence bag. "Someone on this ship owes Sasha Ivanova a great deal of money. And someone else knew exactly how much."',
                    speakerName: 'Rook Pemberton',
                },
            ],
            carryForwardClues: [
                {
                    puzzleIndex: 1,
                    fact: 'Celeste Moreau took Marcus Webb\'s private poker debt records from his cabin.',
                },
            ],
        },

        // ─────────────────────────────────────────────────────────
        // PUZZLE 1-3: "Midnight Drinks" (Medium 3×3)
        // Who had the last private meeting with Webb?
        // Solution: Sasha Ivanova | Champagne Bottle | VIP Lounge
        // ─────────────────────────────────────────────────────────
        {
            id: 'ch1-p3',
            title: 'Midnight Drinks',
            difficulty: 'medium',
            releaseDate: '2026-02-19T00:00:00',
            backstory:
                'Marcus Webb sent a message at 11:47 PM: "Meet me in the VIP Lounge. Bring the bottle." Two hours later, he was dead. The VIP Lounge bar shows one champagne magnum opened and partially consumed. Someone shared a drink with Webb — and it wasn\'t a friendly nightcap.',
            suspects: [
                {
                    name: 'Sasha Ivanova',
                    bio: 'Professional poker player. Webb owed her considerable money.',
                    height: '5\'9"',
                    build: 'Athletic',
                    eyeColor: 'Gray eyes',
                    hairColor: 'Dark auburn hair',
                    handedness: 'Ambidextrous',
                    age: 'Late 30s',
                    icon: 'spade',
                },
                {
                    name: 'Dominic Hale',
                    bio: 'Tech rival. Had an explosive argument with Webb earlier.',
                    height: '6\'1"',
                    build: 'Broad-shouldered',
                    eyeColor: 'Blue eyes',
                    hairColor: 'Dark brown hair',
                    handedness: 'Right-handed',
                    age: 'Mid-40s',
                    icon: 'laptop',
                },
                {
                    name: 'Felix Marsh',
                    bio: 'Cruise Director. Arranged the VIP Lounge booking.',
                    height: '6\'0"',
                    build: 'Trim',
                    eyeColor: 'Blue eyes',
                    hairColor: 'Sandy blond hair',
                    handedness: 'Right-handed',
                    age: 'Late 30s',
                    icon: 'mic',
                },
            ],
            weapons: [
                {
                    name: 'Champagne Bottle',
                    description: 'Magnum of Veuve Clicquot. One glass poured. Second glass was not used.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'wine',
                },
                {
                    name: 'Crystal Decanter',
                    description: 'Lead-free crystal decanter from the VIP bar. Full, untouched.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'glass-water',
                },
                {
                    name: 'Golf Club',
                    description: 'A 9-iron from the sports deck locker. No obvious connection to the VIP Lounge.',
                    weight: 'Medium-weight',
                    type: 'Blunt',
                    icon: 'flag',
                },
            ],
            locations: [
                {
                    name: 'VIP Lounge',
                    description: 'Keycard-access lounge, Deck 14. Webb\'s final confirmed location.',
                    setting: 'Indoors',
                    access: 'Restricted',
                    icon: 'crown',
                },
                {
                    name: 'Observatory Lounge',
                    description: 'Top-deck lounge with panoramic views. Often empty after midnight.',
                    setting: 'Indoors',
                    access: 'Public',
                    icon: 'telescope',
                },
                {
                    name: 'Casino Royale',
                    description: 'The ship\'s casino. Still operating at midnight.',
                    setting: 'Indoors',
                    access: 'Public',
                    icon: 'diamond',
                },
            ],
            clues: [
                'Felix Marsh\'s keycard was not used on the VIP Lounge after 10 PM — the booking system confirms this.',
                'Dominic Hale was seen at the Casino Royale poker table until 1:15 AM — three croupiers confirm this.',
                'The opened Champagne Bottle was found in the VIP Lounge. Only one glass was poured.',
                'Webb\'s message said "bring the bottle" — the Champagne Bottle was carried to the VIP Lounge by his guest.',
                'The Crystal Decanter in the VIP Lounge was full and untouched.',
                'Dominic Hale was not in the VIP Lounge at the time of the meeting.',
            ],
            statements: [
                {
                    suspect: 'Sasha Ivanova',
                    claim: 'Marcus owed me money. I had every reason to talk to him. Not to kill him.',
                },
                {
                    suspect: 'Dominic Hale',
                    claim: 'Casino Royale. All night. The croupiers will tell you.',
                },
                {
                    suspect: 'Felix Marsh',
                    claim: 'I arranged the lounge booking earlier in the day. I didn\'t attend the meeting myself.',
                },
            ],
            hints: [
                'Felix Marsh\'s keycard wasn\'t used — he didn\'t enter the VIP Lounge after setup.',
                'Dominic Hale has three witnesses at the casino. He wasn\'t in the VIP Lounge.',
                'Someone brought the Champagne Bottle as requested. Who had motive to meet Webb privately?',
            ],
            solution: {
                suspect: 'Sasha Ivanova',
                weapon: 'Champagne Bottle',
                location: 'VIP Lounge',
            },
            narratives: [
                {
                    position: 'before',
                    text: '"One glass," Rook said, holding up a single finger as if this were a profound observation requiring physical emphasis. He was standing at the VIP Lounge bar, having circumvented the keycard requirement via a method he declined to explain. "Webb invited someone. Poured one glass for himself. His guest — notice — did not drink." He sniffed the glass. "Either they were teetotal, or they didn\'t intend to stay long enough for a drink."',
                    speakerName: 'Rook Pemberton',
                },
                {
                    position: 'after',
                    text: 'Rook wrote "Sasha Ivanova. Champagne Bottle. VIP Lounge" in his notebook, underlined it, then drew a small ship next to it for reasons he didn\'t explain. "She came. She brought the bottle as instructed. There was an argument about the money — the debt, the records Celeste took." He closed the notebook. "But she didn\'t kill him. This was a confrontation, not a crime scene." He stared at the door. "Webb sent that message himself. So who told him to?"',
                    speakerName: 'Rook Pemberton',
                },
            ],
            carryForwardClues: [
                {
                    puzzleIndex: 2,
                    fact: 'Sasha Ivanova had a private meeting with Marcus Webb in the VIP Lounge two hours before his death.',
                },
            ],
        },

        // ─────────────────────────────────────────────────────────
        // PUZZLE 1-4: "The Message" (Medium 3×3)
        // Who sent Webb the cryptic note found in his pocket?
        // Solution: Felix Marsh | Brass Candlestick | Specialty Restaurant
        // ─────────────────────────────────────────────────────────
        {
            id: 'ch1-p4',
            title: 'The Message',
            difficulty: 'medium',
            releaseDate: '2026-02-19T00:00:00',
            backstory:
                'A folded note was found in Webb\'s jacket pocket: "You\'ve seen the cargo. That makes you a problem. Come to dinner first — we should talk like civilised people." The handwriting is careful, deliberate. The note was written on Utopia of the Seas headed stationery — the kind only crew members routinely handle. Someone lured Webb somewhere before the VIP Lounge meeting.',
            suspects: [
                {
                    name: 'Felix Marsh',
                    bio: 'Cruise Director. Has access to all ship stationery and knows everyone\'s schedule.',
                    height: '6\'0"',
                    build: 'Trim',
                    eyeColor: 'Blue eyes',
                    hairColor: 'Sandy blond hair',
                    handedness: 'Right-handed',
                    age: 'Late 30s',
                    icon: 'mic',
                },
                {
                    name: 'Tomás Reyes',
                    bio: 'Chief Engineer. Knows every compartment on the ship, including the cargo hold.',
                    height: '5\'8"',
                    build: 'Wiry',
                    eyeColor: 'Brown eyes',
                    hairColor: 'Dark hair, graying at temples',
                    handedness: 'Right-handed',
                    age: 'Late 40s',
                    icon: 'wrench',
                },
                {
                    name: 'Captain Elena Vasquez',
                    bio: 'Ship\'s Captain. Responsible for everything that happens aboard the Utopia.',
                    height: '5\'7"',
                    build: 'Lean',
                    eyeColor: 'Dark brown eyes',
                    hairColor: 'Silver-streaked black hair',
                    handedness: 'Right-handed',
                    age: 'Early 50s',
                    icon: 'anchor',
                },
            ],
            weapons: [
                {
                    name: 'Brass Candlestick',
                    description: 'One of a centerpiece pair from the formal dining room. Its partner is missing.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'lamp',
                },
                {
                    name: 'Fire Extinguisher',
                    description: 'CO₂ canister, corridor C on Deck 9. Recently moved from its bracket.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'flame',
                },
                {
                    name: 'Wrench',
                    description: 'Adjustable pipe wrench from the engine room. Bearing trace engine oil.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'wrench',
                },
            ],
            locations: [
                {
                    name: 'Specialty Restaurant',
                    description: 'Private 24-seat fine dining experience. Reservations required. Sound-proofed.',
                    setting: 'Indoors',
                    access: 'Restricted',
                    icon: 'star',
                },
                {
                    name: 'Engine Room',
                    description: 'Six decks below the waterline. Crew access only.',
                    setting: 'Indoors',
                    access: 'Restricted',
                    icon: 'settings',
                },
                {
                    name: 'Bridge',
                    description: 'Ship\'s command center, Deck 11. Senior officers only.',
                    setting: 'Indoors',
                    access: 'Restricted',
                    icon: 'navigation',
                },
            ],
            clues: [
                'The Specialty Restaurant booking for that evening was made using the Cruise Director\'s staff account.',
                'Captain Vasquez was on the Bridge for the entire evening watch — the First Officer and watch log confirm this.',
                'The Wrench found in the Engine Room showed no signs of having been moved from the tool locker.',
                'The Brass Candlestick was found at the Specialty Restaurant — one of the centerpiece pair.',
                'Tomás Reyes was in the Engine Room conducting a scheduled maintenance check until 11 PM.',
                'Felix Marsh did not have the Wrench.',
            ],
            statements: [
                {
                    suspect: 'Felix Marsh',
                    claim: 'I handle dozens of bookings every day. I couldn\'t tell you who booked what off the top of my head.',
                },
                {
                    suspect: 'Tomás Reyes',
                    claim: 'I was in the Engine Room until eleven. Then my bunk. You can check the maintenance log.',
                },
                {
                    suspect: 'Captain Elena Vasquez',
                    claim: 'I was on the Bridge. I sign off on every watch log personally.',
                },
            ],
            hints: [
                'The Captain was on the Bridge all evening — confirmed by the watch log.',
                'Tomás Reyes was in the Engine Room until 11 PM — the maintenance log places him there.',
                'The Specialty Restaurant was booked using the Cruise Director\'s staff account.',
            ],
            solution: {
                suspect: 'Felix Marsh',
                weapon: 'Brass Candlestick',
                location: 'Specialty Restaurant',
            },
            narratives: [
                {
                    position: 'before',
                    text: '"\'Come to dinner first,\'" Rook read from the note, pacing the length of the corridor at a speed that made Leo Tanaka mildly anxious. "Someone knew about the cargo. Knew Webb had seen it. They didn\'t panic — they wrote a polite note on the ship\'s own headed paper and invited him to discuss it over dinner." He stopped. "That\'s extraordinarily confident. Either they have nothing to fear, or they\'re certain they can make the problem disappear." He looked at the note again. "Ship stationery. Careful handwriting. This person is comfortable on this vessel."',
                    speakerName: 'Rook Pemberton',
                },
                {
                    position: 'after',
                    text: '"Felix Marsh," Rook said. Then again, more quietly: "Felix Marsh." He looked at his notebook. "Cruise Director. Books the restaurants. Writes on ship stationery every day. The Candlestick — missing from the dining room set. He has access to everything." Rook stared at the ceiling of the Specialty Restaurant. "He lured Webb to dinner. Had a conversation. Then Webb went to meet Sasha in the VIP Lounge anyway." He tapped his pen. "So whatever Felix said at dinner — it didn\'t work. And Marcus Webb ended up dead."',
                    speakerName: 'Rook Pemberton',
                },
            ],
            carryForwardClues: [
                {
                    puzzleIndex: 3,
                    fact: 'Felix Marsh wrote the note that lured Marcus Webb to the Specialty Restaurant before the VIP Lounge meeting.',
                },
            ],
        },

        // ─────────────────────────────────────────────────────────
        // PUZZLE 1-5: "The Last Hour" (Medium 3×3)
        // What happened in Webb's final hour?
        // Solution: Celeste Moreau | Ice Pick | VIP Lounge
        // ─────────────────────────────────────────────────────────
        {
            id: 'ch1-p5',
            title: 'The Last Hour',
            difficulty: 'medium',
            releaseDate: '2026-02-19T00:00:00',
            backstory:
                'Between 1:00 and 2:00 AM, Marcus Webb was alone in the VIP Lounge after Sasha Ivanova left. Security footage shows the corridor outside the lounge. Someone entered at 1:43 AM — but the timestamp on the camera is wrong. Rook cross-references the feed with the deck elevator logs. There\'s a 22-minute window where someone was with Webb before his death. Who made the final visit?',
            suspects: [
                {
                    name: 'Celeste Moreau',
                    bio: 'Webb\'s personal assistant. Received a final message from Webb at 1:41 AM.',
                    height: '5\'4"',
                    build: 'Petite',
                    eyeColor: 'Green eyes',
                    hairColor: 'Chestnut hair',
                    handedness: 'Right-handed',
                    age: 'Early 30s',
                    icon: 'briefcase',
                },
                {
                    name: 'Sasha Ivanova',
                    bio: 'Had already met with Webb and left by 1:30 AM per her own account.',
                    height: '5\'9"',
                    build: 'Athletic',
                    eyeColor: 'Gray eyes',
                    hairColor: 'Dark auburn hair',
                    handedness: 'Ambidextrous',
                    age: 'Late 30s',
                    icon: 'spade',
                },
                {
                    name: 'Dominic Hale',
                    bio: 'Left the Casino Royale at 1:15 AM. His movements after that are unclear.',
                    height: '6\'1"',
                    build: 'Broad-shouldered',
                    eyeColor: 'Blue eyes',
                    hairColor: 'Dark brown hair',
                    handedness: 'Right-handed',
                    age: 'Mid-40s',
                    icon: 'laptop',
                },
            ],
            weapons: [
                {
                    name: 'Ice Pick',
                    description: 'Bar-issue ice pick. Missing from the VIP Lounge bar after the incident.',
                    weight: 'Light-weight',
                    type: 'Sharp',
                    icon: 'pickaxe',
                },
                {
                    name: 'Champagne Bottle',
                    description: 'Second magnum from the VIP bar. Opened between 1:30 and 2:00 AM.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'wine',
                },
                {
                    name: 'Belaying Pin',
                    description: 'From the Grand Atrium decorative nautical display. Detached from its mount.',
                    weight: 'Medium-weight',
                    type: 'Blunt',
                    icon: 'bar-chart',
                },
            ],
            locations: [
                {
                    name: 'VIP Lounge',
                    description: 'Webb\'s final location. Keycard required. Elevator log shows one entry after 1:40 AM.',
                    setting: 'Indoors',
                    access: 'Restricted',
                    icon: 'crown',
                },
                {
                    name: 'Grand Atrium',
                    description: 'Belaying pin was removed from the nautical display here.',
                    setting: 'Indoors',
                    access: 'Public',
                    icon: 'building',
                },
                {
                    name: 'Observatory Lounge',
                    description: 'Empty after midnight. Sasha Ivanova said she went here after the VIP Lounge.',
                    setting: 'Indoors',
                    access: 'Public',
                    icon: 'telescope',
                },
            ],
            clues: [
                'Sasha Ivanova\'s keycard was used at the Observatory Lounge at 1:32 AM — confirmed by the lock system.',
                'The deck elevator log shows one swipe to Deck 14 (VIP Lounge level) between 1:40 and 2:00 AM.',
                'Dominic Hale\'s keycard was not used on any restricted door after 1:15 AM.',
                'Celeste Moreau received a message from Webb at 1:41 AM. Her cabin is on Deck 8.',
                'The Ice Pick was missing from the VIP Lounge bar after the incident.',
                'Dominic Hale did not have the Ice Pick.',
            ],
            statements: [
                {
                    suspect: 'Celeste Moreau',
                    claim: 'He messaged me. I went to him. I\'m not going to apologise for that.',
                },
                {
                    suspect: 'Sasha Ivanova',
                    claim: 'I left at half past one. Went to the Observatory Lounge. You\'ll see my keycard.',
                },
                {
                    suspect: 'Dominic Hale',
                    claim: 'I went back to my cabin after the casino. I didn\'t use any restricted access.',
                },
            ],
            hints: [
                'Sasha Ivanova\'s keycard was used at the Observatory Lounge at 1:32 AM — she was not at the VIP Lounge.',
                'Dominic Hale\'s keycard shows no restricted door access after 1:15 AM.',
                'Celeste Moreau received a message from Webb at 1:41 AM — just before the elevator log shows access to his floor.',
            ],
            solution: {
                suspect: 'Celeste Moreau',
                weapon: 'Ice Pick',
                location: 'VIP Lounge',
            },
            narratives: [
                {
                    position: 'before',
                    text: '"Everyone who was in that room," Rook said, spreading his hands wide and then bringing them together very slowly, "left. And then someone else arrived." He had the elevator log on one side of the table and the camera timestamp analysis on the other. "The camera time is wrong by eleven minutes — someone adjusted it. But they forgot the elevator log uses GPS time." He looked up. "So who\'s missing eleven minutes from their evening?"',
                    speakerName: 'Rook Pemberton',
                },
                {
                    position: 'after',
                    text: 'Rook sat down. Took a breath. "Celeste Moreau. Ice Pick. VIP Lounge." He looked at his five solved puzzles, spread across the table like a map. "She went because Webb called her. She\'d stolen his debt records. He confronted her privately that night. And one of them didn\'t leave the VIP Lounge alive." He paused. "But the note. The cargo. Felix Marsh." He stood up again. "This isn\'t the whole story. This is just the first chapter."',
                    speakerName: 'Rook Pemberton',
                },
            ],
            carryForwardClues: [
                {
                    puzzleIndex: 4,
                    fact: 'Celeste Moreau entered the VIP Lounge at 1:43 AM — the last person to see Marcus Webb alive.',
                },
            ],
        },

        // ─────────────────────────────────────────────────────────
        // PUZZLE 1-FINALE: "Who Killed Marcus Webb?" (Medium 3×3)
        // The chapter finale — who is responsible for Webb's death?
        // Solution: Celeste Moreau | Ice Pick | VIP Lounge
        // (Bigger narrative: Finale links Felix Marsh as orchestrator for Ch.2)
        // ─────────────────────────────────────────────────────────
        {
            id: 'ch1-finale',
            title: 'Who Killed Marcus Webb?',
            difficulty: 'medium',
            releaseDate: '2026-02-19T00:00:00',
            backstory:
                'Rook gathers every suspect in the Observatory Lounge as the Utopia\'s lights shimmer across the dark Atlantic. Marcus Webb is dead. The evidence trail runs through a confrontation, a break-in, a midnight drink, a private dinner, and a final visit. Three suspects had the means, motive, and opportunity. But only one killed him.',
            suspects: [
                {
                    name: 'Celeste Moreau',
                    bio: 'Webb\'s personal assistant. Had the spare key, took the records, and answered his final message.',
                    height: '5\'4"',
                    build: 'Petite',
                    eyeColor: 'Green eyes',
                    hairColor: 'Chestnut hair',
                    handedness: 'Right-handed',
                    age: 'Early 30s',
                    icon: 'briefcase',
                },
                {
                    name: 'Sasha Ivanova',
                    bio: 'Had a private meeting with Webb — and a debt that would never be paid if he died.',
                    height: '5\'9"',
                    build: 'Athletic',
                    eyeColor: 'Gray eyes',
                    hairColor: 'Dark auburn hair',
                    handedness: 'Ambidextrous',
                    age: 'Late 30s',
                    icon: 'spade',
                },
                {
                    name: 'Dominic Hale',
                    bio: 'Webb\'s most public enemy. Argued with him at the embarkation party.',
                    height: '6\'1"',
                    build: 'Broad-shouldered',
                    eyeColor: 'Blue eyes',
                    hairColor: 'Dark brown hair',
                    handedness: 'Right-handed',
                    age: 'Mid-40s',
                    icon: 'laptop',
                },
            ],
            weapons: [
                {
                    name: 'Ice Pick',
                    description: 'Bar-issue. Missing from the VIP Lounge. Consistent with the medical examiner\'s findings.',
                    weight: 'Light-weight',
                    type: 'Sharp',
                    icon: 'pickaxe',
                },
                {
                    name: 'Champagne Bottle',
                    description: 'Second magnum opened after Sasha left. No clear fingerprints.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'wine',
                },
                {
                    name: 'Crystal Decanter',
                    description: 'From the VIP Lounge. Full and untouched — ruled out as the weapon.',
                    weight: 'Heavy-weight',
                    type: 'Blunt',
                    icon: 'glass-water',
                },
            ],
            locations: [
                {
                    name: 'VIP Lounge',
                    description: 'Webb\'s final location. The crime scene. Restricted-access. Only one entry between 1:40-2:00 AM.',
                    setting: 'Indoors',
                    access: 'Restricted',
                    icon: 'crown',
                },
                {
                    name: 'Observatory Lounge',
                    description: 'Where Sasha Ivanova went after leaving Webb. Her keycard confirms it.',
                    setting: 'Indoors',
                    access: 'Public',
                    icon: 'telescope',
                },
                {
                    name: 'Passenger Cabin',
                    description: 'Where Dominic Hale claims he went after the casino.',
                    setting: 'Indoors',
                    access: 'Private',
                    icon: 'bed',
                },
            ],
            clues: [
                'The elevator log shows one swipe to Deck 14 between 1:40 and 2:00 AM — Celeste Moreau\'s keycard.',
                'The medical examiner confirms the Ice Pick is consistent with the fatal wound.',
                'Sasha Ivanova\'s keycard was logged at the Observatory Lounge at 1:32 AM — she left the VIP Lounge before the murder.',
                'Dominic Hale\'s keycard shows no restricted access after his casino visit.',
                'The Crystal Decanter was untouched — not the weapon.',
                'Celeste Moreau\'s keycard was not used at any other location between 1:40 and 2:05 AM.',
            ],
            statements: [
                {
                    suspect: 'Celeste Moreau',
                    claim: 'He asked me to come. I went. We argued about the records. Then I left him alive.',
                },
                {
                    suspect: 'Sasha Ivanova',
                    claim: 'I\'ve already told you everything. Observatory Lounge. One thirty-two. Check the log.',
                },
                {
                    suspect: 'Dominic Hale',
                    claim: 'I\'ve wanted Webb ruined. Not dead. There\'s a difference.',
                },
            ],
            hints: [
                'The elevator log is the key — only one keycard accessed Deck 14 after Sasha left.',
                'Sasha Ivanova has a confirmed keycard alibi at the Observatory Lounge.',
                'Dominic Hale\'s keycard shows no restricted access — he couldn\'t have entered the VIP Lounge.',
            ],
            solution: {
                suspect: 'Celeste Moreau',
                weapon: 'Ice Pick',
                location: 'VIP Lounge',
            },
            narratives: [
                {
                    position: 'before',
                    text: 'Rain began hitting the observation windows as Rook arranged his notes on the table in front of the assembled passengers and crew. He didn\'t look at them. He looked at his notes. Then at the ceiling. Then at his left shoe. Then, finally, at the room. "Right," he said. "Marcus Webb is dead. You\'ve all been very helpful — some of you more deliberately than others." He paused. "I know who did it. I know the weapon. I know the room. What I want to know is whether any of you have the good sense to admit it before I explain it in excruciating detail to everyone present." Nobody spoke. "No. Right. Excruciating detail it is, then."',
                    speakerName: 'Rook Pemberton',
                },
                {
                    position: 'after',
                    text: 'The silence that followed Rook\'s explanation was the kind that has weight. Celeste Moreau sat very still, looking at her hands. "He wasn\'t going to let it go," she said finally. "He found out I\'d taken the records. He was going to destroy me." Rook nodded slowly. "I know." He gathered his notes. "The Ice Pick. The VIP Lounge. You." He looked at the window — the first pale grey of dawn on the horizon. "Case closed." He paused with his hand on the door. "Except — the cargo. The note Felix Marsh wrote. The thing Webb supposedly \'saw.\'" He didn\'t look back. "This ship has a secret. And we\'ve got four more days at sea to find it."',
                    speakerName: 'Rook Pemberton',
                },
            ],
            carryForwardClues: [
                {
                    puzzleIndex: 5,
                    fact: 'Celeste Moreau killed Marcus Webb with an Ice Pick in the VIP Lounge. Felix Marsh arranged the dinner meeting that preceded it — and warned Webb about "the cargo."',
                },
            ],
        },
    ],
};
