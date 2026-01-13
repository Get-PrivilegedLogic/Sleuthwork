export type GridCell = 'empty' | 'check' | 'cross';


export interface GridState {
  suspectWeapon: GridCell[][];
  suspectLocation: GridCell[][];
  weaponLocation: GridCell[][];
}