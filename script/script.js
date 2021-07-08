const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
    const nav = document.querySelector('.navbar-nav');

    nav.classList.toggle('navbar-nav--active');
})