import Link from "next/link";
import { lessen } from "./data";
import { Tekening } from "./Tekening";

export default function TekenenPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginInline: "auto",
        paddingInline: "1rem",
        maxWidth: "48rem",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ color: "#5b8fc9" }}>Tekenen</h1>
      <p style={{ textAlign: "center" }}>Leer stap voor stap tekenen. Pak een potlood en papier en kies een tekening!</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
          gap: "1.25rem",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        {lessen.map((les) => (
          <Link
            key={les.naam}
            href={"/tekenen/" + les.naam}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid #d3e2f2",
              borderRadius: "14px",
              textDecoration: "none",
              color: "inherit",
              background: "#fff",
              padding: "0.75rem",
              gap: "0.4rem",
            }}
          >
            <Tekening stappen={les.stappen} tot={les.stappen.length - 1} ingekleurd />
            <h2 style={{ color: "#4a7bb0", fontSize: "1.15rem", marginTop: "0.4rem" }}>{les.titel}</h2>
            <p style={{ fontSize: "0.85rem", color: "#777" }}>{les.stappen.length} stappen</p>
            <p style={{ fontSize: "0.95rem" }}>{les.inhoud}</p>
            <span style={{ marginTop: "auto", paddingTop: "0.4rem", color: "#5b8fc9", fontWeight: 600 }}>Leer het tekenen →</span>
          </Link>
        ))}
      </div>

      <Link href="/" style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
