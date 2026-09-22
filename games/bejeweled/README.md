# Bejeweled 3D

A single-file, dependency-free take on the classic: swap gems to build matches of
three or more, chain cascades, and trigger specials. 8×8 board, 6 gem types.

Open [`index.html`](index.html) directly, or play it from the portal at
`../../index.html` (card → `play.html?game=bejeweled`).

## How it plays

- **8×8 board, 6 colors.** Drag a gem, or tap two adjacent gems, to swap.
  A swap that forms no match snaps back.
- **Specials** (classic behavior):
  - 4 in a row → 💣 **bomb** — clears a 3×3 area.
  - 5+ in a row → ⚡ **jet** — clears its whole row and column.
  - L/T intersection (horizontal + vertical run through one gem) → 🌈 **rainbow** —
    swap it with a colored gem to clear every gem of that color (15×5 base value).
  - Swapping any special activates it; specials caught in a blast chain-detonate.
- **Cascades** — gravity refills the board after every clear and new matches keep
  resolving; each deeper step multiplies the score (×2, ×3, … capped at ×5).
- **Structure** — you get a fixed number of moves per level
  (`20 + 2·(level−1)`, capped at 40). Reach the cumulative score target
  (`250·lv·(lv+1)`) to level up (lives refilled); running out of moves costs a life.
  Three lost lives → game over, with your best score saved in `localStorage`.
- The board **always stays full**: a no-moves position auto-reshuffles (the
  reshuffle also avoids creating instant matches).

## Controls

| Input | Action |
| --- | --- |
| Drag / click a gem, then a neighbour | Swap |
| `H` or 💡 button | Hint (pulses one valid move) |
| `S` or 🔀 button | Shuffle the board |
| `M` or 🔊 button | Mute / unmute sound (persisted) |
| `F` or ⛶ button | Fullscreen the game |
| ↻ button / "Play again" | Restart |

Sound uses the Web Audio API and unlocks on the first pointer press.

## Architecture

One file, three layers:

1. **Pure core (no DOM)** — grid, `findRuns`, `planResolution`, `clearData`,
   `gravityData`, `buildGridNoMatches`, `findMove`, `swapData`, … Everything is
   deterministic data, so it can be exercised headlessly.
2. **View** — gem/cell DOM positioned with `transform: translate3d`; cosmetic
   animations (idle sway, pop, form, pulse) live on the inner `.gem-core` so they
   never fight the position transform.
3. **Flow** — an async/await state machine (`trySwap → resolveBoard → afterMove`)
   with a generation token, so a Restart mid-cascade cleanly aborts in-flight work.

**Board sizing** — `layout()` measures the available viewport, derives the cell
size (clamped to 26–66 px) and repositions every cell and gem; it runs on load and
on `resize` (rAF-debounced). Inside the portal's full-viewport iframe, resizes and
fullscreen propagate to the game's `window.resize` handler, so the board always
fills its table.

## Portal integration

- The portal (`../../index.html`) links to `play.html?game=bejeweled`, which loads
  this page in a full-viewport `<iframe>` (no sandbox; `allow="fullscreen"`).
- The in-game "Back to portal" link uses `../../index.html` with `target="_top"`.
- The game needs no messages from the parent: sizing is self-adaptive.

## Testing

The core is exported via `module.exports` when loaded in Node. Extract the
`<script>` from `index.html` and run a headless suite (board fullness after every
simulated step, cascade termination, special behavior, score/move curves) with
`node`. See the session scratchpad `test.js` for the current suite.
