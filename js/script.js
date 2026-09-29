/* ======================================================
   CONTACT US PAGE - START
   Handles the "Get In Touch" form validation & submission
   ====================================================== */




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
