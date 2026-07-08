#!/bin/bash

set -e

APP_NAME="website"
REPO_URL="https://github.com/cedric-2002/website.git"
BRANCH="main"
APP_DIR="/opt/website"

echo "======================================"
echo " Website Update gestartet"
echo " Repository: $REPO_URL"
echo "======================================"

# Prüfen, ob Git installiert ist
if ! command -v git >/dev/null 2>&1; then
  echo "Fehler: Git ist nicht installiert."
  exit 1
fi

# Prüfen, ob Docker installiert ist
if ! command -v docker >/dev/null 2>&1; then
  echo "Fehler: Docker ist nicht installiert."
  exit 1
fi

# Projekt klonen, falls es noch nicht existiert
if [ ! -d "$APP_DIR/.git" ]; then
  echo "Projekt wurde noch nicht gefunden."
  echo "Klonen nach: $APP_DIR"

  mkdir -p "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

echo ""
echo "Aktuelles Verzeichnis:"
pwd

echo ""
echo "Lokale Änderungen prüfen..."
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Fehler: Es gibt lokale Änderungen im Projekt."
  echo "Update wird abgebrochen, damit nichts überschrieben wird."
  echo ""
  echo "Bitte prüfen mit:"
  echo "git status"
  exit 1
fi

echo ""
echo "Neue Version von GitHub holen..."
git fetch origin "$BRANCH"

echo ""
echo "Repository aktualisieren..."
git checkout "$BRANCH"
git pull origin "$BRANCH"

echo ""
echo "Docker Container neu bauen und starten..."

if docker compose version >/dev/null 2>&1; then
  docker compose down
  docker compose up -d --build
else
  docker-compose down
  docker-compose up -d --build
fi

echo ""
echo "Alte unbenutzte Docker Images aufräumen..."
docker image prune -f

echo ""
echo "Container Status:"
if docker compose version >/dev/null 2>&1; then
  docker compose ps
else
  docker-compose ps
fi

echo ""
echo "======================================"
echo " Website Update erfolgreich beendet"
echo "======================================"