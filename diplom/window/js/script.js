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


let priceBtn = document.querySelectorAll('.glazing_price_btn')


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


    });

