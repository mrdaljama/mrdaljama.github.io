document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the form values
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Create a mailto link with the email and message
  var mailtoLink = 'mailto:' + email + '?subject=Contact Form Submission&body=' + encodeURIComponent(message);

  // Open the mail client
  window.location.href = mailtoLink;
});
