const asset = (name) => `assets/${name}.png`;

const baseStats = {
  cesaret: 42,
  bilgelik: 26,
  sevgi: 48,
  guc: 34,
};

const statMeta = {
  cesaret: { label: "Cesaret", color: "#f6c453" },
  bilgelik: { label: "Bilgelik", color: "#6db7ff" },
  sevgi: { label: "Sevgi", color: "#e85c74" },
  guc: { label: "Güç", color: "#79d77d" },
};

const spriteModels = {
  merve: {
    kind: "human",
    skin: "#f0a07c",
    hair: "#15131d",
    shirt: "#d43c55",
    pants: "#293047",
    shoes: "#111522",
    accent: "#f7c957",
    glasses: true,
    hairStyle: "bob",
  },
  anne: {
    kind: "human",
    skin: "#efa073",
    hair: "#9b2534",
    shirt: "#c6313f",
    pants: "#181827",
    shoes: "#111522",
    accent: "#1f2030",
    hairStyle: "short",
  },
  baba: {
    kind: "human",
    skin: "#f2b082",
    hair: "#f2b082",
    shirt: "#e9edf5",
    pants: "#3569a7",
    shoes: "#17213a",
    accent: "#1d3c78",
    bald: true,
  },
  oguz: {
    kind: "human",
    skin: "#e99a67",
    hair: "#9c6235",
    shirt: "#f1dfb6",
    pants: "#37465f",
    shoes: "#111522",
    accent: "#2a3149",
    glasses: true,
    beard: true,
    hairStyle: "crop",
  },
  kiz: {
    kind: "human",
    skin: "#efa17d",
    hair: "#241827",
    shirt: "#4e7bd4",
    pants: "#24365c",
    shoes: "#111522",
    accent: "#f3a64f",
    hairStyle: "long",
  },
  fiko: {
    kind: "cat",
    fur: "#f2f3f0",
    patch: "#6c717a",
    stripe: "#484b54",
    eye: "#75d33f",
    collar: "#ef5b2f",
    bow: "#f5b21b",
  },
};

