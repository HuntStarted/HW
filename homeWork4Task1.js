// Вывести в консоль числа от 20 до 30 через пробел используя шаг 0,5 (20 20,5 21 21,5….)
let result = ``
 for (let i = 20; i <= 30; i+=0.5){
     if (i === 30){
         result += i;}
            else{
             result += `${i}, `;    
         }
     } 
 
console.log(result)