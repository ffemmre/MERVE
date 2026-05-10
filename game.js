const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const W = canvas.width;
const H = canvas.height;

ctx.imageSmoothingEnabled = false;

const hudLeft = document.getElementById("hudLeft");
const hudCenter = document.getElementById("hudCenter");
const hudRight = document.getElementById("hudRight");

const colors = {
  ink: "#060611",
  pink: "#ff4081",
  rose: "#ff80ab",
  cream: "#fff1d6",
  blue: "#80d0ff",
  gold: "#ffd166",
  green: "#69d58a",
  skin: "#d89568",
  skin2: "#f0a77a",
  shadow: "rgba(0,0,0,0.45)",
};

const people = {
  merve: {
    skin: "#eba078",
    shade: "#b86d4e",
    hair: "#11101a",
    shirt: "#c92f4a",
    pants: "#202744",
    shoes: "#080812",
    accent: "#ffd166",
    glasses: true,
    hairStyle: "bob",
  },
  oguz: {
    skin: "#e99a67",
    shade: "#ad6946",
    hair: "#8b572f",
    shirt: "#f1dfb6",
    pants: "#37465f",
    shoes: "#111522",
    accent: "#345c8c",
    glasses: true,
    beard: true,
    hairStyle: "crop",
  },
  anne: {
    skin: "#efa073",
    shade: "#b7654c",
    hair: "#962435",
    shirt: "#c83346",
    pants: "#151522",
    shoes: "#090914",
    accent: "#1d1b28",
    hairStyle: "short",
  },
  baba: {
    skin: "#f0ad7a",
    shade: "#b97852",
    hair: "#f0ad7a",
    shirt: "#e9edf5",
    pants: "#396aa5",
    shoes: "#111522",
    accent: "#1d3c78",
    bald: true,
  },
  kiz: {
    skin: "#efa17d",
    shade: "#b96b50",
    hair: "#211524",
    shirt: "#4e7bd4",
    pants: "#24365c",
    shoes: "#101020",
    accent: "#f3a64f",
    hairStyle: "long",
  },
};

