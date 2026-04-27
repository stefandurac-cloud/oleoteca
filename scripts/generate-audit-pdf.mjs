import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "Gourmetteria-Audit.pdf");

const NAVY = "#1a2744";
const GOLD = "#b8962e";
const CREAM = "#f5ead6";
const GREY = "#6b7280";
const RED = "#c0392b";
const GREEN = "#2e7d32";

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 60, bottom: 60, left: 60, right: 60 },
  info: {
    Title: "Audit Gourmetteria",
    Author: "Claude Code",
    Subject: "Raport de audit complet — design, UX, SEO, performanță",
    CreationDate: new Date(),
  },
});

doc.pipe(fs.createWriteStream(OUT));

const W = doc.page.width - 120; // usable width

/* ── helpers ── */

function rule(y, color = GOLD, opacity = 0.4) {
  doc.save().strokeColor(color).strokeOpacity(opacity)
    .moveTo(60, y).lineTo(60 + W, y).stroke().restore();
}

function sectionChip(label) {
  const y = doc.y;
  doc.save()
    .rect(60, y, W, 26).fill(NAVY)
    .fillColor("#ffffff").fontSize(8)
    .font("Helvetica-Bold")
    .text(label.toUpperCase(), 68, y + 8, { characterSpacing: 1.5 })
    .restore();
  doc.y = y + 36;
}

function h1(text) {
  doc.moveDown(0.5)
    .fillColor(NAVY).font("Helvetica-Bold").fontSize(22)
    .text(text, 60, doc.y, { width: W });
  doc.moveDown(0.3);
  rule(doc.y);
  doc.moveDown(0.8);
}

function h2(text, color = GOLD) {
  doc.moveDown(0.8)
    .fillColor(color).font("Helvetica-Bold").fontSize(13)
    .text(text.toUpperCase(), 60, doc.y, { width: W, characterSpacing: 0.8 });
  doc.moveDown(0.5);
}

function h3(text) {
  doc.moveDown(0.5)
    .fillColor(NAVY).font("Helvetica-Bold").fontSize(11)
    .text(text, 60, doc.y, { width: W });
  doc.moveDown(0.3);
}

function body(text, indent = 0, color = NAVY) {
  doc.fillColor(color).font("Helvetica").fontSize(10)
    .text(text, 60 + indent, doc.y, { width: W - indent, lineGap: 3 });
  doc.moveDown(0.25);
}

function bullet(text, level = 0) {
  const indent = 12 + level * 16;
  const bullet_x = 60 + indent;
  const text_x = bullet_x + 12;
  const y = doc.y;
  doc.save().fillColor(GOLD).fontSize(8).text("▸", bullet_x, y + 1).restore();
  doc.fillColor(NAVY).font("Helvetica").fontSize(10)
    .text(text, text_x, y, { width: W - indent - 12, lineGap: 3 });
  doc.moveDown(0.2);
}

function numberedItem(n, label, desc, priority) {
  const y = doc.y;
  // priority badge
  const badgeColor = priority === "P0" ? RED : priority === "P1" ? GOLD : NAVY;
  doc.save()
    .rect(60, y, 26, 16).fill(badgeColor)
    .fillColor("#ffffff").font("Helvetica-Bold").fontSize(7)
    .text(priority, 60, y + 4, { width: 26, align: "center" })
    .restore();

  doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(10)
    .text(label, 94, y, { width: W - 34, lineGap: 2 });
  if (desc) {
    doc.fillColor(GREY).font("Helvetica").fontSize(9)
      .text(desc, 94, doc.y, { width: W - 34, lineGap: 2 });
  }
  doc.moveDown(0.4);
}

function tableRow(cols, widths, isHeader = false, rowColor = null) {
  const y = doc.y;
  const rowH = isHeader ? 20 : 18;

  if (rowColor) {
    doc.save().rect(60, y, W, rowH).fill(rowColor).restore();
  }

  let x = 60;
  cols.forEach((col, i) => {
    doc.save()
      .fillColor(isHeader ? "#ffffff" : NAVY)
      .font(isHeader ? "Helvetica-Bold" : "Helvetica")
      .fontSize(isHeader ? 8 : 9)
      .text(col, x + 4, y + (isHeader ? 6 : 4), { width: widths[i] - 8, lineGap: 2 })
      .restore();
    x += widths[i];
  });

  doc.y = y + rowH;
}

