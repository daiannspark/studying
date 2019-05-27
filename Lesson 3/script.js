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
    savings: true
};


function chooseExpenses () {
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
}

chooseExpenses();


function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Daily budget:" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log("Not so much");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Medium level");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Very good");
    } else {
        console.log("Shit happens");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?","");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExp = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i] = questionOptExp;
    }
}

chooseOptExpenses();