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
