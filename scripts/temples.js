// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const nav = document.getElementById("site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.textContent = isOpen ? "\u2715" : "\u2630"; // X or hamburger
  menuButton.setAttribute("aria-expanded", isOpen);
});
