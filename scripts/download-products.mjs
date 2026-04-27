import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "products");

const PRODUCTS = [
  {
    sku: "9356",
    name: "taggiasca-nefiltrat-1l-ghiglione",
    url: "https://feelolio.ro/wp-content/uploads/2021/07/ulei-taggiasca.jpeg",
  },
  {
    sku: "9346",
    name: "quattrociocchi-organic-500ml",
    url: "https://feelolio.ro/wp-content/uploads/2021/07/WhatsApp-Image-2026-02-27-at-11.52.43-5.jpeg",
  },
  {
    sku: "9331",
    name: "quattrociocchi-classico-500ml",
    url: "https://feelolio.ro/wp-content/uploads/2024/05/classico.png",
  },
  {
    sku: "9355",
    name: "taggiasca-bio-organic-500ml-ghiglione",
    url: "https://feelolio.ro/wp-content/uploads/2021/07/ulei-bio-ghiglione.jpeg",
  },
  {
    sku: "9357",
    name: "taggiasca-nefiltrat-3l-ghiglione",
    url: "https://feelolio.ro/wp-content/uploads/2021/07/DSC_3170-e1762960816134.jpg",
  },
  {
    sku: "9351",
    name: "moresca-galioto-500ml",
    url: "https://feelolio.ro/wp-content/uploads/2021/07/4-e1644998750614.jpg",
  },
  {
    sku: "9378",
    name: "de-carlo-torre-di-mossa-dop-500ml",
    url: "https://feelolio.ro/wp-content/uploads/2021/07/DSC_3160.jpg",
  },
  {
    sku: "9343",
    name: "olivastro-quattrociocchi-250ml",
    url: "https://feelolio.ro/wp-content/uploads/2021/07/WhatsApp-Image-2026-02-27-at-11.52.43-3.jpeg",
  },
];

async function downloadBuffer(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processImage(inputBuffer, outputPath) {
  const SIZE = 1000;
  const PADDING = 80; // px de alb pe fiecare parte

  const img = sharp(inputBuffer);
  const meta = await img.metadata();

  // Calculează dimensiunea produsului în cadru (cu padding)
  const maxProduct = SIZE - PADDING * 2;
  const ratio = Math.min(maxProduct / meta.width, maxProduct / meta.height);
  const resizedW = Math.round(meta.width * ratio);
  const resizedH = Math.round(meta.height * ratio);

  const resized = await img
    .resize(resizedW, resizedH, { fit: "inside", withoutEnlargement: false })
    .toBuffer();

  await sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite([
      {
        input: resized,
        gravity: "center",
      },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outputPath);
}

async function run() {
  console.log(`\nDescarcare si procesare ${PRODUCTS.length} imagini...\n`);

  const results = [];

  for (const p of PRODUCTS) {
    const filename = `${p.sku}-${p.name}.jpg`;
    const outPath = path.join(OUT_DIR, filename);

    process.stdout.write(`[${p.sku}] ${p.name} ... `);

    try {
      const buf = await downloadBuffer(p.url);
      await processImage(buf, outPath);
      const { size } = fs.statSync(outPath);
      console.log(`✓  ${filename} (${Math.round(size / 1024)} KB)`);
      results.push({ ...p, filename, ok: true });
    } catch (err) {
      console.log(`✗  EROARE: ${err.message}`);
      results.push({ ...p, ok: false, error: err.message });
    }
  }

  console.log("\n── Sumar ──────────────────────────────────────");
  const ok = results.filter((r) => r.ok);
  const fail = results.filter((r) => !r.ok);
  console.log(`✓  ${ok.length} imagini procesate cu succes`);
  if (fail.length) {
    console.log(`✗  ${fail.length} erori:`);
    fail.forEach((r) => console.log(`   [${r.sku}] ${r.error}`));
  }

  // Scrie un index JSON util pentru integrare
  const index = results.filter((r) => r.ok).map((r) => ({
    sku: r.sku,
    name: r.name,
    file: `/products/${r.filename}`,
  }));
  const indexPath = path.join(OUT_DIR, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
  console.log(`\nIndex salvat: ${indexPath}`);
}

run().catch(console.error);
