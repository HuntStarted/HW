// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя).


const number = +prompt('Введите число');
for (let i = 0;; i++) {
  let result = 3**i;
  if (result === number) {
    console.log(`Число ${number} является числом 3 в степени ${i} `);
    break;
  }
  if (result > number){
    console.log(`Нелья получить число ${number} путем возведения числа 3 в степень`);
    break;
  }
}