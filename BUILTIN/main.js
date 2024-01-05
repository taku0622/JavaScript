let count = 1.23456;
let result = count.toFixed(2); // 小数点3桁を四捨五入
console.log(result); // 1.23

let hello = 'hello';
result = hello.toUpperCase(); // 大文字に変換
console.log(result); // HELLO



result = (10).toString(2); // 文字列に変換(2進数)
console.log(result); // 1010

result = Number.parseInt('1010', 2); // 数値変換(2進数→10進数)
console.log(result); // 10