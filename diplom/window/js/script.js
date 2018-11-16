window.addEventListener('DOMContentLoaded', () => {

"use strict";

let popup_engineer = document.querySelector('.popup_engineer'),
    overlay = document.querySelector('.overlay'),
    headerBtn = document.querySelector('.header_btn'),
    close = document.querySelector('.popup_close');

    headerBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
});

});