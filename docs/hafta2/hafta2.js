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
  // Update HEX decimal labels
  const hexRDec = document.getElementById('hexRDec');
  if (hexRDec) {
    hexRDec.textContent = r;
    document.getElementById('hexGDec').textContent = g;
    document.getElementById('hexBDec').textContent = b;
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


// ----- HISTOGRAM DEMO (Real Photo + 4 Channel Histograms) -----
const histSourceCanvas = document.getElementById('histogramSourceCanvas');
const histBrightChart = document.getElementById('histBrightChart');
const histRedChart = document.getElementById('histRedChart');
const histGreenChart = document.getElementById('histGreenChart');
const histBlueChart = document.getElementById('histBlueChart');
const histBrightness = document.getElementById('histBrightness');
const histContrast = document.getElementById('histContrast');
const histImageUpload = document.getElementById('histImageUpload');

let histOriginalImageData = null;

function loadHistogramImage(src) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function () {
    if (!histSourceCanvas) return;
    const ctx = histSourceCanvas.getContext('2d');
    const aspect = img.width / img.height;
    histSourceCanvas.width = 640;
    histSourceCanvas.height = Math.round(640 / aspect);
    ctx.drawImage(img, 0, 0, histSourceCanvas.width, histSourceCanvas.height);
    histOriginalImageData = ctx.getImageData(0, 0, histSourceCanvas.width, histSourceCanvas.height);
    // Reset sliders
    if (histBrightness) histBrightness.value = 0;
    if (histContrast) histContrast.value = 0;
    updateHistogramDemo();
  };
  img.onerror = function () {
    generateFallbackLandscape();
  };
  img.src = src;
}

