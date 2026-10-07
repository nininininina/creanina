"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { stijlen } from "./data";

// Het balkje bovenaan met alle dansstijlen.
// De dans waar je nu bent, krijgt een kleurtje.
export function DansMenu() {
  const pad = usePathname();

  return (
    <nav
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.5rem",
        marginTop: "1rem",
        padding: "0.5rem",
        background: "#fff",
        borderRadius: "999px",
        boxShadow: "0 4px 14px rgba(120, 90, 150, 0.08)",
      }}
    >
      {stijlen.map((stijl) => {
        const actief = pad === "/dans/" + stijl.naam;
        return (
          <Link
            key={stijl.naam}
            href={"/dans/" + stijl.naam}
            style={{
              padding: "0.35rem 1rem",
              borderRadius: "999px",
              fontWeight: 700,
              color: actief ? "#fff" : stijl.kleur,
              background: actief ? stijl.kleur : stijl.zacht,
            }}
          >
            {stijl.titel}
          </Link>
        );
      })}
    </nav>
  );
}