const scenes = [
  {
    id: "home",
    level: "LEVEL 01",
    title: "VALİZ HAZIR",
    age: "14 yaş",
    year: "2005",
    place: "Aile evi",
    bg: "home",
    cast: [
      { key: "anne", x: 155, y: 372, s: 1.55, face: "right", stage: "adult" },
      { key: "baba", x: 280, y: 372, s: 1.55, face: "right", stage: "adult" },
      { key: "merve", x: 430, y: 382, s: 1.28, face: "left", stage: "child" },
      { key: "kiz", x: 560, y: 388, s: 1.35, face: "left", stage: "baby" },
    ],
    lines: [
      { who: "ANLATICI", tone: "n", text: "Merve 14 yaşında. Valiz hazır, otobüs saati yaklaşıyor." },
      { who: "ANNE", tone: "s", text: "Anne son kez saçını düzeltir. Baba valizin sapını kontrol eder." },
      { who: "MERVE", tone: "m", text: "Balıkesir Fen Lisesi'ne gidiyorum. Korkuyorum ama içimde ışıklı bir cesaret var." },
      { who: "ANLATICI", tone: "n", text: "İki yaşındaki kız kardeşi vedanın adını bilmeden Merve'nin elini bırakmak istemez." },
    ],
  },
  {
    id: "school",
    level: "LEVEL 02",
    title: "BALIKESİR FEN LİSESİ",
    age: "15-18 yaş",
    year: "2006-2009",
    place: "Balıkesir",
    bg: "school",
    cast: [{ key: "merve", x: 390, y: 378, s: 1.42, face: "right", stage: "teen" }],
    lines: [
      { who: "ANLATICI", tone: "n", text: "Yatakhane ışıkları erken söner, ama Merve'nin defterinde sorular yanmaya devam eder." },
      { who: "MERVE", tone: "m", text: "Başarılı olmak sadece not değilmiş. Yardım istemeyi de, kendime güvenmeyi de öğreniyorum." },
      { who: "ANLATICI", tone: "n", text: "Fizik, matematik, arkadaşlık ve ilk yalnızlıklar onu sessizce büyütür." },
    ],
  },
  {
    id: "bosphorus",
    level: "LEVEL 03",
    title: "BOĞAZİÇİ KAPISI",
    age: "18 yaş",
    year: "2009",
    place: "İstanbul",
    bg: "bosphorus",
    cast: [
      { key: "anne", x: 170, y: 378, s: 1.35, face: "right", stage: "adult" },
      { key: "merve", x: 390, y: 378, s: 1.45, face: "right", stage: "teen" },
      { key: "baba", x: 615, y: 378, s: 1.38, face: "left", stage: "adult" },
    ],
    lines: [
      { who: "ANLATICI", tone: "n", text: "Sınav sonucu ekranda parlar: Boğaziçi Üniversitesi." },
      { who: "MERVE", tone: "m", text: "İstanbul büyük ve gürültülü. Ama içimde Balıkesir'de biriktirdiğim sakin bir pusula var." },
      { who: "BABA", tone: "b", text: "Aile bu kez geride değil; Merve'nin arkasında durur." },
    ],
  },
  {
    id: "campus",
    level: "LEVEL 04",
    title: "KAMPÜS YOLU",
    age: "19 yaş",
    year: "2010",
    place: "Boğaziçi Kampüsü",
    bg: "campus",
    cast: [
      { key: "merve", x: 335, y: 378, s: 1.48, face: "right", stage: "teen" },
      { key: "oguz", x: 500, y: 378, s: 1.48, face: "left", stage: "adult" },
    ],
    lines: [
      { who: "ANLATICI", tone: "n", text: "Bir kampüs yokuşunda Oğuz'la aynı masaya, aynı sohbete, sonra aynı hayale denk gelirler." },
      { who: "OĞUZ", tone: "o", text: "Oğuz'un sakin mizahı, Merve'nin hızlı düşünen aklına iyi gelir." },
      { who: "MERVE", tone: "m", text: "Bazı insanlar yolunu değiştirmez; yolun içindeki manzarayı daha güzel gösterir." },
    ],
  },
  {
    id: "fiko",
    level: "LEVEL 05",
    title: "BALIKÇI LOKANTASI",
    age: "24 yaş",
    year: "2015",
    place: "İstanbul",
    bg: "diner",
    cast: [
      { key: "merve", x: 250, y: 382, s: 1.55, face: "right", stage: "adult" },
      { key: "fiko", x: 435, y: 386, s: 1.85, face: "left" },
      { key: "oguz", x: 610, y: 382, s: 1.42, face: "left", stage: "adult" },
    ],
    lines: [
      { who: "ANLATICI", tone: "n", text: "İstanbul'da çalıştığı günlerden birinde, balıkçı lokantasının kenarında gri beyaz bir kedi belirir." },
      { who: "MERVE", tone: "m", text: "Fiko masanın altından bakar. Merve, sevginin bazen sadece mırıltı ve güven olduğunu duyar." },
      { who: "ANLATICI", tone: "n", text: "Kedi Fiko'yu sahiplenmek ona bambaşka bir sevgiyi tattırır." },
    ],
  },
  {
    id: "wedding",
    level: "LEVEL 06",
    title: "27 YAŞINDA EVLİLİK",
    age: "27 yaş",
    year: "2018",
    place: "İstanbul",
    bg: "wedding",
    cast: [
      { key: "anne", x: 125, y: 382, s: 1.25, face: "right", stage: "adult" },
      { key: "merve", x: 320, y: 382, s: 1.55, face: "right", stage: "adult", outfit: "wedding" },
      { key: "oguz", x: 485, y: 382, s: 1.55, face: "left", stage: "adult", outfit: "wedding" },
      { key: "baba", x: 675, y: 382, s: 1.25, face: "left", stage: "adult" },
      { key: "fiko", x: 410, y: 392, s: 1.2, face: "right" },
    ],
    lines: [
      { who: "ANLATICI", tone: "n", text: "Merve 27 yaşında Oğuz ile evlenir. Fiko da bu hikayenin sessiz ve gururlu tanığıdır." },
      { who: "MERVE", tone: "m", text: "Hayat artık sadece hedefler değil; birlikte kurulacak sofralar ve çoğalan gülüşlerdir." },
      { who: "OĞUZ", tone: "o", text: "Oğuz'un elini tutunca Merve, güvenle yaslanmanın da güç olduğunu bilir." },
    ],
  },
  {
    id: "airport",
    level: "LEVEL 07",
    title: "KANADA YOLU",
    age: "27 yaş",
    year: "2018",
    place: "Havalimanı",
    bg: "airport",
    cast: [
      { key: "anne", x: 105, y: 382, s: 1.23, face: "right", stage: "adult" },
      { key: "baba", x: 205, y: 382, s: 1.25, face: "right", stage: "adult" },
      { key: "kiz", x: 315, y: 382, s: 1.32, face: "right", stage: "teen" },
      { key: "merve", x: 535, y: 382, s: 1.42, face: "left", stage: "adult" },
      { key: "oguz", x: 650, y: 382, s: 1.42, face: "left", stage: "adult" },
      { key: "fiko", x: 735, y: 392, s: 1.05, face: "left" },
    ],
    lines: [
      { who: "ANLATICI", tone: "n", text: "Merve, Oğuz ve Fiko Kanada'ya taşınırken havalimanında eller kalkar." },
      { who: "KIZ KARDEŞ", tone: "s", text: "İki yaşında elini bırakmak istemeyen kardeşi artık 15 yaşındadır; gururla el sallar." },
      { who: "MERVE", tone: "m", text: "Bu kez içinde küçük kız korkusu kadar, yetişkin kadın güveni de vardır." },
    ],
  },
  {
    id: "today",
    level: "FINAL",
    title: "YENİ CAN HABERİ",
    age: "35 yaş",
    year: "10 Mayıs 2026",
    place: "Kanada",
    bg: "today",
    cast: [
      { key: "merve", x: 315, y: 382, s: 1.65, face: "right", stage: "adult" },
      { key: "oguz", x: 500, y: 382, s: 1.55, face: "left", stage: "adult" },
      { key: "fiko", x: 640, y: 392, s: 1.35, face: "left" },
    ],
    lines: [
      { who: "ANLATICI", tone: "n", text: "Aradan yıllar geçer. Merve 35 yaşındadır." },
      { who: "MERVE", tone: "m", text: "Bugün hayatının en sessiz ama en büyük haberlerinden birini öğrenir: anne olacaktır." },
      { who: "ANLATICI", tone: "n", text: "Küçük kız cesareti, İstanbul bilgeliği, Fiko sevgisi ve Kanada gücü aynı kalpte buluşur." },
    ],
  },
];

