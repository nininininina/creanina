import Link from "next/link";
import { DansMenu } from "./DansMenu";

// Dit staat op elke danspagina: de titel, het balkje en een terug-knop.
export default function DansLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginInline: "auto",
        paddingInline: "1rem",
        maxWidth: "44rem",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ color: "#b05555" }}>Dans</h1>
      <DansMenu />
      <div style={{ width: "100%", marginTop: "2rem" }}>{children}</div>
      <Link href="/" style={{ marginTop: "2.5rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
