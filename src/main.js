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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/cedricgaertner" },
    { label: "Instagram", href: "https://www.instagram.com/cedric.grtnr?igsh=a244NTllaGZndm9l&utm_source=qr" }
  ]
};

const navItems = [
  ["Start", "/"],
  ["Projekte", "/projects"],
  ["Über mich", "/about"],
  ["Kontakt", "/contact"]
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
    title: "Kletterwelt Verwaltungs-App",
    image: "/images/projects/kletterwelt.svg",
    label: "Interne Anwendung",
    description:
      "Eine von Grund auf aufgebaute interne Webanwendung für Verwaltungsprozesse in einer Kletterhalle.",
    goal:
      "Manuelle Abläufe digitaler, übersichtlicher und einfacher bedienbar machen, ohne interne Details öffentlich offenzulegen.",
    role: "Konzeption, Architektur, Frontend, Backend-Struktur, Adminbereich und Vorbereitung für den Betrieb.",
    technologies: ["Vite", "JavaScript", "Node.js", "Express", "MariaDB", "Docker"],
    features: ["Adminbereich", "Verwaltungsfunktionen", "klare Benutzerführung", "Docker-Bereitstellung"],
    status: "Privates internes Webprojekt",
    visibility: "Code nicht öffentlich"
  },
  {
    title: "Adventskalender-App",
    image: "/images/projects/adventskalender.svg",
    label: "Privates Projekt",
    description:
      "Eine digitale Adventskalender-Web-App mit täglichen Inhalten, Benutzerfunktionen und spielerischen Elementen.",
    goal:
      "Einen klassischen Adventskalender als interaktive Webanwendung neu denken und modular erweiterbar machen.",
    role: "Produktidee, Planung, UI-Struktur, technische Umsetzung, Einstellungsbereiche und Erweiterbarkeit.",
    technologies: ["Vite", "JavaScript", "CSS", "Phaser", "Node.js"],
    features: ["tägliche Inhalte", "Benutzerfunktionen", "Minispiele", "modulare Erweiterungen"],
    status: "Von 0 geplant und entwickelt",
    visibility: "Code nicht öffentlich"
  },
  {
    title: "Home Assistant / Smart Home",
    image: "/images/projects/smarthome.svg",
    label: "Private Infrastruktur",
    description:
      "Eine eigene Smart-Home-Umgebung mit zentraler Steuerung, Dashboards, Sensorik und Automationen.",
    goal:
      "Geräte, Sensoren und Abläufe sinnvoll verbinden und alltägliche Routinen zuverlässig automatisieren.",
    role: "Integration, Konfiguration, Automationslogik, Dashboard-Anpassung, Fehlersuche und Optimierung.",
    technologies: ["Home Assistant", "Zigbee2MQTT", "MQTT", "YAML", "Dashboards"],
    features: ["Sensoren", "ereignisbasierte Automationen", "lokale Steuerung", "übersichtliche Dashboards"],
    status: "Laufend erweitert",
    visibility: "Private Infrastruktur"
  },
  {
    title: "Homelab / Selfhosting",
    image: "/images/projects/homelab.svg",
    label: "Private Infrastruktur",
    description:
      "Eine eigene Server- und Docker-Umgebung für selbst gehostete Dienste, Monitoring und produktionsnahes Lernen.",
    goal:
      "Dienste selbstständig betreiben, Deployments verstehen und Infrastruktur stabil, wartbar und kontrolliert aufbauen.",
    role: "Servereinrichtung, Container-Deployments, Reverse Proxy, Monitoring, Wartung und Fehleranalyse.",
    technologies: ["Docker", "Docker Compose", "Linux", "Nginx", "Monitoring"],
    features: ["eigene Dienste", "Reverse Proxy", "strukturierte Deployments", "Health-Checks"],
    status: "Aktiv betrieben",
    visibility: "Code nicht öffentlich"
  },
  {
    title: "Portfolio",
    image: "/images/projects/portfolio.svg",
    label: "Privates Projekt",
    description:
      "Dieses Portfolio als moderne, schnelle und responsive Website mit Fokus auf reale Projekt-Cases.",
    goal:
      "Eine professionelle Online-Präsenz schaffen, die private Projekte seriös zeigt, ohne Quellcode oder interne Details offenzulegen.",
    role: "Design, Umsetzung, Content-Struktur, Vite-Setup, Docker-Deployment und mobile-first Optimierung.",
    technologies: ["Vite", "JavaScript", "CSS", "Docker", "Nginx"],
    features: ["Mobile First", "responsive Layout", "Case-Study-Karten", "Selfhosting-fähig"],
    status: "Aktiv weiterentwickelt",
    visibility: "Code nicht öffentlich"
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
    title: "Eigene Projekte & Homelab",
    text: "Planung, Aufbau und Betrieb praktischer Software- und Infrastrukturprojekte mit Fokus auf Alltagstauglichkeit."
  },
  {
    date: "Fokus",
    title: "Sichere und wartbare Systeme",
    text: "Strukturierte Deployments, sinnvolle Automatisierung, Monitoring und verantwortungsbewusster Betrieb."
  },
  {
    date: "Ziel",
    title: "Security & Cloud",
    text: "Spezialisierung auf sichere Softwareentwicklung, Cloud Security und robuste Systemarchitekturen."
  }
];

