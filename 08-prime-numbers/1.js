const readlineSync = require('readline-sync');

const total = +readlineSync.question('Enter the number of prime numbers: ');
console.log(`The first ${total} prime number are`);

// prime number --> only has exactly two factors: 1 and the number itself.
let count = 0;
let number = 2; //starting primary number

while (count < total) {
    let divisorCount = 0;
    let i = 2;

    while (i < number) {
        if (number % i === 0) {
            divisorCount++;
            // console.log(`nominal devisor: ${divisorCount}`)
        }
        i++;
        // console.log(`nominal I : ${i}`)
    }

    if (divisorCount === 0) {
        console.log(number);
        count++;
    }

    number++;
    // console.log(`nominal number: ${number}`)
}