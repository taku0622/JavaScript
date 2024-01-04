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
// console.log(name, age); // taku 25

let [, , gender] = arr;
// console.log(gender); // man

let [, , , [, hobby2]] = arr;
// console.log(hobby2); // travel

// let items = [0, 1, 2];
// items.push(3, 4);     // 右側に増やす
// console.log(items);   // (5) [0, 1, 2, 3, 4]
// items.pop();          // 右側を1つ削除
// // console.log(items.pop()); 削除した値を返す
// console.log(items);   // (4) [0, 1, 2, 3]
// items.unshift(-1);    // 左側に増やす
// console.log(items);   // (5) [-1, 0, 1, 2, 3]
// items.shift();        // 左側を1つ削除
// // console.log(items.shift()); 削除した値を返す
// console.log(items);   // (4) [0, 1, 2, 3]


let arrayLikeObj = {
  0: 'apple',
  1: 'banana',
  length: 2,
};
const array = Array.from(arrayLikeObj);
// console.log(array);

items = [0, 1, 2, 3, 4];
let result = items.slice(2); // 2番目から最後までを切り取る。
// console.log(result); // [2, 3, 4]
result = items.slice(2, 4); // 2番目から4番目未満を切り取る。
// console.log(result); // [2, 3]

items = [0, 1, 2];
result = items.concat([3, 4, 5], 6, [7, 8, 9]);
// console.log(result);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


items = ['a', 'b', 'c'];
result = items.join();
// console.log(result); // a,b,c
result = items.join(''); // 空文字でつなげる
// console.log(result); // abc
result = items.join('-'); // ハイフンでつなげる
// console.log(result); // a-b-c

items = ['apple', 'banana', 'grape', 'banana'];
result = items.indexOf('banana'); // 最初のインデックスを返す。
// console.log(result); // 1
result = items.indexOf('banana', 2); // 2番目から最初のインデックスを返す。
// console.log(result); // 3
result = items.indexOf('peach'); // ない場合-1を返す。
// console.log(result); // -1
result = items.lastIndexOf('banana'); // 後ろから最初のインデックスを返す。
// console.log(result); // 3
result = items.includes('peach'); // ある場合true、ない場合falseを返す。
// console.log(result); // false

items = [0, 1, 2];
result = items.map((item, index, array) => { // 要素、インデックス、配列を参照できる
  return item * 10;
});
// console.log(result); // [0, 10, 20] 

items = [0, 1, [2]];
result = items.flat();
// console.log(result); // [0, 1, 2]
items = [0, 1, [2, [3, [4]]]];
result = items.flat(3); //引数に深さを入れる。デフォは1
// console.log(result); // [[0, 1, 2, 3, 4]

items = [0, 1, 2];
result = items.flatMap((item) => [item, item * 10]); // mapしてflatする
// console.log(result); // [0, 0, 1, 10, 2, 20]

items = [0, 1, 2, 3, 4, 5, 6];
result = items.filter((item) => {
  return item > 2 // trueの場合はresultへ、falseは削除
});
// console.log(result); // [3, 4, 5, 6]

items = [1, 2, 3];
result = items.reduce((previousItem, item) => { // 引数は4つ設定できる。
  return previousItem + item // 配列の和を求める。
}, 0); // itemが0番目の「1」とき、この「0」をpreviousItemとする。 
// 「0」も省略できる。
// console.log(result); // 6

items = ['apple', 'banana', 'grape', 'banana'];
result = items.find((item) => {
  return item === 'banana'; // trueの場合、ループ終了して要素を返す。なかった場合undefined
});
// console.log(result); // banana

result = items.findIndex((item) => {
  return item === 'banana'; // trueの場合、ループ終了して要素のインデックスを返す。なかった場合-1
});
// console.log(result); // 1


items = [1, 2, 3];
result = items.every((item) => {
  return item < 5 // 全要素がtrueの場合、trueを返す。
});
// console.log(result); // true
result = items.some((item) => {
  return item === 3 // 全要素のうち1つでもtrueがあれば、trueを返す。
});
// console.log(result); // true

items = ['apple', 'banana', 'grape'];
let count = 0;
result = items.forEach((item, index, array) => {
  count++; // 単純に要素を関数に入れるだけで、undefinedを返す。
});
// console.log(result); // undefined
// console.log(count);  // 3

items = ['apple', 'banana', 'grape'];
console.log(items.at(0)); // apple
console.log(items.at(-1)); // grape
//items[0]と同じ。加えて「-1」も対応。