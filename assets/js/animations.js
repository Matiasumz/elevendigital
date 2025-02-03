// Cambio del color de fondo del header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Carousel
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
let currentIndex = 0;

// Función para mover el carrusel
function moveCarousel() {
    const offset = -(currentIndex * 100) + '%';
    carousel.style.transform = `translateX(${offset})`;

    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
}
// Iniciar 
setInterval(moveCarousel, 6000);

// Menu
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('icon-x');
const navbar = document.getElementById('navbar');
const body = document.body;
const menuLinks = document.querySelectorAll('#navbar a');

const checkWindowSize = () => {
    if (window.innerWidth > 1200) {
        body.classList.remove('no-scroll');
    }
};

menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
    body.classList.add('no-scroll');
    checkWindowSize();
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
    body.classList.remove('no-scroll');
    checkWindowSize();
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        body.classList.remove('no-scroll');
        checkWindowSize(); 
    });
});

window.addEventListener('resize', checkWindowSize);


