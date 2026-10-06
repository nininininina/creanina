// Hier staan alle tekenlessen.
// Elke stap tekent een paar nieuwe lijnen ("vormen").
// "kleur" gebruiken we voor de ingekleurde tekening op het einde.

const cirkel = (x: number, y: number, r: number) =>
  `M${x - r} ${y} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`;

export type Vorm = { d: string; kleur: string };
export type Stap = { tekst: string; vormen: Vorm[] };

export const lessen: { naam: string; titel: string; inhoud: string; stappen: Stap[] }[] = [
  {
    naam: "kat",
    titel: "Een kat",
    inhoud: "Een lieve kat met spitse oortjes en een krullende staart.",
    stappen: [
      { tekst: "Teken een grote cirkel. Dat wordt het hoofd.", vormen: [{ d: cirkel(100, 80, 40), kleur: "#9aa3b5" }] },
      {
        tekst: "Teken twee driehoekjes bovenop het hoofd. Dat zijn de oren.",
        vormen: [
          { d: "M68 58 L72 28 L92 44", kleur: "#9aa3b5" },
          { d: "M132 58 L128 28 L108 44", kleur: "#9aa3b5" },
        ],
      },
      {
        tekst: "Teken twee rondjes als ogen en een klein driehoekje als neus.",
        vormen: [
          { d: cirkel(85, 78, 5), kleur: "#333333" },
          { d: cirkel(115, 78, 5), kleur: "#333333" },
          { d: "M96 92 L104 92 L100 97 Z", kleur: "#d98c8c" },
        ],
      },
      {
        tekst: "Teken een mondje onder de neus, en snorharen aan elke kant.",
        vormen: [
          { d: "M100 97 q-6 8 -12 4 M100 97 q6 8 12 4", kleur: "#333333" },
          { d: "M58 90 h24 M58 102 l24 -5 M142 90 h-24 M142 102 l-24 -5", kleur: "#333333" },
        ],
      },
      {
        tekst: "Teken onder het hoofd een bol lijf, zoals een peer.",
        vormen: [{ d: "M72 112 C55 150 60 180 75 185 H125 C140 180 145 150 128 112", kleur: "#9aa3b5" }],
      },
      {
        tekst: "Teken twee pootjes en een lange, krullende staart. Klaar!",
        vormen: [
          { d: "M88 185 v-18 M112 185 v-18", kleur: "#9aa3b5" },
          { d: "M130 172 C165 172 172 140 150 128", kleur: "#9aa3b5" },
        ],
      },
    ],
  },
  {
    naam: "regenboog",
    titel: "Een regenboog",
    inhoud: "Een vrolijke regenboog met twee pluizige wolkjes.",
    stappen: [
      { tekst: "Teken een grote boog, zoals een halve cirkel.", vormen: [{ d: "M30 150 A70 70 0 0 1 170 150", kleur: "#d98c8c" }] },
      { tekst: "Teken er een iets kleinere boog onder.", vormen: [{ d: "M45 150 A55 55 0 0 1 155 150", kleur: "#e0b388" }] },
      { tekst: "En nog een kleinere boog.", vormen: [{ d: "M60 150 A40 40 0 0 1 140 150", kleur: "#9cc99c" }] },
      { tekst: "En nog een laatste, kleine boog.", vormen: [{ d: "M75 150 A25 25 0 0 1 125 150", kleur: "#8cb3d9" }] },
      {
        tekst: "Teken aan elke kant een wolkje, over het einde van de bogen. Kleur hem in met al je lievelingskleuren!",
        vormen: [
          { d: "M14 168 a12 12 0 0 1 4 -22 a16 16 0 0 1 30 -4 a12 12 0 0 1 10 26 Z", kleur: "#b9c7d6" },
          { d: "M142 168 a12 12 0 0 1 4 -22 a16 16 0 0 1 30 -4 a12 12 0 0 1 10 26 Z", kleur: "#b9c7d6" },
        ],
      },
    ],
  },
  {
    naam: "bloem",
    titel: "Een bloem",
    inhoud: "Een bloem met vijf ronde blaadjes en een lange steel.",
    stappen: [
      { tekst: "Teken een klein rondje. Dat is het hartje van de bloem.", vormen: [{ d: cirkel(100, 75, 14), kleur: "#d9d18c" }] },
      {
        tekst: "Teken vijf rondjes rond het hartje. Dat zijn de bloemblaadjes.",
        vormen: [
          { d: cirkel(100, 44, 17), kleur: "#d09cc0" },
          { d: cirkel(130, 66, 17), kleur: "#d09cc0" },
          { d: cirkel(119, 102, 17), kleur: "#d09cc0" },
          { d: cirkel(81, 102, 17), kleur: "#d09cc0" },
          { d: cirkel(70, 66, 17), kleur: "#d09cc0" },
        ],
      },
      { tekst: "Teken een lange steel naar beneden.", vormen: [{ d: "M100 119 C98 145 102 165 100 192", kleur: "#6fa86f" }] },
      {
        tekst: "Teken twee blaadjes aan de steel. Klaar!",
        vormen: [
          { d: "M100 155 C82 136 64 142 68 152 C76 162 92 160 100 155", kleur: "#6fa86f" },
          { d: "M100 170 C118 151 136 157 132 167 C124 177 108 175 100 170", kleur: "#6fa86f" },
        ],
      },
    ],
  },
  {
    naam: "huis",
    titel: "Een huis",
    inhoud: "Een gezellig huisje met een schoorsteen die rookt.",
    stappen: [
      { tekst: "Teken een groot vierkant. Dat zijn de muren.", vormen: [{ d: "M50 100 H150 V180 H50 Z", kleur: "#cc8844" }] },
      { tekst: "Teken een driehoek bovenop. Dat is het dak.", vormen: [{ d: "M40 100 L100 50 L160 100", kleur: "#b05555" }] },
      { tekst: "Teken een deur in het midden.", vormen: [{ d: "M88 180 V140 H112 V180", kleur: "#8a5a2b" }] },
      {
        tekst: "Teken twee ramen, met een kruisje erin.",
        vormen: [
          { d: "M60 115 H82 V135 H60 Z M71 115 V135 M60 125 H82", kleur: "#8cb3d9" },
          { d: "M118 115 H140 V135 H118 Z M129 115 V135 M118 125 H140", kleur: "#8cb3d9" },
        ],
      },
      {
        tekst: "Teken een schoorsteen op het dak, met een kronkelend rookje. Klaar!",
        vormen: [
          { d: "M124 80 V55 H136 V90", kleur: "#b05555" },
          { d: "M130 48 q-8 -8 0 -16 q8 -8 0 -16", kleur: "#b5b5b5" },
        ],
      },
    ],
  },
  {
    naam: "vis",
    titel: "Een vis",
    inhoud: "Een vrolijke vis die bubbels blaast.",
    stappen: [
      { tekst: "Teken een ovaal, zoals een plat ei. Dat is het lijf.", vormen: [{ d: "M50 100 a50 32 0 1 0 100 0 a50 32 0 1 0 -100 0", kleur: "#e0b388" }] },
      { tekst: "Teken een driehoek achteraan. Dat is de staart.", vormen: [{ d: "M150 100 L182 72 L182 128 Z", kleur: "#cc8844" }] },
      {
        tekst: "Teken een rond oog en een klein mondje vooraan.",
        vormen: [
          { d: cirkel(75, 92, 6), kleur: "#333333" },
          { d: "M54 108 q6 5 12 0", kleur: "#333333" },
        ],
      },
      {
        tekst: "Teken een vin bovenop en een vin onderaan.",
        vormen: [
          { d: "M92 70 Q105 48 122 70", kleur: "#cc8844" },
          { d: "M95 130 Q106 150 120 129", kleur: "#cc8844" },
        ],
      },
      {
        tekst: "Teken een paar boogjes als schubben, en bubbels voor de mond. Klaar!",
        vormen: [
          { d: "M100 88 q9 12 0 24 M116 86 q9 14 0 28", kleur: "#d98c8c" },
          { d: cirkel(38, 74, 5) + " " + cirkel(30, 56, 4) + " " + cirkel(40, 40, 3), kleur: "#8cb3d9" },
        ],
      },
    ],
  },
  {
    naam: "donut",
    titel: "Een donut",
    inhoud: "Een lekkere donut met roze glazuur en spikkels.",
    stappen: [
      { tekst: "Teken een grote cirkel.", vormen: [{ d: cirkel(100, 105, 60), kleur: "#e0b388" }] },
      { tekst: "Teken een klein rondje in het midden. Dat is het gat.", vormen: [{ d: cirkel(100, 105, 18), kleur: "#e0b388" }] },
      {
        tekst: "Teken een golvende lijn rondom, net binnen de cirkel. Dat is het glazuur.",
        vormen: [
          {
            d: "M52 100 q4 -26 26 -36 q8 6 14 -4 q14 -4 24 4 q10 -4 16 6 q18 10 18 30 q-8 8 -2 18 q-6 22 -26 28 q-8 -6 -14 4 q-16 4 -26 -6 q-10 4 -16 -8 q-16 -12 -14 -28 q8 -4 0 -8 Z",
            kleur: "#d09cc0",
          },
        ],
      },
      {
        tekst: "Teken kleine streepjes op het glazuur. Dat zijn de spikkels. Smakelijk!",
        vormen: [{ d: "M72 88 l7 -4 M118 76 l7 3 M88 136 l5 5 M134 116 l-4 7 M74 120 l7 2 M106 68 l-2 7 M140 94 l7 -2 M116 136 l6 -3", kleur: "#8cb3d9" }],
      },
    ],
  },
];
