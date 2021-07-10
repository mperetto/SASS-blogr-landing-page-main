const hamburgerMenu = document.querySelector('#hamburger-menu');

let menuOpen = false
hamburgerMenu.addEventListener('click', function() {
    const nav = document.querySelector('.navbar-nav');

    if(menuOpen == false) {
        menuOpen = true;
        this.src = './images/icon-close.svg';
    }
    else {
        menuOpen = false;
        this.src = './images/icon-hamburger.svg';
    }    

    nav.classList.toggle('navbar-nav--active');
})