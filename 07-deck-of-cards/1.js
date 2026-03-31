const readlineSync = require('readline-sync');

const inputCardNumber = +readlineSync.question('Enter card number: ');
const result = inputCardNumber + 1;

if (inputCardNumber < 0 || inputCardNumber > 51){
    console.log('Please input number range 0 - 51 !')
} else {
    for (let count = 1; count <= 52; count++ ){
        if (count <= 13 && count === result ) {
            switch (count){
                case 1:
                    console.log(`card number ${inputCardNumber}: Ace Spades`)
                    break;
                case 11:
                    console.log(`card number ${inputCardNumber}: Jack Spades`)
                    break; 
                case 12:
                    console.log(`card number ${inputCardNumber}: Queen Spades`)
                    break;
                case 13:
                    console.log(`card number ${inputCardNumber}: King Spades`)
                    break;
                default:
                    console.log(`card number ${inputCardNumber}: ${count} Spades`);
            }
        } else if (count <= 26 && count === result) {
            switch (count % 13){
                case 1:
                    console.log(`card number ${inputCardNumber}: Ace Hearts`)
                    break;
                case 11:
                    console.log(`card number ${inputCardNumber}: Jack Hearts`)
                    break; 
                case 12:
                    console.log(`card number ${inputCardNumber}: Queen Hearts`)
                    break;
                case 0:
                    console.log(`card number ${inputCardNumber}: King Hearts`)
                    break;
                default:
                    console.log(`card number ${inputCardNumber}: ${count} Hearts`);
            }
        }else if (count <= 39 && count === result) {
            switch (count % 13){
                case 1:
                    console.log(`card number ${inputCardNumber}: Ace Diamonds`)
                    break;
                case 11:
                    console.log(`card number ${inputCardNumber}: Jack Diamonds`)
                    break; 
                case 12:
                    console.log(`card number ${inputCardNumber}: Queen Diamonds`)
                    break;
                case 0:
                    console.log(`card number ${inputCardNumber}: King Diamonds`)
                    break;
                default:
                    console.log(`card number ${inputCardNumber}: ${count} Diamonds`);
            }
        }else if (count <= 52 && count === result) {
            switch (count % 13){
                case 1:
                    console.log(`card number ${inputCardNumber}: Ace Clubs`)
                    break;
                case 11:
                    console.log(`card number ${inputCardNumber}: Jack Clubs`)
                    break; 
                case 12:
                    console.log(`card number ${inputCardNumber}: Queen Clubs`)
                    break;
                case 0:
                    console.log(`card number ${inputCardNumber}: King Clubs`)
                    break;
                default:
                    console.log(`card number ${inputCardNumber}: ${count} Clubs`);
            }
        }
    } 
}
