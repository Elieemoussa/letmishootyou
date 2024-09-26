
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        jobType: document.getElementById('jobType').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('eliemoussaser', 'letmishootyou', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            document.getElementById('contactForm').reset(); // Clear the form
        }, function(error) {
            console.error('FAILED...', error);
            alert('Oops! Something went wrong. Please try again.');
        });
});
