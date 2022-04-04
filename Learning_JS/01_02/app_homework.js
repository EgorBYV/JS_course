// Exercise №1. Построение треугольника
let a = "#";
for (number = 0; number < 7; number += 1 ) {
    console.log(a);
    a += "#"
}

// Exercise №2. FizzBuZZ
number = 1
for (i = 0; i < 100; i += 1) {
    message = number;
    
    if ((number % 3 == 0) && (number % 5 == 0)) message = "FizzBuzz";
    else if (number % 3 == 0) message = "Fizz";
    else if (number % 5 == 0) message = "Buzz";
    console.log(message);
    number += 1;
}

// Exercise №3. Шахматная доска
let text = " ";
let size = 8;

if (size % 2 == 0) {
    for (i = 0; i < (size*size); i += 1) {
        if (i % (size+1) == 0) text += "\n";
        else if (i % 2 == 0) text += "#";
        else if (i % 2 == 1) text += " ";
    }
}
if (size % 2 == 1) {
    for (i = 0; i < (size*size); i += 1) {
        if (i % (size) == 0) text += "\n";
        else if (i % 2 == 0) text += " ";
        else if (i % 2 == 1) text += "#";
    }
}
console.log(text);