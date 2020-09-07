$(document).ready(function () {

    let optionCount = $('.calculator_option_count'),
        optionCar = $('.calculator_item:eq(4) .calculator_option'),
        optionWeight = $('.calculator_item:eq(5) .calculator_option'),
        optionTrailer = $('.calculator_item:eq(6) .calculator_option'),
        priceWeight = 0,
        priceTrailer = 0,
        totalCount = 1,
        totalPrice = 0;


    optionCar.each(function (i) {

        $(this).on('click', function () {

            $(this).addClass('active').siblings().removeClass('active');

            if (i == 0) {
                optionWeight.detach().removeClass('active');
                optionWeight.eq(0).appendTo($('.calculator_item:eq(5)')).html('Нет ограничений').val('0').trigger('click');
                optionTrailer.detach().removeClass('active');
                optionTrailer.eq(1).appendTo($('.calculator_item:eq(6)')).trigger('click');
                optionCount.css('display', 'none');
                $('.calculator_order_descr').html('Транспортные средства, используемые для перевозки пассажиров и имеющие, помимо места водителя, не более восьми мест для сидения.')
                $('.calculator_order_weight').html($('.calculator_item:eq(6) .calculator_option_title').eq(i).text())
            } else {
                optionTrailer.detach().removeClass('active');
                optionWeight.appendTo($('.calculator_item:eq(5)')).eq(0).html('<div class="calculator_option_title">до 3,5 тонн</div>').val('572').trigger('click');
                optionTrailer.eq(0).appendTo($('.calculator_item:eq(6)')).trigger('click');
                optionCount.css('display', 'flex');

            }

        });

    });

    optionWeight.each(function (i) {

        $(this).on('click', function () {

            $(this).addClass('active').siblings().removeClass('active');

            priceWeight = $(this).val();
            totalPrice = priceWeight + priceTrailer;
            $('.calculator_order_price').html(totalPrice.toLocaleString() + ' ₽')

            $('.calculator_order_descr').html('Грузовой автомобиль, разрешенной максимальной массы ' + $('.calculator_item:eq(5) .calculator_option_title').eq(i).text())
            if (i <= 1) {
                optionTrailer.detach().removeClass('active');
                optionTrailer.eq(0).appendTo($('.calculator_item:eq(6)')).trigger('click')

            }

            if (i > 1) {
                optionTrailer.appendTo($('.calculator_item:eq(6)'));
       
            }

        });

    });

    let lastClick = 1;
    optionTrailer.each(function (i) {


        $(this).on('click', function () {

            $(this).addClass('active').siblings().removeClass('active');

            if ($('.calculator_option.active')) {
                optionCount.appendTo($(this));
            }
            if (i == 0) {
                optionCount.detach();
            }

            if (lastClick != i) {
                totalCount = 1;
                $('.option_count_value').html(totalCount);
            }
            lastClick = i;

            priceTrailer = $(this).val();
            totalPrice = priceWeight + priceTrailer * totalCount;
            $('.calculator_order_price').html(totalPrice.toLocaleString() + ' ₽');


            if (i == 0) {
                $('.calculator_order_item').css('display', 'none')
            }

            if(i > 0){
                $('.calculator_order_item').css('display', 'flex')
                $('.calculator_order_weight').html($('.calculator_item:eq(6) .calculator_option_title').eq(i).text())
            }

            $('.calculator_order_value').html(totalCount + ' прицеп')
            if(totalCount > 1){
            $('.calculator_order_value').html(totalCount + ' прицепа')
            }
        });
    });

    

    $('.calculator_option .plus').on('click', function () {
        if (totalCount < 3) {
            totalCount = totalCount + 1;
        }
        $('.option_count_value').html(totalCount);

    });

    $('.calculator_option .minus').on('click', function () {
        if (totalCount > 1) {
            totalCount = totalCount - 1;
        }
        $('.option_count_value').html(totalCount);
    });

    optionCar.eq(1).trigger('click')
    optionWeight.eq(0).trigger('click');
    optionTrailer.eq(0).trigger('click');

});