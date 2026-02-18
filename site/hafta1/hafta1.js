// =============================================
// HAFTA 1 - Bilgisayar Grafiğine Giriş
// İnteraktif Demolar
// =============================================

// ----- PIXEL GRID DEMO -----
const pixelCanvas = document.getElementById('pixelCanvas');
const pixelCtx = pixelCanvas ? pixelCanvas.getContext('2d') : null;
const GRID_SIZE = 16;
const CELL_SIZE = pixelCanvas ? pixelCanvas.width / GRID_SIZE : 30;
let pixelGrid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
let isDrawing = false;

function drawPixelGrid() {
  if (!pixelCtx) return;
  const bgPrimary = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim() || '#0f0f1a';
  const bgSecondary = getComputedStyle(document.documentElement).getPropertyValue('--bg-secondary').trim() || '#1a1a2e';
  const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim() || '#2a2a4a';
  pixelCtx.fillStyle = bgPrimary;
  pixelCtx.fillRect(0, 0, pixelCanvas.width, pixelCanvas.height);

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const px = x * CELL_SIZE;
      const py = y * CELL_SIZE;

      if (pixelGrid[y][x]) {
        pixelCtx.fillStyle = pixelGrid[y][x];
        pixelCtx.fillRect(px + 1, py + 1, CELL_SIZE - 2, CELL_SIZE - 2);
      } else {
        pixelCtx.fillStyle = bgSecondary;
        pixelCtx.fillRect(px + 1, py + 1, CELL_SIZE - 2, CELL_SIZE - 2);
      }

      // Grid lines
      pixelCtx.strokeStyle = borderColor;
      pixelCtx.lineWidth = 0.5;
      pixelCtx.strokeRect(px, py, CELL_SIZE, CELL_SIZE);
    }
  }
}

function getGridPos(e) {
  const rect = pixelCanvas.getBoundingClientRect();
  const scaleX = pixelCanvas.width / rect.width;
  const scaleY = pixelCanvas.height / rect.height;
  const x = Math.floor((e.clientX - rect.left) * scaleX / CELL_SIZE);
  const y = Math.floor((e.clientY - rect.top) * scaleY / CELL_SIZE);
  return { x: Math.max(0, Math.min(x, GRID_SIZE - 1)), y: Math.max(0, Math.min(y, GRID_SIZE - 1)) };
}

function paintPixel(e) {
  const { x, y } = getGridPos(e);
  const color = document.getElementById('pixelColor').value;
  pixelGrid[y][x] = color;
  drawPixelGrid();
}

if (pixelCanvas) {
  pixelCanvas.addEventListener('mousedown', (e) => { isDrawing = true; paintPixel(e); });
  pixelCanvas.addEventListener('mousemove', (e) => { if (isDrawing) paintPixel(e); });
  pixelCanvas.addEventListener('mouseup', () => isDrawing = false);
  pixelCanvas.addEventListener('mouseleave', () => isDrawing = false);

  // Touch support
  pixelCanvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isDrawing = true;
    paintPixel(e.touches[0]);
  });
  pixelCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (isDrawing) paintPixel(e.touches[0]);
  });
  pixelCanvas.addEventListener('touchend', () => isDrawing = false);

  drawPixelGrid();
}

window.clearPixelGrid = function () {
  pixelGrid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
  drawPixelGrid();
};

window.randomFillPixels = function () {
  const colors = ['#e94560', '#00d2ff', '#00e676', '#ffd600', '#ff9100', '#533483', '#0f3460', '#ffffff'];
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (Math.random() > 0.5) {
        pixelGrid[y][x] = colors[Math.floor(Math.random() * colors.length)];
      } else {
        pixelGrid[y][x] = null;
      }
    }
  }
  drawPixelGrid();
};


// ----- RESOLUTION DEMO -----
const resCanvas = document.getElementById('resolutionCanvas');
const resCtx = resCanvas ? resCanvas.getContext('2d') : null;
const resSlider = document.getElementById('resolutionSlider');
const resValue = document.getElementById('resolutionValue');

