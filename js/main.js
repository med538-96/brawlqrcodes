/**
 * BrawlQR.com — Main UI v2
 *
 * FIXES v2:
 * - ARIA: lang-option buttons get role="option" + aria-selected
 * - lang-dropdown gets aria-label
 * - injectSchemaItemList: static (moved to <head> in HTML where possible)
 * - lastUpdated uses en-GB locale
 * - requestAnimationFrame on renderGrid for better INP
 */
document.addEventListener("DOMContentLoaded", function() {
  buildLangDropdown();
  detectLangByIP();

  /* ── LANG SWITCHER ── */
  var langBtn = document.getElementById("langBtn");
  var langDd  = document.getElementById("langDropdown");
  if (langBtn && langDd) {
    /* ARIA fix: add role + label */
    langDd.setAttribute("aria-label", "Select language");

    langBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      var isOpen = langDd.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", isOpen);
    });
    document.addEventListener("click", function() {
      langDd.classList.remove("open");
      if (langBtn) langBtn.setAttribute("aria-expanded", "false");
    });
    langDd.addEventListener("click", function(e) { e.stopPropagation(); });
  }

  /* ── HAMBURGER ── */
  var hb = document.getElementById("hamburger");
  var mn = document.getElementById("mobileNav");
  if (hb && mn) {
    hb.addEventListener("click", function() {
      var isOpen = mn.classList.toggle("open");
      hb.setAttribute("aria-expanded", isOpen);
    });
  }

  /* ── LAST UPDATED ── */
  var updEl = document.getElementById("lastUpdated");
  if (updEl) {
    updEl.textContent = new Date().toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric"
    });
  }

  /* ── RENDER GRID ── */
  if (document.getElementById("qrGrid") && typeof renderGrid === "function") {
    /* requestAnimationFrame → non-blocking, improves INP */
    requestAnimationFrame(function() {
      renderGrid("all");
    });
  }

  /* ── FILTER BUTTONS ── */
  document.querySelectorAll(".filter-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".filter-btn").forEach(function(b) {
        b.classList.remove("active");
        b.removeAttribute("aria-pressed");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      /* requestAnimationFrame → non-blocking render */
      requestAnimationFrame(function() {
        renderGrid(btn.dataset.filter);
      });
    });
  });

  /* ── MODAL ── */
  var backdrop = document.getElementById("modalBackdrop");
  var closeBtn = document.getElementById("modalClose");
  if (backdrop) backdrop.addEventListener("click", function(e) {
    if (e.target === backdrop) window.closeModalFn();
  });
  if (closeBtn) closeBtn.addEventListener("click", function() {
    window.closeModalFn();
  });
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") window.closeModalFn();
  });

  /* ── SCHEMA ITEMLIST ── */
  injectSchemaItemList();

  /* ── ARIA: add role=option to lang-option buttons ── */
  /* Called after buildLangDropdown() populates the dropdown */
  fixLangDropdownAria();
});

/* ── ARIA fix pentru lang dropdown ──
   buildLangDropdown() creează butoane cu class="lang-option"
   dar fără role="option" — necesar pentru [role="listbox"]
*/
function fixLangDropdownAria() {
  var dropdown = document.getElementById("langDropdown");
  if (!dropdown) return;

  /* Setează role pe dropdown */
  dropdown.setAttribute("role", "listbox");
  dropdown.setAttribute("aria-label", "Select language");

  /* Setează role=option pe fiecare buton */
  var options = dropdown.querySelectorAll(".lang-option");
  options.forEach(function(opt) {
    opt.setAttribute("role", "option");
    /* Marchează limba activă */
    var isActive = opt.classList.contains("active");
    opt.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  /* La schimbarea limbii, actualizează aria-selected */
  dropdown.addEventListener("click", function() {
    setTimeout(function() {
      var opts = dropdown.querySelectorAll(".lang-option");
      opts.forEach(function(o) {
        o.setAttribute("aria-selected", o.classList.contains("active") ? "true" : "false");
      });
    }, 50);
  });
}

/* ── SCHEMA ITEMLIST ──
   Active + soon codes first (sorted by priority), then expired with dedicated pages
   Gives Google full coverage of all dedicated pages
*/

/* ── HREFLANG ──
   Eliminat: semnalele de limbă sunt STATICE în <head> (Regula #3/#6).
   injectHreflang() emitea 41 hreflang spre aceeași URL = invalid. NU reintroduce.
*/

function injectSchemaItemList() {
  if (typeof CODES === "undefined") return;
  var BASE = "https://brawlqr.com/";

  var active = CODES
    .filter(function(c) { return c.status === "active" || c.status === "soon"; })
    .sort(function(a, b) { return (a.priority||9999) - (b.priority||9999); });

  var expired = CODES
    .filter(function(c) {
      return c.status === "expired" && c.dedicatedPage && c.pageUrl && c.pageUrl !== "null";
    })
    .sort(function(a, b) { return (a.priority||9999) - (b.priority||9999); });

  var sorted = active.concat(expired);

  var items = sorted.map(function(code, idx) {
    var url = (code.dedicatedPage && code.pageUrl && code.pageUrl !== "null")
      ? BASE + code.pageUrl.replace(/^\//, "")
      : BASE + "?filter=" + encodeURIComponent(code.type);
    return {
      "@type": "ListItem",
      "position": idx + 1,
      "name": code.name + " — Brawl Stars",
      "url": url,
      "description": code.reward +
        (code.expires ? " · Expires " + code.expires : "") +
        " · " + code.status
    };
  });

  var schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Brawl Stars QR Codes — Active & Archive",
      "url": BASE,
      "numberOfItems": items.length,
      "itemListElement": items
    }
  ];

  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
