fetch("https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js")
    .then(res => res.text())
    .then(eval);