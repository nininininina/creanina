// Hier staan alle knutselideeën en hun getekende plaatjes.

export const ideeen = [
  {
    naam: "bootje",
    titel: "Papieren bootje",
    inhoud: "Vouw van één blad papier een bootje dat echt drijft.",
    tijd: "10 minuten",
    hulp: false,
    nodig: ["1 blad papier (A4)"],
    stappen: [
      "Vouw het blad dubbel, van boven naar beneden. De vouw ligt bovenaan.",
      "Vouw het dubbel van links naar rechts en open het weer. Nu zie je een lijn in het midden.",
      "Vouw de twee bovenste hoeken naar de middenlijn. Je krijgt een driehoek, zoals een dakje.",
      "Vouw de onderste strook aan de voorkant omhoog. Draai om en doe hetzelfde aan de achterkant. Nu heb je een hoedje!",
      "Duw de zijkanten van het hoedje naar elkaar, zodat het een vierkant wordt.",
      "Vouw de onderste punt aan de voorkant omhoog. Draai om en doe hetzelfde aan de achterkant. Weer een driehoek.",
      "Duw de zijkanten nog eens naar elkaar, zodat het weer een vierkant wordt.",
      "Trek de twee bovenste punten voorzichtig uit elkaar. Je bootje is klaar!",
    ],
    plaatje: "bootje",
  },
  {
    naam: "wc-rol-kat",
    titel: "Kat van een wc-rolletje",
    inhoud: "Maak van een leeg wc-rolletje een lieve kat.",
    tijd: "20 minuten",
    hulp: false,
    nodig: ["1 leeg wc-rolletje", "verf of stiften", "papier voor een staart", "lijm", "zwarte stift"],
    stappen: [
      "Verf het wc-rolletje in de kleur van je kat. Laat het goed drogen.",
      "Duw de bovenkant van het rolletje aan de voorkant een beetje naar binnen. Doe dat ook aan de achterkant. Zo krijg je twee puntige oortjes.",
      "Teken met de zwarte stift twee ogen, een neusje en een mondje.",
      "Teken aan elke kant drie snorharen.",
      "Knip een lange, krullende staart uit papier en plak hem achteraan. Miauw!",
    ],
    plaatje: "kat",
  },
  {
    naam: "regenboog-mobiel",
    titel: "Regenboog-mobiel",
    inhoud: "Een wolk met regenbooglinten om in je kamer op te hangen.",
    tijd: "30 minuten",
    hulp: true,
    nodig: ["wit karton", "linten of stroken papier in 6 kleuren", "schaar", "plakband", "touwtje", "potlood"],
    stappen: [
      "Teken een grote wolk op het karton en knip hem uit. Vraag hulp als het karton dik is.",
      "Knip 6 linten of papierstroken, allemaal even lang.",
      "Leg ze naast elkaar in de kleuren van de regenboog: rood, oranje, geel, groen, blauw en paars.",
      "Plak ze met plakband aan de onderkant van de wolk.",
      "Prik een gaatje bovenaan de wolk en knoop er een touwtje door.",
      "Hang je regenboog op bij het raam. Mooi als het waait!",
    ],
    plaatje: "regenboog",
  },
  {
    naam: "zoutdeeg",
    titel: "Zoutdeeg-figuurtjes",
    inhoud: "Maak zelf klei en vorm er sterretjes, hartjes of dieren van.",
    tijd: "1 uur, en daarna laten drogen",
    hulp: true,
    nodig: ["2 kopjes bloem", "1 kopje zout", "ongeveer driekwart kopje water", "een grote kom", "koekjesvormpjes", "verf"],
    stappen: [
      "Doe de bloem en het zout in de kom en meng het goed.",
      "Giet er beetje bij beetje water bij en kneed alles met je handen.",
      "Kneed tot het deeg zacht en glad is. Plakt het? Doe er wat bloem bij.",
      "Rol het deeg uit en steek er figuurtjes uit met de vormpjes. Of boetseer zelf iets.",
      "Laat de figuurtjes een paar dagen drogen, of laat een volwassene ze in de oven drogen.",
      "Verf ze in je mooiste kleuren als ze helemaal droog zijn.",
    ],
    plaatje: "zoutdeeg",
  },
];

