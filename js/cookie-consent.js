/**
 * BrawlQR.com — Cookie Consent v3
 * ============================================================
 * GDPR (EU), UK GDPR, CCPA/CPRA (California), LGPD (Brazil),
 * PIPEDA (Canada), ePrivacy Directive compliant.
 *
 * v3 — adaugă categoria ADVERTISING (separată de Analytics):
 *   - Google Ads / YouTube Ads (remarketing + conversii)
 *   - Google AdSense (rezervat — momentan neutilizat)
 *   - Consent Mode v2: ad_storage / ad_user_data / ad_personalization
 *   - Conform schimbării Google din 15 iunie 2026: ad_storage din
 *     Consent Mode este SINGURA poartă către fluxul GA4 -> Google Ads.
 *     Google Signals nu mai controlează acest flux.
 *
 * Principii:
 *   - Nu cookie wall — accesul la site nu e condiționat
 *   - Accept și Reject butoane egale vizual (cerință CNIL/DE)
 *   - GA4 + Ads se încarcă NUMAI după consimțământ explicit, granular
 *   - Default = TOTUL denied (opt-in real)
 *   - Consimțământ stocat 6 luni în localStorage
 *   - Retragere oricând din footer
 *   - Vendor list explicit (GA4, Google Ads/YouTube, AdSense, ipapi.co)
 *   - ID unic per consimțământ (audit trail)
 *   - Cheie nouă (v3): consimțământul vechi (analytics-only) NU acoperă
 *     noul scop de advertising -> userii vechi sunt re-întrebați (GDPR).
 * ============================================================
 */
