/**
 * BrawlQR.com — i18n-core.js v2
 * SYNC — Core 7 languages for immediate render
 * Languages: en, it, fr, de, es, pt, ro (covers ~75% global traffic)
 * Remaining 21 languages → i18n-full.js (defer)
 * FIXED: var _lang included correctly
 */

var LANGUAGES = [
  { code:"en-US", name:"English (US)",      flag:"🇺🇸", countries:["US"] },
  { code:"en",    name:"English (UK)",      flag:"🇬🇧", countries:["GB","AU","NZ","IE","SG","PH","IN","ZA","CA"] },
  { code:"it",    name:"Italiano",          flag:"🇮🇹", countries:["IT"] },
  { code:"fr",    name:"Français",          flag:"🇫🇷", countries:["FR","BE","LU","MC"] },
  { code:"de",    name:"Deutsch",           flag:"🇩🇪", countries:["DE","AT","CH"] },
  { code:"zh",    name:"中文(简体)",         flag:"🇨🇳", countries:["CN"] },
  { code:"zh-TW", name:"繁體中文",           flag:"🇹🇼", countries:["TW"] },
  { code:"ja",    name:"日本語",             flag:"🇯🇵", countries:["JP"] },
  { code:"ko",    name:"한국어",             flag:"🇰🇷", countries:["KR"] },
  { code:"ar",    name:"العربية",           flag:"🇸🇦", countries:["AE","QA","SA","KW","BH","OM"] },
  { code:"no",    name:"Norsk",             flag:"🇳🇴", countries:["NO"] },
  { code:"sv",    name:"Svenska",           flag:"🇸🇪", countries:["SE"] },
  { code:"da",    name:"Dansk",             flag:"🇩🇰", countries:["DK"] },
  { code:"nl",    name:"Nederlands",        flag:"🇳🇱", countries:["NL"] },
  { code:"hr",    name:"Hrvatski",          flag:"🇭🇷", countries:["HR"] },
  { code:"tr",    name:"Türkçe",            flag:"🇹🇷", countries:["TR","CY"] },
  { code:"th",    name:"ภาษาไทย",           flag:"🇹🇭", countries:["TH"] },
  { code:"id",    name:"Bahasa Indonesia",  flag:"🇮🇩", countries:["ID"] },
  { code:"vi",    name:"Tiếng Việt",        flag:"🇻🇳", countries:["VN"] },
  { code:"pt-BR", name:"Português (BR)",    flag:"🇧🇷", countries:["BR"] },
  { code:"es-MX", name:"Español (MX)",      flag:"🇲🇽", countries:["MX"] },
  { code:"pt",    name:"Português",         flag:"🇵🇹", countries:["PT"] },
  { code:"es",    name:"Español",           flag:"🇪🇸", countries:["ES","AR","CO","CL","PE","VE"] },
  { code:"sl",    name:"Slovenščina",       flag:"🇸🇮", countries:["SI"] },
  { code:"sk",    name:"Slovenčina",        flag:"🇸🇰", countries:["SK"] },
  { code:"cs",    name:"Čeština",           flag:"🇨🇿", countries:["CZ"] },
  { code:"et",    name:"Eesti",             flag:"🇪🇪", countries:["EE"] },
  { code:"fi",    name:"Suomi",             flag:"🇫🇮", countries:["FI"] },
  { code:"hu",    name:"Magyar",            flag:"🇭🇺", countries:["HU"] },
  { code:"pl",    name:"Polski",            flag:"🇵🇱", countries:["PL"] },
  { code:"ro",    name:"Română",            flag:"🇷🇴", countries:["RO"] }
];

