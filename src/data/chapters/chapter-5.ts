import type { Chapter } from '../../types/chapterTypes';

/**
 * Chapter 5: "Final Port"
 * Setting: Day 7 — final approach to Miami, last night at sea
 * Tone: Intense, climactic, satisfying | Dawn gold, navy, sharp contrast
 *
 * No single victim — all surviving characters converge. Mastermind revealed: Felix Marsh.
 * Suspects (final lineup): Felix Marsh, Captain Elena Vasquez, Dr. Nadia Osei, Margot Ashby, Isla Whitfield
 * Locations: Observatory Lounge, Captain’s Suite, Helipad, Cargo Hold, Docking Bridge
 * Weapons: Flare Gun, Belaying Pin, Lifeboat Oar, Pool Cue, Brass Candlestick
 * Motives: All 5 in play
 *
 * Story: Rook gathers everyone in the Observatory Lounge. The Utopia smuggles stolen art; every victim
 * had discovered a piece. Grand monologue; mastermind unmasked.
 *
 * Mini-puzzles: 5–6, Hard → Expert | Finale: 5×5 + Motives | Hints: Yes
 * NOTE: Full puzzle content is planned for Phase 2 expansion.
 */
export const chapter5: Chapter = {
    id: 'chapter-5',
    chapterNumber: 5,
    title: 'Final Port',
    subtitle: 'Day 7 — Last Night at Sea',
    description:
        'Tomorrow the Utopia docks in Miami. Tonight Rook gathers everyone in the Observatory Lounge — grand monologue, four murders connected, stolen art in the cargo hold. The mastermind is unmasked.',

    puzzles: [
        {
            id: 'ch5-p1',
            title: 'Coming Soon',
            difficulty: 'ludicrous',
            releaseDate: '2026-02-19T00:00:00',
            backstory: 'Chapter 5 puzzles are under development.',
            suspects: [],
            weapons: [],
            locations: [],
            clues: ['Chapter 5 puzzles are currently under development.'],
            statements: [],
            hints: [],
            solution: { suspect: '', weapon: '', location: '' },
            narratives: [
                {
                    position: 'before',
                    text: 'Chapter 5 — "Final Port" — is coming soon. The mastermind will be revealed.',
                },
            ],
        },
    ],
};