let mode = "title";
let sceneIndex = 0;
let lineIndex = 0;
let tick = 0;
let frame = 0;
let particles = [];
let flash = 0;

function rect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

function line(x1, y1, x2, y2, color, width = 1) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(Math.round(x1), Math.round(y1));
  ctx.lineTo(Math.round(x2), Math.round(y2));
  ctx.stroke();
}

function pixelText(text, x, y, size, color, align = "left") {
  ctx.font = `${size}px "Press Start 2P", monospace`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.fillText(text, x, y);
  ctx.textAlign = "left";
}

function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, size * 0.35);
  ctx.bezierCurveTo(-size * 0.55, -size * 0.25, -size, size * 0.2, 0, size);
  ctx.bezierCurveTo(size, size * 0.2, size * 0.55, -size * 0.25, 0, size * 0.35);
  ctx.fill();
  ctx.restore();
}

function drawHuman(feetX, feetY, scale, face, key, stage = "adult", outfit = "") {
  if (stage === "baby") {
    drawBaby(feetX, feetY, scale, face);
    return;
  }

  const p = people[key];
  const U = 2 * scale;
  const gw = 18;
  const gh = stage === "child" ? 25 : stage === "teen" ? 27 : 28;
  const ox = feetX - (gw * U) / 2;
  const oy = feetY - gh * U;

  ctx.save();
  ctx.translate(ox, oy);
  if (face === "left") {
    ctx.translate(gw * U, 0);
    ctx.scale(-1, 1);
  }

  const r = (x, y, w, h, c) => rect(x * U, y * U, w * U, h * U, c);
  const px = (x, y, c) => r(x, y, 1, 1, c);
  const step = frame % 24 < 12 ? 0 : 1;

  r(3, gh - 1, 12, 1, colors.shadow);

  if (stage === "child") {
    r(4, 18, 4, 5, p.pants);
    r(10, 18, 4, 5, p.pants);
    r(3, 23, 5, 2, p.shoes);
    r(10, 23, 5, 2, p.shoes);
    r(3, 11, 12, 8, outfit === "wedding" ? "#f7f1e8" : p.shirt);
    r(1, 13 + step, 3, 5, p.skin);
    r(14, 13 - step, 3, 5, p.skin);
    r(7, 9, 4, 3, p.skin);
    drawHead(r, px, p, 3, 0, 12, 11, true);
  } else {
    r(4, 20, 4, 6, p.pants);
    r(10, 20, 4, 6, p.pants);
    r(3, 26, 5, 2, p.shoes);
    r(10, 26, 5, 2, p.shoes);
    r(3, 12, 12, 9, outfit === "wedding" && key === "merve" ? "#f7f1e8" : outfit === "wedding" && key === "oguz" ? "#111522" : p.shirt);
    r(1, 13 + step, 3, 6, p.skin);
    r(14, 13 - step, 3, 6, p.skin);
    r(7, 10, 4, 3, p.skin);

    if (key === "merve" && outfit !== "wedding") {
      px(7, 13, p.accent);
      px(8, 14, p.accent);
      px(9, 14, p.accent);
      px(10, 13, p.accent);
    }

    if (key === "baba") {
      r(3, 12, 3, 9, p.accent);
      r(12, 12, 3, 9, p.accent);
      r(8, 12, 2, 7, "#ffffff");
    }

    if (key === "oguz") {
      r(7, 12, 4, 3, outfit === "wedding" ? "#ffffff" : "#fff8df");
      px(8, 15, p.accent);
      px(9, 15, p.accent);
    }

    if (key === "anne") {
      r(2, 12, 3, 9, p.accent);
      r(13, 12, 3, 9, p.accent);
    }

    drawHead(r, px, p, 3, 0, 12, 12, false);
  }

  ctx.restore();
}

