export type GridCell = 'empty' | 'check' | 'cross';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'ludicrous';

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