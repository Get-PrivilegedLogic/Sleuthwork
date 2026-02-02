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
    { name: 'Stage Weight', description: 'An iron weight used for rigging.', weight: 'Heavy-weight', type: 'Blunt', icon: 'dumbbell' }
];

export const locations: Location[] = [
    { name: 'Study', description: 'A quiet room filled with books and antiques.', setting: 'Indoors', access: 'Private', icon: 'book' },
    { name: 'Conservatory', description: 'A glass-walled room full of exotic plants.', setting: 'Mixed', access: 'Public', icon: 'tree' },
    { name: 'Egyptian Wing', description: 'A museum gallery filled with ancient artifacts.', setting: 'Indoors', access: 'Public', icon: 'landmark' },
    { name: 'Backstage', description: 'The chaotic area behind a theater stage.', setting: 'Indoors', access: 'Restricted', icon: 'door-open' },
    { name: 'Kitchen', description: 'A bustling commercial kitchen.', setting: 'Indoors', access: 'Restricted', icon: 'utensils' },
    { name: 'Vault', description: 'A high-security storage area.', setting: 'Indoors', access: 'Restricted', icon: 'warehouse' },
    { name: 'Sauna', description: 'A small, steam-filled relaxation room.', setting: 'Indoors', access: 'Public', icon: 'hospital' },
    { name: 'Penthouse', description: 'A luxury suite overlooking the city.', setting: 'Indoors', access: 'Private', icon: 'hotel' }
];

export const backstoryTemplates: BackstoryTemplate[] = [
    {
        id: 'charity-gala',
        template: 'Billionaire Victor Blackwood was found dead during the annual charity gala at Ravencrest Manor. Three guests had access to the wing where the body was discovered.'
    },
    {
        id: 'museum-theft',
        template: 'A priceless artifact was stole, and the curator was found dead in the gallery after closing time. Security logs show three people entered the area.'
    },
    {
        id: 'opening-night',
        template: 'The director was discovered dead backstage during intermission of opening night. Three staff members had access to the restricted backstage area.'
    },
    {
        id: 'kitchen-nightmare',
        template: 'A celebrity chef was found dead in the walk-in freezer of his restaurant. Three staff members were working the closing shift.'
    },
    {
        id: 'vault-heist',
        template: 'The head archivist was found dead in the rare books vault. Three people had access to the restricted archives that evening.'
    },
    {
        id: 'gym-incident',
        template: 'A personal trainer was found dead in the sauna room after closing. Three clients had keys for after-hours access.'
    }
];
