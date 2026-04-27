import Link from "next/link";

const columns = [
  {
    title: "Categorii",
    links: [
      { label: "Uleiuri extravirgine", href: "/colectie/uleiuri" },
      { label: "Măsline de soi", href: "/colectie/masline" },
      { label: "Creme & Paste", href: "/colectie/creme-paste" },
      { label: "Conserve fine", href: "/colectie/conserve" },
      { label: "Ediții limitate", href: "/colectie/editii-limitate" },
    ],
  },
  {
    title: "Regiuni",
    links: [
      { label: "Italia", href: "/regiuni/italia" },
      { label: "Grecia", href: "/regiuni/grecia" },
      { label: "Spania", href: "/regiuni/spania" },
      { label: "Franța", href: "/regiuni/franta" },
      { label: "România", href: "/regiuni/romania" },
    ],
  },
  {
    title: "Oleoteca",
    links: [
      { label: "Despre noi", href: "/despre" },
      { label: "Ghid de degustare", href: "/ghid" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Abonamente", href: "/abonamente" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      {/* Top section */}
      <div className="max-w-screen-xl mx-auto px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl tracking-[0.3em] uppercase text-white block mb-6"
            >
              Oleoteca
            </Link>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Selecție premium de uleiuri de măsline extravirgine din cele mai
              renumite oleoteci ale lumii.
            </p>
            <div className="mt-8 flex items-center gap-1">
              <span className="text-xs tracking-widest uppercase text-gold">
                oleoteca.ro
              </span>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-white mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 hover:text-gold transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Gold divider */}
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="h-px bg-gold/20" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-screen-xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30 tracking-wide">
          © 2024 Oleoteca. Toate drepturile rezervate.
        </p>
        <div className="flex items-center gap-8">
          <Link
            href="/politica-confidentialitate"
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            Politica de confidențialitate
          </Link>
          <Link
            href="/termeni"
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            Termeni și condiții
          </Link>
        </div>
      </div>
    </footer>
  );
}
