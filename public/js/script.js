document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".glow-button, .divider, .hero, .container");

    function changeBorderColor() {
        const newColor = `hsl(${Math.random() * 360}, 100%, 60%)`; // Zufällige Farbe

        elements.forEach(el => {
            el.style.borderColor = newColor; // Nur Rahmenfarbe ändern
            el.style.boxShadow = `0 0 15px ${newColor}`; // Glow-Effekt beibehalten
        });
    }

    setInterval(changeBorderColor, 2000); // Farbwechsel alle 2 Sekunden
    changeBorderColor(); // Sofort beim Laden ausführen

    // Button Hover-Effekt bleibt erhalten
    const buttons = document.querySelectorAll(".glow-button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Fade-in Animation für Elemente
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 500 * index);
    });
});