function note(text, color = GOLD) {
  const y = doc.y;
  doc.save()
    .rect(60, y, 3, 36).fill(color)
    .fillColor(GREY).font("Helvetica-Oblique").fontSize(9)
    .text(text, 70, y + 3, { width: W - 10, lineGap: 3 })
    .restore();
  doc.y = y + 44;
}

/* ════════════════════════════════════════════════
   COVER PAGE
════════════════════════════════════════════════ */

doc.rect(0, 0, doc.page.width, doc.page.height).fill(NAVY);

doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(9)
  .text("GOURMETTERIA", 60, 100, { characterSpacing: 4 });

doc.fillColor("#ffffff").font("Helvetica").fontSize(36)
  .text("Audit\nComplet", 60, 130, { lineGap: 8 });

doc.save()
  .moveTo(60, 230).lineTo(60 + W, 230)
  .strokeColor(GOLD).strokeOpacity(0.5).lineWidth(1).stroke()
  .restore();

doc.fillColor("#ffffff").opacity(0.5).font("Helvetica").fontSize(11)
  .text("Design · Texte · UX · Mobile · SEO · Performanță", 60, 248);

doc.opacity(1).fillColor(GOLD).font("Helvetica-Bold").fontSize(10)
  .text("Ce e bine, ce trebuie schimbat, ce lipsește", 60, 272);

doc.fillColor("#ffffff").opacity(0.3).font("Helvetica").fontSize(9)
  .text(`Generat ${new Date().toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}`, 60, doc.page.height - 80);

doc.addPage();

/* ════════════════════════════════════════════════
   PAGE 2 — CE E BINE
════════════════════════════════════════════════ */

h1("Audit Gourmetteria — Raport complet");

sectionChip("✓  Ce e bine");

h2("Design", GREEN);
bullet("Paleta navy + gold + cream + olive este coerentă de la un capăt la altul — fără culori inconsistente");
bullet("Cormorant Garamond + Jost — combinație tipografică solidă pentru segmentul premium");
bullet("Tranzițiile și hover effects sunt uniforme (duration-300/500 peste tot)");
bullet("Gold dividerele subtile (h-px bg-gold/40) dau eleganță fără să supraîncarce");
bullet("Sistemul de grid și spațierea (max-w-screen-xl, px-8) sunt consistente pe toate secțiunile");

h2("Texte", GREEN);
bullet("\"Vinoteca uleiului de măsline\" — cel mai bun text din site, concept original și memorabil");
bullet("\"Artizanat mediteranean, ales cu grijă\" — tagline funcțional și clar");
bullet("Copy-ul de produs (note de degustare, regiune, recoltă, volum) este specific și profesional");
bullet("Structura heroului (label → H1 → linie gold → paragraf → CTA) respectă o ierarhie vizuală clară");

h2("Performanță", GREEN);
bullet("Build static cu Turbopack — prima încărcare este foarte rapidă");
bullet("Fonturile prin next/font elimină FOUT (flash of unstyled text)");
bullet("SVG-urile inline nu generează request-uri HTTP suplimentare");
bullet("Build time: ~12s cu cache restaurat, compilare reușită 100%");

/* ════════════════════════════════════════════════
   PAGE 3 — CE TREBUIE SCHIMBAT
════════════════════════════════════════════════ */

doc.addPage();

sectionChip("⚠  Ce trebuie schimbat");

h2("P0 — Înainte de orice altceva", RED);

h3("1. Citatul lui Ottolenghi este inventat");
body(
  "\"Gastronomia mediteraneană nu e o bucătărie — e o civilizație...\" nu este o citare verificabilă. " +
  "Un client care caută sursa nu o va găsi — pierdere de credibilitate directă.",
  0, GREY
);
body("Fix: citare reală verificabilă, atribuire generică (\"— tradiție mediteraneană\"), sau eliminare completă.", 0, RED);

doc.moveDown(0.3);
h3("2. Prețurile au notații mixate");
body("\"85 lei\" vs \"54 RON\" vs \"68 RON\" — inconsistență de bază. Alege un format și aplică uniform.", 0, GREY);
body("Fix: standardizează la \"RON\" sau \"lei\" în toate fișierele de date.", 0, RED);

doc.moveDown(0.3);
h3("3. Logo-ul \"GOURMETTERIA\" poate deborda pe mobile");
body(
  "11 litere cu tracking-[0.3em] uppercase estimează ~370px lățime la viewport 375px (iPhone SE). " +
  "Testează pe dispozitiv real.",
  0, GREY
);
body("Fix: tracking-[0.15em] lg:tracking-[0.3em] — reduce spacing-ul pe mobile.", 0, RED);

