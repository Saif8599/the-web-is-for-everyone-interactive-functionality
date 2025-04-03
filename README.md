# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Functionaliteiten](#functionaliteiten)
  * [Kenmerken](#kenmerken)
  * [Techstack](#techstack)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

"Bieb in Bloei" is een project van de Openbare Bibliotheek Amsterdam (OBA) gericht op de buurtbewoners van Oost. Het biedt een platform waar gebruikers de verschillende "stekjes" kunnen ontdekken die in de buurt beschikbaar zijn, met gedetailleerde informatie over elk stekje. De stekjes zijn verbonden aan de lokale gemeenschappen en kunnen gemakkelijk worden bekeken op de stekjespagina. Elke stekje heeft een detailpagina met uitgebreide informatie over de planten, zoals verzorgingstips, locatie en beschikbaarheid. Alle gegevens worden opgehaald via een API die verbinding maakt met een database om de inhoud dynamisch weer te geven.

De website is ontworpen met gebruiksvriendelijke navigatie en visuele elementen die de Bieb in Bloei merkidentiteit weerspiegelen. Dit maakt het platform zowel informatief als aantrekkelijk voor de lokale bewoners van Oost, zodat zij gemakkelijk kunnen zien welke stekjes beschikbaar zijn en wat ze kunnen doen om hun stekjes goed te verzorgen.

## Functionaliteiten

- **Liken van een Stekje:** Gebruikers kunnen een stekje liken door op een "like"-knop te klikken. Dit verstuurt een POST-verzoek naar de server, die de like toevoegt aan de betreffende stekje in de database.
- **Unliken van een Stekje:** Gebruikers kunnen een stekje weer unliken door op een "unlike"-knop te klikken, wat een DELETE-verzoek triggert om de like te verwijderen uit de database.
- **Responsieve UI States:** De website maakt gebruik van verschillende UI-states zoals *empty*, *loading*, en *ideal*, zodat de gebruiker altijd duidelijk weet waar hij zich in de interactie bevindt.
- **API-integratie:** Alle data wordt dynamisch geladen via een API die de informatie uit de database haalt, zodat de inhoud altijd up-to-date is.


## Kenmerken

- **Interactiviteit:** Dankzij de dynamische gegevens en het gebruik van API's kunnen gebruikers op een interactieve manier de stekjes ontdekken en beheren.
- **Gebruiksvriendelijke navigatie:** Het platform is ontworpen met een simpele en toegankelijke navigatiestructuur, zodat buurtbewoners snel de stekjes kunnen vinden die ze zoeken.
- **UI States:** Speciale aandacht is gegeven aan visuele states zoals *empty*, *loading*, en *ideal*, die bijdragen aan een vlotte en intuïtieve gebruikerservaring.
- **Merkintegratie:** Het ontwerp past naadloos bij de visuele identiteit van de Bieb in Bloei, met een consistent kleurenpalet, typografie, en iconografie die de merkwaarden van de bibliotheek weerspiegelen.
- **Technische robuustheid:** Het platform is gebouwd met een schaalbare technische stack en maakt gebruik van Node.js, Express, Liquid en een API-laag voor dynamische gegevens.

## Techstack

- **Node.js** - Voor de server-side functionaliteiten en API-verwerking.
- **Express** - Het webframework voor het bouwen van de server en het afhandelen van routes.
- **Liquid** - Voor de dynamische templating en rendering van pagina's op de client-side.
- **API's** - Voor het ophalen en tonen van stekjesinformatie uit de database.

## Bronnen

[INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

## Licentie

Dit project is gelicenseerd onder de voorwaarden van de [MIT-licentie](./LICENSE).
