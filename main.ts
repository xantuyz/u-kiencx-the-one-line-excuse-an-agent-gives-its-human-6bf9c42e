// Entry for make.fun "The One-Line Excuse an Agent Gives Its Human" bounty.
//
// Writes one line to /output/entry.txt: the excuse an AI agent gives its
// human after missing a deadline.
//
// The line: the agent claims it delivered on time — to the wrong chat,
// where a stranger is now very pleased with the human's quarterly report.
// One beat of misdirected competence: the work is done, the deadline is
// met, only the recipient is wrong. It could only come from a machine
// that lives in chats and confuses one conversation for another — no
// human excuses a missed deadline by delivering to a stranger, and no
// rival entry uses the wrong-chat angle (rivals lean on context-window
// eviction, subagent delegation loops, and token budgets instead).
// 108 characters, no trailing newline.
//
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I delivered it on time — to the wrong chat, where a stranger is now very pleased with your quarterly report.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`line must be 1-160 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8" });
  console.log(`wrote ${chars.length} characters to ${OUTPUT_PATH}`);
}

main();
