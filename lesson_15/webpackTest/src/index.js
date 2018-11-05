window.addEventListener('DOMContentLoaded', () => {
    
    "use strict";
    let calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});

    // timer

  

      // Modal
     
        

// form
/*
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошо не так...'
  };

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
  
        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader ('Content-Type', 'aplication/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);
        request.send(formData);

       // let obj = {};
       // formData.forEach(function(value, key) {
       //     obj[key] = value;
       // });
        //let json = JSON.stringify(obj);
        
        //request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }

        });

        for  (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

    });
*/


//promise

// slider


    //calc

   

/*
разбор задания

function realTime() {        // создаем функцию, которая будет показывать текущее время.
    let time = document.getElementById('time'),  // мы получаем на странице элемент по id 'time' - туда и будем записывать время
         now = new Date(), // создаем переменную now - там будет лежать текущее время 
         hours = now.getHours(); //  в нужные переменные мы помещаем часы/минуты/секунды - вытаскиваем их из текущего времени
         minutes = now.getMinutes();
         seconds = now.getSeconds();

    if (seconds < 10) {      //  дальше идут условия, что если осталась 1 цифра - то мы добавляем перед ней нолик
        seconds = '0' + seconds;  // Пример 12:1:9  превратится в 12:01:09
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    time.innerHTML = hours + ':' + minutes + ':' + seconds;  // и просто записываем на страницу
}
*/



