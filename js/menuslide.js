document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.querySelector('.flo-header-mobile__menu-trigger');
    const menuPopup = document.getElementById('menu-popup');
    const menuClose = document.getElementById('menu-close');

    if (menuTrigger && menuPopup && menuClose) {
        menuTrigger.addEventListener('click', function() {
            menuPopup.classList.add('active');
        });

        menuClose.addEventListener('click', function() {
            menuPopup.classList.remove('active');
        });
    } else {
        console.error('One or more elements were not found in the DOM.');
    }
});
