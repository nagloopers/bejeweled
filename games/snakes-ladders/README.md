# Snakes & Ladders — Neon Jungle

A single-file, dependency-free snakes & ladders game with a creative twist: the classic
race re-imagined as a **crown race through a living neon jungle** — slithering snakes,
glowing ladders, portals, traps, coins and lightning, all re-weaved after every crown.

Open [`index.html`](index.html) directly, or play it from the portal at
`../../index.html` (card → `play.html?game=snakes-ladders`).

## How it plays

- **Classic rules** — roll the dice, move your piece, climb 🪜 ladders, slide down 🐍 snakes,
  land **exactly on 100** (overshooting bounces you back).
- **The twist: crown race** — reaching 100 earns a 👑, sends you back to the start, and the
  jungle **re-weaves**: all snakes and ladders regenerate fresh. First to **3 crowns** wins.
- **Wild tiles** — 🌀 portals teleport you anywhere, 💀 traps make you skip a turn,
  💰 coins pay +100 pts, ⚡ lightning grants a reroll.
- **Modes** — vs Cobra (CPU) or 2-player hot-seat. A 6 earns an extra turn.

## Controls

| Input | Action |
| --- | --- |
| Click die / Roll button / `Space` | Roll the dice |
| `M` | Mute / unmute (persisted) |
| `F` | Toggle fullscreen |
| `H` or `Esc` | Menu (pause) |
| `N` | New game (current mode) |

## Creatures & their animations

- **Snakes slither** — each snake's body undulates continuously (a travelling wave pinned to
  its tiles) and **writhe-faster while a piece slides down it**; tongues flick, scales shimmer,
  and a green wash marks the drop.
- **Ladders shine** — a glint of light runs up the rails on its own rhythm, rungs pulse,
  sparkles drift up the rails at all times, and climbing triggers a bright sparkle run + boost.

## Sound

Fully synthesized with Web Audio (no audio files): dice rattle, hop blips, ladder arpeggio,
snake hiss/slide, portal whoosh, coin clink, trap thud, lightning zap, crown fanfare,
re-weave chord, win/lose stingers — plus a very quiet jungle ambience (soft wind + sparse
firefly chimes) that starts on first interaction and obeys the mute button.

## Architecture

One file, layered:

1. **Pure game core** — DOM-free functions (`tileU`, `buildPath`, `genLayout`, `effectAt`,
   `resolveLanding`, `makeTrack`) delimited by `/*__LOGIC_START__*/` … `/*__LOGIC_END__*/`
   so they can be extracted and unit-tested headlessly.
2. **Creature geometry** — Catmull-Rom snakes, bowed ladders with rail/rung polylines and
   arc-length tracks (unit space, 1000×1000) for piece tweens and the slither/glint animation.
3. **Audio** — a small Web Audio synthesizer (`SFX`) with per-effect recipes and ambience.
4. **Async flow engine** — Promise-chained turn engine (roll → hop steps → landing chain →
   rerolls → hand-off) with a generation counter so restarts cancel in-flight animations.
5. **View** — CSS 3D dice, SVG creatures, canvas particle FX, HUD cards, responsive layout.

Scoring: +1 per hop, +15 ladder climb, −10 snake slide, +100 coin, +250 per crown.

Other features: responsive/mobile layout, confetti win, best-run record (localStorage),
paused-in-overlay CPU turns, and a `window.snakesLadders` hook
(`state`, `tileU`, `buildPath`, `genLayout`, `effectAt`, `resolveLanding`, `makeTrack`,
`snakeGeo`, `ladderGeo`, `SFX`, `startGame`, `showMenu`) for console/debug use.
