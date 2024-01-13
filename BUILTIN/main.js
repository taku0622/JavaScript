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
// console.log(date); // Fri Jan 05 2024 18:14:37 GMT+0900 (日本標準時)
// console.log(date.getTime()); // 1704446145874
// console.log(date.getFullYear()); // 2024
// console.log(date.getMonth()); // 0 ※0始まり(1月)
// console.log(date.getDate()); // 5
// console.log(date.getDay()); // 5 ※0始まり(金曜日)

let apple = 'I like apples';
result = apple.slice(0, 5); // 切り取り
// console.log(result); // I lik
result = apple.trim(); // 文字列の前後に空白があった場合埋める
// console.log(result); // I like apples
result = apple.split(' '); // 引数で区切って配列を返す
// console.log(result); // ['I', 'like', 'apples']
result = apple.replace('like', 'love'); // 引数を置き換える
// console.log(result); // I love apples
result = apple.startsWith('I like'); // 引数で始まっているか
// console.log(result); // true
result = apple.endsWith('apples'); // 引数で終わっているか
// console.log(result); // true
result = apple.indexOf('apples'); // 何文字目かを返す
// console.log(result); // 7

let regexp = new RegExp('apple');



regexp = /apples\d/; // 「\d」applesの後に数字があるか
result = regexp.test('I like apples2');
console.log(result); // true

regexp = /\s/; // 「\s」半角・全角スペース・改行1つ分
result = regexp.test('I like apples2');
console.log(result); // true

regexp = /\w/; // 「\w」数字・アルファベット・アンスコのみOK
result = regexp.test('I like apples2');
console.log(result); // true

regexp = /\w/; // 「\w」数字・アルファベット・アンスコのみOK
result = regexp.test('I like apples2');
console.log(result); // true

// 上記の大文字版はそれ以外OKとなる。(NOTの意味)
// 例）「\S」半角・全角スペース・改行1つ分以外OK

regexp = /./; // 「.」改行以外のすべての文字OK
result = regexp.test('I like apples2');
console.log(result); // true

regexp = /./s;
// 「s」フラグの付与により、改行を含め、すべての文字がOKとなる
result = regexp.test('I like apples2');
console.log(result); // true

regexp = /\./; // 文字列としての「.」の場合、エスケープする(「\」をつける)
result = regexp.test('I like apples2.');
console.log(result); // true

regexp = /\\/; // 文字列としての「\」
result = regexp.test("\\");
console.log(result); // true

regexp = /^apple/; // 「^」キャレット：位置を表す。先頭
result = regexp.test("apple is red");
console.log(result); // true

regexp = /^apple$/m; // 「m」フラグで改行した際の判定になる
result = regexp.test("this is \napple\n pie");
console.log(result); // true

regexp = /a{5}/; // 「{}」文字数を表す。
result = regexp.test("aaaaa");
console.log(result); // true

regexp = /\d{3,5}/; // 「\d」が3個以上5以下
result = regexp.test("1234");
console.log(result); // true

regexp = /a+/; // 1個以上
regexp = /a?/; // 0個以上 
regexp = /a*/; // あってもなくてもよい 
result = regexp.test("aaaaa");
console.log(result); // true

regexp = /I like (apple|banana)/; // 「|」または
result = regexp.test("I like banana");
console.log(result); // true

regexp = /b[au]g/; // 「[]」aまたはu
result = regexp.test("bug");
console.log(result); // true

// [] を使用する場合、中に以下の記号は使えない。
// .*?+()|^$

regexp = /b[a-z]g/; // 辞書順のaからzまですべて使える。
result = regexp.test("big");
console.log(result); // true

regexp = /[0-9a-zA-Z_]/; // 「\w」と同じ意味
regexp = /[^0-9a-zA-Z_]/; // 先頭にキャレットをつけると「\W」と同じ意味


// serchメソッド
regexp = /[-.\w]+@([-\w]+\.)+[-\w]+/;
let mail = 'test@test.com example@example.com'
result = mail.search(regexp); // 0番目を返す
console.log(result); // 0番目を返す

// matchメソッド
regexp = /[-.\w]+@([-\w]+\.)+[-\w]+/g; // gフラグを付ける
mail = 'test@test.com example@example.com'
result = mail.match(regexp);
console.log(result); // 一致したものを配列にして返す。

// matchAllメソッド
regexp = /[-.\w]+@([-\w]+\.)+[-\w]+/g; // gフラグを付ける
mail = 'test@test.com example@example.com'
result = mail.matchAll(regexp); // イテレーターで返す。
for (const item of result) {
  console.log(item); // ['test@test.com', 'test.', index: 0, input: 'test@test.com example@example.com', groups: undefined]
}

// replaceメソッド
mail = 'test@test.com example@example.com'
result = mail.replace(/@/g, '*'); // 値を置き換える。
// result = mail.replaceAll('@', '*'); // この処理と全く同じ。
console.log(result);

// splitメソッド
mail = 'test@test.com example@example.com'
result = mail.split(/\s/); // 「/s」で区切る
console.log(result); // ['test@test.com', 'example@example.com']


// intl
result = new Intl.DateTimeFormat('ja-JP').format(new Date());
console.log(result); // 2024/1/13

result = new Intl.DateTimeFormat('en-US').format(new Date());
console.log(result); // 1/13/2024

result = new Intl.DateTimeFormat('ja-JP', {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date());
console.log(result); // 西暦2024年1月13日

result = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date());
console.log(result); // 令和6年1月13日

result = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY',
}).format(10000);
console.log(result); // ￥10,000
