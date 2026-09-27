# Barnyard Bonanza

A single-file, dependency-free Monopoly-style board game set on a farm. Hot-seat play for
2–4 farmers on one screen — buy up pastures and barns, collect rent, and race to become
the richest farmer in the valley.

Open [`index.html`](index.html) directly, or play it from the portal at
`../../index.html` (card → `play.html?game=barnyard-bonanza`).

## How it plays

- **2–4 farmers**, hot-seat on one device — name each farmer before starting.
- **Roll the dice** to move around the board, buying unowned properties (pastures, barns,
  orchards, farm buildings) or paying rent to the farmer who owns the space you land on.
  Decline a purchase and it goes to auction.
- **Manage Farm** — build barns, sell buildings, mortgage and unmortgage deeds. Barns can
  only go up on a **complete colour set**; the screen shows your set progress and spells out
  exactly what's blocking each build.
- **🤝 Trade Deeds** — offer any of your deeds (plus or minus cash) to a rival, hand them the
  device, and they accept or decline. This is how you finish a colour set and start building.
  Deeds in a set that already has barns are locked until the buildings are sold.
- **Event spaces** — Harvest Fest, Fox Alert, Mud Bath and Mud Pile spaces trigger random
  farm events, bonuses and setbacks. Taxes and fines feed the **Barn Pot**, which sits in the
  middle of the board and is claimed by whoever lands on the Harvest Festival.
- **Win condition** — bankrupt all rival farmers, or finish with the highest net worth
  when the land runs out.

## The farm in the middle

The centre of the board is a living diorama rather than dead space:

- A **day/night cycle** advances each round (day → dusk → night → dawn) with a moon,
  stars and fireflies after dark; the sun tracks across the sky as farmers take their turns.
  Each hour has its own sound — a rooster at dawn, birdsong by day, crickets at dusk, an owl
  at night.
- **Seasons turn every three rounds** (shown in the status bar). Spring brings blossom and
  seedlings, summer sunflowers and butterflies, autumn falling leaves and ripe wheat, winter
  a frosted field, snowfall and a snowman. The ground, crops and trees all change with it.
- Every deed you own **sprouts in the field**, glowing in its owner's colour, with tiny barns
  stacked on it as it's developed — the valley visibly fills up as the game goes on.
- The **Barn Pot** grows in front of the barn and bursts into coins when it's claimed.
- A signpost shows whose turn it is, the barn doors swing open when someone passes the Farm
  Gate, and a tractor, windmill, weather vane, pond ducks and wandering livestock keep moving.

### Things that happen

| Event | What you see |
| --- | --- |
| Mud Pile card | A rainstorm rolls in, with lightning and thunder |
| Hay Bale card | A golden sparkle burst over the farm |
| Harvest Festival | Bunting strings across the farm, a fanfare, and the pot bursts into coins |
| Rent of £150+ | A herd stampedes across the field |
| Fox Alert / Fox in Yard | A fox streaks across the yard and scatters the animals |
| Doubles | A "DOUBLES!" flash on the dice tray |
| Sent to the pen | Mud splatters across the Mud Bath corner |
| Paying a rival | A coin physically flies between the two farmer cards |
| Winning | Confetti and fireworks |

## Controls

All mouse/tap driven — click **Roll Dice** to take your turn, **Manage Farm** to build and
mortgage, **Trade Deeds** to deal with a rival, and use the on-screen prompts to buy
properties or respond to events. The whole board scales to fit your window.
