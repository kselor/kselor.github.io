$(document).ready(function(){
    $('.slider_items').slick({
        arrows: false  
    });
    
    
    $('.system .slider_dot').each(function(i){
        $(this).on('click', function(){
        $(this).addClass('active').siblings().removeClass('active'),
        $('.system .slider_items').slick('slickGoTo',i);

        console.log(i)
    })

    });

    $('.slider_items').on('swipe', function(){

        let i = $('.system .slider_items').slick('slickCurrentSlide');  
            $('.system .slider_dot').eq(i).addClass('active').siblings().removeClass('active')
     
      });
    

    $('.device .slider_dot').each(function(i){
        $(this).on('click', function(){
        $(this).addClass('active').siblings().removeClass('active'),
        $('.device .slider_items').slick('slickGoTo',i);

        console.log(i)
    })

    });

    

    $('.slider_items').on('swipe', function(){

        let i = $('.device .slider_items').slick('slickCurrentSlide');  
            $('.device .slider_dot').eq(i).addClass('active').siblings().removeClass('active')
     
      });
    

      $('.btn_consalt').on('click', function(e){
          e.preventDefault();
          $('.modal').fadeIn('show');
      });

      $('.modal_request_back').click(function () { 
        $('.modal').fadeOut();
      });

      $('input[name=phone]').mask("+7(999) 999-9999");
      
               
  });