import Link from "next/link";

export default function KnutselenPage() {
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
      <h1 style={{ color: "#6fa86f" }}>Knutselen</h1>
      <p>Hier komt binnenkort meer over knutselen!</p>
      <Link href="/" style={{ marginTop: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