const scenes = [
  {
    id: "ayrilis",
    level: "LEVEL 01",
    title: "Valiz Hazır",
    age: "14 yaş",
    year: "2005",
    growth: "Küçük Kız",
    location: "Aile Evi -> Balıkesir Fen Lisesi",
    sign: "OTOBÜS: BALIKESİR FEN LİSESİ",
    backdrop: "home",
    prop: "bus",
    memory: "İlk Valiz",
    characters: [
      { key: "anne", name: "ANNE", img: asset("anne"), x: "16%", y: "7%", w: "138px", sw: "102px", object: "50% 20%" },
      { key: "baba", name: "BABA", img: asset("baba"), x: "31%", y: "7%", w: "142px", sw: "104px", object: "50% 22%" },
      { key: "merve", name: "MERVE", img: asset("merve"), x: "52%", y: "7%", w: "128px", sw: "100px", object: "50% 14%", className: "hero child" },
      { key: "kiz", name: "KIZ KARDEŞ 2", img: asset("kiz-kardes"), x: "70%", y: "16%", w: "78px", sw: "62px", object: "50% 20%", className: "baby small-label" },
    ],
    lines: [
      { speaker: "ANLATICI", text: "Merve 14 yaşında, valizinin fermuarını kapatır. Balıkesir Fen Lisesi yolu, evin kapısından çok daha büyük görünür." },
      { speaker: "ANNE", text: "Anne son kez saçını düzeltir. Baba otobüs saatini kontrol eder. İki yaşındaki kız kardeşi, vedanın adını bilmeden Merve'nin elini tutar." },
      { speaker: "MERVE", text: "Korkuyorum, ama bu korkunun içinde bir ışık var. Sanki kendi hayatımın ilk tuşuna basıyorum." },
    ],
    choices: [
      { text: "Ailesine sarılıp valizi almak", effects: { sevgi: 6, cesaret: 4 }, result: "Vedayı bir kopuş değil, yanında taşıyacağı sıcak bir güç yapar." },
      { text: "Kardeşine küçük bir not bırakmak", effects: { sevgi: 8, bilgelik: 2 }, result: "Küçük kardeşine yazdığı not, aradaki mesafeyi yıllarca yumuşatacak ilk hatıra olur." },
      { text: "Otobüse kendi adımıyla binmek", effects: { cesaret: 7, guc: 3 }, result: "Merve ilk defa bir kapıdan tek başına geçer ve yolun kendisini büyüteceğini sezer." },
    ],
  },
  {
    id: "lise",
    level: "LEVEL 02",
    title: "Fen Lisesi Günleri",
    age: "15-18 yaş",
    year: "2006-2009",
    growth: "Çalışkan Öğrenci",
    location: "Balıkesir Fen Lisesi",
    sign: "BALIKESİR FEN LİSESİ",
    backdrop: "school",
    prop: "books",
    memory: "Lise Defteri",
    characters: [
      { key: "merve", name: "MERVE", img: asset("merve"), x: "44%", y: "7%", w: "178px", mw: "150px", sw: "128px", object: "50% 15%", className: "hero" },
    ],
    lines: [
      { speaker: "ANLATICI", text: "Yatakhane ışıkları erken söner, ama Merve'nin defterinde sorular yanmaya devam eder. Fizik, matematik, yeni arkadaşlıklar ve ilk yalnızlıklar aynı sıraya oturur." },
      { speaker: "MERVE", text: "Başarılı olmak sadece not değilmiş. İnsan bazen yardım istemeyi, bazen de kendine güvenmeyi aynı hafta öğreniyor." },
      { speaker: "ANLATICI", text: "Balıkesir Fen Lisesi'nde büyürken aklı keskinleşir, kalbi yumuşar, iradesi sessizce güçlenir." },
    ],
    choices: [
      { text: "Zor sorunun peşini bırakmamak", effects: { bilgelik: 7, guc: 3 }, result: "Bir problem çözülünce yalnızca cevap değil, sabır da kazanılır." },
      { text: "Yeni arkadaşına yer açmak", effects: { sevgi: 5, bilgelik: 4 }, result: "Merve, birlikte büyümenin tek başına parlamaktan daha kalıcı olduğunu fark eder." },
      { text: "Ailesini arayıp gününü anlatmak", effects: { sevgi: 6, cesaret: 2 }, result: "Sesler telefondan gelir, ama ev hissi bir süreliğine odanın içine yayılır." },
    ],
  },
  {
    id: "bogazici",
    level: "LEVEL 03",
    title: "Boğaziçi Kapısı",
    age: "18 yaş",
    year: "2009",
    growth: "Üniversiteli",
    location: "İstanbul / Boğaziçi Üniversitesi",
    sign: "KAYIT: BOĞAZİÇİ ÜNİVERSİTESİ",
    backdrop: "bosphorus",
    prop: "bridge",
    memory: "Boğaz Rüzgarı",
    characters: [
      { key: "merve", name: "MERVE", img: asset("merve"), x: "45%", y: "7%", w: "188px", mw: "150px", sw: "130px", object: "50% 15%", className: "hero" },
      { key: "anne", name: "ANNE", img: asset("anne"), x: "18%", y: "7%", w: "116px", sw: "82px", object: "50% 20%" },
      { key: "baba", name: "BABA", img: asset("baba"), x: "77%", y: "7%", w: "120px", sw: "86px", object: "50% 20%" },
    ],
    lines: [
      { speaker: "ANLATICI", text: "Sınav sonucu ekranda parlar: Boğaziçi Üniversitesi. Merve bu kez yalnızca bir okula değil, koca bir şehrin ritmine taşınır." },
      { speaker: "MERVE", text: "İstanbul kalabalık, hızlı ve gürültülü. Ama içimde Balıkesir'de biriktirdiğim sakin bir pusula var." },
      { speaker: "BABA", text: "Baba valizin tekerini yoklar. Anne kapıdan içeri bakar. Aile bu kez geride değil; Merve'nin arkasında durur." },
    ],
    choices: [
      { text: "Kayıt dosyasını teslim etmek", effects: { cesaret: 4, bilgelik: 4 }, result: "Yeni kampüs, Merve'nin adını bir kez daha geniş bir sayfaya yazar." },
      { text: "Boğaz'a bakıp derin nefes almak", effects: { guc: 5, sevgi: 3 }, result: "Şehir büyük kalır; Merve de onun içinde büyümeye karar verir." },
      { text: "Ailesine teşekkür etmek", effects: { sevgi: 7, bilgelik: 2 }, result: "Kazanmanın içinde emek kadar destek de olduğunu kalbine kaydeder." },
    ],
  },
  {
    id: "oguz",
    level: "LEVEL 04",
    title: "Kampüs Yolu",
    age: "19 yaş",
    year: "2010",
    growth: "Genç Kadın",
    location: "Boğaziçi Kampüsü",
    sign: "KAMPÜS GÖREVİ: OĞUZ İLE TANIŞ",
    backdrop: "campus",
    prop: "bridge",
    memory: "İlk Sohbet",
    characters: [
      { key: "merve", name: "MERVE", img: asset("merve"), x: "36%", y: "7%", w: "178px", mw: "146px", sw: "126px", object: "50% 15%", className: "hero" },
      { key: "oguz", name: "OĞUZ", img: asset("oguz"), x: "64%", y: "7%", w: "178px", mw: "146px", sw: "126px", object: "50% 18%" },
    ],
    lines: [
      { speaker: "ANLATICI", text: "Bir kampüs yokuşunda Oğuz'la aynı masaya, aynı sohbete, sonra aynı hayale denk gelirler." },
      { speaker: "OĞUZ", text: "Oğuz'un sakin mizahı, Merve'nin hızlı düşünen aklına iyi gelir. Konuşmalar önce derslerden, sonra hayattan açılır." },
      { speaker: "MERVE", text: "Bazı insanlar yolunu değiştirmez; yolun içindeki manzarayı daha güzel görmeni sağlar." },
    ],
    choices: [
      { text: "Sohbeti uzatmak", effects: { sevgi: 5, cesaret: 3 }, result: "Merve ve Oğuz, aynı cümlede gülmenin ne kadar doğal olduğunu keşfeder." },
      { text: "Kendi hayalini açıkça anlatmak", effects: { cesaret: 5, guc: 3 }, result: "Merve, sevilmenin kendini küçültmek değil, daha rahat anlatmak olduğunu hisseder." },
      { text: "Bir sonraki kahveyi sözleşmek", effects: { sevgi: 6, bilgelik: 2 }, result: "Küçük bir kahve sözü, ileride kocaman bir eve dönüşecek ilk işaret olur." },
    ],
  },
  {
    id: "fiko",
    level: "LEVEL 05",
    title: "Balikci Lokantasi",
    age: "24 yaş",
    year: "2015",
    growth: "İstanbul'da Çalışan",
    location: "İstanbul / Balıkçı Lokantası",
    sign: "YAN GÖREV: KEDİ FİKO",
    backdrop: "istanbul",
    prop: "fish",
    memory: "Fiko'nun Mırıltıları",
    characters: [
      { key: "merve", name: "MERVE", img: asset("merve"), x: "29%", y: "7%", w: "166px", mw: "136px", sw: "118px", object: "50% 15%", className: "hero" },
      { key: "fiko", name: "KEDİ FİKO", img: asset("kedi-fiko"), x: "57%", y: "9%", w: "168px", mw: "136px", sw: "112px", object: "48% 50%", className: "cat" },
      { key: "oguz", name: "OĞUZ", img: asset("oguz"), x: "79%", y: "7%", w: "130px", sw: "92px", object: "50% 18%" },
    ],
    lines: [
      { speaker: "ANLATICI", text: "İstanbul'da çalıştığı günlerden birinde, bir balıkçı lokantasının kenarında gri beyaz bir kedi belirir: Kedi Fiko." },
      { speaker: "MERVE", text: "Fiko masanın altından bakar. Merve ilk kez bir canlının sevgisinin kelimeden çok ritim olduğunu duyar: mırıltı, bekleyiş, güven." },
      { speaker: "ANLATICI", text: "Onu sahiplenmek, Merve'ye başka bir sevgi türünü tattırır. Bakmak, sabretmek ve bir eve can katmak." },
    ],
    choices: [
      { text: "Fiko için eve bir köşe hazırlamak", effects: { sevgi: 8, guc: 2 }, result: "Fiko eve geldiğinde, Merve'nin hayatında yeni bir sıcaklık hep aynı noktaya kıvrılır." },
      { text: "Veteriner randevusunu almak", effects: { bilgelik: 4, sevgi: 5 }, result: "Sevgi, Merve'nin elinde pratik bir sorumluluğa dönüşür." },
      { text: "Oğuz'la birlikte isim koymak", effects: { sevgi: 6, cesaret: 3 }, result: "Fiko'nun adı evde ilk ortak efsane gibi yankılanır." },
    ],
  },
  {
    id: "dugun",
    level: "LEVEL 06",
    title: "27 Yaşında Evlilik",
    age: "27 yaş",
    year: "2018",
    growth: "Eş ve Yol Arkadaşı",
    location: "İstanbul / Düğün Günü",
    sign: "ANA GÖREV TAMAMLANDI: MERVE + OĞUZ",
    backdrop: "wedding",
    prop: "rings",
    memory: "Düğün Halkaları",
    characters: [
      { key: "anne", name: "ANNE", img: asset("anne"), x: "13%", y: "7%", w: "112px", sw: "80px", object: "50% 20%" },
      { key: "merve", name: "MERVE", img: asset("merve"), x: "38%", y: "7%", w: "176px", mw: "140px", sw: "116px", object: "50% 15%", className: "hero" },
      { key: "oguz", name: "OĞUZ", img: asset("oguz"), x: "60%", y: "7%", w: "176px", mw: "140px", sw: "116px", object: "50% 18%" },
      { key: "baba", name: "BABA", img: asset("baba"), x: "84%", y: "7%", w: "112px", sw: "80px", object: "50% 20%" },
      { key: "fiko", name: "FİKO", img: asset("kedi-fiko"), x: "50%", y: "9%", w: "96px", sw: "70px", object: "48% 50%", className: "cat small-label" },
    ],
    lines: [
      { speaker: "ANLATICI", text: "Merve 27 yaşında Oğuz ile evlenir. Fiko da bu hikayenin sessiz ama gururlu tanığıdır." },
      { speaker: "MERVE", text: "Artık hayat sadece başarılacak hedefler değil; birlikte kurulacak sofralar, paylaşılacak yorgunluklar ve çoğalan gülüşlerdir." },
      { speaker: "OĞUZ", text: "Oğuz'un elini tutunca Merve, gücün bazen tek başına durmak, bazen de güvenle yaslanmak olduğunu bilir." },
    ],
    choices: [
      { text: "Yemin ederken kendi sesini duymak", effects: { cesaret: 4, sevgi: 6 }, result: "Merve, seçilmiş bir ortaklığın içinde kendi sesinin daha da berraklaştığını fark eder." },
      { text: "Ailesiyle dans etmek", effects: { sevgi: 7, guc: 2 }, result: "Evden ayrılan küçük kız, bu kez ailesinin ortasında yeni bir ev kurar." },
      { text: "Fiko'yu da aile fotoğrafına almak", effects: { sevgi: 8, bilgelik: 1 }, result: "Fotoğrafta Fiko da vardır; çünkü aile bazen patilerle tamamlanır." },
    ],
  },
  {
    id: "kanada",
    level: "LEVEL 07",
    title: "Kanada Yolu",
    age: "27 yaş",
    year: "2018",
    growth: "Yeni Ülkeye Hazır",
    location: "İstanbul Havalimanı -> Kanada",
    sign: "UÇUŞ: KANADA / ELVEDA SAHNESİ",
    backdrop: "airport",
    prop: "plane",
    memory: "El Sallayanlar",
    characters: [
      { key: "anne", name: "ANNE", img: asset("anne"), x: "11%", y: "8%", w: "108px", sw: "76px", object: "50% 20%" },
      { key: "baba", name: "BABA", img: asset("baba"), x: "25%", y: "8%", w: "112px", sw: "78px", object: "50% 20%" },
      { key: "kiz", name: "KIZ KARDEŞ 15", img: asset("kiz-kardes"), x: "39%", y: "8%", w: "126px", sw: "88px", object: "50% 18%" },
      { key: "merve", name: "MERVE", img: asset("merve"), x: "60%", y: "7%", w: "164px", mw: "134px", sw: "112px", object: "50% 15%", className: "hero" },
      { key: "oguz", name: "OĞUZ", img: asset("oguz"), x: "77%", y: "7%", w: "154px", mw: "126px", sw: "106px", object: "50% 18%" },
      { key: "fiko", name: "FİKO", img: asset("kedi-fiko"), x: "88%", y: "9%", w: "98px", sw: "70px", object: "48% 50%", className: "cat small-label" },
    ],
    lines: [
      { speaker: "ANLATICI", text: "Merve, Oğuz ve Fiko Kanada'ya taşınırken havalimanında eller kalkar. Anne, Baba ve artık 15 yaşında olan kız kardeş el sallar." },
      { speaker: "KIZ KARDEŞ", text: "İki yaşında elini bırakmak istemeyen küçük kardeş, şimdi büyümüş; gururla el sallayan bir genç kız olmuştur." },
      { speaker: "MERVE", text: "Merve bir kez daha gidiyordur. Ama bu kez içinde küçük kız korkusu kadar, yetişkin kadın güveni de vardır." },
    ],
    choices: [
      { text: "Ailesine son kez dönüp el sallamak", effects: { sevgi: 7, guc: 3 }, result: "Veda, Merve'nin hayatında artık bir bitiş değil; yeni bölüme geçiş müziği olur." },
      { text: "Fiko'nun taşıma çantasını kontrol etmek", effects: { sevgi: 6, bilgelik: 4 }, result: "Yeni ülkeye ilk giren duygu kaygı değil, birlikte olmanın sorumluluğudur." },
      { text: "Oğuz'la yeni evi hayal etmek", effects: { cesaret: 4, sevgi: 5 }, result: "Merve ve Oğuz, haritada uzak görünen yeri konuşarak eve yaklaştırır." },
    ],
  },
  {
    id: "bugun",
    level: "FINAL",
    title: "Yeni Can Haberi",
    age: "35 yaş",
    year: "10 Mayıs 2026",
    growth: "Sevgi Dolu ve Güçlü",
    location: "Kanada / Bugün",
    sign: "YENİ SEVİYE AÇILDI: ANNE",
    backdrop: "today",
    prop: "test",
    memory: "Bugünün Haberi",
    characters: [
      { key: "merve", name: "MERVE", img: asset("merve"), x: "35%", y: "7%", w: "190px", mw: "148px", sw: "126px", object: "50% 15%", className: "hero" },
      { key: "oguz", name: "OĞUZ", img: asset("oguz"), x: "60%", y: "7%", w: "176px", mw: "138px", sw: "116px", object: "50% 18%" },
      { key: "fiko", name: "FİKO", img: asset("kedi-fiko"), x: "78%", y: "9%", w: "118px", sw: "84px", object: "48% 50%", className: "cat" },
    ],
    lines: [
      { speaker: "ANLATICI", text: "Aradan yıllar geçer. Merve 35 yaşındadır. Bugün, hayatının en sessiz ama en büyük haberlerinden birini öğrenir: anne olacaktır." },
      { speaker: "MERVE", text: "Balıkesir'e giden o küçük kızın içindeki cesaret, İstanbul'da öğrendiği bilgelik, Fiko'yla büyüyen sevgisi ve Kanada'da taşıdığı güç aynı anda nefes alır." },
      { speaker: "ANLATICI", text: "Merve artık tecrübeli, sevgi dolu ve güçlü bir kadındır. Yeni seviye başlar; bu kez kalbin içinde iki kişilik bir müzik vardır." },
    ],
    choices: [
      { text: "Haberi Oğuz'la paylaşmak", effects: { sevgi: 8, cesaret: 3 }, result: "Oda bir anda büyür. Merve'nin hikayesine yeni ve minicik bir kahraman katılır." },
      { text: "Ailesini aramak", effects: { sevgi: 7, bilgelik: 3 }, result: "İlk valizin olduğu evden bugüne uzanan hat, telefonda yeniden parlar." },
      { text: "Fiko'yu kucağına alıp düşünmek", effects: { sevgi: 6, guc: 5 }, result: "Fiko'nun mırıltısı, Merve'ye başka bir bakımı zaten öğrendiğini hatırlatır." },
    ],
  },
];