function drawSmiley(ctx, w, h, res) {
  // Draw a smiley face at given resolution
  const cellW = w / res;
  const cellH = h / res;

  // First pass: draw the smiley into a small offscreen canvas
  const offscreen = document.createElement('canvas');
  offscreen.width = res;
  offscreen.height = res;
  const offCtx = offscreen.getContext('2d');

  // Background
  offCtx.fillStyle = '#1a1a2e';
  offCtx.fillRect(0, 0, res, res);

  // Face circle
  const cx = res / 2;
  const cy = res / 2;
  const r = res * 0.35;

  offCtx.fillStyle = '#ffd600';
  offCtx.beginPath();
  offCtx.arc(cx, cy, r, 0, Math.PI * 2);
  offCtx.fill();

  // Eyes
  offCtx.fillStyle = '#0f0f1a';
  const eyeR = r * 0.12;
  offCtx.beginPath();
  offCtx.arc(cx - r * 0.3, cy - r * 0.2, eyeR, 0, Math.PI * 2);
  offCtx.fill();
  offCtx.beginPath();
  offCtx.arc(cx + r * 0.3, cy - r * 0.2, eyeR, 0, Math.PI * 2);
  offCtx.fill();

  // Smile
  offCtx.strokeStyle = '#0f0f1a';
  offCtx.lineWidth = Math.max(1, res * 0.03);
  offCtx.beginPath();
  offCtx.arc(cx, cy + r * 0.05, r * 0.5, 0.2, Math.PI - 0.2);
  offCtx.stroke();

  // Read pixel data from offscreen and draw as big blocks
  const imgData = offCtx.getImageData(0, 0, res, res);
  ctx.clearRect(0, 0, w, h);

  for (let y = 0; y < res; y++) {
    for (let x = 0; x < res; x++) {
      const i = (y * res + x) * 4;
      const cr = imgData.data[i];
      const cg = imgData.data[i + 1];
      const cb = imgData.data[i + 2];
      ctx.fillStyle = `rgb(${cr},${cg},${cb})`;
      ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
    }
  }

  // Grid lines for low res
  if (res <= 24) {
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= res; x++) {
      ctx.beginPath();
      ctx.moveTo(x * cellW, 0);
      ctx.lineTo(x * cellW, h);
      ctx.stroke();
    }
    for (let y = 0; y <= res; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * cellH);
      ctx.lineTo(w, y * cellH);
      ctx.stroke();
    }
  }
}

if (resCanvas && resSlider) {
  const updateRes = () => {
    const res = parseInt(resSlider.value);
    resValue.textContent = `${res}×${res}`;
    drawSmiley(resCtx, resCanvas.width, resCanvas.height, res);
  };
  resSlider.addEventListener('input', updateRes);
  updateRes();
}


// ----- RASTER VS VECTOR COMPARISON -----
const rasterCanvas = document.getElementById('rasterDemo');
const vectorCanvas = document.getElementById('vectorDemo');
let comparisonZoomed = false;

function drawRasterCircle(ctx, w, h, zoom) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, w, h);

  // Draw circle at low resolution then scale up
  const lowRes = 32;
  const offscreen = document.createElement('canvas');
  offscreen.width = lowRes;
  offscreen.height = lowRes;
  const offCtx = offscreen.getContext('2d');

  offCtx.fillStyle = '#1a1a2e';
  offCtx.fillRect(0, 0, lowRes, lowRes);
  offCtx.fillStyle = '#e94560';
  offCtx.beginPath();
  offCtx.arc(lowRes / 2, lowRes / 2, lowRes * 0.35, 0, Math.PI * 2);
  offCtx.fill();

  ctx.imageSmoothingEnabled = false;
  if (zoom) {
    // Zoom into a section
    ctx.drawImage(offscreen, 6, 6, 12, 12, 0, 0, w, h);
  } else {
    ctx.drawImage(offscreen, 0, 0, w, h);
  }

  // Label
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '14px Inter, sans-serif';
  ctx.fillText(zoom ? '🔍 Yakınlaştırılmış — piksel blokları!' : 'Normal boyut', 10, h - 15);
}

function drawVectorCircle(ctx, w, h, zoom) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, w, h);

  if (zoom) {
    // Zoomed - draw larger, still smooth
    ctx.fillStyle = '#00d2ff';
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.5, w * 0.6, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillStyle = '#00d2ff';
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w * 0.35, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '14px Inter, sans-serif';
  ctx.fillText(zoom ? '🔍 Yakınlaştırılmış — hâlâ keskin!' : 'Normal boyut', 10, h - 15);
}

function renderComparison() {
  if (rasterCanvas) {
    const rCtx = rasterCanvas.getContext('2d');
    drawRasterCircle(rCtx, rasterCanvas.width, rasterCanvas.height, comparisonZoomed);
  }
  if (vectorCanvas) {
    const vCtx = vectorCanvas.getContext('2d');
    drawVectorCircle(vCtx, vectorCanvas.width, vectorCanvas.height, comparisonZoomed);
  }
}

window.zoomComparison = function () {
  comparisonZoomed = true;
  renderComparison();
};

window.resetComparison = function () {
  comparisonZoomed = false;
  renderComparison();
};

renderComparison();


// ----- CPU vs GPU DEMO -----
const cpuCanvas = document.getElementById('cpuCanvas');
const gpuCanvas = document.getElementById('gpuCanvas');
const CPU_GPU_SIZE = 32;
let cpuGpuRunning = false;

