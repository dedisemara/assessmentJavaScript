const readlineSync = require('readline-sync');

const dataFirstNumber = +readlineSync.question('Enter first number: ');
const dataSecondNumber = +readlineSync.question('Enter second number: ');

const result = dataFirstNumber + dataSecondNumber;
const inputUserData = +readlineSync.question(`${dataFirstNumber} + ${dataSecondNumber}? `)

const booleanValue = result === inputUserData

console.log(`${dataFirstNumber} + ${dataSecondNumber}? is ` + booleanValue);