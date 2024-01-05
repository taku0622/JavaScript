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

// console.log(0b10001110); // 0bは2進数を表す。142
// console.log(0o3243); // 0oは8進数を表す。1699
// console.log(0xf2f); // 0xは16進数を表す。3887
// console.log(1.3e5); // eは10を表す。1.3 * 10^5 = 130000


// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 安全に四則演算ができる最大値

// console.log(0.1 + 0.2); // 0.30000000000000004　※どちらも2新進

// // floor() 負の方に合わせる
// console.log(Math.floor(3.6)); // 3
// console.log(Math.floor(3.2)); // 3
// console.log(Math.floor(-3.6)); // -4
// console.log(Math.floor(-3.2)); // -4

// // trunc() 切り捨て
// console.log(Math.trunc(3.6)); // 3
// console.log(Math.trunc(3.2)); // 3
// console.log(Math.trunc(-3.6)); // -3
// console.log(Math.trunc(-3.2)); // -3

// // round() 四捨五入
// console.log(Math.round(3.2)); // 3
// console.log(Math.round(3.5)); // 4
// console.log(Math.round(-3.4)); // -3
// console.log(Math.round(-3.5)); // -3

// // random() 0 < 1までの値をランダム出力
// console.log(Math.random()); // 0.13763632157163386

// // max() 引数の中の最大値を出力
// console.log(Math.max(3, 5, 12, 8, 4, 5)); // 12

// // min() 引数の中の最大値を出力
// console.log(Math.min(3, 5, 12, 8, 4,)); // 3

let bigInt = 1234567890n;
// bigInt = BigInt(123456789); // 他の宣言方法①
// bigInt = BigInt('123456789'); // 他の宣言方法②
// console.log(typeof bigInt); // bigint

bigInt = 9007199254740991n + 9007199254740991n
// console.log(bigInt); // 18014398509481982n
// Number型のNumber.MAX_SAFE_INTEGERを超えても計算可能

let date = new Date();
console.log(date); // Fri Jan 05 2024 18:14:37 GMT+0900 (日本標準時)
console.log(date.getTime()); // 1704446145874
console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 0 ※0始まり(1月)
console.log(date.getDate()); // 5
console.log(date.getDay()); // 5 ※0始まり(金曜日)

