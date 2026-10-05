import Link from "next/link";

export default function OverMijPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginInline: "auto",
        paddingInline: "1rem",
        maxWidth: "36rem",
        lineHeight: 1.6,
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#9a7cc0" }}>Over mij</h1>

      <h2 style={{ marginTop: "2rem", color: "#9a7cc0" }}>Wie ik ben</h2>
      <p>
        Ik ben Nina. Later word ik architecte. Ik ben ook ontwerpster en
        zangeres, en ik ben het baasje van mijn kat.
      </p>

      <h2 style={{ marginTop: "2rem", color: "#9a7cc0" }}>
        Wat ik lekker en mooi vind
      </h2>
      <p>
        Mijn lievelingskleuren zijn paars, blauw en roze. En ik ben gek op
        donuts!
      </p>

      <h2 style={{ marginTop: "2rem", color: "#9a7cc0" }}>Mijn Droomhotel</h2>
      <p>
        Een hotel met zeven torens. Binnen zijn er trampolinevloeren om op te
        springen en een eigen theater.
      </p>

      <h2 style={{ marginTop: "2rem", color: "#9a7cc0" }}>Mijn Droomhuis</h2>
      <p>
        Het huis waar ik later wil wonen. Ik ontwerp het helemaal zelf, met
        plaats voor mijn kat.
      </p>

      <Link href="/" style={{ marginTop: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
