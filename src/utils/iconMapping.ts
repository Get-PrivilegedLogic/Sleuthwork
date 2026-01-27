import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faUserTie,
  faUserNurse,
  faUserShield,
  faUserSecret,
  faUserGraduate,
  faCrosshairs,
  faBomb,
  faSkull,
  faSyringe,
  faFlask,
  faHammer,
  faWineBottle,
  faBuilding,
  faTree,
  faWarehouse,
  faDoorOpen,
  faHospital,
  faLandmark,
  faStore,
  faDumbbell,
  faBook,
  faShip,
  faBriefcase,
  faHotel,
  faTrain,
  faPlane,
  faGlassMartini,
  faChess,
  faDice,
  faTrophy,
  faScissors,
  faAnchor,
  faFish,
  faCar,
  faKey,
  faLightbulb,
  faBed,
  faUtensils,
  faCoffee,
  faCouch,
  faChair
} from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, IconDefinition> = {
  // People icons
  'user': faUser,
  'user-tie': faUserTie,
  'user-nurse': faUserNurse,
  'user-shield': faUserShield,
  'user-secret': faUserSecret,
  'user-graduate': faUserGraduate,
  
  // Weapon icons
  'knife': faCrosshairs,  // Using crosshairs as generic weapon icon
  'bomb': faBomb,
  'skull': faSkull,
  'syringe': faSyringe,
  'flask': faFlask,
  'hammer': faHammer,
  'wine-bottle': faWineBottle,
  'dumbbell': faDumbbell,
  'trophy': faTrophy,
  'scissors': faScissors,
  'anchor': faAnchor,
  'fish': faFish,
  
  // Location icons
  'building': faBuilding,
  'tree': faTree,
  'warehouse': faWarehouse,
  'door-open': faDoorOpen,
  'hospital': faHospital,
  'landmark': faLandmark,
  'store': faStore,
  'book': faBook,
  'ship': faShip,
  'briefcase': faBriefcase,
  'hotel': faHotel,
  'train': faTrain,
  'plane': faPlane,
  'glass-cheers': faGlassMartini,  // Using martini glass
  'chess': faChess,
  'dice': faDice,
  'car': faCar,
  'key': faKey,
  'lightbulb': faLightbulb,
  'bed': faBed,
  'utensils': faUtensils,
  'coffee': faCoffee,
  'couch': faCouch,
  'chair': faChair
};

export function getIcon(iconName: string): IconDefinition {
  return iconMap[iconName] || faUser; // Default to user icon if not found
}