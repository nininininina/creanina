import Link from "next/link";
import { spelletjes } from "./data";

const kaartStijl = {
  display: "flex",
  flexDirection: "column" as const,
  border: "2px solid #f0c3a3",
  borderRadius: "14px",
  textDecoration: "none",
  color: "inherit",
  background: "#fff",
  overflow: "hidden",
};

const rasterStijl = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
  gap: "1.25rem",
  width: "100%",
  marginTop: "1.5rem",
};

function SpelIcoon({ achtergrond, accent }: { achtergrond: string; accent: string }) {
  return (
    <svg viewBox="0 0 160 100" style={{ width: "100%", display: "block" }}>
      <rect width="160" height="100" fill={achtergrond} />
      <rect x="50" y="42" width="60" height="30" rx="15" fill={accent} />
      <circle cx="68" cy="57" r="6" fill="#fff" />
      <circle cx="96" cy="50" r="5" fill="#fff" />
      <circle cx="108" cy="60" r="5" fill="#fff" />
    </svg>
  );
}

export default function SpelletjesPage() {
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
      <h1 style={{ color: "#d9638c" }}>Spelletjes</h1>
      <p style={{ textAlign: "center" }}>Klik op een spelletje om het te spelen!</p>

      <div style={rasterStijl}>
        {spelletjes.map((spel) => (
          <Link key={spel.naam} href={"/spelletjes/" + spel.naam} style={kaartStijl}>
            <SpelIcoon achtergrond={spel.achtergrond} accent={spel.accent} />
            <div style={{ padding: "0.9rem 1rem 1rem" }}>
              <h3 style={{ color: spel.accent, fontSize: "1.15rem", lineHeight: 1.25, margin: 0 }}>
                {spel.titel}
              </h3>
              <p style={{ fontSize: "0.9rem", margin: "0.4rem 0 0" }}>{spel.info}</p>
              <span style={{ display: "block", marginTop: "0.5rem", color: spel.accent, fontWeight: 600 }}>
                Speel het spel →
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
