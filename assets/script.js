// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth close nav on link click (mobile)
navMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
}));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Simple form handler
function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  if (status) {
    status.textContent = 'Submitting...';
  }
  // Simulate async submit
  setTimeout(() => {
    if (status) {
      status.textContent = 'Thank you! We will reach out shortly.';
    }
    e.target.reset();
  }, 900);
  return false;
}
