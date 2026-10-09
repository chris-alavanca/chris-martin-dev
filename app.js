const UI = {
  en: {
    docTitle: "Chris Martin · Web and mobile apps, built to your brief",
    docDesc: "Chris Martin designs and builds web and mobile apps for businesses, built to the brief. Based in Tenerife.",
    navWork: "Work",
    heroTitle: "Web and mobile apps that work the way you pictured.",
    heroText: "Booking systems, quoting tools, client portals and dashboards, built around how your business actually works. You see a working preview within days and get a finished app that does what you asked for. And as a cybersecurity practitioner, I keep your business information in safe hands.",
    workTitle: "Work",
    workLede: "Each project links to the live app, and to the code where it can be shared.",
    howTitle: "How I work",
    how1t: "Built to your brief",
    how1p: "Scope agreed in writing before work starts, and every point checked before delivery. What you get is what you asked for.",
    how2t: "See it working early",
    how2p: "A live preview within days, so you can try it, react and steer while changes are still easy.",
    how3t: "Your information, in safe hands",
    how3p: "A background in information security means your business information is handled carefully and kept confidential.",
    footer: "Chris Martin · Tenerife, Canary Islands",
    built: "Built", stack: "Stack", open: "Open the app", code: "See the code", inUse: "In use",
    openLabel: "Open", preview: "Preview of"
  },
  es: {
    docTitle: "Chris Martin · Aplicaciones web y móviles, hechas según tu brief",
    docDesc: "Chris Martin diseña y desarrolla aplicaciones web y móviles para empresas, según el brief. Desde Tenerife.",
    navWork: "Trabajos",
    heroTitle: "Aplicaciones web y móviles que funcionan como las imaginaste.",
    heroText: "Sistemas de reservas, calculadoras de presupuestos, portales de clientes y paneles, hechos a la medida de cómo funciona tu negocio. Ves una vista previa funcionando en pocos días y recibes una aplicación terminada que hace lo que pediste. Y como profesional de la ciberseguridad, mantengo tu información de negocio en buenas manos.",
    workTitle: "Trabajos",
    workLede: "Cada proyecto enlaza a la aplicación en funcionamiento y, cuando se puede compartir, al código.",
    howTitle: "Cómo trabajo",
    how1t: "Hecho según tu brief",
    how1p: "Alcance acordado por escrito antes de empezar y cada punto revisado antes de la entrega. Recibes lo que pediste.",
    how2t: "Funcionando desde el principio",
    how2p: "Una vista previa en pocos días, para probarla, opinar y ajustar mientras los cambios aún son fáciles.",
    how3t: "Tu información, en buenas manos",
    how3p: "Mi experiencia en seguridad de la información garantiza que tus datos de negocio se tratan con cuidado y se mantienen confidenciales.",
    footer: "Chris Martin · Tenerife, Islas Canarias",
    built: "Incluye", stack: "Tecnología", open: "Abrir la aplicación", code: "Ver el código", inUse: "En uso",
    openLabel: "Abrir", preview: "Vista previa de"
  }
};

