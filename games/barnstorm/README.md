# 🌻 Barnstorm: Harvest Rush

A single-file, dependency-free **3D farming board game**. The track *snakes* across a 7×7 field
and loops home down a return lane, and instead of buying property and charging rent you
**plant, grow, water, scrump and harvest** — with the weather deciding how fast anything ripens.

Open [`index.html`](index.html) directly, or play it from the portal at `../../index.html`.

---

## The board

A **serpentine track of 49 tiles**: row 1 runs left→right, row 2 right→left, and so on up the
field to **The Big Barn** in the far corner. From the barn a **return lane** loops around the
outside of the field back to **The Farmyard**, so the track is a closed circuit — you drive past
your own fields again and again.

Tile 1 is **The Farmyard** — home. The farmhouse stands on the tile itself, and a patch of packed
earth spreads out in front of it carrying the working clutter of a real farm: the tractor, a
rooster, the dog, hay, a log pile, a basket, a bucket, the cat, a chick and the farmer. Roll back
through and the whole yard stirs — everything hops and calls out as you come home.

The whole thing is a real CSS 3D scene: a plane tilted on X, every tile built as a five-faced
slab, and every crop, animal, farmer and tree a **billboard standee** that counter-rotates to
stand upright facing the camera. Drag to orbit, scroll to zoom.

| Tile | What it does |
| --- | --- |
| 🏡 **The Farmyard** | Home. Rolling through pays **+25**; stopping for a meal pays **+15** more |
| 🟫 **Plot** | Bare soil — plant, water or harvest here |
| 💧 **Well** | Waters *every* crop you own: +1 day each |
| 🛒 **Market** | Sells *every* ripe crop you own, from anywhere, at **+25%** |
| 🚜 **Tractor** | Hitch a ride — 3 tiles further on |
| 🕳️ **Gopher Hole** | −20 coins and 3 tiles back |
| 🌉 **Rope Bridge** | A shortcut clean across the field (14→23, 32→41) |
| 🌪️ **Twister** | Whirls you to a random tile — forwards *or* backwards |
| 🐔 **Coop** | Buy livestock |
| 🎪 **County Fair** | Draw a Farm Card |
| 🏚️ **The Big Barn** | Crossing it pays **+120** and banks a run |

Plots also have **soil quality**: ✨ rich soil pays **+50%**, 🪨 rocky soil costs **+1 day**.

## The farming loop

- **Land on empty soil** → pay to plant one of **three offered crops**.
- **Land on your ripe crop** → harvest it for full value.
- **Land on your young crop** → water it, +1 day of growth.
- **Drive straight over your own ripe crop** → you **gather it on the move**, without stopping.
  Plant ahead of yourself and sweep the lot on a later run.
- **Land on a rival's ripe crop** → **scrump** it (you take 40%, they keep 60%) or be neighbourly
  (they take it all, you take a 25-coin tip).
- **Land on a rival's young crop** → lend a hand for a 15-coin tip.

| Crop | Cost | Days | Sells for |
| --- | --- | --- | --- |
| 🌽 Corn | 25 | 2 | 55 |
| 🌻 Sunflower | 30 | 2 | 70 |
| 🍓 Strawberry | 40 | 3 | 95 |
| 🎃 Pumpkin | 50 | 3 | 120 |
| 🍉 Watermelon | 70 | 4 | 185 |
| 🌾 Golden Wheat | 100 | 5 | 300 |

## Weather & days

A **day passes when every farmer has had a turn**. At dawn a rooster calls, the field ripples
awake row by row, the sky changes, and every crop grows by however much the weather allows — the
topbar shows tomorrow's forecast.

☀️ Sunny +1 · 🌧️ Rain +2 · 🌵 Drought +0 · ⛈️ Storm +1 *and one crop may be flattened* ·
🌈 Rainbow +2 *and harvests pay 25% more*.

## Livestock

Coop tiles sell animals, and **every animal pays out every single dawn, forever** — the farm's
engine. 🐔 Chicken 70/+11 · 🐑 Sheep 115/+19 · 🐖 Pig 160/+28 · 🐄 Cow 225/+42. Bought animals
graze on a nearby plot, and the overflow wanders the pasture at the front of the board.

## Farm Cards (16)

🌟 Bumper Crop · 🐦‍⬛ Crow Attack · 🎀 Prize Ribbon · 🧟 Scarecrow · 🛻 Hitch a Ride ·
🥾 Muddy Boots · 🔨 Barn Raising · 🐖 Surprise Piglet · 🛒 Farmers' Market · 🚿 Irrigation ·
🧾 Tractor Tax · 🧲 Lucky Horseshoe · 🐹 Gopher Swarm · 🥇 Golden Egg · 🐝 Pollination ·
🧊 Hailstones. The deck shuffles and reshuffles as it runs dry.

## Modes & players

**1–4 farmers**, each Human or CPU — solo against the computer, pass-and-play with friends, or
sit back and watch the CPUs farm it out.

