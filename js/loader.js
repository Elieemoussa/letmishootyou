'use strict';

$(window).on('load', function() {
    // Delay the preloader fadeout and fade out loader
    $("#preloder").delay(400).fadeOut("slow", function() {
        $(".loader").fadeOut();

        // After loader fades out, slowly change body opacity
        $("#content").css("opacity", "1"); // Trigger fade-in on body
    });
});

const element = document.querySelector('.lazyload'); // Adjust the selector as needed
element.classList.add('lazyloading');

// Simulate an image load or event for lazyloading images
setTimeout(() => {
    element.classList.remove('lazyloading');
    element.classList.add('lazyloaded');
}, 1000); // Adjust timing as needed
