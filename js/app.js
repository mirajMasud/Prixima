$(document).ready(function(){
    // hero Slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        smartSpeed:1000,
        navText:['PREV','NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            }
        }
    });

    // project slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        margin:24,
        smartSpeed:1000,
        responsive:{
            0:{
              items:1,  
            },
            768:{
                items:2,
            },
            1140:{
                items:2,
                center:true,
            }
        }
    });
    $('#review-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items:1,
        smartSpeed:800,
        
    })
})