function getRandomColor() {
  const hue = Math.random() * 360;
  return `hsl(${hue}, 70%, 55%)`;
}

window.startCpuGpuDemo = async function () {
  if (cpuGpuRunning) return;
  cpuGpuRunning = true;

  const cpuCtx = cpuCanvas.getContext('2d');
  const gpuCtx = gpuCanvas.getContext('2d');
  const cellW = cpuCanvas.width / CPU_GPU_SIZE;
  const cellH = cpuCanvas.height / CPU_GPU_SIZE;

  // Clear
  cpuCtx.fillStyle = '#0f0f1a';
  cpuCtx.fillRect(0, 0, cpuCanvas.width, cpuCanvas.height);
  gpuCtx.fillStyle = '#0f0f1a';
  gpuCtx.fillRect(0, 0, gpuCanvas.width, gpuCanvas.height);

  // Generate colors
  const colors = [];
  for (let i = 0; i < CPU_GPU_SIZE * CPU_GPU_SIZE; i++) {
    colors.push(getRandomColor());
  }

  // CPU: Sequential (slow, animated)
  const cpuStart = performance.now();
  let idx = 0;

  function cpuStep() {
    if (idx >= CPU_GPU_SIZE * CPU_GPU_SIZE) {
      const elapsed = performance.now() - cpuStart;
      document.getElementById('cpuTime').textContent = `⏱️ ${elapsed.toFixed(0)} ms (simüle edilmiş)`;
      return;
    }

    const batchSize = 4; // Process a few per frame to look sequential but not too slow
    for (let b = 0; b < batchSize && idx < CPU_GPU_SIZE * CPU_GPU_SIZE; b++, idx++) {
      const x = idx % CPU_GPU_SIZE;
      const y = Math.floor(idx / CPU_GPU_SIZE);
      cpuCtx.fillStyle = colors[idx];
      cpuCtx.fillRect(x * cellW, y * cellH, cellW - 0.5, cellH - 0.5);
    }

    requestAnimationFrame(cpuStep);
  }

  cpuStep();

  // GPU: All at once (after a short delay to show the contrast)
  setTimeout(() => {
    const gpuStart = performance.now();
    for (let i = 0; i < CPU_GPU_SIZE * CPU_GPU_SIZE; i++) {
      const x = i % CPU_GPU_SIZE;
      const y = Math.floor(i / CPU_GPU_SIZE);
      gpuCtx.fillStyle = colors[i];
      gpuCtx.fillRect(x * cellW, y * cellH, cellW - 0.5, cellH - 0.5);
    }
    const gpuElapsed = performance.now() - gpuStart;
    document.getElementById('gpuTime').textContent = `⏱️ ${gpuElapsed.toFixed(1)} ms (anında!)`;
    cpuGpuRunning = false;
  }, 200);
};

window.resetCpuGpuDemo = function () {
  cpuGpuRunning = false;
  if (cpuCanvas) {
    const ctx = cpuCanvas.getContext('2d');
    ctx.fillStyle = '#0f0f1a';
    ctx.fillRect(0, 0, cpuCanvas.width, cpuCanvas.height);
  }
  if (gpuCanvas) {
    const ctx = gpuCanvas.getContext('2d');
    ctx.fillStyle = '#0f0f1a';
    ctx.fillRect(0, 0, gpuCanvas.width, gpuCanvas.height);
  }
  document.getElementById('cpuTime').textContent = 'Bekleniyor...';
  document.getElementById('gpuTime').textContent = 'Bekleniyor...';
};


// ----- PIPELINE STEPS -----
const pipelineSteps = [
  { icon: '🧠', title: 'Uygulama (CPU)', desc: 'Oyun mantığı, fizik, yapay zeka hesaplanır. "Ne çizilecek?" kararı verilir.', color: '#00d2ff' },
  { icon: '📐', title: 'Geometri İşleme (GPU)', desc: '3D modellerin köşe noktaları (vertex) ekran koordinatlarına dönüştürülür.', color: '#533483' },
  { icon: '🔲', title: 'Rasterizasyon (GPU)', desc: 'Üçgenler piksellere dönüştürülür. Hangi pikseller bu üçgenin içinde?', color: '#e94560' },
  { icon: '🎨', title: 'Piksel İşleme (GPU)', desc: 'Her pikselin rengi hesaplanır: texture + ışık + gölge + efektler. Shader\'lar burada çalışır!', color: '#ff9100' },
  { icon: '🖥️', title: 'Ekrana Çıktı', desc: 'Hesaplanan piksel renkleri ekran belleğine yazılır ve monitörde görüntülenir.', color: '#00e676' },
];

