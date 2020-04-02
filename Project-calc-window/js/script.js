window.addEventListener('DOMContentLoaded', function () {

    let CalcTab = document.querySelectorAll('.calc__tab'),
        CalcItems = document.querySelectorAll('.calc__items'),
        CalcItem = document.querySelectorAll('.calc-item__img'),
        CalcItemsActive = document.querySelectorAll['.calc__items_active'],
        Price = document.getElementById('order_price'),
        OrderTitle = document.getElementById('order_title'),
        OrderDescr = document.getElementById('order_descr'),
        OrderIcon = document.getElementById('order_icon'),
        OrderType1 = document.getElementById('order_type-1'),
        OrderType2 = document.getElementById('order_type-2'),
        OrderType3 = document.getElementById('order_type-3'),
        CalcItemWrap = document.querySelectorAll('.calc-item'),
        OptionItems = document.querySelectorAll('.option-items'),
        OptionItem1 = document.getElementById('option_item_glass'),
        OptionItem2 = document.getElementById('option_item_color');


    CalcTab.forEach(function (item, i) {
        let index = i;
        OrderType1.innerHTML = 'Глухая';
        item.addEventListener('click', function () {
            CalcTab.forEach((item) => item.classList.remove('calc__tab_active'));
            CalcTab[index].classList.add('calc__tab_active');


            CalcItems.forEach((item) => item.classList.remove('calc__items_active'));
            CalcItems[index].classList.add('calc__items_active');

            if (index == 0) {
                OrderTitle.innerHTML = 'Одностворчатое окно';
                Price.innerHTML = 'от 6340 руб';
                order_icon.innerHTML = '<img class="calc-order__icon" src="img/icon/c1.png" alt="">';
                OrderType1.innerHTML = 'Глухая';
                OrderType2.innerHTML = '';
                OrderType3.innerHTML = '';
            }
            if (index == 1) {
                OrderTitle.innerHTML = 'Двухстворчатое окно';
                Price.innerHTML = 'от 9040 руб';
                order_icon.innerHTML = '<img class="calc-order__icon" src="img/icon/c2.png" alt="">';
                OrderType1.innerHTML = '';
                OrderType2.innerHTML = 'Глухая;';
                OrderType3.innerHTML = 'Глухая;';
            }
            if (index == 2) {
                OrderTitle.innerHTML = 'Трехстворчатое окно';
                Price.innerHTML = 'от 11240 руб';
                order_icon.innerHTML = '<img class="calc-order__icon" src="img/icon/c3.png" alt="">';
                OrderType1.innerHTML = 'Глухая;';
                OrderType2.innerHTML = 'Глухая;';
                OrderType3.innerHTML = 'Глухая;';
            }

        });
    });

    CalcItem.forEach(function (item, i) {

        let index = i + 1,
            total = index;

        if (total % 3 === 0) {
            index = i - 2;

        }

        item.addEventListener('click', function () {

            item.classList.remove('active');
            CalcItem[index].classList.add('active');


            CalcItemWrap.forEach(function (item, i) {
                item.addEventListener('click', function () {
                    let a = i + 1;

                    if (a % 3 === 1) {

                        if (total % 3 === 0) {
                            OrderType1.textContent = 'Глухая;';
                        }

                        if (total % 3 === 1) {
                            OrderType1.textContent = 'Поворотно/откидная вправо;';
                        }
                        if (total % 3 === 2) {
                            OrderType1.textContent = 'Поворотно/откидная влево;';
                        }
                    }

                    if (a % 3 === 2) {
                        if (total % 3 === 0) {
                            OrderType2.textContent = 'Глухая;';
                        }

                        if (total % 3 === 1) {
                            OrderType2.textContent = 'Поворотно/откидная вправо;';
                        }
                        if (total % 3 === 2) {
                            OrderType2.textContent = 'Поворотно/откидная влево;';
                        }
                    }

                    if (a % 3 === 0) {
                        if (total % 3 === 0) {
                            OrderType3.textContent = 'Глухая;';
                        }

                        if (total % 3 === 1) {
                            OrderType3.textContent = 'Поворотно/откидная вправо;';
                        }
                        if (total % 3 === 2) {
                            OrderType3.textContent = 'Поворотно/откидная влево;';
                        }
                    }

                });

            });

        });



    });

    let OrderColor = document.getElementById('order_descr_color'),
        OrderGlass = document.getElementById('order_descr_glass'),
        OptionWidth = document.getElementById('option_size_width'),
        OptionHeight = document.getElementById('option_size_height'),
        input = document.getElementsByTagName('input'),
        OrderSize = document.getElementById('calc_order_size');

    OptionItem1.addEventListener('change', function () {
        let a = OptionItem1.value;

        OrderGlass.textContent = a;

    });

    OptionItem2.addEventListener('change', function () {
        let b = OptionItem2.value;

        OrderColor.textContent = b;

    });

    OptionWidth, OptionHeight.addEventListener('change', function () {
        let width = OptionWidth.value,
            height = OptionHeight.value;


        OrderSize.textContent = width + ' x ' + height;

        OptionWidth.addEventListener('click', function () {

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';

            }
        });

        OptionHeight.addEventListener('click', function () {

            for (let i = 0; i < input.length; i++) {
                input[1].value = '';

            }
        });


    });

    let request = document.querySelector('.btn'),
        back = document.querySelector('.back'),
        overlay = document.querySelector('.overlay');


    request.addEventListener('click', function () {
        let clonedNode = document.getElementById("calc-order").cloneNode(true);
        document.querySelector(".modal-order").appendChild(clonedNode);
        overlay.style.display = 'block';

    });
    back.addEventListener('click', function () {
        overlay.style.display = 'none';
        document.querySelector(".modal-order").innerHTML = '';
    });


});