function generateFallbackLandscape() {
  if (!histSourceCanvas) return;
  histSourceCanvas.width = 640;
  histSourceCanvas.height = 427;
  const ctx = histSourceCanvas.getContext('2d');
  const w = 640, h = 427;

  // Sky gradient (sunrise)
  const sky = ctx.createLinearGradient(0, 0, 0, h * 0.55);
  sky.addColorStop(0, '#1e3a5c');
  sky.addColorStop(0.3, '#4a82b8');
  sky.addColorStop(0.6, '#d4966e');
  sky.addColorStop(1, '#ecc9a0');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // Background mountains
  ctx.fillStyle = '#3a4a5e';
  ctx.beginPath();
  ctx.moveTo(0, h * 0.55);
  for (let x = 0; x <= w; x += 4) {
    const y = h * 0.32 + Math.sin(x * 0.008) * h * 0.12 + Math.sin(x * 0.02 + 1) * h * 0.05 + Math.sin(x * 0.035) * h * 0.02;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(w, h * 0.6); ctx.lineTo(0, h * 0.6); ctx.closePath(); ctx.fill();

  // Snow caps
  ctx.fillStyle = 'rgba(230, 235, 245, 0.6)';
  ctx.beginPath();
  ctx.moveTo(0, h * 0.55);
  for (let x = 0; x <= w; x += 4) {
    const base = h * 0.32 + Math.sin(x * 0.008) * h * 0.12 + Math.sin(x * 0.02 + 1) * h * 0.05 + Math.sin(x * 0.035) * h * 0.02;
    const snowLine = base + h * 0.04;
    ctx.lineTo(x, Math.min(base, snowLine - Math.sin(x * 0.05) * h * 0.015));
  }
  ctx.lineTo(w, h * 0.45); ctx.lineTo(0, h * 0.45); ctx.closePath(); ctx.fill();

  // Foreground mountains
  ctx.fillStyle = '#2a3a32';
  ctx.beginPath();
  ctx.moveTo(0, h * 0.6);
  for (let x = 0; x <= w; x += 4) {
    const y = h * 0.48 + Math.sin(x * 0.012 + 2) * h * 0.06 + Math.sin(x * 0.028 + 4) * h * 0.03;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(w, h * 0.65); ctx.lineTo(0, h * 0.65); ctx.closePath(); ctx.fill();

  // Ground with vegetation
  const ground = ctx.createLinearGradient(0, h * 0.6, 0, h);
  ground.addColorStop(0, '#4a7040');
  ground.addColorStop(0.5, '#3a5832');
  ground.addColorStop(1, '#2a4025');
  ctx.fillStyle = ground;
  ctx.fillRect(0, h * 0.6, w, h * 0.4);

  // Lake
  const lake = ctx.createLinearGradient(0, h * 0.62, 0, h * 0.75);
  lake.addColorStop(0, '#5588aa');
  lake.addColorStop(1, '#3a6680');
  ctx.fillStyle = lake;
  ctx.beginPath();
  ctx.ellipse(w * 0.55, h * 0.7, w * 0.22, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();

  // Flowers
  for (let i = 0; i < 120; i++) {
    const fx = Math.random() * w;
    const fy = h * 0.68 + Math.random() * h * 0.28;
    const dist = Math.sqrt((fx - w * 0.55) ** 2 + ((fy - h * 0.7) * 3) ** 2);
    if (dist < w * 0.22) continue; // skip lake area
    const colors = ['#ff5566', '#ffcc33', '#ff88aa', '#ffeecc', '#ff7744', '#ee4488', '#ffffff'];
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.beginPath();
    ctx.arc(fx, fy, 1.5 + Math.random() * 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Noise for realism
  const imgData = ctx.getImageData(0, 0, w, h);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 10;
    imgData.data[i] = Math.max(0, Math.min(255, imgData.data[i] + noise));
    imgData.data[i + 1] = Math.max(0, Math.min(255, imgData.data[i + 1] + noise));
    imgData.data[i + 2] = Math.max(0, Math.min(255, imgData.data[i + 2] + noise));
  }
  ctx.putImageData(imgData, 0, 0);

  histOriginalImageData = ctx.getImageData(0, 0, w, h);
  updateHistogramDemo();
}

function drawSingleHistogram(canvas, bins, color) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const maxCount = Math.max(...bins, 1);

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#0f0f1a';
  ctx.fillRect(0, 0, w, h);

  const barW = w / 256;
  for (let i = 0; i < 256; i++) {
    const barH = (bins[i] / maxCount) * (h - 4);
    ctx.fillStyle = color;
    ctx.fillRect(i * barW, h - barH, barW + 0.5, barH);
  }
}

function updateHistogramDemo() {
  if (!histSourceCanvas || !histOriginalImageData) return;

  const brightness = parseInt(histBrightness?.value || 0);
  const contrast = parseInt(histContrast?.value || 0);

  if (document.getElementById('histBrightVal'))
    document.getElementById('histBrightVal').textContent = brightness;
  if (document.getElementById('histContrastVal'))
    document.getElementById('histContrastVal').textContent = contrast;

  // Apply brightness/contrast to copy of original
  const w = histOriginalImageData.width;
  const h = histOriginalImageData.height;
  const orig = histOriginalImageData.data;
  const processed = new ImageData(w, h);
  const data = processed.data;
  const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

  for (let i = 0; i < orig.length; i += 4) {
    for (let c = 0; c < 3; c++) {
      let val = orig[i + c] + brightness;
      val = factor * (val - 128) + 128;
      data[i + c] = Math.min(255, Math.max(0, Math.round(val)));
    }
    data[i + 3] = 255;
  }

  // Draw processed image
  const ctx = histSourceCanvas.getContext('2d');
  histSourceCanvas.width = w;
  histSourceCanvas.height = h;
  ctx.putImageData(processed, 0, 0);

  // Compute per-channel histograms
  const brightBins = new Array(256).fill(0);
  const rBins = new Array(256).fill(0);
  const gBins = new Array(256).fill(0);
  const bBins = new Array(256).fill(0);

  for (let i = 0; i < data.length; i += 4) {
    const lum = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
    brightBins[Math.min(255, Math.max(0, lum))]++;
    rBins[data[i]]++;
    gBins[data[i + 1]]++;
    bBins[data[i + 2]]++;
  }

  // Draw 4 separate histograms
  drawSingleHistogram(histBrightChart, brightBins, 'rgba(220, 220, 220, 0.75)');
  drawSingleHistogram(histRedChart, rBins, 'rgba(255, 68, 68, 0.75)');
  drawSingleHistogram(histGreenChart, gBins, 'rgba(68, 255, 68, 0.75)');
  drawSingleHistogram(histBlueChart, bBins, 'rgba(68, 136, 255, 0.75)');
}

if (histSourceCanvas) {
  // Try loading real photo from Wikimedia Commons (CORS-friendly)
  const defaultUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/640px-Golde33443.jpg';
  loadHistogramImage(defaultUrl);

  histBrightness?.addEventListener('input', updateHistogramDemo);
  histContrast?.addEventListener('input', updateHistogramDemo);

  histImageUpload?.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      loadHistogramImage(ev.target.result);
    };
    reader.readAsDataURL(file);
  });
}


