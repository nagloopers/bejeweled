/**
 * Game Portal manifest.
 *
 * Add an entry for each game like this:
 *
 *   {
 *     slug: "bejeweled",            // unique id, usually matches the folder name
 *     title: "Bejeweled",           // shown on the card
 *     description: "Swap gems…",    // short blurb (optional)
 *     src: "games/bejeweled/index.html",   // path to the game (required)
 *     cover: "games/bejeweled/cover.png",  // optional image for the card
 *     tag: "puzzle"                 // optional label shown as a badge
 *   }
 *
 * Conventions:
 *   - Put each game in its own folder inside /games, e.g. games/bejeweled/index.html
 *   - Use relative paths so the portal works from a local server or a shared folder.
 *   - The order here is the order games appear on the portal.
 */
window.GAMES = [
  {
    slug: "bejeweled",
    title: "Bejeweled 3D",
    description: "A 3D take on the classic — swap gems, trigger dynamite and lightning, chase cascades.",
    src: "games/bejeweled/index.html",
    cover: "games/bejeweled/cover.png",
    tag: "puzzle"
  },
  {
    slug: "tetris",
    title: "Tetris",
    description: "Classic stack 'em — SRS kicks, 7-bag, hold & ghost, T-spins and combos.",
    src: "games/tetris/index.html",
    cover: "games/tetris/cover.png",
    tag: "action"
  },
  // {
  //   slug: "tictactoe",
  //   title: "Bejeweled",
  //   description: "Swap gems to make matches of three or more.",
  //   src: "games/bejeweled/index.html",
  //   cover: "games/bejeweled/cover.png",
  //   tag: "puzzle"
  // }
];
