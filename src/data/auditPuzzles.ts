import { puzzle1 } from './puzzles/puzzle-1';
import { puzzle2 } from './puzzles/puzzle-2';
import { puzzle3 } from './puzzles/puzzle-3';
import { puzzle4 } from './puzzles/puzzle-4';
import { puzzle5 } from './puzzles/puzzle-5';
import { puzzle6 } from './puzzles/puzzle-6';
import { puzzle7 } from './puzzles/puzzle-7';
import { puzzle8 } from './puzzles/puzzle-8';
import { puzzle9 } from './puzzles/puzzle-9';
import { puzzle10 } from './puzzles/puzzle-10';
import { puzzle11 } from './puzzles/puzzle-11';
import { puzzle12 } from './puzzles/puzzle-12';
import { puzzle13 } from './puzzles/puzzle-13';
import { puzzle14 } from './puzzles/puzzle-14';
import { validatePuzzleIcons } from '../utils/validatePuzzle';

const allPuzzles = [
    puzzle1, puzzle2, puzzle3, puzzle4, puzzle5,
    puzzle6, puzzle7, puzzle8, puzzle9, puzzle10,
    puzzle11, puzzle12, puzzle13, puzzle14
];

console.log('--- Running Puzzle Icon Audit ---');
let totalWarnings = 0;

allPuzzles.forEach(puzzle => {
    const warnings = validatePuzzleIcons(puzzle);
    if (warnings.length > 0) {
        console.log(`[${puzzle.id}] ${puzzle.title}:`);
        warnings.forEach(w => console.warn(`  ! ${w}`));
        totalWarnings += warnings.length;
    }
});

if (totalWarnings === 0) {
    console.log('✅ All archived puzzles passed icon alignment check.');
} else {
    console.log(`⚠️ Audit complete with ${totalWarnings} warnings.`);
}
