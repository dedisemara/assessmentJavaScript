const readlineSync = require('readline-sync');
const indexTable = readlineSync.question('Enter the number of rows and columns in the array: ');
const indexArray = indexTable.split(' ')
const row = +indexArray[0];
const col = +indexArray[1];
// console.log(col);

const arrayTable = []
for(let i = 0; i < row; i++){
    const colom = readlineSync.question('Input value: ')
    let arrDataColom = [];
    const dataColom = colom.split(' ');

    for(let n = 0; n < dataColom.length; n++){
        if (n < col){
            arrDataColom.push(dataColom[n]);
        }
    }
    arrayTable.push(arrDataColom);
}

// dami
// const arrayTable = [
//     [ '7', '8', '9', '1' ], 
//     [ '2', '3', '7.3', '100' ], 
//     [ '2', '5', '12.3', '20' ],
// ];

// check max value inside row 
const maxDimension = [];
for(let i = 0; i < arrayTable.length; i++){
    let expMax = arrayTable[i][0];
    for(let n = 1; n < arrayTable[i].length; n++){
        const vallueArray = +arrayTable[i][n];
        if (expMax < vallueArray){
            expMax = vallueArray;
        }
    }
    // console.log(`value expMax ${expMax}`);
    maxDimension.push(expMax);
}

// check overall value from maxDimension
let maxValue = +maxDimension[0];
for(let i = 1; i < maxDimension.length; i++){
    if(maxValue < maxDimension[i]){
        maxValue = maxDimension[i];
    }
}
for(let i = 0; i < arrayTable.length; i++){
    for(let n = 0; n < arrayTable[i].length; n++){
        if(+arrayTable[i][n] === maxValue){
            console.log(`The location of the largest element is ${maxValue} at (${i}, ${n})`);
        }
    }
};