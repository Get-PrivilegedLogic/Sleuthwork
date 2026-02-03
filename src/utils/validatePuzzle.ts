import type { Puzzle } from '../types/puzzle';

/**
 * Validates a puzzle for potential icon mismatches or common logical errors.
 * This satisfies the "check" requested by the user to ensure icons align with items.
 */
export function validatePuzzleIcons(puzzle: Puzzle): string[] {
    const warnings: string[] = [];

    // 1. Check Weapons
    puzzle.weapons.forEach(weapon => {
        const name = weapon.name.toLowerCase();
        const icon = weapon.icon;

        if (name.includes('candlestick') && icon !== 'flame' && icon !== 'candlestick') {
            warnings.push(`Weapon "${weapon.name}" has icon "${icon}", but "flame" is recommended.`);
        }
        if (name.includes('letter opener') && icon === 'crosshair') {
            warnings.push(`Weapon "${weapon.name}" has icon "crosshair", but "knife" is recommended.`);
        }
        if (name.includes('poison') && icon !== 'skull' && icon !== 'syringe' && icon !== 'crosshair') {
            warnings.push(`Weapon "${weapon.name}" has icon "${icon}", but "skull" or "syringe" is recommended.`);
        }
        if (name.includes('cable') && icon === 'lightbulb') {
            warnings.push(`Weapon "${weapon.name}" has icon "lightbulb" (looks like a bulb), "zap" is recommended for cables.`);
        }
    });

    // 2. Check Locations
    puzzle.locations.forEach(location => {
        const name = location.name.toLowerCase();
        const icon = location.icon;

        if ((name.includes('sauna') || name.includes('spa')) && icon === 'hospital') {
            warnings.push(`Location "${location.name}" has icon "hospital", but "bath" is recommended.`);
        }
        if (name.includes('wing') && icon === 'building' && name.includes('egyptian')) {
            warnings.push(`Location "${location.name}" could use "pyramid" or "landmark" instead of "building".`);
        }
    });

    return warnings;
}
