import Link from "next/link";
import { notFound } from "next/navigation";
import { recepten } from "../data";
import { Foto } from "../Foto";

// Deze pagina laat één recept helemaal zien.
export function generateStaticParams() {
  return recepten.map((recept) => ({ naam: recept.naam }));
}

export default async function ReceptPagina({ params }: { params: Promise<{ naam: string }> }) {
  const { naam } = await params;
  const recept = recepten.find((r) => r.naam === naam);
  if (!recept) notFound();

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
      <Foto bestand={recept.foto} titel={recept.titel} rond="14px" />
      <h1 style={{ color: "#cc8844", textAlign: "center", marginTop: "1rem" }}>{recept.titel}</h1>
      <p style={{ textAlign: "center", color: "#777" }}>
        {recept.tijd} · {recept.personen}
      </p>
      {recept.hulp && (
        <p style={{ marginTop: "0.75rem", background: "#fbefe2", padding: "0.5rem 1rem", borderRadius: "10px", textAlign: "center" }}>
          Vraag hulp aan een volwassene!
        </p>
      )}

      <div style={{ width: "100%", marginTop: "1.5rem" }}>
        <h2 style={{ color: "#b0703a" }}>Wat heb je nodig?</h2>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
          {recept.ingredienten.map((ding) => (
            <li key={ding}>{ding}</li>
          ))}
        </ul>

        <h2 style={{ color: "#b0703a", marginTop: "1.5rem" }}>Zo maak je het</h2>
        <ol style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", display: "grid", gap: "0.4rem" }}>
          {recept.stappen.map((stap) => (
            <li key={stap}>{stap}</li>
          ))}
        </ol>
      </div>

      <Link href="/eten" style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
        ← terug naar alle recepten
      </Link>
    </main>
  );
}