// ----- CIE GAMUT VISUALIZATION -----
const gamutCanvas = document.getElementById('gamutCanvas');

function drawGamutDiagram() {
  if (!gamutCanvas) return;
  const ctx = gamutCanvas.getContext('2d');
  const w = gamutCanvas.width;
  const h = gamutCanvas.height;

  // Clear
  ctx.fillStyle = '#0f0f1a';
  ctx.fillRect(0, 0, w, h);

  // CIE 1931 horseshoe outline (simplified spectral locus, approximate xy coords)
  // Scaled & translated to fit canvas
  const spectralLocus = [
    [0.175, 0.005], [0.174, 0.014], [0.173, 0.030], [0.170, 0.052],
    [0.163, 0.082], [0.144, 0.132], [0.122, 0.188], [0.091, 0.255],
    [0.068, 0.320], [0.045, 0.389], [0.023, 0.460], [0.008, 0.538],
    [0.014, 0.618], [0.039, 0.676], [0.074, 0.729], [0.114, 0.763],
    [0.168, 0.790], [0.230, 0.800], [0.305, 0.795], [0.370, 0.776],
    [0.437, 0.745], [0.503, 0.706], [0.565, 0.650], [0.622, 0.594],
    [0.667, 0.543], [0.705, 0.489], [0.727, 0.446], [0.735, 0.427],
    [0.735, 0.419]
  ];

  const margin = 40;
  const plotW = w - margin * 2;
  const plotH = h - margin * 2;

  function toCanvas(xy) {
    return [margin + xy[0] * plotW / 0.8, h - margin - xy[1] * plotH / 0.9];
  }

  // Draw filled horseshoe with gradient-like effect
  ctx.beginPath();
  let firstPt = toCanvas(spectralLocus[0]);
  ctx.moveTo(firstPt[0], firstPt[1]);
  for (let i = 1; i < spectralLocus.length; i++) {
    const pt = toCanvas(spectralLocus[i]);
    ctx.lineTo(pt[0], pt[1]);
  }
  ctx.closePath();
  // Create a subtle gradient fill
  const grad = ctx.createLinearGradient(margin, h - margin, w - margin, margin);
  grad.addColorStop(0, 'rgba(0, 0, 255, 0.15)');
  grad.addColorStop(0.3, 'rgba(0, 200, 200, 0.15)');
  grad.addColorStop(0.5, 'rgba(0, 255, 0, 0.15)');
  grad.addColorStop(0.7, 'rgba(255, 255, 0, 0.12)');
  grad.addColorStop(1, 'rgba(255, 0, 0, 0.12)');
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.4)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Wavelength labels
  const waveLabels = [
    { nm: '380', idx: 0 }, { nm: '460', idx: 4 }, { nm: '480', idx: 6 },
    { nm: '500', idx: 8 }, { nm: '520', idx: 10 }, { nm: '540', idx: 12 },
    { nm: '560', idx: 14 }, { nm: '580', idx: 17 }, { nm: '600', idx: 20 },
    { nm: '620', idx: 22 }, { nm: '650', idx: 25 }, { nm: '700', idx: 28 }
  ];
  ctx.font = '9px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  waveLabels.forEach(lbl => {
    if (lbl.idx < spectralLocus.length) {
      const pt = toCanvas(spectralLocus[lbl.idx]);
      ctx.fillText(lbl.nm + 'nm', pt[0] + 4, pt[1] - 4);
    }
  });

  // Color space gamut triangles
  // Primaries in CIE xy coordinates
  const spaces = {
    srgb: {
      r: [0.64, 0.33], g: [0.30, 0.60], b: [0.15, 0.06],
      color: '#00ff00', label: 'sRGB', id: 'gamutSrgb'
    },
    adobeRgb: {
      r: [0.64, 0.33], g: [0.21, 0.71], b: [0.15, 0.06],
      color: '#ff6600', label: 'Adobe RGB', id: 'gamutAdobeRgb'
    },
    dciP3: {
      r: [0.68, 0.32], g: [0.265, 0.69], b: [0.15, 0.06],
      color: '#ff00ff', label: 'DCI-P3', id: 'gamutDciP3'
    }
  };

  Object.values(spaces).forEach(sp => {
    const cb = document.getElementById(sp.id);
    if (!cb || !cb.checked) return;

    const rPt = toCanvas(sp.r);
    const gPt = toCanvas(sp.g);
    const bPt = toCanvas(sp.b);

    // Fill triangle
    ctx.beginPath();
    ctx.moveTo(rPt[0], rPt[1]);
    ctx.lineTo(gPt[0], gPt[1]);
    ctx.lineTo(bPt[0], bPt[1]);
    ctx.closePath();
    ctx.fillStyle = sp.color.replace(')', ', 0.08)').replace('rgb', 'rgba').replace('#', '');
    // Use hex to rgba
    const r = parseInt(sp.color.slice(1, 3), 16);
    const g = parseInt(sp.color.slice(3, 5), 16);
    const b = parseInt(sp.color.slice(5, 7), 16);
    ctx.fillStyle = `rgba(${r},${g},${b},0.08)`;
    ctx.fill();

    // Stroke triangle
    ctx.strokeStyle = sp.color;
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.stroke();

    // Corner labels
    ctx.fillStyle = sp.color;
    ctx.font = 'bold 10px Inter, sans-serif';
    ctx.fillText('R', rPt[0] + 5, rPt[1] + 4);
    ctx.fillText('G', gPt[0] - 2, gPt[1] - 8);
    ctx.fillText('B', bPt[0] - 8, bPt[1] + 14);
  });

  // Axis labels
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '11px Inter, sans-serif';
  ctx.fillText('x', w - margin + 5, h - margin + 4);
  ctx.fillText('y', margin - 4, margin - 8);

  // White point (D65)
  const wp = toCanvas([0.3127, 0.3290]);
  ctx.beginPath();
  ctx.arc(wp[0], wp[1], 4, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.font = '9px Inter, sans-serif';
  ctx.fillText('D65', wp[0] + 7, wp[1] + 3);
}

