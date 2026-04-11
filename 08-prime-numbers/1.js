const readlineSync = require('readline-sync');

const inputPrime = readlineSync.question('Enter the number of prime number: ');
console.log(`The first ${inputPrime} prime number are`);

let countNumber = 0;
let startPrimerNumber = 2;

while(countNumber < inputPrime) { //when count number who printed < input
    //  why i and devisorForPrime devine on the while loop. because it will restart to starting value (i = 2) && (devisorForPrime = 0)
    let i = 2; // should be same as startPrimeNumber
    let devisorForPrime = 0; //the right result devisor for prime number
    // console.log('check divisor : ' + devisorForPrime);
    // console.log('check i : ' + i);


    while(i < startPrimerNumber){ // this while do to test divisor for prime
        if(startPrimerNumber % i === 0){
            devisorForPrime++
            // console.log('divisor on the looping : ' + devisorForPrime)
        }
        i++;
        // console.log('check i on the looping: ' + i);
        
    }

    if(devisorForPrime === 0) { //this conditional make decission if this is prime number dan i === start prime number
        console.log(startPrimerNumber);
        countNumber++;
    }
    startPrimerNumber++;
    // console.log('check value : ' + startPrimerNumber);

}

