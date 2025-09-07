// Select the menu toggle button and navbar links
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar ul');

// Toggle the 'show' class when menu is clicked
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});