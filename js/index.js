
const navbar = document.querySelector("nav")
const menuOpen = document.getElementById('menu-open');
const menuclose = document.getElementById('menu-close');


menuOpen.addEventListener('click', () => {
    navbar.classList.add('open');
});

menuclose.addEventListener('click', () => {
    navbar.classList.remove('open');
});