if (gamutCanvas) {
  drawGamutDiagram();
  ['gamutSrgb', 'gamutAdobeRgb', 'gamutDciP3'].forEach(id => {
    const cb = document.getElementById(id);
    if (cb) cb.addEventListener('change', drawGamutDiagram);
  });
}


// ----- PERCEPTUAL UNIFORMITY DEMO -----
const perceptualCanvas = document.getElementById('perceptualCanvas');

function drawPerceptualDemo() {
  if (!perceptualCanvas) return;
  const ctx = perceptualCanvas.getContext('2d');
  const w = perceptualCanvas.width;
  const h = perceptualCanvas.height;

  ctx.fillStyle = '#0f0f1a';
  ctx.fillRect(0, 0, w, h);

  const numRects = 10;
  const rectW = w / numRects;
  const halfH = h / 2;
  const gap = 4;

  // Top row: Standard HSL (green to blue, 120° to 300°)
  for (let i = 0; i < numRects; i++) {
    const hue = 120 + (i * 18); // 120° (green) to 282° (blue-ish)
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.fillRect(i * rectW + 1, 2, rectW - 2, halfH - gap);
  }

  // Label for top row
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '11px Inter, sans-serif';
  ctx.fillText('Standart HSL', 6, 16);

  // Bottom row: Perceptually corrected (approximate correction)
  // We simulate perceptual uniformity by applying a non-linear hue mapping
  // that spreads out the green region more
  for (let i = 0; i < numRects; i++) {
    const t = i / (numRects - 1); // 0 → 1
    // Apply a curve that decompresses greens and compresses blues
    // This simulates what a perceptually uniform space would produce
    const correctedT = Math.pow(t, 0.65);
    const hue = 120 + correctedT * 162;
    // Also adjust lightness to maintain perceptual consistency
    // Blue appears darker in sRGB, so boost it; green appears brighter, so dim it
    const lightness = 42 + t * 16;
    const saturation = 85 + t * 10;
    ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    ctx.fillRect(i * rectW + 1, halfH + gap - 2, rectW - 2, halfH - gap);
  }

  // Label for bottom row
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('Algısal düzeltmeli (simülasyon)', 6, halfH + gap + 12);
}

