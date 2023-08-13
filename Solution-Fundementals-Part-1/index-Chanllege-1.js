/* Coding challenge 1 Solution */
// BMI and it Data 1

const weightMark = 78
const weightJohn = 92
const heightMark =  1.6
const heightJohn = 1.95

const calMark = weightMark / heightMark ** heightMark
const calJohn = weightJohn / weightJohn ** weightJohn

if (calMark > calJohn) {
    console.log(`Mark [Value: ${calMark}] has a higher BMI than John [Value: ${calJohn}]`)
}else{
    console.log(`John [Value: ${calJohn}] has a higher BMI than Mark [Value: ${calMark}]`)
}