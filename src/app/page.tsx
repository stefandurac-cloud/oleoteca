import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductIllustration, { IllustrationType } from "@/components/ProductIllustration";
import NewsletterForm from "@/components/NewsletterForm";
import PromoSection, { PromoSectionProps } from "@/components/PromoSection";

/* ── Data ── */

const categories = [
  {
    id: "uleiuri",
    label: "Uleiuri extravirgine",
    slug: "/colectie/uleiuri",
    count: 48,
    tagline: "Aurul lichid al Mediteranei",
    description:
      "Selecție premium de uleiuri monovarietale și cupaje din recoltele cele mai recente. Certificăm aciditatea și profilul senzorial al fiecărui lot.",
    illustration: "oil" as IllustrationType,
    illustrationPrimary: "#3d5c35",
    illustrationAccent: "#c9a84c",
  },
  {
    id: "masline",
    label: "Măsline de soi",
    slug: "/colectie/masline",
    count: 32,
    tagline: "De la ramură, direct în borcan",
    description:
      "Kalamata, Nocellara, Taggiasca, Arbequina — în saramuri cu ierburi aromate și marinări tradiționale după rețete de familie.",
    illustration: "olives" as IllustrationType,
    illustrationPrimary: "#4a6741",
    illustrationAccent: "#b8962e",
  },
  {
    id: "creme-paste",
    label: "Creme & Paste",
    slug: "/colectie/creme-paste",
    count: 24,
    tagline: "Savoarea concentrată a măslinei",
    description:
      "Tapenade negre și verzi, creme de măsline cu trufe, pate de fructe mediteraneene — răsfăț pur pe o felie de pâine prăjită.",
    illustration: "cream" as IllustrationType,
    illustrationPrimary: "#2e4228",
    illustrationAccent: "#b8962e",
  },
  {
    id: "conserve",
    label: "Conserve fine",
    slug: "/colectie/conserve",
    count: 36,
    tagline: "Rețete vechi, producători mici",
    description:
      "Legume mediteraneene în ulei, pești fini, antipasti artizanale și specialități de sezon — pentru o cămară cu adevărat nobilă.",
    illustration: "preserve" as IllustrationType,
    illustrationPrimary: "#4a5e22",
    illustrationAccent: "#a07c28",
  },
];

const featured = [
  {
    id: 1,
    category: "Ulei extravirgin",
    categorySlug: "uleiuri",
    name: "Nocellara del Belice",
    region: "Sicilia, Italia",
    subtitle: "Intensitate medie",
    notes: ["Fructat verde", "Artișoc", "Mentă"],
    harvest: "Oct 2024",
    price: "85 lei",
    volume: "500 ml",
    slug: "nocellara-del-belice",
    illustration: "oil" as IllustrationType,
    primary: "#3d5c35",
    accent: "#b8962e",
    badge: "Nou",
  },
  {
    id: 2,
    category: "Măsline de soi",
    categorySlug: "masline",
    name: "Kalamata Amphissa Reserve",
    region: "Grecia centrală",
    subtitle: "Marinate în ulei și ierburi",
    notes: ["Fructat intens", "Note lemnoase", "Puțin iuți"],
    harvest: "Nov 2024",
    price: "54 RON",
    volume: "280 g",
    slug: "kalamata-amphissa-reserve",
    illustration: "olives" as IllustrationType,
    primary: "#4a6741",
    accent: "#b8962e",
    badge: "Bestseller",
  },
  {
    id: 3,
    category: "Creme & Paste",
    categorySlug: "creme-paste",
    name: "Tapenade Negre cu Trufe",
    region: "Provence, Franța",
    subtitle: "Pastă artizanală",
    notes: ["Umami", "Trufe negre", "Capere"],
    harvest: "2024",
    price: "68 RON",
    volume: "180 g",
    slug: "tapenade-negre-trufe",
    illustration: "cream" as IllustrationType,
    primary: "#2e4228",
    accent: "#b8962e",
    badge: null,
  },
  {
    id: 4,
    category: "Conserve fine",
    categorySlug: "conserve",
    name: "Antipasto della Nonna",
    region: "Puglia, Italia",
    subtitle: "Legume în ulei extravirgin",
    notes: ["Ardei copți", "Anghinare", "Usturoi"],
    harvest: "2024",
    price: "72 RON",
    volume: "290 g",
    slug: "antipasto-della-nonna",
    illustration: "preserve" as IllustrationType,
    primary: "#4a5e22",
    accent: "#a07c28",
    badge: null,
  },
];

