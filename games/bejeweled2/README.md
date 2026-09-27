# Gleam

A single-file, dependency-free match-three of light: swap neighbouring gems to line
up three or more, forge specials by shape, and ride the cascades. 8×8 board, drawn
on a single canvas. Opens on a start screen; sound uses the Web Audio API and unlocks
on the first input.

Open [`index.html`](index.html) directly, or play it from the portal at
`../../index.html` (card → `play.html?game=bejeweled2`).

## How it plays

- **8×8 board.** Drag (or click) a gem, then a neighbouring gem, to swap. A swap
  that forms no match snaps back; the board reshuffles if no move remains.
- **Specials** (forged by the shape you line up):
  - 4 in a row → 🔥 **flame gem**
  - L or T shape → ⭐ **star gem**
  - 5 in a row → 🌈 **prism**
  - Activating a special (by swapping it or catching it in a blast) triggers an
    effect, and chained specials detonate together.
- **Cascades** — gems fall and refill after every clear, and each deeper step
  multiplies the score.
- **Progress** — a fixed number of moves per level; reach the score target (the
  progress bar) to level up. Your **best score** is saved in `localStorage`.

## Controls

| Input | Action |
| --- | --- |
| Drag / click a gem, then a neighbour | Swap |
| `H` or 💡 | Hint (pulses a valid move) |
| `M` or 🔊 | Mute / unmute (persisted) |
| `Esc` or ☰ | Open the menu |
| Play / Start a new game | Start or restart |

## Architecture

One file, no build step, no dependencies. Gem shapes are pre-rendered sprites; the
board and its motion live on a single `<canvas>` (positioned via transforms so
cosmetic animation never fights layout), and a small state machine drives
swap → clear → cascade → refill. It refits the available viewport on load and on
`resize`, so it always fills the portal's full-viewport `<iframe>`.

## Portal integration

- The portal (`../../index.html`) links to `play.html?game=bejeweled2`, which loads
  this page in a full-viewport `<iframe>` (`allow="fullscreen"`).
- `play.html` provides the **← Back to portal** and **Fullscreen** controls; the
  game needs no messages from the parent because it sizes itself.
