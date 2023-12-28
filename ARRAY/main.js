let arrayLikeObj = {
  0: 'apple',
  1: 'banana',
  length: 2,
};
// arrayLikeObj.__proto__ = Array.prototype;
// console.log(typeof fruits); // Object
// console.log(typeof arrayLikeObj); // Object
// console.log(fruits instanceof Array); // true
// console.log(arrayLikeObj instanceof Array); // true
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray(arrayLikeObj)); // false

// let fruits = ['apple', 'banana'];
// fruits[3] = 'grape'
// delete fruits[3];
// fruits[10] = 'orange';
// console.log(fruits);  // (11) ['apple', 'banana', 空 × 8, 'orange']
// console.log(fruits.length); // 11
// fruits.length = 2;
// console.log(fruits.length); // 2
// console.log(fruits);  // (2) ['apple', 'banana']

// let fruits = ['apple', , 'banana', , 'grape'];
let fruits = Array.of('apple', 'banana', 'grape');
for (const fruit of fruits) { // undefinedを含める。
  // console.log(fruit); // apple \n undefined \n banana \n undefined \n grape
}
for (const key in fruits) { // undefinedを含めない。
  // console.log(fruits[key]); // apple \n banana \n grape
}

let sum = (...nums) => {
  // console.log(nums);
}
let nums = [1, 2, 3, 4, 5];
sum(nums); // [[1, 2, 3, 4, 5]] 要素1つになってしまう
sum(...nums); // (5) [1, 2, 3, 4, 5] 展開できる

const arr = ['taku', 25, 'man', ['music', 'travel']];
let [name, age] = arr;
console.log(name, age); // taku 25

let [, , gender] = arr;
console.log(gender); // man

let [, , , [, hobby2]] = arr;
console.log(hobby2); // travel

