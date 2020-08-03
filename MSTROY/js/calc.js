window.addEventListener('DOMContentLoaded', function () {

    let Device = document.querySelectorAll('.calculator_device'),
        Checkbox = document.getElementById('checked'),
        OrderDevice = document.querySelectorAll('.calculator-order_item .calculator-order_item_total')[0],
        OrderTracker = document.querySelectorAll('.calculator-order_item .calculator-order_item_total')[1],
        OrderInfokiosk = document.querySelectorAll('.calculator-order_item .calculator-order_item_total')[2],
        OrderStation = document.querySelectorAll('.calculator-order_item .calculator-order_item_total')[3],
        OrderPrice = document.querySelector('.calculator-order_price span'),
        Area = document.querySelectorAll('.calculator-form_item .input_container input')[0],
        Space = document.querySelectorAll('.calculator-form_item .input_container input')[1],
        Person = document.querySelectorAll('.calculator-form_item .input_container input')[2],
        ValueArea = 0,
        ValueSpace = 0,
        ValuePerson = 0,
        TotalDevice = 0,
        TotalTracker = 0,
        TotalInfokiosk = 0,
        TotalStation = 0,
        DevicePrice = 1000,
        InfokioskPrice = 80000,
        TrackerPrice = 2000,
        StationPrice = 50000,
        TotalPrice = 0


    Area.addEventListener('change', function () {
        ValueArea = this.value;
        TotalTracker = Math.round((ValueSpace * 2 * ValueArea) / 200);
        TotalStation = Math.round(ValueSpace * ValueArea / 15000);
        if (Checkbox.checked) {
            TotalPrice = TotalPrice * 12;
            OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
        }
        if (TotalTracker == 0) {
            TotalTracker = 1;
        }
        if (TotalStation == 0) {
            TotalStation = 1;
        }
        TotalPrice = (850 * TotalDevice) + (DevicePrice * TotalDevice + InfokioskPrice * TotalInfokiosk + TrackerPrice * TotalTracker + StationPrice * TotalStation) / 12;
        TotalPrice = Math.floor(TotalPrice)

        if (Area.value == '' || Space.value == '' || Person.value == '') {
            OrderTracker.innerHTML = 0 + ' шт';
            OrderStation.innerHTML = 0 + ' шт';
            OrderDevice.innerHTML = 0 + ' шт';
            OrderInfokiosk.innerHTML = 0 + ' шт';
            OrderPrice.innerHTML = 0 + ' ₽';

        } else {
            OrderTracker.innerHTML = TotalTracker + ' шт';
            OrderStation.innerHTML = TotalStation + ' шт';
            OrderDevice.innerHTML = TotalDevice + ' шт';
            OrderInfokiosk.innerHTML = TotalInfokiosk + ' шт';
            OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
        }
    });

    Space.addEventListener('change', function () {
        ValueSpace = this.value;
        TotalSpace = ValueSpace * ValueArea;
        TotalTracker = Math.round((TotalSpace * 2) / 200);
        TotalStation = Math.round(TotalSpace / 15000);
        if (TotalTracker == 0) {
            TotalTracker = 1;
        }
        if (TotalStation == 0) {
            TotalStation = 1;
        }

        TotalPrice = (850 * TotalDevice) + (DevicePrice * TotalDevice + InfokioskPrice * TotalInfokiosk + TrackerPrice * TotalTracker + StationPrice * TotalStation) / 12;
        TotalPrice = Math.floor(TotalPrice)
        if (Checkbox.checked) {
            TotalPrice = TotalPrice * 12;
            OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
        }
        if (Area.value == '' || Space.value == '' || Person.value == '') {
            OrderTracker.innerHTML = 0 + ' шт';
            OrderStation.innerHTML = 0 + ' шт';
            OrderDevice.innerHTML = 0 + ' шт';
            OrderInfokiosk.innerHTML = 0 + ' шт';
            OrderPrice.innerHTML = 0 + ' ₽';
        } else {
            OrderTracker.innerHTML = TotalTracker + ' шт';
            OrderStation.innerHTML = TotalStation + ' шт';
            OrderDevice.innerHTML = TotalDevice + ' шт';
            OrderInfokiosk.innerHTML = TotalInfokiosk + ' шт';
            OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
        }

    });


    Person.addEventListener('change', function () {
        ValuePerson = this.value;
        TotalDevice = ValuePerson;
        TotalInfokiosk = Math.round(TotalDevice / 50);
        if (TotalInfokiosk == 0) {
            TotalInfokiosk = 1;
        }

        TotalPrice = (850 * TotalDevice) + (DevicePrice * TotalDevice + InfokioskPrice * TotalInfokiosk + TrackerPrice * TotalTracker + StationPrice * TotalStation) / 12;
        TotalPrice = Math.floor(TotalPrice)
        if (Checkbox.checked) {
            TotalPrice = TotalPrice * 12;
            OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
        }
        if (Area.value == '' || Space.value == '' || Person.value == '') {
            OrderTracker.innerHTML = 0 + ' шт';
            OrderStation.innerHTML = 0 + ' шт';
            OrderDevice.innerHTML = 0 + ' шт';
            OrderInfokiosk.innerHTML = 0 + ' шт';
            OrderPrice.innerHTML = 0 + ' ₽';
        } else {
            OrderTracker.innerHTML = TotalTracker + ' шт';
            OrderStation.innerHTML = TotalStation + ' шт';
            OrderDevice.innerHTML = TotalDevice + ' шт';
            OrderInfokiosk.innerHTML = TotalInfokiosk + ' шт';
            OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
        }
    });


    Device.forEach((item, i) => {

        item.addEventListener('click', () => {
            Device.forEach((item) =>
                item.classList.remove('active'));
            Device[i].classList.add('active');

            if (i === 0) {
                DevicePrice = 1000;
            }
            if (i === 1) {
                DevicePrice = 5000;
            }
            if (i === 2) {
                DevicePrice = 9000;
            }
            TotalPrice = (850 * TotalDevice) + (DevicePrice * TotalDevice + InfokioskPrice * TotalInfokiosk + TrackerPrice * TotalTracker + StationPrice * TotalStation) / 12;
            TotalPrice = Math.floor(TotalPrice)
            if (Checkbox.checked) {
                TotalPrice = TotalPrice * 12;
                OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
            }
            if (Area.value == '' || Space.value == '' || Person.value == '') {
                OrderTracker.innerHTML = 0 + ' шт';
                OrderStation.innerHTML = 0 + ' шт';
                OrderDevice.innerHTML = 0 + ' шт';
                OrderInfokiosk.innerHTML = 0 + ' шт';
                OrderPrice.innerHTML = 0 + ' ₽';
            } else {
                OrderTracker.innerHTML = TotalTracker + ' шт';
                OrderStation.innerHTML = TotalStation + ' шт';
                OrderDevice.innerHTML = TotalDevice + ' шт';
                OrderInfokiosk.innerHTML = TotalInfokiosk + ' шт';
                OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
            }
        });

    });

    Checkbox.addEventListener('change', () => {

        if (Area.value == '' || Space.value == '' || Person.value == ''){
            OrderPrice.innerHTML = 0 + ' ₽';
        }

        if (Checkbox.checked) {
            TotalPrice = TotalPrice * 12;
            OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
        } else {
            TotalPrice = TotalPrice / 12;
            OrderPrice.innerHTML = TotalPrice.toLocaleString() + ' ₽';
        }

    });


});