---
name: bekijk-website
description: Start de Creanina-website lokaal op en open hem in de browser om te bekijken. Gebruik dit als Nina vraagt om de website lokaal te zien, te starten, te openen of te bekijken (bijv. "laat de site zien", "open de website", "start de site lokaal").
---

# Bekijk de Creanina-website lokaal

Dit start de website op Nina's eigen computer en laat hem zien. Niemand
anders ziet dit — het staat NIET echt online. Het is alleen om even te kijken.

## Stappen

Dit project gebruikt **pnpm** (sneller en zuiniger dan npm).

1. **Zijn de pakketjes geïnstalleerd?** Als de map `node_modules` nog niet
   bestaat, draai eerst:
   ```
   pnpm install
   ```
   (Dit hoeft maar één keer, of na het uitpakken van het project.)

2. **Start de website** met de preview-tool (niet met Bash):
   - Gebruik `preview_start` met de naam `dev`.
   - De `.claude/launch.json` staat al klaar met de juiste instellingen
     (pnpm, poort 3000). Alleen aanmaken als die er niet meer zou zijn:
     ```json
     {
       "version": "0.0.1",
       "configurations": [
         { "name": "dev", "runtimeExecutable": "pnpm", "runtimeArgs": ["dev"], "port": 3000 }
       ]
     }
     ```
   - Draait de site al? Dan zegt `preview_start` gewoon `"reused": true` en
     gebruikt hij dezelfde server opnieuw. Niets aan de hand, je hoeft niet
     opnieuw te starten.

3. **Maak een screenshot** met `preview_screenshot` (gebruik de `serverId`
   die `preview_start` teruggaf) zodat Nina meteen ziet hoe de site eruitziet.

4. **Vertel Nina** dat de site lokaal draait op http://localhost:3000 en dat
   alleen zij hem kan zien. Zeg er duidelijk bij dat dit nog NIET echt online
   staat.

## Belangrijk

- Dit is alleen lokaal kijken. Zet hier niets mee "echt online" — dat is een
  aparte stap waar Nina eerst duidelijk om moet vragen.
- Praat in simpele taal, in het Nederlands. Geen moeilijke git- of
  computerwoorden zonder uitleg.

## Dingen die kunnen gebeuren (en oké zijn)

- **"next: command not found"** → de pakketjes zijn nog niet geïnstalleerd.
  Draai eerst `pnpm install` en start daarna opnieuw.
- **"Ignored build scripts: sharp, unrs-resolver"** bij `pnpm install` →
  dit is normaal en veilig. Het betekent alleen dat een hulppakketje niet
  automatisch extra code mocht draaien. De site werkt prima. Negeren mag.
- **Server stoppen lukt niet / "not found"** → de oude server was al gestopt
  (bijv. na een herstart). Gewoon opnieuw `preview_start` doen.
