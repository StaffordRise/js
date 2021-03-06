
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

    // timer

    let deadLine = '2018-10-22';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            if (hours < 10) {
                hours = "0" + hours
               }
            if (minutes < 10) {
                minutes = "0" + minutes
               }
            if (seconds < 10) {
                seconds = "0" + seconds
               };

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            }
    }
            
    

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

         function updateClock() {
            let t = getTimeRemaining(endtime);
                 hours.textContent = t.hours;
                 minutes.textContent = t.minutes;
                 seconds.textContent = t.seconds;

            if (t.total <= 0) {
                 clearInterval(timeInterval);
                 hours.textContent = ('00');
                 minutes.textContent = ('00');
                 seconds.textContent = ('00');
             }
        }
    }
    setClock('timer', deadLine);

    
    //let deadline = "November 01 2018 00:00:00 GMT+0300"; //for Ukraine
 //   let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
 //clearInterval('timer', deadline);
         
});

/*
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



