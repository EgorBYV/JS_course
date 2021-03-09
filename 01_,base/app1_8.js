// 1.8 Функции
// Функции существуют чтобы не дублировать куски кода в JS

function calculateAge(year) { // ключевое слово fuction, название calculateAge, параметр year 
    return 2021 - year // ключевое слово return возвращает из функции 2020 - year   
}

// const myAge = calculateAge(1989) // ввожу переменную c названием myAge, вызываю функцию calculateAge и передаю параметр 1989 год
// console.log(myAge) // выводим в консоли переменную myAge
// console.log(calculateAge(1989))
// console.log(calculateAge(1993))
// console.log(calculateAge(2003))
// каждый раз будет вычисляться новое значение в соответствии, с тем, что мы задали в параметре

function logInfoAbout (name, year) { // функция с названием logInfoAbout c двумя параметрами: name и year
 const age = calculateAge(year) // вводим переменную и присваиваем ей значение функции (получается функция внутри функции)
 if (age > 0) {
 console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
} else {
    console.log('Вообще-то это уже будущее')
}
}
logInfoAbout("Egor", 1989) // теперь мы просто вызываем функцию и не прописываем console.log т.к. console.log прописан внутри самой функции
logInfoAbout("Liza", 1992)
logInfoAbout("Liza", 2025)