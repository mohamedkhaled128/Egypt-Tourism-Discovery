// Toggle Navbar on Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Infinite Ticker Loop
const tickerContent = document.querySelector('.ticker-content');
tickerContent.addEventListener('animationiteration', () => {
    tickerContent.style.animation = 'none';
    setTimeout(() => {
        tickerContent.style.animation = 'scroll 20s linear infinite';
    }, 10);
});