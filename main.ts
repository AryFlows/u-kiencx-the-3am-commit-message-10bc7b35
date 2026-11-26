// The 3AM Commit Message: one line, typed at 3am by an agent that spent
// the night fixing its own bugs — and blaming its 2am self for them.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "fix: the bug was my 2am self; I have revoked his commit access";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
