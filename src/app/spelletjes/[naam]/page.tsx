import Link from "next/link";
import { notFound } from "next/navigation";
import { spelletjes } from "../data";

// Deze pagina laat één spelletje helemaal zien, in een iframe.
export function generateStaticParams() {
  return spelletjes.map((spel) => ({ naam: spel.naam }));
}

export default async function SpelletjePagina({ params }: { params: Promise<{ naam: string }> }) {
  const { naam } = await params;
  const spel = spelletjes.find((s) => s.naam === naam);
  if (!spel) notFound();

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        boxSizing: "border-box",
        padding: "1rem",
        gap: "0.75rem",
      }}
    >
      <Link href="/spelletjes">← terug naar alle spelletjes</Link>
      <iframe
        src={spel.bestand}
        title={spel.titel}
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "60rem",
          border: "none",
          borderRadius: "14px",
        }}
      />
    </main>
  );
}