const specialSkills = [
  {
    title: "Webentwicklung",
    text: "Mobile-first Oberflächen, Vite-basierte Frontends, strukturierte UI-Komponenten und klare Benutzerführung.",
    points: ["Vite", "JavaScript", "CSS", "Responsive Design"]
  },
  {
    title: "Full-Stack-Denken",
    text: "Planung von Datenflüssen, Backend-Strukturen, REST-Schnittstellen und datenbankgestützten Verwaltungsfunktionen.",
    points: ["Node.js", "Express", "MariaDB", "REST-APIs"]
  },
  {
    title: "Deployment & Betrieb",
    text: "Dockerisierte Anwendungen, Linux-Umgebungen, Reverse Proxy, Monitoring und selbstständiger Betrieb eigener Dienste.",
    points: ["Docker", "Compose", "Linux", "Nginx"]
  },
  {
    title: "Security-Mindset",
    text: "Bewusster Umgang mit internen Daten, saubere Trennung privater Details und Fokus auf wartbare, kontrollierbare Systeme.",
    points: ["Hardening", "Auth", "Monitoring", "Updates"]
  }
];

const credentials = [
  {
    title: "Wirtschaftsinformatik",
    label: "Studium",
    text: "Akademischer Hintergrund mit Schwerpunkt Softwareentwicklung, IT-Systeme, Projektarbeit und wirtschaftlichem Blick auf digitale Produkte."
  },
  {
    title: "Cyber Security Awareness",
    label: "SoSafe",
    text: "Zertifizierung mit Fokus auf Sicherheitsbewusstsein, Phishing, verantwortungsvollen Umgang mit digitalen Risiken und Grundlagen der Cyber-Security."
  },
  {
    title: "Praxisprojekte",
    label: "Eigenständig aufgebaut",
    text: "Mehrere private Web- und Infrastrukturprojekte von der Idee über die Umsetzung bis zum Betrieb entwickelt."
  }
];

const techStackGroups = [
  {
    title: "Sprachen",
    iconUrl: "https://skillicons.dev/icons?i=js,html,css,java,python,cs,php",
    alt: "JavaScript, HTML, CSS, Java, Python, C Sharp und PHP"
  },
  {
    title: "Frontend",
    iconUrl: "https://skillicons.dev/icons?i=vite,react,html,css,js",
    alt: "Vite, React, HTML, CSS und JavaScript"
  },
  {
    title: "Backend & Datenbanken",
    iconUrl: "https://skillicons.dev/icons?i=nodejs,express,mysql,postgres,php",
    alt: "Node.js, Express, MySQL, PostgreSQL und PHP"
  },
  {
    title: "Infrastruktur, DevOps & Tools",
    iconUrl: "https://skillicons.dev/icons?i=docker,linux,git,github,gitlab,vscode,nginx",
    alt: "Docker, Linux, Git, GitHub, GitLab, Visual Studio Code und Nginx",
    badges: [
      { label: "Proxmox", icon: "fa-solid fa-server" },
      { label: "Grafana", icon: "fa-solid fa-chart-line" },
      { label: "VS Studio", icon: "fa-solid fa-code" }
    ]
  },
  {
    title: "Mobile Entwicklung",
    badges: [
      { label: "Android Entwicklung", state: "Im Aufbau", icon: "fa-brands fa-android" },
      { label: "iOS Entwicklung", state: "Im Aufbau", icon: "fa-brands fa-apple" }
    ]
  }
];

const externalLinkAttributes = 'target="_blank" rel="noreferrer"';
const app = document.querySelector("#app");

