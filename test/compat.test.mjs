// Verifies that every class used by the machinima-core stylesheet exists in the build.
// Run: npm test  (builds dist/monolith.css first)
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const built = readFileSync(join(root, 'dist/monolith.css'), 'utf8');

const classesIn = (css) =>
  new Set([...css.matchAll(/\.((?:[\w-]|\\.)+)/g)].map((m) => m[1]));

const have = classesIn(built);
const expected = classesIn(
  readFileSync(join(root, 'test/fixtures/machinima_core.css'), 'utf8').replace(/url\([^)]*\)/g, '')
);

const missing = [...expected].filter((c) => !have.has(c));
console.log(`machinima-core: ${expected.size - missing.length}/${expected.size} classes present`);
if (missing.length) console.log('  missing:', missing.join(', '));

process.exit(missing.length ? 1 : 0);
