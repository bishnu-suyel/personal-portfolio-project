
const header = document.querySelector('header');
const mobButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');

const toggleMenu = () => {
    nav.classList.toggle('responsive');
};

mobButton.addEventListener('click', toggleMenu);

nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        toggleMenu(); // Close the menu when clicking a menu item
    }
});

const backToTopButton = document.querySelector('#backToTop');

const getToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, and others
};

window.onscroll = function() {
    scrollFunction();
};

const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', getToTop);


