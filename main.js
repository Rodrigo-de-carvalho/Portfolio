/* ============================================================
   RODRIGO COSTA — PORTFOLIO JS
   ============================================================ */

// ---------- Navbar scroll ----------
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}

// ---------- Page transition on nav links ----------
const transition = document.getElementById('pageTransition');

document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) return;

  link.addEventListener('click', e => {
    e.preventDefault();
    if (!transition) { window.location.href = href; return; }
    transition.classList.add('active');
    setTimeout(() => { window.location.href = href; }, 220);
  });
});

// Fade in on page load
window.addEventListener('load', () => {
  if (transition) {
    transition.classList.add('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        transition.classList.remove('active');
      });
    });
  }
});

// ---------- Typing animation (hero) ----------
function typeWriter(element, text, speed = 90, delay = 400) {
  if (!element) return;
  element.textContent = '';
  let i = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }, delay);
}

const typeNameEl = document.getElementById('typeName');
if (typeNameEl) {
  typeWriter(typeNameEl, 'Rodrigo de Carvalho Costa', 80, 600);
}

// ---------- Intersection Observer — reveal ----------
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ---------- Level counter animation ----------
const lvlEl = document.getElementById('lvlCount');
if (lvlEl) {
  let val = 0;
  const target = 7;
  const step = () => {
    if (val < target) {
      val++;
      lvlEl.textContent = val;
      setTimeout(step, 120);
    }
  };
  setTimeout(step, 1200);
}

// ---------- Contact form ----------
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function clearErrors() {
    ['nameError', 'emailError', 'messageError'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
  }

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    let valid = true;

    if (!name) { showError('nameError', 'nome é obrigatório'); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('emailError', 'email inválido'); valid = false;
    }
    if (!message) { showError('messageError', 'mensagem é obrigatória'); valid = false; }

    if (!valid) return;

    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    if (btnText) btnText.textContent = 'enviando...';
    if (submitBtn) submitBtn.disabled = true;

    const subject = contactForm.subject.value.trim() || 'Contato pelo portfólio';
    const body = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${contactForm.message.value.trim()}`;
    const mailto = `mailto:rorodrigo012007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('visible');
    }, 500);
  });
}
