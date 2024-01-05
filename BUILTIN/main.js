let count = 1.23456;
let result = count.toFixed(2); // 小数点3桁を四捨五入
// console.log(result); // 1.23

let hello = 'hello';
result = hello.toUpperCase(); // 大文字に変換
// console.log(result); // HELLO



result = (10).toString(2); // 文字列に変換(2進数)
// console.log(result); // 1010

result = Number.parseInt('1010', 2); // 数値変換(2進数→10進数)
// console.log(result); // 10

console.log(0b10001110); // 0bは2進数を表す。142
// console.log(0o3243); // 0oは8進数を表す。1699
// console.log(0xf2f); // 0xは16進数を表す。3887
// console.log(1.3e5); // eは10を表す。1.3 * 10^5 = 130000


console.log(Number.MAX_VALUE); // 1.7976931348623157e+308