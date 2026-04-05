const readlineSync = require('readline-sync');

const inputAmount = +readlineSync.question('The amount invested: ');
const inputRate = +readlineSync.question('Annual interest rate: ');
const inputYear = +readlineSync.question('Year to project: ');

let year = 1;
let amount = inputAmount;
while(year <= inputYear){
    let compound = (((inputRate/100)/12) + 1)**12
    amount = compound * amount
    console.log(`Year ${year}, Value: ${amount.toFixed(2)}`);
    year++
}