const routeTitles = {
  "/": "Cedric Gärtner | Developer Portfolio",
  "/projects": "Projekte | Cedric Gärtner",
  "/about": "Über mich | Cedric Gärtner",
  "/contact": "Kontakt | Cedric Gärtner",
  "/impressum": "Impressum | Cedric Gärtner"
};

const normalizePath = (path) => {
  const cleanPath = path.replace(/\/+$/, "") || "/";
  return routeTitles[cleanPath] ? cleanPath : "/";
};

const renderProjectAction = (project) =>
  project.link
    ? `<a class="project-link" href="${project.link}" ${externalLinkAttributes}>Projekt ansehen</a>`
    : `<span class="private-badge">${project.visibility}</span>`;

const renderProject = (project) => `
  <article class="project-card reveal">
    <img src="${project.image}" alt="Visual für ${project.title}" loading="lazy" />
    <div class="project-content">
      <div class="project-title-row">
        <h3>${project.title}</h3>
        <span>${project.label}</span>
      </div>
      <p>${project.description}</p>
      <dl class="case-details">
        <div>
          <dt>Problem / Ziel</dt>
          <dd>${project.goal}</dd>
        </div>
        <div>
          <dt>Meine Rolle</dt>
          <dd>${project.role}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${project.status}</dd>
        </div>
      </dl>
      <div class="tag-row" aria-label="Verwendete Technologien">
        ${project.technologies.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="feature-list" aria-label="Besondere Funktionen">
        ${project.features.map((feature) => `<span>${feature}</span>`).join("")}
      </div>
      ${renderProjectAction(project)}
    </div>
  </article>
`;

const renderSkillCard = (skill) => `
  <article class="skill-card tone-${skill.tone} reveal">
    <h3>${skill.title}</h3>
    <ul>
      ${skill.items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  </article>
`;

const renderSpecialSkill = (skill) => `
  <article class="detail-card reveal">
    <h3>${skill.title}</h3>
    <p>${skill.text}</p>
    <div class="tag-row">
      ${skill.points.map((point) => `<span>${point}</span>`).join("")}
    </div>
  </article>
`;

const renderCredential = (credential) => `
  <article class="credential-card reveal">
    <span>${credential.label}</span>
    <h3>${credential.title}</h3>
    <p>${credential.text}</p>
  </article>
`;

const renderTechStackGroup = (group) => `
  <article class="tech-stack-group reveal">
    <h3>${group.title}</h3>
    ${
      group.iconUrl
        ? `<img class="tech-icon-strip" src="${group.iconUrl}" alt="${group.alt}" loading="lazy" />`
        : ""
    }
    ${
      group.badges
        ? `<div class="mini-badge-row">
            ${group.badges
              .map(
                (badge) => `
                  <span class="mini-badge">
                    <i class="${badge.icon}" aria-hidden="true"></i>
                    ${badge.label}${badge.state ? `<strong>${badge.state}</strong>` : ""}
                  </span>
                `
              )
              .join("")}
          </div>`
        : ""
    }
  </article>
`;

const iconByLabel = {
  GitHub: "fa-brands fa-github",
  LinkedIn: "fa-brands fa-linkedin-in",
  Instagram: "fa-brands fa-instagram"
};

const renderSocialLink = (link) => `
  <a class="social-icon-link" href="${link.href}" ${externalLinkAttributes} aria-label="${link.label}">
    <i class="${iconByLabel[link.label]}"></i>
    <span>${link.label}</span>
  </a>
`;

const renderHeader = (path) => `
  <header class="site-header">
    <a class="brand internal-link" href="/" aria-label="Zur Startseite">
      <span class="brand-mark">CG</span>
      <span>Cedric</span>
    </a>
    <button class="nav-toggle" type="button" aria-label="Navigation öffnen" aria-expanded="false">
      <span></span>
      <span></span>
    </button>
    <nav class="site-nav" aria-label="Hauptnavigation">
      ${navItems
        .map(
          ([label, href]) =>
            `<a class="internal-link ${path === href ? "is-active" : ""}" href="${href}">${label}</a>`
        )
        .join("")}
    </nav>
  </header>
`;

const renderFooter = () => `
  <footer class="site-footer">
    <span>© <span id="year"></span> ${profile.name}</span>
    <a class="internal-link" href="/impressum">Impressum</a>
  </footer>
`;