if (perceptualCanvas) {
  drawPerceptualDemo();
}


// ----- HSL PLANE VISUALIZATION -----
const hslPlaneCanvas = document.getElementById('hslPlaneCanvas');

function hslToRgbValues(h, s, l) {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    return Math.round(255 * (l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)));
  };
  return [f(0), f(8), f(4)];
}

function drawHslPlane() {
  if (!hslPlaneCanvas || !hslH) return;
  const ctx = hslPlaneCanvas.getContext('2d');
  const w = hslPlaneCanvas.width;
  const h = hslPlaneCanvas.height;
  const hue = parseInt(hslH.value);

  const imageData = ctx.createImageData(w, h);
  const data = imageData.data;

  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const s = (px / w) * 100;
      const l = (1 - py / h) * 100;
      const [r, g, b] = hslToRgbValues(hue, s, l);
      const idx = (py * w + px) * 4;
      data[idx] = r; data[idx + 1] = g; data[idx + 2] = b; data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);

  // Crosshair for current S, L
  const curS = parseInt(hslS.value) / 100;
  const curL = parseInt(hslL.value) / 100;
  const cx = curS * w;
  const cy = (1 - curL) * h;

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(cx, cy, 9, 0, Math.PI * 2); ctx.stroke();

  // Update preview box
  const preview = document.getElementById('hslPlanePreview');
  const info = document.getElementById('hslPlaneInfo');
  if (preview) {
    const curSVal = parseInt(hslS.value);
    const curLVal = parseInt(hslL.value);
    preview.style.background = `hsl(${hue}, ${curSVal}%, ${curLVal}%)`;
    if (info) info.innerHTML = `H: ${hue}°<br>S: ${curSVal}%<br>L: ${curLVal}%`;
  }
}

if (hslPlaneCanvas && hslH) {
  hslH.addEventListener('input', drawHslPlane);
  hslS.addEventListener('input', drawHslPlane);
  hslL.addEventListener('input', drawHslPlane);
  drawHslPlane();

  hslPlaneCanvas.addEventListener('click', function (e) {
    const rect = hslPlaneCanvas.getBoundingClientRect();
    const scaleX = hslPlaneCanvas.width / rect.width;
    const scaleY = hslPlaneCanvas.height / rect.height;
    const px = (e.clientX - rect.left) * scaleX;
    const py = (e.clientY - rect.top) * scaleY;

    const s = Math.round((px / hslPlaneCanvas.width) * 100);
    const l = Math.round((1 - py / hslPlaneCanvas.height) * 100);

    hslS.value = Math.max(0, Math.min(100, s));
    hslL.value = Math.max(0, Math.min(100, l));
    updateHSL();
    drawHslPlane();
  });
}


