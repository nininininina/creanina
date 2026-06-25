import Link from "next/link";

export default function TekenenPage() {
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
      <h1 style={{ color: "#5b8fc9" }}>Tekenen</h1>
      <p>Hier komt binnenkort meer over tekenen!</p>
      <Link href="/" style={{ marginTop: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
