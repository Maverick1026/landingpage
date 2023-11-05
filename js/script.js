// Get a reference to the "Home" link
const homeLink = document.querySelector('a[href="#home"]');

// Get a reference to the "About Us" link within the home section
const aboutLinkHome = document.querySelector('section#home a[href="#about"]');
const aboutLink = document.querySelector('a[href="#about"]');

// Get a reference to the "Menu" link
const menuLink = document.querySelector('a[href="#menu"]');
const menuLinkMenu = document.querySelector('section#about a[href="#menu"]');

// Get a reference to the "Gallery" link
const galleryLink = document.querySelector('a[href="#gallery"]');

// Get a reference to the "Blog" link
const blogLink = document.querySelector('a[href="#blog"]');
const blogLinkMenu = document.querySelector('section#about a[href="#blog"]');


// Get a reference to the "Contact" link
const contactLink = document.querySelector('a[href="#contact"]');

// Get the height of the header to offset the scroll position
const headerHeight = document.querySelector('.header').offsetHeight;

// Function to handle smooth scrolling
function scrollToSection(sectionId) {
  window.scrollTo({
    top: document.querySelector(sectionId).offsetTop - headerHeight,
    behavior: 'smooth',
  });
}

// Add a click event listener to the "Home" link
homeLink.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#home');
});

// Add a click event listener to the "About Us" link within the home section
aboutLinkHome.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#about');
});

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#about');
  });
  
// Add a click event listener to the "Menu" link
menuLink.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#menu');
});
menuLinkMenu.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#menu');
});

// Add a click event listener to the "Gallery" link
galleryLink.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#gallery');
});

// Add a click event listener to the "Blog" link
blogLink.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#blog');
});

blogLinkMenu.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#blog');
});

// Add a click event listener to the "Contact" link
contactLink.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#contact');
});