/* ======================================================
   CONTACT US PAGE - START
   Handles the "Get In Touch" form validation & submission
   ====================================================== */


document.addEventListener('DOMContentLoaded', () => {
  const bar = document.createElement('div');
  bar.className = 'announcement';
  bar.innerHTML = `
    <a href="https://www.youtube.com/@muktadesign" target="_blank" rel="noopener">
      <svg class="yt-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8z"/>
        <path fill="#FFFFFF" d="M9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>
      </svg>
      <span class="w"></span>
    </a>`;
  document.body.prepend(bar);

  const el = bar.querySelector('.w');
  Array.from('Check Out My YouTube Channel 🚀').forEach((ch, i) => {
    const s = document.createElement('span');
    s.textContent = ch;
    s.style.animationDelay = (i * 0.07) + 's';
    el.appendChild(s);
  });
});







// Select the contact form element
const contactForm = document.getElementById('contactForm');

// Only run this code if the contact form exists on the page
if (contactForm) {

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop the page from reloading on submit

    // Get form field values and remove extra whitespace
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // --- Validation: check for empty fields ---
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return; // Stop here if validation fails
    }

    // --- Validation: check email format ---
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return; // Stop here if email is invalid
    }

    // --- Success case ---
    // NOTE: Replace this console.log + alert with an actual
    // fetch()/AJAX call to your backend or email service (e.g. Formspree, EmailJS)
    console.log('Contact form submitted:', { name, email, message });

    alert('Thank you, ' + name + '! Your message has been sent.');

    // Clear the form fields after successful submission
    contactForm.reset();
  });

}


/* ======================================================
   CONTACT US PAGE - END
   ====================================================== */
