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
  title: "Gourmetteria — Artizanat mediteranean, ales cu grijă",
  description:
    "Boutique gourmet mediteranean — produse artizanale premium selecționate cu grijă de la producători mici: uleiuri Oleoteca, măsline de soi, creme, paste și conserve fine.",
  keywords: "produse gourmet mediteraneene, gourmetteria, oleoteca, ulei masline extravirgin, artizanal premium",
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
