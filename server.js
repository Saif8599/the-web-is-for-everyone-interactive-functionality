// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from "express";

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from "liquidjs";

// WHOIS API
const API_BASE_URL = "https://fdnd-agency.directus.app/items";

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express();

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static("public"));

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine("liquid", engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set("views", "./views");

// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get("/", async function (request, response) {
  // Render index.liquid uit de Views map
  // Geef hier eventueel data aan mee
  response.render("index.liquid");
});

// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post("/", async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, "/");
});

// GET route voor het ophalen van alle stekjes
app.get("/stekjes", async function (request, response) {
  // Haal alle stekjes op vanuit de WHOIS API door een fetch-verzoek te sturen naar de eindpoint `/bib_stekjes`
  const stekjesResponse = await fetch(`${API_BASE_URL}/bib_stekjes`);

  // Zet het response-object om naar JSON-formaat, zodat we de data kunnen gebruiken
  const stekjesResponseResponseJSON = await stekjesResponse.json();

  // Render de `stekjes.liquid` template uit de views-map
  // Geef de opgehaalde data mee als een variabele genaamd `stekjes`, zodat deze in de template gebruikt kan worden
  response.render("stekjes.liquid", {
    stekjes: stekjesResponseResponseJSON.data,
  });
});

// GET route voor het ophalen van één specifiek stekje op basis van een ID
app.get("/stekje/:id", async function (request, response) {
  // Haal een specifiek stekje op vanuit de WHOIS API door een fetch-verzoek te sturen naar de eindpoint `/bib_stekjes/{id}`
  // Het ID wordt uit de URL gehaald via `request.params.id`
  const stekjesResponse = await fetch(
    `${API_BASE_URL}/bib_stekjes/${request.params.id}`
  );

  // Zet het response-object om naar JSON-formaat, zodat we de data kunnen gebruiken
  const stekjesResponseResponseJSON = await stekjesResponse.json();

  // Render de `stekjesDetail.liquid` template uit de views-map
  // Geef de opgehaalde data mee als een variabele genaamd `stekje`, zodat deze in de template gebruikt kan worden
  response.render("stekjeDetail.liquid", {
    stekje: stekjesResponseResponseJSON.data,
  });
});

// Geen matching route request 
app.use((req, res) => {
  res.status(404).render("404.liquid");
});

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set("port", process.env.PORT || 8000);

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
