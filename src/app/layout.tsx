import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Oleoteca — Selecție Premium de Ulei Extravirgin",
  description:
    "Descoperă cele mai fine uleiuri de măsline extravirgine, măsline de soi, creme și conserve mediteraneene fine.",
  keywords: "ulei masline extravirgin, masline de soi, conserve mediteraneene, oleoteca, premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