(function () {
  'use strict';

  var STORAGE_KEY  = 'brawlqr_consent_v3';
  var GA_ID        = 'G-3TDMPEV7PK';
  var PRIVACY_URL  = 'https://brawlqr.com/pages/privacy.html';
  var BANNER_ID    = 'bqr-cb';
  var EXPIRY_DAYS  = 180; // 6 luni

  /* ─── Helpers ─── */
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      // Verifică expirare
      if (obj.expires && Date.now() > obj.expires) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return obj;
    } catch (e) { return null; }
  }

  function saveConsent(analytics, advertising) {
    try {
      var obj = {
        id:          uid(),
        essential:   true,
        analytics:   !!analytics,
        advertising: !!advertising,
        timestamp:   new Date().toISOString(),
        expires:     Date.now() + EXPIRY_DAYS * 864e5,
        version:     '3.0',
        region:      'auto'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
      try {
        window.dispatchEvent(new CustomEvent('brawlqr:consent', { detail: obj }));
      } catch (e) {
        try { var ev = document.createEvent('Event'); ev.initEvent('brawlqr:consent', false, false); window.dispatchEvent(ev); } catch (_) {}
      }
      return obj;
    } catch (e) { return null; }
  }

  /* ─── GTM default consent (înainte de orice script GTM/gtag) ─── */
  function setDefaultConsent() {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
      window.gtag = function () { window.dataLayer.push(arguments); };
    }
    window.gtag('consent', 'default', {
      analytics_storage:      'denied',
      ad_storage:             'denied',
      ad_user_data:           'denied',
      ad_personalization:     'denied',
      functionality_storage:  'granted',
      personalization_storage:'denied',
      security_storage:       'granted',
      wait_for_update:        500
    });
  }

  /* ─── Aplică consimțământul (unic punct de control) ───
     analytics  -> analytics_storage
     advertising-> ad_storage + ad_user_data + ad_personalization
     (ad_storage e poarta GA4->Google Ads după 15 iunie 2026) */
  function applyConsent(analytics, advertising) {
    window.gtag('consent', 'update', {
      analytics_storage:      analytics   ? 'granted' : 'denied',
      ad_storage:             advertising ? 'granted' : 'denied',
      ad_user_data:           advertising ? 'granted' : 'denied',
      ad_personalization:     advertising ? 'granted' : 'denied',
      functionality_storage:  'granted',
      security_storage:       'granted',
      personalization_storage:'denied'
    });
    if (!analytics)   clearGACookies();
    if (!advertising) clearAdCookies();
  }

  /* Șterge cookie-urile GA4 când analytics e refuzat/retras */
  function clearGACookies() {
    ['_ga','_gid','_gat'].forEach(function(n) {
      document.cookie = n + '=;expires=Thu,01 Jan 1970 00:00:00 GMT;path=/;domain=.' + location.hostname;
    });
    var gaKey = '_ga_' + GA_ID.replace('G-','');
    document.cookie = gaKey + '=;expires=Thu,01 Jan 1970 00:00:00 GMT;path=/;domain=.' + location.hostname;
  }

  /* Șterge cookie-urile de advertising (Google Ads / conversion linker) */
  function clearAdCookies() {
    ['_gcl_au','_gcl_aw','_gcl_dc','_gcl_gb','_gcl_gf','_gcl_ha'].forEach(function(n) {
      document.cookie = n + '=;expires=Thu,01 Jan 1970 00:00:00 GMT;path=/;domain=.' + location.hostname;
      document.cookie = n + '=;expires=Thu,01 Jan 1970 00:00:00 GMT;path=/';
    });
  }

  /* ─── CSS inline ─── */
  function injectCSS() {
    if (document.getElementById('bqr-cb-css')) return;
    var s = document.createElement('style');
    s.id = 'bqr-cb-css';
    s.textContent =
      /* Banner */
      '#bqr-cb{position:fixed;bottom:0;left:0;right:0;z-index:2147483647;' +
        'background:linear-gradient(160deg,#12042a 0%,#1e0840 100%);' +
        'border-top:2px solid rgba(0,212,255,.35);' +
        'box-shadow:0 -6px 40px rgba(0,0,0,.55);' +
        'font-family:\'Nunito\',\'Segoe UI\',Arial,sans-serif;font-size:13px;font-weight:700;' +
        'color:#d4c8e8;' +
        'transform:translateY(110%);transition:transform .38s cubic-bezier(.4,0,.2,1),visibility 0s .38s;visibility:hidden;' +
        'max-height:85vh;overflow-y:auto;}' +
      '#bqr-cb.bqr-in{transform:translateY(0);visibility:visible;transition:transform .38s cubic-bezier(.4,0,.2,1),visibility 0s 0s;}' +
      '#bqr-cb.bqr-out{transform:translateY(110%);}' +

      /* Wrapper */
      '.bqr-wrap{max-width:1100px;margin:0 auto;padding:16px 20px;}' +

      /* Header */
      '.bqr-head{display:flex;align-items:center;gap:10px;margin-bottom:10px;}' +
      '.bqr-head svg{flex-shrink:0;}' +
      '.bqr-head strong{color:#fff;font-size:15px;}' +
      '.bqr-head span{font-size:11px;color:rgba(255,255,255,.5);' +
        'background:rgba(0,212,255,.1);border:1px solid rgba(0,212,255,.25);' +
        'border-radius:50px;padding:2px 8px;margin-left:auto;}' +

      /* Text */
      '.bqr-body{font-size:12.5px;line-height:1.6;color:rgba(255,255,255,.72);margin-bottom:14px;}' +
      '.bqr-body a{color:#00D4FF;text-decoration:underline;}' +
      '.bqr-body a:hover{color:#FFDD00;}' +

      /* Vendors */
      '.bqr-vendors{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;}' +
      '.bqr-vendor{font-size:11px;font-weight:700;' +
        'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);' +
        'border-radius:6px;padding:3px 9px;color:rgba(255,255,255,.6);}' +

      /* Butoane principale */
      '.bqr-btns{display:flex;gap:8px;flex-wrap:wrap;align-items:center;}' +
      '.bqr-btn{padding:10px 20px;border-radius:50px;border:none;' +
        'font-family:inherit;font-size:12px;font-weight:900;' +
        'cursor:pointer;transition:all .2s;text-transform:uppercase;letter-spacing:.4px;' +
        'white-space:nowrap;min-width:110px;text-align:center;}' +
      /* Accept și Reject la fel de proeminente (cerință CNIL/DE) */
      '.bqr-btn-accept{background:#00ff88;color:#0a001a;}' +
      '.bqr-btn-accept:hover{background:#00e07a;box-shadow:0 0 14px rgba(0,255,136,.35);}' +
      '.bqr-btn-reject{background:#ff4455;color:#fff;}' +
      '.bqr-btn-reject:hover{background:#e03040;box-shadow:0 0 14px rgba(255,68,85,.35);}' +
      '.bqr-btn-manage{background:transparent;color:#00D4FF;' +
        'border:1px solid rgba(0,212,255,.4);min-width:auto;padding:10px 16px;}' +
      '.bqr-btn-manage:hover{background:rgba(0,212,255,.1);}' +
      '.bqr-expiry{font-size:11px;color:rgba(255,255,255,.4);margin-left:auto;}' +

      /* Panou detalii */
      '.bqr-details{display:none;border-top:1px solid rgba(255,255,255,.1);' +
        'margin-top:16px;padding-top:16px;}' +
      '.bqr-details.bqr-open{display:block;}' +
      '.bqr-details h3{color:#FFDD00;font-size:13px;margin:0 0 12px;}' +

      /* Toggle rows */
      '.bqr-row{display:flex;justify-content:space-between;align-items:flex-start;' +
        'gap:16px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.07);}' +
      '.bqr-row:last-of-type{border-bottom:none;}' +
      '.bqr-row-info{flex:1;}' +
      '.bqr-row-info strong{color:#fff;font-size:12.5px;display:block;margin-bottom:3px;}' +
      '.bqr-row-info p{color:rgba(255,255,255,.55);margin:0;font-size:11px;line-height:1.5;}' +
      '.bqr-row-info .bqr-vendor-tag{' +
        'display:inline-block;margin-top:4px;font-size:10px;' +
        'background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);' +
        'color:rgba(0,212,255,.8);border-radius:4px;padding:1px 6px;}' +
      '.bqr-always{color:#00ff88;font-size:11px;font-weight:900;white-space:nowrap;' +
        'background:rgba(0,255,136,.08);border:1px solid rgba(0,255,136,.25);' +
        'border-radius:50px;padding:5px 12px;flex-shrink:0;}' +

      /* Toggle switch */
      '.bqr-toggle{position:relative;display:inline-block;width:44px;height:24px;flex-shrink:0;margin-top:2px;}' +
      '.bqr-toggle input{opacity:0;width:0;height:0;position:absolute;}' +
      '.bqr-slider{position:absolute;cursor:pointer;inset:0;' +
        'background:rgba(255,255,255,.15);border-radius:24px;transition:.25s;}' +
      '.bqr-slider:before{content:"";position:absolute;' +
        'width:18px;height:18px;left:3px;bottom:3px;' +
        'background:#fff;border-radius:50%;transition:.25s;}' +
      '.bqr-toggle input:checked+.bqr-slider{background:#00ff88;}' +
      '.bqr-toggle input:checked+.bqr-slider:before{transform:translateX(20px);}' +
      '.bqr-toggle input:focus-visible+.bqr-slider{outline:2px solid #00D4FF;outline-offset:2px;}' +

      /* Butoane save */
      '.bqr-save-btns{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;}' +

      /* Mobile */
      '@media(max-width:580px){' +
        '.bqr-btns{flex-direction:column;}' +
        '.bqr-btn{width:100%;}' +
        '.bqr-expiry{margin-left:0;width:100%;text-align:center;}' +
        '.bqr-row{flex-wrap:wrap;}' +
      '}';
    document.head.appendChild(s);
  }

  /* ─── Banner HTML ─── */
  function createBanner() {
    if (document.getElementById(BANNER_ID)) return;
    injectCSS();

    var el = document.createElement('div');
    el.id = BANNER_ID;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'false'); // nu e modal — nu blochează site-ul
    el.setAttribute('aria-label', 'Cookie and privacy settings');
    el.setAttribute('aria-live', 'polite');

    el.innerHTML =
      '<div class="bqr-wrap">' +

        /* Header */
        '<div class="bqr-head">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
            '<circle cx="12" cy="12" r="10" stroke="#00D4FF" stroke-width="1.5"/>' +
            '<path d="M12 8v4m0 4h.01" stroke="#00D4FF" stroke-width="2" stroke-linecap="round"/>' +
          '</svg>' +
          '<strong>Privacy &amp; Cookies</strong>' +
          '<span>GDPR &middot; CCPA &middot; UK GDPR</span>' +
        '</div>' +

        /* Body */
        '<div class="bqr-body">' +
          'BrawlQR.com uses <strong>analytics</strong> (Google Analytics 4) to understand how visitors use the site, and — ' +
          '<strong>only with your consent</strong> — <strong>advertising &amp; remarketing</strong> cookies ' +
          '(Google Ads, YouTube Ads and Google AdSense) to measure and show relevant ads. ' +
          'Essential cookies store your language preference only. ' +
          'You can accept all, reject all, or choose per category below. ' +
          '<a href="' + PRIVACY_URL + '" target="_blank" rel="noopener noreferrer">Privacy Policy</a> &mdash; ' +
          'You can change your preferences at any time via Cookie Settings in the footer.' +
        '</div>' +

        /* Vendors */
        '<div class="bqr-vendors">' +
          '<span class="bqr-vendor">&#128203; Essential: Language preference (localStorage)</span>' +
          '<span class="bqr-vendor">&#128200; Analytics: Google Analytics 4 (Google LLC)</span>' +
          '<span class="bqr-vendor">&#128226; Advertising: Google Ads / YouTube &amp; AdSense (Google)</span>' +
          '<span class="bqr-vendor">&#127760; Location detect: ipapi.co (language only)</span>' +
        '</div>' +

        /* Butoane — Accept și Reject la fel de proeminente */
        '<div class="bqr-btns">' +
          '<button id="bqr-accept" class="bqr-btn bqr-btn-accept" aria-label="Accept all cookies">&#10003; Accept All</button>' +
          '<button id="bqr-reject" class="bqr-btn bqr-btn-reject" aria-label="Reject non-essential cookies">&#10005; Reject All</button>' +
          '<button id="bqr-manage" class="bqr-btn bqr-btn-manage" aria-expanded="false" aria-controls="bqr-details-panel">&#9881; Manage</button>' +
          '<span class="bqr-expiry">Preferences saved for 6 months</span>' +
        '</div>' +

        /* Panou detalii */
        '<div class="bqr-details" id="bqr-details-panel" aria-hidden="true">' +
          '<h3>&#9881; Detailed Cookie Settings</h3>' +

          /* Essential */
          '<div class="bqr-row">' +
            '<div class="bqr-row-info">' +
              '<strong>Essential Cookies</strong>' +
              '<p>Language preference (<code>brawlqr_lang</code>) stored in localStorage. ' +
              'Required for the site to function correctly. Cannot be disabled.</p>' +
              '<span class="bqr-vendor-tag">localStorage &middot; Device only &middot; No server transfer</span>' +
            '</div>' +
            '<span class="bqr-always" aria-label="Always active">Always On</span>' +
          '</div>' +

          /* Analytics */
          '<div class="bqr-row">' +
            '<div class="bqr-row-info">' +
              '<strong>Analytics — Google Analytics 4</strong>' +
              '<p>Anonymous page visits, device type, approximate country. ' +
              'No personal data. ' +
              'Data processed by Google LLC (USA) under EU Standard Contractual Clauses. ' +
              'Cookies: <code>_ga</code>, <code>_ga_*</code> &mdash; duration: up to 2 years.</p>' +
              '<span class="bqr-vendor-tag">Google LLC &middot; USA &middot; SCC protected</span>' +
            '</div>' +
            '<label class="bqr-toggle" aria-label="Enable analytics cookies">' +
              '<input type="checkbox" id="bqr-analytics-chk">' +
              '<span class="bqr-slider"></span>' +
            '</label>' +
          '</div>' +

          /* Advertising */
          '<div class="bqr-row">' +
            '<div class="bqr-row-info">' +
              '<strong>Advertising &amp; Remarketing — Google Ads / YouTube / AdSense</strong>' +
              '<p>Used to measure ad performance and to show you relevant ads &mdash; including ' +
              '<strong>remarketing on YouTube and the Google network</strong> via Google Ads, and (if enabled) ' +
              'Google AdSense ads. Enables advertising cookies and identifiers (e.g. <code>_gcl_au</code>) ' +
              'and cross-device advertising audiences. Per Google\u2019s June 15, 2026 update, this is controlled ' +
              'solely by your <code>ad_storage</code> choice. Data processed by Google under EU Standard Contractual Clauses. ' +
              'No effect on your access to the site.</p>' +
              '<span class="bqr-vendor-tag">Google Ads &middot; YouTube &middot; AdSense &middot; SCC protected</span>' +
            '</div>' +
            '<label class="bqr-toggle" aria-label="Enable advertising and remarketing cookies">' +
              '<input type="checkbox" id="bqr-ads-chk">' +
              '<span class="bqr-slider"></span>' +
            '</label>' +
          '</div>' +

          /* Save buttons */
          '<div class="bqr-save-btns">' +
            '<button id="bqr-save" class="bqr-btn bqr-btn-accept">Save My Preferences</button>' +
            '<button id="bqr-cancel" class="bqr-btn bqr-btn-manage">Cancel</button>' +
          '</div>' +
        '</div>' + // bqr-details

      '</div>'; // bqr-wrap

    document.body.appendChild(el);

    /* Animație apariție */
    requestAnimationFrame(function () {
      el.classList.add('bqr-in');
    });

    /* ─ Event listeners ─ */
    document.getElementById('bqr-accept').addEventListener('click', function () {
      saveConsent(true, true); applyConsent(true, true); hide(true);
    });

    document.getElementById('bqr-reject').addEventListener('click', function () {
      saveConsent(false, false); applyConsent(false, false); hide(true);
    });

    document.getElementById('bqr-manage').addEventListener('click', function () {
      var panel = document.getElementById('bqr-details-panel');
      var open  = panel.classList.toggle('bqr-open');
      panel.setAttribute('aria-hidden', !open);
      this.setAttribute('aria-expanded', open);
      /* Pre-populează toggle-urile */
      syncToggles();
    });

    document.getElementById('bqr-save').addEventListener('click', function () {
      var aChk  = document.getElementById('bqr-analytics-chk');
      var adChk = document.getElementById('bqr-ads-chk');
      var analytics   = aChk  ? aChk.checked  : false;
      var advertising = adChk ? adChk.checked : false;
      saveConsent(analytics, advertising);
      applyConsent(analytics, advertising);
      hide(true);
    });

    document.getElementById('bqr-cancel').addEventListener('click', function () {
      var panel = document.getElementById('bqr-details-panel');
      panel.classList.remove('bqr-open');
      panel.setAttribute('aria-hidden', 'true');
    });

    /* Escape = Reject All */
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape' && document.getElementById(BANNER_ID)) {
        saveConsent(false, false); applyConsent(false, false); hide(true);
        document.removeEventListener('keydown', onKey);
      }
    });
  }

  /* Sincronizează checkbox-urile cu consimțământul curent */
  function syncToggles() {
    var current = getConsent();
    var aChk  = document.getElementById('bqr-analytics-chk');
    var adChk = document.getElementById('bqr-ads-chk');
    if (aChk)  aChk.checked  = current ? !!current.analytics   : false;
    if (adChk) adChk.checked = current ? !!current.advertising : false;
  }

  function hide(addFooter) {
    var el = document.getElementById(BANNER_ID);
    if (!el) return;
    el.classList.remove('bqr-in');
    el.classList.add('bqr-out');
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 420);
    if (addFooter) addFooterBtn();
  }

  /* ─── Buton Footer ─── */
  function addFooterBtn() {
    if (document.getElementById('bqr-footer-btn')) return;
    var nav = document.querySelector('.footer-links');
    if (!nav) return;
    var a = document.createElement('a');
    a.id   = 'bqr-footer-btn';
    a.href = '#';
    a.textContent = '🍪 Cookie Settings';
    a.setAttribute('aria-label', 'Manage cookie preferences');
    a.addEventListener('click', function (e) {
      e.preventDefault();
      if (document.getElementById(BANNER_ID)) return;
      createBanner();
      setTimeout(function () {
        var panel = document.getElementById('bqr-details-panel');
        var btn   = document.getElementById('bqr-manage');
        if (panel) { panel.classList.add('bqr-open'); panel.setAttribute('aria-hidden','false'); }
        if (btn)   btn.setAttribute('aria-expanded','true');
        syncToggles();
      }, 200);
    });
    nav.appendChild(a);
  }

  /* ─── INIT ─── */
  function init() {
    setDefaultConsent();
    var existing = getConsent();
    if (existing) {
      /* Consimțământ există — aplică și pune buton footer */
      applyConsent(!!existing.analytics, !!existing.advertising);
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addFooterBtn);
      } else {
        addFooterBtn();
      }
      return;
    }
    /* Prima vizită (sau consimțământ vechi v2 invalidat) — arată banner */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        setTimeout(createBanner, 1200);
      });
    } else {
      setTimeout(createBanner, 1200);
    }
  }

  /* API public */
  window.BrawlQRConsent = {
    getConsent:  getConsent,
    reset: function () {
      localStorage.removeItem(STORAGE_KEY);
      applyConsent(false, false);
      var el = document.getElementById(BANNER_ID);
      if (el && el.parentNode) el.parentNode.removeChild(el);
      var fb = document.getElementById('bqr-footer-btn');
      if (fb && fb.parentNode) fb.parentNode.removeChild(fb);
      setTimeout(createBanner, 100);
    }
  };

  init();
}());