const homePage = () => `
  <main>
    <section class="hero section-shell reveal page-view">
      <div class="hero-copy">
        <p class="section-kicker">Developer Portfolio</p>
        <h1 class="hero-title" data-text="${profile.name}">${profile.name}</h1>
        <p class="hero-role">${profile.role}</p>
        <p class="hero-text">${profile.intro}</p>
        <div class="hero-actions">
          <a class="button primary internal-link" href="/projects">Projekte ansehen</a>
          <a class="button ghost internal-link" href="/contact">Kontakt aufnehmen</a>
        </div>
      </div>
      <aside class="profile-panel" aria-label="Kurzprofil">
        <img src="${profile.image}" alt="Profilbild von ${profile.name}" />
        <div>
          <strong>Focus</strong>
          <span>Webentwicklung, Docker, IT-Security, Automatisierung</span>
        </div>
        <div class="floating-stack" aria-label="Tech Highlights">
          <span>Vite</span>
          <span>Docker</span>
          <span>Security</span>
          <span>Selfhosting</span>
        </div>
      </aside>
    </section>

    <section class="section-shell split-section reveal">
      <div>
        <p class="section-kicker">Profil</p>
        <h2>Software, Infrastruktur und Security-Denken in einem Profil.</h2>
      </div>
      <div class="rich-text">
        <p>
          Ich entwickle Anwendungen von der ersten Idee bis zum Betrieb: Struktur planen, Benutzeroberflächen gestalten, Backend-Logik umsetzen, Datenbanken einbinden und Dienste auf eigener Infrastruktur betreiben.
        </p>
        <p>
          Meine Projekte sind oft privat oder intern. Genau deshalb zeige ich sie als seriöse Cases: mit Ziel, Rolle, Technologie und Wirkung, ohne vertrauliche Details offenzulegen.
        </p>
      </div>
    </section>

    <section class="section-shell reveal">
      <div class="section-heading">
        <p class="section-kicker">Spezielle Fähigkeiten</p>
        <h2>Programmierkenntnisse und praktische Webentwicklung.</h2>
      </div>
      <div class="detail-grid">
        ${specialSkills.slice(0, 4).map((skill) => renderSpecialSkill(skill)).join("")}
      </div>
    </section>

    <section class="section-shell reveal">
      <div class="section-heading section-heading-row">
        <div>
          <p class="section-kicker">Ausgewählte Cases</p>
          <h2>Kuratierte Projekte, professionell erklärt.</h2>
        </div>
        <a class="button ghost internal-link" href="/projects">Alle Projekte</a>
      </div>
      <div class="project-grid featured-projects">
        ${projects.slice(0, 2).map((project) => renderProject(project)).join("")}
      </div>
    </section>

    <section class="section-shell social-section reveal">
      <div>
        <p class="section-kicker">Connect</p>
        <h2>Mehr von mir findest du hier.</h2>
        <p>Code, Netzwerk und Einblicke in Projekte und Technik.</p>
      </div>
      <div class="social-icon-grid">
        ${profile.links.map((link) => renderSocialLink(link)).join("")}
      </div>
    </section>
  </main>
`;

const projectsPage = () => `
  <main class="page-view">
    <section class="page-hero section-shell reveal">
      <p class="section-kicker">Projekte</p>
      <h1>Kuratierte Projekt-Cases ohne öffentlichen Quellcode.</h1>
      <p>
        Ich zeige nur ausgewählte Arbeiten, die meine Fähigkeiten am besten abbilden: interne Webanwendungen, digitale Produkte, Automatisierung und selbst betriebene Infrastruktur.
      </p>
    </section>
    <section class="section-shell project-page-section">
      <div class="project-grid">
        ${projects.map((project) => renderProject(project)).join("")}
      </div>
    </section>
  </main>
`;

