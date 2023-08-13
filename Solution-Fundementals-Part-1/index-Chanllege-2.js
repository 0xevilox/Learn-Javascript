/* The winner with the highest average score wins a trophy!*/

const Dolphins = 96 + 108 + 89 / 3
const Koalas = 88 + 91 + 110 / 3 

if(Dolphins > Koalas){
    console.log(`The Dolphins is winner [Score: ${Dolphins}]`)
}else if (Koalas > Dolphins){
    console.log(`Koalas is winner [Score: ${Koalas}]`)
}else{
    console.log(`The Match draw Dolphins [Score: ${Dolphins}] and Koalas [Score: ${Koalas}]`)
}