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

function FrietjesIcoon() {
  return (
    <svg viewBox="0 0 160 100" style={{ width: "100%", display: "block" }}>
      <rect width="160" height="100" fill="#fbe8d0" />
      <path d="M62 44 L98 44 L92 92 H68 Z" fill="#E8432E" />
      <rect x="58" y="34" width="44" height="14" rx="2" fill="#E8432E" />
      <rect x="66" y="16" width="5" height="26" fill="#FFC53D" />
      <rect x="76" y="10" width="5" height="32" fill="#FFC53D" />
      <rect x="86" y="18" width="5" height="24" fill="#FFC53D" />
      <rect x="94" y="22" width="5" height="20" fill="#FFC53D" />
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
            <FrietjesIcoon />
            <div style={{ padding: "0.9rem 1rem 1rem" }}>
              <h3 style={{ color: "#d9638c", fontSize: "1.15rem", lineHeight: 1.25, margin: 0 }}>
                {spel.titel}
              </h3>
              <p style={{ fontSize: "0.9rem", margin: "0.4rem 0 0" }}>{spel.info}</p>
              <span style={{ display: "block", marginTop: "0.5rem", color: "#d9638c", fontWeight: 600 }}>
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
