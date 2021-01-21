const usersAtion = prompt(`пожалуйста введите желаемое действие`)
const originalArray = (prompt(`Пожалуйста введите данные через пробел`).split(` `))
const originalArrayNumbers = originalArray.map(function (string) {return Number(string)} );
const actionsArray = [`+`,`-`,`/`,`*`]
const filteredNumbersArray = []
const arrayFilter = function () { 
    for (let number of originalArrayNumbers) {
       if (isNaN(number)) {
           continue;
       }
       else (
        filteredNumbersArray.push(number)
       )
    } 
}
arrayFilter(originalArrayNumbers)

const summaryFunction = function summ (accumulator, currentValue) {return accumulator + currentValue;}
const subtractionFunction = function subtraction (accumulator, currentValue) {return accumulator - currentValue;}
const divisionFunction = function division (accumulator, currentValue) {return accumulator / currentValue;}
const multiplicationFunction = function multiplication (accumulator, currentValue) {return accumulator * currentValue;}

if (actionsArray.includes(usersAtion)) {
    switch(usersAtion) {
        case '+' : 
        alert(filteredNumbersArray.reduce(summaryFunction))
        break;    
        case '-': 
        alert(filteredNumbersArray.reduce(subtractionFunction))
        break;
        case '*': 
        alert(filteredNumbersArray.reduce(multiplicationFunction))
        break;
        case '/': 
        alert(filteredNumbersArray.reduce(divisionFunction))
        break;
    }} else {
        alert(`Выбранное действие отсутствует`)
    }


