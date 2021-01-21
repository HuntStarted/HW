// Один доллар стоит 30 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.

for (let dollars = 10; dollars <= 100; dollars += 10) 
{    const uaHrivna = (dollars*30)
    console.log (`Стоимость ${dollars} долларов по курсу составит ${uaHrivna} гривен`)
}