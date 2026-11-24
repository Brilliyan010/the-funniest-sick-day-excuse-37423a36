import { mkdirSync, writeFileSync } from "node:fs";

// One line, under 200 characters: a sick-day excuse that is half believable
// (a pulled muscle is a real reason to miss work), fresh (no fever, dog, or
// dead grandmother), and lands its laugh on the last words ("jars and
// Mondays"). Written as a real person typing a message to their boss.
const LINE =
  "Can't come in today \u2014 I pulled a muscle opening a jar of pickles and my physio says I'm banned from jars and Mondays.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
