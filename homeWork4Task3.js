// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь.

const input = Number(prompt(`Введите целое число`))
let result = ``
console.log (`Числа, квадрат которых не превышает число ${input}`)
for (let i = 1; i**2 <= input; i++) {
    if (i > 100) {
        break;
    }
    else {
result += `${i} `
            }
}
console.log (result)