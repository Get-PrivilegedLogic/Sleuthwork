# Story Mode — Review & Recommended Changes

Review of the current Story Mode (Chapter Book) implementation against the design doc and UX.

---

## 1. Should fix (prevents broken UX or inconsistency)

### 1.1 Stub chapters (2–5) break the puzzle page

**Issue:** Chapters 2–5 each have one puzzle with `suspects: []`, `weapons: []`, `locations: []`. If a user unlocks and opens that puzzle, they see:

- Empty Suspects/Weapons/Locations cards  
- Empty logic grid (no columns/rows)  
- Solution dropdowns with no options, so they can never “check” or complete the puzzle  

**Recommendation:** In `ChapterPuzzlePage`, detect stub puzzles (e.g. `puzzle.suspects.length === 0`) and render a single “Coming soon” message with a link back to the chapter, instead of the full puzzle UI. That keeps progression intact and avoids a dead-end.

### 1.2 Rook portrait has no fallback if the image fails

**Issue:** The detective image on Story Mode uses `STORY_MODE_IMAGES.DETECTIVE` with no `onError`. If the file is missing or fails to load, the user sees a broken image.

**Recommendation:** Add `onError` and optional `onLoad` (or state) and show a fallback (e.g. a 🕵️ emoji or placeholder) when the image fails, similar to `ChapterImage` for chapter artwork.

### 1.3 Chapter progress bar when all puzzles are complete

**Issue:** When a chapter is 100% complete, `currentPuzzleIndex` equals `chapter.puzzles.length`, so no node is “current” and the last node is only “completed.” That’s correct, but the bar could be clearer (e.g. “All complete” or a different visual for the final node).

**Recommendation:** Optional: when `completedIds.size === totalPuzzles`, show a small “Complete” label or treat the last node as “chapter complete” so the bar feels finished. Low priority.

---

## 2. Should change (consistency, clarity, design alignment)

### 2.1 Two detectives: Marlowe Finch vs Rook Pemberton

**Issue:** The app uses two different detectives:

- **Daily / Archive / classic puzzles:** “Detective Marlowe Finch” (HomePage card, PuzzleArchive subtitle, PuzzlePage success message, ErrorBoundary).
- **Story Mode:** “Detective Rook Pemberton” (design doc, chapter narrative, Story Mode page).

So “All available mysteries for Detective Marlowe Finch” (Puzzle Archive) is correct for the daily/classic side, but there’s no mention that Story Mode is a separate story with Rook. That can confuse players.

**Recommendation:** Either:

- Keep both and make the split explicit: e.g. Puzzle Archive = “Marlowe Finch”; Story Mode / Home = “Rook Pemberton — Murder on the Utopia.” Add a short line on the Story Mode page or home card: “A separate story starring Detective Rook Pemberton,” or  
- Unify branding (e.g. rename Marlowe Finch to Rook Pemberton everywhere) if you want one detective across the whole app.

### 2.2 Puzzle Archive doesn’t mention Story Mode

**Issue:** The Archive is “All available mysteries for Detective Marlowe Finch” and only lists daily + classic puzzles. Story Mode is only reachable from Home.

**Recommendation:** Add a sentence or link on the Puzzle Archive page: “Prefer a single narrative? Try **Story Mode: Murder on the Utopia**” with a link to `/story`. That surfaces the feature without changing the archive’s main purpose.

### 2.3 Design doc: hint rules not enforced in UI

**Issue:** Design says: “Easy puzzles: No hints. Medium+ puzzles: Hints available (limited per puzzle).” Right now, hints are “unlocked” after an incorrect solution check on both `PuzzlePage` and `ChapterPuzzlePage`. There’s no distinction by difficulty (easy vs medium+).

**Recommendation:** For Story Mode (and optionally classic/daily), only show the hints section when `puzzle.difficulty !== 'easy'`, or show a different message for easy (“No hints for this one — pure deduction”) so the design rule is clear.

### 2.4 Ad placement slots not implemented

