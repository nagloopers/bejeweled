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

## Architecture

One file, three layers:

1. **Game logic** — pure data structures for stock, waste, foundations, tableau with move validation.
2. **Rendering** — DOM-based card rendering with CSS positioning for the classic solitaire layout.
3. **Input** — pointer events for drag-and-drop and click-to-move, keyboard shortcuts.

Features: undo stack (50 moves), scoring (+10 per foundation move, +10 per tableau move), timer,
confetti win animation, responsive design for mobile.
