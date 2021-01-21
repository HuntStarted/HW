
// Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

let n = prompt("введите число");
n = parseInt(n);
if (n==1){
    console.log("Число не является простым")    
}
else if ((n%2==0)&&(n!=2)){
    console.log("Число не является простым");}
    else if (n==2){
        console.log("Простое число");   
    }
    else { 
     k=Math.round(Math.sqrt(n));
     flag = false;
             
     for(i=2; i<=k; i++)
        if(n%i==0){
            console.log("Число не является простым");
          flag = true;
          break;
         }
            
     if (flag == false){
        console.log("Простое число");
     }
}