function drawHead(r, px, p, x, y, w, h, young) {
  if (p.bald) {
    r(x + 1, y + 3, w - 2, h - 2, p.skin);
    r(x + 1, y + 2, w - 2, 2, p.shade);
  } else if (p.hairStyle === "long") {
    r(x, y + 1, w, h + 5, p.hair);
    r(x + 1, y + 4, w - 2, h - 1, p.skin);
  } else if (p.hairStyle === "bob") {
    r(x, y + 1, w, h + 3, p.hair);
    r(x + 1, y + 4, w - 2, h - 1, p.skin);
  } else if (p.hairStyle === "short") {
    r(x + 1, y + 1, w - 2, 5, p.hair);
    r(x + 1, y + 4, w - 2, h - 2, p.skin);
  } else {
    r(x + 1, y + 1, w - 2, 4, p.hair);
    r(x + 1, y + 4, w - 2, h - 2, p.skin);
  }

  r(x + 1, y + 4, 2, 1, p.hair);
  r(x + w - 3, y + 4, 2, 1, p.hair);
  r(x, y + 6, 1, 3, p.skin);
  r(x + w - 1, y + 6, 1, 3, p.skin);

  px(x + 4, y + 7, "#151522");
  px(x + 8, y + 7, "#151522");
  r(x + 4, y + 6, 2, 1, p.hair);
  r(x + 8, y + 6, 2, 1, p.hair);

  if (p.glasses) {
    r(x + 3, y + 6, 4, 3, "#2a2030");
    r(x + 8, y + 6, 4, 3, "#2a2030");
    r(x + 4, y + 7, 2, 1, "#a9c9e8");
    r(x + 9, y + 7, 2, 1, "#a9c9e8");
    r(x + 7, y + 7, 1, 1, "#2a2030");
  }

  if (p.beard) {
    r(x + 3, y + 9, 7, 2, p.hair);
    r(x + 4, y + 11, 5, 1, p.hair);
    r(x + 5, y + 10, 4, 1, "#fff7e8");
  } else {
    r(x + 5, y + 10, young ? 3 : 4, 1, "#7b2535");
    if (!young) {
      px(x + 6, y + 9, "#fff6ee");
      px(x + 7, y + 9, "#fff6ee");
    }
  }
}

