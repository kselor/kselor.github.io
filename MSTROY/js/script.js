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
          $('.modal, .modal_request').fadeIn('show');
      });

      $('.modal_request_back').click(function () { 
        $('.modal, .modal_request, .modal_thanks').fadeOut();
      });

      $('input[name=phone]').mask("+7(999) 999-9999");
      $('.calculator-order_price span').text((i, text) => {
        const [ price, currency ] = text.split(' ');
        return `${(+price).toLocaleString()} ${currency}`;
      });

      $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.modal_request').fadeOut();
            $('.modal, .modal_thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

  });