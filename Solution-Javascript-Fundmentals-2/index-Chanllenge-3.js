let Mark_detials = {
    Name: "Mark Miller",
    Mark_weight: 78,
    Mark_height: 1.69
}
let John_details = {
    Name: "John Smith",
    John_weight: 92,
    John_height: 1.95
}
function calcBMI(weight,height){
    return weight / height ** 2
}
const Mark_Bmi = calcBMI(Mark_detials.Mark_weight,Mark_detials.Mark_height)
const John_bmi = calcBMI(John_details.John_weight,John_details.John_height)

if (Mark_Bmi > John_bmi){
    console.log(`Mark [Value: ${Mark_Bmi}] is higher Bmi than John [Value: ${John_bmi}]`)
}else{
    console.log(`John [Value: ${John_bmi}] is higher than Mark [Value: ${Mark_Bmi}]`)
}