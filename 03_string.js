// //  String
// const name = 'Егор'
// console.log(typeof name) // В консол будет написан тип данных для переенной name
// const age = 31

// // const output = 'Привет! Меня зовут ' + name +'. И мой возраст ' + age + ' год.'
// // console.log(output) // Чем плох наддый подход? Если в переменной много значений, особенно других переменных, 
// // операций (знаков +), то в этом легко запутаться. Особенно если мы хотим генерировать HTML-код в JS, формировать теги.

// // В новых форматах языка есть другой способ - использовать обратные ковычки:
// // const output =`Привет! Меня зовут ${name}. И мой возраст: ${age} год.`// и тут не надо ставить никахих символов(+) знаков конкотинации
// // const output =`Привет! Меня зовут ${name}. И мой возраст: ${age < 20 ? 'A' : "B"} год.`// тернарные выражения писать можно, а через if писать нельзя 
// // В обратных скобках можно писать много строчек и всё сохраниться, например:
// const output = `
// <div> This is div </div>
// <p> this is p </p>
// Но пока это ничего не значит. Это пока просто строчки.`
// console.log(output)

// const firstname = 'Врублевский' // Когда мы создаём строчку таким образом, то за кулисами JS создаёт такую конструкцию: new String (). Но просто мы этого не видим
// // Благодаря этому с переменной мы можем исползоваться большое количество операторов. ПОсмотреть это можно через точку
// console.log(firstname.length)
// console.log(firstname.toUpperCase())
// console.log(firstname.toLowerCase())
// console.log(firstname.charAt(5))
// console.log(firstname.indexOf('в')) // есть ли значение в в строке? Если да, то покажет на каком индексе
// console.log(firstname.indexOf('7')) // есть ли значение в в строке? Если нет, то покажет -1
// console.log(firstname.startsWith('вру')) // Начинается ли строка с символов вру?
// console.log(firstname.toLowerCase().startsWith('вру'))
// console.log(firstname.endsWith('й!'))
// console.log(firstname.repeat(3))
// const string = '        password     '
// console.log(string)
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    // console.log(s, name, age)
    // return 'Info about person'
    if (age < 0) { 
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`   
}
const personName = 'Егор'
const personAge = 31
const personName2 = 'Маргарита'
const personAge2 = -1

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)