// =============================================
// HAFTA 2 - Renk Teorisi
// İnteraktif Demolar
// =============================================

// ----- RGB MIXER -----
const rgbR = document.getElementById('rgbR');
const rgbG = document.getElementById('rgbG');
const rgbB = document.getElementById('rgbB');
const rgbPreview = document.getElementById('rgbPreview');

function updateRGB() {
  if (!rgbR) return;
  const r = parseInt(rgbR.value);
  const g = parseInt(rgbG.value);
  const b = parseInt(rgbB.value);

  document.getElementById('rgbRVal').textContent = r;
  document.getElementById('rgbGVal').textContent = g;
  document.getElementById('rgbBVal').textContent = b;

  const color = `rgb(${r}, ${g}, ${b})`;
  rgbPreview.style.background = color;
  rgbPreview.style.boxShadow = `0 0 40px rgba(${r},${g},${b},0.3)`;

  document.getElementById('rgbText').textContent = `rgb(${r}, ${g}, ${b})`;

  const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0').toUpperCase()).join('');
  document.getElementById('hexText').textContent = hex;

  // Update HEX display in section 3
  const hexREl = document.getElementById('hexR');
  const hexGEl = document.getElementById('hexG');
  const hexBEl = document.getElementById('hexB');
  if (hexREl) {
    hexREl.textContent = r.toString(16).padStart(2, '0').toUpperCase();
    hexGEl.textContent = g.toString(16).padStart(2, '0').toUpperCase();
    hexBEl.textContent = b.toString(16).padStart(2, '0').toUpperCase();
  }
}

if (rgbR) {
  rgbR.addEventListener('input', updateRGB);
  rgbG.addEventListener('input', updateRGB);
  rgbB.addEventListener('input', updateRGB);
  updateRGB();
}

window.setRGB = function (r, g, b) {
  rgbR.value = r;
  rgbG.value = g;
  rgbB.value = b;
  updateRGB();
};


// ----- HSL PICKER -----
const hslH = document.getElementById('hslH');
const hslS = document.getElementById('hslS');
const hslL = document.getElementById('hslL');
const hslPreview = document.getElementById('hslPreview');

function updateHSL() {
  if (!hslH) return;
  const h = parseInt(hslH.value);
  const s = parseInt(hslS.value);
  const l = parseInt(hslL.value);

  document.getElementById('hslHVal').textContent = h + '°';
  document.getElementById('hslSVal').textContent = s + '%';
  document.getElementById('hslLVal').textContent = l + '%';

  const color = `hsl(${h}, ${s}%, ${l}%)`;
  hslPreview.style.background = color;

  document.getElementById('hslText').textContent = `hsl(${h}, ${s}%, ${l}%)`;
}

if (hslH) {
  hslH.addEventListener('input', updateHSL);
  hslS.addEventListener('input', updateHSL);
  hslL.addEventListener('input', updateHSL);
  updateHSL();
}


// ----- ALPHA DEMO -----
const alphaSlider = document.getElementById('alphaSlider');
const alphaCanvas = document.getElementById('alphaCanvas');

