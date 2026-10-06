import Link from "next/link";
import { notFound } from "next/navigation";
import { lessen } from "../data";
import { Tekening } from "../Tekening";

// Deze pagina laat één tekenles zien, stap voor stap.
export function generateStaticParams() {
  return lessen.map((les) => ({ naam: les.naam }));
}

export default async function LesPagina({ params }: { params: Promise<{ naam: string }> }) {
  const { naam } = await params;
  const les = lessen.find((l) => l.naam === naam);
  if (!les) notFound();

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginInline: "auto",
        paddingInline: "1rem",
        maxWidth: "44rem",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ color: "#5b8fc9", textAlign: "center" }}>Teken {les.titel.toLowerCase()}</h1>
      <p style={{ textAlign: "center", color: "#777" }}>De blauwe lijnen teken je in die stap.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
          gap: "1.25rem",
          width: "100%",
          marginTop: "1.5rem",
        }}
      >
        {les.stappen.map((stap, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Tekening stappen={les.stappen} tot={i} />
            <p>
              <b style={{ color: "#4a7bb0" }}>Stap {i + 1}.</b> {stap.tekst}
            </p>
          </div>
        ))}
      </div>

      <h2 style={{ color: "#5b8fc9", marginTop: "2.5rem" }}>Zo kan hij eruitzien!</h2>
      <div style={{ width: "100%", maxWidth: "16rem", marginTop: "1rem" }}>
        <Tekening stappen={les.stappen} tot={les.stappen.length - 1} ingekleurd />
      </div>

      <Link href="/tekenen" style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
        ← terug naar alle tekenlessen
      </Link>
    </main>
  );
}
