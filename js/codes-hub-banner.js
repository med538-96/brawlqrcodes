/**
 * BrawlQR.com — Codes Hub Banner
 * Add this script to all dedicated pages BEFORE </body>
 * It injects a subtle bottom banner linking to the codes hub page.
 *
 * Usage on pages at depth ../../ (e.g. pages/codes/, pages/boxes/):
 *   <script src="../../js/codes-hub-banner.js"><\/script>
 *
 * Usage on pages at depth ../ (e.g. pages/hub/):
 *   <script src="../js/codes-hub-banner.js"><\/script>
 *
 * Usage on index.html (root):
 *   <script src="js/codes-hub-banner.js"><\/script>
 *
 * The banner auto-detects its prefix from PAGE_CONFIG.rootPrefix
 * or falls back to ../../
 */
(function() {
  // Don't show on the codes hub page itself
  if (window.location.pathname.indexOf('brawl-stars-codes') !== -1) return;

  var PREFIX = (typeof PAGE_CONFIG !== 'undefined' && PAGE_CONFIG.rootPrefix)
    ? PAGE_CONFIG.rootPrefix
    : '../../';

  var CODES_HUB_URL = PREFIX + 'pages/hub/brawl-stars-codes.html';

  // Luna/anul: din SITE_CONFIG (sursa unică). Dacă nu s-a încărcat încă,
  // fallback derivat din new Date() — niciodată o lună hardcodată care expiră.
  var _now = new Date();
  var _fallbackMonth = _now.toLocaleString('en-US', { month: 'long' }) + ' ' + _now.getFullYear();
  var monthYear = (window.SITE_CONFIG && window.SITE_CONFIG.monthYear) || _fallbackMonth;

  // Count active codes for the badge
  var activeCount = 0;
  if (typeof CODES !== 'undefined') {
    CODES.forEach(function(c) {
      if (c.status === 'active') activeCount++;
    });
  }

  var banner = document.createElement('div');
  banner.id = 'brawlqr-codes-hub-banner';
  banner.innerHTML =
    '<a href="' + CODES_HUB_URL + '" style="' +
      'display:flex;align-items:center;justify-content:center;gap:10px;' +
      'background:linear-gradient(135deg,rgba(26,5,51,0.97),rgba(42,13,78,0.97));' +
      'border-top:2px solid rgba(255,221,0,0.4);' +
      'padding:10px 20px;text-decoration:none;' +
      'font-family:\'Nunito\',sans-serif;font-size:13px;font-weight:900;' +
      'color:#b8a0d0;transition:background .2s;' +
    '">' +
    '<span style="font-size:18px;">&#127381;</span>' +
    '<span>' +
      '<span style="color:#FFDD00;">Brawl Stars Codes ' + monthYear + '</span>' +
      (activeCount > 0 ? ' &mdash; <span style="color:#00ff88;">' + activeCount + ' active</span>' : '') +
    '</span>' +
    '<span style="' +
      'background:rgba(0,212,255,0.15);border:1px solid rgba(0,212,255,0.4);' +
      'color:#00D4FF;font-size:10px;padding:3px 10px;border-radius:50px;white-space:nowrap;' +
    '">All Codes &#8594;</span>' +
    '</a>';

  // Insert before footer
  var footer = document.querySelector('.site-footer');
  if (footer) {
    footer.parentNode.insertBefore(banner, footer);
  } else {
    document.body.appendChild(banner);
  }
})();
