//Year anda las modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;


document.getElementById("menu").addEventListener("click", function() {
 let nav = document.querySelector("nav ul");
 nav.classList.toggle("active"); 
});

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

      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
      
      location: "Barranquilla, Colombia",
      dedicated: "2018, December,   9 ",
      area: 25349,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
    },
    {
      
      location: "Ciudad Juárez, Mexico",
      dedicated: "2000, February,  26–27",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/ciudad-juarez-mexico-temple/ciudad-juarez-mexico-temple-53312-main.jpg"
    }
  ];
 // Function "create" temple cards 
function createTempleCard(temple) {
  const templeCard = document.createElement('figure');
  templeCard.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
          <h3>${temple.templeName}</h3>
          <p>${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area} sqft</p>
      </figcaption>
  `;
  return templeCard;
}

// Function to display temples with the gallery
function displayTemples(templesToDisplay) {
  const gallery = document.querySelector('.temple-gallery');
  gallery.innerHTML = ''; 
  templesToDisplay.forEach(temple => {
      gallery.appendChild(createTempleCard(temple));
  });
}

// Temples by Category
function filterTemples(category) {
  let filteredTemples = [];
  switch (category) {
      case 'old':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
      case 'new':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
      case 'large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
      case 'small':
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
      case 'home':
      default:
          filteredTemples = temples;
          break;
  }
  displayTemples(filteredTemples);
}

// Listeners for filtering
document.querySelector('a[href="#home"]').addEventListener('click', () => filterTemples('home'));
document.querySelector('a[href="#old"]').addEventListener('click', () => filterTemples('old'));
document.querySelector('a[href="#new"]').addEventListener('click', () => filterTemples('new'));
document.querySelector('a[href="#large"]').addEventListener('click', () => filterTemples('large'));
document.querySelector('a[href="#small"]').addEventListener('click', () => filterTemples('small'));

// Display for All Temples
document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);
});