const pipelineContainer = document.getElementById('pipelineSteps');
if (pipelineContainer) {
  pipelineSteps.forEach((step, i) => {
    const div = document.createElement('div');
    div.style.cssText = `
      display: flex; align-items: center; gap: 1rem;
      padding: 1rem 1.25rem; background: rgba(255,255,255,0.03);
      border-left: 4px solid ${step.color}; border-radius: 8px;
      transition: all 0.3s ease; cursor: default;
    `;
    div.addEventListener('mouseenter', () => {
      div.style.background = 'rgba(255,255,255,0.07)';
      div.style.transform = 'translateX(8px)';
    });
    div.addEventListener('mouseleave', () => {
      div.style.background = 'rgba(255,255,255,0.03)';
      div.style.transform = 'translateX(0)';
    });

    div.innerHTML = `
      <div style="font-size: 1.5rem; flex-shrink: 0;">${step.icon}</div>
      <div>
        <div style="font-weight: 700; color: ${step.color}; font-size: 0.95rem;">${i + 1}. ${step.title}</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">${step.desc}</div>
      </div>
    `;

    pipelineContainer.appendChild(div);

    // Arrow between steps
    if (i < pipelineSteps.length - 1) {
      const arrow = document.createElement('div');
      arrow.style.cssText = 'text-align: center; color: var(--text-secondary); font-size: 1.2rem; opacity: 0.4;';
      arrow.textContent = '↓';
      pipelineContainer.appendChild(arrow);
    }
  });
}


// ----- TIMELINE -----
const timelineData = [
  { year: '1972', title: 'Pong', desc: '2 çubuk, 1 top, siyah-beyaz piksel. Bilgisayar oyunlarının doğuşu.', color: '#ffffff' },
  { year: '1981', title: 'Donkey Kong', desc: 'İlk "sprite" tabanlı oyunlardan biri. Mario burada doğdu!', color: '#e94560' },
  { year: '1985', title: 'Super Mario Bros', desc: '8-bit pixel art, renkli arka planlar, scrolling dünyalar.', color: '#ff9100' },
  { year: '1992', title: 'Wolfenstein 3D', desc: 'FPS oyunlarının öncüsü. "Sahte 3D" (raycasting) tekniği.', color: '#533483' },
  { year: '1996', title: 'Quake / Super Mario 64', desc: 'Gerçek 3D grafiklerin başlangıcı. İlk 3D hızlandırıcılar (GPU\'lar).', color: '#0f3460' },
  { year: '2004', title: 'Half-Life 2 / Doom 3', desc: 'Gelişmiş ışıklandırma, fizik, yüz animasyonları.', color: '#00d2ff' },
  { year: '2018', title: 'RTX / Ray Tracing', desc: 'Gerçek zamanlı ışın izleme (ray tracing). Foto-gerçekçi yansımalar ve ışıklar.', color: '#00e676' },
  { year: '2024+', title: 'AI + Grafikler', desc: 'DLSS, yapay zeka ile upscaling, prosedürel içerik üretimi, Nanite (UE5).', color: '#ffd600' },
];

const timelineContainer = document.getElementById('timelineContainer');
if (timelineContainer) {
  // Timeline line
  const line = document.createElement('div');
  line.style.cssText = 'position: absolute; left: 14px; top: 0; bottom: 0; width: 2px; background: var(--border-color);';
  timelineContainer.appendChild(line);

  timelineData.forEach((item, i) => {
    const entry = document.createElement('div');
    entry.style.cssText = `
      position: relative; padding-left: 30px; margin-bottom: 2rem;
      opacity: 0; animation: fadeInUp 0.5s ease forwards;
      animation-delay: ${i * 0.1}s;
    `;

    entry.innerHTML = `
      <div style="position: absolute; left: -2px; top: 6px; width: 12px; height: 12px;
        background: ${item.color}; border-radius: 50%; border: 2px solid var(--bg-primary);
        box-shadow: 0 0 8px ${item.color}44;"></div>
      <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.25rem;">
        <span style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: ${item.color}; font-size: 1.1rem;">${item.year}</span>
        <span style="font-weight: 700; color: var(--text-heading);">${item.title}</span>
      </div>
      <p style="font-size: 0.9rem; margin: 0; color: var(--text-secondary);">${item.desc}</p>
    `;

    timelineContainer.appendChild(entry);
  });
}


// ═══════════════════════════════════════════
// NEW INTERACTIVE DEMOS
// ═══════════════════════════════════════════

// ----- RASTER ZOOM DEGRADATION DEMO -----
const rasterZoomSlider = document.getElementById('rasterZoomSlider');
const rasterZoomValue = document.getElementById('rasterZoomValue');
const rasterZoomOriginal = document.getElementById('rasterZoomOriginal');
const rasterZoomDetail = document.getElementById('rasterZoomDetail');

