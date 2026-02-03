import type { Suspect, Weapon, Location } from '../types/puzzle';

export interface BackstoryTemplate {
    template: string;
    id: string;
}

export const suspects: Suspect[] = [
    {
        name: 'Alice Chen',
        bio: 'A high-powered business executive with a sharp mind for strategy.',
        height: '5\'6"', build: 'Slim', eyeColor: 'Brown', hairColor: 'Black',
        handedness: 'Right-handed', age: 'Mid-30s', icon: 'user-tie'
    },
    {
        name: 'Marcus Webb',
        bio: 'A former security expert known for his stoic demeanor.',
        height: '6\'2"', build: 'Athletic', eyeColor: 'Blue', hairColor: 'Gray',
        handedness: 'Left-handed', age: 'Late 40s', icon: 'user-shield'
    },
    {
        name: 'Diana Cross',
        bio: 'A socialite who finds herself in the center of every storm.',
        height: '5\'8"', build: 'Average', eyeColor: 'Green', hairColor: 'Blonde',
        handedness: 'Right-handed', age: 'Early 40s', icon: 'user'
    },
    {
        name: 'James Porter',
        bio: 'A hardworking maintenance man who notices everything.',
        height: '5\'10"', build: 'Stocky', eyeColor: 'Brown', hairColor: 'Bald',
        handedness: 'Right-handed', age: 'Early 50s', icon: 'user'
    },
    {
        name: 'Sarah Kim',
        bio: 'An ambitious researcher with a keen eye for detail.',
        height: '5\'4"', build: 'Petite', eyeColor: 'Dark brown', hairColor: 'Black',
        handedness: 'Left-handed', age: 'Late 20s', icon: 'user-graduate'
    },
    {
        name: 'Emma Stone',
        bio: 'A renowned stage actress with a flair for the dramatic.',
        height: '5\'5"', build: 'Slim', eyeColor: 'Hazel', hairColor: 'Auburn',
        handedness: 'Right-handed', age: 'Early 30s', icon: 'user'
    },
    {
        name: 'David Chen',
        bio: 'A meticulous logistics coordinator who keeps schedules tight.',
        height: '5\'9"', build: 'Average', eyeColor: 'Brown', hairColor: 'Black',
        handedness: 'Left-handed', age: 'Mid-40s', icon: 'user-tie'
    },
    {
        name: 'Lisa Brown',
        bio: 'A determined athlete with a competitive streak.',
        height: '5\'7"', build: 'Athletic', eyeColor: 'Blue', hairColor: 'Blonde',
        handedness: 'Right-handed', age: 'Late 20s', icon: 'user'
    },
    {
        name: 'Victoria Winters',
        bio: 'An elegant socialite with a penchant for high-stakes secrets.',
        height: '5\'8"', build: 'Slender', eyeColor: 'Violet', hairColor: 'Silver',
        handedness: 'Right-handed', age: 'Late 50s', icon: 'user'
    },
    {
        name: 'Gregory Marsh',
        bio: 'A gruff former sea captain who has seen too much.',
        height: '6\'0"', build: 'Rugged', eyeColor: 'Steely blue', hairColor: 'White',
        handedness: 'Right-handed', age: 'Early 60s', icon: 'anchor'
    },
    {
        name: 'Sophie Laurent',
        bio: 'A mysterious fashion designer with a hidden past.',
        height: '5\'10"', build: 'Tall', eyeColor: 'Amber', hairColor: 'Dark brown',
        handedness: 'Left-handed', age: 'Mid-30s', icon: 'user'
    },
    {
        name: 'Arthur Ashford',
        bio: 'A reclusive scholar obsessed with ancient history.',
        height: '5\'11"', build: 'Frail', eyeColor: 'Gray', hairColor: 'Thinning brown',
        handedness: 'Right-handed', age: 'Late 60s', icon: 'book'
    },
    {
        name: 'Margaret Price',
        bio: 'The loyal housekeeper who knows where all the bodies are buried.',
        height: '5\'4"', build: 'Sturdy', eyeColor: 'Brown', hairColor: 'Graying black',
        handedness: 'Right-handed', age: 'Early 50s', icon: 'user'
    },
    {
        name: 'Nicholas Carver',
        bio: 'A ruthless real estate developer with many enemies.',
        height: '6\'1"', build: 'Broad-shouldered', eyeColor: 'Blue', hairColor: 'Blonde',
        handedness: 'Right-handed', age: 'Late 40s', icon: 'user-tie'
    },
    {
        name: 'Elena Petrova',
        bio: 'A former Olympic gymnast with incredible agility.',
        height: '5\'2"', build: 'Powerful', eyeColor: 'Hazel', hairColor: 'Black',
        handedness: 'Right-handed', age: 'Mid-20s', icon: 'user'
    },
    {
        name: 'Marcus DeVille',
        bio: 'A charismatic high-stakes gambler with a poker face.',
        height: '5\'11"', build: 'Lean', eyeColor: 'Green', hairColor: 'Slicked back black',
        handedness: 'Left-handed', age: 'Early 40s', icon: 'user-secret'
    }
];

