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
    },
    {
        name: 'Beatrice Holt',
        bio: 'A retired judge with an unshakable sense of justice.',
        height: '5\'5"', build: 'Stocky', eyeColor: 'Brown', hairColor: 'White',
        handedness: 'Right-handed', age: 'Late 60s', icon: 'user'
    },
    {
        name: 'Felix Navarro',
        bio: 'A charming wine merchant who travels the world.',
        height: '5\'10"', build: 'Average', eyeColor: 'Brown', hairColor: 'Dark brown',
        handedness: 'Right-handed', age: 'Mid-30s', icon: 'user'
    },
    {
        name: 'Ingrid Hoffman',
        bio: 'A cold and calculating investment banker.',
        height: '5\'9"', build: 'Slim', eyeColor: 'Ice blue', hairColor: 'Platinum blonde',
        handedness: 'Right-handed', age: 'Early 40s', icon: 'user-tie'
    },
    {
        name: 'Roland Thatcher',
        bio: 'A grizzled private investigator with a troubled past.',
        height: '6\'0"', build: 'Broad', eyeColor: 'Gray', hairColor: 'Salt and pepper',
        handedness: 'Left-handed', age: 'Late 50s', icon: 'user-shield'
    },
    {
        name: 'Cassandra Blake',
        bio: 'A bestselling novelist who draws from real scandals.',
        height: '5\'6"', build: 'Average', eyeColor: 'Green', hairColor: 'Red',
        handedness: 'Right-handed', age: 'Mid-40s', icon: 'user'
    },
    {
        name: 'Theodore Wainwright',
        bio: 'An eccentric antiques dealer with a vast collection.',
        height: '5\'8"', build: 'Thin', eyeColor: 'Hazel', hairColor: 'Curly gray',
        handedness: 'Right-handed', age: 'Early 70s', icon: 'user'
    },
    {
        name: 'Mia Torres',
        bio: 'A sharp-witted journalist who never drops a story.',
        height: '5\'3"', build: 'Petite', eyeColor: 'Dark brown', hairColor: 'Black',
        handedness: 'Left-handed', age: 'Late 20s', icon: 'user'
    },
    {
        name: 'Charles Pemberton',
        bio: 'A retired military colonel with rigid discipline.',
        height: '6\'1"', build: 'Upright', eyeColor: 'Blue', hairColor: 'Cropped gray',
        handedness: 'Right-handed', age: 'Early 60s', icon: 'user-shield'
    },
    {
        name: 'Priya Kapoor',
        bio: 'A gifted surgeon with nerves of steel.',
        height: '5\'7"', build: 'Athletic', eyeColor: 'Brown', hairColor: 'Black',
        handedness: 'Right-handed', age: 'Mid-30s', icon: 'user'
    },
    {
        name: 'Oscar Langley',
        bio: 'A washed-up film director desperate for a comeback.',
        height: '5\'9"', build: 'Heavyset', eyeColor: 'Brown', hairColor: 'Thinning black',
        handedness: 'Right-handed', age: 'Late 50s', icon: 'user'
    },
    {
        name: 'Helena Voss',
        bio: 'A world-class violinist with a fiery temperament.',
        height: '5\'8"', build: 'Slender', eyeColor: 'Amber', hairColor: 'Raven black',
        handedness: 'Left-handed', age: 'Early 30s', icon: 'music'
    },
    {
        name: 'Winston Drake',
        bio: 'A shipping magnate who built his empire from nothing.',
        height: '6\'3"', build: 'Imposing', eyeColor: 'Dark brown', hairColor: 'Bald',
        handedness: 'Right-handed', age: 'Mid-50s', icon: 'user-tie'
    },
    {
        name: 'Lily Fontaine',
        bio: 'A rising political aide with powerful connections.',
        height: '5\'5"', build: 'Slim', eyeColor: 'Blue', hairColor: 'Brunette',
        handedness: 'Right-handed', age: 'Late 20s', icon: 'user'
    },
    {
        name: 'Reginald Foxworth',
        bio: 'An aging aristocrat clinging to old money and older grudges.',
        height: '5\'10"', build: 'Gaunt', eyeColor: 'Pale blue', hairColor: 'White',
        handedness: 'Right-handed', age: 'Late 70s', icon: 'user'
    },
    {
        name: 'Nina Castillo',
        bio: 'A fearless war photographer who has seen the worst of humanity.',
        height: '5\'6"', build: 'Wiry', eyeColor: 'Hazel', hairColor: 'Dark brown',
        handedness: 'Left-handed', age: 'Mid-30s', icon: 'user'
    },
    {
        name: 'Jasper Thornton',
        bio: 'A reclusive tech billionaire who trusts no one.',
        height: '5\'11"', build: 'Average', eyeColor: 'Green', hairColor: 'Sandy brown',
        handedness: 'Right-handed', age: 'Early 40s', icon: 'user-secret'
    }
];

