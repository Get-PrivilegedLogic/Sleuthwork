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
    // Ensure coverage across all 3 grid sections (S×L, S×W, W×L)
    // and that every suspect, weapon, and location is referenced at least once
    const clues: string[] = [];

    // Helper to get a non-solution index offset
    const nonSolIdx = (offset: number) => (solutionIndex + offset) % size;

    // --- Section: Suspect × Location ---

    // Positive: place (size - 2) innocent suspects in their locations
    // This leaves enough ambiguity while guaranteeing S×L is solvable
    const slPositiveCount = Math.max(1, size - 2);
    for (let i = 0; i < slPositiveCount; i++) {
        const idx = nonSolIdx(i + 1);
        clues.push(`${mapping[idx].suspect} was seen in the ${mapping[idx].location}.`);
    }

    // Negative: one suspect was NOT in a wrong location
    const slNegIdx = nonSolIdx(slPositiveCount + 1);
    const slWrongLoc = (slNegIdx + 1) % size;
    clues.push(`${mapping[slNegIdx].suspect} was definitely not in the ${mapping[slWrongLoc].location}.`);

    // --- Section: Suspect × Weapon ---

    // Positive: link one innocent suspect to their weapon (different from S×L clues)
    const swPosIdx = nonSolIdx(slPositiveCount);
    clues.push(`${mapping[swPosIdx].suspect} was found with the ${mapping[swPosIdx].weapon}.`);

    // Negative: the killer did NOT have a specific wrong weapon
    clues.push(`${solution.suspect} was not found with the ${weaponOrder[nonSolIdx(1)].name}.`);

    // For medium+, add another S×W negative for a different suspect
    if (size >= 4) {
        const swNegIdx = nonSolIdx(2);
        clues.push(`${mapping[swNegIdx].suspect} did not have the ${mapping[nonSolIdx(3)].weapon}.`);
    }

    // --- Section: Weapon × Location ---

    // Positive: link one weapon to its location (not the solution)
    const wlPosIdx = nonSolIdx(1 + Math.floor(rng.next() * (size - 1)));
    clues.push(`The ${mapping[wlPosIdx].weapon} was found in the ${mapping[wlPosIdx].location}.`);

    // Negative: a weapon was NOT in a wrong location
    const wlNegWeaponIdx = nonSolIdx(2);
    const wlNegLocIdx = nonSolIdx(1);
    clues.push(`The ${mapping[wlNegWeaponIdx].weapon} was not found in the ${mapping[wlNegLocIdx].location}.`);

    // --- Cross-category clues for medium+ ---
    if (size >= 4) {
        const crossIdx = nonSolIdx(3);
        clues.push(`The person in the ${mapping[crossIdx].location} was found with the ${mapping[crossIdx].weapon}.`);
    }

    // --- Extra clues for hard to add depth without making it easy ---
    if (difficulty === 'hard') {
        // Negative S×L for another suspect
        const hardNegIdx = nonSolIdx(4);
        clues.push(`${mapping[hardNegIdx].suspect} was seen near the ${mapping[nonSolIdx(1)].location}, but didn't enter.`);
    }

    // 5. Build Final Object
    const template = rng.pick(backstoryTemplates);
    const backstory = template.template;

    // Randomized statement templates so the killer doesn't stand out
    const statementTemplates = [
        (loc: string) => `I was in the ${loc} the entire time. I didn't see a thing.`,
        (loc: string) => `I was in the ${loc} at the time. I heard a commotion, but didn't investigate.`,
        (loc: string) => `You can check the ${loc} — that's where I was, and I saw nothing suspicious.`,
        (loc: string) => `I never left the ${loc}. I swear on my life.`,
        (loc: string) => `I was in the ${loc}, minding my own business. Don't look at me!`,
        (loc: string) => `I've been in the ${loc} all evening. Ask anyone.`,
    ];
    const shuffledTemplates = rng.shuffle(statementTemplates);
    const statements: Statement[] = selectedSuspects.map((s, i) => {
        const personMapping = mapping.find(m => m.suspect === s.name)!;
        const template = shuffledTemplates[i % shuffledTemplates.length];
        return { suspect: s.name, claim: template(personMapping.location) };
    });

    return {
        id: puzzleId,
        title: `The Case of the ${rng.pick([
            'Missing Diamond', 'Broken Clock', 'Empty Safe', 'Midnight Scream',
            'Shattered Monocle', 'Poisoned Tea', 'Gilded Dagger', 'Bloody Quill',
            'Vanished Violin', 'Silent Witness', 'Stolen Secret', 'Final Curtain'
        ])}`,
        difficulty,
        releaseDate: `${dateString}T00:00:00`,
        backstory,
        suspects: selectedSuspects,
        weapons: selectedWeapons,
        locations: selectedLocations,
        clues: rng.shuffle(clues),
        statements,
        hints: [
            `It wasn't ${mapping[nonSolIdx(1)].suspect}.`,
            `The crime did not take place in the ${mapping[nonSolIdx(2)].location}.`,
            `The murder weapon was not the ${mapping[nonSolIdx(Math.min(3, size - 1))].weapon}.`,
        ],
        solution: {
            suspect: solution.suspect,
            weapon: solution.weapon,
            location: solution.location
        }
    };
}
