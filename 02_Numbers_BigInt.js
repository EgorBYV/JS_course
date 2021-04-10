// // 2 (Number)
// // Мы знаем, что мы можем создавать переменные и заносить в них число, Например:
// // число состоит из цифр, и записывается без ковычек

// // Числа могут быть как Integer (целочисленный), например:
// const num = 42 // Integer
// // так и Float(не целочисленный), например
// const float = 42.42 // Float
// const pow = 10e3 // 
// // ещё есть шестрадцатиричные числа
// console.log(pow) // Таким образом мы всегда в консоли можем увидеть то, что вызываем.

// // Также мы всегда можем пользоваться консолью и тестировать JS, не обращаясь к редактору
// // Есть кропочка "очистить консоль"
// // В консоли мы всегда можем оборащаться к любым глобальным объектам, а также к браузерному API чтобы видеть,что они из себя представляют и как они устроены
// // Если к консоли обраться к Number через точку, то увидим большое количество элементов, относящихся к числу.
// console.log('Max_Safe_Integer: ', Number.MAX_SAFE_INTEGER) // Введя эту операцию, мы можем видеть максимальное число, с которым может работать JS
// console.log( 'Math.pow 53:', Math.pow(2, 53) - 1) // Введя в консоли Math мы можем увидеть большое количество математических функций
// console.log( 'MAX_VALUE:',Number.MAX_VALUE) // Минимальное число, с которым моожет рабоаться JS
// console.log( 'MIN_VALUE:',Number.MIN_VALUE)
// console.log( 'NEGATIVE_INFINITY:',Number.NEGATIVE_INFINITY) // положительная бесконечность
// console.log( 'POSITIVE_INFINITY:',Number.POSITIVE_INFINITY) // отрицательная бесконечность
// console.log('2 / 0:', 2 / 0)
// console.log( 'Number.Nan:',Number.NaN) // Not a Nubmer // не число
// console.log( 'typeof NaN:', typeof NaN) // тип данных
// const weird = 2 / undefined
// console.log( 'const weird = 2 / undefined, weird:', weird) // узнаем значение пемеременной, получим NaN
// console.log('Number.isNaN(weird):', Number.isNaN(weird)) // Является ли число не номером
// console.log( 'Number.isNaN:', Number.isNaN(42)) // Является ли число не номером?
// console.log(isFinite(42)) // Конечное ли это число?
// console.log(Number.isFinite(Infinity)) // Являетли ли число конечным?
// console.log(Number.isFinite(42))  // Являетли ли число конечным?

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(stringInt + 2) // будет строчное значение в виде 402, т.к. переменная stringInt строчная
// console.log(Number.parseInt(stringInt) + 2) // будет операция сложения, т.к. метода parsseInt парсит строкове значение в число
// console.log(parseInt(stringInt) + 2) // самый распостраненный способб спарсить строку в число
// console.log(Number(stringInt) + 2) // более короткий вариант спарсить строку в число. В результате будет операция сложения
// console.log(+stringInt + 2) // ещё более короткий способ спарсить строку в число. Результат тот же, что и в прошлой строке

// console.log(Number.parseInt(stringFloat) + 2) // будет 42, а не 42.42, т.к. parseInt работает только с целыми цислами, и округляет до целого
// console.log(Number.parseFloat(stringFloat) + 2) // будет 42,42 так как parseFloat спарсит строчное значение до 40,42


// 2.1
// console.log(0.4 + 0.2) // 0.60000000000001 - это особенность JS из-за битов
// console.log((0.4 + 0.2).toFixed(1)) // будет 0.6 но это строчное значение c одним знаком после запятой из-за метода toFixed(1)
// console.log(+(0.4 + 0.2).toFixed(1)) // будет числовое значение благодаря методу +
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // будет числовое значение благодаря parsedFloat (то же, что и +)
// Так как тут описали, можно работать с числами

// // 2.2 BigInt (относительно новый тип данных в JS)
// // Этот типданных ввели чтобы мы могли работать с числами, которые больше чем MAX_SAFE_INTEGER
// console.log(9007199254740991) // MAX_SAFE_INTEGER
// console.log(9007199254740991999) // Number, но с ним мы работать не можем, так как он больше, чем MAX_SAFE_INTEGER
// console.log(9007199254740991999n) // теперь это этип данных BigInt, нужно было в конце только добавить n. Теперь можно проводить разные операции с этим.
// console.log(9007199254740991999n - 900719925474099199n) // например операцию вычитания. Хром подсвечивает в консоли зелёным этот тип данных
// console.log(-9007199254740991999n) // отрицательное значение
// // console.log(9007199254740991999.34234n) // error, так как BigInt - это только целые значения
// // console.log(10n - 4) // error так как разные типы данных
// console.log(parseInt(10n) - 4) // преобразовали BigInt в Number и провели вычетание
// console.log(10n - BigInt(4)) // преобразовали 4 в BigInt и вычли. в результате вышло bigInt
// console.log(5n / 2n) // 2.5n ,но будет 2n так как должно быть целое число, и остальное отсекается
// // Вот и вся теория про BigInt

// 2.3 Math
// объект Math позволяет в JS взаимодествовать с различными математическими операциями
// Математические функции лучше посммотреть на каком-нибудь сайте. Владилен давал, но я не записывал.
// Тут просто. Как в Exel
// MDN Math round

// Example
function getRandomBetween(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
console.log(getRandomBetween(10, 20))