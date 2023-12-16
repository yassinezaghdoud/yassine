document.addEventListener('DOMContentLoaded', function () {
    // Function to validate the contact form
    function validateForm(event) {
      event.preventDefault();
  
      // Get form elements
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      // Get values from form inputs
      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const messageValue = messageInput.value.trim();
  
      // Basic form validation
      if (nameValue === '' || emailValue === '' || messageValue === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // Additional validation for the email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address');
        return;
      }
  
      // If the form is valid, you can proceed with additional actions (e.g., sending the form data to a server)
      alert('Form submitted successfully!');
    }
  
    // Attach the validateForm function to the form's submit event
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', validateForm);
    }
  });
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1); // Remove the "#" from the href
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });


  // Scroll to top button functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
