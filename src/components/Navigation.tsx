"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const categories = [
  { label: "Oleoteca", href: "/colectie/oleoteca" },
  { label: "Măsline", href: "/colectie/masline" },
  { label: "Creme & Paste", href: "/colectie/creme-paste" },
  { label: "Conserve", href: "/colectie/conserve" },
];

const rightLinks = [
  { label: "Ghid", href: "/ghid" },
  { label: "Despre noi", href: "/despre" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(26,39,68,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-8 h-20 flex items-center">
        {/* Category links — left */}
        <ul className="hidden lg:flex items-center gap-8">
          {categories.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs tracking-[0.16em] uppercase text-navy hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo — center (absolute so it stays centered regardless of side links) */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-display text-2xl tracking-[0.3em] uppercase text-navy hover:text-gold transition-colors duration-300 whitespace-nowrap"
        >
          Gourmetteria
        </Link>

        {/* Utility links — right */}
        <ul className="hidden lg:flex items-center gap-8 ml-auto">
          {rightLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs tracking-[0.16em] uppercase text-navy hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/cos"
              className="flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-navy hover:text-gold transition-colors duration-300"
            >
              <CartIcon />
              <span>Coș (0)</span>
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-auto text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meniu"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-navy/10 px-8 py-8 flex flex-col gap-0">
          <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
            Categorii
          </p>
          {categories.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm tracking-[0.14em] uppercase text-navy border-b border-navy/6 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-6 pt-6 border-t border-navy/10 flex flex-col gap-3">
            {[...rightLinks, { label: "Coș", href: "/cos" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.14em] uppercase text-navy/60"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="3" y1="16" x2="21" y2="16" />
    </svg>
  );
}
