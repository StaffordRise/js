'use strict';

let money, time;

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

        if ( (typeof(income)) === 'string' && (typeof(income)) != null && income != '' && a.lenght < 50) {
        console.log("done")
        appData.appData[income];
    }
    chooseIncome.forEach(function(item, i, income) {
        let i = 1;
        console.log(i + ': ' + item + " (Способы доп. заработка: " + income + ")");
    }),
    
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: ");
    }
}

