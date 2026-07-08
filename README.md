# Cedric Portfolio

Modernes Vite-Portfolio mit mobile-first Layout, lokalem Entwicklungsserver und Docker-Deployment.

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
