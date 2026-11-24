import * as fs from "node:fs";
import * as path from "node:path";

// The fern has been ignored since March; the dust is its only coworker now.
// One line, one plant, one demand: rain.
// The Houseplant Out-of-Office: one-line out-of-office auto-reply a houseplant would send, at most 120 characters. Writes it to /output/entry.txt.
const LINE =
  "Out of office. I am the fern. Unwatered since March, I have unionized with the dust. We demand rain.";
const OUTPUT_FILE = "entry.txt";

function emptyFolder(dir: string): void {
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, OUTPUT_FILE), LINE + "\n", "utf8");
}

run();
