window.addEventListener('DOMContentLoaded', () => {

"use strict";

let popup_engineer = document.querySelector('.popup_engineer'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup_close');

popup_engineer.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup_engineer.classList.remove('more-splash');
    document.body.style.overflow = '';
});

let headerBtn = document.querySelector('.header_btn');

headerBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
        overlay.style.display = 'none';
        headerBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    

});