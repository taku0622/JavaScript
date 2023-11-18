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

const person = {
  name: "Taro",
  sayHi: function () {  // メソッド
    return "Hi"
  },
};
console.log(person.sayHi());  // Hi