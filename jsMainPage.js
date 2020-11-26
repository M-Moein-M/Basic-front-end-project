$(function () {

    $(".customers-section").fadeTo(0,0);
    $(".prices").fadeTo(0,0);

    $(".in-page-link").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 60
        }, 1000);
    });

    $(window).scroll(function() {   // services section will appear when user scrolls down to it
        var hT = $('#customers_section').offset().top,
            hH = $('#customers_section').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH))
            $(".customers-section").fadeTo(1000, 1);
    });
    $(window).scroll(function() {   // Prices section will appear when user scrolls down to it
        var hT = $('#prices').offset().top,
            hH = $('#prices').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH))
            $(".prices").fadeTo(1000, 1);
    });

    $(window).scroll(function() {   // changing "about us" background in navbar when user scrolls to it
        var hT = $('#about_us_section').offset().top,
            hH = $('#about_us_section').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
            $("#navbar_about_us_link").css("backgroundColor", "darkgray");
        }else{
            $("#navbar_about_us_link").css( "background-color", "inherit");
        }
    });
    $(window).scroll(function() {   // changing "customers" background in navbar when user scrolls to it
        var hT = $('#customers_section').offset().top,
            hH = $('#customers_section').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
            $("#navbar_customers_link").css("backgroundColor", "darkgray");
        }else{
            $("#navbar_customers_link").css( "background-color", "inherit");
        }
    });
    $(window).scroll(function() {   // changing "services" background in navbar when user scrolls to it
        var hT = $('#services_section').offset().top,
            hH = $('#services_section').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
            $("#navbar_services_link").css("backgroundColor", "darkgray");
        }else{
            $("#navbar_services_link").css( "background-color", "inherit");
        }
    });
    $(window).scroll(function() {   // changing "contact us" background in navbar when user scrolls to it
        var hT = $('#contact_us_section').offset().top,
            hH = $('#contact_us_section').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
            $("#navbar_contact_us_link").css("backgroundColor", "darkgray");
        }else{
            $("#navbar_contact_us_link").css( "background-color", "inherit");
        }
    });

    // hiding and showing the navbar
    var preScrollPosition = 0;
    $(window).scroll(function () {

        if (window.scrollY > preScrollPosition){  // means the user is scrolling downwards
            if (window.scrollY > 650){
                $("#navigation_bar").slideUp();
            }
        }else if(window.scrollY < preScrollPosition){  // means the user is scrolling upwards
            $("#navigation_bar").slideDown();
        }
        preScrollPosition = window.scrollY;
    })

})


