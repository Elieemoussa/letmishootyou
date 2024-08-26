'use strict';

$(window).on('load', function() {
    /*------------------
        Preloader
    --------------------*/
   
    $("#preloder").delay(400).fadeOut("slow", function() {
        $(".loader").fadeOut();
    });
});




