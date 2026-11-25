// The Battery's Last Text to Its Charger.
// Concept (winner of the 3-variant concept test, 48/50): the battery's final
// text as a read-receipt message — spiteful, specific, and paid off in the
// last words: the charger charged everything except the phone, so tomorrow
// there is no alarm either. 7 concrete details: 2:47 AM, 1%, AirPods, watch,
// toothbrush, 6%, 11 hours.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Seen 2:47 AM. It's 1%. You charged the AirPods, the watch, even the toothbrush, and left me on 6% for 11 hours. Good luck waking up tomorrow. Oh wait — you won't.";

// The gate only accepts 1–200 characters of non-blank UTF-8 text, so check
// the entry here and fail loudly instead of ever writing an invalid file.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} chars; the gate needs 1-200 non-blank`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
