import fs from 'node:fs';
import path from 'node:path';

const [, , dbPathArg, outDirArg] = process.argv;
const dbPath = dbPathArg ?? 'tools/mock-api/db.json';
const outDir = outDirArg ?? 'out';
const apiDir = path.join(outDir, 'api');

const raw = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(raw);

fs.mkdirSync(apiDir, { recursive: true });

for (const key of ['citizens', 'permits', 'applications']) {
  const payload = JSON.stringify(Array.isArray(db[key]) ? db[key] : [], null, 2);

  fs.writeFileSync(path.join(apiDir, key), payload);
  fs.writeFileSync(path.join(apiDir, `${key}.json`), payload);
}

console.log(`Static Pages API exported to: ${apiDir}`);
