# CLAUDE.md

Dit bestand helpt Claude (en Claude Code) om dit project te begrijpen.

## Wat is dit project?

Creanina is een persoonlijke website voor de creatieve dingen die ik maak.
Denk aan: **dans, eten, knutselen, tekenen en toneel**.

De naam is een mix van "creatief" en "Nina".

## Belangrijk: ik bouw zelf verder

Dit is met opzet nog een **lege basis-website**. Ik wil zelf stap voor stap
beslissen hoe de site eruit gaat zien (kleuren, sfeer, opmaak, pagina's).

**Bouw dus niet zomaar een hele website voor me.** Vraag eerst wat ik wil,
of help me met het kleine stukje waar ik op dat moment om vraag. Ik leer
graag al doende.

## Hoe is het gemaakt?

- **Next.js** versie 16 (de App Router, met de `src/`-map)
- **React** versie 19
- **TypeScript**
- **Tailwind CSS** (staat klaar om te gebruiken)
- **ESLint** (controleert de code)

De belangrijkste bestanden:

- `src/app/page.tsx` — de hoofdpagina (nu alleen de titel "Creanina")
- `src/app/layout.tsx` — het omhulsel rond elke pagina (taal staat op Nederlands)
- `src/app/globals.css` — algemene stijlen

## Handige commando's

- `npm install` — pakketjes installeren (eerste keer of na het uitpakken)
- `npm run dev` — de website lokaal bekijken terwijl je werkt
- `npm run build` — testen of de website goed in elkaar zit
- `npm run lint` — de code laten controleren

## Waar staat het online?

- **GitHub:** https://github.com/nininininina/creanina
- **Vercel:** https://vercel.com/ninadierckens17-7833s-projects
  (Vercel bouwt de site automatisch opnieuw na elke push naar GitHub.)

## Hoe ik graag uitleg krijg

Leg dingen rustig en simpel uit, zoals aan iemand die nog aan het leren is.
Geen moeilijke woorden zonder uitleg. In het Nederlands. 🙂

## Belangrijk: ik weet niks van git

Ik snap (nog) niets van git, commits, branches, pushen enzovoort.
Praat dus op een simpele manier met me en gebruik geen moeilijke git-woorden
zonder ze uit te leggen. Geef me liefst de commando's kant-en-klaar, eentje
tegelijk, en zeg er steeds bij wat het doet en wat er daarna gebeurt.

### Als ik iets wil BEKIJKEN (nog niet voor iedereen)

Soms wil ik eerst gewoon even zien hoe iets eruitziet, zonder dat het al
"echt" online staat. Help me dan met één van deze twee:

- **Lokaal kijken** (op mijn eigen computer): `npm run dev` en dan in de
  browser naar de link die hij geeft. Niemand anders ziet dit, alleen ik.
- **Vercel preview** (online, maar nog niet de echte site): dit is een
  test-versie online. Leg me simpel uit hoe ik die maak/bekijk als ik daar
  om vraag.

Vraag bij twijfel even of ik het lokaal of via een Vercel preview wil zien.

### Als ik iets ECHT online wil zetten (voor iedereen)

Dit heet "naar main / productie zetten". Dan staat het op de echte website
die iedereen kan bezoeken. Doe dit alleen als ik duidelijk zeg dat ik het
"echt online" of "voor iedereen" wil.

Leg me dan rustig uit, stap voor stap, hoe ik mijn werk naar GitHub stuur
(zodat Vercel het automatisch op de echte site zet). Eén stapje tegelijk,
en wacht tot ik klaar ben voordat we verdergaan.

**Korte versie voor Claude:** vraag altijd eerst of ik wil *kijken* (lokaal /
preview) of *echt publiceren* (main / productie), want dat is voor mij niet
hetzelfde en ik wil niet per ongeluk iets online zetten.
