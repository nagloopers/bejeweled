# Solitaire — Klondike

A single-file, dependency-free Klondike Solitaire game with drag-and-drop, click-to-move, undo, scoring, and timer.

Open [`index.html`](index.html) directly, or play it from the portal at
`../../index.html` (card → `play.html?game=solitaire`).

## How it plays

- **Klondike Solitaire** — the classic single-player card game.
- **7-column tableau** — cards are dealt face-down except the top card of each column.
- **Foundation piles** — build 4 suits from Ace to King in the top-right foundation area.
- **Stock & waste** — draw cards from the stock (top-left) to the waste pile. Redeal when empty.
- **Tableau moves** — place cards in alternating color and descending rank (e.g., 6♣ on 7♦).
- **Kings in empty columns** — only Kings (or sequences starting with Kings) can fill empty tableau columns.

## Controls

| Input | Action |
| --- | --- |
| Drag a card to another location | Move card |
| Click a card to select, then click destination | Click-to-move |
| Click stock pile | Draw a card |
| `A` or Undo button | Undo last move |
| `H` or Hint button | Hint (highlights valid moves) |
| `N` or New button | New game |
| `Space` | Draw from stock |
| `Esc` | Deselect the selected card |
| `Enter` | New game (on the win screen) |

## Architecture

One file, two sections:

1. **Game logic** — pure, DOM-free functions (deal, move validation, `applyMove`, `legalMoves`,
   `bestMove`, undo) delimited by `/*__LOGIC_START__*/` … `/*__LOGIC_END__*/` so they can be
   extracted and unit-tested headlessly. Multi-card runs validate the run's bottom card against
   the destination's top; only Kings (or runs led by Kings) may enter an empty column.
2. **UI** — DOM rendering with CSS positioning, pointer drag (with ghosts) and click-to-move,
   stock/redeal, hint, timer, win overlay with confetti, and keyboard shortcuts.

Both layers run under headless test suites; the page also exposes a `window.solitaire` hook
(`state`, `selected()`, `undoStack`, `newGame()`, `render()`, `legalMoves()`, `bestMove()`,
`canMove()`, `undoMove()`) for console/debug use.

Scoring: +10 per tableau placement, +10 per foundation placement, +5 per card flipped face-up,
−10 when pulling a card back from a foundation (the score never drops below 0). Stock draws and
re-deals count as moves but earn no points.

Other features: undo stack (50 moves), timer, confetti win animation, responsive design for
mobile, and a `cover.png` for the portal card.