function drawAlpha() {
  if (!alphaCanvas) return;
  const ctx = alphaCanvas.getContext('2d');
  const w = alphaCanvas.width;
  const h = alphaCanvas.height;
  const alpha = parseInt(alphaSlider.value) / 100;

  // Checkerboard background (transparency indicator)
  const checkSize = 15;
  for (let y = 0; y < h; y += checkSize) {
    for (let x = 0; x < w; x += checkSize) {
      const isLight = ((x / checkSize + y / checkSize) % 2) < 1;
      ctx.fillStyle = isLight ? '#2a2a4a' : '#1a1a2e';
      ctx.fillRect(x, y, checkSize, checkSize);
    }
  }

  // Blue square (behind)
  ctx.fillStyle = '#00d2ff';
  ctx.fillRect(200, 50, 200, 200);

  // Label
  ctx.fillStyle = 'white';
  ctx.font = '14px Inter, sans-serif';
  ctx.fillText('Mavi kare (arkada)', 220, 160);

  // Red square (in front, with alpha)
  ctx.fillStyle = `rgba(233, 69, 96, ${alpha})`;
  ctx.fillRect(100, 50, 200, 200);

  // Label for red square
  ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(alpha, 0.3)})`;
  ctx.font = '14px Inter, sans-serif';
  ctx.fillText(`Alpha: ${(alpha * 100).toFixed(0)}%`, 140, 160);

  document.getElementById('alphaVal').textContent = (alpha * 100).toFixed(0) + '%';
}

if (alphaSlider) {
  alphaSlider.addEventListener('input', drawAlpha);
  drawAlpha();
}


// ----- COLOR WHEEL & HARMONY -----
const colorWheelCanvas = document.getElementById('colorWheelCanvas');
const baseHueSlider = document.getElementById('baseHueSlider');
let currentHarmony = 'complementary';

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function drawColorWheel() {
  if (!colorWheelCanvas) return;
  const ctx = colorWheelCanvas.getContext('2d');
  const cx = colorWheelCanvas.width / 2;
  const cy = colorWheelCanvas.height / 2;
  const outerR = 110;
  const innerR = 70;

  ctx.clearRect(0, 0, colorWheelCanvas.width, colorWheelCanvas.height);

  // Draw color wheel ring
  for (let angle = 0; angle < 360; angle += 1) {
    const startAngle = (angle - 1) * Math.PI / 180;
    const endAngle = (angle + 1) * Math.PI / 180;

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, startAngle, endAngle);
    ctx.arc(cx, cy, innerR, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = `hsl(${angle}, 80%, 55%)`;
    ctx.fill();
  }

  // Get harmony colors
  const baseHue = parseInt(baseHueSlider.value);
  const harmonyHues = getHarmonyHues(baseHue, currentHarmony);

  // Draw markers on wheel
  harmonyHues.forEach((hue, i) => {
    const angle = (hue - 90) * Math.PI / 180;
    const markerR = (outerR + innerR) / 2;
    const mx = cx + Math.cos(angle) * markerR;
    const my = cy + Math.sin(angle) * markerR;

    ctx.beginPath();
    ctx.arc(mx, my, 10, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${hue}, 80%, 55%)`;
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Connect to center
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(mx, my);
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Update swatches
  const swatchContainer = document.getElementById('harmonySwatches');
  if (swatchContainer) {
    swatchContainer.innerHTML = harmonyHues.map(hue => {
      const hex = hslToHex(hue, 80, 55);
      return `<div style="text-align: center;">
        <div style="width:50px;height:50px;border-radius:8px;background:hsl(${hue},80%,55%);border:2px solid var(--border-color);"></div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;margin-top:4px;color:var(--text-secondary);">${hex}</div>
      </div>`;
    }).join('');
  }
}

function getHarmonyHues(base, type) {
  switch (type) {
    case 'complementary':
      return [base, (base + 180) % 360];
    case 'analogous':
      return [(base - 30 + 360) % 360, base, (base + 30) % 360];
    case 'triadic':
      return [base, (base + 120) % 360, (base + 240) % 360];
    case 'split':
      return [base, (base + 150) % 360, (base + 210) % 360];
    case 'monochromatic':
      return [base, base, base, base]; // Same hue, different S/L shown via swatches
    default:
      return [base];
  }
}