export const weapons: Weapon[] = [
    { name: 'Letter Opener', description: 'A sharp, silver desk accessory.', weight: 'Light-weight', type: 'Sharp', icon: 'knife' },
    { name: 'Candlestick', description: 'A heavy brass candle holder.', weight: 'Heavy-weight', type: 'Blunt', icon: 'lightbulb' },
    { name: 'Statue', description: 'A solid marble bust of a historical figure.', weight: 'Heavy-weight', type: 'Blunt', icon: 'landmark' },
    { name: 'Ice Pick', description: 'A pointed tool from a bar cart.', weight: 'Light-weight', type: 'Sharp', icon: 'knife' },
    { name: 'Dumbbell', description: 'A standard piece of gym equipment.', weight: 'Heavy-weight', type: 'Blunt', icon: 'dumbbell' },
    { name: 'Poison', description: 'A fast-acting toxin in a small vial.', weight: 'Light-weight', type: 'Poison', icon: 'skull' },
    { name: 'Cleaver', description: 'A heavy-duty kitchen blade.', weight: 'Medium-weight', type: 'Sharp', icon: 'knife' },
    { name: 'Stage Weight', description: 'An iron weight used for rigging.', weight: 'Heavy-weight', type: 'Blunt', icon: 'dumbbell' },
    { name: 'Champagne Bottle', description: 'A heavy glass bottle, unopened.', weight: 'Heavy-weight', type: 'Blunt', icon: 'wine-bottle' },
    { name: 'Paperweight', description: 'A solid glass sphere filled with swirls.', weight: 'Medium-weight', type: 'Blunt', icon: 'building' },
    { name: 'Poker Chip Rack', description: 'A heavy metal rack for carrying casino chips.', weight: 'Heavy-weight', type: 'Blunt', icon: 'dice' },
    { name: 'Syringe', description: 'A medical tool with a lethal dose of sedative.', weight: 'Light-weight', type: 'Poison', icon: 'syringe' },
    { name: 'Fireplace Poker', description: 'A long iron rod used for stoking fires.', weight: 'Heavy-weight', type: 'Blunt', icon: 'flask' },
    { name: 'Fountain Pen', description: 'A gold-nibbed pen with a sharp point.', weight: 'Light-weight', type: 'Sharp', icon: 'book' },
    { name: 'Trophy', description: 'A large, golden sports trophy.', weight: 'Medium-weight', type: 'Blunt', icon: 'trophy' },
    { name: 'Poison Dart', description: 'A small feather-tipped projectile.', weight: 'Light-weight', type: 'Poison', icon: 'knife' }
];

export const locations: Location[] = [
    { name: 'Study', description: 'A quiet room filled with books and antiques.', setting: 'Indoors', access: 'Private', icon: 'book' },
    { name: 'Conservatory', description: 'A glass-walled room full of exotic plants.', setting: 'Mixed', access: 'Public', icon: 'tree' },
    { name: 'Egyptian Wing', description: 'A museum gallery filled with ancient artifacts.', setting: 'Indoors', access: 'Public', icon: 'landmark' },
    { name: 'Backstage', description: 'The chaotic area behind a theater stage.', setting: 'Indoors', access: 'Restricted', icon: 'door-open' },
    { name: 'Kitchen', description: 'A bustling commercial kitchen.', setting: 'Indoors', access: 'Restricted', icon: 'utensils' },
    { name: 'Vault', description: 'A high-security storage area.', setting: 'Indoors', access: 'Restricted', icon: 'warehouse' },
    { name: 'Sauna', description: 'A small, steam-filled relaxation room.', setting: 'Indoors', access: 'Public', icon: 'hospital' },
    { name: 'Penthouse', description: 'A luxury suite overlooking the city.', setting: 'Indoors', access: 'Private', icon: 'hotel' },
    { name: 'Ballroom', description: 'A grand hall with a polished marble floor.', setting: 'Indoors', access: 'Public', icon: 'landmark' },
    { name: 'Drawing Room', description: 'A cozy parlor for formal receptions.', setting: 'Indoors', access: 'Public', icon: 'chair' },
    { name: 'Rooftop Bar', description: 'An open-air bar high above the street.', setting: 'Outdoors', access: 'Public', icon: 'glass-cheers' },
    { name: 'Spa', description: 'A high-end wellness facility.', setting: 'Indoors', access: 'Public', icon: 'bath' },
    { name: 'Museum Gallery', description: 'A modern art space with minimalist design.', setting: 'Indoors', access: 'Public', icon: 'landmark' },
    { name: 'Security Office', description: 'A windowless room filled with CCTV monitors.', setting: 'Indoors', access: 'Restricted', icon: 'user-shield' },
    { name: 'Wine Cellar', description: 'A cool, subterranean room for aging vintages.', setting: 'Indoors', access: 'Private', icon: 'wine-bottle' },
    { name: 'Garden', description: 'A carefully manicured outdoor maze.', setting: 'Outdoors', access: 'Public', icon: 'tree' }
];

export const backstoryTemplates: BackstoryTemplate[] = [
    {
        id: 'charity-gala',
        template: 'Billionaire Victor Blackwood was found dead during the annual charity gala at Ravencrest Manor. Several guests had access to the wing where the body was discovered.'
    },
    {
        id: 'museum-theft',
        template: 'A priceless artifact was stolen, and the curator was found dead in the gallery after closing time. Security logs show several people entered the area.'
    },
    {
        id: 'opening-night',
        template: 'The director was discovered dead backstage during intermission of opening night. Several staff members had access to the restricted backstage area.'
    },
    {
        id: 'kitchen-nightmare',
        template: 'A celebrity chef was found dead in the walk-in freezer of his restaurant. Several staff members were working the closing shift.'
    },
    {
        id: 'vault-heist',
        template: 'The head archivist was found dead in the rare books vault. Several people had access to the restricted archives that evening.'
    },
    {
        id: 'gym-incident',
        template: 'A personal trainer was found dead in the sauna room after closing. Several clients had keys for after-hours access.'
    },
    {
        id: 'penthouse-party',
        template: 'A tech mogul was discoverd dead at his exclusive penthouse party. Three guests were found in the vicinity of the crime scene.'
    }
];
