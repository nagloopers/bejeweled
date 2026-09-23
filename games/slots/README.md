# Lucky Slots

A single-file, dependency-free neon slot machine. Three reels, five paylines,
wilds, a scatter, and an endless supply of **demo credits** — no real money, no
odds to beat but your own streak.

Open [`index.html`](index.html) directly, or play it from the portal at
`../../index.html` (card → `play.html?game=slots`).

## How it plays

- **3×3 grid, 5 paylines** — top, middle, bottom rows plus both diagonals.
  Pick how many lines to play (1–5) and your stake (1–50); total bet = lines × stake.
- **Symbols & pays** (multiplied by stake):

  | Symbol | 3 of a kind | 2 of a kind |
  | --- | --- | --- |
  | Wild (W) | ×100 | — |
  | Seven | ×40 | — |
  | Bell | ×25 | ×1 |
  | Diamond | ×15 | — |
  | Cherry | ×10 | ×2 |
  | Bar | ×8 | ×1 |
  | Star | ×5 | — |
  | Lucky clover (scatter) | 3+ anywhere: ×15, 4× ×40, 5× ×100, 6+ even more | — |

- **Wild** replaces any symbol (except Lucky). Each payline pays its best
  combination once; the scatter pays on any 3+ position in the grid.
- **Demo credits** — you start with 1,000 and they persist in `localStorage`.
  Run dry and a top-up (＋1,000) appears; `R` resets the balance anytime.
  Your **top single win** is also remembered.
- Reels spin with staggered deceleration and a little settle-bounce; wins get
  line highlights, particles, and a fanfare on big wins (≥ 20× bet).

## Controls

| Input | Action |
| --- | --- |
| `Space` / `Enter` / SPIN button | Spin |
| `←` / `→` or − + | Fewer / more lines (1–5) |
| `↑` / `↓` or − + | Lower / raise stake (1–50) |
| `P` | Toggle paytable |
| `M` | Mute / unmute (persisted) |
| `F` | Fullscreen |
| `R` | Reset balance to 1,000 |

Sound uses the Web Audio API and unlocks on the first pointer press.

## Architecture

One file, three layers:

1. **Pure core (no DOM)** — symbol table, pay tables, reel-strip weights,
   `makeStrip`, `evaluate(grid, lines, stake)` and the `reelPos` easing.
   Exported via `module.exports` under Node so it can be tested headlessly.
2. **Reel view** — one canvas; each reel is a 32-symbol strip drawn with a
   fractional offset (rows −1…3, clipped), motion-blur ghosts at speed, glass
   sheen, and vector-drawn symbols (7, bell, gem, cherries, BAR, star, wild,
   clover) with glow.
3. **Flow** — `startSpin → staggered reel anims → evaluate → present`
   (balance count-up, win-line pulse, particles, big-win state). Resizing is
   rAF-debounced and the machine refits its viewport, including inside the
   portal's full-viewport iframe.

Reel strips are weighted (cherries/bars most common, sevens and wilds rare)
and on every spin only the hidden cells are re-rolled — the cells the
window is showing (plus the peek rows) keep their symbols, so the grid never
pops and the new ones scroll in — so outcomes stay varied. It's a demo: the effective return hovers around 100% of bet —
tuned for fun, not for casinos.

## Portal integration

- The portal (`../../index.html`) links to `play.html?game=slots`, which loads
  this page in a full-viewport `<iframe>` (no sandbox; `allow="fullscreen"`).
- The in-game "Back to portal" link uses `../../index.html` with `target="_top"`.

## Testing

Extract the `<script>` from `index.html` and run a headless `node` suite:
`evaluate` line/scatter/wild cases, line-count limiting, and `reelPos`
(lands exactly on target, ~0.5-symbol settle bounce, never below start).
