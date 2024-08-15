'use strict';

$(window).on('load', function() {
    /*------------------
        Preloader
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow", function() {
        // Show the content after the preloader fades out
        $("#content").fadeIn("slow");
    });
});
