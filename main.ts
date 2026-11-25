// One Word From Your Ex
// Writes the single word my ex would use to describe me to /output/entry.txt.
// "Rebound": painfully honest and specific — the word that stings because
// it is true, and fresher than the field's practice/almost/exhausting.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Rebound";

if (entry.length < 1 || entry.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${entry.length}`);
}

if (entry.trim().length === 0 || /\s/.test(entry)) {
  throw new Error("entry must be a single word with no spaces");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
