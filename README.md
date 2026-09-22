# 🕹️ Game Portal

A simple static showcase portal for your HTML games. No build step, no server required — just open `index.html` in a browser.

## Structure

```
bejeweled/
├── index.html        ← portal home (game grid)
├── play.html         ← full-screen player (loads a game in an iframe)
├── assets/
│   ├── games.js      ← manifest: list your games here
│   ├── portal.js     ← renders the grid
│   └── style.css
└── games/
    └── <name>/index.html   ← one folder per game
```

## How to add a game

1. Put your game in `games/<name>/` with its entry point at `games/<name>/index.html`.
2. Open `assets/games.js` and add an entry:

   ```js
   {
     slug: "bejeweled",                          // unique id (used in the play URL)
     title: "Bejeweled",                         // shown on the card
     description: "Swap gems to make matches.",  // optional
     src: "games/bejeweled/index.html",          // required
     cover: "games/bejeweled/cover.png",         // optional card image
     tag: "puzzle"                               // optional badge
   }
   ```

3. Reload the portal — the game appears on the grid. Click it to play in a full-screen iframe.

Notes:
- Use **relative paths** so it keeps working whether you serve the folder locally or copy it elsewhere.
- Games run in an iframe with `allow="fullscreen; gamepad; ..."` for keyboard/gamepad-based games.
- Order in `games.js` = order on the portal.
