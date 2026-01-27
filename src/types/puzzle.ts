export type GridCell = 'empty' | 'check' | 'cross';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'ludicrous';

export interface Suspect {
  name: string;
  bio: string;
  height: string;
  build: string;
  eyeColor: string;
  hairColor: string;
  handedness: string;
  age: string;
}

export interface Weapon {
  name: string;
  description: string;
  weight: string;
  type: string;
}

export interface Location {
  name: string;
  description: string;
  setting: string;
  access: string;
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
  clues: string[];
  hints: string[];
  statements: Statement[];
  solution: {
    suspect: string;
    weapon: string;
    location: string;
  };
}