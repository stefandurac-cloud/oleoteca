import Link from "next/link";
import Image from "next/image";
import ProductIllustration, { IllustrationType } from "./ProductIllustration";

/* ── Types ── */

export interface PromoProduct {
  id: number;
  category: string;
  categorySlug: string;
  name: string;
  region: string;
  subtitle: string;
  notes: string[];
  harvest: string;
  price: string;
  volume: string;
  slug: string;
  illustration: IllustrationType;
  primary: string;
  accent: string;
  badge?: string | null;
}

export interface PromoSectionProps {
  label?: string;
  title: string;
  description: string;
  /**
   * Culoarea de fundal a bannerului (orice valoare CSS validă).
   * Dacă furnizezi și bgImage, culoarea devine overlay semi-transparent.
   */
  bg?: string;
  /**
   * URL imagine de fundal (din /public sau extern).
   * Exemplu: "/campanii/pesti-mediteraneeni.jpg"
   * Când e prezent, `bg` devine overlay colorat peste imagine.
   */
  bgImage?: string;
  /** Cât de opac e overlay-ul colorat peste imagine (0–1). Default 0.65 */
  bgOverlayOpacity?: number;
  /** true = text alb (fundal închis), false = text navy (fundal deschis) */
  textLight?: boolean;
  /** Culoarea accentelor (eyebrow, buton). Default auriu. */
  accentColor?: string;
  linkHref: string;
  linkLabel?: string;
  products: PromoProduct[];
  /** Tipul ilustrației decorative mari din dreapta bannerului */
  decorativeType?: IllustrationType;
  decorativeColor?: string;
}

/* ── Component ── */

export default function PromoSection({
  label,
  title,
  description,
  bg = "#1a2744",
  bgImage,
  bgOverlayOpacity = 0.65,
  textLight = true,
  accentColor,
  linkHref,
  linkLabel = "Vezi toată selecția",
  products,
  decorativeType,
  decorativeColor = "white",
}: PromoSectionProps) {
  const accent = accentColor ?? (textLight ? "#c9a84c" : "#b8962e");
  const cols =
    products.length === 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section>
      {/* ── Banner ── */}
      <div className="relative overflow-hidden px-8 py-20 lg:py-28">
        {/* Background color */}
        <div className="absolute inset-0" style={{ backgroundColor: bg }} />

        {/* Background image (when provided) */}
        {bgImage && (
          <>
            <Image
              src={bgImage}
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden
            />
            {/* Color overlay */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: bg, opacity: bgOverlayOpacity }}
            />
          </>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div>
              {label && (
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ color: accent }}
                >
                  {label}
                </p>
              )}

              <h2
                className={`font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.0] mb-6 ${
                  textLight ? "text-white" : "text-navy"
                }`}
              >
                {title}
              </h2>

              <p
                className={`text-base leading-relaxed max-w-md mb-10 ${
                  textLight ? "text-white/60" : "text-navy/60"
                }`}
              >
                {description}
              </p>

              <Link
                href={linkHref}
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: accent,
                  color: textLight ? "#1a2744" : "#ffffff",
                }}
              >
                {linkLabel}
                <ArrowRight />
              </Link>
            </div>

            {/* Decorative illustration (desktop only) */}
            {decorativeType && (
              <div className="hidden lg:flex justify-end items-center h-72 xl:h-80">
                <div className="h-full w-auto max-w-[180px] xl:max-w-[220px] opacity-15">
                  <ProductIllustration
                    type={decorativeType}
                    primaryColor={decorativeColor}
                    accentColor={decorativeColor}
                    className="h-full w-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Product cards ── */}
      <div className="bg-white px-8 py-14 border-b border-navy/6">
        <div className="max-w-screen-xl mx-auto">
          <div className={`grid gap-6 lg:gap-8 ${cols}`}>
            {products.map((p) => (
              <PromoProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Card (same visual style as Selecția lunii) ── */
function PromoProductCard({ product }: { product: PromoProduct }) {
  return (
    <article className="group flex flex-col">
      {/* Visual */}
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
            <p className="text-xl font-normal text-navy">{product.price}</p>
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
