import type { Chapter } from '../../types/chapterTypes';

/**
 * Chapter 4: "The Storm"
 * Setting: Day 6 — storm isolates the ship
 * Tone: Dark, chaotic, high-stakes | Storm blue, purple, flickering white
 *
 * Victim: Leo Tanaka (Head of Security) — had access to surveillance. Found in the communications room during the storm.
 * Suspects: Felix Marsh, Dr. Nadia Osei, Captain Elena Vasquez, Greta Engström
 * Locations: Communications Room, Medical Bay, Galley Kitchen, Captain’s Study, Laundry
 * Weapons: Ice Pick, Chef’s Knife, Fire Extinguisher, Ship’s Sextant
 * Motives introduced: Greed, Revenge, Blackmail, Self-Defense, Jealousy
 *
 * Story: Tanaka’s death is personal — surveillance goes dark. Every victim knew a piece of the Utopia’s secret.
 * Ending: Rook identifies the conspiracy but can’t prove it yet.
 *
 * Mini-puzzles: 5–6, Hard | Finale: 4×4 + Motives | Hints: Yes
 * NOTE: Full puzzle content is planned for Phase 2 expansion.
 */
export const chapter4: Chapter = {
    id: 'chapter-4',
    chapterNumber: 4,
    title: 'The Storm',
    subtitle: 'Day 6 — The Storm',
    description:
        'The storm isolates the ship. Leo Tanaka is dead in the communications room — surveillance has gone dark. Rook realizes every victim knew a piece of a larger secret about the Utopia.',

    puzzles: [
        {
            id: 'ch4-p1',
            title: 'Coming Soon',
            difficulty: 'hard',
            releaseDate: '2026-02-19T00:00:00',
            backstory: 'Chapter 4 puzzles are under development.',
            suspects: [],
            weapons: [],
            locations: [],
            clues: ['Chapter 4 puzzles are currently under development.'],
            statements: [],
            hints: [],
            solution: { suspect: '', weapon: '', location: '' },
            narratives: [
                {
                    position: 'before',
                    text: 'Chapter 4 — "The Storm" — is coming soon. Motives category unlocked.',
                },
            ],
        },
    ],
};
