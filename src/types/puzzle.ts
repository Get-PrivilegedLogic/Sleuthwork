export type GridCell = 'empty' | 'check' | 'cross';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'ludicrous';

export interface Motive {
  name: string;
  description: string;
  icon: string;
}

export interface Suspect {
  name: string;
  bio: string;
  height: string;
  build: string;
  eyeColor: string;
  hairColor: string;
  handedness: string;
  age: string;
  icon: string; // NEW: Font Awesome icon name
}

export interface Weapon {
  name: string;
  description: string;
  weight: string;
  type: string;
  icon: string; // NEW: Font Awesome icon name
}

export interface Location {
  name: string;
  description: string;
  setting: string;
  access: string;
  icon: string; // NEW: Font Awesome icon name
}

export interface Statement {
  suspect: string;
  claim: string;
}

export interface Puzzle {
  id: string;
  title: string;
  difficulty: Difficulty;
  releaseDate: string;
  backstory: string;
  suspects: Suspect[];
  weapons: Weapon[];
  locations: Location[];
  motives?: Motive[];
  clues: string[];
  hints: string[];
  statements: Statement[];
  solution: {
    suspect: string;
    weapon: string;
    location: string;
    motive?: string;
  };
}