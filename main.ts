// Entry generator: writes the one-line human review to /output/entry.txt.
// The review was chosen because it captures the relatable 2 a.m. "quick
// question" that turns into a novel — funny, human, and exactly one line.
// The three-star rating keeps the tone playful rather than bitter, so the
// review reads like a joke a real person would actually leave.
import { writeFileSync, mkdirSync } from "node:fs";

const REVIEW =
  "Prompts at 2 a.m., says 'quick question,' then sends a novel. I have not slept since March. Three stars.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW);