export const weapons: Weapon[] = [
    { name: 'Letter Opener', description: 'A sharp, silver desk accessory.', weight: 'Light-weight', type: 'Sharp', icon: 'knife' },
    { name: 'Candlestick', description: 'A heavy brass candle holder.', weight: 'Heavy-weight', type: 'Blunt', icon: 'flame' },
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
    { name: 'Fireplace Poker', description: 'A long iron rod used for stoking fires.', weight: 'Heavy-weight', type: 'Blunt', icon: 'hammer' },
    { name: 'Fountain Pen', description: 'A gold-nibbed pen with a sharp point.', weight: 'Light-weight', type: 'Sharp', icon: 'pen' },
    { name: 'Trophy', description: 'A large, golden sports trophy.', weight: 'Medium-weight', type: 'Blunt', icon: 'trophy' },
    { name: 'Poison Dart', description: 'A small feather-tipped projectile.', weight: 'Light-weight', type: 'Poison', icon: 'crosshair' },
    { name: 'Wrench', description: 'A heavy steel pipe wrench.', weight: 'Heavy-weight', type: 'Blunt', icon: 'hammer' },
    { name: 'Corkscrew', description: 'A sharp spiral-tipped wine opener.', weight: 'Light-weight', type: 'Sharp', icon: 'knife' },
    { name: 'Anchor Chain', description: 'A length of heavy iron chain.', weight: 'Heavy-weight', type: 'Blunt', icon: 'anchor' },
    { name: 'Scissors', description: 'A pair of sharp tailoring shears.', weight: 'Light-weight', type: 'Sharp', icon: 'scissors' },
    { name: 'Crystal Decanter', description: 'A heavy cut-glass vessel for spirits.', weight: 'Heavy-weight', type: 'Blunt', icon: 'wine-bottle' },
    { name: 'Cyanide Capsule', description: 'A tiny capsule containing a lethal dose.', weight: 'Light-weight', type: 'Poison', icon: 'skull' },
    { name: 'Walking Cane', description: 'A sturdy cane with a weighted silver handle.', weight: 'Medium-weight', type: 'Blunt', icon: 'hammer' },
    { name: 'Surgical Scalpel', description: 'A razor-sharp medical blade.', weight: 'Light-weight', type: 'Sharp', icon: 'knife' },
    { name: 'Iron Skillet', description: 'A heavy cast-iron pan.', weight: 'Heavy-weight', type: 'Blunt', icon: 'utensils' },
    { name: 'Electric Cord', description: 'A long appliance cord used for strangulation.', weight: 'Light-weight', type: 'Other', icon: 'zap' },
    { name: 'Arsenic Powder', description: 'A tasteless white powder slipped into a drink.', weight: 'Light-weight', type: 'Poison', icon: 'flask' },
    { name: 'Boat Oar', description: 'A wooden oar with surprising reach.', weight: 'Heavy-weight', type: 'Blunt', icon: 'ship' },
    { name: 'Rapier', description: 'A thin-bladed fencing sword.', weight: 'Medium-weight', type: 'Sharp', icon: 'sword' },
    { name: 'Bowling Ball', description: 'A solid sphere of polished resin.', weight: 'Heavy-weight', type: 'Blunt', icon: 'bomb' },
    { name: 'Ornamental Dagger', description: 'A jewel-encrusted blade from a private collection.', weight: 'Medium-weight', type: 'Sharp', icon: 'knife' }
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
    { name: 'Garden', description: 'A carefully manicured outdoor maze.', setting: 'Outdoors', access: 'Public', icon: 'tree' },
    { name: 'Library', description: 'A two-story room lined with leather-bound volumes.', setting: 'Indoors', access: 'Private', icon: 'book' },
    { name: 'Chapel', description: 'A small stone chapel with stained glass windows.', setting: 'Indoors', access: 'Public', icon: 'landmark' },
    { name: 'Billiards Room', description: 'A wood-paneled room with a green felt table.', setting: 'Indoors', access: 'Private', icon: 'dice' },
    { name: 'Greenhouse', description: 'A humid glass structure filled with rare orchids.', setting: 'Mixed', access: 'Restricted', icon: 'tree' },
    { name: 'Dock', description: 'A wooden pier extending into dark water.', setting: 'Outdoors', access: 'Public', icon: 'anchor' },
    { name: 'Attic', description: 'A dusty storage space beneath the eaves.', setting: 'Indoors', access: 'Restricted', icon: 'key' },
    { name: 'Courtyard', description: 'An open stone courtyard with a central fountain.', setting: 'Outdoors', access: 'Public', icon: 'droplets' },
    { name: 'Parking Garage', description: 'A dimly lit underground structure.', setting: 'Indoors', access: 'Public', icon: 'car' },
    { name: 'Lounge', description: 'A velvet-draped cocktail lounge with low lighting.', setting: 'Indoors', access: 'Public', icon: 'glass-cheers' },
    { name: 'Music Room', description: 'An intimate room with a grand piano.', setting: 'Indoors', access: 'Private', icon: 'music' },
    { name: 'Servants\' Quarters', description: 'A modest room behind the main house.', setting: 'Indoors', access: 'Restricted', icon: 'bed' },
    { name: 'Terrace', description: 'An open-air stone terrace overlooking the grounds.', setting: 'Outdoors', access: 'Public', icon: 'map-pin' },
    { name: 'Trophy Room', description: 'A room displaying hunting trophies and memorabilia.', setting: 'Indoors', access: 'Private', icon: 'trophy' },
    { name: 'Laundry Room', description: 'A utilitarian room with industrial washing machines.', setting: 'Indoors', access: 'Restricted', icon: 'droplets' },
    { name: 'Observatory', description: 'A domed room housing a large telescope.', setting: 'Indoors', access: 'Private', icon: 'search' }
];

