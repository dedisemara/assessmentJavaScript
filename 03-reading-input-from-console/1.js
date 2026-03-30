const readlineSync = require('readline-sync');

const valueNumber1 = +readlineSync.question('Enter first number: ');
const valueNumber2 = +readlineSync.question('Enter second number: ');
const valueNumber3 = +readlineSync.question('Enter third number: ');
let averageValue = (valueNumber1 + valueNumber2 + valueNumber3)/3

console.log(`\nThe average of ${valueNumber1}, ${valueNumber2}, ${valueNumber3} is ${averageValue}`);