doc.moveDown(0.3);
h3("4. Favicon și OG image lipsesc complet");
body(
  "/public conține doar SVG-urile default Next.js. Fără favicon, tab-ul browserului afișează iconița generică. " +
  "Fără og:image, share-ul pe social media arată un dreptunghi gol.",
  0, GREY
);

doc.moveDown(0.3);
h3("5. Lipsesc meta tags Open Graph");
body("Necesare pentru Facebook, WhatsApp, LinkedIn. Adaugă în layout.tsx:", 0, GREY);
doc.save()
  .rect(60, doc.y, W, 70).fill("#f8f8f8")
  .fillColor(NAVY).font("Courier").fontSize(8)
  .text(
    `openGraph: {\n  title: "Gourmetteria — Artizanat mediteranean, ales cu grijă",\n  description: "...",\n  url: "https://gourmetteria.ro",\n  images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],\n  locale: "ro_RO",\n  type: "website",\n}`,
    68, doc.y + 8, { width: W - 16, lineGap: 3 }
  ).restore();
doc.y += 80;

doc.moveDown(0.3);
h3("6. Cookie consent lipsește complet");
body("GDPR obligă la banner înainte de orice tracking. Lipsa bannerului = amendă potențială.", 0, GREY);

/* ════════════════════════════════════════════════
   PAGE 4 — P1 și P2
════════════════════════════════════════════════ */

doc.addPage();

h2("P1 — UX și funcționalitate", GOLD);

h3("7. Toate linkurile sunt moarte");
body(
  "Nicio pagină în afară de homepage nu există. /colectie/oleoteca, /ghid, /despre, /contact — " +
  "toate returnează 404. Cel puțin o pagină placeholder pentru fiecare rută principală.",
  0, GREY
);

doc.moveDown(0.3);
h3("8. Butonul \"Adaugă\" nu face nimic");
body(
  "Product card-urile au un buton \"Adaugă\" care nu adaugă nimic nicăieri. " +
  "E mai bine ascuns decât să dea falsa impresie de funcționalitate.",
  0, GREY
);

doc.moveDown(0.3);
h3("9. Newsletter form nu trimite nicăieri");
body(
  "onSubmit={(e) => e.preventDefault()} — formularul colectează emailuri în neant. " +
  "Integrează un provider (Mailchimp, Klaviyo, Brevo) sau pune un mesaj informativ.",
  0, GREY
);

h2("P2 — Copy și ton", GREY);

h3("10. \"Alese cu grijă pentru tine\" este prea banal");
body(
  "Secțiunea Selecția lunii merită un headline mai specific: " +
  "\"Selecția lunii — Aprilie 2025\" sau \"Ce degustăm acum\".",
  0, GREY
);

doc.moveDown(0.3);
h3("11. \"Inima Mediteranei\" este un clișeu");
body(
  "Apare în hero. Versiuni mai specifice: \"de la producători cu sub 5 hectare\", " +
  "\"de la fermieri pe care îi cunoaștem pe nume\".",
  0, GREY
);

doc.moveDown(0.3);
h3("12. Numerele de produse sunt hardcodate și inventate");
body(
  "\"58 produse\", \"44 produse\" etc. în secțiunea Regiuni creează așteptări false " +
  "dacă nu există un catalog real. Elimină sau înlocuiește cu \"Explorează →\".",
  0, GREY
);

/* ════════════════════════════════════════════════
   PAGE 5 — CE LIPSEȘTE
════════════════════════════════════════════════ */

doc.addPage();

sectionChip("⊕  Ce lipsește — în ordinea priorității");

doc.moveDown(0.8);

const tW = [55, 155, W - 210];
// header
doc.rect(60, doc.y, W, 20).fill(NAVY);
tableRow(["Prioritate", "Ce", "De ce contează"], tW, true);

