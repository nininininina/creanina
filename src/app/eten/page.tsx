import Link from "next/link";
import { recepten } from "./data";
import { Foto } from "./Foto";

export default function EtenPage() {
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
      <h1 style={{ color: "#cc8844" }}>Eten</h1>
      <p style={{ textAlign: "center" }}>Mijn lievelingsrecepten. Klik op een recept om het te maken!</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
          gap: "1.25rem",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        {recepten.map((recept) => (
          <Link
            key={recept.naam}
            href={"/eten/" + recept.naam}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid #f0d9c0",
              borderRadius: "14px",
              textDecoration: "none",
              color: "inherit",
              background: "#fff",
            }}
          >
            <Foto bestand={recept.foto} titel={recept.titel} />
            <div style={{ padding: "0.9rem 1rem 1rem", display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1 }}>
              <h2 style={{ color: "#b0703a", fontSize: "1.15rem", lineHeight: 1.25 }}>{recept.titel}</h2>
              <p style={{ fontSize: "0.85rem", color: "#777" }}>
                {recept.tijd} · {recept.personen}
              </p>
              <p style={{ fontSize: "0.95rem" }}>{recept.inhoud}</p>
              <span style={{ marginTop: "auto", paddingTop: "0.5rem", color: "#cc8844", fontWeight: 600 }}>
                Bekijk het recept →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Link href="/" style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