function createSampleImage(canvas) {
  // Draw a colorful landscape scene
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;

  // Sky gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.6);
  skyGrad.addColorStop(0, '#1a237e');
  skyGrad.addColorStop(0.4, '#4fc3f7');
  skyGrad.addColorStop(1, '#b3e5fc');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h * 0.6);

  // Sun
  ctx.fillStyle = '#ffd54f';
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.2, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff9c4';
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.2, 22, 0, Math.PI * 2);
  ctx.fill();

  // Mountains
  ctx.fillStyle = '#37474f';
  ctx.beginPath();
  ctx.moveTo(0, h * 0.55);
  ctx.lineTo(w * 0.15, h * 0.3);
  ctx.lineTo(w * 0.3, h * 0.5);
  ctx.lineTo(w * 0.5, h * 0.25);
  ctx.lineTo(w * 0.65, h * 0.45);
  ctx.lineTo(w * 0.8, h * 0.3);
  ctx.lineTo(w, h * 0.5);
  ctx.lineTo(w, h * 0.6);
  ctx.lineTo(0, h * 0.6);
  ctx.fill();

  // Snow caps
  ctx.fillStyle = '#eceff1';
  ctx.beginPath();
  ctx.moveTo(w * 0.47, h * 0.26);
  ctx.lineTo(w * 0.5, h * 0.25);
  ctx.lineTo(w * 0.53, h * 0.28);
  ctx.lineTo(w * 0.51, h * 0.3);
  ctx.lineTo(w * 0.49, h * 0.29);
  ctx.fill();

  // Grass
  const grassGrad = ctx.createLinearGradient(0, h * 0.55, 0, h);
  grassGrad.addColorStop(0, '#388e3c');
  grassGrad.addColorStop(1, '#1b5e20');
  ctx.fillStyle = grassGrad;
  ctx.fillRect(0, h * 0.55, w, h * 0.45);

  // Trees
  for (let i = 0; i < 8; i++) {
    const tx = w * 0.05 + Math.random() * w * 0.9;
    const ty = h * 0.55 + Math.random() * h * 0.2;
    const ts = 8 + Math.random() * 15;
    // Trunk
    ctx.fillStyle = '#4e342e';
    ctx.fillRect(tx - 2, ty, 4, ts * 0.6);
    // Canopy
    ctx.fillStyle = '#2e7d32';
    ctx.beginPath();
    ctx.moveTo(tx, ty - ts);
    ctx.lineTo(tx + ts * 0.5, ty);
    ctx.lineTo(tx - ts * 0.5, ty);
    ctx.fill();
  }

  // Small house
  ctx.fillStyle = '#d32f2f';
  ctx.fillRect(w * 0.55, h * 0.62, 30, 22);
  ctx.fillStyle = '#bf360c';
  ctx.beginPath();
  ctx.moveTo(w * 0.55 - 3, h * 0.62);
  ctx.lineTo(w * 0.55 + 15, h * 0.58);
  ctx.lineTo(w * 0.55 + 33, h * 0.62);
  ctx.fill();
  ctx.fillStyle = '#fff9c4';
  ctx.fillRect(w * 0.55 + 10, h * 0.67, 8, 8);

  // Flowers
  const flowerColors = ['#f44336', '#e91e63', '#ffeb3b', '#ff9800', '#ab47bc'];
  for (let i = 0; i < 25; i++) {
    const fx = Math.random() * w;
    const fy = h * 0.7 + Math.random() * h * 0.25;
    ctx.fillStyle = flowerColors[Math.floor(Math.random() * flowerColors.length)];
    ctx.beginPath();
    ctx.arc(fx, fy, 2 + Math.random() * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  return ctx;
}

let sampleImageData = null;

if (rasterZoomOriginal && rasterZoomDetail && rasterZoomSlider) {
  const origCtx = rasterZoomOriginal.getContext('2d');
  createSampleImage(rasterZoomOriginal);
  sampleImageData = origCtx.getImageData(0, 0, rasterZoomOriginal.width, rasterZoomOriginal.height);

  function updateRasterZoom() {
    const zoom = parseInt(rasterZoomSlider.value);
    rasterZoomValue.textContent = `${zoom}x`;

    // Redraw original with zoom box indicator
    const origCtx2 = rasterZoomOriginal.getContext('2d');
    origCtx2.putImageData(sampleImageData, 0, 0);

    const w = rasterZoomOriginal.width;
    const h = rasterZoomOriginal.height;
    const regionW = w / zoom;
    const regionH = h / zoom;
    const rx = (w - regionW) / 2;
    const ry = (h - regionH) / 2;

    // Draw zoom region indicator
    origCtx2.strokeStyle = '#e94560';
    origCtx2.lineWidth = 2;
    origCtx2.setLineDash([5, 3]);
    origCtx2.strokeRect(rx, ry, regionW, regionH);
    origCtx2.setLineDash([]);

    // Draw zoomed detail with nearest-neighbor (pixelated) look
    const detailCtx = rasterZoomDetail.getContext('2d');
    detailCtx.clearRect(0, 0, rasterZoomDetail.width, rasterZoomDetail.height);
    detailCtx.imageSmoothingEnabled = false;

    // Create temp canvas with source image
    const temp = document.createElement('canvas');
    temp.width = rasterZoomOriginal.width;
    temp.height = rasterZoomOriginal.height;
    const tempCtx = temp.getContext('2d');
    tempCtx.putImageData(sampleImageData, 0, 0);

    // Draw zoomed region
    detailCtx.drawImage(temp, rx, ry, regionW, regionH, 0, 0, rasterZoomDetail.width, rasterZoomDetail.height);

    // Grid lines for high zoom
    if (zoom >= 8) {
      const pixelSize = rasterZoomDetail.width / regionW;
      detailCtx.strokeStyle = 'rgba(255,255,255,0.15)';
      detailCtx.lineWidth = 0.5;
      for (let x = 0; x < rasterZoomDetail.width; x += pixelSize) {
        detailCtx.beginPath();
        detailCtx.moveTo(x, 0);
        detailCtx.lineTo(x, rasterZoomDetail.height);
        detailCtx.stroke();
      }
      for (let y = 0; y < rasterZoomDetail.height; y += pixelSize) {
        detailCtx.beginPath();
        detailCtx.moveTo(0, y);
        detailCtx.lineTo(rasterZoomDetail.width, y);
        detailCtx.stroke();
      }
    }
  }

  rasterZoomSlider.addEventListener('input', updateRasterZoom);
  updateRasterZoom();
}


// ----- BMP PIXEL DATA DEMO -----
const bmpCanvas = document.getElementById('bmpDemoCanvas');
let bmpPixels = [];
const BMP_GRID = 8;

function initBmpPixels() {
  bmpPixels = [];
  const palette = [
    [233,69,96], [0,210,255], [0,230,118], [255,214,0],
    [255,145,0], [83,52,131], [15,52,96], [224,224,224],
    [233,69,96], [0,210,255], [0,230,118], [255,214,0],
    [255,145,0], [83,52,131], [15,52,96], [224,224,224],
  ];
  for (let y = 0; y < BMP_GRID; y++) {
    const row = [];
    for (let x = 0; x < BMP_GRID; x++) {
      const c = palette[(y * BMP_GRID + x) % palette.length];
      row.push([c[0], c[1], c[2]]);
    }
    bmpPixels.push(row);
  }
}

function drawBmpDemo() {
  if (!bmpCanvas) return;
  const ctx = bmpCanvas.getContext('2d');
  const w = bmpCanvas.width, h = bmpCanvas.height;
  const cellW = w / BMP_GRID, cellH = h / BMP_GRID;

  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim() || '#0f0f1a';
  ctx.fillRect(0, 0, w, h);

  for (let y = 0; y < BMP_GRID; y++) {
    for (let x = 0; x < BMP_GRID; x++) {
      const [r, g, b] = bmpPixels[y][x];
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x * cellW + 2, y * cellH + 2, cellW - 4, cellH - 4);

      // Draw RGB text
      ctx.fillStyle = (r + g + b) > 382 ? '#000' : '#fff';
      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`R:${r}`, x * cellW + cellW / 2, y * cellH + cellH / 2 - 10);
      ctx.fillText(`G:${g}`, x * cellW + cellW / 2, y * cellH + cellH / 2 + 4);
      ctx.fillText(`B:${b}`, x * cellW + cellW / 2, y * cellH + cellH / 2 + 18);

      // Grid
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x * cellW, y * cellH, cellW, cellH);
    }
  }
}

