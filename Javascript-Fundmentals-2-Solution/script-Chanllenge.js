/* Calaclate average */

const dolphin_total = 85 + 54 + 41
const Koalas_total = 23 + 34 + 27

const calcAverage = (average) => {
    return average / 3
}

const average_dolphins = calcAverage(dolphin_total)
const average_koalas = calcAverage(Koalas_total)

function checkwinner(aver_dolphins,aver_Koalas){
    if(aver_dolphins >= aver_Koalas * 2 ){
        console.log(`Dolphins is the winner ${average_dolphins} vs Koalas ${average_koalas}`)
    }else if(aver_Koalas >= aver_dolphins * 2 ){
        console.log(`Koalas is the winner ${average_koalas} vs Dolphins ${aver_dolphins}`)
    }else{
        console.log('No one is winner')
    }
}

checkwinner(average_dolphins,average_koalas)