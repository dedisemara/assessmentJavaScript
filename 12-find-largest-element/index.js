const readlineSync = require('readline-sync');
const indexTable = readlineSync.question('Enter the number of rows and columns in the array: ');
const indexArray = indexTable.split(' ')
const row = +indexArray[0];

const arrayTable = []
for(let i = 0; i < row; i++){
    const colom = readlineSync.question('Input value: ')
    arrayTable.push(colom.split(' '));
}
// console.log(arrayTable);

// const arrayTable = [
//     [ '7', '8', '9', '1' ], 
//     [ '2', '3', '7.3', '1' ], 
//     [ '2', '5', '12.3', '15' ],
// ];

// check max value on inside row
const maxDimension = [];
for (let i = 0; i < arrayTable.length; i++){
    const max = Math.max(...arrayTable[i]);
    maxDimension.push(+max);
};

// console.log(maxDimension);
for(let i = 0; i < arrayTable.length; i++){
    for(let n = 0; n < arrayTable[i].length; n++){
        if(+arrayTable[i][n] === Math.max(...maxDimension)){
            console.log(`row ${i} and row ${n}`);
        }
    }
};