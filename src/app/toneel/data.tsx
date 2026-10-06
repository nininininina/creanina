// Hier staan alle toneeltjes en de getekende plaatjes.
// Een regel die begint met "(" is wat de spelers DOEN.
// Een regel zoals "KAT: Hallo!" is wat iemand ZEGT.

export const internetToneeltjes = [
  {
    titel: "Sprookjes moet je uitlezen",
    schrijver: "S. Helder",
    info: "6 spelers · 60 minuten",
    inhoud:
      "De sprookjesfiguren hebben geen zin meer in hun eigen verhaal. Dan wordt de heks per ongeluk ontvoerd door twee domme boeven, die denken dat ze Sneeuwwitje is!",
    link: "https://www.toneeluitgeverijvink.nl/toneelstukken/22445/sprookjes-moet-je-uitlezen/",
    plaatje: "heks",
  },
  {
    titel: "In sprookjes weet je 't nooit",
    schrijver: "P. van den Bijllaardt",
    info: "6 spelers · 45 minuten",
    inhoud:
      "Prins Krelis is in een kikker veranderd. Roodkapje en Grietje willen hem wel redden, maar alleen als hij ervoor betaalt.",
    link: "https://www.toneeluitgeverijvink.nl/toneelstukken/16116/in-sprookjes-weet-je-t-nooit/",
    plaatje: "kikker",
  },
  {
    titel: "Assepoester, de poppen aan het dansen",
    schrijver: "I. Schrama",
    info: "14 spelers · 75 minuten",
    inhoud:
      "Een toneelgroep speelt het sprookje van Assepoester als een reusachtige poppenkast.",
    link: "https://www.toneeluitgeverijvink.nl/toneelstukken/10748/assepoester-de-poppen-aan-het-dansen/",
    plaatje: "schoentje",
  },
  {
    titel: "Meneer Koriander en de krakers",
    schrijver: "J. Koopmans",
    info: "8 spelers · 85 minuten",
    inhoud:
      "Een rijke meneer verveelt zich, tot zijn huis gekraakt wordt en hij ontvoerd wordt. Zo begint een groot avontuur.",
    link: "https://www.toneeluitgeverijvink.nl/toneelstukken/18580/meneer-koriander-en-de-krakers/",
    plaatje: "put",
  },
];