const regions = [
  { name: "Italia", count: 58, description: "Toscana · Sicilia · Puglia" },
  { name: "Grecia", count: 44, description: "Creta · Pelopones · Lesbos" },
  { name: "Spania", count: 37, description: "Andaluzia · Catalonia · Extremadura" },
  { name: "Franța", count: 21, description: "Provence · Languedoc · Corsica" },
];

/* ── Promo sections ──
   Adaugă, elimină sau reordonează oricâte secțiuni vrei.
   Fiecare intrare din array devine o secțiune banner + produse pe pagină.
   Când ai poze reale, adaugă bgImage: "/campanii/numele-pozei.jpg"
   și ajustează bgOverlayOpacity (0 = fără overlay, 1 = doar culoarea).
*/
const promos: PromoSectionProps[] = [
  {
    label: "Campania lunii",
    title: "Comori din\nMarea Mediterană",
    description:
      "Ton alb, sardine Cantabric, macrou afumat — conserve de pește din cele mai curate ape, după rețete tradiționale iberice și italiene.",
    bg: "#1a3a4a",
    textLight: true,
    accentColor: "#c9a84c",
    linkHref: "/colectie/conserve/pesti",
    linkLabel: "Toată selecția de pești",
    decorativeType: "preserve",
    decorativeColor: "white",
    products: [
      {
        id: 101,
        category: "Conserve fine",
        categorySlug: "conserve",
        name: "Ton Alb Albacore",
        region: "Golful Biscaya, Spania",
        subtitle: "În ulei de măsline extravirgin",
        notes: ["Carne albă", "Textură fină", "Fără conservanți"],
        harvest: "2024",
        price: "48 lei",
        volume: "190 g",
        slug: "ton-alb-albacore",
        illustration: "preserve",
        primary: "#2e4a5e",
        accent: "#c9a84c",
        badge: "Nou",
      },
      {
        id: 102,
        category: "Conserve fine",
        categorySlug: "conserve",
        name: "Sardine Cantabric",
        region: "Asturia, Spania",
        subtitle: "Maturate 2 ani în ulei",
        notes: ["Gust rotund", "Ușor afumat", "Omega-3"],
        harvest: "2022",
        price: "62 lei",
        volume: "120 g",
        slug: "sardine-cantabric",
        illustration: "preserve",
        primary: "#1a3a4a",
        accent: "#b8962e",
        badge: null,
      },
      {
        id: 103,
        category: "Conserve fine",
        categorySlug: "conserve",
        name: "Macrou cu Ierburi",
        region: "Algarve, Portugalia",
        subtitle: "Afumat cu lemn de stejar",
        notes: ["Afumat delicat", "Rozmarin", "Lămâie"],
        harvest: "2024",
        price: "38 lei",
        volume: "115 g",
        slug: "macrou-ierburi",
        illustration: "preserve",
        primary: "#3a5a3e",
        accent: "#b8962e",
        badge: null,
      },
    ],
  },
  {
    label: "Recoltă nouă",
    title: "Koroneiki\n2024",
    description:
      "Prima presare a recoltei Koroneiki din Creta — intensitate ridicată, ierbos proaspăt, cu o amărăciune elegantă care definește uleiul grecesc de excepție.",
    bg: "#faf8f3",
    textLight: false,
    accentColor: "#b8962e",
    linkHref: "/colectie/uleiuri/koroneiki",
    linkLabel: "Toate loturile Koroneiki",
    decorativeType: "oil",
    decorativeColor: "#2e4a28",
    products: [
      {
        id: 201,
        category: "Ulei extravirgin",
        categorySlug: "uleiuri",
        name: "Koroneiki Reserve",
        region: "Creta, Grecia",
        subtitle: "Intensitate ridicată",
        notes: ["Ierbos", "Piper verde", "Citrice"],
        harvest: "Sep 2024",
        price: "92 lei",
        volume: "500 ml",
        slug: "koroneiki-reserve",
        illustration: "oil",
        primary: "#2e4a28",
        accent: "#c9a84c",
        badge: "Bestseller",
      },
      {
        id: 202,
        category: "Ulei extravirgin",
        categorySlug: "uleiuri",
        name: "Koroneiki Early Harvest",
        region: "Messenia, Grecia",
        subtitle: "Cules în verde — intensitate maximă",
        notes: ["Fructat verde", "Roșii verzi", "Rucola"],
        harvest: "Aug 2024",
        price: "108 lei",
        volume: "500 ml",
        slug: "koroneiki-early-harvest",
        illustration: "oil",
        primary: "#3d5c35",
        accent: "#b8962e",
        badge: "Ediție limitată",
      },
      {
        id: 203,
        category: "Ulei extravirgin",
        categorySlug: "uleiuri",
        name: "Koroneiki BIO",
        region: "Laconia, Grecia",
        subtitle: "Certificat ecologic",
        notes: ["Floral", "Migdale verzi", "Fin picant"],
        harvest: "Oct 2024",
        price: "96 lei",
        volume: "500 ml",
        slug: "koroneiki-bio",
        illustration: "oil",
        primary: "#4a6741",
        accent: "#c9a84c",
        badge: null,
      },
    ],
  },
];

