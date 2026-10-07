import Link from "next/link";
import { notFound } from "next/navigation";
import { ideeen, Plaatje } from "../data";

// Deze pagina laat één knutselidee helemaal zien.
export function generateStaticParams() {
  return ideeen.map((idee) => ({ naam: idee.naam }));
}

export default async function IdeePagina({ params }: { params: Promise<{ naam: string }> }) {
  const { naam } = await params;
  const idee = ideeen.find((i) => i.naam === naam);
  if (!idee) notFound();

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginInline: "auto",
        paddingInline: "1rem",
        maxWidth: "36rem",
        lineHeight: 1.6,
      }}
    >
      <div style={{ width: "100%", maxWidth: "24rem" }}>
        <Plaatje soort={idee.plaatje} />
      </div>
      <h1 style={{ color: "#6fa86f", textAlign: "center", marginTop: "1rem" }}>{idee.titel}</h1>
      <p style={{ textAlign: "center", color: "#777" }}>{idee.tijd}</p>
      {idee.hulp && (
        <p style={{ marginTop: "0.75rem", background: "#e6f3e6", padding: "0.5rem 1rem", borderRadius: "10px", textAlign: "center" }}>
          Vraag hulp aan een volwassene!
        </p>
      )}

      <div style={{ width: "100%", marginTop: "1.5rem" }}>
        <h2 style={{ color: "#4f8a4f" }}>Wat heb je nodig?</h2>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
          {idee.nodig.map((ding) => (
            <li key={ding}>{ding}</li>
          ))}
        </ul>

        <h2 style={{ color: "#4f8a4f", marginTop: "1.5rem" }}>Zo maak je het</h2>
        <ol style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "grid", gap: "0.4rem" }}>
          {idee.stappen.map((stap) => (
            <li key={stap}>{stap}</li>
          ))}
        </ol>
      </div>

      <Link href="/knutselen" style={{ marginTop: "2.5rem" }}>
        ← terug naar alle knutselideeën
      </Link>
    </main>
  );
}
