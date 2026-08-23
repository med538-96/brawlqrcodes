/**
 * ============================================================
 *  QR Codes for BRAWL STARS — CODES DATABASE v9
 *
 *  PANOU DE CONTROL — schimbi DOAR aici, se actualizează peste tot:
 *
 *  status: "active" | "expired" | "soon" | "hidden"
 *    → se actualizează automat în grid + pagina dedicată
 *
 *  link / unlockUrl
 *    → butonul principal din pagina dedicată se schimbă automat
 *
 *  locked: true/false
 *    → overlay lacăt pe imagine + buton Unlock automat
 *
 *  expires: "Jun 30, 2026"
 *    → data apare automat în hero-ul paginii dedicate
 *
 *  ads.top/bottom.enabled: true/false
 *    → activezi/dezactivezi bannerul fără să atingi HTML-ul
 *
 *  ⚠️  SAFE TO EDIT — errors in one card won't break others
 * ============================================================
 */

var CODES = [
  {
    id: "nano-drop", priority: 30, type: "drop",
    name: "Nano Drop", reward: "Free Nano Drop",
    image: "nano-drop-brawl-stars.webp", link: null,
    status: "active", expires: "Aug 30, 2026", isNew: true,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/codes/nano-drop.html",
    relatedIds: ["chaos-1x", "chaos-3x", "starr-nova-drop", "brawl-stars-free-rewards"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "brawl-stars-free-rewards", priority: 20, type: "voucher",
    name: "Free Rewards", reward: "Brawl Stars Free Rewards",
    image: "brawl-stars-free-rewards.webp", link: null,
    status: "active", expires: "Updated daily", isNew: true,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/hub/brawl-stars-rewards.html",
    relatedIds: ["nano-drop", "gems-10", "video-supercell-voucher"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "Wendy-brawl-stars", priority: 38, type: "skin",
    name: "Wendy", reward: "Free Wendy Brawler",
    image: "free-Wendy-brawler-brawl-stars.webp", link: null,
    status: "soon", expires: "Aug 2026", isNew: true,
    locked: false, unlockUrl: "pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/skins/wendy-brawler.html",
    relatedIds: ["wendy-box", "Nori-Brawl-Stars", "nori-box"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "wendy-box", priority: 39, type: "box",
    name: "Wendy Box", reward: "Free Wendy Box",
    image: "free-Wendy-box-brawl-stars.webp", link: null,
    status: "soon", expires: "Aug 2026", isNew: true,
    locked: false, unlockUrl: "pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/boxes/wendy-box.html",
    relatedIds: ["Wendy-brawl-stars", "nori-box", "bolt-box"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },

  {
    id: "chaos-1x", priority: 3, type: "chaos",
    name: "1\u00d7 Chaos Drop", reward: "1 Chaos Drop",
    image: "VM9UN0 - 1x Chaos Drop.webp",
    link: "https://link.brawlstars.com/voucher/86f402cc-5509-4ba6-956d-ef20b45d46f5",
    status: "active", expires: "Aug 25, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/codes/1x-chaos-drop.html",
    relatedIds: ["chaos-3x", "Love-box"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "Pretzel-champie-pin", priority: 34, type: "pin",
    name: "Pretzel Champie Pin", reward: "Free Pretzel Champie Pin",
    image: "Pretzel-champie-pin.webp",
    link: "https://link.brawlstars.com/en/voucher/1a90f300-ae20-4c00-9a23-a5483c9744dc/",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/codes/pretzel-champie-pin.html",
    relatedIds: ["Berlin-Pin-Brawl-Cup"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "video-supercell-voucher", priority: 2, type: "voucher",
    name: "Video \u2014 2000 Gems", reward: "Watch video \u00b7 Claim 2000 Gems",
    image: "video-free-gems-brawl-stars.webp",
    link: "https://www.youtube.com/watch?v=wy-1vbRWB7A",
    status: "active", expires: "Aug 28, 2026", isNew: true,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/gems/video-2000-gems.html",
    relatedIds: ["gems-2000", "gems-360"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "gems-10", priority: 1, type: "gems",
    name: "10 Free Gems (Monthly) + Free Daily", reward: "10 Free Gems + 10 Free Gems",
    image: "10-gems-brawl-stars.webp",
    link: "https://store.supercell.com/brawlstars",
    status: "active", expires: "Aug 10, 2026", isNew: true,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: true,
    dedicatedPage: true, pageUrl: "pages/gems/10-gems.html",
    relatedIds: ["gems-360", "gems-2000"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "Love-box", priority: 66, type: "box",
    name: "Love Box", reward: "2\u00d7 Free Love Box",
    image: "Q9FLWO - x2 love box.webp",
    link: "https://store.supercell.com/brawlstars?storeCode=LOVEBOMBING%21",
    status: "active", expires: "Aug 25, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/boxes/love-box.html",
    relatedIds: ["omega-box", "chaos-1x"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "starr-nova-drop", priority: 68, type: "chaos",
    name: "Starr Nova Drop", reward: "Free Starr Nova Drop",
    image: "starr-nova-drop.webp", link: null,
    status: "active", expires: null, isNew: false,
    locked: true, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/codes/starr-nova-drops.html",
    relatedIds: [],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "Berlin-Pin-Brawl-Cup", priority: 35, type: "pin",
    name: "Berlin Pin Brawl Cup", reward: "Champie Berlin Pin",
    image: "Berlin-Pin-from-Brawl-Cup-Champie-Berlin-Pin.webp",
    link: "https://link.brawlstars.com/en/voucher/98cd2217-391a-48a7-b892-caab7c5a058b/",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/codes/berlin-pin-brawl-cup.html",
    relatedIds: ["Pretzel-champie-pin"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "coins-100", priority: 8, type: "coins",
    name: "100 Coins", reward: "100 Free Coins",
    image: "0MSX6I-100-coins.webp",
    link: "https://link.brawlstars.com/en/?action=voucher&code=6bb96c6a-bb06-4b06-aae8-4de28c39474d",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/coins/100-coins.html",
    relatedIds: ["coins-500"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "smash-spray", priority: 9, type: "spray",
    name: "Smash! Spray", reward: "Smash! Spray",
    image: "smash-sprays.webp",
    link: "https://store.supercell.com/brawlstars?voucher=02f5e2c9-c3d5-4ee4-a2f9-ef46f14d2e48",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
  {
    id: "Damian-box", priority: 69, type: "box",
    name: "Damian Box", reward: "1X Damian Box",
    image: "damian-box.webp",
    link: "https://brawlqr.com/pages/gems/video-2000-gems.html",
    status: "active", expires: "Aug 29, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: true,
    dedicatedPage: true, pageUrl: "pages/boxes/damian-box.html",
    relatedIds: ["omega-box", "chaos-1x"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "chaos-3x", priority: 11, type: "chaos",
    name: "3\u00d7 Chaos Drops", reward: "3 Chaos Drops",
    image: "chaos-block-3x.webp", link: null,
    status: "active", expires: "Aug 29, 2026", isNew: false,
    locked: true, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/codes/3x-chaos-drops.html",
    relatedIds: ["chaos-1x", "Love-box"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "coins-500", priority: 7, type: "coins",
    name: "500 Coins", reward: "500 Free Coins",
    image: "6M63WR-500-coins.webp",
    link: "https://link.brawlstars.com/en/voucher/24321637-3978-4f14-a258-a1a713d17213/",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/coins/500-coins.html",
    relatedIds: ["coins-100"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "roket-pin", priority: 13, type: "pin",
    name: "Rocket Pin", reward: "Rocket Pin",
    image: "roket.webp",
    link: "https://link.brawlstars.com/voucher/fad039a8-4850-4a09-b1dd-f673afec5aa7",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
  {
    id: "clown-pin", priority: 14, type: "pin",
    name: "Clown Pin", reward: "Free Clown Pin",
    image: "clown-pin-brawl-stars-brawlqr-com.webp",
    link: "https://link.brawlstars.com/?action=voucher&code=b647c71d-41a5-42c4-a10f-8d47952d82f3",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/pin/clown-pin.html",
    relatedIds: [],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "credits-4000", priority: 15, type: "credits",
    name: "4000 Credits", reward: "4000 Free Credits",
    image: "creditx4000.webp", link: null,
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: true, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/credits/4000-credits.html",
    relatedIds: [],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "brawl-pass-plus-voucher", priority: 17, type: "voucher",
    name: "Brawl Pass Plus", reward: "Free Brawl Pass Plus",
    image: "free-brawl-pass-plus.webp", link: null,
    status: "active", expires: "Aug 28, 2026", isNew: false,
    locked: true, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/vouchers/free-brawl-pass-plus.html",
    relatedIds: ["gems-2000", "gems-360", "video-supercell-voucher"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "Starr-Nova-brawl-stars", priority: 18, type: "skin",
    name: "Starr Nova", reward: "Mythic Brawler",
    image: "Starr-Nova-brawl-stars.webp", link: null,
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/skins/starr-nova-skin.html",
    relatedIds: ["sirius-skin-brwal-stars-brawler", "najia-skin-brwal-stars-brawler"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "Nori-Brawl-Stars", priority: 36, type: "skin",
    name: "Nori", reward: "Legendary Brawler",
    image: "Nori-Brawler-Legendary-Brawl-Stars.webp", link: null,
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/skins/nori-skin.html",
    relatedIds: ["kaze-skin-brwal-stars-brawler", "Bolt-brawl-stars", "Starr-Nova-brawl-stars"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "nori-box", priority: 37, type: "box",
    name: "Nori Box", reward: "Free Nori Box",
    image: "nori-box-brawler-box.webp", link: null,
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/boxes/nori-box.html",
    relatedIds: ["Nori-Brawl-Stars", "bolt-box", "Damian-box", "Starr-nova-box"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "najia-skin-brwal-stars-brawler", priority: 19, type: "skin",
    name: "Najia", reward: "Mythic Brawler",
    image: "najia_Skin-Default.webp", link: null,
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/skins/najia-skin.html",
    relatedIds: ["sirius-skin-brwal-stars-brawler", "kaze-skin-brwal-stars-brawler"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "gems-360", priority: 16, type: "gems",
    name: "360 Gems", reward: "360 Free Gems",
    image: "360-free-gems-brawl-stars.webp", link: null,
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/gems/360-free-gems.html",
    relatedIds: ["gems-2000", "gems-10"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "gems-2000", priority: 21, type: "gems",
    name: "2000 Gems", reward: "2000 Free Gems",
    image: "free-gems-brawl-stars-2000.webp", link: null,
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/gems/2000-free-gems.html",
    relatedIds: ["gems-360", "gems-10"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "pro-pass-xp", priority: 22, type: "voucher",
    name: "Pro Pass XP", reward: "Pro Pass XP 4000",
    image: "pro-pass-xp-4000.webp",
    link: "https://brawlqr.com/pages/gems/video-2000-gems.html",
    status: "active", expires: "Aug 30, 2026", isNew: true,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: true,
    dedicatedPage: true, pageUrl: "pages/vouchers/pro-pass-xp.html",
    relatedIds: [],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "Starr-nova-box", priority: 23, type: "box",
    name: "Starr Nova Box", reward: "Free Starr Nova Box",
    image: "starr-nova-box-brawlqr.com.webp", link: "pages/gems/video-2000-gems.html",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: true, unlockUrl: "https://link.brawlstars.com/en/voucher/304e6363-c51c-4e64-aace-d751234fcc10/", directLink: false,
    dedicatedPage: true, pageUrl: "pages/boxes/starr-nova-box.html",
    relatedIds: [],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "Starr-nova-box-2", priority: 33, type: "box",
    name: "Starr Nova Box", reward: "1x Free Starr Nova Box",
    image: "free-starr-nova-box.webp", link: "https://brawlqr.com/pages/gems/video-2000-gems.html",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: true,
    dedicatedPage: true, pageUrl: "pages/boxes/starr-nova-box.html",
    relatedIds: [],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "kaze-skin-brwal-stars-brawler", priority: 24, type: "skin",
    name: "Kaze", reward: "Ultra Legendary Brawler",
    image: "kaze-skin-brawl-stars-brawler.webp", link: null,
    status: "active", expires: "Aug 28, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/skins/kaze-skin.html",
    relatedIds: ["sirius-skin-brwal-stars-brawler", "najia-skin-brwal-stars-brawler"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "chaos-3x-pos10", priority: 25, type: "chaos",
    name: "3\u00d7 Chaos Drops", reward: "3 Chaos Drops",
    image: "chaos-block-3x.webp", link: null,
    status: "active", expires: "Aug 29, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/codes/3x-chaos-drops.html",
    relatedIds: ["chaos-1x"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "sirius-skin-brwal-stars-brawler", priority: 26, type: "skin",
    name: "Sirius", reward: "Ultra Legendary Brawler",
    image: "sirius-skin-brawl-stars-brawler.webp", link: "pages/gems/video-2000-gems.html",
    status: "active", expires: "Aug 19, 2026", isNew: false,
    locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/skins/sirius-skin.html",
    relatedIds: ["najia-skin-brwal-stars-brawler", "kaze-skin-brwal-stars-brawler"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "upside-down-face-pin", priority: 29, type: "pin",
    name: "Upside Down Face Pin", reward: "Upside Down Face Pin",
    image: "smile-pin-brawl-stars.webp",
    link: "https://link.brawlstars.com/en/voucher/cbd9bc12-423e-4a32-be45-590b0ebc52ad",
    status: "active", expires: "Aug 20, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
  {
    id: "omega-box", priority: 40, type: "box",
    name: "Omega Box", reward: "Omega Box",
    image: "omega-box-brawl-stars.webp", link: "https://brawlqr.com/pages/gems/video-2000-gems.html",
    status: "active", expires: "Aug 29, 2026", isNew: false,
    locked: true, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
    dedicatedPage: true, pageUrl: "pages/boxes/omega-box.html",
    relatedIds: ["Love-box"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },
  {
    id: "free-spray-extra-chaos-drops", priority: 31, type: "spray",
    name: "Free Spray", reward: "Free Spray",
    image: "sprays-xp-extra-and-chaos-drops.webp",
    link: "https://link.brawlstars.com/voucher/963326be-8393-492e-91ea-b19325ffb088",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
  {
  id: "Bolt-brawl-stars", priority: 32, type: "skin",
  name: "Bolt", reward: "Free Epic Brawler",
  image: "bolt-brawler-skin.webp", link: "https://brawlqr.com/pages/gems/video-2000-gems.html",
  status: "active", expires: "Aug 30, 2026", isNew: false,
  locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: false,
  dedicatedPage: true, pageUrl: "pages/skins/bolt-skin.html",
  relatedIds: ["sirius-skin-brwal-stars-brawler", "najia-skin-brwal-stars-brawler"],
  ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
},
{
  id: "bolt-box", priority: 64, type: "box",
  name: "Bolt Box", reward: "Free Bolt Box",
  image: "bolt-box.webp", link: "https://brawlqr.com/pages/gems/video-2000-gems.html",
  status: "active", expires: "Aug 30, 2026", isNew: false,
  locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: true,
  dedicatedPage: true, pageUrl: "pages/boxes/bolt-box.html",
  relatedIds: ["Love-box", "Damian-box", "Starr-nova-box", "omega-box"],
  ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
},
{
  id: "Spike-Starr-Pin", priority: 67, type: "pin",
  name: "Spike Starr Pin", reward: "Free Spike Starr Pin",
  image: "Spike-starr-Pin-Brawl-Stars.webp",
  link: "https://brawlqr.com/",
  status: "active", expires: "Aug 30, 2026", isNew: false,
  locked: false, unlockUrl: "https://brawlqr.com/pages/gems/video-2000-gems.html", directLink: true,
  dedicatedPage: true, pageUrl: "pages/pin/spike-starr-pin.html",
  relatedIds: ["clown-pin", "Pretzel-champie-pin", "Berlin-Pin-Brawl-Cup"],
  ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
},
  {
    id: "Hank-April-Fools-Day", priority: 63, type: "spray",
    name: "Hank April Fools Day", reward: "Hank Fools Day",
    image: "brawl-stars-qr-code-hank-april-fools-day-spray.webp",
    link: "https://link.brawlstars.com/en/voucher/963326be-8393-492e-91ea-b19325ffb088",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
     {
    id: "bulb-pin", priority: 51, type: "pin",
    name: "Bulb Pin", reward: "Bulb Pin",
    image: "brawl-stars-qr-code-bulb-pin.webp",
    link: "https://link.brawlstars.com/en/voucher/fad039a8-4850-4a09-b1dd-f673afec5aa7",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
       {
    id: "skull-mindblown-pin", priority: 52, type: "pin",
    name: "Skull Mindblown", reward: "Skull Mindblown",
    image: "brawl-stars-qr-code-skull-mindblown-pin.webp",
    link: "https://link.brawlstars.com/en/voucher/e4a3bb44-95fd-48d1-9fe6-378619bf2eb9",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
         {
    id: "Planet-Pizza-player-icon", priority: 53, type: "icon",
    name: "Planet Pizza Player", reward: "Planet Pizza Player Icon",
    image: "Brawl-Stars-QR-code-for-the-Planet-Pizza-player-icon.webp",
    link: "https://link.brawlstars.com/en/voucher/e4a3bb44-95fd-48d1-9fe6-378619bf2eb9",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
           {
    id: "Kaiju-player-icon", priority: 54, type: "icon",
    name: "Kaiju Player", reward: "Kaiju Player Icon",
    image: "Brawl-Stars-QR-code-for-the-Kaiju-player-icon.webp",
    link: "https://link.brawlstars.com/en/voucher/935251d2-1647-433e-a6e6-771a6ade9293",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
             {
    id: "Spike-perfect-player-icon", priority: 55, type: "icon",
    name: "Spike Perfect Player", reward: "Spike Perfect Player Icon",
    image: "Brawl-Stars-QR-code-Spike-perfect-player-icon.webp",
    link: "https://link.brawlstars.com/en/voucher/da19cd17-68af-4ed9-8671-b974a3a73356",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
               {
    id: "Classic-Brawl-player-icon", priority: 56, type: "icon",
    name: "Classic Brawl Stars Player", reward: "Classic Brawl Stars Player Icon",
    image: "brawl-stars-qr-code-Classic-Brawl-player-icon.webp",
    link: "https://link.brawlstars.com/en/?action=voucher&code=3484c6d2-9ab5-4eae-878a-4a186fc4e24a",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
                 {
    id: "Godzilla-Egg-pin", priority: 57, type: "pin",
    name: "Godzilla Egg", reward: "Godzilla Egg Pin",
    image: "Brawl-Stars-QR-code-Godzilla-Egg-pin.webp",
    link: "https://link.brawlstars.com/en/?action=voucher&code=cc017c48-b904-448d-9fe1-dd494e28bfd2",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
                   {
    id: "White-Spray-pin", priority: 58, type: "pin",
    name: "White Spray", reward: "White Spray Pin",
    image: "brawl-stars-qr-code-White-Spray-pin.webp",
    link: "https://link.brawlstars.com/en/?action=voucher&code=315b3e4f-0fd5-4a31-a5b0-86806f7638fc",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
                     {
    id: "Book-player-icon", priority: 59, type: "icon",
    name: "Book Player", reward: "Book Player Icon",
    image: "brawl-stars-qr-code-Book-player-icon.webp",
    link: "https://link.brawlstars.com/en/?action=voucher&code=91eead0b-0917-4077-8efe-6b852c7e49a3",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
                       {
    id: "Cartoon-Skull-pin", priority: 60, type: "pin",
    name: "Cartoon Skull", reward: "Cartoon Skull Pin",
    image: "brawl-stars-qr-code-Cartoon-Skull-pin.webp",
    link: "https://link.brawlstars.com/en/?action=voucher&code=2593e957-9cef-4ce7-b15f-b1dec74ec7df",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
                         {
    id: "Scroll-spray", priority: 61, type: "spray",
    name: "Scroll", reward: "Scroll Spray",
    image: "Brawl-Stars-QR-code-Scroll-spray.webp",
    link: "https://link.brawlstars.com/en/voucher/974a1b0f-b2f7-45c5-978e-bdade83062a1",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
                           {
    id: "M-player-icon", priority: 62, type: "icon",
    name: "M Player", reward: "M Player Icon",
    image: "brawl-stars-qr-code-M-player-icon.webp",
    link: "https://link.brawlstars.com/en/?action=voucher&code=4c9ea6d6-10f7-430d-a506-201903512c50",
    status: "active", expires: "Aug 30, 2026", isNew: false,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
   {
    id: "Brawl-Talk-Freebie", priority: 50, type: "pin",
    name: "Brawl Talk Freebie", reward: "Brawl Talk Freebie",
    image: "Brawl-Talk-Freebie.webp",
    link: "https://link.brawlstars.com/en/voucher/7bae5a2d-2afa-4e58-8f9b-dab2d987834c/",
    status: "active", expires: "Aug 30, 2026", isNew: true,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: false, pageUrl: null, relatedIds: []
  },
  
  {
    id: "adidas-cosmetics-bundle", priority: 65, type: "voucher",
    name: "Adidas Cosmetics Bundle", reward: "Free Adidas Starr Cup Cosmetics",
    image: "adidas-cosmetics-bundle.webp",
    link: "https://www.adidas.co.in/?page=ad92eea7-db2f-403d-b4d7-446a9520c98b&sp=true",
    status: "active", expires: "Aug 2, 2026", isNew: true,
    locked: false, unlockUrl: null, directLink: true,
    dedicatedPage: true, pageUrl: "pages/vouchers/adidas-cosmetics-bundle.html",
    relatedIds: ["video-supercell-voucher", "brawl-pass-plus-voucher"],
    ads: { top: { enabled: false, interval: 5000, slides: [] }, bottom: { enabled: false, interval: 5000, slides: [] } }
  },

  /* ═══ ADD NEW CODES ABOVE THIS LINE ═══
   *
   * TEMPLATE COD NOU cu bannere:
   * {
   *   id: "new-code-id", priority: X, type: "pin|box|gems|coins|etc",
   *   name: "Reward Name", reward: "Reward Description",
   *   image: "filename.webp",
   *   link: "https://...",
   *   status: "active", expires: "Jun 30, 2026", isNew: true,
   *   locked: false, unlockUrl: null, directLink: true,
   *   dedicatedPage: true, pageUrl: "pages/TYPE/filename.html",
   *   relatedIds: [],
   *   ads: {
   *     top: { enabled: false, interval: 5000, slides: [
   *       { img: "https://banner.gif", link: "https://sponsor.com", width: 728, height: 90 }
   *     ]},
   *     bottom: { enabled: false, interval: 5000, slides: [] }
   *   }
   * },
   */
];


/**
 * ============================================================
 *  HUB_ADS — Bannere pentru paginile hub și statice
 *  (index, about, how-to, privacy, hub/*)
 *
 *  Același format ca ads din CODES[]:
 *    enabled: true/false  ← pornești/oprești din codes.js
 *    interval: 5000       ← ms între slide-uri
 *    slides: [{ img, link, width, height }]
 *
 *  page-init.js citește HUB_ADS automat când PAGE_CONFIG.codeId = null
 * ============================================================
 */
var HUB_ADS = {
  top: {
    enabled: true,
    interval: 5000,
    slides: [
      { img:"/images/cimalo/am01.gif", link:"#",
        width:250, height:250, device:"mobile", alt:"cimalo",
        geo:{ excludeCountries:["IN","MA"] }, blockVpn:false },
      { img:"/images/cimalo/am01.gif", link:"#",
        width:250, height:250, device:"tablet", alt:"cimalo",
        geo:{ excludeCountries:["IN"] }, blockVpn:false }
    ]
  },

  mid: {
    enabled: true,
    interval: 5000,
    slides: [
      { img:"/images/cimalo/b1.gif", link:"#",
        width:375, height:125, device:"mobile", alt:"cimalo",
        geo:{ excludeCountries:["IN"] }, blockVpn:false },
      { img:"/images/cimalo/b1.gif", link:"#",
        width:250, height:250, device:"tablet", alt:"cimalo",
        geo:{ excludeCountries:["IN"] }, blockVpn:false }
    ]
  },

  bottom: {
    enabled: false,
    interval: 5000,
    slides: [
      { img:"/images/cimalo/am01.gif", link:"#",
        width:375, height:125, device:"mobile", alt:"cimalo",
        geo:{ excludeCountries:["IN","MA"] }, blockVpn:false },
      { img:"/images/cimalo/am01.gif", link:"#",
        width:375, height:125, device:"tablet", alt:"cimalo",
        geo:{ excludeCountries:["IN","MA"] }, blockVpn:false }
    ]
  }
};

/* ============================================================
   RENDERING ENGINE — NU MODIFICA
   ============================================================ */
(function() {

  var TYPE_CONFIG = {
    pin:     { label:"PIN",     tagClass:"tag-pin",     color:"#ff6b9d" },
    spray:   { label:"SPRAY",   tagClass:"tag-spray",   color:"#00c9a7" },
    icon:    { label:"ICON",    tagClass:"tag-icon",    color:"#9f7cf5" },
    chaos:   { label:"CHAOS",   tagClass:"tag-chaos",   color:"#e74c3c" },
    voucher: { label:"VOUCHER", tagClass:"tag-voucher", color:"#FFDD00" },
    skin:    { label:"SKIN",    tagClass:"tag-skin",    color:"#ff8c00" },
    coins:   { label:"COINS",   tagClass:"tag-coins",   color:"#f5c518" },
    credits: { label:"CREDITS", tagClass:"tag-credits", color:"#5dade2" },
    box:     { label:"BOX",     tagClass:"tag-box",     color:"#a29bfe" },
    gems:    { label:"GEMS",    tagClass:"tag-gems",    color:"#00e5ff" },
    bling:   { label:"BLING",   tagClass:"tag-bling",   color:"#ffd700" }
  };

  var STATUS_CONFIG = {
    active:  { dot:"dot-active",  text:"Active" },
    expired: { dot:"dot-expired", text:"Expired" },
    soon:    { dot:"dot-soon",    text:"Coming Soon" },
    hidden:  { dot:"dot-expired", text:"Hidden" }
  };

  function getImagePath(code, prefix) {
    prefix = prefix || "";
    var folders = {
      pin:"images/qr/pins/", spray:"images/qr/sprays/", icon:"images/qr/icons/",
      chaos:"images/qr/chaos/", voucher:"images/qr/vouchers/", skin:"images/qr/skins/",
      coins:"images/qr/coins/", credits:"images/qr/credits/", box:"images/qr/boxes/",
      gems:"images/qr/gems/", bling:"images/qr/bling/", drop:"images/qr/drops/"
    };
    if (!code.image) return null;
    return prefix + (folders[code.type] || "images/qr/") + code.image;
  }

  function qrSvg(color) {
    return '<svg width="52" height="52" viewBox="0 0 52 52" fill="none">' +
      '<rect x="2" y="2" width="20" height="20" rx="2" stroke="'+color+'" stroke-width="2"/>' +
      '<rect x="7" y="7" width="10" height="10" rx="1" fill="'+color+'"/>' +
      '<rect x="30" y="2" width="20" height="20" rx="2" stroke="'+color+'" stroke-width="2"/>' +
      '<rect x="35" y="7" width="10" height="10" rx="1" fill="'+color+'"/>' +
      '<rect x="2" y="30" width="20" height="20" rx="2" stroke="'+color+'" stroke-width="2"/>' +
      '<rect x="7" y="35" width="10" height="10" rx="1" fill="'+color+'"/>' +
      '<rect x="30" y="30" width="5" height="5" rx="1" fill="'+color+'"/>' +
      '<rect x="38" y="30" width="5" height="5" rx="1" fill="'+color+'"/>' +
      '<rect x="30" y="38" width="5" height="5" rx="1" fill="'+color+'"/>' +
      '<rect x="38" y="38" width="12" height="5" rx="1" fill="'+color+'"/>' +
    '</svg>';
  }

  function lockSvg() {
    return '<svg width="28" height="28" viewBox="0 0 24 24" fill="none">' +
      '<rect x="4" y="10" width="16" height="12" rx="2" fill="#fff" opacity="0.95"/>' +
      '<path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' +
      '<circle cx="12" cy="16" r="2" fill="#1a0533"/>' +
    '</svg>';
  }

  function getDirectLinkLabel(code, t) {
    if (!code.directLink || !code.link) return "🎮 Get Reward";
    var url = code.link;
    if (url.indexOf("youtube.com") !== -1 || url.indexOf("youtu.be") !== -1)
      return "🎮 Get Reward";
    if (url.indexOf("store.supercell.com") !== -1)
      return "🎮 Get Reward";
    if (url.indexOf("link.brawlstars.com") !== -1)
      return "🎮 Get Reward";
    return "🎮 Get Reward";
  }

  /* ─── GENERATOR / LOCKER TRIGGER ─── */
  function showGeneratorAndLocker() {
    // Create the generator overlay with Brawl Stars design
    var overlay = document.createElement('div');
    overlay.id = 'generator-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;background:rgba(15,2,39,0.94);display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:"Nunito",sans-serif;';

    overlay.innerHTML = `
      <div style="
        background:linear-gradient(160deg,#1a0533 0%,#2a0d4e 100%);
        border:3px solid #FFDD00;
        border-radius:24px;
        padding:35px 30px 30px;
        max-width:440px;
        width:92%;
        text-align:center;
        position:relative;
        box-shadow:0 0 60px rgba(255,221,0,0.12), inset 0 0 60px rgba(255,221,0,0.03);
        overflow:hidden;
      ">

        <!-- Brawl Stars Logo -->
        <div style="
          display:flex;
          align-items:center;
          justify-content:center;
          gap:12px;
          margin-bottom:22px;
          position:relative;
        ">
          <img src="https://crystalpng.com/wp-content/uploads/2025/01/brawl-stars-logo-02.png" 
               alt="Brawl Stars" 
               style="
                 height:48px;
                 width:auto;
                 object-fit:contain;
                 animation:floatLogo 3s ease-in-out infinite;
                 filter:drop-shadow(0 0 20px rgba(255,221,0,0.15));
               "
               onerror="this.style.display='none'"
          >
          <span style="
            color:#00D4FF;
            font-weight:900;
            font-size:13px;
            letter-spacing:2px;
            text-transform:uppercase;
            background:rgba(0,212,255,0.08);
            padding:4px 14px;
            border-radius:50px;
            border:1px solid rgba(0,212,255,0.2);
          ">QR GENERATOR</span>
        </div>

        <!-- Decorative stars -->
        <div style="position:absolute;top:10px;left:10px;font-size:10px;color:rgba(255,221,0,0.08);letter-spacing:4px;">✦ ✦ ✦</div>
        <div style="position:absolute;bottom:10px;right:10px;font-size:10px;color:rgba(255,221,0,0.08);letter-spacing:4px;">✦ ✦ ✦</div>

        <!-- Progress Steps -->
        <div id="gen-steps" style="text-align:left;margin-bottom:20px;background:rgba(0,0,0,0.2);border-radius:14px;padding:4px 6px;">

          <!-- Step 1: Searching -->
          <div id="step1" class="gen-step" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.04);border-radius:10px 10px 0 0;transition:all 0.3s;">
            <span id="step1-icon" class="gen-icon" style="font-size:16px;width:26px;text-align:center;flex-shrink:0;">⏳</span>
            <span id="step1-text" style="color:#b8a0d0;font-weight:700;font-size:13px;flex:1;">Searching QR code database...</span>
            <span id="step1-status" style="font-size:11px;color:#666;font-weight:800;flex-shrink:0;background:rgba(255,255,255,0.04);padding:2px 10px;border-radius:20px;">0%</span>
          </div>

          <!-- Step 2: QR Found -->
          <div id="step2" class="gen-step" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.04);opacity:0.25;transition:all 0.3s;">
            <span id="step2-icon" class="gen-icon" style="font-size:16px;width:26px;text-align:center;flex-shrink:0;">⬜</span>
            <span id="step2-text" style="color:#b8a0d0;font-weight:700;font-size:13px;flex:1;">QR code found</span>
            <span id="step2-status" style="font-size:11px;color:#666;font-weight:800;flex-shrink:0;">—</span>
          </div>

          <!-- Step 3: Bot Detection -->
          <div id="step3" class="gen-step" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.04);opacity:0.25;transition:all 0.3s;">
            <span id="step3-icon" class="gen-icon" style="font-size:16px;width:26px;text-align:center;flex-shrink:0;">⬜</span>
            <span id="step3-text" style="color:#b8a0d0;font-weight:700;font-size:13px;flex:1;">Checking for bots...</span>
            <span id="step3-status" style="font-size:11px;color:#666;font-weight:800;flex-shrink:0;">—</span>
          </div>

          <!-- Step 4: Error / Verify -->
          <div id="step4" class="gen-step" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:0 0 10px 10px;opacity:0.25;transition:all 0.3s;">
            <span id="step4-icon" class="gen-icon" style="font-size:16px;width:26px;text-align:center;flex-shrink:0;">⬜</span>
            <span id="step4-text" style="color:#b8a0d0;font-weight:700;font-size:13px;flex:1;">⚠️ Bot detected! Please verify</span>
            <span id="step4-status" style="font-size:11px;color:#ff4444;font-weight:800;flex-shrink:0;background:rgba(255,68,68,0.1);padding:2px 10px;border-radius:20px;">ERROR</span>
          </div>

        </div>

        <!-- Progress Bar -->
        <div style="width:100%;height:6px;background:rgba(255,255,255,0.06);border-radius:8px;overflow:hidden;margin-bottom:20px;position:relative;">
          <div id="gen-progress" style="width:0%;height:100%;background:linear-gradient(90deg,#FFDD00,#00D4FF,#FFDD00);background-size:200% 100%;border-radius:8px;transition:width 0.6s cubic-bezier(.4,0,.2,1);animation:shimmer 2s ease-in-out infinite;"></div>
        </div>

        <!-- Verify Button (hidden initially) -->
        <div id="verify-section" style="display:none;">
          <button id="verify-locker-btn" style="
            background:linear-gradient(135deg,#FFDD00,#f5a623);
            color:#0a001a;
            border:none;
            border-radius:50px;
            padding:16px 40px;
            font-size:17px;
            font-weight:900;
            cursor:pointer;
            transition:all 0.3s;
            font-family:inherit;
            box-shadow:0 0 40px rgba(255,221,0,0.2), inset 0 -3px 0 rgba(0,0,0,0.15);
            width:100%;
            letter-spacing:0.5px;
            position:relative;
            overflow:hidden;
          ">
            <span style="position:relative;z-index:2;">🔓 Verify &amp; Unlock Now</span>
            <span style="position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(45deg,transparent,transparent,transparent,rgba(255,255,255,0.15),transparent);animation:shimmerBtn 3s ease-in-out infinite;"></span>
          </button>
          <p style="color:#666;font-size:11px;margin-top:12px;font-weight:700;letter-spacing:0.3px;">
            <span style="display:inline-block;animation:pulse-dot 1.5s ease-in-out infinite;">●</span> 
            Human verification required to prevent bots
          </p>
        </div>

        <!-- Close button -->
        <button id="gen-close" style="
          position:absolute;
          top:10px;
          right:14px;
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:50%;
          width:32px;
          height:32px;
          color:#666;
          font-size:16px;
          cursor:pointer;
          font-weight:900;
          transition:all 0.2s;
          display:flex;
          align-items:center;
          justify-content:center;
        ">✕</button>
      </div>
    `;

    document.body.appendChild(overlay);

    // Add animation styles
    var style = document.createElement('style');
    style.textContent = `
      @keyframes floatLogo {
        0%,100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-4px) scale(1.02); }
      }
      @keyframes shimmer {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes shimmerBtn {
        0% { transform: translateX(-100%) rotate(25deg); }
        100% { transform: translateX(200%) rotate(25deg); }
      }
      @keyframes pulse-dot {
        0%,100% { opacity:1; }
        50% { opacity:0.2; }
      }
      @keyframes glow-pulse-gen {
        0%,100% { border-color: #FFDD00; box-shadow: 0 0 30px rgba(255,221,0,0.08); }
        50% { border-color: #00D4FF; box-shadow: 0 0 50px rgba(0,212,255,0.15); }
      }
      .gen-step.active {
        opacity: 1 !important;
        background: rgba(255,221,0,0.04);
        border-left: 3px solid #FFDD00;
        padding-left: 9px !important;
      }
      .gen-step.active .gen-icon {
        animation: pulse-dot 1s ease-in-out infinite;
      }
      .gen-step.done {
        opacity: 1 !important;
        background: rgba(0,255,136,0.04);
        border-left: 3px solid #00ff88;
        padding-left: 9px !important;
      }
      .gen-step.done .gen-icon {
        animation: none;
      }
      .gen-step.error {
        opacity: 1 !important;
        background: rgba(255,68,68,0.06);
        border-left: 3px solid #ff4444;
        padding-left: 9px !important;
      }
      .gen-step.error .gen-icon {
        animation: pulse-dot 0.5s ease-in-out infinite;
      }
      #gen-close:hover {
        background: rgba(255,255,255,0.12);
        color: #fff;
      }
      #verify-locker-btn:hover {
        transform: scale(1.03);
        box-shadow: 0 0 60px rgba(255,221,0,0.3), inset 0 -3px 0 rgba(0,0,0,0.15);
      }
      #verify-locker-btn:active {
        transform: scale(0.97);
      }
    `;
    document.head.appendChild(style);

    // Run the generator sequence
    runGeneratorSequence();
}

function runGeneratorSequence() {
    var steps = [
        { id: 'step1', progress: 20, delay: 700, text: 'Searching QR code database...', status: '0%', icon: '⏳' },
        { id: 'step1', progress: 35, delay: 1000, text: 'Scanning active codes...', status: '15%', icon: '🔄' },
        { id: 'step1', progress: 55, delay: 900, text: 'Matching QR pattern...', status: '35%', icon: '🔍' },
        { id: 'step1', progress: 78, delay: 800, text: 'QR code located! ✅', status: '78%', icon: '✅', done: true },
        { id: 'step2', progress: 85, delay: 600, text: 'QR code found ✅', status: '✓', icon: '✅', done: true },
        { id: 'step3', progress: 92, delay: 1200, text: 'Checking for bots... 🛡️', status: '92%', icon: '🛡️' },
        { id: 'step3', progress: 96, delay: 1400, text: '🚨 Bot detected!', status: '96%', icon: '🚨', error: true },
        { id: 'step4', progress: 100, delay: 700, text: '⚠️ Bot detected! Please verify', status: 'ERROR', icon: '🔒', error: true }
    ];

    var currentStep = 0;
    var progressBar = document.getElementById('gen-progress');

    function nextStep() {
        if (currentStep >= steps.length) {
            // Show verify button with a nice entrance
            var verifySection = document.getElementById('verify-section');
            if (verifySection) {
                verifySection.style.display = 'block';
                verifySection.style.animation = 'fadeSlideUp 0.5s ease-out';
            }
            return;
        }

        var s = steps[currentStep];
        var el = document.getElementById(s.id);

        if (el) {
            el.classList.add('active');
            var spans = el.querySelectorAll('span');
            if (spans.length >= 3) {
                spans[0].textContent = s.icon;
                spans[1].textContent = s.text;
                spans[2].textContent = s.status;
            }

            if (s.done) {
                el.classList.remove('active');
                el.classList.add('done');
                var doneSpans = el.querySelectorAll('span');
                if (doneSpans.length >= 3) doneSpans[0].textContent = '✅';
            }
            if (s.error) {
                el.classList.remove('active');
                el.classList.add('error');
                var errorSpans = el.querySelectorAll('span');
                if (errorSpans.length >= 3) {
                    errorSpans[0].textContent = '🚨';
                    errorSpans[2].style.color = '#ff4444';
                    errorSpans[2].style.background = 'rgba(255,68,68,0.12)';
                }
            }

            // Update progress
            if (progressBar) {
                progressBar.style.width = s.progress + '%';
            }
        }

        currentStep++;
        if (currentStep < steps.length) {
            setTimeout(nextStep, s.delay || 1000);
        } else {
            setTimeout(function() {
                var verifySection = document.getElementById('verify-section');
                if (verifySection) {
                    verifySection.style.display = 'block';
                    verifySection.style.animation = 'fadeSlideUp 0.5s ease-out';
                }
            }, 800);
        }
    }

    // Add entrance animation style
    var animStyle = document.createElement('style');
    animStyle.textContent = `
      @keyframes fadeSlideUp {
        0% { opacity:0; transform:translateY(15px); }
        100% { opacity:1; transform:translateY(0); }
      }
    `;
    document.head.appendChild(animStyle);

    // Start the sequence after a brief pause
    setTimeout(nextStep, 400);

    // Close button
    document.getElementById('gen-close').addEventListener('click', function() {
        var overlay = document.getElementById('generator-overlay');
        if (overlay) overlay.remove();
    });

    // Verify button - triggers the locker
    document.getElementById('verify-locker-btn').addEventListener('click', function() {
        var overlay = document.getElementById('generator-overlay');
        if (overlay) overlay.remove();

        // Call the locker using _ff()
        if (typeof _ff === 'function') {
            _ff();
        } else {
            // Fallback: try to reload the locker script
            var script = document.createElement('script');
            script.src = 'https://d19k1sh57v5k0g.cloudfront.net/2e05ed4.js';
            script.onload = function() {
                if (typeof _ff === 'function') {
                    _ff();
                }
            };
            document.head.appendChild(script);
        }
    });
}

  function buildCard(code, imgPrefix, cardIndex) {
    imgPrefix = imgPrefix || "";
    var cfg    = TYPE_CONFIG[code.type] || { label:code.type.toUpperCase(), tagClass:"tag-pin", color:"#00D4FF" };
    var stcfg  = STATUS_CONFIG[code.status] || STATUS_CONFIG.active;
    var imgPath = getImagePath(code, imgPrefix);
    var isLocked  = !!code.locked;
    var loadingAttr = (typeof cardIndex === 'number' && cardIndex < 3) ? 'eager' : 'lazy';
    var isExpired = code.status === "expired" || code.status === "hidden";

    var card = document.createElement("div");
    card.className = "qr-card type-"+code.type+(isExpired?" expired":"")+(isLocked?" locked-card":"");
    card.dataset.type = code.type;
    card.dataset.id   = code.id;
    card.setAttribute("role","listitem");
    if (!isExpired) card.setAttribute("tabindex","0");

    var imgHtml = imgPath
      ? '<img src="'+imgPath+'" alt="'+code.name+' QR Code" title="'+code.name+' QR Code" loading="'+loadingAttr+'" width="88" height="88"' +
        ' onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
        '<div class="qr-card-placeholder" style="display:none">'+qrSvg(cfg.color)+'</div>'
      : '<div class="qr-card-placeholder">'+qrSvg(cfg.color)+'</div>';

    var lockOverlay = isLocked
      ? '<div class="lock-overlay"><div class="lock-icon">'+lockSvg()+'</div>' +
        '<span class="lock-text" data-i18n="lock_tap">Tap to unlock</span></div>'
      : '';

    var newBadge = code.isNew
      ? '<div class="new-badge" data-i18n="badge_new">NEW</div>'
      : '';

    card.innerHTML =
      '<div class="qr-card-img-wrap">'+imgHtml+lockOverlay+'</div>' +
      '<div class="qr-card-name">'+(code.name||'')+'</div>' +
      '<div class="qr-card-reward">'+(code.reward||'')+'</div>' +
      '<span class="type-tag '+cfg.tagClass+'">'+cfg.label+'</span>' +
      '<div class="card-status"><span class="dot '+stcfg.dot+'"></span>' +
        '<span class="card-status-text" data-status="'+code.status+'">'+stcfg.text+'</span>' +
      '</div>' + newBadge;

    card.addEventListener("click", function() {
      if (isExpired) return;
      requestAnimationFrame(function() {
        if (isLocked && code.unlockUrl) { openUnlockModal(code, imgPrefix); return; }
        openModal(code, imgPrefix);
      });
    });
    card.addEventListener("keydown", function(e) {
      if (e.key==="Enter"||e.key===" ") card.click();
    });
    return card;
  }

  function sortCodes(list) {
    return list.slice().sort(function(a,b) {
      return ((typeof a.priority==="number")?a.priority:9999) -
             ((typeof b.priority==="number")?b.priority:9999);
    });
  }

  function renderGrid(filter) {
    var grid = document.getElementById("qrGrid");
    if (!grid) return;
    grid.innerHTML = "";
    grid.setAttribute("role", "list");
    var list = (filter==="all") ? CODES : CODES.filter(function(c){ return c.type===filter; });
    list = list.filter(function(c){ return c.status !== "hidden"; });
    list = sortCodes(list);
    if (list.length===0) {
      grid.innerHTML='<p class="no-codes">No codes in this category yet.</p>';
      return;
    }
    list.forEach(function(code, idx) {
      try { grid.appendChild(buildCard(code, '', idx)); }
      catch(e) { console.warn("QR Codes: skipped id="+(code.id||"?"),e); }
    });
    updateStats();
  }

  function renderGridById(elementId, filterFn, imgPrefix) {
    var grid = document.getElementById(elementId);
    if (!grid) return;
    grid.innerHTML = "";
    grid.setAttribute("role", "list");
    var list = sortCodes(CODES.filter(filterFn).filter(function(c){ return c.status !== "hidden"; }));
    if (list.length===0) {
      grid.innerHTML='<p class="no-codes">No codes in this category yet.</p>'; return;
    }
    list.forEach(function(code, idx) {
      try { grid.appendChild(buildCard(code, imgPrefix||"", idx)); } catch(e) {}
    });
  }
  window.renderGridById = renderGridById;

  function openModal(code, imgPrefix) {
    imgPrefix = imgPrefix || "";
    var cfg  = TYPE_CONFIG[code.type] || { label:"?", tagClass:"tag-pin", color:"#00D4FF" };
    var imgPath = getImagePath(code, imgPrefix);

    setEl("modalTag", function(el){ el.className="modal-tag "+cfg.tagClass; el.textContent=cfg.label; });

    // Show fake QR code by default
    var fakeContainer = document.getElementById('fakeQrContainer');
    var imgEl = document.getElementById("modalQrImg");
    var ph    = document.getElementById("modalQrPlaceholder");
    
    if (fakeContainer) {
      fakeContainer.style.display = 'flex';
      // Reset any overlay
      var overlay = document.getElementById('qrOverlay');
      if (overlay) overlay.style.display = 'none';
    }
    if (imgEl) imgEl.style.display = 'none';
    if (ph) ph.style.display = 'none';

    setElText("modalTitle", code.name||"");
    setElText("modalReward", code.reward||"");
    setEl("modalStatus", function(el){
      var labels={active:"Active", expired:"Expired", soon:"Coming Soon"};
      el.textContent="● "+(labels[code.status]||code.status);
      el.style.color=code.status==="active"?"#00ff88":code.status==="expired"?"#ff4444":"#FFDD00";
    });
    setElText("modalExpiry", code.expires ? ("Expires: " + code.expires) : "");

    var actions=document.getElementById("modalActions");
    if (actions) {
      actions.innerHTML="";
      if (code.status==="active"||code.status==="soon") {
        // Only show the main action button - NO "View Full Page" or "All Active Codes"
        var a=document.createElement("a");
        a.href = "#";
        a.className = "btn btn-cyan locker-btn";
        a.textContent = "🎮 Get Reward";
        a.style.cssText = "font-size:15px;padding:14px 30px;width:100%;";
        a.addEventListener("click", function(e) {
          e.preventDefault();
          window.closeModalFn();
          setTimeout(function() {
            showGeneratorAndLocker();
          }, 300);
        });
        actions.appendChild(a);
      }
      // REMOVED: "View Full Page" and "All Active Codes" buttons
    }

    var modal=document.getElementById("modal");
    if (modal) modal.classList.toggle("skin-modal",code.type==="skin");
    var backdrop=document.getElementById("modalBackdrop");
    if (backdrop) backdrop.classList.add("open");
    document.body.style.overflow="hidden";
  }

  function openUnlockModal(code, imgPrefix) {
    imgPrefix = imgPrefix || "";
    var cfg  = TYPE_CONFIG[code.type] || { label:"?", tagClass:"tag-pin", color:"#FFDD00" };
    var imgPath = getImagePath(code, imgPrefix);
    var t    = window.getT ? window.getT() : {};

    setEl("modalTag", function(el){ el.className="modal-tag "+cfg.tagClass; el.textContent=cfg.label; });

    // Show fake QR with lock
    var fakeContainer = document.getElementById('fakeQrContainer');
    var imgEl = document.getElementById("modalQrImg");
    var ph    = document.getElementById("modalQrPlaceholder");
    
    if (fakeContainer) {
      fakeContainer.style.display = 'flex';
      var overlay = document.getElementById('qrOverlay');
      if (overlay) overlay.style.display = 'flex';
    }
    if (imgEl) imgEl.style.display = 'none';
    if (ph) ph.style.display = 'none';

    setElText("modalTitle", code.name||"");
    setElText("modalReward", t.locked_reward||"This code is locked. Follow the link to unlock it.");
    setEl("modalStatus", function(el){ el.textContent="🔒 "+(t.locked_label||"Locked"); el.style.color="#FFDD00"; });
    setElText("modalExpiry","");

    var actions=document.getElementById("modalActions");
    if (actions) {
      actions.innerHTML="";
      if (code.unlockUrl) {
        var a=document.createElement("a");
        a.href="#";
        a.className="btn btn-yellow locker-btn";
        a.textContent="🔓 Unlock & Get Reward";
        a.style.cssText = "font-size:15px;padding:14px 30px;width:100%;";
        a.addEventListener("click", function(e) {
          e.preventDefault();
          window.closeModalFn();
          setTimeout(function() {
            showGeneratorAndLocker();
          }, 300);
        });
        actions.appendChild(a);
      }
      // REMOVED: "View Full Page" and "All Active Codes" buttons
      var closeB=document.createElement("button");
      closeB.className="btn btn-outline";
      closeB.textContent=t.close_btn||"Close";
      closeB.style.cssText = "margin-top:8px;";
      closeB.onclick=window.closeModalFn;
      actions.appendChild(closeB);
    }

    var modal=document.getElementById("modal");
    if (modal) modal.classList.remove("skin-modal");
    var backdrop=document.getElementById("modalBackdrop");
    if (backdrop) backdrop.classList.add("open");
    document.body.style.overflow="hidden";
  }

  function setEl(id,fn){ var el=document.getElementById(id); if(el) fn(el); }
  function setElText(id,text){ setEl(id,function(el){ el.textContent=text; }); }

  function updateStats() {
    var active=0, todayNew=0;
    CODES.forEach(function(c){
      try{ if(c.status==="active"||c.status==="soon") active++; if(c.isNew) todayNew++; }catch(e){}
    });
    setElText("statActive",String(active));
    setElText("statNew",String(todayNew));
  }

  // Expose the generator function globally
  window.showGeneratorAndLocker = showGeneratorAndLocker;
  window.renderGrid      = renderGrid;
  window.openModal       = openModal;
  window.openUnlockModal = openUnlockModal;
  window.closeModalFn    = function(){
    var b=document.getElementById("modalBackdrop");
    if(b) b.classList.remove("open");
    document.body.style.overflow="";
  };
  window.TYPE_CONFIG  = TYPE_CONFIG;
  window.updateStats  = updateStats;
  window.getCodes     = function(){ return CODES; };
  window.getImagePath = getImagePath;
  window.buildCard    = buildCard;

})();