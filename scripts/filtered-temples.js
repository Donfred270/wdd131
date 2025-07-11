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

// temples
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Philippines",
    location: "Philippines",
    dedicated: "1 April 2018",
    area:  18.449,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cagayan-de-oro-philippines-temple/cagayan-de-oro-philippines-temple-50369-main.jpg "
  },
  {
    templeName: "Atlanta Georgia Temple",
    location: "United States",
    dedicated: "2 April 1980",
    area:  34.500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
  },
   {
    templeName: "Fukuoka Japan Temple",
    location: "Chuo-ku",
    dedicated: "7 May 1998",
    area:  10.700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618-main.jpg"
  },
];

createTempleCard();

function createTempleCard(){
    temples.forEach(temple =>{
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
    
    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class = "label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);
    
    document.querySelector(".res-grid").appendChild(card);
    
    })
}