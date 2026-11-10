// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.innerHTML = (open ? 'Close' : 'Menu') + ' <span aria-hidden="true">' + (open ? '×' : '↗') + '</span>';
}

toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.querySelector('.wordmark').addEventListener('click', () => setMenu(false));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: opens the visitor's email app (mailto:) and shows the success note
const form = document.getElementById('contact-form');
if (form) {
  const fields = document.getElementById('form-fields');
  const success = document.getElementById('success-note');
  const TO = 'hello@example.com'; // fake address, replace if you want

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    const subject = encodeURIComponent('Message from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:' + TO + '?subject=' + subject + '&body=' + body;

    fields.hidden = true;
    success.hidden = false;
  });

  document.getElementById('send-another').addEventListener('click', () => {
    form.reset();
    success.hidden = true;
    fields.hidden = false;
  });
}
