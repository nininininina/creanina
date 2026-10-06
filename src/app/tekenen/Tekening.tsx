import type { Stap } from "./data";

// Tekent de stappen tot en met stap "tot".
// Oude lijnen zijn grijs, nieuwe lijnen blauw.
// Met ingekleurd={true} krijgt alles zijn eigen kleur.
export function Tekening({ stappen, tot, ingekleurd = false }: { stappen: Stap[]; tot: number; ingekleurd?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" style={{ width: "100%", display: "block", background: "#f3f7fc", borderRadius: "12px" }}>
      {stappen.slice(0, tot + 1).map((stap, i) =>
        stap.vormen.map((vorm, j) => (
          <path
            key={i + "-" + j}
            d={vorm.d}
            fill="none"
            strokeWidth={ingekleurd ? 6 : i === tot ? 4 : 3}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={ingekleurd ? vorm.kleur : i === tot ? "#5b8fc9" : "#b5b5b5"}
          />
        ))
      )}
    </svg>
  );
}