// ----- CIE Lab DEMO -----
const labLSlider = document.getElementById('labL');
const labASlider = document.getElementById('labA');
const labBSlider = document.getElementById('labB');
const labPlaneCanvas = document.getElementById('labPlaneCanvas');
const labPreview = document.getElementById('labPreview');

function labToRgb(L, a, b) {
  let fy = (L + 16) / 116;
  let fx = a / 500 + fy;
  let fz = fy - b / 200;

  const delta = 6 / 29;
  const delta3 = delta * delta * delta;
  const factor = 3 * delta * delta;

  let x = fx > delta ? fx * fx * fx : (fx - 16 / 116) * factor;
  let y = fy > delta ? fy * fy * fy : (fy - 16 / 116) * factor;
  let z = fz > delta ? fz * fz * fz : (fz - 16 / 116) * factor;

  // D65 white point
  x *= 0.95047; y *= 1.00000; z *= 1.08883;

  // XYZ to linear sRGB
  let r =  3.2406 * x - 1.5372 * y - 0.4986 * z;
  let g = -0.9689 * x + 1.8758 * y + 0.0415 * z;
  let bl = 0.0557 * x - 0.2040 * y + 1.0570 * z;

  // sRGB gamma
  const gamma = c => c > 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c;
  r = gamma(r); g = gamma(g); bl = gamma(bl);

  return [
    Math.round(Math.max(0, Math.min(1, r)) * 255),
    Math.round(Math.max(0, Math.min(1, g)) * 255),
    Math.round(Math.max(0, Math.min(1, bl)) * 255)
  ];
}

function drawLabPlane() {
  if (!labPlaneCanvas || !labLSlider) return;
  const ctx = labPlaneCanvas.getContext('2d');
  const w = labPlaneCanvas.width;
  const h = labPlaneCanvas.height;
  const L = parseInt(labLSlider.value);

  const imageData = ctx.createImageData(w, h);
  const data = imageData.data;

  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const a = (px / w) * 256 - 128;
      const b = 127 - (py / h) * 256;

      // Inline Lab→RGB with gamut check (unclamped)
      let fy = (L + 16) / 116;
      let fx = a / 500 + fy;
      let fz = fy - b / 200;
      const d = 6 / 29, fac = 3 * d * d;
      let xv = fx > d ? fx * fx * fx : (fx - 16 / 116) * fac;
      let yv = fy > d ? fy * fy * fy : (fy - 16 / 116) * fac;
      let zv = fz > d ? fz * fz * fz : (fz - 16 / 116) * fac;
      xv *= 0.95047; yv *= 1.0; zv *= 1.08883;
      let rl =  3.2406 * xv - 1.5372 * yv - 0.4986 * zv;
      let gl = -0.9689 * xv + 1.8758 * yv + 0.0415 * zv;
      let bl =  0.0557 * xv - 0.2040 * yv + 1.0570 * zv;
      const gm = c => c > 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c;
      rl = gm(rl); gl = gm(gl); bl = gm(bl);

      const idx = (py * w + px) * 4;
      if (rl >= -0.005 && rl <= 1.005 && gl >= -0.005 && gl <= 1.005 && bl >= -0.005 && bl <= 1.005) {
        data[idx] = Math.round(Math.max(0, Math.min(1, rl)) * 255);
        data[idx + 1] = Math.round(Math.max(0, Math.min(1, gl)) * 255);
        data[idx + 2] = Math.round(Math.max(0, Math.min(1, bl)) * 255);
        data[idx + 3] = 255;
      } else {
        data[idx] = 15; data[idx + 1] = 15; data[idx + 2] = 25; data[idx + 3] = 255;
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);

  // Crosshair for current a*, b*
  const curA = parseInt(labASlider.value);
  const curB = parseInt(labBSlider.value);
  const cx = ((curA + 128) / 256) * w;
  const cy = ((127 - curB) / 256) * h;

  ctx.strokeStyle = 'white'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.stroke();

  const labPlaneLEl = document.getElementById('labPlaneL');
  if (labPlaneLEl) labPlaneLEl.textContent = L;
}

