const readlineSync = require('readline-sync');
const dataList1 = readlineSync.question('Enter list1: ');
const dataList2 = readlineSync.question('Enter list2: ');

// console.log(dataList1.split(' '));
// console.log(dataList2.split(' '));
const dami1 = dataList1.split(' ');
const dami2 = dataList2.split(' ');

// dami
// const dami1 = [ '5', '1', '5', '16', '61', '111' ];
// const dami2 = [ '4', '2', '4', '5', '6' ];

const globalData = [];
for(const data1 of dami1){
    globalData.push(+data1);
}
for(const data2 of dami2){
    globalData.push(+data2);
}

// maximum value
let maxValue = globalData[0];
for(let i = 1; i < globalData.length; i++){
    const value = globalData[i];
    if (value > maxValue){
        maxValue = value;
    }
};
// minimum value
let minValue = globalData[0];
for(let i = 1; i < globalData.length; i++){
    const value = globalData[i];
    if (value < minValue){
        minValue = value;
    }
};
console.log(`min value ${minValue}, max value ${maxValue}`);

// another trying [false]

for (let i = 0; i < globalData.length; i++) {
  for (let j = 0; j < globalData.length - 1; j++) {
    if (globalData[j] > globalData[j + 1]) {
      // swap
      let temp = globalData[j];
      globalData[j] = globalData[j + 1];
      globalData[j + 1] = temp;
    }
  }
}

console.log(globalData);
