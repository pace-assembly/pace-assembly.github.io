document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.getElementById(burger?.dataset.target || '');

  if (burger && menu) {
    const setMenuState = (isOpen) => {
      burger.classList.toggle('is-active', isOpen);
      menu.classList.toggle('is-active', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    };

    burger.addEventListener('click', () => {
      setMenuState(!burger.classList.contains('is-active'));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });
  }

  const motionIsReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ambientVideos = document.querySelectorAll('video.autoplay-on-view');

  if (!motionIsReduced && 'IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.35 });

    ambientVideos.forEach((video) => {
      videoObserver.observe(video);
    });
  }

  const copyButton = document.getElementById('copy-citation');
  const bibtexEntry = document.getElementById('bibtex-entry');
  const copyStatus = document.getElementById('copy-status');

  if (copyButton && bibtexEntry) {
    const setCopyFeedback = (message) => {
      const label = copyButton.querySelector('.copy-label');
      if (label) label.textContent = message;
      if (copyStatus) copyStatus.textContent = message;

      window.setTimeout(() => {
        if (label) label.textContent = 'Copy BibTeX';
      }, 1800);
    };

    copyButton.addEventListener('click', async () => {
      const citation = bibtexEntry.textContent.trim();

      try {
        await navigator.clipboard.writeText(citation);
        setCopyFeedback('Copied');
      } catch (error) {
        const textArea = document.createElement('textarea');
        textArea.value = citation;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        const copied = document.execCommand('copy');
        textArea.remove();
        setCopyFeedback(copied ? 'Copied' : 'Copy failed');
      }
    });
  }
});