var TRANSLATIONS = {

en: {
  nav_home:"QR Codes", nav_guide:"How To", nav_about:"About",
  hero_badge:"Updated Daily",
  hero_title:"All Brawl Stars<br>QR Codes in One Place",
  hero_subtitle:"Free pins, sprays, icons, chaos drops, coins, credits, boxes, gems, bling &amp; Supercell vouchers. Claim before they expire!",
  stat_active:"Active Codes", stat_new:"Added Today", stat_types:"Reward Types",
  filter_all:"All", filter_pin:"Pins", filter_spray:"Sprays", filter_icon:"Icons",
  filter_chaos:"Chaos Drops", filter_coins:"Coins", filter_credits:"Credits",
  filter_box:"Boxes", filter_voucher:"Vouchers", filter_skin:"Skins",
  filter_gems:"Gems", filter_bling:"Bling",
  section_active:"Active QR Codes",
  skins_title:"Skin QR Codes — Coming Soon",
  skins_desc:"We're preparing QR codes for every Brawl Stars skin. Be the first to know!",
  howto_title:"How to redeem",
  step1:"Make sure <strong>Brawl Stars is installed</strong> on this device",
  step2:"Open the camera or QR scanner &amp; scan the code — <strong>Brawl Stars opens automatically</strong>",
  step3:"Tap <strong>Claim</strong> inside the game to receive your reward",
  modal_note:"One-time use per account. Claim fast — codes expire!",
  lock_tap:"Tap to unlock", badge_new:"NEW",
  locked_label:"Locked", locked_reward:"This code is locked. Follow the link to unlock it.",
  unlock_btn:"Unlock This Code", close_btn:"Close", view_page_btn:"View Full Page",
  scan_btn:"Scan QR Code", open_bs_btn:"Open in Brawl Stars",
  open_store:"Open Supercell Store", open_link_btn:"Open Link", watch_video_btn:"Watch Video",
  status_active:"Active", status_expired:"Expired", status_soon:"Coming Soon",
  expires_label:"Expires:", no_codes:"No codes in this category yet.",
  footer_disclaimer:"BrawlQR.com is not affiliated with Supercell. Brawl Stars © Supercell. All codes are official and safe to use.",
  footer_about:"About", footer_howto:"How To", footer_privacy:"Privacy",
  dp_howto:"How to claim this reward",
  dp_step1:"Make sure Brawl Stars is installed on this device",
  dp_step2:"Scan the QR code below — Brawl Stars opens automatically",
  dp_step3:"Tap <strong>Claim</strong> inside the game",
  dp_step1_direct:"Tap the button below — Brawl Stars opens automatically",
  dp_step2_direct:"The reward screen appears in-game",
  dp_step3_direct:"Tap <strong>Claim</strong> to receive your reward",
  dp_similar:"Similar Codes", dp_new_codes:"Newest Codes",
  dp_expires:"Expires", dp_status:"Status", dp_type:"Type", dp_reward:"Reward",
  dp_unlock_info:"This code is locked. Tap the button below to follow the unlock instructions. Once unlocked, Brawl Stars must be installed on the device you use to scan.",
  dp_back:"← Back to all codes",
  bs_installed_q:"Do you have Brawl Stars on this device?",
  bs_yes_btn:"Yes — Open in Brawl Stars", bs_no_btn:"No — Show QR to scan with another device",
  all_codes_btn:"All Active Codes"
},

it: {
  nav_home:"Codici QR", nav_guide:"Come Fare", nav_about:"Info",
  hero_badge:"Aggiornato Ogni Giorno",
  hero_title:"Tutti i Codici QR<br>di Brawl Stars in un Posto",
  hero_subtitle:"Pin, spray, icone, Chaos Drop, monete, crediti, box, gemme, bling e voucher Supercell gratis!",
  stat_active:"Codici Attivi", stat_new:"Aggiunti Oggi", stat_types:"Tipi Premi",
  filter_all:"Tutti", filter_pin:"Pin", filter_spray:"Spray", filter_icon:"Icone",
  filter_chaos:"Chaos Drop", filter_coins:"Monete", filter_credits:"Crediti",
  filter_box:"Box", filter_voucher:"Voucher", filter_skin:"Skin",
  filter_gems:"Gemme", filter_bling:"Bling",
  section_active:"Codici QR Attivi",
  skins_title:"Codici QR Skin — Prossimamente",
  skins_desc:"Stiamo preparando i codici QR per ogni skin. Sii il primo a saperlo!",
  howto_title:"Come riscattare",
  step1:"Assicurati di avere <strong>Brawl Stars installato</strong> su questo dispositivo",
  step2:"Apri la fotocamera o uno scanner QR e scansiona il codice — <strong>Brawl Stars si apre automaticamente</strong>",
  step3:"Tocca <strong>Riscatta</strong> nel gioco per ricevere il premio",
  modal_note:"Monouso per account. Riscatta subito — i codici scadono!",
  lock_tap:"Tocca per sbloccare", badge_new:"NUOVO",
  locked_label:"Bloccato", locked_reward:"Questo codice è bloccato. Segui il link per sbloccarlo.",
  unlock_btn:"Sblocca Questo Codice", close_btn:"Chiudi", view_page_btn:"Pagina Completa",
  scan_btn:"Scansiona QR", open_bs_btn:"Apri in Brawl Stars",
  open_store:"Apri Store Supercell", open_link_btn:"Apri Link", watch_video_btn:"Guarda Video",
  status_active:"Attivo", status_expired:"Scaduto", status_soon:"Prossimamente",
  expires_label:"Scade:", no_codes:"Nessun codice in questa categoria.",
  footer_disclaimer:"BrawlQR.com non è affiliato con Supercell. Brawl Stars © Supercell.",
  footer_about:"Info", footer_howto:"Come Fare", footer_privacy:"Privacy",
  dp_howto:"Come riscattare questo premio",
  dp_step1:"Assicurati che Brawl Stars sia installato su questo dispositivo",
  dp_step2:"Scansiona il QR — Brawl Stars si apre automaticamente",
  dp_step3:"Tocca <strong>Riscatta</strong> nel gioco",
  dp_step1_direct:"Tocca il pulsante — Brawl Stars si apre automaticamente",
  dp_step2_direct:"La schermata del premio appare nel gioco",
  dp_step3_direct:"Tocca <strong>Riscatta</strong> per ricevere il premio",
  dp_similar:"Codici Simili", dp_new_codes:"Codici Più Recenti",
  dp_expires:"Scade", dp_status:"Stato", dp_type:"Tipo", dp_reward:"Premio",
  dp_unlock_info:"Questo codice è bloccato. Tocca il pulsante per le istruzioni. Brawl Stars deve essere installato sul dispositivo che usi per scansionare.",
  dp_back:"← Tutti i codici",
  bs_installed_q:"Hai Brawl Stars su questo dispositivo?",
  bs_yes_btn:"Sì — Apri in Brawl Stars", bs_no_btn:"No — Mostra QR",
  all_codes_btn:"Tutti i codici attivi"
},

fr: {
  nav_home:"Codes QR", nav_guide:"Guide", nav_about:"À Propos",
  hero_badge:"Mis à Jour Quotidiennement",
  hero_title:"Tous les Codes QR<br>Brawl Stars au Même Endroit",
  hero_subtitle:"Pins, sprays, icônes, Chaos Drops, pièces, crédits, boîtes, gemmes, bling et bons Supercell gratuits!",
  stat_active:"Codes Actifs", stat_new:"Ajoutés Aujourd'hui", stat_types:"Types de Récompenses",
  filter_all:"Tous", filter_pin:"Pins", filter_spray:"Sprays", filter_icon:"Icônes",
  filter_chaos:"Chaos Drops", filter_coins:"Pièces", filter_credits:"Crédits",
  filter_box:"Boîtes", filter_voucher:"Bons", filter_skin:"Skins",
  filter_gems:"Gemmes", filter_bling:"Bling",
  section_active:"Codes QR Actifs",
  skins_title:"Codes QR Skins — Bientôt",
  skins_desc:"Nous préparons des codes QR pour chaque skin. Soyez le premier informé!",
  howto_title:"Comment racheter",
  step1:"Assurez-vous que <strong>Brawl Stars est installé</strong> sur cet appareil",
  step2:"Ouvrez l'appareil photo ou un scanner QR et scannez — <strong>Brawl Stars s'ouvre automatiquement</strong>",
  step3:"Appuyez sur <strong>Réclamer</strong> dans le jeu pour recevoir votre récompense",
  modal_note:"Utilisation unique par compte. Réclamez vite — les codes expirent!",
  lock_tap:"Appuyer pour déverrouiller", badge_new:"NOUVEAU",
  locked_label:"Verrouillé", locked_reward:"Ce code est verrouillé. Suivez le lien pour le déverrouiller.",
  unlock_btn:"Déverrouiller", close_btn:"Fermer", view_page_btn:"Page Complète",
  scan_btn:"Scanner QR", open_bs_btn:"Ouvrir dans Brawl Stars",
  open_store:"Ouvrir Store Supercell", open_link_btn:"Ouvrir Lien", watch_video_btn:"Regarder Vidéo",
  status_active:"Actif", status_expired:"Expiré", status_soon:"Bientôt",
  expires_label:"Expire:", no_codes:"Pas de codes dans cette catégorie.",
  footer_disclaimer:"BrawlQR.com n'est pas affilié à Supercell. Brawl Stars © Supercell.",
  footer_about:"À Propos", footer_howto:"Guide", footer_privacy:"Confidentialité",
  dp_howto:"Comment réclamer cette récompense",
  dp_step1:"Assurez-vous que Brawl Stars est installé sur cet appareil",
  dp_step2:"Scannez le QR — Brawl Stars s'ouvre automatiquement",
  dp_step3:"Appuyez sur <strong>Réclamer</strong> dans le jeu",
  dp_step1_direct:"Appuyez sur le bouton — Brawl Stars s'ouvre automatiquement",
  dp_step2_direct:"L'écran de récompense apparaît dans le jeu",
  dp_step3_direct:"Appuyez sur <strong>Réclamer</strong>",
  dp_similar:"Codes Similaires", dp_new_codes:"Codes les Plus Récents",
  dp_expires:"Expire", dp_status:"Statut", dp_type:"Type", dp_reward:"Récompense",
  dp_unlock_info:"Ce code est verrouillé. Appuyez pour les instructions. Brawl Stars doit être installé sur l'appareil utilisé pour scanner.",
  dp_back:"← Tous les codes",
  bs_installed_q:"Avez-vous Brawl Stars sur cet appareil?",
  bs_yes_btn:"Oui — Ouvrir dans Brawl Stars", bs_no_btn:"Non — Afficher le QR",
  all_codes_btn:"Tous les codes actifs"
},

de: {
  nav_home:"QR-Codes", nav_guide:"Anleitung", nav_about:"Über uns",
  hero_badge:"Täglich Aktualisiert",
  hero_title:"Alle Brawl Stars QR-Codes<br>an einem Ort",
  hero_subtitle:"Kostenlose Pins, Sprays, Icons, Chaos-Drops, Münzen, Credits, Boxen, Gems, Bling &amp; Store-Gutscheine!",
  stat_active:"Aktive Codes", stat_new:"Heute Hinzugefügt", stat_types:"Belohnungstypen",
  filter_all:"Alle", filter_pin:"Pins", filter_spray:"Sprays", filter_icon:"Icons",
  filter_chaos:"Chaos-Drops", filter_coins:"Münzen", filter_credits:"Credits",
  filter_box:"Boxen", filter_voucher:"Gutscheine", filter_skin:"Skins",
  filter_gems:"Gems", filter_bling:"Bling",
  section_active:"Aktive QR-Codes",
  skins_title:"Skin-QR-Codes — Bald",
  skins_desc:"Wir bereiten QR-Codes für jeden Skin vor. Sei der Erste!",
  howto_title:"So einlösen",
  step1:"Stelle sicher, dass <strong>Brawl Stars installiert</strong> ist",
  step2:"Öffne die Kamera oder einen QR-Scanner und scanne — <strong>Brawl Stars öffnet automatisch</strong>",
  step3:"Tippe auf <strong>Einlösen</strong> im Spiel",
  modal_note:"Einmalig pro Konto. Schnell einlösen — Codes laufen ab!",
  lock_tap:"Zum Entsperren tippen", badge_new:"NEU",
  locked_label:"Gesperrt", locked_reward:"Dieser Code ist gesperrt. Folge dem Link.",
  unlock_btn:"Code Entsperren", close_btn:"Schließen", view_page_btn:"Vollständige Seite",
  scan_btn:"QR Scannen", open_bs_btn:"In Brawl Stars öffnen",
  open_store:"Supercell Store Öffnen", open_link_btn:"Link Öffnen", watch_video_btn:"Video Ansehen",
  status_active:"Aktiv", status_expired:"Abgelaufen", status_soon:"Bald",
  expires_label:"Läuft ab:", no_codes:"Keine Codes in dieser Kategorie.",
  footer_disclaimer:"BrawlQR.com ist nicht mit Supercell verbunden. Brawl Stars © Supercell.",
  footer_about:"Über uns", footer_howto:"Anleitung", footer_privacy:"Datenschutz",
  dp_howto:"So erhältst du diese Belohnung",
  dp_step1:"Stelle sicher, dass Brawl Stars installiert ist",
  dp_step2:"Scanne den QR — Brawl Stars öffnet automatisch",
  dp_step3:"Tippe auf <strong>Einlösen</strong> im Spiel",
  dp_step1_direct:"Tippe den Button — Brawl Stars öffnet automatisch",
  dp_step2_direct:"Der Belohnungsbildschirm erscheint im Spiel",
  dp_step3_direct:"Tippe auf <strong>Einlösen</strong>",
  dp_similar:"Ähnliche Codes", dp_new_codes:"Neueste Codes",
  dp_expires:"Läuft ab", dp_status:"Status", dp_type:"Typ", dp_reward:"Belohnung",
  dp_unlock_info:"Dieser Code ist gesperrt. Tippe für Anweisungen. Brawl Stars muss auf dem Gerät installiert sein.",
  dp_back:"← Alle Codes",
  bs_installed_q:"Hast du Brawl Stars auf diesem Gerät?",
  bs_yes_btn:"Ja — In Brawl Stars öffnen", bs_no_btn:"Nein — QR anzeigen",
  all_codes_btn:"Alle aktiven Codes"
},

es: {
  nav_home:"Códigos QR", nav_guide:"Guía", nav_about:"Acerca de",
  hero_badge:"Actualizado Diariamente",
  hero_title:"Todos los Códigos QR<br>de Brawl Stars en un Lugar",
  hero_subtitle:"Pins, sprays, iconos, Chaos Drops, monedas, créditos, cajas, gemas, bling &amp; vouchers gratis!",
  stat_active:"Códigos Activos", stat_new:"Añadidos Hoy", stat_types:"Tipos de Premio",
  filter_all:"Todos", filter_pin:"Pins", filter_spray:"Sprays", filter_icon:"Iconos",
  filter_chaos:"Chaos Drops", filter_coins:"Monedas", filter_credits:"Créditos",
  filter_box:"Cajas", filter_voucher:"Vouchers", filter_skin:"Skins",
  filter_gems:"Gemas", filter_bling:"Bling",
  section_active:"Códigos QR Activos",
  skins_title:"Códigos QR de Skins — Próximamente",
  skins_desc:"Preparando códigos QR para cada skin. ¡Sé el primero!",
  howto_title:"Cómo canjear",
  step1:"Asegúrate de que <strong>Brawl Stars esté instalado</strong> en este dispositivo",
  step2:"Abre la cámara o un escáner QR y escanea — <strong>Brawl Stars se abre automáticamente</strong>",
  step3:"Toca <strong>Reclamar</strong> dentro del juego",
  modal_note:"Uso único por cuenta. ¡Canjea rápido — los códigos expiran!",
  lock_tap:"Toca para desbloquear", badge_new:"NUEVO",
  locked_label:"Bloqueado", locked_reward:"Este código está bloqueado. Sigue el enlace.",
  unlock_btn:"Desbloquear", close_btn:"Cerrar", view_page_btn:"Página Completa",
  scan_btn:"Escanear QR", open_bs_btn:"Abrir en Brawl Stars",
  open_store:"Abrir Tienda Supercell", open_link_btn:"Abrir Enlace", watch_video_btn:"Ver Vídeo",
  status_active:"Activo", status_expired:"Expirado", status_soon:"Próximamente",
  expires_label:"Expira:", no_codes:"No hay códigos en esta categoría.",
  footer_disclaimer:"BrawlQR.com no está afiliado a Supercell. Brawl Stars © Supercell.",
  footer_about:"Acerca de", footer_howto:"Guía", footer_privacy:"Privacidad",
  dp_howto:"Cómo reclamar esta recompensa",
  dp_step1:"Asegúrate de que Brawl Stars esté instalado",
  dp_step2:"Escanea el QR — Brawl Stars se abre automáticamente",
  dp_step3:"Toca <strong>Reclamar</strong> en el juego",
  dp_step1_direct:"Toca el botón — Brawl Stars se abre automáticamente",
  dp_step2_direct:"La pantalla de recompensa aparece en el juego",
  dp_step3_direct:"Toca <strong>Reclamar</strong>",
  dp_similar:"Códigos Similares", dp_new_codes:"Códigos Más Recientes",
  dp_expires:"Expira", dp_status:"Estado", dp_type:"Tipo", dp_reward:"Premio",
  dp_unlock_info:"Este código está bloqueado. Sigue el enlace para desbloquearlo. Brawl Stars debe estar instalado.",
  dp_back:"← Todos los códigos",
  bs_installed_q:"¿Tienes Brawl Stars en este dispositivo?",
  bs_yes_btn:"Sí — Abrir en Brawl Stars", bs_no_btn:"No — Mostrar QR",
  all_codes_btn:"Todos los códigos activos"
},

pt: {
  nav_home:"Códigos QR", nav_guide:"Como Fazer", nav_about:"Sobre",
  hero_badge:"Atualizado Diariamente",
  hero_title:"Todos os Códigos QR<br>de Brawl Stars num Só Lugar",
  hero_subtitle:"Pins, sprays, ícones, Chaos Drops, moedas, créditos, caixas, gemas, bling &amp; vouchers grátis!",
  stat_active:"Códigos Ativos", stat_new:"Adicionados Hoje", stat_types:"Tipos de Recompensa",
  filter_all:"Todos", filter_pin:"Pins", filter_spray:"Sprays", filter_icon:"Ícones",
  filter_chaos:"Chaos Drops", filter_coins:"Moedas", filter_credits:"Créditos",
  filter_box:"Caixas", filter_voucher:"Vouchers", filter_skin:"Skins",
  filter_gems:"Gemas", filter_bling:"Bling",
  section_active:"Códigos QR Ativos",
  skins_title:"Códigos QR de Skins — Em Breve",
  skins_desc:"A preparar códigos QR para cada skin. Seja o primeiro!",
  howto_title:"Como resgatar",
  step1:"Certifique-se de que <strong>Brawl Stars está instalado</strong> neste dispositivo",
  step2:"Abra a câmara ou um leitor QR e escaneie — <strong>Brawl Stars abre automaticamente</strong>",
  step3:"Toque em <strong>Resgatar</strong> dentro do jogo",
  modal_note:"Uso único por conta. Resgate rápido — os códigos expiram!",
  lock_tap:"Toque para desbloquear", badge_new:"NOVO",
  locked_label:"Bloqueado", locked_reward:"Este código está bloqueado. Siga o link.",
  unlock_btn:"Desbloquear", close_btn:"Fechar", view_page_btn:"Página Completa",
  scan_btn:"Escanear QR", open_bs_btn:"Abrir no Brawl Stars",
  open_store:"Abrir Loja Supercell", open_link_btn:"Abrir Link", watch_video_btn:"Ver Vídeo",
  status_active:"Ativo", status_expired:"Expirado", status_soon:"Em Breve",
  expires_label:"Expira:", no_codes:"Nenhum código nesta categoria.",
  footer_disclaimer:"BrawlQR.com não é afiliado à Supercell. Brawl Stars © Supercell.",
  footer_about:"Sobre", footer_howto:"Como Fazer", footer_privacy:"Privacidade",
  dp_howto:"Como resgatar esta recompensa",
  dp_step1:"Certifique-se de que Brawl Stars está instalado",
  dp_step2:"Escaneie o QR — Brawl Stars abre automaticamente",
  dp_step3:"Toque em <strong>Resgatar</strong> no jogo",
  dp_step1_direct:"Toque no botão — Brawl Stars abre automaticamente",
  dp_step2_direct:"O ecrã de recompensa aparece no jogo",
  dp_step3_direct:"Toque em <strong>Resgatar</strong>",
  dp_similar:"Códigos Similares", dp_new_codes:"Códigos Mais Recentes",
  dp_expires:"Expira", dp_status:"Estado", dp_type:"Tipo", dp_reward:"Recompensa",
  dp_unlock_info:"Este código está bloqueado. Siga as instruções. Brawl Stars deve estar instalado.",
  dp_back:"← Todos os códigos",
  bs_installed_q:"Tem Brawl Stars neste dispositivo?",
  bs_yes_btn:"Sim — Abrir no Brawl Stars", bs_no_btn:"Não — Mostrar QR",
  all_codes_btn:"Todos os códigos ativos"
},

ro: {
  nav_home:"Coduri QR", nav_guide:"Ghid", nav_about:"Despre",
  hero_badge:"Actualizat Zilnic",
  hero_title:"Toate Codurile QR<br>Brawl Stars într-un Singur Loc",
  hero_subtitle:"Pini, spray-uri, iconițe, Chaos Drops, monede, credite, cutii, gems, bling &amp; vouchere gratuite!",
  stat_active:"Coduri Active", stat_new:"Adăugate Azi", stat_types:"Tipuri Recompensă",
  filter_all:"Toate", filter_pin:"Pini", filter_spray:"Spray-uri", filter_icon:"Iconițe",
  filter_chaos:"Chaos Drops", filter_coins:"Monede", filter_credits:"Credite",
  filter_box:"Cutii", filter_voucher:"Vouchere", filter_skin:"Skinuri",
  filter_gems:"Gems", filter_bling:"Bling",
  section_active:"Coduri QR Active",
  skins_title:"Coduri QR Skinuri — În Curând",
  skins_desc:"Pregătim coduri QR pentru fiecare skin. Fii primul care află!",
  howto_title:"Cum revendici",
  step1:"Asigură-te că <strong>Brawl Stars este instalat</strong> pe acest dispozitiv",
  step2:"Deschide camera sau un scanner QR și scanează — <strong>Brawl Stars se deschide automat</strong>",
  step3:"Apasă <strong>Revendică</strong> în joc pentru a primi recompensa",
  modal_note:"Folosit o singură dată per cont. Revendică rapid — codurile expiră!",
  lock_tap:"Apasă pentru deblocare", badge_new:"NOU",
  locked_label:"Blocat", locked_reward:"Acest cod este blocat. Urmează link-ul pentru a-l debloca.",
  unlock_btn:"Deblochează Codul", close_btn:"Închide", view_page_btn:"Pagina Completă",
  scan_btn:"Scanează QR", open_bs_btn:"Deschide în Brawl Stars",
  open_store:"Deschide Store Supercell", open_link_btn:"Deschide Link", watch_video_btn:"Vizionează Video",
  status_active:"Activ", status_expired:"Expirat", status_soon:"În Curând",
  expires_label:"Expiră:", no_codes:"Niciun cod în această categorie.",
  footer_disclaimer:"BrawlQR.com nu este afiliat cu Supercell. Brawl Stars © Supercell.",
  footer_about:"Despre", footer_howto:"Ghid", footer_privacy:"Confidențialitate",
  dp_howto:"Cum revendici această recompensă",
  dp_step1:"Asigură-te că Brawl Stars este instalat pe acest dispozitiv",
  dp_step2:"Scanează codul QR — Brawl Stars se deschide automat",
  dp_step3:"Apasă <strong>Revendică</strong> în joc",
  dp_step1_direct:"Apasă butonul — Brawl Stars se deschide automat",
  dp_step2_direct:"Ecranul de recompensă apare în joc",
  dp_step3_direct:"Apasă <strong>Revendică</strong> pentru a primi recompensa",
  dp_similar:"Coduri Similare", dp_new_codes:"Cele Mai Noi Coduri",
  dp_expires:"Expiră", dp_status:"Status", dp_type:"Tip", dp_reward:"Recompensă",
  dp_unlock_info:"Acest cod este blocat. Apasă butonul și urmează instrucțiunile. Brawl Stars trebuie instalat pe dispozitivul cu care scanezi.",
  dp_back:"← Toate codurile",
  bs_installed_q:"Ai Brawl Stars pe acest dispozitiv?",
  bs_yes_btn:"Da — Deschide în Brawl Stars", bs_no_btn:"Nu — Arată codul QR",
  all_codes_btn:"Toate codurile active"
}

};

