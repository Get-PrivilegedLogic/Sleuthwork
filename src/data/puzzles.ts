export interface Suspect {
    name: string;
    bio: string;
  }
  
  export interface Weapon {
    name: string;
    description: string;
  }
  
  export interface Location {
    name: string;
    description: string;
  }
  
  export interface Puzzle {
    id: string;
    title: string;
    backstory: string;
    suspects: Suspect[];
    weapons: Weapon[];
    locations: Location[];
    clues: string[];
    hints: string[];
    solution: {
      suspect: string;
      weapon: string;
      location: string;
    };
  }
  
  export const puzzles: Puzzle[] = [
    {
      id: 'ravencrest-manor',
      title: 'Murder at Ravencrest Manor',
      backstory: `A murder has occurred at the prestigious Ravencrest Manor during the annual charity gala. The victim, Lord Blackwood, was found dead in one of the manor's rooms at approximately 9:47 PM. The grand ballroom was filled with guests, music, and champagne when the screams were heard.
      
      Lord Blackwood had been a controversial figure in high society - his recent art acquisitions had angered collectors, his business dealings had created bitter rivals, and rumors suggested he kept detailed records of everyone's secrets in his private study. On this particular evening, he had been seen arguing with several guests before retreating to a quieter part of the manor.
      
      The manor's layout worked against the investigation. The bustling kitchen had a dozen catering staff coming and going. The expansive library, with its two stories of books, was isolated from the main party - a perfect place for private conversations or dark deeds. The hedge maze garden, lit only by flickering gas lamps, provided countless hiding spots and multiple exits.
      
      Three individuals had both opportunity and motive. Your task: determine who did it, with what weapon, and where the crime took place.`,
      
      suspects: [
        {
          name: 'Alice Sterling',
          bio: 'A renowned art collector with a mysterious past. She arrived at the gala wearing an expensive ruby necklace and was overheard arguing with Lord Blackwood about a recent art acquisition that she claimed was rightfully hers. Witnesses saw her circulating through the party all evening, always in view of others. She carries herself with the confidence of old money and the wariness of someone with secrets to protect.'
        },
        {
          name: 'Bob Crane',
          bio: 'The manor\'s head butler for 15 years. Loyal, discreet, and nearly invisible - the perfect servant. But recent gambling debts have put him in a desperate situation. He had access to all areas of the manor and knew everyone\'s movements, schedules, and secrets. Lord Blackwood had recently discovered the extent of Bob\'s debts and had been "keeping a closer eye" on him. On the night of the gala, Bob was seen moving between rooms, attending to guests\' needs - though no one could say exactly where he was at 9:47 PM.'
        },
        {
          name: 'Charlie Devereaux',
          bio: 'A charming business rival of Lord Blackwood who recently lost a major government contract to Blackwood Industries - a deal worth millions. Known for his short temper and ambitious nature, Charlie has been vocal about his hatred for "that pompous fraud Blackwood." He spent most of the evening near the bar, drinking heavily and making loud comments about his rival. Several guests heard him say he\'d "make Blackwood pay for what he\'d done."'
        }
      ],
      
      weapons: [
        {
          name: 'Ornate Knife',
          description: 'A jewel-encrusted ceremonial knife from Lord Blackwood\'s collection, normally kept in a locked display case in the study. The key to the case was kept in Blackwood\'s pocket. The knife is distinctive and would be immediately recognized if someone was seen carrying it. Using it would require both opportunity and boldness - and would leave obvious evidence.'
        },
        {
          name: 'Poison',
          description: 'A rare toxin derived from exotic plants in Blackwood\'s greenhouse collection. Small, colorless, and deadly - it could be slipped into a drink unnoticed and would take effect within minutes. The poison was kept in an unmarked vial in the greenhouse storage, accessible to anyone who knew where to look. The perfect weapon for someone who preferred subtlety over confrontation, and who had time to plan.'
        },
        {
          name: 'Heavy Rope',
          description: 'Thick nautical rope from the manor\'s boat house, showing recent wear and fraying. This rope would require significant physical strength to use as a weapon. It\'s a crude, brutal choice - the weapon of someone acting in a moment of rage rather than cold calculation. The boat house sits at the edge of the garden maze, rarely visited except by the groundskeeping staff.'
        }
      ],
      
      locations: [
        {
          name: 'Library',
          description: 'A two-story room filled with ancient books and artifacts. Features a grand fireplace, leather chairs, and a rolling ladder to reach the upper shelves. The library is soundproofed with heavy oak doors and thick walls - screams from inside would barely be heard in the main hall. It\'s isolated from the main party, accessed through a quiet corridor. Few guests ventured here during the gala, preferring the livelier ballroom. The perfect location for a private meeting... or a murder.'
        },
        {
          name: 'Kitchen',
          description: 'The manor\'s industrial kitchen was a hive of activity during the gala. Catering staff rushed about preparing hors d\'oeuvres, refilling champagne, and plating desserts. Multiple entrances and exits made it impossible to monitor everyone\'s movements. The head chef counted at least fifteen people passing through between 9:30 and 10:00 PM. Anyone could have been there, but no one could have ensured privacy. Far too busy and public for a premeditated crime.'
        },
        {
          name: 'Garden',
          description: 'An elaborate hedge maze and rose garden covering two acres. The maze is disorienting even in daylight, and at night, illuminated only by gas lamps every twenty feet, it becomes almost treacherous. Guests occasionally wandered into the garden for fresh air or private conversations. The boat house at the edge contains gardening equipment and the manor\'s small rowboat. Several guests reported hearing raised voices from the garden around 9:30 PM, though they couldn\'t identify who was arguing.'
        }
      ],
      
      clues: [
        'The person in the Library had the Poison',
        'Alice Sterling was not in the Kitchen',
        'Bob Crane did not use the Ornate Knife',
        'The Heavy Rope was found in the Garden'
      ],
      
      hints: [
        'Consider who would have easy access to all areas of the manor without raising suspicion.',
        'The Library is isolated and soundproofed - perfect for someone who wanted privacy and time.',
        'Think about which weapon requires planning versus which suggests a crime of passion.',
        'Who would know where the unmarked poison vial was kept in the greenhouse?'
      ],
      
      solution: {
        suspect: 'Bob Crane',
        weapon: 'Poison',
        location: 'Library'
      }
    }
  ];
  
  // Helper function to get a puzzle by ID
  export function getPuzzleById(id: string): Puzzle | undefined {
    return puzzles.find(p => p.id === id);
  }