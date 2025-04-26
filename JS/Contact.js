document.addEventListener('DOMContentLoaded', () => {
    const contactHeader = document.getElementById('contact-header');
    contactHeader.style.backgroundImage = `url('../Images/contact-header.jpg')`;

    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        message.classList.add('show');
        form.reset();
        setTimeout(() => message.classList.remove('show'), 3000);
    });
});