function drawBaby(feetX, feetY, scale, face) {
  const U = 2 * scale;
  const gw = 14;
  const gh = 19;
  const ox = feetX - (gw * U) / 2;
  const oy = feetY - gh * U;

  ctx.save();
  ctx.translate(ox, oy);
  if (face === "left") {
    ctx.translate(gw * U, 0);
    ctx.scale(-1, 1);
  }

  const r = (x, y, w, h, c) => rect(x * U, y * U, w * U, h * U, c);
  const px = (x, y, c) => r(x, y, 1, 1, c);
  const p = people.kiz;

  r(2, gh - 1, 10, 1, colors.shadow);
  r(4, 13, 6, 5, p.shirt);
  r(2, 14, 3, 3, p.skin);
  r(9, 14, 3, 3, p.skin);
  r(4, 17, 3, 2, p.shoes);
  r(8, 17, 3, 2, p.shoes);
  r(2, 1, 10, 10, p.hair);
  r(3, 4, 8, 8, p.skin);
  px(5, 7, "#111522");
  px(8, 7, "#111522");
  r(5, 10, 4, 1, "#7b2535");
  r(3, 2, 3, 2, p.hair);
  r(8, 2, 3, 2, p.hair);
  ctx.restore();
}

function drawCat(feetX, feetY, scale, face) {
  const U = 2 * scale;
  const gw = 30;
  const gh = 18;
  const ox = feetX - (gw * U) / 2;
  const oy = feetY - gh * U;

  ctx.save();
  ctx.translate(ox, oy);
  if (face === "left") {
    ctx.translate(gw * U, 0);
    ctx.scale(-1, 1);
  }

  const r = (x, y, w, h, c) => rect(x * U, y * U, w * U, h * U, c);
  const px = (x, y, c) => r(x, y, 1, 1, c);
  const fur = "#f2f2ed";
  const patch = "#6b7178";
  const stripe = "#454b52";

  r(4, 17, 20, 1, colors.shadow);
  r(6, 9, 15, 7, fur);
  r(5, 10, 2, 5, fur);
  r(18, 10, 3, 5, fur);
  r(7, 9, 8, 4, patch);
  r(8, 10, 1, 2, stripe);
  r(11, 9, 1, 3, stripe);
  r(14, 10, 1, 2, stripe);
  r(22, 5, 7, 7, fur);
  r(22, 4, 2, 3, "#ff9ba8");
  r(27, 4, 2, 3, "#ff9ba8");
  r(22, 5, 4, 3, patch);
  px(24, 8, "#79d64b");
  px(27, 8, "#79d64b");
  px(26, 10, "#ef7f9b");
  r(23, 12, 5, 1, "#ef5b2f");
  r(24, 13, 3, 2, "#f5b21b");
  r(1, 8, 5, 2, patch);
  r(0, 6, 2, 3, patch);
  line(26 * U, 10 * U, 31 * U, 9 * U, "#111522", U);
  line(26 * U, 11 * U, 31 * U, 11 * U, "#111522", U);
  line(25 * U, 11 * U, 21 * U, 10 * U, "#111522", U);
  r(8, 15, 2, 3, fur);
  r(17, 15, 2, 3, fur);
  ctx.restore();
}

function drawCharacter(c) {
  if (c.key === "fiko") {
    drawCat(c.x, c.y, c.s, c.face);
  } else {
    drawHuman(c.x, c.y, c.s, c.face, c.key, c.stage, c.outfit || "");
  }
}

function drawStars(t, count = 50) {
  for (let i = 0; i < count; i++) {
    const alpha = 0.25 + 0.45 * Math.abs(Math.sin(t * 0.04 + i));
    rect((i * 109) % W, (i * 61) % 180, 2, 2, `rgba(255,255,255,${alpha})`);
  }
}