function updateLabDemo() {
  if (!labLSlider) return;
  const L = parseInt(labLSlider.value);
  const a = parseInt(labASlider.value);
  const b = parseInt(labBSlider.value);

  document.getElementById('labLVal').textContent = L;
  document.getElementById('labAVal').textContent = a;
  document.getElementById('labBVal').textContent = b;

  const [r, g, bl] = labToRgb(L, a, b);
  if (labPreview) labPreview.style.background = `rgb(${r}, ${g}, ${bl})`;

  const labRgbText = document.getElementById('labRgbText');
  if (labRgbText) labRgbText.textContent = `Lab(${L}, ${a}, ${b}) → RGB(${r}, ${g}, ${bl})`;

  drawLabPlane();
}

if (labLSlider) {
  labLSlider.addEventListener('input', updateLabDemo);
  labASlider.addEventListener('input', updateLabDemo);
  labBSlider.addEventListener('input', updateLabDemo);
  updateLabDemo();

  labPlaneCanvas?.addEventListener('click', function (e) {
    const rect = labPlaneCanvas.getBoundingClientRect();
    const scaleX = labPlaneCanvas.width / rect.width;
    const scaleY = labPlaneCanvas.height / rect.height;
    const px = (e.clientX - rect.left) * scaleX;
    const py = (e.clientY - rect.top) * scaleY;

    const a = Math.round((px / labPlaneCanvas.width) * 256 - 128);
    const b = Math.round(127 - (py / labPlaneCanvas.height) * 256);

    labASlider.value = Math.max(-128, Math.min(127, a));
    labBSlider.value = Math.max(-128, Math.min(127, b));
    updateLabDemo();
  });
}


// ----- YUV/YCbCr CHANNEL DECOMPOSITION -----
const yuvOrigCanvas = document.getElementById('yuvOriginal');
const yuvYCanvas = document.getElementById('yuvY');
const yuvCbCanvas = document.getElementById('yuvCb');
const yuvCrCanvas = document.getElementById('yuvCr');

function decomposeYCbCr(origCtx, w, h) {
  const origData = origCtx.getImageData(0, 0, w, h);
  const yCtx = yuvYCanvas.getContext('2d');
  const cbCtx = yuvCbCanvas.getContext('2d');
  const crCtx = yuvCrCanvas.getContext('2d');

  const yData = yCtx.createImageData(w, h);
  const cbData = cbCtx.createImageData(w, h);
  const crData = crCtx.createImageData(w, h);

  for (let i = 0; i < origData.data.length; i += 4) {
    const r = origData.data[i];
    const g = origData.data[i + 1];
    const b = origData.data[i + 2];

    // BT.601 YCbCr conversion
    const yVal = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    const cbVal = Math.round(128 - 0.169 * r - 0.331 * g + 0.500 * b);
    const crVal = Math.round(128 + 0.500 * r - 0.419 * g - 0.081 * b);

    const yc = Math.max(0, Math.min(255, yVal));
    const cbc = Math.max(0, Math.min(255, cbVal));
    const crc = Math.max(0, Math.min(255, crVal));

    // Y channel: grayscale
    yData.data[i] = yc; yData.data[i + 1] = yc; yData.data[i + 2] = yc; yData.data[i + 3] = 255;

    // Cb channel: blue tint (low=warm, high=blue)
    cbData.data[i] = Math.round(255 - cbc * 0.8);
    cbData.data[i + 1] = Math.round(255 - Math.abs(cbc - 128) * 1.5);
    cbData.data[i + 2] = cbc;
    cbData.data[i + 3] = 255;

    // Cr channel: red tint (low=cyan, high=red)
    crData.data[i] = crc;
    crData.data[i + 1] = Math.round(255 - Math.abs(crc - 128) * 1.5);
    crData.data[i + 2] = Math.round(255 - crc * 0.8);
    crData.data[i + 3] = 255;
  }

  yCtx.putImageData(yData, 0, 0);
  cbCtx.putImageData(cbData, 0, 0);
  crCtx.putImageData(crData, 0, 0);
}

