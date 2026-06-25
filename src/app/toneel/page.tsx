import Link from "next/link";

export default function ToneelPage() {
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
      <h1 style={{ color: "#c9b536" }}>Toneel</h1>
      <p>Hier komt binnenkort meer over toneel!</p>
      <Link href="/" style={{ marginTop: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