function drawBackground(scene) {
  const t = frame;
  const g = ctx.createLinearGradient(0, 0, 0, H);

  if (scene.bg === "home") {
    g.addColorStop(0, "#2d1830");
    g.addColorStop(1, "#6c3040");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    rect(0, 305, W, 195, "#3a241d");
    for (let x = 0; x < W; x += 48) rect(x, 308, 42, 190, x % 96 ? "#493022" : "#3e281d");
    rect(70, 130, 190, 100, "#1b1831");
    rect(82, 142, 166, 76, "#4d79a4");
    rect(88, 148, 70, 64, "#8cc5e0");
    rect(168, 148, 70, 64, "#8cc5e0");
    rect(520, 250, 170, 60, "#5b3724");
    rect(535, 220, 40, 30, "#d9b77a");
    rect(600, 218, 40, 32, "#b85c64");
    drawBusSign();
  } else if (scene.bg === "school") {
    g.addColorStop(0, "#85c7ef");
    g.addColorStop(1, "#b8dfac");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    rect(0, 335, W, 165, "#4c6b45");
    rect(180, 150, 440, 185, "#c98755");
    rect(205, 180, 70, 60, "#263757");
    rect(320, 180, 70, 60, "#263757");
    rect(435, 180, 70, 60, "#263757");
    rect(280, 260, 80, 75, "#38251e");
    rect(245, 115, 310, 35, "#a76644");
    pixelText("BALIKESİR FEN LİSESİ", 400, 140, 10, "#fff1d6", "center");
    drawBooks(610, 285);
  } else if (scene.bg === "bosphorus" || scene.bg === "campus") {
    g.addColorStop(0, scene.bg === "campus" ? "#f2c27e" : "#77c6ee");
    g.addColorStop(1, scene.bg === "campus" ? "#8d4e6c" : "#245c88");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    rect(0, 300, W, 52, "#1b5f89");
    for (let x = 0; x < W; x += 22) rect(x, 320 + Math.sin((x + t) * 0.04) * 3, 14, 2, "rgba(200,240,255,0.45)");
    rect(0, 352, W, 148, scene.bg === "campus" ? "#51435c" : "#4d5b66");
    drawBridge();
    if (scene.bg === "campus") {
      rect(80, 230, 130, 92, "#7f5640");
      rect(105, 252, 30, 40, "#2b314b");
      rect(152, 252, 30, 40, "#2b314b");
      rect(92, 212, 106, 20, "#5d3d30");
    }
  } else if (scene.bg === "diner") {
    g.addColorStop(0, "#17122a");
    g.addColorStop(1, "#4b263b");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    drawStars(t, 24);
    rect(0, 322, W, 178, "#352227");
    rect(0, 260, W, 70, "#2a1a1d");
    rect(70, 185, 230, 85, "#533220");
    rect(85, 200, 200, 55, "#f2d9a6");
    pixelText("BALIKÇI", 185, 235, 13, "#1b1a25", "center");
    drawFish(620, 245);
    rect(80, 340, 170, 24, "#5a3522");
    rect(105, 363, 8, 45, "#342013");
    rect(210, 363, 8, 45, "#342013");
  } else if (scene.bg === "wedding") {
    g.addColorStop(0, "#ffe3bb");
    g.addColorStop(1, "#c76d97");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    rect(0, 330, W, 170, "#5c426a");
    for (let i = 0; i < 18; i++) drawHeart(40 + i * 44, 100 + Math.sin(t * 0.02 + i) * 16, 7, "rgba(255,64,129,0.25)");
    rect(240, 128, 320, 18, "#fff1d6");
    rect(260, 146, 280, 160, "rgba(255,255,255,0.18)");
    drawRings(390, 240);
  } else if (scene.bg === "airport") {
    g.addColorStop(0, "#b8e5ff");
    g.addColorStop(1, "#d4d7dc");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    rect(0, 315, W, 185, "#66717c");
    for (let x = 0; x < W; x += 90) rect(x, 355, 52, 6, "#f2f2cf");
    drawPlane(540, 130);
    rect(70, 210, 190, 60, "#2c344a");
    pixelText("GATE 27", 165, 248, 11, "#fff1d6", "center");
  } else {
    g.addColorStop(0, "#0b1430");
    g.addColorStop(0.45, "#263b62");
    g.addColorStop(1, "#80b887");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    drawStars(t, 45);
    rect(0, 325, W, 175, "#365b50");
    rect(190, 210, 410, 120, "#5b463a");
    rect(210, 230, 370, 80, "#7b5b48");
    rect(235, 248, 95, 45, "#2c3650");
    rect(470, 248, 80, 45, "#2c3650");
    drawTest(610, 280);
  }

  drawScanlines();
}

function drawScanlines() {
  for (let y = 0; y < H; y += 4) rect(0, y, W, 1, "rgba(255,255,255,0.035)");
}

