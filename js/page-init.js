/**
 * BrawlQR.com — page-init.js
 * ============================================================
 * PANOU DE CONTROL AUTOMAT — citește din codes.js și actualizează
 * toate elementele paginii dedicate fără să modifici HTML-ul.
 *
 * Funcționează pe 2 tipuri de pagini:
 *
 * A) PAGINI DEDICATE (PAGE_CONFIG.codeId = "chaos-1x" etc.)
 *    → Status, expires, reward text, buton principal
 *    → Bannere din CODES[id].ads (poziții: top / mid / bottom)
 *      FALLBACK: dacă o poziție nu e pornită sau n-are slide-uri,
 *      se folosește automat HUB_ADS pe acea poziție.
 *      → pornești un banner pe TOT site-ul dintr-un singur loc.
 *      → un banner setat în CODES[] are întâietate (override local).
 *
 * B) HUB / STATICE (PAGE_CONFIG.codeId = null)
 *    → Bannere din HUB_ADS (poziții top / mid / bottom, în codes.js)
 *
 * ORDINEA SCRIPT-URILOR (obligatorie):
 *   <script src="js/i18n.js"></script>
 *   <script src="js/i18n-extra-steps.js"></script>
 *   <script src="js/i18n-new-langs.js"></script>
 *   <script src="js/i18n-pages.js"></script>
 *   <script src="js/codes.js"></script>
 *   <script>var PAGE_CONFIG = { codeId: "X" || null, ... };</script>
 *   <script src="js/page-init.js"></script>   ← DUPĂ codes.js
 *
 * HTML NECESAR pe pagini:
 *   <span data-dp-status>Active</span>
 *   <span data-dp-expires>May 29, 2026</span>
 *   <span data-dp-reward-status>Active</span>
 *   <a id="dpMainBtn" href="...">...</a>
 *   <div id="cimaloTop" class="cimalo-slot"></div>
 *   <div id="cimaloBottom" class="cimalo-slot"></div>
 *   (opțional, la mijlocul paginii:)
 *   <div id="cimaloMid" class="cimalo-slot"></div>
 * ============================================================
 */

