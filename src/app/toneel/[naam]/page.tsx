import Link from "next/link";
import { notFound } from "next/navigation";
import { eigenToneeltjes, Plaatje } from "../data";

// Deze pagina laat één eigen toneeltje helemaal zien.
export function generateStaticParams() {
  return eigenToneeltjes.map((stuk) => ({ naam: stuk.naam }));
}

export default async function ToneeltjePagina({ params }: { params: Promise<{ naam: string }> }) {
  const { naam } = await params;
  const stuk = eigenToneeltjes.find((s) => s.naam === naam);
  if (!stuk) notFound();

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
      <div style={{ width: "100%", maxWidth: "22rem" }}>
        <Plaatje soort={stuk.plaatje} />
      </div>
      <h1 style={{ color: "#c9b536", textAlign: "center", marginTop: "1rem" }}>{stuk.titel}</h1>
      <p style={{ textAlign: "center", fontStyle: "italic", color: "#777" }}>{stuk.spelers}</p>

      <div style={{ marginTop: "1.5rem", width: "100%" }}>
        {stuk.regels.map((regel, i) => {
          if (regel.startsWith("(")) {
            return (
              <p key={i} style={{ fontStyle: "italic", color: "#777" }}>
                {regel}
              </p>
            );
          }
          const [rol, ...rest] = regel.split(": ");
          return (
            <p key={i}>
              <b style={{ color: "#a8961f" }}>{rol}:</b> {rest.join(": ")}
            </p>
          );
        })}
      </div>

      <Link href="/toneel" style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
        ← terug naar alle toneeltjes
      </Link>
    </main>
  );
}
