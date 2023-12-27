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

let fruits = ['apple', 'banana'];
fruits[3] = 'grape'
delete fruits[3];
fruits[10] = 'orange';
console.log(fruits);  // (11) ['apple', 'banana', 空 × 8, 'orange']
console.log(fruits.length); // 11 
fruits.length = 2;
console.log(fruits.length); // 2 
console.log(fruits);  // (2) ['apple', 'banana']
