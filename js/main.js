(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initialize navbar logo visibility - only for home page
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        $('.navbar-brand').addClass('invisible');
    }
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
            // Only hide/show logo on home page
            if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
                $('.navbar-brand').removeClass('invisible');
            }
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
            // Only hide/show logo on home page
            if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
                $('.navbar-brand').addClass('invisible');
            }
        }
    });
    
    // Initial check for scroll position
    $(document).ready(function() {
        if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
            if ($(window).scrollTop() > 300) {
                $('.navbar-brand').removeClass('invisible');
            } else {
                $('.navbar-brand').addClass('invisible');
            }
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

