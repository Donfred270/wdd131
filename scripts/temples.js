// Set the current year in the footer
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Set the last modified date in the footer
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger menu toggle for mobile view
const hamburgerMenu = document.getElementById('hamburger-menu');
const navBar = document.getElementById('nav-bar');

hamburgerMenu.addEventListener('click', () => {
    // Toggle the visibility of the nav bar when the hamburger is clicked
    navBar.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');  // Optional: to animate the hamburger icon
});