import type { Chapter } from '../../types/chapterTypes';

/**
 * Chapter 3: "Deep Waters"
 * Setting: Days 4–5, open ocean
 * Tone: Paranoid, claustrophobic | Deep red, industrial grey, shadow
 *
 * Victim: Dominic Hale (Webb’s business rival from Ch.1) — suspect turned victim. Found in the wine cellar.
 * Suspects: Margot Ashby, Tomás Reyes, Isla Whitfield
 * Locations: Engine Room, Wine Cellar, Theater, Crew Quarters, Bridge
 * Weapons: Wrench, Corkscrew, Anchor Chain Link, Fire Extinguisher
 *
 * Story: Hale was a loose end. Below-deck smuggling exposed in cargo hold. Rook traces cryptic notes’ paper
 * to ship stationery supply, ordered by someone specific. Ending: Nobody is who they seem.
 *
 * Mini-puzzles: 5–6, Medium → Hard | Finale: 4×4 | Hints: Medium+ only
 * NOTE: Full puzzle content is planned for Phase 2 expansion.
 */
export const chapter3: Chapter = {
    id: 'chapter-3',
    chapterNumber: 3,
    title: 'Deep Waters',
    subtitle: 'Days 4–5, Open Ocean',
    description:
        'Dominic Hale is dead in the wine cellar — suspect turned victim. The smuggling operation in the cargo hold is exposed, and the cryptic notes lead Rook to the ship’s stationery supply.',

    puzzles: [
        {
            id: 'ch3-p1',
            title: 'Coming Soon',
            difficulty: 'medium',
            releaseDate: '2026-02-19T00:00:00',
            backstory: 'Chapter 3 puzzles are under development.',
            suspects: [],
            weapons: [],
            locations: [],
            clues: ['Chapter 3 puzzles are currently under development.'],
            statements: [],
            hints: [],
            solution: { suspect: '', weapon: '', location: '' },
            narratives: [
                {
                    position: 'before',
                    text: 'Chapter 3 — "Deep Waters" — is coming soon.',
                },
            ],
        },
    ],
};