/*
  To add a project, copy one object in this list and fill in both languages.
  Newest first. Leave "live" or "code" empty if there is none.
  Also add the project's live address to frame-src in vercel.json, or its preview stays blank.
*/
const PROJECTS = [
  {
    live: "https://fisio-citas-demo.pages.dev",
    code: "https://github.com/chris-alavanca/fisio-citas-demo",
    inUse: false,
    en: {
      title: "Booking system for a physiotherapy clinic",
      who: "Demo project, fictional clinic",
      summary: "Patients pick a treatment, a physio and a free time, or book a weekly course in one go. Reception sees each physio's day, tracks no-shows and session packs, and keeps a waiting list for full days.",
      built: "Real-time free slots, limited treatment rooms, weekly courses, session packs, waiting list, EN/ES",
      stack: "React, Vite, sample data in the browser, Cloudflare"
    },
    es: {
      title: "Sistema de reservas para una clínica de fisioterapia",
      who: "Proyecto de demostración, clínica ficticia",
      summary: "Los pacientes eligen tratamiento, fisio y un hueco libre, o reservan un ciclo semanal de una vez. Recepción ve el día de cada fisio, controla las faltas y los bonos de sesiones, y mantiene una lista de espera para los días completos.",
      built: "Huecos libres en tiempo real, cabinas limitadas, ciclos semanales, bonos de sesiones, lista de espera, ES/EN",
      stack: "React, Vite, datos de ejemplo en el navegador, Cloudflare"
    }
  },
  {
    live: "https://crm-solar-demo.pages.dev",
    code: "https://github.com/chris-alavanca/crm-solar-demo",
    inUse: false,
    en: {
      title: "Sales pipeline CRM for a solar installer",
      who: "Demo project, fictional company",
      summary: "Tracks enquiries from first contact to signed job on a drag-and-drop pipeline. Each deal keeps its call notes and tasks, and a lost deal needs a reason, so you can see why work is being lost.",
      built: "Pipeline board, contacts, tasks with due dates and simulated reminders, activity log, loss report, EN/ES",
      stack: "React, Vite, sample data in the browser, Cloudflare"
    },
    es: {
      title: "CRM de ventas con embudo para una instaladora solar",
      who: "Proyecto de demostración, empresa ficticia",
      summary: "Sigue las consultas desde el primer contacto hasta el trabajo firmado en un embudo que se maneja arrastrando tarjetas. Cada oportunidad guarda sus notas de llamada y tareas, y una venta perdida exige un motivo, para ver por qué se pierde trabajo.",
      built: "Embudo de ventas, contactos, tareas con fecha límite y recordatorios simulados, registro de actividad, informe de pérdidas, ES/EN",
      stack: "React, Vite, datos de ejemplo en el navegador, Cloudflare"
    }
  },
  {
    live: "https://resq-first-aid.vercel.app",
    code: "",
    inUse: false,
    en: {
      title: "ResQ: first-aid guidance in five languages",
      who: "Personal project, training demo",
      summary: "A quick triage walkthrough leads to clear step-by-step instructions for CPR, choking, bleeding, burns, fractures, shock, poisoning and severe allergic reactions. Each procedure can be read aloud, and local emergency numbers are one tap away.",
      built: "Guided triage, eight procedures, voice guidance, emergency numbers by country, English, Spanish, German, Russian and Ukrainian, no login, no data collected",
      stack: "Expo, React Native for Web, TypeScript, built with Emergent, Vercel"
    },
    es: {
      title: "ResQ: guía de primeros auxilios en cinco idiomas",
      who: "Proyecto personal, demo de formación",
      summary: "Un triaje rápido lleva a instrucciones claras paso a paso para RCP, atragantamiento, hemorragias, quemaduras, fracturas, shock, intoxicaciones y reacciones alérgicas graves. Cada procedimiento se puede escuchar en voz alta y los números de emergencia locales están a un toque.",
      built: "Triaje guiado, ocho procedimientos, guía por voz, números de emergencia por país, inglés, español, alemán, ruso y ucraniano, sin registro, sin recogida de datos",
      stack: "Expo, React Native for Web, TypeScript, creada con Emergent, Vercel"
    }
  },
  {
    live: "https://presupuesto-carpinteria.vercel.app",
    code: "https://github.com/chris-alavanca/presupuesto-carpinteria",
    inUse: false,
    en: {
      title: "Quote calculator for a custom joinery workshop",
      who: "Demo project, fictional workshop",
      summary: "Prices shelving, wardrobes, kitchen units, tables and doors from their size, material and finish. A dimensioned drawing redraws as you type, and quotes can be saved per client, tracked and printed as a PDF.",
      built: "Live drawing, full price breakdown, IGIC or IVA, saved quotes with status, print to PDF",
      stack: "React, Vite, CSS, sample data in the browser, Vercel"
    },
    es: {
      title: "Calculadora de presupuestos para un taller de carpintería a medida",
      who: "Proyecto de demostración, taller ficticio",
      summary: "Calcula el precio de estanterías, armarios, módulos de cocina, mesas y puertas según medidas, material y acabado. Un plano acotado se redibuja mientras escribes, y los presupuestos se guardan por cliente, se siguen por estado y se imprimen en PDF.",
      built: "Plano en vivo, desglose completo del precio, IGIC o IVA, presupuestos guardados con estado, impresión a PDF",
      stack: "React, Vite, CSS, datos de ejemplo en el navegador, Vercel"
    }
  },
  {
    live: "https://team-garra-rsvp.vercel.app",
    code: "https://github.com/chris-alavanca/team-garra-rsvp",
    inUse: true,
    en: {
      title: "¿Quién viene? Session board for an MMA group",
      who: "Team Garra MMA, Duke Gym, Costa Adeje",
      summary: "Members type their name once, then tap the sessions they are coming to this week. Everyone sees the same live list, so the coach knows numbers before class.",
      built: "Shared live list, no login needed, works on any phone",
      stack: "HTML, CSS, JavaScript, Supabase, Vercel"
    },
    es: {
      title: "¿Quién viene? Tablero de sesiones para un grupo de MMA",
      who: "Team Garra MMA, Duke Gym, Costa Adeje",
      summary: "Los miembros escriben su nombre una vez y marcan las sesiones a las que van esta semana. Todos ven la misma lista en directo, así el entrenador sabe cuántos vienen antes de la clase.",
      built: "Lista compartida en directo, sin registro, funciona en cualquier móvil",
      stack: "HTML, CSS, JavaScript, Supabase, Vercel"
    }
  }
];

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderProjects(lang) {
  const t = UI[lang];
  document.getElementById('projects').innerHTML = PROJECTS.map(p => {
    const c = p[lang];
    return `
    <article class="project">
      ${p.live
        ? `<a class="shot" href="${esc(p.live)}" aria-label="${esc(t.openLabel)}: ${esc(c.title)}">
             <iframe src="${esc(p.live)}" title="${esc(t.preview)} ${esc(c.title)}" loading="lazy" tabindex="-1" sandbox="allow-scripts allow-same-origin" referrerpolicy="no-referrer"></iframe>
             <span class="cover"></span>
           </a>`
        : `<div class="shot" aria-hidden="true"></div>`}
      <div>
        <h3>${esc(c.title)}</h3>
        <p class="who">${esc(c.who)}</p>
        <p>${esc(c.summary)}</p>
        <dl class="facts">
          <dt>${esc(t.built)}</dt><dd>${esc(c.built)}</dd>
          <dt>${esc(t.stack)}</dt><dd>${esc(c.stack)}</dd>
        </dl>
        ${p.inUse ? `<p class="live">${esc(t.inUse)}</p>` : ''}
        <div class="links">
          ${p.live ? `<a class="btn primary" href="${esc(p.live)}">${esc(t.open)}</a>` : ''}
          ${p.code ? `<a class="btn" href="${esc(p.code)}">${esc(t.code)}</a>` : ''}
        </div>
      </div>
    </article>`;
  }).join('');
}

function setLang(lang) {
  const t = UI[lang];
  document.documentElement.lang = lang;
  document.title = t.docTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', t.docDesc);
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t[el.dataset.t]; });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  renderProjects(lang);
  try { localStorage.setItem('lang', lang); } catch (e) {}
  if (history.replaceState) history.replaceState(null, '', lang === 'es' ? '?lang=es' : location.pathname + location.hash);
}

document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

// Order of preference: ?lang= in the link, then the viewer's last choice, then their browser language.
const fromUrl = new URLSearchParams(location.search).get('lang');
let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
const browser = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
setLang(UI[fromUrl] ? fromUrl : UI[saved] ? saved : browser);
