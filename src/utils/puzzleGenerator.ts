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

    // 1. Determine size and difficulty based on day
    const dayIndex = Math.floor(new Date(dateString + 'T00:00:00').getTime() / (1000 * 60 * 60 * 24));
    const difficultyCycle: Difficulty[] = ['easy', 'easy', 'medium', 'medium', 'hard'];
    const difficulty = difficultyCycle[dayIndex % difficultyCycle.length];

    const size = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 4 : 5;

    // 2. Pick elements from pool
    const shuffledSuspects = rng.shuffle(suspectPool);
    const shuffledWeapons = rng.shuffle(weaponPool);
    const shuffledLocations = rng.shuffle(locationPool);

    const selectedSuspects = shuffledSuspects.slice(0, size);
    const selectedWeapons = shuffledWeapons.slice(0, size);
    const selectedLocations = shuffledLocations.slice(0, size);

    // 3. Create a unique solution
    // Map suspects to specific weapons and locations to ensure 1-to-1-to-1
    const weaponOrder = rng.shuffle(selectedWeapons);
    const locationOrder = rng.shuffle(selectedLocations);

    // Track the mapping: suspect -> { weapon, location }
    const mapping = selectedSuspects.map((suspect, i) => ({
        suspect: suspect.name,
        weapon: weaponOrder[i].name,
        location: locationOrder[i].name
    }));

    const solutionIndex = Math.floor(rng.next() * size);
    const solution = mapping[solutionIndex];

    // 4. Generate Clues
    // We need different types of clues to satisfy the grid
    const clues: string[] = [];

    // Type A: Direct Location (Suspect X was in Location Y)
    // We'll give a few of these, but not for the killer typically
    const usedIndices = new Set<number>();

    // Give 1-2 direct location clues (not for the solution)
    const directCount = difficulty === 'easy' ? 1 : 2;
    for (let i = 0; i < directCount; i++) {
        const idx = (solutionIndex + i + 1) % size;
        clues.push(`${mapping[idx].suspect} was seen in the ${mapping[idx].location}.`);
        usedIndices.add(idx);
    }

    // Type B: Weapon Location (The Weapon X was in Location Y)
    // One of these is very helpful
    const weaponLocIdx = (solutionIndex + rng.pick([0, 1])) % size;
    clues.push(`The ${mapping[weaponLocIdx].weapon} was found in the ${mapping[weaponLocIdx].location}.`);

    // Type C: Negative Alibi (Suspect X was not in Location Y)
    const negAlibiIdx = (solutionIndex + directCount + 1) % size;
    const wrongLocIdx = (negAlibiIdx + 1) % size;
    clues.push(`${mapping[negAlibiIdx].suspect} was definitely not in the ${mapping[wrongLocIdx].location}.`);

    // Type D: Negative Weapon (Suspect X does not have Weapon Y)
    clues.push(`${solution.suspect} was not found with the ${weaponOrder[(solutionIndex + 1) % size].name}.`);

    // Type E: Cross-Category (The person in X had the Y)
    if (size >= 4) {
        const crossIdx = (solutionIndex + 2) % size;
        clues.push(`The person in the ${mapping[crossIdx].location} was found with the ${mapping[crossIdx].weapon}.`);
    }

    // Type F: Expert Clues for Hard
    if (difficulty === 'hard') {
        const expertIdx = (solutionIndex + 3) % size;
        clues.push(`${mapping[expertIdx].suspect} was seen near the ${mapping[(expertIdx + 1) % size].location}, but didn't enter.`);
    }

    // 5. Build Final Object
    const template = rng.pick(backstoryTemplates);
    const backstory = template.template;

    // Simple statements
    const statements: Statement[] = selectedSuspects.map((s) => {
        const personMapping = mapping.find(m => m.suspect === s.name)!;
        if (s.name === solution.suspect) {
            return { suspect: s.name, claim: `I was in the ${personMapping.location} at the time, but I didn't do it!` };
        }
        return { suspect: s.name, claim: `I was in the ${personMapping.location} and I saw nothing suspicious.` };
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
        clues: rng.shuffle(clues),
        statements,
        hints: [
            'Each suspect was in a unique location with a unique weapon.',
            'Look for connections between weapons and locations first.',
            `The killer committed the crime in the ${solution.location}.`
        ],
        solution: {
            suspect: solution.suspect,
            weapon: solution.weapon,
            location: solution.location
        }
    };
}
