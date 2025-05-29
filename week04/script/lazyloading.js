const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = new Date().getFullYear();
const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = document.lastModified;