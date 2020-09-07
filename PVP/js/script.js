$(document).ready(function () {
    
    $('.news_items').slick({
        nextArrow: $('.news_arrow_next'),
        prevArrow: $('.news_arrow_prev'),
        appendDots: $('.news_dots'),
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      });

      

});