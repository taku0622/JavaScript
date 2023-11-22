// console.log(add(8, 9)); // 17 ※実行可能
// function add(a, b) {
//   return a + b;
// }
// console.log(add); // オブジェクトが返ってくる
// console.log(add.name); // add
// console.log(add.length); // 2 ※引数の数
// const newAdd = add; // オブジェクトの代入
// console.log(newAdd(3, 4)); // 7

// console.log(sayHi());     //  実行できない　参照エラー
// const sayHi = function hi() {
//   return "hi"
// }
// const sayHello = function () {  // 無名関数
//   return "hello"
// }
// console.log(sayHello());  // hello

// const person = {
//   name: "Taro",
//   sayHi: function () {  // メソッド
//     return "Hi"
//   },
// };
// console.log(person.sayHi());  // Hi

// const sayHiAnonymous = function (name) { // 無名関数
//   return `Hi ${name} !`;
// }
// console.log(sayHiAnonymous('Taro'));

// const sayHiArrow = (name = 'anonymous') => `Hi ${name} !`;
// console.log(sayHiArrow());  // Hi anonymous !

let sum = (a, b, ...nums) => {
  console.log('a: ' + a);             // a: 1
  console.log('b: ' + b);             // b: 2
  console.log('...nums: ' + nums);    // ...nums: 3,4,5,6
  let total = 0;
  for (num of nums) { total += num }
  return a + b + total;               // 21
}
// console.log(sum(1, 2, 3, 4, 5, 6));

let substract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
substract(4, 3, (result) => {
  console.log(result)           // 1
});