const harmonyInfo = {
  complementary: {
    title: 'Tamamlayıcı (Complementary)',
    desc: 'Renk çemberinde birbirine zıt (180° karşısında) iki renk. Güçlü kontrast sağlar. Aksiyon oyunlarında düşman vs oyuncu renkleri için idealdir.',
    examples: '🎮 Örnekler: Mario (kırmızı karakter, yeşil borular), Portal (turuncu ve mavi portal)'
  },
  analogous: {
    title: 'Analog (Analogous)',
    desc: 'Renk çemberinde yan yana olan 2-3 renk. Uyumlu, huzurlu bir görünüm verir. Doğa sahneleri ve rahatlatıcı oyunlar için idealdir.',
    examples: '🎮 Örnekler: Journey (sarı-turuncu-kırmızı çöl), Stardew Valley (yeşil-sarı doğa)'
  },
  triadic: {
    title: 'Üçlü (Triadic)',
    desc: 'Renk çemberinde eşit aralıklı (120°) üç renk. Dengeli ama canlı bir palet oluşturur.',
    examples: '🎮 Örnekler: Superman (kırmızı-mavi-sarı), birçok çizgi film stili oyun'
  },
  split: {
    title: 'Bölünmüş Tamamlayıcı (Split-Complementary)',
    desc: 'Bir ana renk + karşısındaki rengin iki yanındaki renkler. Tamamlayıcıdan daha yumuşak kontrast.',
    examples: '🎮 Popüler seçim çünkü kontrastlı ama göze batan değil.'
  },
  monochromatic: {
    title: 'Monokromatik (Monochromatic)',
    desc: 'Tek bir rengin farklı tonları (açık, koyu, soluk, canlı). Çok zarif ve tutarlı görünüm verir.',
    examples: '🎮 Örnekler: Limbo (siyah-beyaz-gri), Inside (gri-mavi tonları)'
  }
};

window.setHarmony = function (type) {
  currentHarmony = type;

  // Update button states
  document.querySelectorAll('[id^="harmBtn"]').forEach(btn => btn.classList.remove('primary'));
  const btnIndex = { complementary: 1, analogous: 2, triadic: 3, split: 4, monochromatic: 5 };
  const activeBtn = document.getElementById('harmBtn' + btnIndex[type]);
  if (activeBtn) activeBtn.classList.add('primary');

  // Update info
  const info = harmonyInfo[type];
  document.getElementById('harmonyTitle').textContent = info.title;
  document.getElementById('harmonyDesc').textContent = info.desc;
  document.getElementById('harmonyExamples').textContent = info.examples;

  // Handle monochromatic swatches differently
  if (type === 'monochromatic') {
    const baseHue = parseInt(baseHueSlider.value);
    const swatchContainer = document.getElementById('harmonySwatches');
    swatchContainer.innerHTML = [
      { s: 80, l: 25 },
      { s: 80, l: 40 },
      { s: 80, l: 55 },
      { s: 50, l: 70 },
      { s: 30, l: 85 },
    ].map(({ s, l }) => {
      const hex = hslToHex(baseHue, s, l);
      return `<div style="text-align: center;">
        <div style="width:50px;height:50px;border-radius:8px;background:hsl(${baseHue},${s}%,${l}%);border:2px solid var(--border-color);"></div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;margin-top:4px;color:var(--text-secondary);">${hex}</div>
      </div>`;
    }).join('');
  }

  drawColorWheel();
};

if (baseHueSlider) {
  baseHueSlider.addEventListener('input', () => {
    if (currentHarmony === 'monochromatic') {
      setHarmony('monochromatic'); // Recalculate monochromatic swatches
    }
    drawColorWheel();
  });
  drawColorWheel();
}


// ----- COLOR BLINDNESS SIMULATION -----
const cbCanvas = document.getElementById('colorBlindCanvas');
let cbMode = 'normal';

const cbColors = [
  { color: '#e94560', label: 'Kırmızı' },
  { color: '#ff9100', label: 'Turuncu' },
  { color: '#ffd600', label: 'Sarı' },
  { color: '#00e676', label: 'Yeşil' },
  { color: '#00d2ff', label: 'Cyan' },
  { color: '#536dfe', label: 'Mavi' },
  { color: '#7c4dff', label: 'Mor' },
  { color: '#e040fb', label: 'Magenta' },
];

