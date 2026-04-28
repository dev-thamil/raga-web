// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation
    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const phone = document.querySelector('input[placeholder="Your Phone"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // For demo purposes, just show an alert. In a real app, send to server.
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});