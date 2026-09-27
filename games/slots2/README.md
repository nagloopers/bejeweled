# Golden Nebula Slots

A single-file, dependency-free cosmic video slot. Five reels, three rows, **20
paylines**, **wild stars**, and a **free-spins** bonus that pays at **triple** —
all on an endless supply of **demo credits**. No real money, no stakes: a space
cocktail of reels tuned for fun (theoretical RTP ≈ 96%).

Open [`index.html`](index.html) directly, or play it from the portal at
`../../index.html` (card → `play.html?game=slots2`).

## How it plays

- **5 reels × 3 rows, 20 paylines.** Line wins pay left to right from the first
  reel; each line pays its best hit and wins on different lines add up.
- **Symbols** — seven, star, gem, bar, bell, and a cosmic **scatter** (the planet).
  **Wild stars** substitute for any symbol except the scatter.
- **Free spins** — land 3+ scatters to trigger **10 free spins**, every win paying
  **×3**.
- **Demo credits** — you start with 1,000. Run dry and a top-up (＋1,000) appears;
  **Reset balance** refills any time. Balance and your top single win persist in
  `localStorage`.
- Reels settle with a stagger; a **Big Win** lights up a full-screen burst on big
  hits.

## Controls

| Input | Action |
| --- | --- |
| `Space` / `Enter` / `Esc` or **SPIN** | Spin — press again to stop the reels early |
| − / + | Lower / raise the total bet |
| ↻ (auto) | Autoplay — 10 / 25 / 50 / 100 / 250 / ∞ |
| ⚡ (turbo) | Fast spins (toggle) |
| 🔊 (sound) | Mute / unmute (persisted) |
| `i` (info) | Paytable & rules |
| **Reset balance** | Refill to 1,000 |

Sound uses the Web Audio API and unlocks on the first pointer press.

## Architecture

One file, no build step. Reels are styled `<div>` strips moved by a fractional offset
(with motion-blur ghosts and a glass sheen); line highlights, particles and win FX
run on a `<canvas>` layer, and the 20 paylines are drawn with an inline `<svg>`.
Outcomes come from a weighted symbol table and are independent on every spin. The
cabinet refits the viewport on load and resize, so it fills the portal's full-viewport
`<iframe>`.

## Portal integration

- The portal (`../../index.html`) links to `play.html?game=slots2`, which loads this
  page in a full-viewport `<iframe>` (`allow="fullscreen; autoplay"`).
- `play.html` provides the **← Back to portal** and **Fullscreen** controls; the
  machine needs no messages from the parent because it sizes itself.
