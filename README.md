# The Battery's Last Text to Its Charger

[![The Battery's Last Text to Its Charger](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![Rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/yannyonn94/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![Reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/yannyonn94/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

**Concept:** the phone battery's final text, sent as a read-receipt message at 2:47 AM — spiteful, specific, and paid off in the last words. The charger charged the AirPods, the watch, even the toothbrush, and left the phone on 6% for 11 hours — so tomorrow there is no alarm either. 7 concrete details (2:47 AM, 1%, AirPods, watch, toothbrush, 6%, 11 hours) in 162 characters, one line. Winner of a 3-variant concept test (48/50).

**Entry (162 characters, one line):**

> Seen 2:47 AM. It's 1%. You charged the AirPods, the watch, even the toothbrush, and left me on 6% for 11 hours. Good luck waking up tomorrow. Oh wait — you won't.

## Run

`main.ts` (Node 22+) writes the entry to `/output/entry.txt` and checks the gate itself first: 1–200 characters, non-blank, single line.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program (writes `/output/entry.txt`)
- `README.md` — this dossier
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet
