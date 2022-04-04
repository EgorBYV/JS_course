// Декларативная запись функции.
// Функция, записанная таким образом, будет работать, даже если она записана в конце страницы кода, а вызвана раньше.
// Иногда это может быть полезно в организации структуры кода.
console.log(square(3));
function square(x) {
    return x * x;
}
// Ещё пример:
console.log("Голос из будущего:", future());
function future() {
    return "Летающих машин не будет!"
}

// Стрелочные функции
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
    console.log ("Toot");
};

// Необязатлеьные аргументы
function square4(x) { return x * x; }
// При данном вызове "лишние" аргументы будут игнорироваться.
console.log(square4(4, true, 'eжик'));

// Второй аррумент не обязателен, при наличии такого условия в функции
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

// В данной функции второй аргумент, если не указан, будет принимать по-умолчанию значение 2.
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
// Примеры вариантов вызова функции с разным количеством агрументов
console.log(power(4));
console.log(power(2,6));

// Замыкания/ 
// Функция возвращает функцию. При создании экземпляров функции, мы получаем доступ 
// к локальным переменным данной функции (замкнутая область видимости в пределах экземпляра функции) в любом месте програмы
function wrapValue(n) {
    let local = n;
    return () => local
}
// Выздов функций и сохранение возвращаемой функции в новый экземпляр переменной.
// Возможно в больших программах таким образом делается копия функции. Таким образом это даёт возможность
// не беспокоиться, что значение локальной переменной в другом месте программы может быть другим в процессе вылполнения.
let wrap1 = wrapValue(1);
console.log(wrap1());
let wrap2 = wrapValue(2);
console.log(wrap2());
// Упрощенный вариант создания замыкания (замкнутой области видимости в экземпляре функции)
// Не обязательно указывать переменную явно
function multiplier(factor) {
    return number => number*factor;
}

let twice = multiplier(2);
console.log(twice(7));

// Рекурсия.
function powerTwo(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return (base * powerTwo(base, (exponent - 1)));
    }
}
 console.log(powerTwo(2, 3))

 