const aboutPage = () => `
  <main class="page-view">
    <section class="page-hero section-shell reveal">
      <p class="section-kicker">Über mich</p>
      <h1>Ich verbinde Entwicklung, Betrieb und Security-Mindset.</h1>
      <p>
        Ich bin Wirtschaftsinformatik-Student mit Schwerpunkt Softwareentwicklung und baue moderne Webanwendungen, interne Tools und eigene Infrastrukturprojekte.
      </p>
    </section>

    <section class="section-shell split-section reveal">
      <div>
        <p class="section-kicker">Arbeitsweise</p>
        <h2>Von der Idee bis zum laufenden System.</h2>
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

    <section class="section-shell reveal">
      <div class="section-heading">
        <p class="section-kicker">Spezielle Fähigkeiten</p>
        <h2>Was ich konkret einbringe</h2>
      </div>
      <div class="detail-grid">
        ${specialSkills.map((skill) => renderSpecialSkill(skill)).join("")}
      </div>
    </section>

    <section class="section-shell reveal">
      <div class="section-heading">
        <p class="section-kicker">Tech Stack</p>
        <h2>Programmiersprachen, Frameworks und Tools</h2>
      </div>
      <div class="tech-stack-list">
        ${techStackGroups.map((group) => renderTechStackGroup(group)).join("")}
      </div>
    </section>

    <section class="section-shell reveal">
      <div class="section-heading">
        <p class="section-kicker">Ausbildung & Glaubwürdigkeit</p>
        <h2>Studium, Zertifikat und praktische Erfahrung.</h2>
      </div>
      <div class="credential-grid">
        ${credentials.map((credential) => renderCredential(credential)).join("")}
      </div>
    </section>

    <section class="section-shell split-section reveal">
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
  </main>
`;

const contactPage = () => `
  <main class="page-view">
    <section class="page-hero section-shell reveal">
      <p class="section-kicker">Kontakt</p>
      <h1>Lass uns über Webentwicklung, Infrastruktur oder Security sprechen.</h1>
      <p>Schreib mir gern direkt per Mail oder schau auf meinen Profilen vorbei.</p>
    </section>

    <section class="section-shell contact-section reveal">
      <p class="section-kicker">Erreichbar</p>
      <h2>Kontakt aufnehmen</h2>
      <p>Nutze das Formular oder schreib mir direkt per Mail. Das Formular öffnet dein Mailprogramm mit vorbereiteter Nachricht.</p>
      <div class="contact-layout">
        <form class="contact-form" id="contact-form">
          <label>
            Name
            <input name="name" type="text" autocomplete="name" placeholder="Dein Name" required />
          </label>
          <label>
            E-Mail
            <input name="email" type="email" autocomplete="email" placeholder="deine@mail.de" required />
          </label>
          <label>
            Thema
            <input name="subject" type="text" placeholder="Projekt, Anfrage oder Austausch" required />
          </label>
          <label>
            Nachricht
            <textarea name="message" rows="6" placeholder="Worum geht es?" required></textarea>
          </label>
          <button class="button primary" type="submit">Nachricht vorbereiten</button>
          <p class="form-note">Es werden keine Formulardaten gespeichert oder an einen Server gesendet.</p>
        </form>
        <aside class="contact-card">
          <h3>Direktkontakt</h3>
          <p>${profile.email}</p>
          <div class="contact-actions">
            <a class="button ghost" href="mailto:${profile.email}">E-Mail</a>
            ${profile.links
              .map((link) => `<a class="button ghost" href="${link.href}" ${externalLinkAttributes}>${link.label}</a>`)
              .join("")}
          </div>
        </aside>
      </div>
    </section>
  </main>
`;

const impressumPage = () => `
  <main class="page-view">
    <section class="section-shell impressum reveal">
      <p class="section-kicker">Impressum</p>
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p><strong>Name:</strong> Cedric Gärtner</p>
      <p><strong>Adresse:</strong> Lautaer Hauptstr. 6f, 09496 Marienberg</p>
      <p><strong>E-Mail:</strong> <a href="mailto:${profile.email}">${profile.email}</a></p>
      <p><strong>Verantwortlich für den Inhalt:</strong> Cedric Gärtner, Lautaer Hauptstr. 6f, 09496 Marienberg</p>
    </section>
  </main>
`;

const routes = {
  "/": homePage,
  "/projects": projectsPage,
  "/about": aboutPage,
  "/contact": contactPage,
  "/impressum": impressumPage
};

const bindNavigation = () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".internal-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      navigate(url.pathname);
    });
  });
};

const bindContactForm = () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      "",
      "Nachricht:",
      message
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
};

const revealContent = () => {
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
};

const render = (path = normalizePath(window.location.pathname)) => {
  document.title = routeTitles[path];
  app.innerHTML = `${renderHeader(path)}${routes[path]()}${renderFooter()}`;
  document.querySelector("#year").textContent = new Date().getFullYear();
  bindNavigation();
  bindContactForm();
  revealContent();
  window.scrollTo(0, 0);
};

const navigate = (path) => {
  const nextPath = normalizePath(path);
  if (nextPath !== window.location.pathname) {
    window.history.pushState({}, "", nextPath);
  }
  render(nextPath);
};

window.addEventListener("popstate", () => render());

render();
