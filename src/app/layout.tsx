import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand",
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
    <html lang="nl" className={greatVibes.variable}>
      <body>{children}</body>
    </html>
  );
}