const state = {
  started: false,
  sceneIndex: 0,
  lineIndex: 0,
  mode: "dialogue",
  selectedChoices: {},
  completed: {},
  focusedChoice: 0,
};

const els = {
  bootScreen: document.getElementById("bootScreen"),
  startButton: document.getElementById("startButton"),
  sceneTitle: document.getElementById("sceneTitle"),
  levelLabel: document.getElementById("levelLabel"),
  ageLabel: document.getElementById("ageLabel"),
  yearLabel: document.getElementById("yearLabel"),
  growthLabel: document.getElementById("growthLabel"),
  timeline: document.getElementById("timeline"),
  sceneStage: document.getElementById("sceneStage"),
  sceneSign: document.getElementById("sceneSign"),
  stageProp: document.getElementById("stageProp"),
  castLayer: document.getElementById("castLayer"),
  speakerName: document.getElementById("speakerName"),
  locationLabel: document.getElementById("locationLabel"),
  dialogueText: document.getElementById("dialogueText"),
  choiceGrid: document.getElementById("choiceGrid"),
  resultLine: document.getElementById("resultLine"),
  prevButton: document.getElementById("prevButton"),
  nextButton: document.getElementById("nextButton"),
  resetButton: document.getElementById("resetButton"),
  statList: document.getElementById("statList"),
  memoryList: document.getElementById("memoryList"),
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function currentScene() {
  return scenes[state.sceneIndex];
}

function getStats() {
  const stats = { ...baseStats };

  scenes.forEach((scene) => {
    const choiceIndex = state.selectedChoices[scene.id];
    if (choiceIndex === undefined) {
      return;
    }

    const effects = scene.choices[choiceIndex].effects;
    Object.entries(effects).forEach(([key, value]) => {
      stats[key] = clamp((stats[key] || 0) + value, 0, 100);
    });
  });

  return stats;
}

function getMemories() {
  return scenes
    .filter((scene) => state.completed[scene.id] || state.selectedChoices[scene.id] !== undefined)
    .map((scene) => scene.memory);
}

function saveState() {
  try {
    localStorage.setItem("merveRetroGame", JSON.stringify(state));
  } catch {
    // Oyun dosya olarak acildiginda bazi tarayicilar yerel kaydi kapatabilir.
  }
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("merveRetroGame"));
    if (!saved || typeof saved !== "object") {
      return;
    }

    state.started = Boolean(saved.started);
    state.sceneIndex = clamp(Number(saved.sceneIndex) || 0, 0, scenes.length - 1);
    state.lineIndex = clamp(Number(saved.lineIndex) || 0, 0, currentScene().lines.length - 1);
    state.mode = ["dialogue", "choice", "result", "ending"].includes(saved.mode) ? saved.mode : "dialogue";
    state.selectedChoices = saved.selectedChoices || {};
    state.completed = saved.completed || {};
  } catch {
    try {
      localStorage.removeItem("merveRetroGame");
    } catch {
      // Kayit temizlenemese de oyun sifir durumdan acilabilir.
    }
  }
}

