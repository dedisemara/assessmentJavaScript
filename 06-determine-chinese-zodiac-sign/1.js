const readlineSync = require('readline-sync');

const inputYear = +readlineSync.question('Enter a year: ');

const restOfDeviden = inputYear % 12;

// if( restOfDeviden === 0 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Monkey`);
// }else if ( restOfDeviden === 1 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Rooster`);
// }else if ( restOfDeviden === 2 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Dog`);
// }else if ( restOfDeviden === 3 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Pig`);
// }else if ( restOfDeviden === 4 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Rat`);
// }else if ( restOfDeviden === 5 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Ox`);
// }else if ( restOfDeviden === 6 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Tiger`);
// }else if ( restOfDeviden === 7 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Rabbit`);
// }else if ( restOfDeviden === 8 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Dragon`);
// }else if ( restOfDeviden === 9 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Snake`);
// }else if ( restOfDeviden === 10 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Horse`);
// }else if ( restOfDeviden === 11 ) {
//     console.log(`The Chinese zodiac for year ${inputYear} is Sheep`);
// }

switch (restOfDeviden) {
    case 0:
        console.log(`The Chinese zodiac for year ${inputYear} is Monkey`);
        break;
    case 1:
        console.log(`The Chinese zodiac for year ${inputYear} is Rooster`);
        break;
    case 2:
        console.log(`The Chinese zodiac for year ${inputYear} is Dog`);
        break;
    case 3:
        console.log(`The Chinese zodiac for year ${inputYear} is Pig`);
        break;
    case 4:
        console.log(`The Chinese zodiac for year ${inputYear} is Rat`);
        break;
    case 5:
        console.log(`The Chinese zodiac for year ${inputYear} is Ox`);
        break;
    case 6:
        console.log(`The Chinese zodiac for year ${inputYear} is Tiger`);
        break;
    case 7:
        console.log(`The Chinese zodiac for year ${inputYear} is Rabbit`);
        break;
    case 8:
        console.log(`The Chinese zodiac for year ${inputYear} is Dragon`);
        break;
    case 9:
        console.log(`The Chinese zodiac for year ${inputYear} is Snake`);
        break;
    case 10:
        console.log(`The Chinese zodiac for year ${inputYear} is Horse`);
        break;
    case 11:
        console.log(`The Chinese zodiac for year ${inputYear} is Sheep`);
        break;
    default:
        console.log('Please input number!');
}