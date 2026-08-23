/**
 * BrawlQR.com — i18n Extra Steps Patch
 *
 * Adds missing translation keys for:
 *   - Video page steps (dp_step1_video, dp_step2_video, dp_step3_video)
 *   - Store page steps (dp_step1_store, dp_step2_store, dp_step3_store)
 *
 * Load AFTER i18n.js on every page:
 *   root:       <script src="js/i18n-extra-steps.js"></script>
 *   pages/:     <script src="../js/i18n-extra-steps.js"></script>
 *   pages/sub/: <script src="../../js/i18n-extra-steps.js"></script>
 */
(function() {
  if (typeof TRANSLATIONS === "undefined") return;

  var EXTRA = {
    "en":    {
      dp_step1_video:"Tap <strong>Watch Video</strong> above",
      dp_step2_video:"Follow the <strong>instructions shown inside the video</strong>",
      dp_step3_video:"Complete the steps to <strong>claim your reward</strong>",
      dp_step1_store:"Tap <strong>Open Supercell Store</strong> above",
      dp_step2_store:"Log in with your <strong>Supercell ID</strong> on the store page",
      dp_step3_store:"The reward or discount is <strong>applied automatically</strong>"
    },
    "en-US": {
      dp_step1_video:"Tap <strong>Watch Video</strong> above",
      dp_step2_video:"Follow the <strong>instructions shown inside the video</strong>",
      dp_step3_video:"Complete the steps to <strong>claim your reward</strong>",
      dp_step1_store:"Tap <strong>Open Supercell Store</strong> above",
      dp_step2_store:"Log in with your <strong>Supercell ID</strong> on the store page",
      dp_step3_store:"The reward or discount is <strong>applied automatically</strong>"
    },
    "it": {
      dp_step1_video:"Tocca <strong>Guarda Video</strong> sopra",
      dp_step2_video:"Segui le <strong>istruzioni mostrate nel video</strong>",
      dp_step3_video:"Completa i passaggi per <strong>riscattare il premio</strong>",
      dp_step1_store:"Tocca <strong>Apri Store Supercell</strong> sopra",
      dp_step2_store:"Accedi con il tuo <strong>Supercell ID</strong> nella pagina del negozio",
      dp_step3_store:"Il premio o lo sconto viene <strong>applicato automaticamente</strong>"
    },
    "fr": {
      dp_step1_video:"Appuyez sur <strong>Regarder Vidéo</strong> ci-dessus",
      dp_step2_video:"Suivez les <strong>instructions montrées dans la vidéo</strong>",
      dp_step3_video:"Complétez les étapes pour <strong>réclamer votre récompense</strong>",
      dp_step1_store:"Appuyez sur <strong>Ouvrir Store Supercell</strong> ci-dessus",
      dp_step2_store:"Connectez-vous avec votre <strong>Supercell ID</strong> sur la page du magasin",
      dp_step3_store:"La récompense ou la réduction est <strong>appliquée automatiquement</strong>"
    },
    "de": {
      dp_step1_video:"Tippe auf <strong>Video Ansehen</strong> oben",
      dp_step2_video:"Folge den <strong>im Video gezeigten Anweisungen</strong>",
      dp_step3_video:"Schließe die Schritte ab um deine <strong>Belohnung einzulösen</strong>",
      dp_step1_store:"Tippe auf <strong>Supercell Store Öffnen</strong> oben",
      dp_step2_store:"Melde dich mit deiner <strong>Supercell ID</strong> an",
      dp_step3_store:"Die Belohnung oder der Rabatt wird <strong>automatisch angewendet</strong>"
    },
    "es": {
      dp_step1_video:"Toca <strong>Ver Vídeo</strong> arriba",
      dp_step2_video:"Sigue las <strong>instrucciones mostradas en el vídeo</strong>",
      dp_step3_video:"Completa los pasos para <strong>reclamar tu recompensa</strong>",
      dp_step1_store:"Toca <strong>Abrir Tienda Supercell</strong> arriba",
      dp_step2_store:"Inicia sesión con tu <strong>Supercell ID</strong> en la tienda",
      dp_step3_store:"La recompensa o el descuento se <strong>aplica automáticamente</strong>"
    },
    "es-MX": {
      dp_step1_video:"Toca <strong>Ver Vídeo</strong> arriba",
      dp_step2_video:"Sigue las <strong>instrucciones mostradas en el vídeo</strong>",
      dp_step3_video:"Completa los pasos para <strong>reclamar tu recompensa</strong>",
      dp_step1_store:"Toca <strong>Abrir Tienda Supercell</strong> arriba",
      dp_step2_store:"Inicia sesión con tu <strong>Supercell ID</strong> en la tienda",
      dp_step3_store:"La recompensa o el descuento se <strong>aplica automáticamente</strong>"
    },
    "pt": {
      dp_step1_video:"Toque em <strong>Ver Vídeo</strong> acima",
      dp_step2_video:"Siga as <strong>instruções mostradas no vídeo</strong>",
      dp_step3_video:"Conclua os passos para <strong>resgatar a sua recompensa</strong>",
      dp_step1_store:"Toque em <strong>Abrir Loja Supercell</strong> acima",
      dp_step2_store:"Inicie sessão com o seu <strong>Supercell ID</strong> na loja",
      dp_step3_store:"A recompensa ou desconto é <strong>aplicado automaticamente</strong>"
    },
    "pt-BR": {
      dp_step1_video:"Toque em <strong>Ver Vídeo</strong> acima",
      dp_step2_video:"Siga as <strong>instruções mostradas no vídeo</strong>",
      dp_step3_video:"Conclua os passos para <strong>resgatar sua recompensa</strong>",
      dp_step1_store:"Toque em <strong>Abrir Loja Supercell</strong> acima",
      dp_step2_store:"Faça login com seu <strong>Supercell ID</strong> na loja",
      dp_step3_store:"A recompensa ou desconto é <strong>aplicado automaticamente</strong>"
    },
    "ro": {
      dp_step1_video:"Apasă <strong>Vizionează Video</strong> de mai sus",
      dp_step2_video:"Urmează <strong>instrucțiunile din video</strong>",
      dp_step3_video:"Finalizează pașii pentru a <strong>revendica recompensa</strong>",
      dp_step1_store:"Apasă <strong>Deschide Store Supercell</strong> de mai sus",
      dp_step2_store:"Conectează-te cu <strong>Supercell ID</strong> pe pagina magazinului",
      dp_step3_store:"Recompensa sau reducerea se <strong>aplică automat</strong>"
    },
    "zh": {
      dp_step1_video:"点击上方<strong>观看视频</strong>",
      dp_step2_video:"按照<strong>视频中显示的说明</strong>操作",
      dp_step3_video:"完成步骤以<strong>领取奖励</strong>",
      dp_step1_store:"点击上方<strong>打开Supercell商店</strong>",
      dp_step2_store:"在商店页面用你的<strong>Supercell ID</strong>登录",
      dp_step3_store:"奖励或折扣将<strong>自动应用</strong>"
    },
    "zh-TW": {
      dp_step1_video:"點擊上方<strong>觀看影片</strong>",
      dp_step2_video:"按照<strong>影片中顯示的說明</strong>操作",
      dp_step3_video:"完成步驟以<strong>領取獎勵</strong>",
      dp_step1_store:"點擊上方<strong>開啟Supercell商店</strong>",
      dp_step2_store:"在商店頁面用你的<strong>Supercell ID</strong>登入",
      dp_step3_store:"獎勵或折扣將<strong>自動套用</strong>"
    },
    "ja": {
      dp_step1_video:"上の<strong>動画を見る</strong>をタップ",
      dp_step2_video:"<strong>動画内に表示される手順</strong>に従う",
      dp_step3_video:"手順を完了して<strong>報酬を受け取る</strong>",
      dp_step1_store:"上の<strong>Supercellストアを開く</strong>をタップ",
      dp_step2_store:"ストアページで<strong>Supercell ID</strong>でログイン",
      dp_step3_store:"報酬または割引が<strong>自動的に適用</strong>されます"
    },
    "ko": {
      dp_step1_video:"위의 <strong>동영상 보기</strong>를 탭",
      dp_step2_video:"<strong>동영상에 표시된 지침</strong>을 따르세요",
      dp_step3_video:"단계를 완료하여 <strong>보상을 받으세요</strong>",
      dp_step1_store:"위의 <strong>Supercell 스토어 열기</strong>를 탭",
      dp_step2_store:"스토어 페이지에서 <strong>Supercell ID</strong>로 로그인",
      dp_step3_store:"보상 또는 할인이 <strong>자동으로 적용</strong>됩니다"
    },
    "ar": {
      dp_step1_video:"اضغط على <strong>مشاهدة الفيديو</strong> أعلاه",
      dp_step2_video:"اتبع <strong>التعليمات الظاهرة في الفيديو</strong>",
      dp_step3_video:"أكمل الخطوات <strong>للحصول على مكافأتك</strong>",
      dp_step1_store:"اضغط على <strong>فتح متجر Supercell</strong> أعلاه",
      dp_step2_store:"سجل دخولك بـ <strong>Supercell ID</strong> في صفحة المتجر",
      dp_step3_store:"يتم تطبيق المكافأة أو الخصم <strong>تلقائياً</strong>"
    },
    "no": {
      dp_step1_video:"Trykk på <strong>Se video</strong> ovenfor",
      dp_step2_video:"Følg <strong>instruksjonene vist i videoen</strong>",
      dp_step3_video:"Fullfør stegene for å <strong>kreve belønningen din</strong>",
      dp_step1_store:"Trykk på <strong>Åpne Supercell Store</strong> ovenfor",
      dp_step2_store:"Logg inn med din <strong>Supercell ID</strong> i butikken",
      dp_step3_store:"Belønningen eller rabatten <strong>brukes automatisk</strong>"
    },
    "sv": {
      dp_step1_video:"Tryck på <strong>Se video</strong> ovan",
      dp_step2_video:"Följ <strong>instruktionerna i videon</strong>",
      dp_step3_video:"Slutför stegen för att <strong>hämta din belöning</strong>",
      dp_step1_store:"Tryck på <strong>Öppna Supercell Store</strong> ovan",
      dp_step2_store:"Logga in med ditt <strong>Supercell ID</strong> i butiken",
      dp_step3_store:"Belöningen eller rabatten <strong>tillämpas automatiskt</strong>"
    },
    "da": {
      dp_step1_video:"Tryk på <strong>Se video</strong> ovenfor",
      dp_step2_video:"Følg <strong>instruktionerne vist i videoen</strong>",
      dp_step3_video:"Fuldfør trinene for at <strong>hente din belønning</strong>",
      dp_step1_store:"Tryk på <strong>Åbn Supercell Store</strong> ovenfor",
      dp_step2_store:"Log ind med dit <strong>Supercell ID</strong> i butikken",
      dp_step3_store:"Belønningen eller rabatten <strong>anvendes automatisk</strong>"
    },
    "nl": {
      dp_step1_video:"Tik op <strong>Video bekijken</strong> hierboven",
      dp_step2_video:"Volg de <strong>instructies in de video</strong>",
      dp_step3_video:"Voltooi de stappen om je <strong>beloning te claimen</strong>",
      dp_step1_store:"Tik op <strong>Supercell Store openen</strong> hierboven",
      dp_step2_store:"Log in met je <strong>Supercell ID</strong> in de winkel",
      dp_step3_store:"De beloning of korting wordt <strong>automatisch toegepast</strong>"
    },
    "hr": {
      dp_step1_video:"Tapni <strong>Pogledaj video</strong> gore",
      dp_step2_video:"Prati <strong>upute prikazane u videu</strong>",
      dp_step3_video:"Dovrši korake da <strong>preuzmete nagradu</strong>",
      dp_step1_store:"Tapni <strong>Otvori Supercell Store</strong> gore",
      dp_step2_store:"Prijavi se sa svojim <strong>Supercell ID</strong> u trgovini",
      dp_step3_store:"Nagrada ili popust se <strong>primjenjuje automatski</strong>"
    },
    "tr": {
      dp_step1_video:"Yukarıdaki <strong>Videoyu İzle</strong>'ye dokun",
      dp_step2_video:"<strong>Videoda gösterilen talimatları</strong> takip et",
      dp_step3_video:"Adımları tamamlayarak <strong>ödülünü al</strong>",
      dp_step1_store:"Yukarıdaki <strong>Supercell Store'u Aç</strong>'a dokun",
      dp_step2_store:"Mağaza sayfasında <strong>Supercell ID</strong>'nle giriş yap",
      dp_step3_store:"Ödül veya indirim <strong>otomatik olarak uygulanır</strong>"
    },
    "th": {
      dp_step1_video:"แตะ <strong>ดูวิดีโอ</strong> ด้านบน",
      dp_step2_video:"ทำตาม <strong>คำแนะนำที่แสดงในวิดีโอ</strong>",
      dp_step3_video:"ทำตามขั้นตอนเพื่อ <strong>รับรางวัลของคุณ</strong>",
      dp_step1_store:"แตะ <strong>เปิด Supercell Store</strong> ด้านบน",
      dp_step2_store:"เข้าสู่ระบบด้วย <strong>Supercell ID</strong> ของคุณในหน้าร้านค้า",
      dp_step3_store:"รางวัลหรือส่วนลดจะ <strong>ถูกใช้โดยอัตโนมัติ</strong>"
    },
    "id": {
      dp_step1_video:"Ketuk <strong>Tonton Video</strong> di atas",
      dp_step2_video:"Ikuti <strong>petunjuk yang ditampilkan dalam video</strong>",
      dp_step3_video:"Selesaikan langkah-langkah untuk <strong>mengklaim hadiahmu</strong>",
      dp_step1_store:"Ketuk <strong>Buka Supercell Store</strong> di atas",
      dp_step2_store:"Masuk dengan <strong>Supercell ID</strong>-mu di halaman toko",
      dp_step3_store:"Hadiah atau diskon <strong>diterapkan secara otomatis</strong>"
    },
    "vi": {
      dp_step1_video:"Nhấn <strong>Xem video</strong> ở trên",
      dp_step2_video:"Làm theo <strong>hướng dẫn được hiển thị trong video</strong>",
      dp_step3_video:"Hoàn thành các bước để <strong>nhận phần thưởng</strong>",
      dp_step1_store:"Nhấn <strong>Mở Supercell Store</strong> ở trên",
      dp_step2_store:"Đăng nhập bằng <strong>Supercell ID</strong> của bạn trong cửa hàng",
      dp_step3_store:"Phần thưởng hoặc giảm giá được <strong>áp dụng tự động</strong>"
    },
    "pl": {
      dp_step1_video:"Stuknij <strong>Obejrzyj wideo</strong> powyżej",
      dp_step2_video:"Postępuj zgodnie z <strong>instrukcjami pokazanymi w filmie</strong>",
      dp_step3_video:"Wykonaj kroki, aby <strong>odebrać nagrodę</strong>",
      dp_step1_store:"Stuknij <strong>Otwórz sklep Supercell</strong> powyżej",
      dp_step2_store:"Zaloguj się swoim <strong>Supercell ID</strong> w sklepie",
      dp_step3_store:"Nagroda lub zniżka zostaje <strong>zastosowana automatycznie</strong>"
    },
    "cs": {
      dp_step1_video:"Klepni na <strong>Sledovat video</strong> výše",
      dp_step2_video:"Postupuj podle <strong>pokynů zobrazených ve videu</strong>",
      dp_step3_video:"Dokonči kroky a <strong>vezmi svou odměnu</strong>",
      dp_step1_store:"Klepni na <strong>Otevřít Supercell Store</strong> výše",
      dp_step2_store:"Přihlas se svým <strong>Supercell ID</strong> v obchodě",
      dp_step3_store:"Odměna nebo sleva se <strong>použije automaticky</strong>"
    },
    "sk": {
      dp_step1_video:"Klepni na <strong>Sledovať video</strong> vyššie",
      dp_step2_video:"Postupuj podľa <strong>pokynov zobrazených vo videu</strong>",
      dp_step3_video:"Dokonči kroky a <strong>vezmi svoju odmenu</strong>",
      dp_step1_store:"Klepni na <strong>Otvoriť Supercell Store</strong> vyššie",
      dp_step2_store:"Prihlás sa svojím <strong>Supercell ID</strong> v obchode",
      dp_step3_store:"Odmena alebo zľava sa <strong>použije automaticky</strong>"
    },
    "sl": {
      dp_step1_video:"Dotakni se <strong>Oglej video</strong> zgoraj",
      dp_step2_video:"Sledi <strong>navodilom prikazanim v videu</strong>",
      dp_step3_video:"Dokonči korake in <strong>uveljavi nagrado</strong>",
      dp_step1_store:"Dotakni se <strong>Odpri Supercell Store</strong> zgoraj",
      dp_step2_store:"Prijavi se s svojim <strong>Supercell ID</strong> v trgovini",
      dp_step3_store:"Nagrada ali popust se <strong>uporabi samodejno</strong>"
    },
    "et": {
      dp_step1_video:"Toksake <strong>Vaata videot</strong> üleval",
      dp_step2_video:"Järgi <strong>videos näidatud juhiseid</strong>",
      dp_step3_video:"Lõpeta sammud ja <strong>võta preemia</strong>",
      dp_step1_store:"Toksake <strong>Ava Supercell Store</strong> üleval",
      dp_step2_store:"Logi sisse oma <strong>Supercell ID</strong>-ga poes",
      dp_step3_store:"Preemia või allahindlus <strong>rakendatakse automaatselt</strong>"
    },
    "fi": {
      dp_step1_video:"Napauta <strong>Katso video</strong> yllä",
      dp_step2_video:"Seuraa <strong>videossa näytettyjä ohjeita</strong>",
      dp_step3_video:"Suorita vaiheet <strong>lunastaaksesi palkkion</strong>",
      dp_step1_store:"Napauta <strong>Avaa Supercell Store</strong> yllä",
      dp_step2_store:"Kirjaudu sisään <strong>Supercell ID</strong>:lläsi kaupassa",
      dp_step3_store:"Palkkio tai alennus <strong>otetaan käyttöön automaattisesti</strong>"
    },
    "hu": {
      dp_step1_video:"Érintsd meg a <strong>Videó megtekintése</strong> gombot fent",
      dp_step2_video:"Kövesd a <strong>videóban látható utasításokat</strong>",
      dp_step3_video:"Végezd el a lépéseket a <strong>jutalom megszerzéséhez</strong>",
      dp_step1_store:"Érintsd meg a <strong>Supercell Store megnyitása</strong> gombot fent",
      dp_step2_store:"Jelentkezz be a <strong>Supercell ID</strong>-ddal az áruházban",
      dp_step3_store:"A jutalom vagy kedvezmény <strong>automatikusan alkalmazásra kerül</strong>"
    }
  };

  // Apply all extra keys to existing TRANSLATIONS
  Object.keys(EXTRA).forEach(function(lang) {
    if (TRANSLATIONS[lang]) {
      Object.keys(EXTRA[lang]).forEach(function(key) {
        TRANSLATIONS[lang][key] = EXTRA[lang][key];
      });
    }
  });

})();
