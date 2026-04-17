import sharp from 'sharp';
import { readdir, stat, writeFile, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, 'tmp_assets');   // read from temp copy
const outDir = path.join(__dirname, 'out_assets');   // write optimized here

import { mkdir } from 'fs/promises';
await mkdir(outDir, { recursive: true });

const configs = {
  'hero.webp':       { width: 900,  quality: 75 },
  'bridal.webp':     { width: 800,  quality: 78 },
  'manicure.webp':   { width: 700,  quality: 80 },
  'threading.webp':  { width: 700,  quality: 80 },
  'about.webp':      { width: 700,  quality: 80 },
  'hair.webp':       { width: 700,  quality: 80 },
  'ocassional.webp': { width: 700,  quality: 80 },
  'skincare.webp':   { width: 700,  quality: 80 },
  'background.webp': { width: 1400, quality: 75 },
};

const files = await readdir(srcDir);

for (const file of files) {
  if (!file.endsWith('.webp')) continue;
  const cfg = configs[file];
  if (!cfg) continue;

  const srcPath = path.join(srcDir, file);
  const outPath = path.join(outDir, file);
  const { size: before } = await stat(srcPath);

  const buffer = await sharp(srcPath)
    .resize({ width: cfg.width, withoutEnlargement: true })
    .webp({ quality: cfg.quality, effort: 5 })
    .toBuffer();

  await writeFile(outPath, buffer);
  const saved = ((1 - buffer.length/before)*100).toFixed(0);
  console.log(`✓ ${file}: ${(before/1024).toFixed(1)} KB → ${(buffer.length/1024).toFixed(1)} KB  (-${saved}%)`);
}

console.log('\nDone! Optimized images are in scripts/out_assets/');
