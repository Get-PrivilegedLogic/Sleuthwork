# Chapter Book Feature Design — "Murder on the Utopia"

**Source:** Chapter Book Design document. This file is the single source of truth for the 5-chapter story mode.

## Overview

A 5-chapter narrative-driven murder mystery set aboard the **Utopia of the Seas**, a modern luxury cruise liner. Players follow **Rook Pemberton** as he unravels a conspiracy orchestrated by an unexpected mastermind.

---

## Detective: Rook Pemberton

- **Personality:** Eccentric genius (Matt Smith’s Doctor Who style)
- **Traits:** Talks too fast, notices what nobody else does, manic charm alternating with laser focus
- **Look:** Tousled hair, rumpled tweed blazer, quirky shirts, mismatched socks
- **On the ship:** Supposedly on vacation — can’t help himself when murder strikes

---

## Recurring Characters

| Character | Role | Notes |
|-----------|------|--------|
| **Captain Elena Vasquez** | Ship’s Captain | Professional, controlled, protective of the Utopia’s reputation. Initially sees Rook as a nuisance; gradually relies on him. Hiding something about the ship’s ownership. |
| **Felix Marsh** | Cruise Director | Face of the Utopia — charismatic, always smiling, knows every passenger’s name. “Too helpful?” Present in every chapter as the host. |
| **Dr. Nadia Osei** | Ship’s Doctor | Calm under pressure, autopsy insights. Rook’s reluctant ally. Has a past she doesn’t talk about. |
| **Leo Tanaka** | Head of Ship Security | By-the-book, doesn’t trust Rook’s methods but can’t argue with results. |

---

## 5-Chapter Arc

### Chapter 1: "Maiden Voyage" (Embarkation Night)

- **Tone:** Glamorous, lighthearted intrigue | 🎨 Gold, champagne, warm whites
- **Victim:** **Marcus Webb** — Tech mogul, 50s. Flashy, made enemies. Found dead in VIP lounge.
- **Suspects:** Celeste Moreau, Dominic Hale, Sasha Ivanova
- **Locations:** Grand Atrium, Casino Royale, VIP Lounge, Pool Deck
- **Weapons:** Champagne Bottle, Crystal Decanter, Letter Opener
- **Story:** Rook at the welcome party, trying to “relax,” when Webb is found dead. He solves it but notices Webb received a cryptic note before death — someone lured him to the lounge.
- **Ending:** Case “solved,” but Rook senses something deeper.

**Implementation status:** ✅ Full content in `src/data/chapters/chapter-1.ts`.

---

### Chapter 2: "Calm Before the Storm" (Days 2–3)

- **Tone:** Suspicious, unsettling beneath the surface | 🎨 Bright blue, coral, sun-bleached
- **Victim:** **Priya Delacroix** — Food critic known for career-ending reviews. Found dead at the **rock climbing wall** — made to look like an accident.
- **Suspects:** Chef Alistair Beaumont, Greta Engström, Jasper Cole
- **Locations:** Spa, Buffet Deck, Rock Climbing Wall, Sports Court, Sun Deck
- **Weapons:** Mooring Rope, Dumbbell, Golf Club
- **Story:** Everyone says it was an accident. Rook notices rope fibers that don’t match climbing equipment. He proves murder and finds another cryptic note — same handwriting as Webb’s.
- **Ending:** Two murders, one orchestrator.

---

### Chapter 3: "Deep Waters" (Days 4–5, open ocean)

- **Tone:** Paranoid, claustrophobic | 🎨 Deep red, industrial grey, shadow
- **Victim:** **Dominic Hale** — Webb’s business rival from Ch.1. Suspect turned victim. Found in the **wine cellar**.
- **Suspects:** Margot Ashby, Tomás Reyes, Isla Whitfield
- **Locations:** Engine Room, Wine Cellar, Theater, Crew Quarters, Bridge
- **Weapons:** Wrench, Corkscrew, Anchor Chain Link, Fire Extinguisher
- **Story:** Hale wasn’t the killer from Ch.1 — he was a loose end. Below-deck smuggling exposed in cargo hold. Rook traces the cryptic notes’ paper to the ship’s stationery supply, ordered by someone specific.
- **Ending:** Nobody is who they seem.

---

### Chapter 4: "The Storm" (Day 6)

- **Tone:** Dark, chaotic, high-stakes | 🎨 Storm blue, purple, flickering white
- **Victim:** **Leo Tanaka** — Head of Security. Had access to surveillance footage. Found in the **communications room during the storm**.
- **Suspects:** Felix Marsh, Dr. Nadia Osei, Captain Elena Vasquez, Greta Engström
- **Locations:** Communications Room, Medical Bay, Galley Kitchen, Captain’s Study, Laundry
- **Weapons:** Ice Pick, Chef’s Knife, Fire Extinguisher, Ship’s Sextant
- **Motives introduced:** Greed, Revenge, Blackmail, Self-Defense, Jealousy
- **Story:** Storm isolates the ship. Tanaka’s death is personal — surveillance goes dark. Rook realizes every victim knew a piece of a larger secret about the Utopia.
- **Ending:** Rook identifies the conspiracy but can’t prove it yet.

---

### Chapter 5: "Final Port" (Day 7)

- **Tone:** Intense, climactic, satisfying | 🎨 Dawn gold, navy, sharp contrast
- **Victim:** N/A — all surviving characters converge; mastermind reveal.
- **Suspects (final lineup):** Felix Marsh, Captain Elena Vasquez, Dr. Nadia Osei, Margot Ashby, Isla Whitfield
- **Locations:** Observatory Lounge, Captain’s Suite, Helipad, Cargo Hold, Docking Bridge
- **Weapons:** Flare Gun, Belaying Pin, Lifeboat Oar, Pool Cue, Brass Candlestick
- **Motives:** All 5 in play
- **Story:** Rook gathers everyone in the Observatory Lounge. Grand theatrical monologue connecting all 4 murders. The Utopia is being used to smuggle stolen art in the cargo hold. Every victim had discovered a piece of the operation.
- **Ending:** The mastermind unmasked.

