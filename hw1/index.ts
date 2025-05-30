import * as readline from 'readline-sync';

// Получаем три целых числа от пользователя
const num1: number = parseInt(readline.question("Write first number (by default 5): ", { defaultInput: "5" }), 10);
const num2: number = parseInt(readline.question("Write second number (by default 6): ", { defaultInput: "6" }), 10);
const num3: number = parseInt(readline.question("Write third number (by default 7): ", { defaultInput: "7" }), 10);


// Вычисляем сумму
const sum: number = num1 + num2 + num3;

// Выводим результат
console.log("Sum of three numbers:", sum);
