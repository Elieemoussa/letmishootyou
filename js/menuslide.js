// Toggle menu open
document.querySelector('.flo-header-mobile__menu-trigger').addEventListener('click', function() {
    document.body.classList.add('body--flo-mobile-menu-popup-open');
});

// Close menu
document.querySelector('.flo-mobile-menu__close').addEventListener('click', function() {
    document.body.classList.remove('body--flo-mobile-menu-popup-open');
});
