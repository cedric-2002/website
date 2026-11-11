import './experience.css';
import { clamp, assemblyStep } from './assembly-motion.js';

const technologies = [
  ['JavaScript / TypeScript', 'Typisierte Schnittstellen und interaktive Weboberflächen.'],
  ['Node.js', 'APIs, Geschäftslogik und die Verbindung zur Datenbank.'],
  ['Python', 'Automatisierung, Werkzeuge und technische Experimente.'],
  ['React', 'Komponentenbasierte Benutzeroberflächen.'],
  ['PostgreSQL / MariaDB', 'Strukturierte Daten und nachvollziehbare Datenflüsse.'],
  ['Docker', 'Reproduzierbare Umgebungen für Entwicklung und Betrieb.'],
  ['Linux / Proxmox', 'Virtuelle Maschinen und selbst betriebene Dienste.'],
  ['Git / DevSecOps', 'Versionierung und Sicherheit im Entwicklungsprozess.']
];
const systems = [
  ['Proxmox VE', 'Der Host stellt isolierte virtuelle Umgebungen bereit.'],
  ['Docker-VM', 'Container bündeln Anwendungen und ihre Abhängigkeiten.'],
  ['Grafana', 'Dashboards machen Messwerte und den Zustand der Dienste sichtbar.'],
  ['Nextcloud', 'Selbst betriebene Dateiablage und Zusammenarbeit.'],
  ['Home Assistant', 'Lokale Steuerung und Automatisierung des Smart Homes.'],
  ['Cloudflare Tunnel', 'Verbindet ausgewählte Dienste mit einem kontrollierten Zugang.']
];
const cases = [
  {id:'analyzer', title:'AI Security Analyzer', category:'01 / RESEARCH & SECURITY', text:'Sicherheitslücken verstehen. KI-Modelle nachvollziehbar vergleichen.', parts:['Quellcode', 'Analyse-Engine', 'KI-Modelle', 'Findings'], architecture:'Vite → Node.js / Express → PostgreSQL. Eine Analyse-Engine verbindet versionierte Prompts mit verschiedenen Modellanbietern.', challenge:'Wie lassen sich Modellausgaben reproduzierbar bewerten und Kosten begrenzen?', solution:'Eingabe-Hashes, protokollierte Analyseläufe, Ground Truth und ein zentraler Budgetrahmen machen Ergebnisse vergleichbar.', image:'security'},
  {id:'climbing', title:'Kletterwelt Erzgebirge', category:'02 / SOFTWARE IM ALLTAG', text:'Vom ersten Check-in bis zur dokumentierten Materialprüfung.', parts:['Check-in', 'Kundenverwaltung', 'Prüfungen', 'Inventar'], architecture:'Browser → Node.js / Express → MariaDB. Verwaltung und Prüfdokumentation greifen auf denselben Datenbestand zu.', challenge:'Check-in, Kundenverwaltung und Materialhistorie müssen im Hallenalltag verständlich bedienbar bleiben.', solution:'Klare Arbeitsabläufe verbinden Registrierung, Kundenkarte, Inventar und nachvollziehbare Prüfhistorien.', image:'kletterwelt'},
  {id:'calendar', title:'Adventskalender 2.0', category:'03 / INTERACTIVE EXPERIENCE', text:'24 Türen. Ein System für Spiele, Inhalte und gemeinsame Momente.', parts:['Kalender', 'Minispiele', 'Layout-Editor', 'Administration'], architecture:'Vite → Node.js → PostgreSQL. Docker verbindet Frontend, Backend und Datenbank im Betrieb.', challenge:'Unterschiedliche Spiele und Inhalte sollen sich ohne Änderungen am Programmcode zusammenstellen lassen.', solution:'Ein modularer Spielaufbau, zentrale Einstellungen und ein visueller Layout-Editor unterstützen die Administration.', image:'adventskalender'}
];
const wires = () => `<svg class="scene-wires" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">${[70,170,270,370].map(y=>`<path d="M0 250 H160 Q220 250 250 ${y} H750 Q800 ${y} 850 250 H1000"/>`).join('')}</svg>`;
const nodes = (items) => items.map(([name,description],i)=>`<button class="system-node assembly-part" type="button" data-description="${description}" aria-pressed="false"><span class="node-index">${String(i+1).padStart(2,'0')}</span><strong>${name}</strong><span aria-hidden="true">↗</span></button>`).join('');
const label = (n,title) => `<div class="scene-label"><span>${n} / ${title}</span><span>CEDRIC GÄRTNER — PORTFOLIO</span></div>`;
export const experiencePage = (profile) => `<main id="main-content" class="experience">
  <a class="experience-skip" href="#final-connection">Direkt zum Kontakt ↓</a>
  <div class="journey-line" aria-hidden="true"><span></span></div>
  <section class="motion-scene boot-scene" id="initialization">${label('01','INITIALIZATION')}<div class="scene-inner boot-inner">${wires()}<div class="boot-grid" aria-hidden="true"></div><p class="eyebrow assembly-part">SOFTWARE ENGINEERING / IT-SECURITY / SYSTEMARCHITEKTUR</p><h1 class="boot-name">Cedric<br><span>Gärtner.</span></h1><div class="boot-bottom assembly-part"><p>Ich baue Software.<br>Und verstehe das System dahinter.</p><a href="#ecosystem">Scrollen & den Aufbau entdecken <span aria-hidden="true">↓</span></a></div><span class="boot-coordinate assembly-part" aria-hidden="true">IDEA → CODE → SYSTEM</span></div></section>
  <section class="motion-scene ecosystem-scene" id="ecosystem">${label('02','TECHNOLOGY ECOSYSTEM')}<div class="scene-inner"><div class="scene-copy"><p class="eyebrow">VERBUNDEN STATT ISOLIERT</p><h2>Ein Stack.<br>Viele Verbindungen.</h2><p>Von der Oberfläche bis zum Betrieb. Wähle eine Technologie und entdecke ihre Rolle.</p></div><div class="network-stage">${wires()}<div class="network-core assembly-part" aria-hidden="true">CG<span>SYSTEM THINKING</span></div><div class="node-grid">${nodes(technologies)}</div></div><p class="node-description" aria-live="polite">Technologie auswählen, um mehr zu erfahren.</p></div></section>
  ${cases.map((project,i)=>`<section class="motion-scene project-scene project-${project.id}" id="${project.id}">${label('03.'+(i+1),'PROJECT ASSEMBLY')}<div class="scene-inner project-layout"><div class="scene-copy"><p class="eyebrow">${project.category}</p><h2>${project.title}</h2><p>${project.text}</p><a class="text-link internal-link" href="/projects#${project.id}">Architektur & Projekt ansehen ↗</a></div><div class="project-machine">${wires()}<div class="machine-title assembly-part"><span>${project.title}</span><span aria-hidden="true">● ● ●</span></div><div class="machine-parts">${project.parts.map((part,j)=>`<div class="machine-part assembly-part"><span>0${j+1}</span><strong>${part}</strong><i aria-hidden="true"></i></div>`).join('')}</div><div class="machine-result assembly-part"><span aria-hidden="true">✓</span> ${i===0?'Analyse → Evaluation':i===1?'Erfassen → Verwalten → Prüfen':'Konfigurieren → Spielen → Auswerten'}</div></div></div></section>`).join('')}
  <section class="motion-scene infrastructure-scene" id="infrastructure">${label('04','INFRASTRUCTURE')}<div class="scene-inner"><div class="scene-copy"><p class="eyebrow">MEIN HOME LAB</p><h2>Code endet nicht<br>beim Deployment.</h2><p>Eine abstrahierte Ansicht meiner Infrastruktur. Selbst betreiben heißt für mich: Zusammenhänge verstehen.</p></div><div class="infrastructure-map">${wires()}<div class="node-grid">${nodes(systems)}</div></div><p class="node-description" aria-live="polite">System auswählen, um mehr zu erfahren.</p></div></section>
  <section class="motion-scene behind-scene" id="behind-code">${label('05','BEHIND THE CODE')}<div class="scene-inner about-layout"><div class="scene-copy"><p class="eyebrow">MENSCH HINTER DEM SYSTEM</p><h2>Neugierig bleiben.<br>Dinge besser bauen.</h2><p>Duales Studium der Wirtschaftsinformatik an der IU Leipzig, Praxis im Produktmanagement bei KIX und eigene Softwareprojekte: Ich verbinde technische Entscheidungen mit den Menschen, die ein Produkt benutzen.</p><a class="text-link internal-link" href="/about">Mehr über mich ↗</a></div><div class="personal-assembly"><img src="${profile.image}" alt="Cedric Gärtner" loading="lazy" width="420" height="460"/><ol class="experience-timeline"><li class="assembly-part"><span>STUDIUM</span><h3>Wirtschaft trifft Informatik</h3><p>Technik verstehen und ihren Nutzen hinterfragen.</p></li><li class="assembly-part"><span>PRAXIS</span><h3>Produkte mitgestalten</h3><p>Produktmanagement, Entwicklung und eigene Anwendungen.</p></li><li class="assembly-part"><span>FOKUS</span><h3>Security & DevSecOps</h3><p>Sichere, wartbare Software von Anfang an mitdenken.</p></li></ol></div></div></section>
  <section class="motion-scene contact-scene" id="final-connection">${label('06','FINAL CONNECTION')}<div class="scene-inner">${wires()}<p class="eyebrow assembly-part">DIE NÄCHSTE VERBINDUNG</p><h2>Gute Systeme beginnen<br>mit einem Gespräch.</h2><a class="contact-mail assembly-part" href="mailto:${profile.email}">${profile.email} ↗</a><div class="final-links assembly-part"><a class="internal-link" href="/contact">Kontaktformular</a>${profile.links.map(link=>`<a href="${link.href}" target="_blank" rel="noreferrer">${link.label} ↗</a>`).join('')}</div></div></section>
</main>`;

