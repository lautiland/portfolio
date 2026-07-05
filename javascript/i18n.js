// ============================================================
// Traducciones — agregar aquí cada string traducible
// ============================================================

var translations = {
  // ── Terminal ──────────────────────────────────────────────
  terminal: {
    hint: {
      es: "escribí <strong>help</strong> para ver los comandos disponibles",
      en: "type <strong>help</strong> to see available commands",
    },
    promptLabel: {
      es: "visitante@portfolio:~$ ",
      en: "visitor@portfolio:~$ ",
    },
    help: {
      es: [
        "comandos disponibles:",
        "  whoami      — quién soy",
        "  proyectos   — ver la lista de proyectos",
        "  cv          — abrir mi CV",
        "  contacto    — mis links de contacto",
        "  clear       — limpiar la terminal",
      ],
      en: [
        "available commands:",
        "  whoami      — who I am",
        "  projects    — view project list",
        "  cv          — open my resume",
        "  contact     — my contact links",
        "  clear       — clear terminal",
      ],
    },
    whoami: {
      es: [
        "Lautaro Jovanovics — estudiante de Ingeniería en Informática (FIUBA)",
        "enfocado en sistemas, redes y backend.",
      ],
      en: [
        "Lautaro Jovanovics — Computer Engineering student (FIUBA)",
        "focused on systems, networking and backend.",
      ],
    },
    proyectos: {
      es: "mostrando proyectos ↓",
      en: "showing projects ↓",
    },
    cv: {
      es: "abriendo CV...",
      en: "opening resume...",
    },
    contacto: {
      es: [
        "ljovanovics@fi.uba.ar",
        "github.com/lautiland",
        "linkedin.com/in/lautarojovanovics",
      ],
      en: [
        "ljovanovics@fi.uba.ar",
        "github.com/lautiland",
        "linkedin.com/in/lautarojovanovics",
      ],
    },
    sudo: {
      es: "permiso denegado: este visitante no está en el archivo sudoers.",
      en: "permission denied: this visitor is not in the sudoers file.",
    },
    cmdNotFound: {
      es: "comando no encontrado: ",
      en: "command not found: ",
    },
    cmdHint: {
      es: ' (probá "help")',
      en: ' (try "help")',
    },
  },

  // ── Header ────────────────────────────────────────────────
  header: {
    role: {
      es: "Estudiante de Ingeniería en Informática · Software Developer",
      en: "Computer Engineering Student · Software Developer",
    },
  },

  // ── Links ─────────────────────────────────────────────────
  links: {
    cv: { es: "CV público", en: "Resume" },
  },

  // ── Bio ───────────────────────────────────────────────────
  bio: {
    label: { es: "sobre_mi", en: "about_me" },
    p1: {
      es: "Tengo {age} años y curso cuarto año de Ingeniería en Informática en la Facultad de Ingeniería de la UBA. Soy de Salta, donde en la adolescencia tomé mis primeros cursos de programación, empecé con robótica y después pasé a programación en C#, un camino que terminó trayéndome a Buenos Aires para estudiar. Desde entonces fui consolidando un enfoque en algoritmos, arquitectura de software y desarrollo de sistemas, buscando siempre trasladar la teoría a soluciones eficientes y escalables.",
      en: "I'm {age} and in my fourth year of Computer Engineering at the School of Engineering, University of Buenos Aires. I'm from Salta, where during my teens I took my first programming courses — I started with robotics and then moved to C# — a path that eventually brought me to Buenos Aires to study. Since then I've been building a focus on algorithms, software architecture and systems development, always aiming to turn theory into efficient, scalable solutions.",
    },
    p2: {
      es: "Este portfolio reúne trabajos prácticos universitarios y proyectos personales donde aplico estructuras de datos, patrones de diseño y arquitectura de sistemas en lenguajes como Rust, Go y Python. La mayoría son desarrollos colaborativos con Git y documentación técnica detallada, y en ellos aprendí a trabajar en equipo bajo metodologías ágiles, algo en lo que me siento cómodo. Estoy buscando una pasantía o primer empleo que me permita seguir formándome académicamente mientras me desarrollo profesionalmente.",
      en: "This portfolio gathers university coursework and personal projects where I apply data structures, design patterns and systems architecture in languages like Rust, Go and Python. Most are collaborative developments with Git and detailed technical documentation, and through them I learned to work in teams under agile methodologies — something I'm comfortable with. I'm looking for an internship or first job that lets me keep growing academically while developing professionally.",
    },
  },

  // ── Secciones ─────────────────────────────────────────────
  sections: {
    projects: { es: "proyectos", en: "projects" },
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    update: { es: "última actualización · 2026", en: "last updated · 2026" },
  },

  // ── Tags de categoría ─────────────────────────────────────
  tags: {
    Individual: { es: "Individual", en: "Individual" },
    Grupal: { es: "Grupal", en: "Group" },
    Personal: { es: "Personal", en: "Personal" },
  },

  // ── Labels de proyectos ───────────────────────────────────
  projectLinks: {
    repositorio: { es: "Repositorio", en: "Repository" },
    irSitio: { es: "Ir al sitio", en: "Visit site" },
    ultimaVersion: { es: "Última versión", en: "Latest release" },
  },

  // ── Descripciones de proyectos ────────────────────────────
  projects: {
    smartprinter: {
      es: "Aplicación de escritorio para gestión y monitoreo de impresoras 3D del laboratorio de manufactura aditiva de la FIUBA, resolviendo la comunicación con los controladores vía ingeniería inversa sobre USB y una arquitectura síncrona multihilo para el control de estado en tiempo real, con persistencia en SQLite.",
      en: "Desktop application for managing and monitoring 3D printers at the FIUBA additive manufacturing lab, reverse-engineering USB controller communication and implementing a synchronous multithreaded architecture for real-time state control with SQLite persistence.",
    },
    "ufw-report": {
      es: "Herramienta TUI para reportes de UFW (Uncomplicated Firewall) que permite visualizar los paquetes rechazados por las reglas de firewall de manera interactiva desde la terminal.",
      en: "TUI tool for UFW (Uncomplicated Firewall) reports that allows visualizing rejected packets by firewall rules interactively from the terminal.",
    },
    rootcause: {
      es: "Plataforma de observabilidad full-stack para centralizar y analizar logs y métricas, con backend en Go dividido en app central y SDK; se implementó autenticación de usuarios, las notificaciones por correo y la lógica del SDK para que desarrolladores externos integren el logging en sus propios servicios.",
      en: "Full-stack observability platform for centralizing and analyzing logs and metrics, with a Go backend split into a central app and SDK; we implemented user authentication, email notifications and the SDK logic for external developers to integrate logging into their own services.",
    },
    minikv: {
      es: "Herramienta CLI para guardado de datos clave valor con persistencia en archivos, se agregó la funcionalidad de hacer snapshots del estado actual y un registro de movimientos por logging.",
      en: "CLI tool for storing key-value data with file persistence and a logging system, with snapshotting and movement logging functionality added.",
    },
    fileTransfer: {
      es: "Protocolo de transferencia de archivos confiable sobre redes con pérdida de paquetes, simulado con Mininet, resolviendo retransmisiones, control de flujo y manejo de errores para garantizar la integridad de los datos.",
      en: "Reliable file transfer protocol over lossy networks, simulated with Mininet, handling retransmissions, flow control and error management to guarantee data integrity.",
    },
    sdnOpenflow: {
      es: "Simulador de red definida por software (SDN) con el protocolo OpenFlow, implementando un controlador con enrutamiento dinámico y control de acceso para optimizar el rendimiento de la red simulada.",
      en: "Software-defined networking (SDN) simulator using the OpenFlow protocol, implementing a controller with dynamic routing and access control to optimize simulated network performance.",
    },
    scouteando: {
      es: "Blog sobre el movimiento scout con artículos organizados por categoría, migrado de HTML/CSS/JS a Angular; incorporé un sistema de caché para agilizar la carga de artículos.",
      en: "Blog about the scout movement with category-organized articles, migrated from HTML/CSS/JS to Angular; I added a caching system to speed up article loading.",
    },
    algoRoma: {
      es: "Juego de tablero por turnos con temática de gladiadores y casilleros con modificadores, desarrollado en Java/Maven con patrón MVC; aplicamos Test Driven Development y diseñamos un sistema de modificadores dinámico documentado con diagramas UML.",
      en: "Turn-based board game with a gladiator theme and modifier tiles, built in Java/Maven with MVC pattern; we applied Test Driven Development and designed a dynamic modifier system documented with UML diagrams.",
    },
  },
};

// ============================================================
// Detección de idioma + helpers
// ============================================================

function getLang() {
  return navigator.language.startsWith("en") ? "en" : "es";
}

function t(key) {
  var lang = getLang();
  var parts = key.split(".");
  var val = translations;
  for (var i = 0; i < parts.length; i++) {
    val = val[parts[i]];
    if (!val) return key;
  }
  var result = val[lang] ?? val.es ?? "";
  if (typeof result === "string") {
    result = result.replace("{age}", new Date().getFullYear() - 2003);
  }
  return result;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var val = t(el.dataset.i18n);
    el.textContent = Array.isArray(val) ? val.join("\n") : val;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var val = t(el.dataset.i18nHtml);
    el.innerHTML = Array.isArray(val) ? val.join("\n") : val;
  });
  var promptLabel = document.querySelector(".pf-term-prompt-label");
  if (promptLabel) promptLabel.textContent = t("terminal.promptLabel");
}

applyTranslations();