if (bmpCanvas) {
  initBmpPixels();
  drawBmpDemo();

  bmpCanvas.addEventListener('click', (e) => {
    const rect = bmpCanvas.getBoundingClientRect();
    const scaleX = bmpCanvas.width / rect.width;
    const scaleY = bmpCanvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX / (bmpCanvas.width / BMP_GRID));
    const y = Math.floor((e.clientY - rect.top) * scaleY / (bmpCanvas.height / BMP_GRID));
    if (x >= 0 && x < BMP_GRID && y >= 0 && y < BMP_GRID) {
      const [r, g, b] = bmpPixels[y][x];
      const hex = '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
      const info = document.getElementById('bmpPixelInfo');
      if (info) {
        info.innerHTML = `Piksel (${x}, ${y}) → <span style="color:${hex}; font-weight:bold;">R:${r} G:${g} B:${b}</span> · Hex: ${hex} · BMP offset: ${(y * BMP_GRID + x) * 3 + 54} byte`;
      }
    }
  });
}

window.randomizeBmpDemo = function() {
  for (let y = 0; y < BMP_GRID; y++) {
    for (let x = 0; x < BMP_GRID; x++) {
      bmpPixels[y][x] = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
      ];
    }
  }
  drawBmpDemo();
};

window.gradientBmpDemo = function() {
  for (let y = 0; y < BMP_GRID; y++) {
    for (let x = 0; x < BMP_GRID; x++) {
      const t = x / (BMP_GRID - 1);
      const s = y / (BMP_GRID - 1);
      bmpPixels[y][x] = [
        Math.floor(233 * (1 - t) + 0 * t),
        Math.floor(69 * (1 - s) + 210 * s),
        Math.floor(96 * t + 255 * (1 - t))
      ];
    }
  }
  drawBmpDemo();
};


