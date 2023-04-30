(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });



        $(".slider-area").owlCarousel({
            items: 1,
            nav: false,
            dot: true,
            loop: true,
            margin: 25,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            center: true,
            stagePadding: 150,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 12,
                    stagePadding: 50,
                },
                575: {
                    items: 1,
                    margin: 12,
                    stagePadding: 60,
                },
                750: {
                    items: 1,
                    margin: 12,
                    stagePadding: 60,
                },
                768: {
                    items: 1,
                    stagePadding: 12,
                    stagePadding: 150,
                },
                991: {
                    items: 2,
                    margin: 12,
                    stagePadding: 100,
                },
                1200: {
                    items: 2,
                    margin: 14,
                    stagePadding: 120,
                },
                1360: {
                    items: 2,
                    margin: 20,
                    stagePadding: 150,
                }
            }


        });


        $(".Farmacia_slider").owlCarousel({
            items: 1,
            nav: false,
            dot: false,
            loop: true,
            margin: 25,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            center: true,
            stagePadding: -50,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 12,
                    stagePadding: 50,
                },
                575: {
                    items: 1,
                    margin: 12,
                    stagePadding: 60,
                },
                750: {
                    items: 1,
                    margin: 12,
                    stagePadding: 60,
                },
                768: {
                    items: 1,
                    stagePadding: 12,
                    stagePadding: 150,
                },
                991: {
                    items: 2,
                    margin: 12,
                    stagePadding: 100,
                },
                1200: {
                    items: 2,
                    margin: 14,
                    stagePadding: 120,
                },
                1360: {
                    items: 2,
                    margin: 20,
                    stagePadding: 0,
                }
            }


        });


        $(".service-slider-two").owlCarousel({
            items: 2,
            nav: false,
            dot: false,
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 4500,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                575: {
                    items: 1,
                    margin: 7,
                    stagePadding: -80,
                },
                768: {
                    items: 1,
                    stagePadding: -0,
                },
                991: {
                    items: 2,
                    margin: 12,
                    stagePadding: 0,
                },
                1200: {
                    items: 2,
                    margin: 14,
                },
                1360: {
                    items: 2,
                    margin: 20,
                }
            }


        });


        $(".service-slider-one").owlCarousel({
            items: 2,
            nav: false,
            dot: false,
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3500,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                575: {
                    items: 1,
                    margin: 7,
                    stagePadding: -80,
                },
                768: {
                    items: 1,
                    stagePadding: 10,
                },
                991: {
                    items: 2,
                    margin: 12,
                    stagePadding: 0,
                },
                1200: {
                    items: 2,
                    margin: 14,
                },
                1360: {
                    items: 2,
                    margin: 20,
                }
            }


        });


        $(".hospital-slider").owlCarousel({
            items: 3,
            nav: false,
            dot: false,
            loop: false,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40,
                },
                575: {
                    items: 2,
                    margin: 12,
                    stagePadding: 20,
                },
                768: {
                    items: 2,
                    stagePadding: 50,
                },
            }


        });


    });

    new VenoBox({
        selector: '.my-video-links',
    });


    
    
    
    
    // venobox 
    $(document).ready(function() {
        $('.venobox').venobox();
    });

    
}(jQuery));