window.LANGUAGES    = LANGUAGES;
window.TRANSLATIONS = TRANSLATIONS;

var _lang = "en";

function getT() {
  var base = TRANSLATIONS["en"] || {};
  var cur = TRANSLATIONS[_lang];
  if (!cur || cur === base) return base;
  /* fallback pe engleză pentru cheile lipsă (ex. en-US, pt-BR incomplete)
     → niciodată text rămas din limba anterioară */
  return Object.assign({}, base, cur);
}

function applyI18n() {
  var t = getT();
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll("[data-i18n-text]").forEach(function(el) {
    var key = el.dataset.i18nText;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll(".card-status-text[data-status]").forEach(function(el) {
    var s = el.dataset.status;
    var map = { active:t.status_active||"Active", expired:t.status_expired||"Expired", soon:t.status_soon||"Coming Soon" };
    el.textContent = map[s] || s;
  });
  document.querySelectorAll(".lock-text[data-i18n='lock_tap']").forEach(function(el){
    el.textContent = t.lock_tap || "Tap to unlock";
  });
  document.querySelectorAll(".new-badge[data-i18n='badge_new']").forEach(function(el){
    el.textContent = t.badge_new || "NEW";
  });
  document.documentElement.dir = (_lang === "ar") ? "rtl" : "ltr";
}

function _updateSwitcherUI() {
  var meta = LANGUAGES.find(function(l){ return l.code === _lang; }) || LANGUAGES[0];
  var flagEl = document.getElementById("currentFlag");
  var nameEl = document.getElementById("currentLang");
  if (flagEl) flagEl.textContent = meta.flag;
  if (nameEl) nameEl.textContent = meta.code.toUpperCase().slice(0,2);
  document.querySelectorAll(".lang-option").forEach(function(btn){
    btn.classList.toggle("active", btn.dataset.lang === _lang);
  });
  document.documentElement.lang = _lang;
}

function applyLang(lang) {
  if (!TRANSLATIONS[lang]) lang = "en";
  _lang = lang;
  _updateSwitcherUI();
  /* requestAnimationFrame: batch toate DOM writes într-un frame → zero forced reflow */
  requestAnimationFrame(function() {
    applyI18n();
    if (typeof renderGrid === "function") {
      var fb = document.querySelector(".filter-btn.active");
      renderGrid(fb && fb.dataset.filter ? fb.dataset.filter : "all");
    }
  });
}

function detectLang() {
  var saved = localStorage.getItem("brawlqr_lang");
  if (saved && TRANSLATIONS[saved]) return saved;
  var bl = (navigator.language || navigator.userLanguage || "en");
  if (TRANSLATIONS[bl]) return bl;
  if (bl === "en-US" || bl === "en_US") return "en-US";
  var short = bl.split("-")[0];
  if (TRANSLATIONS[short]) return short;
  return "en";
}

function ipAllowed() {
  /* GDPR: apelul către ipapi.co (terț) e permis DOAR după consimțământ analytics.
     Fără consimțământ -> detectare limbă locală (navigator.language), fără rețea. */
  try {
    var c = (window.BrawlQRConsent && window.BrawlQRConsent.getConsent && window.BrawlQRConsent.getConsent());
    if (!c) c = JSON.parse(localStorage.getItem("brawlqr_consent_v3") || "null");
    return !!(c && c.analytics);
  } catch (e) { return false; }
}

function detectLangByIP() {
  var saved = localStorage.getItem("brawlqr_lang");
  if (saved && TRANSLATIONS[saved]) { applyLang(saved); return; }

  /* Cache IP result 7 zile — evită 429 și reduce latența */
  var CACHE_KEY = "brawlqr_ip_lang";
  var CACHE_TTL = 7 * 24 * 60 * 60 * 1000;
  try {
    var cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (cached && cached.lang && cached.ts && (Date.now() - cached.ts) < CACHE_TTL) {
      applyLang(cached.lang);
      return;
    }
  } catch(e) {}

  /* GDPR: niciun apel IP către terț până la consimțământ analytics. */
  if (!ipAllowed()) { applyLang(detectLang()); return; }

  var done = false;
  var fallback = setTimeout(function(){ if(!done){ done=true; applyLang(detectLang()); } }, 3000);
  fetch("https://ipapi.co/json/")
    .then(function(r){ return r.json(); })
    .then(function(d){
      if (done) return; done=true; clearTimeout(fallback);
      var cc = d.country_code || "";
      /* US gets en-US specifically */
      if (cc === "US") {
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({lang:"en-US", ts:Date.now()})); } catch(e) {}
        applyLang("en-US"); return;
      }
      var match = LANGUAGES.find(function(l){ return l.countries && l.countries.indexOf(cc) !== -1; });
      var lang = match ? match.code : detectLang();
      try { localStorage.setItem(CACHE_KEY, JSON.stringify({lang:lang, ts:Date.now()})); } catch(e) {}
      applyLang(lang);
    })
    .catch(function(){ if(!done){ done=true; clearTimeout(fallback); applyLang(detectLang()); } });
}