const rows = [
  ["P0", "Favicon + OG image", "Tab browser, share social — vizibilitate imediată", RED, "#fff8f8"],
  ["P0", "Open Graph / Twitter Card", "Facebook, WhatsApp, LinkedIn — share corect", RED, "#fff8f8"],
  ["P0", "Fix citatul Ottolenghi", "Credibilitate — citatul nu este verificabil", RED, "#fff8f8"],
  ["P0", "Fix prețuri consistente (lei / RON)", "Profesionalism — notații mixate în date", RED, "#fff8f8"],
  ["P1", "Pagini colecții (placeholder)", "Linkurile să nu fie 404", GOLD, null],
  ["P1", "Pagina \"Despre noi\"", "Esențială pentru brand premium", GOLD, null],
  ["P1", "Cookie consent GDPR", "Obligatoriu legal înainte de orice tracking", GOLD, null],
  ["P1", "Pagini legale (politică, termeni)", "Linkuri există în footer, paginile nu", GOLD, null],
  ["P2", "Coș funcțional + checkout", "E-commerce de bază — fără el nu vinzi", NAVY, null],
  ["P2", "Pagini de produs individuale", "Fără ele nu poți vinde niciun produs", NAVY, null],
  ["P2", "Integrare plăți (Stripe / PayU)", "Revenue — obiectivul final", NAVY, null],
  ["P3", "Fotografii reale de produs", "SVG-urile sunt ok pentru MVP, nu pentru vânzări", GREY, null],
  ["P3", "Schema.org structured data", "Rich snippets în Google — SEO avansat", GREY, null],
  ["P3", "sitemap.xml + robots.txt", "Indexare SEO completă", GREY, null],
  ["P3", "Newsletter integrat real", "Klaviyo / Mailchimp — emailuri reale", GREY, null],
  ["P3", "Pagina 404 custom", "UX după linkuri greșite", GREY, null],
  ["P3", "Recenzii produse", "Social proof — esențial pentru conversii", GREY, null],
];

rows.forEach(([p, what, why, pColor, bg], i) => {
  const y = doc.y;
  const rowH = 18;
  if (i % 2 === 0 && !bg) {
    doc.save().rect(60, y, W, rowH).fill("#fafafa").restore();
  }
  if (bg) {
    doc.save().rect(60, y, W, rowH).fill(bg).restore();
  }

  // priority badge
  doc.save()
    .rect(62, y + 2, 50, 14).fill(pColor)
    .fillColor("#ffffff").font("Helvetica-Bold").fontSize(7)
    .text(p, 62, y + 5, { width: 50, align: "center" })
    .restore();

  doc.fillColor(NAVY).font("Helvetica").fontSize(9)
    .text(what, 120, y + 4, { width: tW[1] - 10, lineGap: 2 });
  doc.fillColor(GREY).font("Helvetica").fontSize(9)
    .text(why, 120 + tW[1] - 5, y + 4, { width: tW[2], lineGap: 2 });
  doc.y = y + rowH;
});

/* ════════════════════════════════════════════════
   PAGE 6 — CONCLUZIE
════════════════════════════════════════════════ */

doc.addPage();

sectionChip("◉  Concluzie și pași următori");

doc.moveDown(1);

body(
  "Site-ul arată bine vizual și are o bază solidă de design și cod. " +
  "Problemele critice sunt în conținut și funcționalitate, nu în design.",
  0, NAVY
);

doc.moveDown(0.5);

note(
  "Fix-urile P0 se pot face în câteva ore: favicon, OG tags, fix citatul, " +
  "standardizare prețuri, fix tracking logo mobile."
);

doc.moveDown(0.5);

h2("Roadmap recomandat");

const steps = [
  ["Săptămâna 1", "Fix P0 (favicon, OG, citat, prețuri) + cookie consent + pagini placeholder"],
  ["Săptămâna 2", "Pagina Despre noi + pagini legale + newsletter integrat real"],
  ["Luna 1", "Pagini de colecție cu produse reale + pagini de produs individuale"],
  ["Luna 2", "Coș + checkout + integrare plăți"],
  ["Luna 3", "Fotografii reale + SEO avansat (Schema.org, sitemap) + recenzii"],
];

steps.forEach(([period, action]) => {
  const y = doc.y;
  doc.save()
    .rect(60, y, 100, 16).fill(CREAM)
    .fillColor(NAVY).font("Helvetica-Bold").fontSize(8)
    .text(period, 64, y + 4, { width: 96 })
    .restore();
  doc.fillColor(NAVY).font("Helvetica").fontSize(10)
    .text(action, 170, y + 3, { width: W - 110, lineGap: 2 });
  doc.y = y + 24;
});

doc.moveDown(1);
rule(doc.y);
doc.moveDown(0.8);

doc.fillColor(GREY).font("Helvetica-Oblique").fontSize(9)
  .text(
    "Raport generat automat · Gourmetteria Audit · " +
    new Date().toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" }),
    60, doc.y, { width: W, align: "center" }
  );

/* ── finalize ── */
doc.end();
console.log(`PDF generat: ${OUT}`);
