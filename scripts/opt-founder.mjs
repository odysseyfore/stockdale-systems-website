// One-off: web-optimize public/founder_image.jpg in place.
// Auto-orients via EXIF, crops to the displayed 4:5, compresses.
import sharp from 'sharp';
import { renameSync, statSync } from 'node:fs';

const src = 'public/founder_image.jpg';
const tmp = 'public/.founder_tmp.jpg';
const before = statSync(src).size;
const meta = await sharp(src).metadata();

await sharp(src)
  .rotate() // honor EXIF orientation, then strip it
  .resize(800, 1000, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(tmp);

renameSync(tmp, src);
const after = statSync(src).size;
console.log(`founder_image.jpg: ${meta.width}x${meta.height} ${Math.round(before/1024)}KB -> 800x1000 ${Math.round(after/1024)}KB`);
