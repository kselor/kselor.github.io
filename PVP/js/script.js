$(document).ready(function () {

  $('.news_items').slick({
    nextArrow: $('.news_arrow_next'),
    prevArrow: $('.news_arrow_prev'),
    appendDots: $('.news_dots'),
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    draggable: false,

    responsive: [{
        breakpoint: 1800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 991,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,   
          centerPadding:'30px'       
        }
      },
    ]
  });



});