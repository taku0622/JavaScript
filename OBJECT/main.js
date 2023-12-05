// const interests = 'interests';
// const person = {
//   name: 'John',
//   age: 30,
//   greeting: () => hello,
//   const: 'const',                     // 予約語
//   'current city': 'Tokyo',            // 文字列
//   3: 3,                               // 数値
//   3.1: 3.1,                           // 小数
//   '-4': -4,                           // 負は文字列のみ
//   [interests]: ['music', 'travel'],   // 変数
// };
// person.name = 'Taku'; // 値変更
// person.gender = 'man' // 値追加
// delete person.age;    //  property(age)削除

// propertyの省略
// const name = 'Espresso';
// const size = 350;
// const coffee = {
//   name,
//   size,
// };
// const coffee2 = {
//   ...coffee,
//   name: 'Latte',
//   nutritions: {
//     ...coffee.nutritions
//   },
// };
// coffee2.nutritions.calories = 180;
// console.log(coffee); // 値が上書きされない

// console.log(person.name);       // John
// console.log(person['name']);    // John
// console.log(person.greeting);   // hello
// console.log(person['greeting']);// hello
// console.log(person.const);      // const
// console.log(person['const']);   // const
// console.log(person['current city']); // Tokyo
// console.log(person['3']);       // 3
// console.log(person[3]);         // 3
// console.log(person[3.1]);       // 3.1
// console.log(person['3.1']);     // 3.1
// console.log(person[interests]); // ['music', 'travel']


// const o1 = { a: 1 };
// const o2 = { b: 2 };
// Object.assign(o1, o2);  // o1に結合される
// console.log(o1);        // {a: 1, b: 2}


// const newCoffee = Object.assign({}, coffee);
// console.log(newCoffee);

// const book = {
//   title: 'JavaScriptBook',
//   price: 9.99,
//   auther: {
//     first: 'Michael',
//     last: 'Jordan'
//   },
//   isbn: 1234567890,
// };
// const book = null;
// bookがnull, undefinedなら、undefined
// bookがあれば、値を返す
// console.log(book?.()); // 関数オブジェクト：undefined
// console.log(book?.['title']); // []の参照：undefined


// const car = {
//   color: 'red',
//   changeColor(color) { // キーを書かずにメソッド名から書く
//     this.color = color;
//   }
// }
// car.changeColor('white');
// console.log(car.color);

// sayThis = function (a, b) {
//   console.log(this, a, b);
// };
// sayThis = sayThis.bind({ hello: 'hello' }, 1, 2);
// sayThis();

// const pastaCalculator = {
//   servingSize: 60,
//   member: 4,
//   get total() {
//     return this.servingSize * this.member;
//   },
//   set total(newValue) {
//     this.member = newValue / this.servingSize;
//   },
// };
// pastaCalculator.total = 600;
// console.log(pastaCalculator.member); // 10

const pastaCalculator = {
  servingSize: 60,
  member: 4,
};
Object.defineProperty(pastaCalculator, 'total', {
  configurable: true,
  enumerable: true,
  get() {
    return this.servingSize * this.member;
  },
  set(newValue) {
    this.member = newValue / this.servingSize;
  },
});

// console.log(Object.getOwnPropertyDescriptor(pastaCalculator, 'servingSize'));
// {value: 60, writable: true, enumerable: true, configurable: true}
// define propertyのvalue変更
// Object.defineProperty(pastaCalculator, 'servingSize', { value: 30 });
// console.log(Object.getOwnPropertyDescriptor(pastaCalculator, 'servingSize'));
// {value: 30, writable: true, enumerable: true, configurable: true}
