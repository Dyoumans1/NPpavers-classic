// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Form submission
document
  .querySelector('.quote-form form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    alert(
      'Thank you for your request! We will contact you within 24 hours with your free estimate.'
    );
    this.reset();
  });
