const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const demoForm = document.querySelector('.newsletter-form');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario de demostración. Sustitúyelo por el código de Kit.');
  });
}
