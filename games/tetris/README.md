# Tetris

A single-file, dependency-free, guideline-faithful take on the classic: 10×22
board (2 hidden rows), 7-bag randomizer, SRS wall kicks, hold, ghost, T-spins,
combos and back-to-backs.

Open [`index.html`](index.html) directly, or play it from the portal at
`../../index.html` (card → `play.html?game=tetris`).

## How it plays

- **10×22 board** — the top 2 rows are hidden (pieces spawn there); only the
  bottom 20 are rendered.
- **7-bag** — every piece is drawn from a shuffled bag of all 7 tetrominoes;
  the next 3 are previewed on the right.
- **SRS rotation with wall kicks** — each 90° transition tries the standard SRS
  kick table (I-piece table for I, the default table for the rest) in order.
- **Hold** (`C`/`Shift`) — swap the current piece with the hold slot, allowed
  once per piece; holding into an empty slot pulls the next piece.
- **Ghost piece** — a translucent outline shows where the piece will land.
- **Timing** — auto-shift starts after a 150 ms DAS delay and repeats every
  40 ms; a grounded piece gets a 500 ms lock delay, and each move/rotate resets
  it (up to 15 times; dropping a row cancels the allowance).
- **Gravity & levels** — level = `⌊lines/10⌋ + 1`; the fall interval follows
  the guideline curve `(0.8 − (lvl−1)·0.007)^(lvl−1)` seconds per row
  (clamped at 0.01 s), so it ramps from a lazy ~1 s/row to a blur.
- **Scoring** (× level):

  | Action | Points |
  | --- | --- |
  | Single / Double / Triple / Tetris | 100 / 300 / 500 / 800 |
  | T-spin (no lines) / T-spin single / T-spin triple | 100 / 800 / 1600 |
  | Combo | +50 × combo counter |
  | Back-to-back (Tetris or T-spin after one) | ×2 |
  | Soft drop / Hard drop | 1 / 2 per row |

- **T-spins** — detected on lock when 3 of the 4 corners around the T's center
  are filled (or out of bounds); a 2-corner "mini" that needed a wall kick also
  counts.
- **Game over** — either the new piece spawns into an occupied cell (top-out)
  or a piece locks with all of its cells in the hidden rows (lock-out).
  Your best score/lines/level are saved in `localStorage` under `tetris.best`.

## Controls

| Input | Action |
| --- | --- |
| `←` / `→` | Move (DAS 150 ms, ARR 40 ms auto-repeat) |
| `↓` | Soft drop (1 pt/row) |
| `↑` or `X` | Rotate clockwise |
| `Z` | Rotate counter-clockwise |
| `Space` | Hard drop (2 pts/row) |
| `C` or `Shift` | Hold |
| `P` or `Esc` | Pause / resume (also on window blur) |
| `M` or 🔊 button | Mute / unmute sound (persisted) |
| `F` or ⛶ button | Fullscreen the game |
| `Enter` | Start / play again |

On coarse-pointer devices a touch pad appears: `◀ ▼ ▶` on the left,
`⤓ hold · ⟳ rotate · ⏬ hard drop` on the right.

Sound uses the Web Audio API (all SFX are synthesized) and unlocks on the
first pointer press.

## Architecture

One file, three layers:

1. **Pure core (no DOM)** — `SHAPES`/`BOX`/SRS kick tables, `collides`,
   `newBag`/queue, the `G` game state, `lockPiece`/line-clear/`finishClear`,
   scoring and the `newGame`/`gameOver`/pause lifecycle. Everything is
   deterministic data and functions, so it can be exercised headlessly.
2. **View** — DPR-aware canvas rendering for the board, hold and next panels:
   glossy gradient blocks with glow, ghost outline, line-clear flash, score
   popups, starfield background.
3. **Flow** — a `requestAnimationFrame` loop drives DAS/ARR auto-repeat,
   gravity, the lock delay and the 0.3 s clear animation; `menu | playing |
   paused | over` overlays sit on top of the board.

**Board sizing** — `layout()` measures the viewport, derives the cell size
(clamped to 16–64 px) and resizes the canvases; it runs on load and on
`resize`. Inside the portal's full-viewport iframe, resizes and fullscreen
propagate to the game's window handlers, so the board always fills its table.

## Portal integration

- The portal (`../../index.html`) links to `play.html?game=tetris`, which loads
  this page in a full-viewport `<iframe>` (no sandbox; `allow="fullscreen"`).
- The in-game "← Portal" link uses `../../index.html` with `target="_top"`.
- The game needs no messages from the parent: sizing is self-adaptive.

## Testing

The page's `<script>` is browser-agnostic enough to run in Node: a harness
stubs `document`, `AudioContext`, `localStorage`, `requestAnimationFrame` and
friends in a `vm` context, runs the whole script, then appends the checks.
Run `node tetris_harness.js <path-to-index.html>` (see the session scratchpad
for the current suite — 12 checks: rotation-state consistency, kick-table
completeness, new-game sanity, controlled single/Tetris/T-spin scoring,
top-out on spawn, lock-out, hold semantics, a 5000-piece simulated random
game, 7-bag permutation across consumed bags, and best-score persistence).
