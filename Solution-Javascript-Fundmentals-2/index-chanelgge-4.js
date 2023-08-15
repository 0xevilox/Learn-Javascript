/* Tip calculator with loop */

let calcTip = (bill) => {
    if (bill >=50 && bill <=350){
        tip = 15/100
    }else{
        tip = 20/100
    }
    total_tip = bill * tip 
    total_amount = bill + total_tip
    return total_amount
}
let bills = [22,295,176,440,37,105,10,1100,86,52]



let final_amount = []

for(let bil=0; bil<bills.length -1; bil++){
    fin_tips = calcTip(bills[bil])
    final_amount.push(fin_tips)
}
console.log(final_amount)



// Bonous 

let calcAverage = (total,count) => {
    return total/count
}

let value = [2,3,6]
let len = value.length
let total = 0;
for (let val=0;  val < value.length;val++){
    total += value[val]

}
// console.log(total)
console.log(calcAverage(total,len))