'use strict';

let start = document.getElementById('start'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    income = document.getElementsByClassName('income-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    level = document.getElementsByClassName('level-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    budget = document.getElementsByClassName('budget-value'),
    input_expenses = document.getElementsByClassName('expenses-item'),
    btn_1 = document.getElementsByTagName('button')[0],
    btn_2 = document.getElementsByTagName('button')[1],
    input = document.querySelectorAll('optionalexpenses-item'),
    month = document.querySelector('month-value'),
    year = document.querySelector('year-value'),
    percent = document.querySelector('choose-percent'),
    sum = document.querySelector('choose-sum'),
    checkbox = document.querySelector('#savings'),
    choose_income = document.querySelector('choose-income'),
    money, time;

function start() {
    money = +prompt('Ваш бюджет за месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money =="" || money == null) {
        money = +prompt('Ваш бюджет за месяц', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optimalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.lenght < 50) {
                console.log("done")
                appData.expenses[a] = b;
        
            } else {
                i--;
            }
        }
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.money/30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
    }   else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
    }   else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
    }   else {
            console.log("Произошла ошибка")
    }

    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*persent;
            alert("Доход в месяц с вашего депозит: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt =  prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = opt;
        }
    },

    chooseIncome: function() {
        let items = +prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
            
        while(isNaN(items) || items =="" || items == null) {
            items = +prompt('Ваш бюджет за месяц', '');

        // if ( (typeof(income)) === 'string' && (typeof(income)) != null && income != '' && a.lenght < 50) {
        // console.log("done")
        // appData.appData[income];
    }
       appData.income.forEach(function(item, i, income) {
              console.log(i + 1 + ': ' + item + " (Способы доп. заработка: " + item + ")");
    }),

        for (var key in appData) {
            console.log("Наша программа включает в себя данные: " + key);
    };
}
}