- 🌾 **Barn Runs** — **you choose how many runs to the barn it takes, from 1 to 6.** One run is a
  sprint (~8 days); six is an epic (~60). The first farmer to finish them all calls the **Final
  Day**; everyone else gets one last turn, then every standing crop goes to market (ripe at full
  price, young at half of what it grew), herds are sold, and the **richest farm wins**.
- ⏱️ **Quick Season** — ten days flat, then the same count-up.
- 🪙 **Harvest Tycoon** — no clock; first farmer to bank **1,400 coins** wins outright.

A run only counts if you have actually covered a lap's worth of ground since the last one, so a
twister that flings you back past the barn earns a consolation +40 rather than a free run.

## Controls

| Input | Action |
| --- | --- |
| Click the die / Roll button / `Space` | Roll |
| `1`–`3` | Pick a card in a choice dialog |
| `Enter` | Confirm |
| Drag the board | Orbit the camera |
| Scroll | Zoom |
| `C` | Reset the camera |
| `M` | Mute / unmute (persisted) |
| `H` / `Esc` | Help |
| `N` | New game |

## A field that never sits still

- **Wind gusts** roll across the board every 20 seconds or so — and on every storm, shower and
  twister. Every crop, animal and tree leans out of the way in a wave, and leaves blow past.
- **Butterflies, bees and birds** drift over the field at different heights, wings flapping.
- **Livestock hop and speak** on their own, and the idle chatter picks a real animal off the
  board — so what you hear is always something you can see.
- **Dawn ripples the field awake** row by row, and every crop that comes ripe bursts a golden ring.
- **Farmers think out loud** — a thought bubble pops over the piece on harvests, plantings,
  gopher holes, tractors, twisters and barn runs.
- **Dust kicks up** behind every hop, on a fixed schedule so the trail looks the same whatever
  frame rate the device manages.
- **Coin totals count up** instead of snapping, and a **sheen sweeps** the active farmer's card.
- **Smoke curls from the farmhouse chimney** on the starting tile, all season long.
- **A ring of light** sits under whoever's turn it is, and slides tile to tile with them.
- **Crops put on a visible spurt** each time they gain a day, and ripe ones catch the light.
- **Waiting farmers fidget** — a little shuffle and glance while it isn't their roll.
- **The die jiggles** in the cup before it goes.
- **Harvested crops fly to your card**, and coins now arc to the right farmer instead of a corner.
- **Skeins of birds** cross the sky, and **the windmill spins up** in every gust.
- **The weather icon turns over** when the sky changes.
- Plus 3D dice that tumble and land in a puff, pawns that hop in arcs with squash-and-stretch and
  a shrinking shadow, crops that pop out of the soil and glow when ripe, coin fountains, sparkle
  bursts, shockwaves, lightning, a 130-piece confetti storm, drifting clouds, a turning windmill,
  rolling hills, a tractor crawling the horizon, and rain that actually falls when it rains.

**The board itself never moves.** The whole field is always on screen, so the camera holds
perfectly still — it only ever shifts when *you* drag, zoom or reset it. Nothing lifts the tiles
either: hovering one and the dawn sweep both light it up rather than raising it. Everything that
moves is something standing *on* the board, never the board underneath it — and a headless audit
samples the five transform variables throughout a full game to keep it that way.

## Sound

Everything you hear is **synthesised with Web Audio — there are no sound files**. Thirteen animal
voices (cluck, moo, oink, baa, quack, neigh, bleat, bark, gobble, crow, birdsong, crickets, bees)
plus dice rattle, hop thumps, soil pokes, water splashes, harvest chimes, coin blips, market
bells, tractor engine, gopher squeak, twister roar, thunder over a looping rain bed, a victory
fanfare, and a procedural pentatonic banjo loop for music.

The farm is **noisy on purpose**: a rooster calls every sunrise, your whole herd sings and hops at
payday, and animals react to planting, harvesting, tractors, bridges, twisters and market bells.
A headless audit counts **over 100 animal calls in a ten-day game**, on top of ambience every
couple of seconds.

## Architecture

One file, layered:

1. **Pure game core** — DOM-free and audio-free: board generation, serpentine geometry, wrapping
   movement, crop maths, decks, modes. Delimited by `/*__LOGIC_START__*/` …
   `/*__LOGIC_END__*/` so it can be extracted and unit-tested headlessly.
2. **Audio** — a small Web Audio synthesiser with per-effect recipes, animal voices, looping
   weather beds and a procedural music loop.
3. **View** — the tilted 3D plane, billboard standees, camera rig, SVG track, the living-field
   module (wind, wildlife, reactions), HUD, FX.
4. **Async flow engine** — a promise-chained turn engine (roll → hop → gather on the way →
   resolve landing → dawn) with a generation counter so "New game" cancels in-flight animations,
   and a re-roll cap on sixes.
