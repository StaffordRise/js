window.addEventListener('DOMContentLoaded', () => {

"use strict";

let popupEngBtn = document.querySelector('.popup_engineer_btn'),
    popupEngineer = document.querySelector('.popup_engineer'),
    phoneModal = document.querySelectorAll('.phone_link'),
    popupClose = document.getElementsByClassName('popup_close');


  
popupEngBtn.addEventListener('click', function(){
    popupEngineer.style.display = 'block';
});

phoneModal.addEventListener('click', function(){
    popupEngineer.style.display = 'block';
});

popupEngineer.addEventListener('click', function(){
    popupClose.style.display = 'none';
});





// tabs
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

});  let tab = document.querySelectorAll('.glazing_block'),
        info = document.querySelector('.glazing_slider'),
        tabContent = document.querySelectorAll('.no-padding');
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
/*
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('glazing_block')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
       }
*/

/* calc
let calc = document.querySelector('.popup_calc'),
    priceBtn = document.querySelectorAll('.glazing_price_btn');
*/

//timer
let deadLine = '2018-07-04';

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



});