function renderTimeline() {
  els.timeline.innerHTML = scenes
    .map((scene, index) => {
      const complete = state.completed[scene.id] || state.selectedChoices[scene.id] !== undefined;
      return `
        <button class="timeline-button ${index === state.sceneIndex ? "is-active" : ""} ${complete ? "is-complete" : ""}" type="button" data-index="${index}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <span>
            <strong>${scene.title}</strong>
            <small>${scene.age}</small>
          </span>
        </button>
      `;
    })
    .join("");

  els.timeline.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      goToScene(Number(button.dataset.index));
    });
  });
}

function getLifeStage(character, scene) {
  if (character.key === "fiko") {
    return "cat";
  }

  if ((character.className || "").includes("baby")) {
    return "baby";
  }

  if ((character.className || "").includes("child")) {
    return "child";
  }

  if (character.key === "kiz" && scene.id === "kanada") {
    return "teen";
  }

  if (character.key === "merve" && ["lise", "bogazici", "oguz"].includes(scene.id)) {
    return "teen";
  }

  return "adult";
}

function modelStyles(character, model) {
  const base = [
    `--x:${character.x}`,
    `--y:${character.y}`,
    `--w:${character.w}`,
    character.mw ? `--mw:${character.mw}` : "",
    character.sw ? `--sw:${character.sw}` : "",
    character.scale ? `--scale:${character.scale}` : "",
  ];

  if (model.kind === "cat") {
    base.push(`--fur:${model.fur}`, `--patch:${model.patch}`, `--stripe:${model.stripe}`, `--eye:${model.eye}`, `--collar:${model.collar}`, `--bow:${model.bow}`);
  } else {
    base.push(
      `--skin:${model.skin}`,
      `--hair:${model.hair}`,
      `--shirt:${model.shirt}`,
      `--pants:${model.pants}`,
      `--shoes:${model.shoes}`,
      `--accent:${model.accent}`,
    );
  }

  return base.filter(Boolean).join(";");
}

