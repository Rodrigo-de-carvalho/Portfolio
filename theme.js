(function () {
  const stored = localStorage.getItem('rc-theme');
  const initial = stored || 'dark';
  document.documentElement.setAttribute('data-theme', initial);
})();

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('rc-theme', next);
    });
  }

  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }
});