function drawBusSign() {
  rect(360, 260, 120, 58, "#f3c452");
  rect(372, 272, 96, 28, "#ffffff");
  rect(382, 304, 16, 14, "#111522");
  rect(442, 304, 16, 14, "#111522");
  pixelText("BALIKESİR", 420, 290, 7, "#151522", "center");
}

function drawBooks(x, y) {
  rect(x, y, 95, 16, "#d64758");
  rect(x + 12, y - 18, 80, 16, "#4f8ddb");
  rect(x + 28, y - 36, 70, 16, "#ffd166");
}

function drawBridge() {
  line(20, 285, 780, 285, "#fff1d6", 4);
  for (let x = 60; x < 760; x += 55) line(x, 245, x, 285, "rgba(255,241,214,0.65)", 2);
  line(60, 245, 740, 245, "#fff1d6", 2);
  rect(150, 230, 12, 70, "#fff1d6");
  rect(635, 230, 12, 70, "#fff1d6");
}

function drawFish(x, y) {
  rect(x, y, 75, 34, "#9fc6d0");
  rect(x + 66, y + 8, 25, 18, "#6e9eaa");
  rect(x + 12, y + 8, 25, 8, "#f6f1e0");
  rect(x + 54, y + 10, 5, 5, "#111522");
}

function drawRings(x, y) {
  ctx.strokeStyle = colors.gold;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(x - 22, y, 25, 0, Math.PI * 2);
  ctx.arc(x + 22, y, 25, 0, Math.PI * 2);
  ctx.stroke();
}

function drawPlane(x, y) {
  rect(x - 90, y + 24, 180, 22, "#f7f7ee");
  rect(x - 10, y, 36, 70, "#dfe7f0");
  rect(x - 75, y + 6, 38, 24, "#f7f7ee");
  rect(x + 30, y + 8, 46, 20, "#f7f7ee");
  rect(x - 60, y + 30, 8, 7, "#80d0ff");
  rect(x - 42, y + 30, 8, 7, "#80d0ff");
  rect(x - 24, y + 30, 8, 7, "#80d0ff");
}

function drawTest(x, y) {
  rect(x, y, 118, 34, "#fff8df");
  rect(x + 8, y + 8, 18, 18, "#ff80ab");
  rect(x + 42, y + 14, 12, 4, "#ff4081");
  rect(x + 66, y + 14, 12, 4, "#ff4081");
}

function drawDialog() {
  const scene = scenes[sceneIndex];
  const lineData = scene.lines[lineIndex];
  const shown = lineData.text.slice(0, Math.min(lineData.text.length, Math.floor(tick / 1.35)));
  const border = lineData.tone === "m" ? colors.rose : lineData.tone === "o" ? colors.blue : lineData.tone === "s" ? colors.gold : "#b9b9c8";

  rect(38, H - 136, W - 76, 112, "rgba(6,6,17,0.93)");
  ctx.strokeStyle = border;
  ctx.lineWidth = 3;
  ctx.strokeRect(38, H - 136, W - 76, 112);

  if (lineData.who !== "ANLATICI") {
    pixelText(lineData.who, 60, H - 111, 10, border);
  }

  wrapText(shown, 60, lineData.who === "ANLATICI" ? H - 100 : H - 86, W - 120, 18, 10, "#e9d9ef");

  if (shown.length >= lineData.text.length && Math.floor(frame / 28) % 2 === 0) {
    pixelText("ENTER", W - 132, H - 40, 8, colors.rose);
  }
}

function wrapText(text, x, y, maxWidth, lineHeight, size, color) {
  ctx.font = `${size}px "Press Start 2P", monospace`;
  ctx.fillStyle = color;
  const words = text.split(" ");
  let lineText = "";
  let yy = y;

  for (const word of words) {
    const test = `${lineText}${word} `;
    if (ctx.measureText(test).width > maxWidth && lineText) {
      ctx.fillText(lineText, x, yy);
      lineText = `${word} `;
      yy += lineHeight;
    } else {
      lineText = test;
    }
  }
  ctx.fillText(lineText, x, yy);
}