function renderHumanModel(character, model, lifeStage) {
  const accessoryClasses = [
    model.glasses ? "has-glasses" : "",
    model.beard ? "has-beard" : "",
    model.bald ? "is-bald" : "",
    model.hairStyle ? `hair-${model.hairStyle}` : "",
    lifeStage,
  ]
    .filter(Boolean)
    .join(" ");

  return `
    <div class="character-model sprite-human ${character.key} ${accessoryClasses}" aria-hidden="true">
      <span class="sprite-shadow"></span>
      <span class="leg leg-left"><i></i></span>
      <span class="leg leg-right"><i></i></span>
      <span class="arm arm-left"></span>
      <span class="arm arm-right"></span>
      <span class="torso"><i class="torso-accent"></i></span>
      <span class="neck"></span>
      <span class="head">
        <i class="ear ear-left"></i>
        <i class="ear ear-right"></i>
        <i class="hair-back"></i>
        <i class="face"></i>
        <i class="hair-front"></i>
        <i class="eye eye-left"></i>
        <i class="eye eye-right"></i>
        <i class="glasses"></i>
        <i class="beard"></i>
        <i class="mouth"></i>
      </span>
    </div>
  `;
}

function renderCatModel(character) {
  return `
    <div class="character-model sprite-cat ${character.key}" aria-hidden="true">
      <span class="cat-shadow"></span>
      <span class="cat-tail"></span>
      <span class="cat-body">
        <i class="cat-patch"></i>
        <i class="cat-leg cat-leg-left"></i>
        <i class="cat-leg cat-leg-right"></i>
      </span>
      <span class="cat-head">
        <i class="cat-ear cat-ear-left"></i>
        <i class="cat-ear cat-ear-right"></i>
        <i class="cat-mark"></i>
        <i class="cat-eye cat-eye-left"></i>
        <i class="cat-eye cat-eye-right"></i>
        <i class="cat-nose"></i>
        <i class="cat-whiskers"></i>
      </span>
      <span class="cat-collar"></span>
      <span class="cat-bow"></span>
    </div>
  `;
}

