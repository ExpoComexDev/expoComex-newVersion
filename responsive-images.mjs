import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'src', 'img');

const targets = [
  { base: 'aboutUsImg4.webp', widths: [480, 768, 1024, 1440], quality: 72 },
  { base: 'objectivesImg.webp', widths: [480, 768, 1024, 1440], quality: 72 },
  // Hero background: más agresivo
  { base: 'test2.webp', widths: [768, 1440, 1920], quality: 60 },
];

async function generate() {
  for (const t of targets) {
    const input = path.join(imgDir, t.base);
    if (!fs.existsSync(input)) {
      console.warn(`No existe ${t.base}, salto.`);
      continue;
    }
    for (const w of t.widths) {
      const out = path.join(imgDir, `${path.parse(t.base).name}-${w}.webp`);
      try {
        await sharp(input)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: t.quality })
          .toFile(out);
        console.log(`✓ ${t.base} -> ${path.basename(out)}`);
      } catch (e) {
        console.error(`✗ Error con ${t.base} ${w}:`, e.message);
      }
    }
  }
}

generate().then(() => console.log('Done'));
