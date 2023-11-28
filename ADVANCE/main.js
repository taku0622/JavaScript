// // let createCounter = () => {
// //   let count = 0;
// //   return () => {
// //     count++;
// //     console.log(count);
// //   };
// // };
// // let counter = createCounter();
// // counter(); // 1
// // counter(); // 2

// let genetatePerson = (name) => {
//   let age = 0;
//   return {
//     getName: () => name,
//     getAge: () => age,
//     incrementAge: () => {
//       age++;
//     },
//   };
// };
// const jiro = genetatePerson('Jiro');
// console.log(jiro.getAge()); // 0
// jiro.incrementAge();
// jiro.incrementAge();
// console.log(jiro.getAge()); // 2
// console.log(jiro.getName());// Jiro

// const tom = genetatePerson('Tom');
// tom.incrementAge();
// tom.incrementAge();
// tom.incrementAge();
// console.log(tom.getAge());  // 3

// let factorial = (n) => {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(3)); // 6
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1

// // 省略
// let factorial2 = (n) => n === 0 ? 1 : n * factorial2(n - 1);


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
let list = [];
list.push(...array1);
console.log(list);

list.push(...array2);
console.log(list);