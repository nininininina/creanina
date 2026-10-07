import Link from "next/link";
import { ideeen, Plaatje } from "./data";

export default function KnutselenPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginInline: "auto",
        paddingInline: "1rem",
        maxWidth: "40rem",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ color: "#6fa86f" }}>Knutselen</h1>
      <p style={{ textAlign: "center" }}>Leuke dingen om zelf te maken. Klik op een idee om te beginnen!</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
          gap: "1.25rem",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        {ideeen.map((idee) => (
          <Link
            key={idee.naam}
            href={"/knutselen/" + idee.naam}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid #d5ead5",
              borderRadius: "14px",
              color: "inherit",
              background: "#fff",
            }}
          >
            <Plaatje soort={idee.plaatje} />
            <div style={{ padding: "0.9rem 1rem 1rem", display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1 }}>
              <h2 style={{ color: "#4f8a4f", fontSize: "1.15rem", lineHeight: 1.25 }}>{idee.titel}</h2>
              <p style={{ fontSize: "0.85rem", color: "#777" }}>{idee.tijd}</p>
              <p style={{ fontSize: "0.95rem" }}>{idee.inhoud}</p>
              <span style={{ marginTop: "auto", paddingTop: "0.5rem", color: "#6fa86f", fontWeight: 700 }}>
                Maak het zelf →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Link href="/" style={{ marginTop: "2.5rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
