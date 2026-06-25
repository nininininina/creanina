import Link from "next/link";

export default function EtenPage() {
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
      <h1 style={{ color: "#cc8844" }}>Eten</h1>
      <p>Hier komt binnenkort meer over eten!</p>
      <Link href="/" style={{ marginTop: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
