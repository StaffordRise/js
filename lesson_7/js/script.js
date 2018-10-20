window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            (tabContent[b].classList.remove('hide'));
            (tabContent[b].classList.add('show'));
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});

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