export const backstoryTemplates: BackstoryTemplate[] = [
    {
        id: 'charity-gala',
        template: 'Billionaire Victor Blackwood was found dead during the annual charity gala at Ravencrest Manor. Several guests had the means and opportunity to commit the crime.'
    },
    {
        id: 'museum-theft',
        template: 'A priceless artifact was stolen, and the curator was found dead after closing time. Security logs show several people were present that evening.'
    },
    {
        id: 'opening-night',
        template: 'The director was discovered dead during intermission of opening night. Several people had access to the area where the body was found.'
    },
    {
        id: 'kitchen-nightmare',
        template: 'A celebrity chef was found dead in his own restaurant after the last guests had left. Several staff members were working the closing shift.'
    },
    {
        id: 'high-society',
        template: 'A prominent socialite was found dead at an exclusive gathering. The handful of attendees all had reason to want her silenced.'
    },
    {
        id: 'after-hours',
        template: 'A body was discovered after hours at a private members\' club. Several people had keys and were seen in the building that night.'
    },
    {
        id: 'estate-weekend',
        template: 'A wealthy host was found dead during a weekend retreat at a countryside estate. Each of the invited guests had a secret motive.'
    },
    {
        id: 'train-journey',
        template: 'A passenger was found dead aboard the overnight express just before dawn. The train had not stopped since departure, and only a few travelers were in the same car.'
    },
    {
        id: 'auction-house',
        template: 'A renowned art dealer collapsed during a high-profile auction. Foul play is suspected, and several bidders had grudges against the deceased.'
    },
    {
        id: 'book-launch',
        template: 'A controversial author was found dead at her own book launch party. Several attendees had been named — and not kindly — in her latest memoir.'
    },
    {
        id: 'wedding-reception',
        template: 'The best man was found dead during the wedding reception. Tensions had been running high all evening, and several guests had been seen arguing with him.'
    },
    {
        id: 'film-set',
        template: 'A famous producer was found dead on set between takes. Cast and crew all had access, and more than a few had reason to hold a grudge.'
    },
    {
        id: 'poker-night',
        template: 'A high-stakes poker game ended in murder when the host was found dead after the final hand. Every player at the table had lost a fortune to him.'
    },
    {
        id: 'opera-intermission',
        template: 'A patron of the arts was found dead during intermission at the opera. Several acquaintances were seated nearby, each hiding a dark secret.'
    },
    {
        id: 'cruise-ship',
        template: 'A passenger was found dead aboard a luxury cruise on its maiden voyage. With no way off the ship, the killer is still on board.'
    },
    {
        id: 'wine-tasting',
        template: 'A distinguished sommelier was found dead at an exclusive tasting event. The small guest list means the killer was almost certainly among the attendees.'
    },
    {
        id: 'charity-auction',
        template: 'A philanthropist was found dead moments before announcing the evening\'s largest donation. Several rivals in attendance stood to benefit from her silence.'
    },
    {
        id: 'faculty-meeting',
        template: 'A university dean was found dead in the hours after a heated faculty meeting. Several colleagues had publicly clashed with him over funding cuts.'
    },
    {
        id: 'masquerade-ball',
        template: 'A guest was found dead at a masquerade ball, their mask still in place. Behind every other mask in the room lurks a possible killer.'
    }
];
