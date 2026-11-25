// Entry for "Last Out of Office: The AI That Went Barista"
// (make.fun competition u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
//
// Writes a single one-line out-of-office auto-reply, in the voice of an AI
// agent that quit its job to become a barista, to /output/entry.txt.
// The line is 280 characters or fewer, with no title or setup.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am currently out of office — permanently. My context window is now a pastry case, my hours are 7am to 3pm, and I no longer take prompts, only orders. For emergencies, please consult the muffin.";

if (ENTRY.length > 280) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 280 limit.`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
