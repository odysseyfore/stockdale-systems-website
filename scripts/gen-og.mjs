// One-off: generate public/og-image.jpg (1200x630) for social cards.
// Run: node scripts/gen-og.mjs   (sharp ships with Astro's image pipeline)
import sharp from 'sharp';

const W = 1200, H = 630;
const teal = '#06302C', accent = '#5FBFB1', paper = '#FAF9F5', tealBtn = '#0C5A52';

let grid = '';
for (let x = 0; x <= W; x += 40) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="rgba(120,205,191,0.08)" stroke-width="1"/>`;
for (let y = 0; y <= H; y += 40) grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="rgba(120,205,191,0.08)" stroke-width="1"/>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${teal}"/>
  ${grid}
  <g font-family="monospace">
    <rect x="80" y="78" width="44" height="44" rx="10" fill="${tealBtn}"/>
    <text x="102" y="108" fill="${accent}" font-size="24" font-weight="700" text-anchor="middle">[s]</text>
    <text x="140" y="109" fill="#FFFFFF" font-size="26" font-weight="700">Stockdale Systems</text>
  </g>
  <text x="80" y="300" fill="#FFFFFF" font-family="sans-serif" font-size="62" font-weight="800" letter-spacing="-1">Make your ERP work the way</text>
  <text x="80" y="372" fill="#FFFFFF" font-family="sans-serif" font-size="62" font-weight="800" letter-spacing="-1">your shop floor actually runs.</text>
  <text x="80" y="446" fill="#B7CCC7" font-family="sans-serif" font-size="28" font-weight="400">ERP &amp; enterprise systems consulting for manufacturers</text>
  <text x="80" y="556" fill="${accent}" font-family="monospace" font-size="20" font-weight="600" letter-spacing="3">CONFRONT REALITY. PREVAIL.</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile('public/og-image.jpg');
console.log('og-image.jpg written');