// ----- JPEG QUALITY SIMULATION -----
const jpegQSlider = document.getElementById('jpegQualitySlider');
const jpegQValue = document.getElementById('jpegQualityValue');
const jpegOrigCanvas = document.getElementById('jpegOriginalCanvas');
const jpegCompCanvas = document.getElementById('jpegCompressedCanvas');

function drawJpegScene(ctx, w, h) {
  // Colorful scene with gradients and sharp edges
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#e91e63');
  grad.addColorStop(0.5, '#2196f3');
  grad.addColorStop(1, '#4caf50');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Sharp geometric shapes
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(30, 30, 80, 80);
  ctx.fillStyle = '#000000';
  ctx.font = 'bold 24px Inter, sans-serif';
  ctx.fillText('JPEG', 35, 80);

  // Circle
  ctx.fillStyle = '#ffeb3b';
  ctx.beginPath();
  ctx.arc(w - 60, 60, 40, 0, Math.PI * 2);
  ctx.fill();

  // Thin lines
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(20, 140 + i * 12);
    ctx.lineTo(w - 20, 140 + i * 12);
    ctx.stroke();
  }

  // Small text
  ctx.fillStyle = '#ffffff';
  ctx.font = '10px monospace';
  ctx.fillText('JPEG sıkıştırma testi', 20, w - 20);
}

function simulateJpegCompression(sourceCtx, destCtx, w, h, quality) {
  // Simulate JPEG artifacts by averaging 8x8 blocks with quality-dependent quantization
  const imgData = sourceCtx.getImageData(0, 0, w, h);
  const outData = destCtx.createImageData(w, h);
  const blockSize = 8;
  const lossAmount = Math.max(0, (100 - quality) / 100);

  for (let by = 0; by < h; by += blockSize) {
    for (let bx = 0; bx < w; bx += blockSize) {
      // Calculate block average
      let sumR = 0, sumG = 0, sumB = 0, count = 0;
      for (let dy = 0; dy < blockSize && by + dy < h; dy++) {
        for (let dx = 0; dx < blockSize && bx + dx < w; dx++) {
          const i = ((by + dy) * w + (bx + dx)) * 4;
          sumR += imgData.data[i];
          sumG += imgData.data[i + 1];
          sumB += imgData.data[i + 2];
          count++;
        }
      }
      const avgR = sumR / count;
      const avgG = sumG / count;
      const avgB = sumB / count;

      // Apply per-pixel with quality-based quantization
      for (let dy = 0; dy < blockSize && by + dy < h; dy++) {
        for (let dx = 0; dx < blockSize && bx + dx < w; dx++) {
          const i = ((by + dy) * w + (bx + dx)) * 4;
          const origR = imgData.data[i];
          const origG = imgData.data[i + 1];
          const origB = imgData.data[i + 2];

          // Blend original with block average based on loss amount
          let r = origR * (1 - lossAmount * 0.8) + avgR * lossAmount * 0.8;
          let g = origG * (1 - lossAmount * 0.8) + avgG * lossAmount * 0.8;
          let b = origB * (1 - lossAmount * 0.8) + avgB * lossAmount * 0.8;

          // Quantization step — round to fewer levels
          const levels = Math.max(4, Math.floor(256 * (quality / 100)));
          const step = 256 / levels;
          r = Math.round(r / step) * step;
          g = Math.round(g / step) * step;
          b = Math.round(b / step) * step;

          outData.data[i] = Math.min(255, Math.max(0, r));
          outData.data[i + 1] = Math.min(255, Math.max(0, g));
          outData.data[i + 2] = Math.min(255, Math.max(0, b));
          outData.data[i + 3] = 255;
        }
      }
    }
  }

  destCtx.putImageData(outData, 0, 0);

  // Draw block boundaries for low quality
  if (quality < 40) {
    destCtx.strokeStyle = 'rgba(255,255,255,0.05)';
    destCtx.lineWidth = 0.5;
    for (let x = 0; x < w; x += blockSize) {
      destCtx.beginPath();
      destCtx.moveTo(x, 0);
      destCtx.lineTo(x, h);
      destCtx.stroke();
    }
    for (let y = 0; y < h; y += blockSize) {
      destCtx.beginPath();
      destCtx.moveTo(0, y);
      destCtx.lineTo(w, y);
      destCtx.stroke();
    }
  }
}

