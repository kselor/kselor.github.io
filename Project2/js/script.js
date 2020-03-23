$(document).ready(function () {
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-solid.png"></button>'
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.catalog__inner').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');

    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__link_back');

    //    modal
    $('[data-modal=consalt]').on('click', function () {
        $('.modal, #consalt').fadeIn('show');
    });

    $('.modal__back').on('click', function () {
        $('.modal, #consalt, #order').fadeOut();
    });

    $('.button_catalog').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__text').text($('.catalog-item__title').eq(i).text());
            $('.modal, #order').fadeIn('show');
        })
    });


    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consult, #order').fadeOut();
            $('.modal__form, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.up-skroll').fadeIn();
        } else {
            $('.up-skroll').fadeOut();
        }

    });


});
