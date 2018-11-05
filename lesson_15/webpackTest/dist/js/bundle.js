/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {


window.addEventListener('DOMContentLoaded', () => {
    
    "use strict";
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

    info.addEventListener('click', (event) => {
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

      // Modal
      let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  more.addEventListener('click', function() {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
  });

    let descrBtn = document.querySelector('.description-btn');

    descrBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    
    close.addEventListener('click', () => {
            overlay.style.display = 'none';
            descrBtn.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
        

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
let message = {
    loading: "Загрузка...",
    sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
    failure: "Что-то пошло не так..."
};

let form = document.querySelector('.main-form'),
    formDown = document.querySelector('#form'),
    input = form.getElementsByTagName ('input'),
    statusMessage = document.createElement('div');
     

    statusMessage.classList.add('status');

function sendForm(elem){

    elem.addEventListener('submit', function (event) {
        event.preventDefault();
        elem.appendChild(statusMessage);
    
        let formData = new FormData(elem);
    
    function postData() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
            request.onreadystatechange = function () {
                if(request.readyState < 4) {
                    resolve();
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            };
    
            let obj = {};
            formData.forEach (function (value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request.send(json);


        });
    }
    
    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
       
    }

    postData (formData)
        .then (() => statusMessage.innerHTML = message.loading)
        .then (() => statusMessage.innerHTML = message.sucsess)
        .catch (() => statusMessage.innerHTML = message.failure)
        .then (clearInput);   
    });


}

sendForm(form);
sendForm(formDown);


// slider

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    // for (let i = 0; i < slides.length; i++) {
    //      slides[i].style.display = 'none';
    // }    Эта та же зпись, что и строрчка выше
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //calc

    let persons = document.getElementsByClassName('counter-block-input')[0],
    restDays = document.getElementsByClassName('counter-block-input')[1],
    totalValue = document.querySelector('#total'),
    place = document.querySelector('#select'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('keyup', function() {
    this.value = this.value.replace(/[^0-9]/,"");
    personsSum = +this.value;
    total = (daysSum + personsSum)*4000;
    if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});
restDays.addEventListener('keyup', function() {
    this.value = this.value.replace(/[^0-9]/,"");
    daysSum = +this.value;
    total = (daysSum + personsSum)*4000;
    if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

place.addEventListener('change', function(){
    if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
});
       
});

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





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map