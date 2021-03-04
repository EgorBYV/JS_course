// 1.2 Типы данных 
// Типы данных (в JS их 8 типов)

const firstname = 'Egor' // тип данных - string
// const lastname = 'Vrublevski' 
const age = 31 // тип данных - number
const isProgrammer = true // тип данных - boolean
// const - потому что мы не где не будем менять эти переменные

// (Мутирование) Динамическая типизация
// мы можем использоваться эти переменные чтобы выводить какую-то полезную информацию
// console.log('Имя человека: ' + firstname + ', его возраст: ' + age) // c помощью этой консутрукции мы можем взаимодействовать с консулью
// в JS одинарные ковычки и двойные ковычки это одно и тоже. Но самое важное - это писать код в едином стилие. Тоесть если использую одинарные, то везде одинарные
// команда + соединяет. В данный момент мы соединили 4 строчки. В консоли будет отобнажаться
// console.log(age) // в консоли вторая строка будет синим цветом, потому что 31 - это число, не смотря на то, что в прошлой строке 31 черным - в цвет строки.
// это происходит из-за того, что JS работает с объектами. И это разные типы данных
// если написать console.log(age.toString()), то переменная станет строкой, как в прошлой строке) и станет черным цветом, а не синим
// так автоматически происходит в предыдущей строке

// JS - это синтаксия, язык программирования, но разная среда (web, server, mobile, desktop) вносит свои API (aplication programm interface) - набор функций и команд. НАпример консоль есть не везде, а в WEB есть.

// alert('Имя человека: ' + firstname + ', его возраст: ' + age)
// prompt('') собираем данные от пользователя, эта функция возвращает нам некоторе значение
const lastname = prompt('Введите фамилию')
alert(lastname)