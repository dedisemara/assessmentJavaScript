const readlineSync = require('readline-sync');

const inputList1 = readlineSync.question('Enter list1 : ');
const inputList2 = readlineSync.question('Enter list2 : ');

const dataArray1 = inputList1.split(' ');
const dataArray2 = inputList2.split(' ');

// console.log(dataArray1);
// console.log(dataArray2);


// for (let i = 0; i < dataArray1.length; i++){
//     const data1 = dataArray1[i];
//     const data2 = dataArray2[i];
//     if(data1 === data2){
//         console.log('True')
//     }
// };

// for (let n = 0; n < dataArray2.length; n++){
//     const data2 = dataArray2[n];
//     console.log(data2);
// };
const resultArray = [];
// function arra
function equal(arr1, arr2){
    if(arr1 === arr2){
        resultArray.push('true');
    }else{
        resultArray.push('false');
    }
};
if(dataArray1.length < dataArray2.length){
    for (let i = 0; i < dataArray2.length; i++){
    const data1 = dataArray1[i];
    const data2 = dataArray2[i];
    equal(data1, data2)
    }
}else{
    for (let i = 0; i < dataArray1.length; i++){
    const data1 = dataArray1[i];
    const data2 = dataArray2[i];
    equal(data1, data2)
    }
}
// console.log(resultArray);
if (resultArray.includes('false')){
    console.log('Two lists are not strictly identical');
}else{
    console.log('Two lists are strictly identical');
}