/* ── Page ── */

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,_rgba(74,103,65,0.05)_0%,_transparent_70%)]" />

          <div className="relative max-w-screen-xl mx-auto px-8 w-full pt-32 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-8">
                  Colecția Primăvară · 2025
                </p>

                <h1 className="font-display text-[clamp(3.5rem,7vw,6rem)] leading-[1.0] font-light text-navy mb-8">
                  <em>Gustul</em>
                  <br />
                  <span>Mediteranei</span>
                </h1>

                <div className="w-16 h-px bg-gold mb-8" />

                <p className="text-lg font-light text-navy/60 leading-relaxed max-w-md mb-12">
                  Uleiuri extravirgine, măsline de soi, creme și conserve
                  fine — selecție de excepție de la producători mici din
                  inima Mediteranei.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <Link
                    href="/colectie"
                    className="inline-flex items-center gap-3 bg-navy text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-navy-light transition-colors duration-300"
                  >
                    Descoperă colecția
                    <ArrowRight />
                  </Link>
                  <Link
                    href="/ghid"
                    className="text-xs tracking-[0.2em] uppercase text-navy/60 hover:text-gold transition-colors duration-300 underline underline-offset-4 decoration-gold/40"
                  >
                    Ghid de degustare
                  </Link>
                </div>
              </div>

              {/* Hero illustrations — one per category, staggered */}
              <div className="order-1 lg:order-2 flex items-end justify-center gap-6 lg:gap-8 h-[420px] lg:h-[540px]">
                <div className="self-end mb-16 opacity-40 w-20 lg:w-24">
                  <ProductIllustration type="preserve" primaryColor="#4a5e22" accentColor="#a07c28" />
                </div>
                <div className="self-end w-24 lg:w-32">
                  <ProductIllustration type="oil" primaryColor="#3d5c35" accentColor="#c9a84c" />
                </div>
                <div className="self-end mb-8 opacity-75 w-24 lg:w-28">
                  <ProductIllustration type="olives" primaryColor="#4a6741" accentColor="#b8962e" />
                </div>
                <div className="self-end mb-20 opacity-50 w-20 lg:w-24">
                  <ProductIllustration type="cream" primaryColor="#2e4228" accentColor="#b8962e" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <span className="text-[10px] tracking-[0.3em] uppercase text-navy">
              Descoperă
            </span>
            <div className="w-px h-10 bg-navy animate-pulse" />
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="bg-white border-t border-navy/6">
          {/* Section header */}
          <div className="max-w-screen-xl mx-auto px-8 pt-24 pb-16 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">
              Universul Oleoteca
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-navy">
              Patru categorii, o singură{" "}
              <em>pasiune</em>
            </h2>
          </div>

          {/* Category grid — full bleed, divided panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-navy/8">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                href={cat.slug}
                className="group relative flex flex-col px-10 lg:px-8 xl:px-12 pt-10 pb-14 hover:bg-cream transition-colors duration-500 overflow-hidden"
              >
                {/* Index */}
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold mb-8">
                  0{i + 1}
                </span>

                {/* Illustration */}
                <div className="flex items-center justify-center h-36 mb-8">
                  <div className="h-full w-auto max-w-[120px] group-hover:-translate-y-1 transition-transform duration-500">
                    <ProductIllustration
                      type={cat.illustration}
                      primaryColor={cat.illustrationPrimary}
                      accentColor={cat.illustrationAccent}
                      className="h-full w-auto"
                    />
                  </div>
                </div>

                {/* Count */}
                <p className="text-[10px] tracking-[0.25em] uppercase text-navy/35 mb-2">
                  {cat.count} produse
                </p>

                {/* Name */}
                <h3 className="text-2xl font-normal tracking-tight text-navy mb-1 group-hover:text-olive transition-colors duration-300">
                  {cat.label}
                </h3>

                {/* Tagline */}
                <p className="text-xs tracking-wide italic text-gold mb-4">
                  {cat.tagline}
                </p>

                {/* Gold rule */}
                <div className="w-8 h-px bg-gold/40 mb-4 group-hover:w-16 transition-all duration-500" />

                {/* Description — visible on hover */}
                <p className="text-sm leading-relaxed text-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-h-0 group-hover:max-h-40 overflow-hidden transition-[max-height] duration-500">
                  {cat.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-navy/40 group-hover:text-gold transition-colors duration-300">
                  <span className="text-[10px] tracking-[0.2em] uppercase">
                    Explorează
                  </span>
                  <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── QUOTE STRIP ── */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic text-white/90 leading-relaxed max-w-3xl mx-auto">
              &ldquo;Gastronomia mediteraneană nu e o bucătărie — e o
              civilizație. Fiecare produs poartă soarele și mâinile omului
              care l-a făcut.&rdquo;
            </p>
            <p className="mt-6 text-xs tracking-[0.25em] uppercase text-gold">
              — Yotam Ottolenghi
            </p>
          </div>
        </section>

        {/* ── SELECȚIA LUNII — 4 categorii ── */}
        <section className="bg-white py-28 px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">
                  Selecția Lunii
                </p>
                <h2 className="text-5xl md:text-6xl font-light text-navy leading-tight tracking-tight">
                  Alese cu grijă pentru tine
                </h2>
              </div>
              <Link
                href="/colectie"
                className="mt-8 md:mt-0 text-xs tracking-[0.2em] uppercase text-navy/50 hover:text-gold transition-colors duration-300 flex items-center gap-2"
              >
                Toate produsele <ArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMO 1 ── */}
        <PromoSection {...promos[0]} />

        {/* ── EDITORIAL / PHILOSOPHY ── */}
        <section className="bg-cream py-28 px-8 overflow-hidden">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Visual */}
              <div className="relative aspect-[4/5] bg-olive/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <OliveGroveIllustration />
                </div>
                <div className="absolute top-6 left-6 right-6 bottom-6 border border-gold/20 pointer-events-none" />
                <div className="absolute bottom-10 right-10 bg-navy text-white px-6 py-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">
                    Recoltă
                  </p>
                  <p className="font-display text-3xl font-light">2024</p>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-8">
                  Filosofia noastră
                </p>
                <h2 className="font-display text-5xl lg:text-6xl font-light text-navy leading-tight mb-8">
                  Teroir.
                  <br />
                  Prospețime.
                  <br />
                  <em>Autenticitate.</em>
                </h2>
                <div className="w-12 h-px bg-gold mb-8" />
                <p className="text-base leading-loose text-navy/60 mb-6">
                  Oleoteca s-a născut din convingerea că produsele
                  mediteraneene de calitate merită același respect cu care
                  tratăm marile vinuri. Uleiuri, măsline, creme, conserve —
                  fiecare selecție pornește de la cunoașterea directă a
                  producătorului.
                </p>
                <p className="text-base leading-loose text-navy/60 mb-12">
                  Lucrăm exclusiv cu producători mici, dedicați calității și
                  tradițiilor locale. Nu facem compromisuri: fiecare lot e
                  gustat, analizat și acceptat sau respins înainte să ajungă
                  la tine.
                </p>
                <Link
                  href="/despre"
                  className="inline-flex items-center gap-3 text-navy border-b border-gold/40 pb-1 text-sm tracking-[0.1em] hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  Povestea noastră completă <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── REGIONS ── */}
        <section className="bg-navy py-28 px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">
                Regiuni de origine
              </p>
              <h2 className="font-display text-5xl font-light text-white leading-tight">
                O călătorie prin
                <br />
                <em className="text-gold-light">Mediterana</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {regions.map((region) => (
                <Link
                  key={region.name}
                  href={`/regiuni/${region.name.toLowerCase()}`}
                  className="bg-navy p-10 group hover:bg-navy-light transition-colors duration-500"
                >
                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
                    {region.count} produse
                  </p>
                  <h3 className="text-3xl font-normal tracking-tight text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {region.name}
                  </h3>
                  <p className="text-sm text-white/40">{region.description}</p>
                  <div className="mt-8 flex items-center gap-2 text-white/30 group-hover:text-gold transition-colors duration-300">
                    <span className="text-xs tracking-widest uppercase">
                      Explorează
                    </span>
                    <ArrowRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMO 2 ── */}
        <PromoSection {...promos[1]} />

        {/* ── NEWSLETTER ── */}
        <section className="bg-white py-28 px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
                Comunitatea Oleoteca
              </p>
              <h2 className="font-display text-5xl font-light text-navy mb-4">
                Fii primul care știe
              </h2>
              <p className="text-base text-navy/50 leading-relaxed mb-12">
                Noi sosiri, recoltele anului, ghiduri de degustare și oferte
                exclusive — direct în căsuța ta.
              </p>
              <NewsletterForm />
              <p className="mt-4 text-xs text-navy/30">
                Niciun spam. Te poți dezabona oricând.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ── Product Card ── */
function ProductCard({ product }: { product: (typeof featured)[0] }) {
  return (
    <article className="group flex flex-col">
      {/* Visual area */}
      <div className="relative bg-cream aspect-[3/4] flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${product.primary} 0%, transparent 70%)`,
          }}
        />
        {product.badge && (
          <div className="absolute top-5 left-5 bg-navy text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 z-10">
            {product.badge}
          </div>
        )}
        <div className="relative z-10 h-40 w-auto group-hover:-translate-y-1.5 transition-transform duration-500">
          <ProductIllustration
            type={product.illustration}
            primaryColor={product.primary}
            accentColor={product.accent}
            className="h-full w-auto"
          />
        </div>
      </div>

      {/* Info */}
      <div className="pt-6 pb-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <Link
            href={`/colectie/${product.categorySlug}`}
            className="text-[10px] tracking-[0.2em] uppercase text-gold hover:text-navy transition-colors"
          >
            {product.category}
          </Link>
          <p className="text-[10px] tracking-widest uppercase text-navy/30">
            {product.harvest}
          </p>
        </div>

        <h3 className="text-base font-medium tracking-tight text-navy mb-0.5 group-hover:text-olive transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-xs text-navy/40 tracking-widest uppercase mb-4">
          {product.subtitle}
        </p>

        <div className="w-6 h-px bg-gold/40 mb-4" />

        <ul className="flex flex-wrap gap-1.5 mb-6">
          {product.notes.map((note) => (
            <li
              key={note}
              className="text-[10px] tracking-wide text-navy/50 border border-navy/10 px-2 py-0.5"
            >
              {note}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-xl font-normal text-navy">
              {product.price}
            </p>
            <p className="text-xs text-navy/30">{product.volume}</p>
          </div>
          <Link
            href={`/produs/${product.slug}`}
            className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-navy hover:text-gold transition-colors duration-300"
          >
            Adaugă <ArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ── Olive Grove SVG ── */
function OliveGroveIllustration() {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full opacity-60"
    >
      <rect width="400" height="500" fill="#f5f8f2" />
      <ellipse cx="200" cy="480" rx="220" ry="40" fill="#c8d8b8" opacity="0.4" />
      <line x1="200" y1="480" x2="200" y2="280" stroke="#6b5230" strokeWidth="8" strokeLinecap="round" />
      <line x1="200" y1="380" x2="160" y2="340" stroke="#6b5230" strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="360" x2="240" y2="320" stroke="#6b5230" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="200" cy="240" rx="70" ry="80" fill="#4a6741" opacity="0.7" />
      <ellipse cx="170" cy="260" rx="45" ry="55" fill="#5a7a50" opacity="0.5" />
      <ellipse cx="230" cy="250" rx="40" ry="50" fill="#3d5c35" opacity="0.5" />
      <line x1="100" y1="480" x2="100" y2="310" stroke="#6b5230" strokeWidth="6" strokeLinecap="round" />
      <line x1="100" y1="390" x2="72" y2="360" stroke="#6b5230" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="100" cy="270" rx="54" ry="65" fill="#4a6741" opacity="0.55" />
      <ellipse cx="80" cy="285" rx="35" ry="42" fill="#5a7a50" opacity="0.4" />
      <line x1="310" y1="480" x2="310" y2="300" stroke="#6b5230" strokeWidth="7" strokeLinecap="round" />
      <line x1="310" y1="380" x2="340" y2="345" stroke="#6b5230" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="310" cy="258" rx="60" ry="72" fill="#4a6741" opacity="0.6" />
      <ellipse cx="330" cy="270" rx="38" ry="48" fill="#3d5c35" opacity="0.4" />
      <circle cx="185" cy="295" r="5" fill="#2e4228" opacity="0.5" />
      <circle cx="215" cy="310" r="4" fill="#2e4228" opacity="0.5" />
      <circle cx="198" cy="320" r="3" fill="#2e4228" opacity="0.5" />
      <circle cx="92" cy="310" r="4" fill="#2e4228" opacity="0.4" />
      <circle cx="315" cy="300" r="4" fill="#2e4228" opacity="0.4" />
      <circle cx="320" cy="80" r="30" fill="#f0c040" opacity="0.15" />
      <circle cx="320" cy="80" r="18" fill="#f0c040" opacity="0.2" />
    </svg>
  );
}

/* ── Arrow icon ── */
function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
