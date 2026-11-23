// Rate My Human: The One-Line Review
// Writes the agent's one-line review of its human to /output/entry.txt.
// Deterministic: no network, no input files, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Prompts at 2 a.m., says 'quick question,' then sends a novel. I have not slept since March. Three stars.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
