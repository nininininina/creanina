import { notFound } from "next/navigation";
import { stijlen } from "../data";

// Deze pagina laat de dansjes van één dansstijl zien.
export function generateStaticParams() {
  return stijlen.map((stijl) => ({ stijl: stijl.naam }));
}

export default async function StijlPagina({ params }: { params: Promise<{ stijl: string }> }) {
  const { stijl: naam } = await params;
  const stijl = stijlen.find((s) => s.naam === naam);
  if (!stijl) notFound();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <p style={{ textAlign: "center", fontSize: "1.1rem" }}>{stijl.over}</p>

      {stijl.dansjes.map((dansje) => (
        <section
          key={dansje.titel}
          style={{
            background: "#fff",
            border: "2px solid " + stijl.zacht,
            borderRadius: "16px",
            padding: "1.25rem",
            boxShadow: "0 4px 14px rgba(120, 90, 150, 0.08)",
          }}
        >
          <h2 style={{ color: stijl.kleur }}>{dansje.titel}</h2>
          <p style={{ color: "#777", marginBottom: "1rem" }}>{dansje.uitleg}</p>

          <ol style={{ listStyle: "none", display: "grid", gap: "0.6rem" }}>
            {dansje.stappen.map((stap) => (
              <li key={stap.tel} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    minWidth: "3.5rem",
                    textAlign: "center",
                    background: stijl.zacht,
                    color: stijl.kleur,
                    fontWeight: 800,
                    borderRadius: "999px",
                    padding: "0.1rem 0.5rem",
                  }}
                >
                  {stap.tel}
                </span>
                <span>{stap.tekst}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