function renderCast(scene) {
  els.castLayer.innerHTML = scene.characters
    .map((character) => {
      const model = spriteModels[character.key] || spriteModels.merve;
      const lifeStage = getLifeStage(character, scene);
      const classes = ["character", model.kind === "cat" ? "cat-actor" : "human-actor", character.key, character.className || "", lifeStage].join(" ");
      const modelMarkup = model.kind === "cat" ? renderCatModel(character, model, lifeStage) : renderHumanModel(character, model, lifeStage);

      return `
        <article class="${classes}" style="${modelStyles(character, model)}">
          ${modelMarkup}
          <span class="character-label">${character.name}</span>
        </article>
      `;
    })
    .join("");
}

function renderStats() {
  const stats = getStats();
  els.statList.innerHTML = Object.entries(statMeta)
    .map(([key, meta]) => {
      const value = stats[key];
      return `
        <div class="stat-row">
          <div class="stat-title">
            <span>${meta.label}</span>
            <span>${value}/100</span>
          </div>
          <div class="meter" aria-label="${meta.label}">
            <div class="meter-fill" style="--value:${value}%; --color:${meta.color}"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderMemories() {
  const memories = getMemories();
  if (memories.length === 0) {
    els.memoryList.innerHTML = '<span class="memory-chip is-empty">Boş Slot</span>';
    return;
  }

  els.memoryList.innerHTML = memories.map((memory) => `<span class="memory-chip">${memory}</span>`).join("");
}

function renderDialogue(scene) {
  const selectedChoiceIndex = state.selectedChoices[scene.id];
  const selectedChoice = selectedChoiceIndex !== undefined ? scene.choices[selectedChoiceIndex] : null;

  els.choiceGrid.innerHTML = "";
  els.resultLine.hidden = true;
  els.nextButton.disabled = false;

  if (state.mode === "choice") {
    const lastLine = scene.lines[scene.lines.length - 1];
    els.speakerName.textContent = "SEÇİM";
    els.dialogueText.textContent = lastLine.text;
    els.nextButton.disabled = true;
    els.choiceGrid.innerHTML = scene.choices
      .map((choice, index) => `<button class="choice-button ${index === state.focusedChoice ? "is-selected" : ""}" type="button" data-index="${index}">${choice.text}</button>`)
      .join("");

    els.choiceGrid.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => choose(Number(button.dataset.index)));
    });
    return;
  }

  if (state.mode === "result" || state.mode === "ending") {
    const finalLine = scene.lines[scene.lines.length - 1];
    els.speakerName.textContent = "KAZANIM";
    els.dialogueText.textContent = selectedChoice ? selectedChoice.result : finalLine.text;
    els.resultLine.hidden = false;
    els.resultLine.textContent = scene.id === "bugun" ? "Oyun bitti. Yeni hayat bölümü açık: Merve anne olmaya hazırlanıyor." : `${scene.memory} envantere eklendi.`;
    els.nextButton.textContent = scene.id === "bugun" ? "Final" : "Sonraki";
    els.nextButton.disabled = scene.id === "bugun";
    return;
  }

  const line = scene.lines[state.lineIndex];
  els.speakerName.textContent = line.speaker;
  els.dialogueText.textContent = line.text;
  els.nextButton.textContent = state.lineIndex === scene.lines.length - 1 ? "Seçime Geç" : "Devam";
}

function render() {
  const scene = currentScene();
  els.sceneTitle.textContent = scene.title;
  els.levelLabel.textContent = scene.level;
  els.ageLabel.textContent = scene.age;
  els.yearLabel.textContent = scene.year;
  els.growthLabel.textContent = scene.growth;
  els.locationLabel.textContent = scene.location;
  els.sceneSign.textContent = scene.sign;
  els.sceneStage.className = `scene-stage ${scene.backdrop}`;
  els.stageProp.className = `stage-prop ${scene.prop}`;
  els.prevButton.disabled = state.sceneIndex === 0 && state.lineIndex === 0 && state.mode === "dialogue";

  renderCast(scene);
  renderDialogue(scene);
  renderTimeline();
  renderStats();
  renderMemories();
  saveState();
}

function goToScene(index) {
  state.sceneIndex = clamp(index, 0, scenes.length - 1);
  state.lineIndex = 0;
  state.mode = state.selectedChoices[currentScene().id] !== undefined ? "result" : "dialogue";
  state.focusedChoice = 0;
  render();
}

function next() {
  const scene = currentScene();

  if (state.mode === "dialogue") {
    if (state.lineIndex < scene.lines.length - 1) {
      state.lineIndex += 1;
    } else {
      state.mode = "choice";
      state.focusedChoice = 0;
    }
    render();
    return;
  }

  if (state.mode === "result") {
    state.completed[scene.id] = true;
    if (state.sceneIndex < scenes.length - 1) {
      state.sceneIndex += 1;
      state.lineIndex = 0;
      state.mode = state.selectedChoices[currentScene().id] !== undefined ? "result" : "dialogue";
      state.focusedChoice = 0;
    } else {
      state.mode = "ending";
    }
    render();
  }
}

function prev() {
  if (state.mode === "choice") {
    state.mode = "dialogue";
    state.lineIndex = currentScene().lines.length - 1;
    render();
    return;
  }

  if (state.mode === "result" || state.mode === "ending") {
    state.mode = "choice";
    render();
    return;
  }

  if (state.lineIndex > 0) {
    state.lineIndex -= 1;
    render();
    return;
  }

  if (state.sceneIndex > 0) {
    state.sceneIndex -= 1;
    state.lineIndex = 0;
    state.mode = state.selectedChoices[currentScene().id] !== undefined ? "result" : "dialogue";
    render();
  }
}

function choose(index) {
  const scene = currentScene();
  state.selectedChoices[scene.id] = index;
  state.completed[scene.id] = true;
  state.mode = scene.id === "bugun" ? "ending" : "result";
  render();
}

function reset() {
  try {
    localStorage.removeItem("merveRetroGame");
  } catch {
    // Kayit yoksa veya tarayici izin vermiyorsa sifirlama yine devam eder.
  }
  state.started = true;
  state.sceneIndex = 0;
  state.lineIndex = 0;
  state.mode = "dialogue";
  state.selectedChoices = {};
  state.completed = {};
  state.focusedChoice = 0;
  render();
}

function startGame() {
  state.started = true;
  els.bootScreen.classList.add("is-hidden");
  render();
}

els.startButton.addEventListener("click", startGame);
els.nextButton.addEventListener("click", next);
els.prevButton.addEventListener("click", prev);
els.resetButton.addEventListener("click", reset);

document.addEventListener("keydown", (event) => {
  if (!state.started && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    startGame();
    return;
  }

  if (state.mode === "choice") {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      state.focusedChoice = (state.focusedChoice + 1) % currentScene().choices.length;
      render();
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      state.focusedChoice = (state.focusedChoice + currentScene().choices.length - 1) % currentScene().choices.length;
      render();
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      choose(state.focusedChoice);
      return;
    }
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    next();
  }
});

loadState();

if (state.started) {
  els.bootScreen.classList.add("is-hidden");
}

render();