// De plaatjes zijn zelf getekend, met vormpjes (SVG).
export function Plaatje({ soort }: { soort: string }) {
  const achtergrond: Record<string, string> = {
    bootje: "#e5eef9",
    kat: "#f6efe6",
    regenboog: "#f4effa",
    zoutdeeg: "#fbf3e4",
  };
  return (
    <svg viewBox="0 0 160 100" style={{ width: "100%", display: "block", borderRadius: "12px 12px 0 0" }}>
      <rect width="160" height="100" fill={achtergrond[soort]} />
      {soort === "bootje" && (
        <>
          <path d="M0 80 q20 -8 40 0 t40 0 t40 0 t40 0 V100 H0 Z" fill="#8cb3d9" />
          <path d="M40 62 H120 L106 80 H54 Z" fill="#fff" stroke="#5b8fc9" strokeWidth="2" />
          <path d="M80 18 L80 62 L56 62 Z" fill="#fff" stroke="#5b8fc9" strokeWidth="2" />
          <path d="M80 18 L104 62 L80 62 Z" fill="#eef4fb" stroke="#5b8fc9" strokeWidth="2" />
        </>
      )}
      {soort === "kat" && (
        <>
          <path d="M60 30 L66 20 L72 30 H88 L94 20 L100 30 V86 H60 Z" fill="#e0b388" />
          <ellipse cx="80" cy="86" rx="20" ry="4" fill="#c99a6c" />
          <circle cx="72" cy="46" r="3" fill="#333" />
          <circle cx="88" cy="46" r="3" fill="#333" />
          <path d="M78 53 h4 l-2 3 Z" fill="#d98c8c" />
          <path d="M80 56 q-4 4 -7 1 M80 56 q4 4 7 1" stroke="#333" strokeWidth="1.5" fill="none" />
          <path d="M60 52 h-12 M60 56 l-12 3 M100 52 h12 M100 56 l12 3" stroke="#333" strokeWidth="1.5" />
          <path d="M100 76 q22 0 18 -20 q-2 -8 6 -10" stroke="#e0b388" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      )}
      {soort === "regenboog" && (
        <>
          <path d="M40 18 h80" stroke="#999" strokeWidth="1.5" />
          <path d="M80 6 V18" stroke="#999" strokeWidth="1.5" />
          <path d="M44 40 a12 12 0 0 1 10 -16 a16 16 0 0 1 28 -4 a14 14 0 0 1 26 8 a10 10 0 0 1 8 12 Z" fill="#fff" stroke="#d6d0e0" strokeWidth="2" />
          {["#d98c8c", "#e0b388", "#d9d18c", "#9cc99c", "#8cb3d9", "#b39cd0"].map((kleur, i) => (
            <path key={kleur} d={`M${56 + i * 10} 40 q-4 ${20 + (i % 2) * 6} 2 ${44 - (i % 3) * 4}`} stroke={kleur} strokeWidth="5" fill="none" strokeLinecap="round" />
          ))}
        </>
      )}
      {soort === "zoutdeeg" && (
        <>
          <path d="M50 30 L55 42 L68 42 L58 50 L62 63 L50 55 L38 63 L42 50 L32 42 L45 42 Z" fill="#d9d18c" stroke="#c9b536" strokeWidth="1.5" />
          <path d="M105 70 C90 58 88 46 97 42 C102 40 105 44 105 48 C105 44 108 40 113 42 C122 46 120 58 105 70 Z" fill="#d98c8c" stroke="#b05555" strokeWidth="1.5" />
          <circle cx="62" cy="80" r="11" fill="#9cc99c" stroke="#6fa86f" strokeWidth="1.5" />
          <circle cx="58" cy="78" r="1.5" fill="#fff" />
          <circle cx="66" cy="78" r="1.5" fill="#fff" />
          <path d="M120 22 a8 8 0 1 0 0.1 0 Z" fill="#8cb3d9" stroke="#5b8fc9" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}
