import type { Puzzle, Difficulty, Statement } from '../types/puzzle';
import { suspects as suspectPool, weapons as weaponPool, locations as locationPool, backstoryTemplates } from '../data/assetPool';

class SeededRandom {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    // Simple LCG
    next(): number {
        this.seed = (this.seed * 1664525 + 1013904223) % 4294967296;
        return this.seed / 4294967296;
    }

    pick<T>(array: T[]): T {
        return array[Math.floor(this.next() * array.length)];
    }

    shuffle<T>(array: T[]): T[] {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(this.next() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
}

export function generatePuzzle(dateString: string, puzzleId: string): Puzzle {
    // Use date part of string as seed (YYYYMMDD)
    const seedNum = parseInt(dateString.replace(/-/g, ''));
    const rng = new SeededRandom(seedNum);

    // 1. Determine size based on difficulty (placeholder: 3 for now)
    const size = 3;
    const difficulty: Difficulty = 'easy';

    // 2. Pick elements from pool
    const selectedSuspects = rng.shuffle(suspectPool).slice(0, size);
    const selectedWeapons = rng.shuffle(weaponPool).slice(0, size);
    const selectedLocations = rng.shuffle(locationPool).slice(0, size);

    // 3. Create a unique solution
    const weaponOrder = rng.shuffle(selectedWeapons);
    const locationOrder = rng.shuffle(selectedLocations);

    const solutionIndex = Math.floor(rng.next() * size);
    const solution = {
        suspect: selectedSuspects[solutionIndex].name,
        weapon: weaponOrder[solutionIndex].name,
        location: locationOrder[solutionIndex].name,
    };

    // 4. Generate Clues
    // For a 3x3x3 grid, we need enough clues to fix the O's.
    // We'll generate a few direct and negative clues.
    const clues: string[] = [];

    // Clue 1: Direct location (NOT the solution to give some mystery)
    const otherIdx = (solutionIndex + 1) % size;
    clues.push(`${selectedSuspects[otherIdx].name} was seen in the ${locationOrder[otherIdx].name}.`);

    // Clue 2: Weapon location
    clues.push(`The ${weaponOrder[solutionIndex].name} was found in the ${locationOrder[solutionIndex].name}.`);

    // Clue 3: Negative alibi
    const thirdIdx = (solutionIndex + 2) % size;
    clues.push(`${selectedSuspects[thirdIdx].name} was definitely not in the ${locationOrder[solutionIndex].name}.`);

    // Clue 4: Negative weapon alibi
    clues.push(`${selectedSuspects[solutionIndex].name} does not own the ${weaponOrder[otherIdx].name}.`);

    // 5. Build Final Object
    const template = rng.pick(backstoryTemplates);
    const backstory = template.template;

    // Simple statements
    const statements: Statement[] = selectedSuspects.map((s, i) => {
        if (s.name === solution.suspect) {
            return { suspect: s.name, claim: `I was in the ${locationOrder[i].name} at the time, but I didn't do it!` };
        }
        return { suspect: s.name, claim: `I was in the ${locationOrder[i].name} and I saw nothing suspicious.` };
    });

    return {
        id: puzzleId,
        title: `The Case of the ${rng.pick([
            'Missing Diamond', 'Broken Clock', 'Empty Safe', 'Midnight Scream',
            'Shattered monocle', 'Poisoned Tea', 'Gilded Dagger', 'Bloody Quill',
            'Vanished Violin', 'Silent Witness', 'Stolen Secret', 'Final Curtain'
        ])}`,
        difficulty,
        releaseDate: `${dateString}T00:00:00Z`,
        backstory,
        suspects: selectedSuspects,
        weapons: selectedWeapons,
        locations: selectedLocations,
        clues,
        statements,
        hints: ['Check the weapon locations.', 'Remember that each suspect was in a unique location.'],
        solution
    };
}
