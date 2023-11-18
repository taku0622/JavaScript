// function add(a, b) {
//   return a + b;
// }
// console.log(add); // オブジェクトが返ってくる
// console.log(add.name); // add
// console.log(add.length); // 2 ※引数の数
// const newAdd = add; // オブジェクトの代入
// console.log(newAdd(3, 4)); // 7

const sayHi = function hi() { // 名前付き関数
  return "hi"
}
const sayHello = function () {  // 無名関数 
  return "hello"
}

console.log(sayHi());     // hi
console.log(sayHello());  // hello