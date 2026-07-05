(function () {
  var lang = getLang();
  var term = translations.terminal;

  // ── Render projects ──────────────────────────────────────
  var log = document.getElementById("pfLog");
  projects.forEach(function (p, i) {
    var entry = document.createElement("div");
    entry.className = "pf-entry";
    entry.style.transitionDelay = i * 40 + "ms";

    var links = p.links
      .map(function (link) {
        return (
          '<a href="' +
          link.url +
          '" target="_blank" rel="noopener">' +
          t("projectLinks." + link.label) +
          "</a>"
        );
      })
      .join("");

    var desc = t("projects." + p.descKey);
    var tags = p.tags
      .map(function (tag) {
        var label = t(tag) || tag;
        return '<span class="pf-tag">' + label + "</span>";
      })
      .join("");

    entry.innerHTML =
      '<div class="pf-year">' +
      p.year +
      "</div>" +
      '<div class="pf-entry-main">' +
      '<div class="pf-entry-top">' +
      '<h3 class="pf-title">' +
      p.title +
      "</h3>" +
      '<div class="pf-tags">' +
      tags +
      "</div>" +
      "</div>" +
      '<p class="pf-desc">' +
      desc +
      "</p>" +
      '<div class="pf-entry-links">' +
      links +
      "</div>" +
      "</div>";
    log.appendChild(entry);
  });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("pf-visible");
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".pf-entry").forEach(function (el) {
    io.observe(el);
  });

  // ── Terminal ─────────────────────────────────────────────
  var output = document.getElementById("pfTermOutput");
  var input = document.getElementById("pfTermInput");

  function printLine(text, cls) {
    var line = document.createElement("div");
    line.className = "pf-term-line" + (cls ? " " + cls : "");
    line.textContent = text;
    output.appendChild(line);
  }

  function printLines(arr, cls) {
    arr.forEach(function (l) {
      printLine(l, cls);
    });
  }

  var commands = {
    help: function () {
      printLines(term.help[lang] || term.help.es);
    },
    whoami: function () {
      printLines(term.whoami[lang] || term.whoami.es);
    },
    proyectos: function () {
      printLine(term.proyectos[lang] || term.proyectos.es);
      document
        .querySelector(".pf-log")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    },
    ls: function () {
      commands.proyectos();
    },
    projects: function () {
      commands.proyectos();
    },
    cv: function () {
      printLine(term.cv[lang] || term.cv.es);
      window.open("{{CV_URL}}", "_blank");
    },
    resume: function () {
      commands.cv();
    },
    contacto: function () {
      printLines(term.contacto[lang] || term.contacto.es);
    },
    contact: function () {
      commands.contacto();
    },
    clear: function () {
      output.innerHTML = "";
    },
    sudo: function () {
      printLine(term.sudo[lang] || term.sudo.es, "pf-term-err");
    },
  };

  function updateSize() {
    input.size = Math.max(1, input.value.length + 1);
  }
  updateSize();

  var cursor = document.querySelector(".pf-term-cursor");
  var cursorTimer;
  function solidCursor() {
    cursor.classList.add("pf-cursor-solid");
    clearTimeout(cursorTimer);
    cursorTimer = setTimeout(function () {
      cursor.classList.remove("pf-cursor-solid");
    }, 250);
  }

  input.addEventListener("input", function () {
    updateSize();
    solidCursor();
  });
  input.addEventListener("keydown", function (e) {
    solidCursor();
    if (e.key !== "Enter") return;
    var raw = input.value.trim();
    if (raw.length === 0) return;
    var prompt = term.promptLabel[lang] || term.promptLabel.es;
    printLine(prompt + raw, "pf-term-cmd");
    var cmd = raw.toLowerCase().split(" ")[0];
    if (commands[cmd]) {
      commands[cmd]();
    } else {
      var notFound = term.cmdNotFound[lang] || term.cmdNotFound.es;
      var hint = term.cmdHint[lang] || term.cmdHint.es;
      printLine(notFound + cmd + hint, "pf-term-err");
    }
    input.value = "";
    updateSize();
    document.getElementById("pfTerminal").scrollTop =
      document.getElementById("pfTerminal").scrollHeight;
  });

  document.getElementById("pfTerminal").addEventListener("click", function () {
    input.focus();
  });
  input.focus();
})();