// De plaatjes zijn zelf getekend, met vormpjes (SVG).
export function Plaatje({ soort }: { soort: string }) {
  const achtergrond: Record<string, string> = {
    heks: "#ece4f7",
    kikker: "#e3f3e3",
    schoentje: "#e6eef9",
    put: "#fbf0dd",
    pizza: "#fbe8d8",
    kat: "#eceff4",
    spiegel: "#e6f2f2",
  };
  return (
    <svg viewBox="0 0 160 100" style={{ width: "100%", display: "block", borderRadius: "12px 12px 0 0" }}>
      <rect width="160" height="100" fill={achtergrond[soort]} />
      {soort === "heks" && (
        <>
          <path d="M80 12 L104 66 H56 Z" fill="#9a7cc0" />
          <ellipse cx="80" cy="68" rx="42" ry="8" fill="#7d5fa8" />
          <rect x="62" y="56" width="36" height="7" fill="#c9b536" />
          <rect x="54" y="78" width="52" height="12" rx="2" fill="#b05555" />
          <path d="M80 78 V90" stroke="#fff" strokeWidth="2" />
          <circle cx="126" cy="24" r="4" fill="#c9b536" />
          <circle cx="34" cy="30" r="3" fill="#c9b536" />
        </>
      )}
      {soort === "kikker" && (
        <>
          <ellipse cx="80" cy="70" rx="34" ry="20" fill="#6fa86f" />
          <circle cx="64" cy="50" r="11" fill="#6fa86f" />
          <circle cx="96" cy="50" r="11" fill="#6fa86f" />
          <circle cx="64" cy="49" r="5" fill="#fff" />
          <circle cx="96" cy="49" r="5" fill="#fff" />
          <circle cx="65" cy="50" r="2.5" fill="#222" />
          <circle cx="97" cy="50" r="2.5" fill="#222" />
          <path d="M66 74 Q80 84 94 74" stroke="#3f6f3f" strokeWidth="2.5" fill="none" />
          <path d="M64 34 L68 22 L74 30 L80 18 L86 30 L92 22 L96 34 Z" fill="#c9b536" />
        </>
      )}
      {soort === "schoentje" && (
        <>
          <path d="M44 72 C60 72 76 60 88 46 C94 40 104 42 108 50 L116 66 H122 V76 H44 Z" fill="#8cb3d9" opacity="0.9" />
          <rect x="112" y="66" width="8" height="18" fill="#5b8fc9" />
          <circle cx="40" cy="30" r="3" fill="#fff" />
          <circle cx="128" cy="26" r="4" fill="#fff" />
          <circle cx="70" cy="22" r="2.5" fill="#fff" />
          <path d="M100 30 L103 24 L106 30 L112 31 L107 35 L108 41 L103 38 L98 41 L99 35 L94 31 Z" fill="#c9b536" />
        </>
      )}
      {soort === "put" && (
        <>
          <rect x="56" y="56" width="48" height="30" rx="4" fill="#cc8844" />
          <path d="M56 64 H104 M56 74 H104" stroke="#a86a2e" strokeWidth="2" />
          <rect x="58" y="26" width="4" height="32" fill="#7a4e2a" />
          <rect x="98" y="26" width="4" height="32" fill="#7a4e2a" />
          <path d="M52 28 L80 14 L108 28 Z" fill="#b05555" />
          <path d="M80 30 V46" stroke="#555" strokeWidth="1.5" />
          <rect x="74" y="46" width="12" height="9" rx="2" fill="#8cb3d9" />
          <path d="M120 60 q4 8 0 10 q-4 -2 0 -10 Z" fill="#5b8fc9" />
          <path d="M132 50 q4 8 0 10 q-4 -2 0 -10 Z" fill="#5b8fc9" />
        </>
      )}
      {soort === "pizza" && (
        <>
          <circle cx="72" cy="56" r="30" fill="#e0b388" />
          <circle cx="72" cy="56" r="25" fill="#d98c8c" />
          <circle cx="62" cy="48" r="4" fill="#b05555" />
          <circle cx="80" cy="46" r="4" fill="#b05555" />
          <circle cx="76" cy="64" r="4" fill="#b05555" />
          <circle cx="60" cy="64" r="3" fill="#6fa86f" />
          <circle cx="86" cy="58" r="3" fill="#6fa86f" />
          <path d="M110 40 h20 M114 52 h22 M110 64 h18" stroke="#cc8844" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {soort === "kat" && (
        <>
          <ellipse cx="80" cy="74" rx="30" ry="16" fill="#9aa3b5" />
          <circle cx="80" cy="50" r="18" fill="#9aa3b5" />
          <path d="M64 40 L66 24 L76 34 Z M96 40 L94 24 L84 34 Z" fill="#9aa3b5" />
          <circle cx="73" cy="50" r="2.5" fill="#222" />
          <circle cx="87" cy="50" r="2.5" fill="#222" />
          <circle cx="80" cy="56" r="2" fill="#d98c8c" />
          <path d="M66 26 h28 l-3 -10 h-22 Z" fill="#c9b536" />
          <path d="M112 76 q10 -14 2 -26" stroke="#9aa3b5" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      )}
      {soort === "spiegel" && (
        <>
          <ellipse cx="80" cy="48" rx="26" ry="34" fill="#c9b536" />
          <ellipse cx="80" cy="48" rx="21" ry="29" fill="#dff0f5" />
          <path d="M70 30 L78 24 M70 40 L86 26" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <rect x="76" y="82" width="8" height="12" fill="#a8961f" />
          <circle cx="36" cy="64" r="8" fill="#e8b48c" />
          <rect x="30" y="72" width="12" height="18" rx="4" fill="#9a7cc0" />
          <circle cx="124" cy="64" r="8" fill="#e8b48c" opacity="0.6" />
          <rect x="118" y="72" width="12" height="18" rx="4" fill="#9a7cc0" opacity="0.6" />
        </>
      )}
    </svg>
  );
}


export const eigenToneeltjes = [
  {
    naam: "pizza",
    titel: "De pizza die wegrolde",
    inhoud: "Een pizza wil niet opgegeten worden en gaat op wereldreis. En dan begint ook de boterham te wiebelen…",
    plaatje: "pizza",
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
    naam: "kat",
    titel: "De kat die koning wilde zijn",
    inhoud: "Een kat wil koning van het huis worden, maar zijn kroon is gewoon zijn etensbakje.",
    plaatje: "kat",
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
    naam: "spiegel",
    titel: "De spiegel die alles nadeed",
    inhoud: "Een spiegel doet alles na wat het kind doet. Tot het kind iets bedenkt wat de spiegel niet kan.",
    plaatje: "spiegel",
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

