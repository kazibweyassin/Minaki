const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const scrollContact = document.getElementById('scrollContact');
const contactForm = document.getElementById('contactForm');
const notification = document.getElementById('notification');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

scrollContact?.addEventListener('click', () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  navLinks.classList.remove('open');
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!notification) return;
  notification.hidden = false;
  notification.textContent = 'Thanks! We have received your message and will respond shortly.';
  contactForm.reset();
  setTimeout(() => {
    notification.hidden = true;
  }, 5000);
});
