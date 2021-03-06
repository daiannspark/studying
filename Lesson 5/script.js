'use strict';

let money, time;

function start () {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null )  {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }

    while (isNaN(time) || time == "" || time == null )  {
        time = prompt ("Введите дату в формате YYYY-MM-DD", "")
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b; 
            } else {
                console.log('ups');
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Daily budget:" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Not so much");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Medium level");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Very good");
        } else {
            console.log("Shit happens");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?","");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExp = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = questionOptExp;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    
        if (typeof(items) != 'string' || typeof(items) == null || items == '') {
            console.log('Недостаточно информации');
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Что-то еще?", "")); 
            appData.income.sort();
        }
    appData.income.forEach (function (itemmass, i) {
        alert("Способы дополнительного заработка: " + (i+1) + ": " + itemmass);
    });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
}

