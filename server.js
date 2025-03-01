const express = require("express");
const app = express();
const PORT = 3000;

// Statische Dateien bereitstellen
app.use(express.static("public"));

// Startseite
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Über mich Seite
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});