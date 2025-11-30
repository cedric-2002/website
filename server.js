const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Statische Dateien
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (_, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/impressum", (_, res) => {
    res.sendFile(path.join(__dirname, "views", "impressum.html"));
});

app.listen(PORT, () => {
    console.log(`Website läuft auf Port ${PORT}`);
});