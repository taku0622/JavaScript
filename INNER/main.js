// 'use strict'
// grape = "grape";
// console.log(grape); // Uncaught ReferenceError: grape is not defined

const coffee = {
  name: 'Caffe Latte'
};
const coffee2 = coffee;     // アドレス値の代入
coffee2.name = 'Espresso';
console.log(coffee.name);   // Espresso
