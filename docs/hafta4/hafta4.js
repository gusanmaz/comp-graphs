// =============================================
// HAFTA 4 - Inkscape ile Vektör Grafik
// İnteraktif SVG Demoları
// =============================================

// ----- BÉZİER EĞRİ DEMOSU -----
const cp1xSlider = document.getElementById('cp1x');
const cp1ySlider = document.getElementById('cp1y');
const cp2xSlider = document.getElementById('cp2x');
const cp2ySlider = document.getElementById('cp2y');

function updateBezier() {
  if (!cp1xSlider) return;

  const cp1x = parseInt(cp1xSlider.value);
  const cp1y = parseInt(cp1ySlider.value);
  const cp2x = parseInt(cp2xSlider.value);
  const cp2y = parseInt(cp2ySlider.value);

  // Start and end points (fixed)
  const p0x = 50, p0y = 250;
  const p1x = 350, p1y = 250;

  // Update path
  const pathData = `M ${p0x} ${p0y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1x} ${p1y}`;
  const bezierPath = document.getElementById('bezierPath');
  if (bezierPath) bezierPath.setAttribute('d', pathData);

  // Update control point circles
  const cp1Circle = document.getElementById('cp1');
  const cp2Circle = document.getElementById('cp2');
  if (cp1Circle) { cp1Circle.setAttribute('cx', cp1x); cp1Circle.setAttribute('cy', cp1y); }
  if (cp2Circle) { cp2Circle.setAttribute('cx', cp2x); cp2Circle.setAttribute('cy', cp2y); }

  // Update control lines
  const ctrl1Line = document.getElementById('ctrl1Line');
  const ctrl2Line = document.getElementById('ctrl2Line');
  if (ctrl1Line) { ctrl1Line.setAttribute('x2', cp1x); ctrl1Line.setAttribute('y2', cp1y); }
  if (ctrl2Line) { ctrl2Line.setAttribute('x1', cp2x); ctrl2Line.setAttribute('y1', cp2y); }

  // Update labels
  const cp1Label = document.getElementById('cp1Label');
  const cp2Label = document.getElementById('cp2Label');
  if (cp1Label) { cp1Label.setAttribute('x', cp1x); cp1Label.setAttribute('y', Math.max(cp1y - 10, 12)); }
  if (cp2Label) { cp2Label.setAttribute('x', cp2x); cp2Label.setAttribute('y', Math.max(cp2y - 10, 12)); }

  // Update value displays
  const cp1xVal = document.getElementById('cp1xVal');
  const cp1yVal = document.getElementById('cp1yVal');
  const cp2xVal = document.getElementById('cp2xVal');
  const cp2yVal = document.getElementById('cp2yVal');
  if (cp1xVal) cp1xVal.textContent = cp1x;
  if (cp1yVal) cp1yVal.textContent = cp1y;
  if (cp2xVal) cp2xVal.textContent = cp2x;
  if (cp2yVal) cp2yVal.textContent = cp2y;

  // Update code display
  const bezierCode = document.getElementById('bezierCode');
  if (bezierCode) bezierCode.textContent = pathData;
}

// Attach event listeners
if (cp1xSlider) {
  cp1xSlider.addEventListener('input', updateBezier);
  cp1ySlider.addEventListener('input', updateBezier);
  cp2xSlider.addEventListener('input', updateBezier);
  cp2ySlider.addEventListener('input', updateBezier);
}

// Initialize
updateBezier();
