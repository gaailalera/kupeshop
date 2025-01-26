const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

// Toggle the mobile menu visibility when the hamburger button is clicked
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close the mobile menu when the close button (X) is clicked
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});