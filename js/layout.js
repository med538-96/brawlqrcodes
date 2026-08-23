/* ============================================================
   layout.js — MOTOR DE LAYOUT BrawlQR
   Injectează header + footer din site-config.js în sloturile:
     <div id="site-header"></div>   <div id="site-footer"></div>
   Rulează SYNC, imediat (sloturile există deja la finalul body).
   Trebuie încărcat DUPĂ site-config.js și ÎNAINTE de i18n-core.js,
   ca i18n să traducă header-ul, iar page-template.js/main.js să-l cableze.
   ============================================================ */
(function () {
  var C = window.SITE_CONFIG;
  if (!C) { console.warn("[layout] site-config.js lipsește"); return; }

  function navLinks(list, activePath) {
    return (list || []).map(function (item) {
      var active = (item.href === activePath) ? " active" : "";
      var i18n = item.i18n ? ' data-i18n="' + item.i18n + '"' : "";
      return '<a href="' + item.href + '" class="nav-link' + active + '"' + i18n + '>' + item.label + '</a>';
    }).join("");
  }

  function buildHeader(activePath) {
    return '<header class="site-header"><div class="header-inner">'
      + '<a href="/" class="logo" aria-label="BrawlQR Home">'
      + '<span class="logo-brawl">BRAWL</span><span class="logo-qr">QR</span><span class="logo-gg">.COM</span></a>'
      + '<nav class="main-nav">' + navLinks(C.nav, activePath) + '</nav>'
      + '<div class="header-right"><div class="lang-switcher">'
      + '<button class="lang-btn" id="langBtn" aria-label="Select language" aria-expanded="false">'
      + '<span class="flag" id="currentFlag">&#127468;&#127463;</span>'
      + '<span class="lang-name" id="currentLang">EN</span>'
      + '<svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">'
      + '<path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>'
      + '</button><div class="lang-dropdown" id="langDropdown" role="listbox"></div></div>'
      + '<button class="hamburger" id="hamburger" aria-label="Toggle menu">'
      + '<span></span><span></span><span></span></button>'
      + '</div></div>'
      + '<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">'
      + navLinks(C.nav, activePath) + '</nav>'
      + '</header>';
  }

  function buildFooter() {
    var links = (C.footer || []).map(function (item) {
      var i18n = item.i18n ? ' data-i18n="' + item.i18n + '"' : "";
      return '<a href="' + item.href + '"' + i18n + '>' + item.label + '</a>';
    }).join("");
    return '<footer class="site-footer"><div class="container footer-inner">'
      + '<div class="footer-logo">BRAWL<span>QR</span>.COM</div>'
      + '<p class="footer-disclaimer" data-i18n="footer_disclaimer">' + C.disclaimer + '</p>'
      + '<nav class="footer-links" aria-label="Footer links">' + links + '</nav>'
      + '</div></footer>';
  }

  /* normalizează path-ul curent pentru marcarea linkului activ */
  var path = location.pathname;
  if (path.length > 1 && path.charAt(path.length - 1) === "/") path = path.slice(0, -1);
  if (path === "" || path === "/index.html") path = "/";

  /* Header/footer sunt acum STATICE în HTML (linkuri crawlabile pentru SEO).
     Injectarea de mai jos e DOAR fallback dacă o pagină mai are sloturi goale. */
  var h = document.getElementById("site-header");
  if (h) h.outerHTML = buildHeader(path);

  var f = document.getElementById("site-footer");
  if (f) f.outerHTML = buildFooter();

  /* marchează linkul activ pe nav (static sau injectat) */
  var navLinks = document.querySelectorAll(".main-nav a, .mobile-nav a");
  for (var k = 0; k < navLinks.length; k++) {
    if (navLinks[k].getAttribute("href") === path) navLinks[k].classList.add("active");
  }

  /* ── AUTO LUNĂ/AN ──────────────────────────────────────────
     Rulează DOAR pe paginile cu <body data-auto-month> (pagini „de
     actualitate", ex. hub-ul de coduri). Înlocuiește "Lună An" cu
     luna curentă în titlu, meta, schema și text vizibil.
     Paginile istorice (ex. Sezonul 50) NU primesc atributul. */
  function applyAutoMonth() {
    var body = document.body;
    if (!body || !body.hasAttribute("data-auto-month")) return;
    var target = C.monthYear;
    var pattern = "\\b(January|February|March|April|May|June|July|August|" +
                  "September|October|November|December)\\s+\\d{4}\\b";

    if (document.title) document.title = document.title.replace(new RegExp(pattern, "g"), target);

    var metas = document.querySelectorAll(
      'meta[name="description"],meta[name="keywords"],meta[property="og:title"],' +
      'meta[property="og:description"],meta[name="twitter:title"],meta[name="twitter:description"]');
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].content) metas[i].content = metas[i].content.replace(new RegExp(pattern, "g"), target);
    }

    var lds = document.querySelectorAll('script[type="application/ld+json"]');
    for (var j = 0; j < lds.length; j++) {
      lds[j].textContent = lds[j].textContent.replace(new RegExp(pattern, "g"), target);
    }

    var reTest = new RegExp(pattern);
    var walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null);
    var node, hits = [];
    while ((node = walker.nextNode())) {
      if (reTest.test(node.nodeValue)) hits.push(node);
    }
    hits.forEach(function (n) {
      n.nodeValue = n.nodeValue.replace(new RegExp(pattern, "g"), target);
    });
  }
  applyAutoMonth();

  /* ── AUTO AN ────────────────────────────────────────────────
     Rulează DOAR pe paginile cu <body data-auto-year> (conținut
     „peren" anual, ex. Creator Codes). Actualizează anul în titlu
     + meta (unde NU există date) și doar în elementele marcate
     explicit cu clasa .js-year din corp. NU atinge JSON-LD
     (datePublished/dateModified rămân corecte). */
  function applyAutoYear() {
    var body = document.body;
    if (!body || !body.hasAttribute("data-auto-year")) return;
    var year = String(new Date().getFullYear());
    var pattern = "\\b20\\d{2}\\b";

    if (document.title) document.title = document.title.replace(new RegExp(pattern, "g"), year);

    var metas = document.querySelectorAll(
      'meta[name="description"],meta[name="keywords"],meta[property="og:title"],' +
      'meta[property="og:description"],meta[name="twitter:title"],meta[name="twitter:description"]');
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].content) metas[i].content = metas[i].content.replace(new RegExp(pattern, "g"), year);
    }

    var spans = document.querySelectorAll(".js-year");
    for (var k = 0; k < spans.length; k++) { spans[k].textContent = year; }
  }
  applyAutoYear();

  /* expune pentru depanare / reutilizare */
  window.BrawlLayout = { buildHeader: buildHeader, buildFooter: buildFooter };
})();
