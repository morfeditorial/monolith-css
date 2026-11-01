// Verifies that every class used by the legacy stylesheets exists in the build.
// Run: npm test  (builds dist/monolith.css first)
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const built = readFileSync(join(root, 'dist/monolith.css'), 'utf8');

const classesIn = (css) =>
  new Set([...css.matchAll(/\.((?:[\w-]|\\.)+)/g)].map((m) => m[1]));

const have = classesIn(built);

const machinima = classesIn(
  readFileSync(join(root, 'test/fixtures/machinima_core.css'), 'utf8')
    .replace(/url\([^)]*\)/g, '')
);
const telesender = new Set(
  readFileSync(join(root, 'test/fixtures/telesender-classes.txt'), 'utf8')
    .split(/\s+/)
    .filter(Boolean)
);

let failed = 0;
for (const [name, set] of [['machinima-core', machinima], ['TeleSender', telesender]]) {
  const missing = [...set].filter((c) => !have.has(c));
  console.log(`${name}: ${set.size - missing.length}/${set.size} classes present`);
  if (missing.length) {
    failed += missing.length;
    console.log('  missing:', missing.join(', '));
  }
}

process.exit(failed ? 1 : 0);
