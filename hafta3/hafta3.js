// =============================================
// HAFTA 3 - GIMP ile Dijital Görüntü İşleme
// İnteraktif Demolar
// =============================================

// ----- DPI HESAPLAYICI -----
const dpiPixelW = document.getElementById('dpiPixelW');
const dpiPixelH = document.getElementById('dpiPixelH');
const dpiValue = document.getElementById('dpiValue');
const dpiResult = document.getElementById('dpiResult');

function updateDPI() {
  if (!dpiPixelW || !dpiResult) return;
  const pw = parseInt(dpiPixelW.value) || 0;
  const ph = parseInt(dpiPixelH.value) || 0;
  const dpi = parseInt(dpiValue.value) || 1;

  const widthInch = pw / dpi;
  const heightInch = ph / dpi;
  const widthCm = widthInch * 2.54;
  const heightCm = heightInch * 2.54;
  const totalPixels = pw * ph;
  const megapixels = (totalPixels / 1000000).toFixed(2);

  // File size estimate (uncompressed, 24-bit RGB)
  const fileSizeBytes = totalPixels * 3;
  let fileSizeStr;
  if (fileSizeBytes > 1024 * 1024) {
    fileSizeStr = (fileSizeBytes / (1024 * 1024)).toFixed(1) + ' MB';
  } else {
    fileSizeStr = (fileSizeBytes / 1024).toFixed(0) + ' KB';
  }

  dpiResult.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.25rem;">📱 Piksel Boyutu</div>
        <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-4);">${pw} × ${ph} px</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary);">${megapixels} Megapiksel</div>
      </div>
      <div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.25rem;">🖨️ Baskı Boyutu (${dpi} DPI)</div>
        <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-2);">${widthInch.toFixed(2)} × ${heightInch.toFixed(2)} inç</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary);">${widthCm.toFixed(1)} × ${heightCm.toFixed(1)} cm</div>
      </div>
    </div>
    <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); font-size: 0.85rem; color: var(--text-secondary);">
      💾 Tahmini sıkıştırılmamış boyut (24-bit RGB): <strong>${fileSizeStr}</strong>
      &nbsp;|&nbsp; Formül: Piksel ÷ DPI = İnç → İnç × 2.54 = cm
    </div>
  `;
}

if (dpiPixelW) {
  dpiPixelW.addEventListener('input', updateDPI);
  dpiPixelH.addEventListener('input', updateDPI);
  dpiValue.addEventListener('input', updateDPI);
  updateDPI();
}

window.setDPI = function(val) {
  if (dpiValue) {
    dpiValue.value = val;
    updateDPI();
  }
};
