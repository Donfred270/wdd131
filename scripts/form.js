// Set the current year in the footer
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Set the last modified date in the footer
document.getElementById('last-modified').textContent = document.lastModified;

// Tableau des produits
const products = [
  { id: "prod1", name: "Product A" },
  { id: "prod2", name: "Product B" },
  { id: "prod3", name: "Product C" }
];

window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById("product");
  products.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    select.appendChild(opt);
  });
});
