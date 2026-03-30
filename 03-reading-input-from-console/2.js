const readlineSync = require('readline-sync');

const valueInMiles = +readlineSync.question('Enter miles: ');
const KILOMETERS = 1.609;

const valueMilesToKilometers = valueInMiles * KILOMETERS;

console.log(`${valueInMiles} miles is equal to ${valueMilesToKilometers} kilometers`);