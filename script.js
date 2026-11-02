const contactForm = document.getElementById('contactForm');
const notification = document.getElementById('notification');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!notification) return;

  const submitButton = contactForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
  }
  notification.hidden = true;

  fetch(contactForm.action, {
    method: 'POST',
    body: new FormData(contactForm),
    headers: { Accept: 'application/json' }
  })
    .then((response) => {
      if (!response.ok) throw new Error('The contact service returned an error.');
      return response.json();
    })
    .then(() => {
      contactForm.reset();
      notification.textContent = 'Thank you. Your message has been sent to Minaki Holdings.';
      notification.hidden = false;
    })
    .catch(() => {
      notification.textContent = 'We could not send your message right now. Please email info@minakiholdings.com directly.';
      notification.hidden = false;
    })
    .finally(() => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      }
    });
});
