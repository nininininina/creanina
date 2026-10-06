import Link from "next/link";

export default function Home() {
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
      {/* Het logo: een zachte regenboog boven de naam */}
      <svg width="150" height="80" viewBox="36 54 188 100" aria-hidden="true" style={{ marginBottom: "-0.75rem" }}>
        <g fill="none" strokeWidth="8" strokeLinecap="round">
          <path d="M40 150 A90 90 0 0 1 220 150" stroke="#d98c8c" />
          <path d="M52 150 A78 78 0 0 1 208 150" stroke="#e0b388" />
          <path d="M64 150 A66 66 0 0 1 196 150" stroke="#d9d18c" />
          <path d="M76 150 A54 54 0 0 1 184 150" stroke="#9cc99c" />
          <path d="M88 150 A42 42 0 0 1 172 150" stroke="#8cb3d9" />
        </g>
      </svg>
      <h1
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: "5rem",
          fontWeight: 400,
          margin: 0,
          background:
            "linear-gradient(90deg, #d98c8c, #e0b388, #d9d18c, #9cc99c, #8cb3d9, #b39cd0, #d09cc0)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Creanina
      </h1>
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "1.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link
            href="/dans"
            style={{ margin: 0, color: "#b05555", textDecoration: "none" }}
          >
            dans
          </Link>
          <Link
            href="/eten"
            style={{ margin: 0, color: "#cc8844", textDecoration: "none" }}
          >
            eten
          </Link>
          <Link
            href="/toneel"
            style={{ margin: 0, color: "#c9b536", textDecoration: "none" }}
          >
            toneel
          </Link>
          <Link
            href="/knutselen"
            style={{ margin: 0, color: "#6fa86f", textDecoration: "none" }}
          >
            knutselen
          </Link>
          <Link
            href="/tekenen"
            style={{ margin: 0, color: "#5b8fc9", textDecoration: "none" }}
          >
            tekenen
          </Link>
          <Link
            href="/spelletjes"
            style={{ margin: 0, color: "#d9638c", textDecoration: "none" }}
          >
            spelletjes
          </Link>
          <Link
            href="/over-mij"
            style={{ margin: 0, color: "#9a7cc0", textDecoration: "none" }}
          >
            over mij
          </Link>
        </div>
        <span
          style={{
            display: "block",
            height: "2px",
            marginTop: "0.25rem",
            background:
              "linear-gradient(90deg, #b05555, #cc8844, #c9b536, #6fa86f, #5b8fc9, #d9638c, #9a7cc0)",
          }}
        />
      </div>
      <p
        style={{
          marginTop: "4rem",
          fontSize: "1rem",
          lineHeight: 1.6,
          textAlign: "center",
          maxWidth: "32rem",
        }}
      >
        Hoi! Ik ben Nina. Creanina bestaat uit twee woorden: creatief en mijn
        naam, Nina.
        <br />
        Ik heb deze creatieve website gemaakt omdat ik ook heel creatief ben.
      </p>
    </main>
  );
}
