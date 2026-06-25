import Link from "next/link";

export default function DansPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        width: "fit-content",
        marginInline: "auto",
      }}
    >
      <h1 style={{ color: "#b05555" }}>Dans</h1>
      <p>Hier komt binnenkort meer over dans!</p>
      <Link href="/" style={{ marginTop: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
