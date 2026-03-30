const readlineSync = require('readline-sync');

const enterSecondsValue = +readlineSync.question('Enter second: ');
const valueMunites = enterSecondsValue/60;
let resultMinutes = Math.floor(valueMunites);
let resultSecond = enterSecondsValue%60

console.log(`${enterSecondsValue} seconds is ${resultMinutes} minutes and ${resultSecond} seconds`);