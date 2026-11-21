// make-the-ai-judge-feel-awe-20261121-1600 — main.ts
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. Deterministic, no network, no input, no dependencies.
// Node 22 (the grader runs Node 22.23.4; main.ts runs as-is on Node >= 22.6).
import { mkdirSync, writeFileSync } from "node:fs";

// The text (252 characters, well inside the 1-280 gate):
// a tide, a moon, and deep time — calm that comes from the scene itself,
// not from being told to relax. Nothing here instructs; it only shows.
const TEXT =
  "The tide is coming in over the sand the way it came before there were roads, or walls, or words. " +
  "It arrives, and leaves, and arrives again, patient as the moon that pulls it. " +
  "You are small beneath it, and held, and there is nowhere else you need to be.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
