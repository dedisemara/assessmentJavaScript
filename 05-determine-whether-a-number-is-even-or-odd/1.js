const readlineSync = require('readline-sync');

const inputNumber = +readlineSync.question('Enter a number: ');
const decisionValue = inputNumber % 2

if(decisionValue === 0) {
    console.log(`${inputNumber} is even`);
}else {
    console.log(`${inputNumber} is odd`);
}
