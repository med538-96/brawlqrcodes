/* ============================================================
   site-config.js — SURSA UNICĂ DE CONFIGURARE BrawlQR
   Singurul loc pe care îl editezi pentru: navigare, footer,
   lună/an, sezon. Se propagă pe TOATE paginile prin layout.js.
   Încărcat SYNC, ÎNAINTE de i18n-core.js.
   ============================================================ */
(function () {
  var MONTHS = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];
  var now = new Date();

  var C = {
    /* --- LUNĂ / AN (auto). Pune o valoare în override doar dacă
       vrei să forțezi manual; altfel se ia luna/anul curent. --- */
    monthOverride: null,   // ex: "June"
    yearOverride: null,    // ex: 2026

    /* --- SEZON: schimbi DOAR aici la fiecare sezon nou.
       brawl-stars-new-season.html este pagina evergreen de sezon (URL fix, fără număr); eticheta se ia de aici. --- */
    season: 51,

    /* --- NAVIGARE PRINCIPALĂ (link-uri ABSOLUTE → merg de la orice adâncime).
       i18n pus doar unde cheia există deja, ca să nu apară text gol. --- */
    nav: [
      { href: "/",                                      label: "QR Codes",  i18n: "nav_home"  },
      { href: "/pages/how-to.html",                     label: "How To",    i18n: "nav_guide" },
      { href: "/pages/hub/brawl-stars-codes.html",      label: "All Codes"                    },
      { href: "/pages/hub/brawl-stars-store.html",      label: "BS Store"                     },
      { href: "/pages/hub/brawl-talk.html",             label: "Brawl Talk"                   },
      { href: "/pages/about.html",                      label: "About",     i18n: "nav_about" }
    ],

    /* --- FOOTER (oglindă fidelă a footer-ului din index.html) --- */
    footer: [
      { href: "/pages/hub/brawl-stars-codes.html",      label: "All Codes" },
      { href: "/pages/hub/free-brawler-skins.html",     label: "Free Skins Hub", i18n: "hub_free_skins" },
      { href: "/pages/hub/free-gems.html",              label: "Free Gems Hub",  i18n: "hub_free_gems"  },
      { href: "/pages/how-to.html",                     label: "How To",         i18n: "footer_howto"   },
      { href: "/pages/about.html",                      label: "About",          i18n: "footer_about"   },
      { href: "/pages/privacy.html",                    label: "Privacy",        i18n: "footer_privacy" },
      { href: "/pages/cookies.html",                    label: "Cookies" },
      { href: "/pages/contact.html",                    label: "Contact",        i18n: "footer_contact" }
    ],

    disclaimer: "BrawlQR.com is not affiliated with Supercell. Brawl Stars &copy; Supercell. All codes are official and safe to use."
  };

  /* derivate lună/an/sezon (gata pentru Faza 1 — titluri auto) */
  C.monthName = C.monthOverride || MONTHS[now.getMonth()];
  C.year      = C.yearOverride  || now.getFullYear();
  C.monthYear = C.monthName + " " + C.year;
  C.seasonLabel = "Season " + C.season;

  window.SITE_CONFIG = C;
})();