function drawYuvDemo() {
  if (!yuvOrigCanvas) return;
  const w = yuvOrigCanvas.width;
  const h = yuvOrigCanvas.height;

  // Create a colorful test scene
  const origCtx = yuvOrigCanvas.getContext('2d');
  const origData = origCtx.createImageData(w, h);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const nx = x / w, ny = y / h;
      let r, g, b;

      if (ny < 0.35) {
        // Sky - blue gradient
        r = 60 + ny * 120;
        g = 120 + ny * 100;
        b = 200 - ny * 60;
      } else if (ny < 0.42) {
        // Mountain ridge
        const ridge = 0.35 + Math.sin(nx * 25) * 0.03;
        if (ny < ridge) { r = 60 + ny * 120; g = 120 + ny * 100; b = 200 - ny * 60; }
        else { r = 90 + Math.sin(nx * 15) * 25; g = 75 + Math.sin(nx * 12) * 15; b = 70; }
      } else {
        // Green meadow
        r = 40 + ny * 50 + Math.sin(nx * 40 + ny * 20) * 15;
        g = 100 + Math.sin(nx * 30) * 25 + ny * 40;
        b = 30 + ny * 25;
        // Red flowers
        if (Math.sin(nx * 55 + ny * 35) > 0.88) { r = 220; g = 45; b = 55; }
        // Yellow flowers
        if (Math.sin(nx * 42 + ny * 60 + 2) > 0.90) { r = 240; g = 210; b = 40; }
        // Blue flowers
        if (Math.sin(nx * 38 + ny * 48 + 5) > 0.92) { r = 60; g = 80; b = 210; }
      }

      origData.data[idx] = Math.min(255, Math.max(0, Math.round(r)));
      origData.data[idx + 1] = Math.min(255, Math.max(0, Math.round(g)));
      origData.data[idx + 2] = Math.min(255, Math.max(0, Math.round(b)));
      origData.data[idx + 3] = 255;
    }
  }
  origCtx.putImageData(origData, 0, 0);

  decomposeYCbCr(origCtx, w, h);
}

if (yuvOrigCanvas) {
  drawYuvDemo();

  // Image upload for YCbCr demo
  const yuvUpload = document.getElementById('yuvImageUpload');
  if (yuvUpload) {
    yuvUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        const img = new Image();
        img.onload = function() {
          const w = yuvOrigCanvas.width;
          const h = yuvOrigCanvas.height;
          const origCtx = yuvOrigCanvas.getContext('2d');
          origCtx.clearRect(0, 0, w, h);
          // Draw image to fit canvas while maintaining aspect ratio
          const scale = Math.min(w / img.width, h / img.height);
          const sw = img.width * scale;
          const sh = img.height * scale;
          const sx = (w - sw) / 2;
          const sy = (h - sh) / 2;
          origCtx.fillStyle = '#000';
          origCtx.fillRect(0, 0, w, h);
          origCtx.drawImage(img, sx, sy, sw, sh);

          // Resize all canvases if needed for better quality
          [yuvYCanvas, yuvCbCanvas, yuvCrCanvas].forEach(c => {
            c.width = w;
            c.height = h;
          });

          decomposeYCbCr(origCtx, w, h);
        };
        img.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    });
  }
}