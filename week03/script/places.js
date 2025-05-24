// Set the current year in the footer
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Set the last modified date in the footer
document.getElementById('last-modified').textContent = document.lastModified;