function buildLangDropdown() {
  var dd = document.getElementById("langDropdown");
  if (!dd) return;
  dd.innerHTML = "";
  LANGUAGES.forEach(function(l) {
    var btn = document.createElement("button");
    btn.className = "lang-option";
    btn.dataset.lang = l.code;
    btn.innerHTML = '<span style="font-size:16px">' + l.flag + '</span> ' + l.name;
    btn.addEventListener("click", function(){
      localStorage.setItem("brawlqr_lang", l.code);
      applyLang(l.code);
      dd.classList.remove("open");
    });
    dd.appendChild(btn);
  });
}

window.getT              = getT;
window.applyI18n         = applyI18n;
window.applyLang         = applyLang;
window.buildLangDropdown = buildLangDropdown;
window.detectLangByIP    = detectLangByIP;
window.getCurrentLang    = function(){ return _lang; };
window.LANGUAGES         = LANGUAGES;
window.TRANSLATIONS      = TRANSLATIONS;

/* După ce userul acceptă (analytics), rafinează limba prin IP — fără reload.
   Doar dacă nu și-a ales deja manual o limbă. */
window.addEventListener("brawlqr:consent", function () {
  try {
    var saved = localStorage.getItem("brawlqr_lang");
    if (!saved && ipAllowed()) detectLangByIP();
  } catch (e) {}
});