function drawTitle() {
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "#080616");
  g.addColorStop(0.55, "#1b0a28");
  g.addColorStop(1, "#080616");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  drawStars(frame, 70);
  for (let i = 0; i < 12; i++) {
    drawHeart((i * 76 + frame * 0.45) % W, H - ((i * 43 + frame * 0.7) % (H + 60)), 5 + (i % 3), "rgba(255,64,129,0.16)");
  }

  drawHuman(305, 330, 1.95, "right", "merve", "adult");
  drawHuman(500, 330, 1.9, "left", "oguz", "adult");
  drawCat(405, 350, 1.45, "right");

  pixelText("MERVE", W / 2, 82, 30, colors.pink, "center");
  pixelText("8-BIT HAYAT GÜNLÜĞÜ", W / 2, 122, 13, colors.rose, "center");
  pixelText("Balıkesir'den Kanada'ya bir büyüme hikayesi", W / 2, 160, 8, "#b991aa", "center");

  if (Math.floor(frame / 30) % 2 === 0) {
    pixelText("ENTER ile başla", W / 2, 438, 10, "#fff7f0", "center");
  }
  drawScanlines();
}

function drawEnding() {
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "#061020");
  g.addColorStop(1, "#24102d");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  drawStars(frame, 85);

  drawHuman(315, 355, 1.9, "right", "merve", "adult");
  drawHuman(500, 355, 1.8, "left", "oguz", "adult");
  drawCat(410, 378, 1.35, "right");
  drawHeart(408, 214 + Math.sin(frame * 0.04) * 6, 25, "rgba(255,64,129,0.72)");

  pixelText("YENİ SEVİYE AÇILDI", W / 2, 78, 18, colors.gold, "center");
  pixelText("ANNE", W / 2, 120, 28, colors.rose, "center");
  wrapText("Merve artık tecrübeli, sevgi dolu ve güçlü bir kadın. Hikaye bitmedi; yeni bölüm şimdi başlıyor.", 105, 405, 590, 20, 10, "#e9d9ef");
  if (Math.floor(frame / 34) % 2 === 0) pixelText("ENTER ile tekrar oyna", W / 2, 474, 8, "#fff7f0", "center");
  drawScanlines();
}

function drawStory() {
  const scene = scenes[sceneIndex];
  hudLeft.textContent = scene.level;
  hudCenter.textContent = scene.title;
  hudRight.textContent = `${scene.age} / ${scene.year}`;

  drawBackground(scene);
  pixelText(scene.place, 24, 34, 10, colors.cream);
  pixelText(scene.title, W / 2, 62, 14, colors.gold, "center");

  for (const cast of scene.cast) drawCharacter(cast);
  drawDialog();
}

function nextLine() {
  if (mode === "title") {
    mode = "story";
    sceneIndex = 0;
    lineIndex = 0;
    tick = 0;
    return;
  }

  if (mode === "ending") {
    mode = "title";
    sceneIndex = 0;
    lineIndex = 0;
    tick = 0;
    return;
  }

  const scene = scenes[sceneIndex];
  const lineData = scene.lines[lineIndex];
  if (Math.floor(tick / 1.35) < lineData.text.length) {
    tick = lineData.text.length * 1.35;
    return;
  }

  if (lineIndex < scene.lines.length - 1) {
    lineIndex += 1;
    tick = 0;
    return;
  }

  if (sceneIndex < scenes.length - 1) {
    sceneIndex += 1;
    lineIndex = 0;
    tick = 0;
    flash = 18;
    return;
  }

  mode = "ending";
  tick = 0;
}

function loop() {
  frame += 1;
  tick += 1;
  ctx.clearRect(0, 0, W, H);

  if (mode === "title") {
    hudLeft.textContent = "";
    hudCenter.textContent = "";
    hudRight.textContent = "";
    drawTitle();
  } else if (mode === "ending") {
    hudLeft.textContent = "FINAL";
    hudCenter.textContent = "YENİ CAN HABERİ";
    hudRight.textContent = "35 yaş";
    drawEnding();
  } else {
    drawStory();
  }

  if (flash > 0) {
    rect(0, 0, W, H, `rgba(255,255,255,${flash / 24})`);
    flash -= 1;
  }

  requestAnimationFrame(loop);
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "Space") {
    event.preventDefault();
    nextLine();
  }
});

canvas.addEventListener("pointerdown", nextLine);

loop();
