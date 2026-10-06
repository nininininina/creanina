import Link from "next/link";
import { internetToneeltjes, eigenToneeltjes, Plaatje } from "./data";

const kaartStijl = {
  display: "flex",
  flexDirection: "column" as const,
  border: "2px solid #eee3a8",
  borderRadius: "14px",
  textDecoration: "none",
  color: "inherit",
  background: "#fff",
};

const rasterStijl = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
  gap: "1.25rem",
  width: "100%",
  marginTop: "1.5rem",
};

function KaartTekst({ titel, info, inhoud, knop }: { titel: string; info: string; inhoud: string; knop: string }) {
  return (
    <div style={{ padding: "0.9rem 1rem 1rem", display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1 }}>
      <h3 style={{ color: "#a8961f", fontSize: "1.15rem", lineHeight: 1.25 }}>{titel}</h3>
      <p style={{ fontSize: "0.85rem", color: "#777" }}>{info}</p>
      <p style={{ fontSize: "0.95rem" }}>{inhoud}</p>
      <span style={{ marginTop: "auto", paddingTop: "0.5rem", color: "#c9b536", fontWeight: 600 }}>{knop}</span>
    </div>
  );
}

export default function ToneelPage() {
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
      <h1 style={{ color: "#c9b536" }}>Toneel</h1>
      <p style={{ textAlign: "center" }}>Klik op een toneeltje om het te bekijken!</p>

      <h2 style={{ color: "#c9b536", marginTop: "2rem" }}>Mijn eigen toneeltjes</h2>
      <div style={rasterStijl}>
        {eigenToneeltjes.map((stuk) => (
          <Link key={stuk.naam} href={"/toneel/" + stuk.naam} style={kaartStijl}>
            <Plaatje soort={stuk.plaatje} />
            <KaartTekst titel={stuk.titel} info={stuk.spelers} inhoud={stuk.inhoud} knop="Lees het toneeltje →" />
          </Link>
        ))}
      </div>

      <h2 style={{ color: "#c9b536", marginTop: "3rem" }}>Toneeltjes van internet</h2>
      <div style={rasterStijl}>
        {internetToneeltjes.map((stuk) => (
          <a key={stuk.titel} href={stuk.link} target="_blank" rel="noopener noreferrer" style={kaartStijl}>
            <Plaatje soort={stuk.plaatje} />
            <KaartTekst titel={stuk.titel} info={"door " + stuk.schrijver + " · " + stuk.info} inhoud={stuk.inhoud} knop="Bekijk het toneeltje →" />
          </a>
        ))}
      </div>

      <Link href="/" style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
