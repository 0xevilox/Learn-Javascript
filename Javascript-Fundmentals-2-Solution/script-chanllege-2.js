/* tip Calaculator */

const calcTip = (bill) => {
    if(bill >=50 && bill <=300){
        tip = 0.15
    }else{
        tip = 0.20
    }
    tip_total =  bill * tip
    all_total = tip_total + bill
    return all_total
}
//Arrays
let list = [125,555,44]
console.log(calcTip(list[0]))