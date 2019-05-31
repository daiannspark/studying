'use strict';


let menu  = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptAp = document.querySelector('#prompt'),
    menuLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);

menuLi.classList.add("menu-item");
menuLi.textContent = "Пятый пункт";
menu.appendChild(menuLi);

document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let question = prompt("Как вы относитесь к технике Apple?", "");
promptAp.textContent = question;