(function() {
  'use strict';

  function init() {
    if (typeof PAGE_CONFIG === 'undefined') return;

    var t = (typeof window.getT === 'function') ? window.getT() : {};
    var PREFIX = PAGE_CONFIG.rootPrefix || '../../';

    /* ── A. PAGINI DEDICATE ── */
    if (PAGE_CONFIG.codeId && typeof CODES !== 'undefined') {
      var code = CODES.find(function(c) { return c.id === PAGE_CONFIG.codeId; });
      if (!code) return;

      _updateStatus(code, t);
      _updateExpires(code, t);
      _updateReward(code, t);
      _updateMainButton(code, t, PREFIX);
      _renderAds(_resolveAds(code.ads || null), PREFIX);
    }
    /* ── B. HUB / STATICE ── */
    else {
      if (typeof HUB_ADS !== 'undefined') {
        _renderAds(HUB_ADS, PREFIX);
      } else {
        _renderAds(null, PREFIX);
      }
    }
  }

  /* ════════════════════════════════════
     STATUS
  ════════════════════════════════════ */
  function _updateStatus(code, t) {
    var labels = {
      active:  t.dp_reward_active  || 'Active',
      expired: t.dp_reward_expired || 'Expired',
      soon:    t.dp_reward_soon    || 'Coming Soon'
    };
    var colors = { active: '#00ff88', expired: '#ff4444', soon: '#FFDD00' };
    var label = labels[code.status] || code.status;
    var color = colors[code.status] || '#fff';

    document.querySelectorAll('[data-dp-status]').forEach(function(el) {
      el.textContent = label;
      el.style.color = color;
    });
    document.querySelectorAll('[data-dp-reward-status]').forEach(function(el) {
      el.textContent = label;
      el.style.color = color;
    });

    if (code.status === 'expired') {
      var hero = document.querySelector('.dp-hero');
      if (hero) { hero.classList.add('dp-hero--expired'); hero.style.opacity = '0.75'; }
    }
  }

  /* ════════════════════════════════════
     EXPIRES
  ════════════════════════════════════ */
  function _updateExpires(code, t) {
    document.querySelectorAll('[data-dp-expires]').forEach(function(el) {
      el.textContent = code.expires ? code.expires : '—';
    });
  }

  /* ════════════════════════════════════
     REWARD TEXT
  ════════════════════════════════════ */
  function _updateReward(code, t) {
    document.querySelectorAll('[data-dp-reward]').forEach(function(el) {
      el.textContent = code.reward || '';
    });
  }

  /* ════════════════════════════════════
     BUTON PRINCIPAL
  ════════════════════════════════════ */
  function _updateMainButton(code, t, PREFIX) {
    var btn = document.getElementById('dpMainBtn');
    if (!btn) return;

    if (code.status === 'expired') { btn.style.display = 'none'; return; }

    var href, label, cls;

    if (code.locked && code.unlockUrl) {
      href  = code.unlockUrl;
      label = t.unlock_btn || '🔒 Unlock This Code';
      cls   = 'btn btn-yellow';
    } else if (code.directLink && code.link) {
      var url = code.link;
      if (url.indexOf('youtube.com') !== -1 || url.indexOf('youtu.be') !== -1) {
        label = t.watch_video_btn || 'Watch Video';
      } else if (url.indexOf('store.supercell.com') !== -1) {
        label = t.open_store || 'Open Supercell Store';
      } else {
        label = t.open_bs_btn || 'Open in Brawl Stars';
      }
      href = url;
      cls  = 'btn btn-cyan';
    } else if (code.status === 'soon') {
      btn.textContent = t.coming_soon_btn || '⏳ Coming Soon';
      btn.removeAttribute('href');
      btn.style.opacity = '0.6';
      btn.style.pointerEvents = 'none';
      btn.className = 'btn btn-cyan';
      return;
    } else {
      btn.style.display = 'none'; return;
    }

    btn.href      = href;
    btn.textContent = label;
    btn.className = cls;
    btn.style.display = '';
    btn.style.opacity = '';
    btn.style.pointerEvents = '';
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  }

  /* ════════════════════════════════════
     BANNERE PUBLICITARE — cu targetare device / geo / pagină
     ads = { top: {...}, mid: {...}, bottom: {...} }
     poziție = { enabled, interval, slides: [ slide, ... ] }
     slide   = { img, link, width, height, alt,
                 device: "all"|"desktop"|"tablet"|"mobile",
                 geo:   { countries, excludeCountries,
                          regions,   excludeRegions,
                          cities,    excludeCities },
                 pages: { include: [...], exclude: [...] },
                 blockVpn: true | "strict" }   // ascunde la VPN/datacenter

     POZIȚII:  top → id="cimaloTop"   ·  mid → id="cimaloMid" (opțional)
               bottom → id="cimaloBottom"

     DEVICE (sync):   breakpoints mobile ≤767 · tablet 768-1023 · desktop ≥1024
     PAGINĂ (sync):   după pathname; include/exclude, path exact sau folder "/.../"
     GEO (async):     din /geo (oraș+regiune+țară) cu fallback /cdn-cgi/trace (țară).
                      GDPR: se citește DOAR după consimțământ 'advertising'.
                      Fără consimțământ/date → slide-urile CU geo nu apar;
                      cele fără targetare geo apar normal.
     VPN (async):     blockVpn ascunde slide-ul la IP de datacenter/VPN (din ASN,
                      via Worker /geo). "strict" adaugă verificarea fusului orar.
                      Fără date geo → slide-ul blockVpn nu apare (anti-fraudă CPA).

     Un slide apare doar dacă device ȘI pagină ȘI geo se potrivesc TOATE.
     Funcționează atât cu CODES[].ads cât și cu HUB_ADS.
  ════════════════════════════════════ */

  var AD_SLOTS = ['cimaloTop', 'cimaloMid', 'cimaloBottom'];

  var _adTimers  = {};   /* timere slider, per container (evită orfani la re-init) */
  var _activeAds = {};   /* map id→config, sursa pentru re-paint (resize/geo/consent) */

  /* ── DEVICE ── */
  function _deviceBucket() {
    var w = window.innerWidth || document.documentElement.clientWidth || 1024;
    if (w <= 767)  return 'mobile';
    if (w <= 1023) return 'tablet';
    return 'desktop';
  }
  function _matchDevice(slide, bucket) {
    var d = slide.device || 'all';
    return d === 'all' || d === bucket;
  }

  /* ── PAGINĂ ── */
  function _currentPath() {
    var p = (window.location.pathname || '/').toLowerCase();
    return p.replace(/index\.html$/, '') || '/';
  }
  function _pathHit(list, path) {
    return list.some(function(u) {
      u = (u || '').toLowerCase().replace(/index\.html$/, '') || '/';
      if (u === path) return true;                       /* exact */
      if (u.charAt(u.length - 1) === '/' && path.indexOf(u) === 0) return true; /* folder */
      return false;
    });
  }
  function _matchPage(slide) {
    var p = slide.pages;
    if (!p) return true;
    var path = _currentPath();
    if (p.exclude && p.exclude.length && _pathHit(p.exclude, path)) return false;
    if (p.include && p.include.length && !_pathHit(p.include, path)) return false;
    return true;
  }

  /* ── GEO ──
     _geoState: 'idle' | 'loading' | 'ready'
     _geo: { country, region, regionCode, city } (majuscule la comparație) */
  var _geoState = 'idle';
  var _geo = null;
  var _geoFull = false;   /* true = date complete (oraș/ASN via Worker); false = doar țară */

  function _adConsentOK() {
    try {
      var c = (window.BrawlQRConsent && window.BrawlQRConsent.getConsent && window.BrawlQRConsent.getConsent());
      if (!c) c = JSON.parse(localStorage.getItem('brawlqr_consent_v3') || 'null');
      return !!(c && c.advertising);
    } catch (e) { return false; }
  }
  function _slideUsesGeo(s) {
    if (s.blockVpn) return true;               /* blocarea VPN cere datele geo */
    var g = s.geo; if (!g) return false;
    return !!(g.countries || g.excludeCountries || g.regions ||
              g.excludeRegions || g.cities || g.excludeCities);
  }
  function _anyGeoTargeting() {
    return AD_SLOTS.some(function(id) {
      var cfg = _activeAds[id];
      return cfg && (cfg.slides || []).some(_slideUsesGeo);
    });
  }
  function _up(s) { return (s == null ? '' : String(s)).trim().toUpperCase(); }
  function _inList(list, val) {
    return !!(list && list.length) &&
      list.some(function(x) { return _up(x) === val; });
  }
  function _matchGeo(slide) {
    var g = slide.geo;
    if (!g) return true;                       /* fără targetare geo → oriunde */
    if (!_geo) return false;                    /* geo cerut dar indisponibil */
    var country = _up(_geo.country),
        region  = _up(_geo.region),
        rcode   = _up(_geo.regionCode),
        city    = _up(_geo.city);
    if (!country && !region && !city) return false;

    /* excluderi întâi (ex. "toate țările MINUS RU") */
    if (_inList(g.excludeCountries, country)) return false;
    if (_inList(g.excludeCities, city))       return false;
    if (g.excludeRegions && g.excludeRegions.length &&
        (_inList(g.excludeRegions, region) || _inList(g.excludeRegions, rcode))) return false;

    /* includeri (dacă lista există, trebuie potrivit) */
    if (g.countries && g.countries.length && !_inList(g.countries, country)) return false;
    if (g.cities    && g.cities.length    && !_inList(g.cities, city))       return false;
    if (g.regions   && g.regions.length &&
        !(_inList(g.regions, region) || _inList(g.regions, rcode))) return false;

    return true;
  }

  /* ── VPN / PROXY ──
     _geo.hosting = true → IP de datacenter/VPN (semnal principal, din ASN).
     Timezone mismatch = semnal secundar, doar în mod "strict". */
  function _tzMismatch() {
    try {
      if (!_geo || !_geo.timezone) return false;
      var dev = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return !!dev && dev !== _geo.timezone;
    } catch (e) { return false; }
  }
  function _isVpn(strict) {
    if (!_geo) return false;
    if (_geo.hosting) return true;            /* datacenter/VPN ASN */
    if (strict && _tzMismatch()) return true; /* fus orar ≠ IP */
    return false;
  }
  /* blockVpn: true  → ascunde slide-ul dacă IP-ul e datacenter/VPN
     blockVpn: "strict" → în plus, dacă fusul orar al device-ului ≠ al IP-ului
     Fără date geo (fără consimțământ/Worker) nu putem verifica → ascundem
     oferta (mai bine să nu arătăm decât să trimitem trafic invalid la CPA). */
  function _matchVpn(slide) {
    if (!slide.blockVpn) return true;
    if (!_geo) return false;
    return !_isVpn(slide.blockVpn === 'strict');
  }

  /* Încarcă geo o singură dată.
     OPȚIUNEA C:
       • FĂRĂ consimțământ 'advertising' → DOAR țara, via /cdn-cgi/trace
         (coarse, same-origin, fără terți, fără oraș/ASN). Permite excluderea
         pe ȚARĂ pentru toți vizitatorii (inclusiv cei care resping cookie-urile).
       • CU consimțământ → date complete via Worker /geo (oraș+regiune+ASN+timezone).
     ⚠ Geo pe țară fără consimțământ = zonă gri GDPR (IP e dată personală).
       E o alegere de risc asumată, nu o limitare tehnică. Orașul + VPN rămân
       gated pe consimțământ fiindcă sunt mai granulare/sensibile. */
  function _loadGeo(done) {
    if (_geoState === 'ready') { done(); return; }
    if (_geoState === 'loading') { return; }
    _geoState = 'loading';
    var hasConsent = _adConsentOK();

    /* fetch cu timeout (4s) — pe rețele mobile slabe, un fetch blocat nu
       mai lasă bannerul ascuns la nesfârșit; la timeout tratăm ca eșec. */
    function _timedFetch(url) {
      return Promise.race([
        fetch(url, { cache: 'no-store' }),
        new Promise(function(_, rej) { setTimeout(function() { rej(new Error('timeout')); }, 4000); })
      ]);
    }

    function finish(obj, full) {
      _geo = obj || null;
      _geoFull = !!full;             /* true = avem oraș/ASN (Worker, cu consimțământ) */
      _geoState = 'ready';
      try { window.__BQ_GEO = _geo; } catch (e) {}
      done();
    }
    function fromTrace() {           /* doar țara (loc=XX), zero-setup, same-origin */
      _timedFetch('/cdn-cgi/trace')
        .then(function(r) { return r.text(); })
        .then(function(t) {
          var m = t.match(/loc=([A-Z]{2})/);
          finish(m ? { country: m[1] } : null, false);
        })
        .catch(function() { finish(null, false); });
    }

    if (hasConsent) {
      _timedFetch('/geo')
        .then(function(r) { if (!r.ok) throw 0; return r.json(); })
        .then(function(j) { finish(j, true); })
        .catch(fromTrace);
    } else {
      fromTrace();                   /* fără consimțământ: doar țara */
    }
  }

  /* ── Usable / resolve (fallback HUB_ADS pe fiecare poziție) ── */
  function _isUsable(side) {
    return !!(side && side.enabled && side.slides && side.slides.length > 0);
  }
  function _resolveAds(ownAds) {
    var hub = (typeof HUB_ADS !== 'undefined') ? HUB_ADS : null;
    if (!ownAds) return hub;
    function pick(pos) {
      return _isUsable(ownAds[pos]) ? ownAds[pos] : (hub ? hub[pos] : null);
    }
    return { top: pick('top'), mid: pick('mid'), bottom: pick('bottom') };
  }

  /* ── Punctul de intrare: memorează configul, pictează, apoi (dacă e cazul)
        încarcă geo și repictează. Cârligele resize/consimțământ se pun o dată. ── */
  function _renderAds(ads, PREFIX) {
    _normalizeSlots();                 /* paginile cu nume vechi (adBanner*) → cimalo* automat */
    _activeAds = ads
      ? { cimaloTop: ads.top, cimaloMid: ads.mid, cimaloBottom: ads.bottom }
      : {};
    if (_isUsable(_activeAds.cimaloMid)) _ensureMidSlot();
    _paintAll();
    if (_geoState !== 'ready' && _anyGeoTargeting()) {
      _loadGeo(_paintAll);
    }
    _hookResize();
    _hookConsent();
  }

  /* Compatibilitate: paginile care încă au sloturile vechi (id="adBannerTop"
     class="ad-banner-slot") sunt redenumite în cimalo* direct în DOM, la
     încărcare. Astfel bannerul merge pe TOATE paginile fără să editezi HTML-ul,
     iar numele „ad" dispare din DOM (nu-l mai prind blockerele). Paginile deja
     redenumite (ex. index.html) sunt lăsate în pace. */
  function _renameSlot(newId, oldId) {
    if (document.getElementById(newId)) return;   /* deja e cimalo → nimic */
    var el = document.getElementById(oldId);
    if (!el) return;                               /* nu există → ok */
    el.id = newId;
    var cls = el.className || '';
    if (cls.indexOf('ad-banner-slot') !== -1) cls = cls.replace('ad-banner-slot', 'cimalo-slot');
    if (cls.indexOf('cimalo-slot') === -1) cls = (cls + ' cimalo-slot').replace(/^\s+/, '');
    el.className = cls;
  }
  function _normalizeSlots() {
    _renameSlot('cimaloTop',    'adBannerTop');
    _renameSlot('cimaloMid',    'adBannerMid');
    _renameSlot('cimaloBottom', 'adBannerBottom');
  }

  /* Slotul MID nu există în HTML. Dacă poziția mid e activă, îl injectăm
     automat — după primul grid de conținut (distribuie frumos între top și
     bottom), cu fallback-uri robuste. Nu editează nicio pagină HTML. */
  function _ensureMidSlot() {
    if (document.getElementById('cimaloMid')) return;
    var mid = document.createElement('div');
    mid.id = 'cimaloMid';
    mid.className = 'cimalo-slot';

    var afterGrid = document.querySelector('.dp-cards-grid, #qrGrid, .all-pages-grid');
    if (afterGrid && afterGrid.parentNode) {
      afterGrid.parentNode.insertBefore(mid, afterGrid.nextSibling);
      return;
    }
    var bottom = document.getElementById('cimaloBottom');
    if (bottom && bottom.parentNode) {
      bottom.parentNode.insertBefore(mid, bottom);
      return;
    }
    var footer = document.querySelector('.site-footer');
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(mid, footer);
      return;
    }
    document.body.appendChild(mid);
  }

  function _paintAll() {
    var bucket = _deviceBucket();
    AD_SLOTS.forEach(function(id) {
      var cfg = _activeAds[id];
      if (_isUsable(cfg)) _buildAdBanner(id, cfg, bucket);
      else                _hideAdBanner(id);
    });
  }

  function _hideAdBanner(containerId) {
    if (_adTimers[containerId]) {
      clearInterval(_adTimers[containerId]);
      delete _adTimers[containerId];
    }
    var container = document.getElementById(containerId);
    if (!container) return;
    container.classList.remove('cimalo-slot--on');
    container.innerHTML = '';
  }

  function _buildAdBanner(containerId, adConfig, bucket) {
    var container = document.getElementById(containerId);
    if (!container) return;            /* slotul mid poate lipsi din pagină → ok */

    var interval = adConfig.interval || 5000;
    var eager    = (containerId === 'cimaloTop'); /* top e above-the-fold */

    /* Filtrare combinată: device ȘI pagină ȘI VPN ȘI geo */
    var slides = (adConfig.slides || []).filter(function(s) {
      return _matchDevice(s, bucket) && _matchPage(s) && _matchVpn(s) && _matchGeo(s);
    });

    /* Niciun slide eligibil aici (device/geo/pagină) → ascunde slotul */
    if (slides.length === 0) { _hideAdBanner(containerId); return; }

    if (_adTimers[containerId]) {       /* oprește timerul vechi ÎNAINTE de rebuild */
      clearInterval(_adTimers[containerId]);
      delete _adTimers[containerId];
    }

    /* Rezervă cutia din dimensiunile primului slide eligibil → fără CLS */
    var firstW = slides[0].width  || 728;
    var firstH = slides[0].height || 90;
    container.style.setProperty('--cml-w', firstW + 'px');
    container.style.setProperty('--cml-ratio', firstW + ' / ' + firstH);

    container.classList.add('cimalo-slot--on');
    container.innerHTML = '';

    var wrap = document.createElement('div');
    wrap.className = 'cimalo-wrap';
    wrap.setAttribute('aria-label', 'Featured');

    slides.forEach(function(slide, idx) {
      var a = document.createElement('a');
      a.href   = slide.link || '#';
      a.target = '_blank';
      a.rel    = 'noopener noreferrer nofollow';
      a.className = 'cimalo-item' + (idx === 0 ? ' cimalo-item--active' : '');
      a.setAttribute('aria-label', 'Featured link');

      var img = document.createElement('img');
      img.src    = slide.img || '';
      img.alt    = slide.alt || 'Featured';   /* alt din config, accesibil */
      img.width  = slide.width  || 728;
      img.height = slide.height || 90;
      img.style.cssText = 'width:100%;height:100%;object-fit:contain;display:block;margin:0 auto;border-radius:8px;';
      img.setAttribute('loading', (eager && idx === 0) ? 'eager' : 'lazy');
      if (eager && idx === 0) img.setAttribute('fetchpriority', 'high');
      /* Dacă imaginea eșuează (blocată/lipsă), ascunde slotul — fără cutie goală. */
      img.onerror = function() {
        try { _hideAdBanner(containerId); } catch (e) {}
      };

      a.appendChild(img);
      wrap.appendChild(a);
    });

    container.appendChild(wrap);

    if (slides.length > 1) {
      var current = 0;
      _adTimers[containerId] = setInterval(function() {
        if (!wrap.isConnected) {        /* slot reconstruit/detașat → auto-stop */
          clearInterval(_adTimers[containerId]);
          delete _adTimers[containerId];
          return;
        }
        var sl = wrap.querySelectorAll('.cimalo-item');
        if (!sl.length) return;
        sl[current].classList.remove('cimalo-item--active');
        current = (current + 1) % sl.length;
        sl[current].classList.add('cimalo-item--active');
      }, interval);
    }
  }

  /* Resize (debounced): repictează DOAR la schimbarea categoriei de device. */
  var _resizeHooked = false;
  var _lastBucket   = null;
  function _hookResize() {
    if (_resizeHooked) return;
    _resizeHooked = true;
    _lastBucket = _deviceBucket();
    var timer;
    window.addEventListener('resize', function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        var b = _deviceBucket();
        if (b === _lastBucket) return;
        _lastBucket = b;
        _paintAll();
      }, 200);
    });
  }

  /* La acordarea consimțământului 'advertising': facem UPGRADE de la
     țară-only (trace) la date complete (Worker: oraș+VPN) și repictăm. */
  var _consentHooked = false;
  function _hookConsent() {
    if (_consentHooked) return;
    _consentHooked = true;
    window.addEventListener('brawlqr:consent', function() {
      /* Dacă acum avem consimțământ dar încă nu avem date complete → reîncarcă. */
      if (_adConsentOK() && !_geoFull) { _geoState = 'idle'; }
      if (_anyGeoTargeting()) _loadGeo(_paintAll);
      else _paintAll();
    });
  }

  /* ── Execute ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ── Re-run on language change ── */
  var _hooked = false;
  var _check = setInterval(function() {
    if (typeof window.applyLang === 'function' && !_hooked) {
      var _orig = window.applyLang;
      window.applyLang = function(lang) {
        _orig(lang);
        setTimeout(init, 50);
      };
      _hooked = true;
      clearInterval(_check);
    }
  }, 200);

})();
