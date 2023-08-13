    /* Simple Tip Calaculator */

const bill = 275;
let tip;
bill >= 50 && bill <= 300 ? tip = 20 / 100 : tip = 15 / 100    
const cal_bill_tip = bill * tip
const total_bill = bill + cal_bill_tip
console.log(total_bill)