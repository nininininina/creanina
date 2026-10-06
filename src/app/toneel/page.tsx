import Link from "next/link";

// Hier staan alle toneeltjes.
// Een regel die begint met "(" is wat de spelers DOEN.
// Een regel zoals "KAT: Hallo!" is wat iemand ZEGT.
const toneeltjes = [
  {
    titel: "De pizza die wegrolde",
    spelers: "3 spelers: Bakker, Klant, Pizza",
    regels: [
      "(De bakker haalt een pizza uit de oven.)",
      "BAKKER: Klaar! De lekkerste pizza van de hele stad.",
      "KLANT: Mmm, die neem ik!",
      "PIZZA: Ho maar! Ik word niet opgegeten. Ik ga op wereldreis!",
      "(De pizza rolt weg.)",
      "BAKKER: Kom terug! Je bent nog warm!",
      "PIZZA: Daarom ga ik naar de Noordpool. Even afkoelen.",
      "KLANT: Maar ik heb honger!",
      "PIZZA: Neem dan een boterham. Die rollen niet weg.",
      "(De klant pakt een boterham. De boterham begint te wiebelen.)",
      "KLANT: Eh… bakker? Mijn boterham beweegt.",
      "BAKKER: O nee. Niet weer!",
      "(Ze rennen allebei achter het eten aan.)",
    ],
  },
  {
    titel: "De kat die koning wilde zijn",
    spelers: "2 spelers: Kat, Muis",
    regels: [
      "KAT: Muis! Vanaf vandaag ben ik de koning van het huis.",
      "MUIS: O ja? Waar is je kroon dan?",
      "KAT: (zoekt overal) Eh… die ligt nog in de wasmand.",
      "MUIS: Een koning zonder kroon is gewoon een kat.",
      "KAT: Dan maak ik er een! (zet een bakje op zijn hoofd)",
      "MUIS: Dat is je etensbakje.",
      "KAT: Het is een etensbakje-kroon. Heel deftig.",
      "MUIS: Goed, koning Kat. Wat is je eerste bevel?",
      "KAT: Iedereen moet de hele dag slapen.",
      "MUIS: Dat doe jij toch al.",
      "KAT: Precies. Ik ben een héél goede koning.",
      "(De kat valt in slaap. De muis pakt stilletjes het bakje en zet het op haar eigen hoofd.)",
      "MUIS: Lang leve koningin Muis!",
    ],
  },
  {
    titel: "De spiegel die alles nadeed",
    spelers: "2 spelers: Kind, Spiegel",
    regels: [
      "(Het kind staat voor de spiegel. De spiegel doet alles na.)",
      "KIND: (zwaait) Hallo!",
      "SPIEGEL: (zwaait) Hallo!",
      "KIND: (krabt op het hoofd) Hé, jij doet mij na.",
      "SPIEGEL: (krabt op het hoofd) Hé, jij doet mij na.",
      "KIND: Nietes!",
      "SPIEGEL: Welles!",
      "(Het kind steekt de tong uit. De spiegel ook.)",
      "KIND: Oké. Ik weet iets wat jij niet kan nadoen.",
      "(Het kind draait zich om en loopt weg.)",
      "SPIEGEL: (kijkt verward rond) Eh… wacht! Waar ga je heen?",
      "SPIEGEL: (tegen het publiek) Help! Wat moet ik nu doen?",
    ],
  },
];

export default function ToneelPage() {
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
      }}
    >
      <h1 style={{ color: "#c9b536" }}>Toneel</h1>
      <p style={{ textAlign: "center" }}>
        Korte toneeltjes om zelf te spelen, voor jong en oud!
      </p>

      {toneeltjes.map((stuk) => (
        <section key={stuk.titel} style={{ marginTop: "2.5rem", width: "100%" }}>
          <h2 style={{ color: "#c9b536", textAlign: "center" }}>
            {stuk.titel}
          </h2>
          <p style={{ textAlign: "center", fontStyle: "italic", color: "#777" }}>
            {stuk.spelers}
          </p>

          <div style={{ marginTop: "1rem" }}>
            {stuk.regels.map((regel, i) => {
              // Wat de spelers doen: schuin en grijs
              if (regel.startsWith("(")) {
                return (
                  <p key={i} style={{ fontStyle: "italic", color: "#777" }}>
                    {regel}
                  </p>
                );
              }
              // Wat iemand zegt: de naam in kleur
              const [rol, ...rest] = regel.split(": ");
              return (
                <p key={i}>
                  <b style={{ color: "#a8961f" }}>{rol}:</b> {rest.join(": ")}
                </p>
              );
            })}
          </div>
        </section>
      ))}

      <Link href="/" style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
        ← terug naar de homepagina
      </Link>
    </main>
  );
}