if (jpegOrigCanvas && jpegCompCanvas && jpegQSlider) {
  const origCtx = jpegOrigCanvas.getContext('2d');
  const compCtx = jpegCompCanvas.getContext('2d');

  drawJpegScene(origCtx, jpegOrigCanvas.width, jpegOrigCanvas.height);

  function updateJpegDemo() {
    const q = parseInt(jpegQSlider.value);
    jpegQValue.textContent = `%${q}`;

    // Redraw source
    drawJpegScene(origCtx, jpegOrigCanvas.width, jpegOrigCanvas.height);
    simulateJpegCompression(origCtx, compCtx, jpegCompCanvas.width, jpegCompCanvas.height, q);

    // Show estimated file size
    const origSize = jpegOrigCanvas.width * jpegOrigCanvas.height * 3;
    const compressedSize = Math.floor(origSize * (0.02 + 0.15 * (q / 100)));
    const sizeInfo = document.getElementById('jpegSizeInfo');
    if (sizeInfo) {
      sizeInfo.textContent = `Orijinal: ~${(origSize / 1024).toFixed(0)} KB (BMP) → JPEG %${q}: ~${(compressedSize / 1024).toFixed(0)} KB (${((1 - compressedSize / origSize) * 100).toFixed(0)}% küçülme)`;
    }
  }

  jpegQSlider.addEventListener('input', updateJpegDemo);
  updateJpegDemo();
}


// ----- SVG LIVE EDITOR -----
const svgEditor = document.getElementById('svgEditor');
const svgPreview = document.getElementById('svgPreview');

function updateSvgPreview() {
  if (!svgEditor || !svgPreview) return;
  const code = svgEditor.value.trim();
  // Basic sanitization — only allow SVG content
  if (code.includes('<svg') && !code.includes('<script')) {
    svgPreview.innerHTML = code;
  }
}

if (svgEditor && svgPreview) {
  svgEditor.addEventListener('input', updateSvgPreview);
  updateSvgPreview();
}

const defaultSvgCode = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#1a1a2e"/>
  <circle cx="80" cy="100" r="60" fill="#e94560" opacity="0.8"/>
  <circle cx="150" cy="100" r="60" fill="#00d2ff" opacity="0.8"/>
  <circle cx="220" cy="100" r="60" fill="#00e676" opacity="0.8"/>
  <text x="150" y="185" text-anchor="middle" fill="white" font-size="16" font-family="sans-serif">RGB Daireleri</text>
</svg>`;

window.resetSvgEditor = function() {
  if (svgEditor) { svgEditor.value = defaultSvgCode; updateSvgPreview(); }
};

window.loadSvgStar = function() {
  if (!svgEditor) return;
  svgEditor.value = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#0f0f1a"/>
  <polygon points="150,20 180,80 250,90 195,140 210,210 150,175 90,210 105,140 50,90 120,80"
    fill="#ffd600" stroke="#ff9100" stroke-width="3"/>
  <text x="150" y="195" text-anchor="middle" fill="#ffd600" font-size="12" font-family="monospace">SVG Yıldız ⭐</text>
</svg>`;
  updateSvgPreview();
};

window.loadSvgHeart = function() {
  if (!svgEditor) return;
  svgEditor.value = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#1a1a2e"/>
  <path d="M150,180 
    C80,130 10,100 50,50 
    C80,20 130,40 150,80 
    C170,40 220,20 250,50 
    C290,100 220,130 150,180Z"
    fill="#e94560" stroke="#ff6f91" stroke-width="2"/>
  <text x="150" y="195" text-anchor="middle" fill="#e94560" font-size="12">SVG Kalp ❤️</text>
</svg>`;
  updateSvgPreview();
};

window.loadSvgFace = function() {
  if (!svgEditor) return;
  svgEditor.value = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#1a1a2e"/>
  <!-- Yüz -->
  <circle cx="150" cy="100" r="70" fill="#ffd600"/>
  <!-- Gözler -->
  <circle cx="125" cy="85" r="8" fill="#1a1a2e"/>
  <circle cx="175" cy="85" r="8" fill="#1a1a2e"/>
  <!-- Göz parlaması -->
  <circle cx="128" cy="82" r="3" fill="white"/>
  <circle cx="178" cy="82" r="3" fill="white"/>
  <!-- Gülümseme -->
  <path d="M115,115 Q150,150 185,115" stroke="#1a1a2e" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`;
  updateSvgPreview();
};
