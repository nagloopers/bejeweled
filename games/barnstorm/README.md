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
| ⚙️ **The Old Mill** | Dead centre of the field — grinds every ripe crop you own at **+60%** |
| 🎪 **County Fair** | Draw a Farm Card |
| 🏚️ **The Big Barn** | Crossing it pays **+120** and banks a run |

Plots also have **soil quality**: ✨ rich soil pays **+50%**, 🪨 rocky soil costs **+1 day**.

## The middle of the field

Tile 25 — the exact centre of the serpentine, and the hardest square on the board to land on by
design — is **The Old Mill**. It is not an emoji: it is a real windmill built out of divs, with a
stone tower, a red cap, a lit window, a rooster weathervane and **four latticed sails that never
stop turning**, throwing a turning shadow across the soil beneath them.

- The sails **turn at the speed of the weather** — barely moving in a drought, lazy in sun,
  brisk in rain, and whipping round in a storm. You can read the forecast from across the board.
- **Roll past it** and the miller works the sails up for you as you go.
- **Land on it** and the millstones grind: the sails race, the tower judders, the window blazes,
  flour billows out of the door, and **every ripe crop you own is milled into flour at +60%** —
  the best price on the farm, better than the market's +25%.
- Nothing ripe? Sweep the millstones for the miller and pocket **+40**.

Every other bare plot now carries something small of its own, too — daisies, a mushroom, a stone,
a ladybird, a snail — which vanishes the moment you plant there and comes back when the field is
cleared.

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

- **Barnstorming.** Every half minute or so a **biplane beats up the farm** — it crosses the sky
  trailing a ribbon of smoke, drags its **shadow across the tilted field** below, and often rolls
  into a **loop-the-loop** over the mill while the whole yard stops to look up. It flies a victory
  pass when someone calls the Final Day, and two when the season is won.
- **The Old Mill turns all game**, at the speed of the weather, and grinds in a shaking, blazing,
  flour-belching fit when someone lands on it.
- **Rain lands where you can see it** — rings of splash spread over the tiles all through a shower,
  and harder in a storm.
- **Lightning forks over the hills**, a real jagged bolt, not just a white flash.
- **Dust devils skitter across parched ground** in a drought, and the soil bed cracks.
- **The tractor tile actually tows you** — a tractor hitches on behind your piece, jiggling and
  blowing smoke, for the whole three-tile ride.
- **The gopher shows its face**, popping out of the hole to watch you tumble backwards.
- **The twister is a funnel you can see**, spinning up on the tile before it takes you.
- **Crows drop in** on a field that has just been scrumped.
- **A six lights up the die** in a burst of gold and sparks.
- **Wind gusts** roll across the board every 20 seconds or so — and on every storm, shower and
  twister. Every crop, animal and tree leans out of the way in a wave, and leaves blow past.
- **The wildlife is built, not borrowed.** Butterflies, bees, dragonflies and swallows are made
  of divs — a body, a head, antennae, and wings **hinged on the body that swing about the Y axis**,
  so they fold and open in real perspective instead of being a flat sprite that squashes. Each one
  **drags its own shadow across the soil**, swelling and darkening as it drops towards the field,
  which is what actually sells the height. They lean into their turns as they wander.
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

**Pacing lives in one place.** How fast a piece hops, how long the gap between hops is, how far a
shove carries and how long a flight takes are all constants in a single `MOVE` object, because that
is the one knob that decides whether a turn feels brisk or frantic. Pieces move at a pace you can
actually follow.

**The board itself never moves.** The whole field is always on screen, so the camera holds
perfectly still — it only ever shifts when *you* drag, zoom or reset it. Nothing lifts the tiles
either: hovering one and the dawn sweep both light it up rather than raising it. Everything that
moves is something standing *on* the board, never the board underneath it — and a headless audit
samples the five transform variables throughout a full game to keep it that way.

## Sound — a farm you are standing in the middle of

Everything you hear is **synthesised with Web Audio — there are no sound files**. Eighteen animal
voices (cluck, moo, oink, baa, quack, neigh, bleat, bark, gobble, crow, goose honk, donkey bray,
wood-pigeon coo, cowbell, birdsong, crickets, bees, a tractor working a field two hedges over)
plus dice rattle, hop thumps, soil pokes, water splashes, harvest chimes, coin blips, market
bells, tractor engine, gopher squeak, twister roar, thunder over a looping rain bed, the low
grind of the millstones, the rising-and-falling drone of a biplane passing overhead, a victory
fanfare, and a procedural pentatonic banjo loop for music.

The ambience is a proper soundscape rather than a list of effects:

- **An outdoor bed runs the whole time** — brown noise through a low-pass, breathing on a very
  slow LFO. It is the thing you stop hearing after ten seconds and miss the moment it stops. It
  ducks under a shower and gets out of the way entirely in a storm.
- **Every call is placed.** Each voice goes through its own gain and stereo panner, and when the
  sound belongs to something on the board — your cow, the dog in the yard, a goose on the verge —
  **the pan and the distance are read straight off where it is standing**. You hear the cow where
  the cow is.
- **Call and response.** Better than half of all calls are answered from the other side of the
  field a beat later, by something that would plausibly answer: a cow gets a cowbell, a goose gets
  a goose, a rooster sets the dog off. That is the whole trick — it is what stops a farm sounding
  like a playlist.
- **The whole yard kicks off** every half minute or so, and on a barn run.
- **Dawn is a dawn chorus** — a rooster, an answer from the far side, then seven birds waking up
  across the stereo field, then the herd.
- **The weather stirs them.** A storm winds the animals up and brings them closer; rain and
  drought settle them down.
- Animals still hop when they speak, so **what you hear is always something you can see**.

A headless audit counts **42 placed animal calls in thirty seconds**, spread across the full
stereo field, on top of the bed, and an offline render of the whole synth measures a peak of 0.83
with real left/right separation and no clipping.

**Silence is never a mystery.** Browsers only start audio from a real gesture, and a context can
sit suspended long after the first click — or, on iOS, be interrupted by a call and never come
back. So every pointer, touch and key press gets a free attempt to wake it, returning to the tab
retries, and if the sound is still blocked a moment into the season the game says
*"click anywhere to turn the sound on"* and the 🔊 button shows it. Every value reaching an audio
parameter is scrubbed first, because one NaN poisons everything downstream of it.
<kbd>M</kbd> mutes everything; 🎵 toggles just the music — and if you start a season muted, the
game says that too.

**If it is still silent, the game will tell you why.** *How to play* has a **🔎 Test the sound**
button that taps the master bus with an analyser, plays a tone through the normal path, and
measures what actually came out. It distinguishes the four real cases — no Web Audio, no output
device, a context the browser is holding back, and a game that is genuinely producing signal — and
in the last case points at the mute below us: the tab, the system volume, or the output device.
The help footer also carries a build stamp, so "is my browser running the new file?" is answerable
by looking.

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
