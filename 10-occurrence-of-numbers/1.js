const readlineSync = require('readline-sync');

const inputValue = readlineSync.question('Enter the integers between 1 and 100: ');

const result = inputValue.split(" "); //change data to array
// console.log(result);
// const dami = ['2', '5', '6', '5', '4', '3', '23', '43', '2'];
const integer = {};

for (const str of result) {
    if (integer[str] === undefined){
        integer[str] = 1;
    }else{
        integer[str]++
    };
};
console.log(integer);
for (const objectKey in integer) {
  console.log(`${objectKey} occurs ${integer[objectKey]} times`);
};