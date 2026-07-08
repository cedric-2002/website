import "./styles.css";

const profile = {
  name: "Cedric Gärtner",
  role: "Wirtschaftsinformatiker, Webentwickler und IT-Security-Enthusiast",
  intro:
    "Ich entwickle Webanwendungen, automatisiere Abläufe und betreibe eigene Server- und Container-Umgebungen. Mein Fokus liegt auf sicheren, wartbaren Lösungen, die nicht nur technisch sauber sind, sondern im Alltag wirklich funktionieren.",
  email: "gaertnercedric05@icloud.com",
  image: "/images/bild1.jpeg",
  links: [
    { label: "GitHub", href: "https://github.com/cedric-2002" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/cedricgaertner?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    { label: "Instagram", href: "https://www.instagram.com/cedric.grtnr?igsh=a244NTllaGZndm9l&utm_source=qr" }
  ]
};

const navItems = [
  ["Start", "#start"],
  ["Über mich", "#about"],
  ["Skills", "#skills"],
  ["Projekte", "#projects"],
  ["Erfahrung", "#experience"],
  ["Kontakt", "#contact"]
];

const skills = [
  { title: "Frontend", items: ["Vite", "JavaScript", "Responsive UI", "Animationen"], tone: "cyan" },
  { title: "Backend", items: ["Node.js", "Express", "REST-APIs", "Middleware"], tone: "green" },
  { title: "Infrastructure", items: ["Docker", "Compose", "Linux", "Nginx Proxy"], tone: "amber" },
  { title: "Data & Automation", items: ["MariaDB", "Shell", "n8n", "Cron/PM2"], tone: "rose" },
  { title: "Smart Home", items: ["Home Assistant", "MQTT", "Zigbee2MQTT", "YAML"], tone: "cyan" },
  { title: "Security Mindset", items: ["Auth", "Hardening", "Monitoring", "Cloud Security"], tone: "green" }
];

const projects = [
  {
    title: "Homelab Plattform",
    image: "/images/projects/homelab.svg",
    description:
      "Eigene Docker-Services wie Wiki.js, Nextcloud, Plex und Uptime Kuma hinter einem Reverse Proxy mit Monitoring und klaren Deployments.",
    tags: ["Docker", "Nginx", "Linux"],
    link: "https://github.com/cedric-2002"
  },
  {
    title: "Smart Home Automationen",
    image: "/images/projects/smarthome.svg",
    description:
      "Home-Assistant-Automationen für Licht, Energie und Sensorik, kombiniert mit individuellen Skripten und MQTT-basierten Integrationen.",
    tags: ["Home Assistant", "MQTT", "YAML"],
    link: "https://github.com/cedric-2002"
  },
  {
    title: "Monitoring & Security Workflow",
    image: "/images/projects/security.svg",
    description:
      "Health-Checks, Benachrichtigungen und erste Security-Best-Practices für selbst gehostete Dienste mit Fokus auf Stabilität.",
    tags: ["Monitoring", "Security", "Automation"],
    link: "https://github.com/cedric-2002"
  }
];

const timeline = [
  {
    date: "Heute",
    title: "Wirtschaftsinformatik",
    text: "Studium mit Schwerpunkt Softwareentwicklung, IT-Security, Automatisierung und moderner Infrastruktur."
  },
  {
    date: "Praxis",
    title: "Eigene Server- und Container-Umgebungen",
    text: "Planung, Aufbau und Betrieb eigener Services von der ersten Code-Zeile bis zur produktiven Lösung."
  },
  {
    date: "Ziel",
    title: "Security & Cloud",
    text: "Spezialisierung auf sichere Softwareentwicklung, Cloud Security und robuste Systemarchitekturen."
  }
];

const externalLinkAttributes = 'target="_blank" rel="noreferrer"';

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="#start" aria-label="Zur Startseite">
      <span class="brand-mark">CG</span>
      <span>Cedric</span>
    </a>
    <button class="nav-toggle" type="button" aria-label="Navigation öffnen" aria-expanded="false">
      <span></span>
      <span></span>
    </button>
    <nav class="site-nav" aria-label="Hauptnavigation">
      ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
    </nav>
  </header>

  <main>
    <section class="hero section-shell reveal" id="start">
      <div class="hero-copy">
        <h1>${profile.name}</h1>
        <p class="hero-role">${profile.role}</p>
        <p class="hero-text">${profile.intro}</p>
        <div class="hero-actions">
          <a class="button primary" href="#projects">Projekte ansehen</a>
          <a class="button ghost" href="mailto:${profile.email}">Kontakt aufnehmen</a>
        </div>
      </div>
      <aside class="profile-panel" aria-label="Kurzprofil">
        <img src="${profile.image}" alt="Profilbild von ${profile.name}" />
        <div>
          <strong>Focus</strong>
          <span>Webentwicklung, Docker, IT-Security, Automatisierung</span>
        </div>
      </aside>
    </section>

    <section class="section-shell split-section reveal" id="about">
      <div>
        <p class="section-kicker">Über mich</p>
        <h2>Ich verbinde Entwicklung, Infrastruktur und Security-Denken.</h2>
      </div>
      <div class="rich-text">
        <p>
          In eigenen Projekten setze ich Ideen praktisch um: von REST-APIs und Weboberflächen bis zu Docker-Deployments, Reverse Proxy, Monitoring und Smart-Home-Automationen.
        </p>
        <p>
          Mich interessiert besonders, wie Systeme langfristig wartbar, sicher und verständlich bleiben. Deshalb mag ich klare Strukturen, nachvollziehbare Deployments und Technik, die Probleme wirklich kleiner macht.
        </p>
      </div>
    </section>

    <section class="section-shell reveal" id="skills">
      <div class="section-heading">
        <p class="section-kicker">Skills</p>
        <h2>Technologien und Themen</h2>
      </div>
      <div class="skill-grid">
        ${skills
          .map(
            (skill) => `
              <article class="skill-card tone-${skill.tone}">
                <h3>${skill.title}</h3>
                <ul>
                  ${skill.items.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section-shell reveal" id="projects">
      <div class="section-heading">
        <p class="section-kicker">Projekte</p>
        <h2>Praktische Arbeit aus Entwicklung und Homelab</h2>
      </div>
      <div class="project-grid">
        ${projects
          .map(
            (project) => `
              <article class="project-card">
                <img src="${project.image}" alt="Visual für ${project.title}" loading="lazy" />
                <div class="project-content">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                  <div class="tag-row">
                    ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
                  </div>
                  <a href="${project.link}" ${externalLinkAttributes}>Auf GitHub ansehen</a>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section-shell split-section reveal" id="experience">
      <div>
        <p class="section-kicker">Erfahrung</p>
        <h2>Lernen, bauen, betreiben und verbessern.</h2>
      </div>
      <div class="timeline">
        ${timeline
          .map(
            (entry) => `
              <article class="timeline-item">
                <span>${entry.date}</span>
                <h3>${entry.title}</h3>
                <p>${entry.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section-shell contact-section reveal" id="contact">
      <p class="section-kicker">Kontakt</p>
      <h2>Du möchtest dich austauschen oder ein Projekt besprechen?</h2>
      <p>Schreib mir gern direkt per Mail oder schau auf meinen Profilen vorbei.</p>
      <div class="contact-actions">
        <a class="button primary" href="mailto:${profile.email}">${profile.email}</a>
        ${profile.links.map((link) => `<a class="button ghost" href="${link.href}" ${externalLinkAttributes}>${link.label}</a>`).join("")}
      </div>
    </section>

    <section class="section-shell impressum reveal" id="impressum">
      <p class="section-kicker">Impressum</p>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p><strong>Name:</strong> Cedric Gärtner</p>
      <p><strong>Adresse:</strong> Lautaer Hauptstr. 6f, 09496 Marienberg</p>
      <p><strong>E-Mail:</strong> <a href="mailto:${profile.email}">${profile.email}</a></p>
      <p><strong>Verantwortlich für den Inhalt:</strong> Cedric Gärtner, Lautaer Hauptstr. 6f, 09496 Marienberg</p>
    </section>
  </main>

  <footer class="site-footer">
    <span>© <span id="year"></span> ${profile.name}</span>
    <a href="#impressum">Impressum</a>
  </footer>
`;

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
});

document.querySelector("#year").textContent = new Date().getFullYear();

// IntersectionObserver keeps animations cheap and only starts them when content enters the viewport.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

if (window.location.pathname === "/impressum") {
  requestAnimationFrame(() => document.querySelector("#impressum").scrollIntoView());
}
