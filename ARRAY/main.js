let fruits = ['apple', 'banana'];
let arrayLikeObj = {
  0: 'apple',
  1: 'banana',
  length: 2,
};
arrayLikeObj.__proto__ = Array.prototype;
console.log(typeof fruits); // Object
console.log(typeof arrayLikeObj); // Object
console.log(fruits instanceof Array); // true
console.log(arrayLikeObj instanceof Array); // true
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(arrayLikeObj)); // false
