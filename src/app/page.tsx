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
          <p style={{ margin: 0, color: "#b05555" }}>dans</p>
          <p style={{ margin: 0, color: "#cc8844" }}>eten</p>
          <p style={{ margin: 0, color: "#c9b536" }}>toneel</p>
          <p style={{ margin: 0, color: "#6fa86f" }}>knutselen</p>
          <p style={{ margin: 0, color: "#5b8fc9" }}>tekenen</p>
        </div>
        <span
          style={{
            display: "block",
            height: "2px",
            marginTop: "0.25rem",
            background:
              "linear-gradient(90deg, #b05555, #cc8844, #c9b536, #6fa86f, #5b8fc9)",
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
