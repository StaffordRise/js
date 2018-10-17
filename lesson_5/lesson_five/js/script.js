let li = document.createElement('li'),
    adv = document.getElementsByClassName('adv')[0], // указываем номер элемента в массиве который используем 
    column = document.querySelectorAll('.column')[1], //указываем номер элемента в массиве который используем 
    menu = document.querySelector('.menu'),
    //title = document.querySelector('#title'), как вариант
    title = document.getElementById('title'),
    opinion = prompt('Ваше отношение к технике Apple?'), // сюда запишется ответ от пользователя(ответ пльзователя)
    question = document.querySelector('#prompt'), // получаем элемент со страницы
    menu_item = document.querySelectorAll('.menu-item');


console.log(li);
console.log(column);

title.textContent = "Мы продаем только подленную технику Apple";
//title.innerHTML = title.innerHTML.replace("только", "только подлинную"); 2й вариант

li.textContent = "Пятый элемент"; // добавляем текст в элем-т li
li.classList.add('menu-item'); //добавляем новый класс
menu.appendChild(li);

menu.insertBefore(menu_item[2], menu_item[1]); //меняем местами элементы
column.removeChild(adv);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

question.textContent = opinion; // в элемент на странице мы помещаем ответ от пользователя
// в элемент на странице который лежит в переменной question мы помещаем ответ пользователя, который на данный момент лежит в переменной opinion




