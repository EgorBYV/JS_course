// Проверяет выполняется ли условие и выводит результат, иначе выводит другой
let theNumber = Number(prompt("Введите число"));
if (!Number.isNaN(theNumber)) {
    console.log("Это число является квадратным корнем из " + theNumber * theNumber);
} else {
    console.log("Введите, пожалуйста, число");
}

// Проверяет выполняется ли уловие, иначе проверяет другое условие, иначе выполняте третье
console.log("Вы ввели:" + theNumber);
if (theNumber < 10) {
    console.log("Это маленькое число")
} else if (theNumber < 100) {
    console.log("Это среднее число")
} else {
    console.log("Это большое число")
}

// Цикл работает, пока выполняется условие.
// Выводит списко четных цифр в заданном диапазоне
let number = 0;
while (number <= 12) {
    console.log(number)
    number += 2;
}

// Цикл работает, пока выполняется условие.
let result = 1;
let counter = 0;
while (counter < 10) {
    result *= 2;
    counter += 1;
}
console.log(result);

// Цикл делает до первого совпадения условия(как минимум один раз)
let yourName;
do {
    yourName = prompt(`Введите ваше имя: /n Если закончили, то введите "q"`);
    console.log(yourName);
} while  (!yourName);

// Короткий способ вывести список из 10 четных цифр, Цикл for (всё, что касается цикла записанов одной строке)
for (let number = 0; number <= 12; number += 2) {
    console.log(number)
}

//  Короткий способ посчитать 2^10 степени. Записиь аналогична предыдущей.
let result = 1;
for (let counter = 0; counter < 10; counter += 1) {
    result *= 2
}
console.log(result)

// Бесконечный цикл for. Выход из цикла осуществляется командой break. 
// Выводит первой число больше 20 которое делится на 7 и завершает цикл.
for (let current = 20; ; current += 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

// программа выполняет определенное действие в зависиомости от значения x.
// Записана с помощью условногых оператовров if 
let x = 1;
let value1 = 2;
let value2 = 3;
let valut3 = 5;
/*
if (x == value1) action1();
else if (x == value2) action2();
else if (x == value3) action3();
else defaultAction();
*/

// Похожая программа, как предыдущая, только с помщощью цикла switch
switch (prompt("Какая сегодня погода?")) {
    case "дождь":
        console.log("Не забудь взять зонитк.");
        break;
    case "солнечно":
        console.log("Одевайся легко");
    case "облачно":
        console.log("Пойдите гулять");
        break;
    default:
        console.log("Неизвестная погода.Примите решение сами!");
        break;
}
