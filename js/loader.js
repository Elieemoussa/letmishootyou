'use strict';

$(window).on('load', function() {
    /*------------------
        Preloader
    --------------------*/
   
    $("#preloder").delay(400).fadeOut("slow", function() {
        $(".loader").fadeOut();
    });
});


const element = document.querySelector('.lazyload'); // Adjust the selector as needed
element.classList.add('lazyloading');

// Simulate an image load or event
setTimeout(() => {
    element.classList.remove('lazyloading');
    element.classList.add('lazyloaded');
}, 1000); // Adjust the timing as needed


