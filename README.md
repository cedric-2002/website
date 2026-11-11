# Cedric Portfolio

Modernes Vite-Portfolio mit mobile-first Layout, lokalem Entwicklungsserver und Docker-Deployment.

## Seiten

- `/` Startseite mit Kurzprofil und ausgewählten Projekten
- `/projects` Projekt-Cases inklusive privater und interner Projekte
- `/about` Über mich, Skills und Erfahrung
- `/contact` Kontakt und Social Links
- `/impressum` Impressum

Die App nutzt clientseitiges Routing. Der Nginx-Container leitet direkte Seitenaufrufe über den SPA-Fallback auf `index.html`.

## Entwicklung

```bash
npm install
npm run dev
```

Die lokale Vite-Entwicklung läuft standardmäßig auf `http://localhost:5173`.

## Produktions-Build

```bash
npm run build
npm run preview
```

Der statische Build wird in `dist/` erzeugt.

## Docker

```bash
docker compose up -d --build
```

Die produktive Nginx-Auslieferung läuft danach auf `http://localhost:8080`.

## Aufbauanimation

Die kompakte Startseite enthält Initialization, Technologie-Netzwerk, drei
Projektaufbauten, Home Lab, Profil und Kontakt. Projektlinks führen zu den
Architektur-Cases auf `/projects`. Illustrationen sind schematische Darstellungen.

Sobald eine Szene ins Bild kommt, läuft ihr Aufbau automatisch ab (Desktop ca.
4,6 Sekunden, mobil ca. 3,2 Sekunden). Zwei dekorative Cursor für Layout und Code
fahren Elemente an, markieren sie und begleiten das Einsetzen der Bauteile.
Die Seite scrollt dabei nicht selbstständig und hat keine künstlich verlängerten
Scrollbereiche. Beim Zurückscrollen zu einer zuvor unterhalb des Bildschirms
liegenden Szene beginnt deren Aufbau erneut. Bei reduzierter Bewegung sind alle
Inhalte vollständig sichtbar und die Cursor deaktiviert. Seitenwechsel entfernen
Listener und Animationsframes.

Die Umsetzung verwendet Browser-APIs. GSAP konnte wegen fehlendem Zugriff auf die
Paketregistry nicht installiert werden. Visuelle Browserprüfung und ein genauer
Abgleich mit der Video-Referenz stehen noch aus. Build: `npm run build`.
