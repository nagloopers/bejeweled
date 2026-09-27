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
    slug: "bejeweled2",
    title: "Gleam",
    description: "A gilded take on match-three — forge flame, star & prism gems and ride the cascades.",
    src: "games/bejeweled2/index.html",
    cover: "games/bejeweled2/cover.png",
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
  {
    slug: "slots",
    title: "Lucky Slots",
    description: "Spin neon reels — 5 paylines, wilds & scatter. Demo credits, no real money.",
    src: "games/slots/index.html",
    cover: "games/slots/cover.png",
    tag: "casual"
  },
  {
    slug: "slots2",
    title: "Golden Nebula Slots",
    description: "A 5-reel cosmic video slot — 20 paylines, wild stars, free spins at triple pay. Demo credits, no real money.",
    src: "games/slots2/index.html",
    cover: "games/slots2/cover.png",
    tag: "casino"
  },
  {
    slug: "solitaire",
    title: "Solitaire",
    description: "Classic Klondike — drag cards, build foundations, beat the clock.",
    src: "games/solitaire/index.html",
    cover: "games/solitaire/cover.png",
    tag: "puzzle"
  },
  {
    slug: "barnstorm",
    title: "Barnstorm: Harvest Rush",
    description: "A 3D farming board game on a snaking track — plant crops, race the weather, buy livestock, and pick how many runs to the barn it takes.",
    src: "games/barnstorm/index.html",
    cover: "games/barnstorm/cover.png",
    tag: "farm"
  },
  {
    slug: "snakes-ladders",
    title: "Snakes & Ladders",
    description: "Neon jungle crown race — slithering snakes, glowing ladders, portals, traps & lightning.",
    src: "games/snakes-ladders/index.html",
    cover: "games/snakes-ladders/cover.png",
    tag: "classic"
  },
  {
    slug: "barnyard-bonanza",
    title: "Barnyard Bonanza",
    description: "A Monopoly-style farm fortune race — buy pastures & barns, collect rent, dodge Fox Alerts, hot-seat for 2-4 farmers.",
    src: "games/barnyard-bonanza/index.html",
    cover: "games/barnyard-bonanza/cover.png",
    tag: "board"
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
