// Hier staan alle dansstijlen en hun dansjes.
// Elke stap heeft "tel": op welke tellen van de muziek je het doet.

export type Stap = { tel: string; tekst: string };
export type Dansje = { titel: string; uitleg: string; stappen: Stap[] };
export type Stijl = { naam: string; titel: string; kleur: string; zacht: string; over: string; dansjes: Dansje[] };

export const stijlen: Stijl[] = [
  {
    naam: "ballet",
    titel: "Ballet",
    kleur: "#d0789a",
    zacht: "#fbe9f0",
    over: "Ballet is sierlijk en licht, alsof je zweeft. Je danst vaak op je tenen.",
    dansjes: [
      {
        titel: "De kleine zwaan",
        uitleg: "Een rustig dansje. Zet langzame, mooie muziek op.",
        stappen: [
          { tel: "1-2", tekst: "Zet je hielen tegen elkaar en je tenen naar buiten. Buig zachtjes je knieën. Dat heet een plié." },
          { tel: "3-4", tekst: "Strek je benen en kom op je tenen staan." },
          { tel: "5-6", tekst: "Breng je armen in een ronde boog boven je hoofd." },
          { tel: "7-8", tekst: "Draai langzaam een rondje en laat je armen zakken." },
        ],
      },
      {
        titel: "De balletgroet",
        uitleg: "Zo groet een ballerina het publiek aan het einde.",
        stappen: [
          { tel: "1-2", tekst: "Doe een stap opzij met je rechtervoet." },
          { tel: "3-4", tekst: "Zet je linkervoet achter je rechtervoet, op de tenen." },
          { tel: "5-6", tekst: "Open je armen wijd, alsof je iedereen een knuffel geeft." },
          { tel: "7-8", tekst: "Buig je knieën en je hoofd een beetje. Dat is een révérence!" },
        ],
      },
    ],
  },
  {
    naam: "hiphop",
    titel: "Hiphop",
    kleur: "#cc8844",
    zacht: "#fbefe2",
    over: "Hiphop is stoer en cool. Je danst met veel energie op de beat.",
    dansjes: [
      {
        titel: "De bounce",
        uitleg: "De basis van hiphop. Zet muziek op met een duidelijke beat.",
        stappen: [
          { tel: "1-2", tekst: "Sta met je voeten een beetje uit elkaar. Veer met je knieën op elke tel." },
          { tel: "3-4", tekst: "Laat je schouders meedoen: links omhoog, rechts omhoog." },
          { tel: "5-6", tekst: "Stap opzij naar rechts en tik je linkervoet ernaast." },
          { tel: "7-8", tekst: "Stap terug naar links, tik je rechtervoet ernaast en klap in je handen." },
        ],
      },
      {
        titel: "De robot",
        uitleg: "Beweeg alsof je een robot bent: stijf en schokkerig.",
        stappen: [
          { tel: "1-2", tekst: "Buig je armen in een hoek, zoals de letter L." },
          { tel: "3-4", tekst: "Draai je hoofd met een schokje naar links, en dan naar rechts." },
          { tel: "5-6", tekst: "Til één arm met kleine schokjes omhoog." },
          { tel: "7-8", tekst: "Bevries helemaal stil. Tsss!" },
        ],
      },
    ],
  },
  {
    naam: "jazz",
    titel: "Jazzdans",
    kleur: "#c9b536",
    zacht: "#faf6dc",
    over: "Jazzdans is vrolijk en swingend. Je danst groot, met veel lachen!",
    dansjes: [
      {
        titel: "Jazz hands",
        uitleg: "Het bekendste jazzgebaar. Lach er heel breed bij!",
        stappen: [
          { tel: "1-2", tekst: "Spreid je vingers zo wijd als je kan." },
          { tel: "3-4", tekst: "Schud je handen snel heen en weer naast je gezicht." },
          { tel: "5-6", tekst: "Spring met je benen een beetje uit elkaar." },
          { tel: "7-8", tekst: "Gooi je jazz hands hoog in de lucht. Ta-daa!" },
        ],
      },
      {
        titel: "Het jazzvierkant",
        uitleg: "Met je voeten teken je een vierkant op de grond.",
        stappen: [
          { tel: "1", tekst: "Stap met je rechtervoet schuin voor je linkervoet langs." },
          { tel: "2", tekst: "Stap met je linkervoet naar achteren." },
          { tel: "3", tekst: "Stap met je rechtervoet opzij naar rechts." },
          { tel: "4", tekst: "Zet je linkervoet weer naar voren. Je vierkant is klaar! Doe het nog eens op 5-8." },
        ],
      },
    ],
  },
  {
    naam: "breakdance",
    titel: "Breakdance",
    kleur: "#6fa86f",
    zacht: "#e6f3e6",
    over: "Breakdance is snel en sportief. Je begint rechtop en danst later ook op de grond.",
    dansjes: [
      {
        titel: "Toprock",
        uitleg: "Zo begint elke breakdancer: staand, met veel ritme.",
        stappen: [
          { tel: "1-2", tekst: "Kruis je rechtervoet voor je linkervoet." },
          { tel: "3-4", tekst: "Stap terug en open je armen." },
          { tel: "5-6", tekst: "Kruis je linkervoet voor je rechtervoet." },
          { tel: "7-8", tekst: "Stap terug en wijs met beide handen naar het publiek." },
        ],
      },
      {
        titel: "De kick-stap",
        uitleg: "Een snelle stap met een trapje. Doe het op een zachte vloer.",
        stappen: [
          { tel: "1-2", tekst: "Trap je rechtervoet kort naar voren." },
          { tel: "3-4", tekst: "Zet hem neer en trap je linkervoet naar voren." },
          { tel: "5-6", tekst: "Ga even door je knieën, met je handen op je knieën." },
          { tel: "7-8", tekst: "Spring weer omhoog en sla je armen over elkaar. Stoer!" },
        ],
      },
    ],
  },
  {
    naam: "salsa",
    titel: "Salsa",
    kleur: "#5b8fc9",
    zacht: "#e5eef9",
    over: "Salsa is een zomerse dans met vrolijke muziek. Je kan het alleen of met z'n tweeën dansen.",
    dansjes: [
      {
        titel: "De basispas",
        uitleg: "Op tel 4 en 8 sta je even stil.",
        stappen: [
          { tel: "1-2-3", tekst: "Stap met links naar voren, zet je gewicht terug op rechts, en zet links terug naast rechts." },
          { tel: "4", tekst: "Even stilstaan." },
          { tel: "5-6-7", tekst: "Stap met rechts naar achteren, zet je gewicht terug op links, en zet rechts terug naast links." },
          { tel: "8", tekst: "Even stilstaan. Wiebel lekker met je heupen mee!" },
        ],
      },
      {
        titel: "Het salsadraaitje",
        uitleg: "Een draai die je in de basispas kan stoppen.",
        stappen: [
          { tel: "1-2-3", tekst: "Doe de eerste helft van de basispas." },
          { tel: "4", tekst: "Even stilstaan en je arm optillen." },
          { tel: "5-6-7", tekst: "Draai in drie kleine stapjes een rondje naar rechts." },
          { tel: "8", tekst: "Stop en zwaai met je arm. Olé!" },
        ],
      },
    ],
  },
];