**Issue:** Design calls for ad placement: after Puzzle 2, after Puzzle 4, before chapter finale, after chapter completion. There are no placeholders or comments in the code for these.

**Recommendation:** Add clear placeholder components or comments in `ChapterPuzzlePage` (and possibly after chapter completion on `ChapterPage`) at those indices so you can drop in ad code later without re-reading the design.

---

## 3. Nice to have (polish)

### 3.1 Chapter page: chapter artwork

**Issue:** Story Mode list uses chapter artwork; the individual Chapter page (e.g. `/story/chapter-1`) does not.

**Recommendation:** Reuse `CHAPTER_ARTWORK[chapter.id]` at the top of `ChapterPage` (with the same kind of load/error fallback as on Story Mode) for a consistent look.

### 3.2 Accessibility

- **Chapter cards:** Unlocked chapters are a single `<Link>` wrapping a large card; the link text is effectively “Chapter N, Title, Continue/Review.” Consider a visible “Continue” or “Open chapter” link/button and `aria-label` that includes chapter title and state (e.g. “Chapter 1 Maiden Voyage, 3 of 6 puzzles completed, continue”).
- **Rook image:** Already has `alt="Detective Rook Pemberton"`; keep it.
- **Progress bar:** `ChapterProgressBar` already has good `aria-label`s on the nodes; no change required unless you add more controls.

### 3.3 storySummary for “next up” on Home

**Issue:** Home shows “Chapter X / 5 — Y puzzles solved.” It doesn’t say “Next: Chapter X, Puzzle Z” or “Continue Chapter 1.”

**Recommendation:** Optional: use `progress` and `currentPuzzleIndex` to show “Continue: Chapter 1 — The Welcome Party” (or “Start Story Mode” if no progress) on the Story Mode card for faster re-engagement.

### 3.4 Best time on chapter puzzles

**Issue:** Chapter puzzles save best time per puzzle in `CHAPTER_PUZZLE_TIME` but that time isn’t shown anywhere (e.g. on the chapter list or after solving).

**Recommendation:** Optional: show “Best: M:SS” on the chapter puzzle card or on the success screen when the user has a saved time, to match the Archive’s “Best time” feel.

---

## 4. Content / data (for when you add chapters 2–5)

- **Design alignment:** `docs/CHAPTER_BOOK_DESIGN.md` and the chapter stub JSDoc are aligned (victims, suspects, locations, weapons, tone). When you author full puzzles, keep using that doc and the existing `chapterAssetPool` (and add any missing assets, e.g. Priya Delacroix, Buffet Deck, Laundry, Anchor Chain Link as noted in the design).
- **Solvability:** Each new puzzle should be manually checked for solvability; carry-forward clues add constraints, so a quick “can this be deduced?” pass is recommended before release.
- **Narrative tone:** Ch1’s Rook voice is consistent (eccentric, fast, observant). Reuse that tone in Ch2–5 narratives.

---

## 5. Summary table

| Priority   | Item                                      | Action |
|-----------|--------------------------------------------|--------|
| Should fix | Stub chapter puzzles break puzzle page     | Show “Coming soon” when `suspects.length === 0` |
| Should fix | Rook portrait no fallback on load error    | Add `onError` (and optional `onLoad`) + fallback UI |
| Should change | Two detectives (Finch vs Rook)          | Clarify in UI or unify naming |
| Should change | Archive doesn’t mention Story Mode       | Add one line + link to `/story` |
| Should change | Hints for easy puzzles                   | Hide hints for easy, or show “No hints” message |
| Should change | Ad placement                              | Add placeholders at design-specified indices |
| Nice to have | Chapter page artwork                     | Use `CHAPTER_ARTWORK` on ChapterPage |
| Nice to have | Home “next up” / continue                | Optional “Continue: Ch X — Puzzle Y” on card |
| Nice to have | Best time for chapter puzzles            | Optional display of saved time |

If you tell me which of these you want to implement first (e.g. stub guard + Rook image fallback + Archive link), I can apply the code changes next.