---

## The Mastermind (spoiler)

**Felix Marsh** — Cruise Director.

The friendliest person on the ship. Always smiling, always helpful, always there. He orchestrated the smuggling ring using the cruise line as cover. Each victim stumbled onto a different piece of his operation. He used his encyclopedic knowledge of every passenger to manipulate suspects and frame others.

- **Motive:** Greed — and survival. He killed to protect an empire.
- **Foreshadowing:** Felix is always nearby when things go wrong, always first to “help” Rook, always subtly steering the investigation. The reveal should make players want to replay and see all the signs they missed.

---

## Puzzle Design

| Chapter | Mini-puzzles (5–6) | Finale | Hints | Grid |
|---------|-------------------|--------|-------|------|
| 1 | Easy → Medium | 3×3 | No | Standard (Suspects, Weapons, Locations) |
| 2 | Medium | 3×3 | Medium+ only | Standard |
| 3 | Medium → Hard | 4×4 | Medium+ only | Expanded |
| 4 | Hard | 4×4 + motives | Yes | Expanded + Motives |
| 5 | Hard → Expert | 5×5 + motives | Yes | Full complexity |

- **Categories:** Standard = Suspects, Weapons, Locations. Expanded (Ch.4–5) = + Motives (Greed, Revenge, Jealousy, Blackmail, Self-Defense).
- **Clue carry-forward:** Revealed facts from earlier puzzles become pre-filled or referenced later; solution dependencies; narrative callbacks.
- **Total content:** ~30 mini-puzzles + 5 finales ≈ 35 puzzles.

---

## Narrative Design

- **Generation:** AI-generated, reviewed before publishing
- **Tone:** Brief but detailed and charismatic
- **Continuity:** Each chapter references previous events
- **Characters:** Unique cast per chapter (separate from daily puzzles); recurring detective
- **Mastermind:** Hidden presence in Ch.1–3, conspiracy revealed in Ch.4, unmasked in Ch.5

---

## User Experience

- **Access:** Separate “Story Mode” section from home page
- **Progression:** Linear — no skipping ahead; can review completed puzzles but not look forward
- **Progress:** Tracker showing completion within each chapter
- **Save:** Auto-save after each puzzle; resume where left off
- **Ad placement (strategic):** After Puzzle 2, after Puzzle 4, before chapter finale, after chapter completion
- **Hints:** Easy = no hints; Medium+ = hints available (limited per puzzle)

---

## Assets (cruise-ship–appropriate only)

- **Weapons:** Chef’s Knife, Corkscrew, Ice Pick, Champagne Bottle, Crystal Decanter, Fire Extinguisher, Wrench, Mooring Rope, Flare Gun, Anchor Chain Link, Golf Club, Dumbbell, Pool Cue, Brass Candlestick, Letter Opener, Ship’s Sextant, Belaying Pin, Lifeboat Oar
- **Locations:** Grand Atrium, Casino Royale, Observatory Lounge, Theater, Wine Cellar, Library, Ballroom, Cigar Lounge; Pool Deck, Sun Deck, Sports Court, Rock Climbing Wall, Jogging Track, Helipad; Main Dining Room, Buffet Deck, Specialty Restaurant, Cocktail Bar, Coffee Lounge; Engine Room, Bridge, Crew Quarters, Galley Kitchen, Laundry, Communications Room, Medical Bay, Cargo Hold; Passenger Cabins, VIP Suite, Captain’s Suite, Docking Bridge
- **Suspect roles:** Crew (Captain, First Officer, Head Chef, Chief Engineer, Cruise Director, Ship’s Doctor, Bartender, Security Officer, etc.); Passengers (Tech Mogul, Food Critic, Art Collector, Mystery Author, Poker Player, Cruise Vlogger, etc.)

---

## Concept Art

1 detective portrait + 1 per chapter = 6 images. Generated and wired into Story Mode.

**Filenames** (in `public/images/story-mode/`):

| File | Use |
|------|-----|
| `rook-pemberton.png` | Detective portrait |
| `chapter-1-maiden-voyage.png` | Ch.1 artwork |
| `chapter-2-calm-before-storm.png` | Ch.2 artwork |
| `chapter-3-deep-waters.png` | Ch.3 artwork |
| `chapter-4-the-storm.png` | Ch.4 artwork |
| `chapter-5-final-port.png` | Ch.5 artwork |

**Image generation prompts (for retry or variation):**

- **Detective portrait:** Eccentric genius detective, 30s, tousled hair, rumpled tweed blazer, quirky patterned shirt, mismatched socks, mischievous knowing grin, sharp observant eyes, standing on modern luxury cruise ship deck, golden hour, stylized illustration.
- **Ch.1 — Maiden Voyage:** Grand atrium with crystal chandeliers, champagne glasses, police tape around VIP lounge, elegant but ominous, golden lights vs deep shadows.
- **Ch.2 — Calm Before the Storm:** Sun-drenched pool deck, overturned cocktail glass, mysterious figure watching, bright but unsettling.
- **Ch.3 — Deep Waters:** Dark industrial engine room, pipes, dim red emergency lighting, porthole showing endless dark water, claustrophobic.
- **Ch.4 — The Storm:** Violent ocean storm, rain lashing decks, lightning, emergency lights flickering, scattered clues on a table.
- **Ch.5 — Final Port:** Observation lounge, harbor city at dawn through windows, investigation board with photos and red string in foreground.