// Simple color blindness simulation matrices
function simulateColorBlind(r, g, b, type) {
  let nr, ng, nb;
  switch (type) {
    case 'protanopia':
      nr = 0.567 * r + 0.433 * g + 0.0 * b;
      ng = 0.558 * r + 0.442 * g + 0.0 * b;
      nb = 0.0 * r + 0.242 * g + 0.758 * b;
      break;
    case 'deuteranopia':
      nr = 0.625 * r + 0.375 * g + 0.0 * b;
      ng = 0.7 * r + 0.3 * g + 0.0 * b;
      nb = 0.0 * r + 0.3 * g + 0.7 * b;
      break;
    case 'tritanopia':
      nr = 0.95 * r + 0.05 * g + 0.0 * b;
      ng = 0.0 * r + 0.433 * g + 0.567 * b;
      nb = 0.0 * r + 0.475 * g + 0.525 * b;
      break;
    default:
      return { r, g, b };
  }
  return {
    r: Math.min(255, Math.max(0, Math.round(nr))),
    g: Math.min(255, Math.max(0, Math.round(ng))),
    b: Math.min(255, Math.max(0, Math.round(nb)))
  };
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

function drawColorBlindDemo() {
  if (!cbCanvas) return;
  const ctx = cbCanvas.getContext('2d');
  const w = cbCanvas.width;
  const h = cbCanvas.height;

  ctx.fillStyle = '#0f0f1a';
  ctx.fillRect(0, 0, w, h);

  const barW = w / cbColors.length;
  const padding = 4;

  cbColors.forEach((item, i) => {
    let { r, g, b } = hexToRgb(item.color);

    if (cbMode !== 'normal') {
      const sim = simulateColorBlind(r, g, b, cbMode);
      r = sim.r; g = sim.g; b = sim.b;
    }

    ctx.fillStyle = `rgb(${r},${g},${b})`;
    const rx = i * barW + padding;
    const ry = padding;
    const rw = barW - padding * 2;
    const rh = h - 50 - padding;
    const rr = 8;
    ctx.beginPath();
    ctx.moveTo(rx + rr, ry);
    ctx.lineTo(rx + rw - rr, ry);
    ctx.quadraticCurveTo(rx + rw, ry, rx + rw, ry + rr);
    ctx.lineTo(rx + rw, ry + rh - rr);
    ctx.quadraticCurveTo(rx + rw, ry + rh, rx + rw - rr, ry + rh);
    ctx.lineTo(rx + rr, ry + rh);
    ctx.quadraticCurveTo(rx, ry + rh, rx, ry + rh - rr);
    ctx.lineTo(rx, ry + rr);
    ctx.quadraticCurveTo(rx, ry, rx + rr, ry);
    ctx.closePath();
    ctx.fill();

    // Label
    ctx.fillStyle = '#e0e0e0';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.label, i * barW + barW / 2, h - 15);
  });
}

const cbInfo = {
  normal: 'Normal renk görüşü. Tüm renkler ayırt edilebilir.',
  protanopia: 'Protanopi: Kırmızı konileri çalışmaz. Kırmızı ve yeşil birbirine çok benzer görünür. Erkeklerin ~%1\'inde görülür.',
  deuteranopia: 'Deuteranopi: Yeşil konileri çalışmaz. Kırmızı ve yeşil karışır. En yaygın renk körlüğü tipi (~%5 erkek).',
  tritanopia: 'Tritanopi: Mavi konileri çalışmaz. Mavi ve sarı karışır. Çok nadir (~%0.01).'
};

window.setColorBlindMode = function (mode) {
  cbMode = mode;

  document.querySelectorAll('[id^="cbBtn"]').forEach(btn => btn.classList.remove('primary'));
  const btnIndex = { normal: 1, protanopia: 2, deuteranopia: 3, tritanopia: 4 };
  document.getElementById('cbBtn' + btnIndex[mode])?.classList.add('primary');

  document.getElementById('colorBlindInfo').textContent = cbInfo[mode];
  drawColorBlindDemo();
};

drawColorBlindDemo();
