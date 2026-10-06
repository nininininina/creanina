import type { Metadata } from "next";
import { Great_Vibes, Nunito } from "next/font/google";
import "./globals.css";

// Het sierlijke lettertype voor de titel "Creanina"
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand",
});

// Een rond, vriendelijk lettertype voor alle andere tekst
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Creanina",
  description:
    "Creanina is de creatieve website van Nina, met dans, eten, toneel, knutselen en tekenen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={greatVibes.variable + " " + nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
