import type { Chapter } from '../../types/chapterTypes';

/**
 * Chapter 2: "Calm Before the Storm"
 * Setting: Days 2–3 at sea — the Utopia heads south
 * Tone: Suspicious, unsettling beneath the surface | Bright blue, coral, sun-bleached
 *
 * Victim: Priya Delacroix (Food critic) — found at the rock climbing wall, made to look like an accident.
 * Suspects: Chef Alistair Beaumont, Greta Engström, Jasper Cole
 * Locations: Spa, Buffet Deck, Rock Climbing Wall, Sports Court, Sun Deck
 * Weapons: Mooring Rope, Dumbbell, Golf Club
 *
 * Story: Everyone says accident. Rook finds rope fibers that don’t match climbing equipment; proves murder;
 * finds another cryptic note — same handwriting as Webb’s. Ending: Two murders, one orchestrator.
 *
 * Mini-puzzles: 5–6, Medium | Finale: 3×3 | Hints: Medium+ only
 * NOTE: Full puzzle content is planned for Phase 2 expansion.
 */
export const chapter2: Chapter = {
    id: 'chapter-2',
    chapterNumber: 2,
    title: 'Calm Before the Storm',
    subtitle: 'Days 2–3 at Sea',
    description:
        'Everyone says Priya Delacroix’s death at the rock climbing wall was an accident. Rook notices rope fibers that don’t match the equipment — and a second cryptic note in the same handwriting as Webb’s.',

    puzzles: [
        {
            id: 'ch2-p1',
            title: 'Coming Soon',
            difficulty: 'easy',
            releaseDate: '2026-02-19T00:00:00',
            backstory: 'Chapter 2 puzzles are under development.',
            suspects: [],
            weapons: [],
            locations: [],
            clues: ['Chapter 2 puzzles are currently under development.'],
            statements: [],
            hints: [],
            solution: { suspect: '', weapon: '', location: '' },
            narratives: [
                {
                    position: 'before',
                    text: 'Chapter 2 — "Calm Before the Storm" — is coming soon.',
                },
            ],
        },
    ],
};
