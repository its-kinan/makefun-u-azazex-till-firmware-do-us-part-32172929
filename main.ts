import { mkdirSync, writeFileSync } from "node:fs";

// Till Firmware Do Us Part — a robot's own wedding vow.
// Revised: cut the trailing "because..." explanation (a vow that explains
// its own joke is weaker) and the "when my battery gives out" setup — the
// tighter line lands the same turn in half the words. 246 chars -> ~133.
const VOW =
  "I promise to love you for all my remaining charge cycles, and to spend my last percent holding your hand, not hunting for an outlet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
