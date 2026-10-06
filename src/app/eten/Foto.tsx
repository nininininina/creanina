import fs from "fs";
import path from "path";

// Laat de foto zien. Is er nog geen foto? Dan staat er een vakje.
export function Foto({ bestand, titel, rond = "12px 12px 0 0" }: { bestand: string; titel: string; rond?: string }) {
  const bestaat = fs.existsSync(path.join(process.cwd(), "public", "eten", bestand));

  if (bestaat) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={"/eten/" + bestand}
        alt={titel}
        style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", display: "block", borderRadius: rond }}
      />
    );
  }

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 10",
        background: "#f7e6d3",
        borderRadius: rond,
        display: "grid",
        placeItems: "center",
        color: "#cc8844",
        fontSize: "0.9rem",
      }}
    >
      foto komt hier
    </div>
  );
}