export const caseStudies = () => cases.map(project=>`<article class="section-shell case-study" id="${project.id}"><p class="section-kicker">${project.category}</p><h2>${project.title}</h2><p>${project.text}</p><img src="/images/projects/${project.image}.svg" alt="Schematische Illustration für ${project.title}; kein Anwendungsscreenshot" loading="lazy"/><div class="case-study-grid"><div><h3>Architektur</h3><p>${project.architecture}</p></div><div><h3>Herausforderung</h3><p>${project.challenge}</p></div><div><h3>Lösung</h3><p>${project.solution}</p></div></div><small>Abstrahierte Darstellung. Quellcode und interne Anwendungsdaten sind nicht öffentlich.</small></article>`).join('');

export function initExperience() {
  const root = document.querySelector('.experience');
  if (!root) return () => {};
  const controller = new AbortController();
  let autoFrame = 0, lastAuto = 0, playing = false, scrollPosition = 0;
  let started = !matchMedia('(prefers-reduced-motion: no-preference)').matches;
  let intro = null;
  const burstAnimations = [];
  function pause() {
    playing=false;
    cancelAnimationFrame(autoFrame);

  }
  function autoScroll(time) {
    if(!playing) return;
    const dt=lastAuto?Math.min(50,time-lastAuto):0;
    lastAuto=time;
    const end=root.offsetTop+root.offsetHeight-innerHeight;
    scrollPosition=Math.min(end,scrollPosition+dt*Math.max(65,innerHeight*.12)/1000);
    const next=scrollPosition;
    window.scrollTo({top:next,behavior:'instant'});
    if(next>=end){pause();return;}
    autoFrame=requestAnimationFrame(autoScroll);
  }
  function play() {
    if(!motion.matches || document.hidden) return;
    playing=true;lastAuto=0;scrollPosition=window.scrollY;

    autoFrame=requestAnimationFrame(autoScroll);
  }
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden) { cancelAnimationFrame(autoFrame);lastAuto=0; }
    else if(playing) autoFrame=requestAnimationFrame(autoScroll);
  },{signal:controller.signal});
  root.querySelectorAll('.system-node').forEach(button => button.addEventListener('click', () => {
    const section = button.closest('section');
    section.querySelectorAll('.system-node').forEach(node => node.setAttribute('aria-pressed', String(node===button)));
    section.querySelector('.node-description').textContent = `${button.querySelector('strong').textContent}: ${button.dataset.description}`;
  }, {signal:controller.signal}));
  const motion = matchMedia('(prefers-reduced-motion: no-preference)');
  const mobile = matchMedia('(max-width: 760px)');
  let frame = 0;
  let previousTime = 0;
  const scenes = [...root.querySelectorAll('.motion-scene')].map(scene => {
    const inner = scene.querySelector('.scene-inner');
    const parts = [...new Set(scene.querySelectorAll('.assembly-part, .scene-label, .scene-copy > *, .boot-name, .personal-assembly > img'))];
    const paths = [...scene.querySelectorAll('.scene-wires path')].map(path => {
      const length = path.getTotalLength();
      return {path,length};
    });
    const cursors = Array.from({length:16},(_,i) => ['Layout', 'Code', 'Design', 'System'][i%4]).map((name,i) => {
      const cursor = document.createElement('div');
      cursor.className = `builder-cursor builder-cursor-${i%4}`;
      cursor.setAttribute('aria-hidden','true');
      cursor.innerHTML = `<svg viewBox="0 0 24 28"><path d="M2 2 L21 17 L12 18 L8 26 Z"/></svg><span>${name} ${String(i+1).padStart(2,'0')}</span>`;
      inner.append(cursor);
      return cursor;
    });
    return {scene,inner,parts,paths,cursors,progress:0};
  });
  function update(time = performance.now()) {
    const elapsed = previousTime ? Math.min(50, Math.max(0,time-previousTime)) : 0;
    previousTime = time;
    let animating = false;
    frame = 0;
    const moving = motion.matches;
    const compact = mobile.matches;
    const measurements = scenes.map(({scene}) => scene.getBoundingClientRect());
    const rootTop = root.getBoundingClientRect().top;
    const total = root.offsetHeight-innerHeight;
    scenes.forEach((state,index) => {
      const {scene,inner,parts,paths,cursors} = state;
      const bounds = measurements[index];
      const visible = started && bounds.top < innerHeight*.82 && bounds.bottom > innerHeight*.18;
      if (bounds.top > innerHeight) state.progress = 0;
      if (moving && visible && state.progress < 1) {
        state.progress = clamp(state.progress + elapsed / (compact ? 3200 : 4600));
        animating = true;
      }
      const progress = moving ? state.progress : 1;
      scene.style.setProperty('--build-progress',String(progress));
      if(index===0) {
        document.body.style.setProperty('--intro-build',String(clamp(progress*2)));
        if(progress===1) document.body.classList.remove('building-page');
      }
      parts.forEach((part,i) => {
        const {placed:p,selected,local} = assemblyStep(progress,i,parts.length);
        const carry = 1-Math.pow(1-clamp((local-.18)/.72),3);
        const dx=(i%2?1:-1)*Math.min(innerWidth*.48,500);
        const dy=90+(i%3)*30;
        part.style.transform = moving ? `translate3d(${dx*(1-carry)}px,${dy*(1-carry)}px,0) scale(${.78+carry*.22})` : '';
        part.style.opacity = moving ? String(local>0?1:0) : '';
        part.style.visibility = moving && local===0 ? 'hidden' : ''; 
        part.classList.toggle('is-assembling', moving && selected);
        part.style.clipPath = '';
      });
      cursors.forEach((cursor,lane) => {
        const laneParts = parts;
        if(cursor.dataset.flying) return;
        const active = moving && visible && progress>.015 && progress<.96 && laneParts.length;
        cursor.style.opacity = active ? '1' : '0';
        if(!active) return;
        const step = lane % laneParts.length;
        const current = laneParts[step];
        const {local} = assemblyStep(progress,step,parts.length);
        const carry = 1-Math.pow(1-clamp((local-.18)/.72),3);
        let targetX=0,targetY=0;
        for(let node=current;node && node!==inner;node=node.offsetParent){targetX+=node.offsetLeft;targetY+=node.offsetTop;}
        targetX+=current.offsetWidth*(.18+(lane%4)*.18);
        targetY+=Math.min(current.offsetHeight*.45,30);
        const dx=(step%2?1:-1)*Math.min(innerWidth*.48,500);
        const dy=90+(step%3)*30;
        const approach=clamp(local/.18);
        const x=targetX+dx*(1-carry)+(1-approach)*(lane%2?45:-45);
        const y=targetY+dy*(1-carry)+(1-approach)*60;
        cursor.style.transform = `translate3d(${x}px,${y}px,0) scale(${local>.15&&local<.25?.85:1})`;
        cursor.classList.toggle('is-clicking',local>.15&&local<.25);
        cursor.classList.toggle('is-carrying',local>.18&&local<.9);
      });
      paths.forEach(({path,length}) => {
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length*(1-progress));
      });
      if(index===0){
        const name=inner.querySelector('.boot-name');

        inner.querySelector('.boot-grid').style.opacity=String(moving?progress:1);
      }
    });
    root.querySelector('.journey-line span').style.transform = `scaleY(${total>0?clamp(-rootTop/total):1})`;
    if(animating) frame=requestAnimationFrame(update);
    else previousTime=0;
  }
  const schedule = () => {if(!frame) frame=requestAnimationFrame(update);};
  const configure = () => {
    root.classList.toggle('motion-enabled',motion.matches);
    if(frame) cancelAnimationFrame(frame);
    update();
  };
  window.addEventListener('scroll',schedule,{passive:true,signal:controller.signal});
  window.addEventListener('resize',schedule,{passive:true,signal:controller.signal});
  motion.addEventListener('change',configure,{signal:controller.signal});
  mobile.addEventListener('change',configure,{signal:controller.signal});
  configure();
  motion.addEventListener('change',()=>{if(!motion.matches) pause();},{signal:controller.signal});
  pause();
  if(motion.matches && !window.location.hash) {
    document.body.classList.add('awaiting-build');
    intro = document.createElement('div');
    intro.className = 'build-intro';
    intro.innerHTML = '<h1>Cedric Gärtner<span>.</span></h1><button type="button" class="build-start">Bau mich auf <span aria-hidden="true">↗</span></button>';
    document.body.append(intro);
    const start = () => {
      if(started) return;
      const origin = intro.querySelector('button').getBoundingClientRect();
      started = true;
      document.body.classList.remove('awaiting-build');
      document.body.classList.add('building-page');
      intro.remove();
      intro=null;
      for(let i=0;i<16;i++) {
        const cursor = scenes[0].cursors[i];
        cursor.dataset.flying='true';
        cursor.classList.add('cursor-burst');
        document.body.append(cursor);
        const x=origin.left+origin.width/2, y=origin.top+origin.height/2;
        const angle=i*2.39996;
        const radius=Math.min(innerWidth,innerHeight)*(.28+(i%3)*.12);
        const animation=cursor.animate([
          {transform:`translate(${x}px,${y}px) scale(.4)`,opacity:0},
          {opacity:1,offset:.15},
          {transform:`translate(${Math.max(15,Math.min(innerWidth-35,x+Math.cos(angle)*radius))}px,${Math.max(80,Math.min(innerHeight-35,y+Math.sin(angle)*radius))}px) scale(1)`,opacity:1,offset:.7},
          {opacity:0}
        ],{duration:1500+(i%4)*160,delay:i*22,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'});
        animation.finished.then(()=>{
          animation.cancel();
          delete cursor.dataset.flying;
          cursor.classList.remove('cursor-burst');
          scenes[0].inner.append(cursor);
          schedule();
        }).catch(()=>{});
        burstAnimations.push(animation);
      }
      schedule();
      play();
    };
    intro.querySelector('button').addEventListener('click',start,{once:true,signal:controller.signal});
    motion.addEventListener('change',()=>{
      if(!motion.matches){intro?.remove();intro=null;started=true;document.body.classList.remove('awaiting-build','building-page');}
    },{signal:controller.signal});
  } else started=true;
  return () => {pause();intro?.remove();burstAnimations.forEach(animation=>animation.cancel());document.body.classList.remove('awaiting-build','building-page');document.body.style.removeProperty('--intro-build');controller.abort();cancelAnimationFrame(frame);};
}
