// ═══════════════════════════════════════════
// Shared JS — Sidebar, Theme Toggle, TOC
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─── Theme Toggle ───
  const savedTheme = localStorage.getItem('cg-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cg-theme', next);
      updateThemeLabels(next);
    });
  });

  function updateThemeLabels(theme) {
    document.querySelectorAll('.theme-label-text').forEach(el => {
      el.textContent = theme === 'dark' ? 'Koyu Mod' : 'Açık Mod';
    });
    document.querySelectorAll('.theme-label-icon').forEach(el => {
      el.textContent = theme === 'dark' ? '🌙' : '☀️';
    });
  }
  updateThemeLabels(savedTheme);

  // ─── Sidebar Mobile Toggle ───
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const closeBtn = document.querySelector('.sidebar-close');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.style.display = 'block';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.style.display = 'none';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // ─── Auto-generate TOC from h2/h3 headings ───
  const tocContainer = document.querySelector('.sidebar-toc');
  if (tocContainer) {
    const headings = document.querySelectorAll('.container h2[id], .container h3[id]');
    if (headings.length > 0) {
      let html = '<div class="toc-title">📑 Bu Sayfada</div>';
      headings.forEach(h => {
        const level = h.tagName === 'H3' ? 'toc-h3' : '';
        const text = h.textContent.replace(/^[\d]+\.\s*/, '').trim();
        html += `<a href="#${h.id}" class="${level}">${text}</a>`;
      });
      tocContainer.innerHTML = html;
    }
  }

  // ─── Active TOC highlight on scroll ───
  const tocLinks = document.querySelectorAll('.sidebar-toc a');
  if (tocLinks.length > 0) {
    const headingEls = Array.from(tocLinks).map(a => {
      const id = a.getAttribute('href')?.replace('#', '');
      return id ? document.getElementById(id) : null;
    }).filter(Boolean);

    function updateActiveToc() {
      let current = null;
      const scrollY = window.scrollY + 120;
      for (let i = headingEls.length - 1; i >= 0; i--) {
        if (headingEls[i].offsetTop <= scrollY) {
          current = headingEls[i].id;
          break;
        }
      }
      tocLinks.forEach(a => {
        const href = a.getAttribute('href')?.replace('#', '');
        a.classList.toggle('active', href === current);
      });
    }

    window.addEventListener('scroll', updateActiveToc, { passive: true });
    updateActiveToc();
  }

  // ─── Collapsible sections ───
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('open');
    });
  });

  // ─── Quiz functionality ───
  document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => {
      const container = option.closest('.quiz-container');
      if (container.dataset.answered === 'true') return;

      container.dataset.answered = 'true';
      const isCorrect = option.dataset.correct === 'true';

      if (isCorrect) {
        option.classList.add('correct');
      } else {
        option.classList.add('wrong');
        container.querySelector('[data-correct="true"]').classList.add('correct');
      }

      const feedback = container.querySelector('.quiz-feedback');
      if (feedback) {
        feedback.classList.add('show');
        feedback.style.background = isCorrect
          ? 'rgba(0, 230, 118, 0.1)'
          : 'rgba(233, 69, 96, 0.1)';
        feedback.style.color = isCorrect ? '#00e676' : '#e94560';
        feedback.textContent = isCorrect
          ? '✅ Doğru! ' + (feedback.dataset.explanation || '')
          : '❌ Yanlış. ' + (feedback.dataset.explanation || '');
      }
    });
  });

  // ─── Fade in animations on scroll ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .interactive-demo, .info-box, .quiz-container').forEach(el => {
    observer.observe(el);
  });
});
