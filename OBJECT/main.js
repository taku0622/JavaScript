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

// const pastaCalculator = {
//   servingSize: 60,
//   member: 4,
// };
// Object.defineProperty(pastaCalculator, 'total', {
//   configurable: true,
//   enumerable: true,
//   get() {
//     return this.servingSize * this.member;
//   },
//   set(newValue) {
//     this.member = newValue / this.servingSize;
//   },
// });
// Object.preventExtensions(pastaCalculator);
// Object.seal(pastaCalculator);
// Object.isExtensible(pastaCalculator);
// Object.isSealed(pastaCalculator);
// Object.freeze(pastaCalculator);
// Object.isFrozen(pastaCalculator);
// console.log(Object.getOwnPropertyDescriptor(pastaCalculator, 'servingSize'));
// {value: 60, writable: true, enumerable: true, configurable: true}
// define propertyのvalue変更
// Object.defineProperty(pastaCalculator, 'servingSize', { value: 30 });
// console.log(Object.getOwnPropertyDescriptor(pastaCalculator, 'servingSize'));
// {value: 30, writable: true, enumerable: true, configurable: true}

// const obj = {
//   a: 1,
//   b: 2,
//   [[Prototype]]: p1,
// }
// const p1 = {
//   c: 3,
//   [[Prototype]]: p2,
// }
// const p2 = {
//   d: 4,
//   [[Prototype]]: null,
// }
// obj.a // 1
// obj.b // 2
// obj.c // 3
// obj.d // 4
// obj.e // undefined

// const obj = Object.create({ c: 3, 1: 4 });
// obj.a = 1;
// obj.b = 2;
// console.log(Object.keys(obj)); // a b
// keys, values, entries, getOwnPropertyNames などは
// ptopertyTypeまで参照しない。

// for (const key in obj) {
//   console.log(key); // a b 1 c
// }

// const coffee = {
//   name: 'Caffe latte',
//   size: 350,
//   isHot: true,
// };
// for (const key of Object.keys(coffee)) {
//   console.log(coffee[key]);
// };

// ファクトリ関数
// const UserFactory = (name, age) => {
//   return {
//     name,
//     age,
//     greeting() { },
//   };
// };
// const user1 = UserFactory('Mike', 30);  // インスタンス
// const user2 = UserFactory('Jiro', 32);  // インスタンス
// const user3 = UserFactory('Tom', 33); // インスタンス

// コンストラクタ関数
// const UserConstructor = function (name, age) {
//   // this = Object.create(UserConstructor.protptype) 暗黙的に
//   this.name = name;
//   this.age = age;
//   // return this; 暗黙的に
// };
// UserConstructor.prototype.greeting = function () {
//   return `Hi! This is ${this.name}. I am ${this.age} years old`;
// };
// const user1 = new UserConstructor('Mike', 30);  // インスタンス
// const user2 = new UserConstructor('Jiro', 32);  // インスタンス
// const user3 = new UserConstructor('Tom', 33);  // インスタンス
// console.log(user1.greeting());  // Hi! This is Mike. I am 30 years old
// console.log(user2);
// console.log(user3);

// let o = new Object({ hi: 'hi' });

// let o = { // プロパティ「a: 1」 追加
//   a: 1,
// };
// Object.prototype.hello = 'hello'　// prototype「hello: 'hello'」追加

// console.log(o.hasOwnProperty('a')); // true
// console.log('a' in o);              // true

// console.log(o.hasOwnProperty('hello')); // false：prototypeまで確認しない：ownはprototypeまで確認しない
// console.log(Object.prototype.hasOwnProperty.call(o, 'hello')) // 上の書き換え
// console.log('hello' in o);              // true：prototypeまで確認する

// class User {
//   id = 1993321;
//   birthday = '1990/01//01';
//   #age = 0;
//   static classId = 0;
//   constructor(name, age) {
//     this.name = name;
//     this.#age = age;
//   }
//   get age() {
//     return this.#age;
//   }
// };
// const user1 = new User('Taku', 25);
// console.log(user1.age);

class Animal {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat() {
    console.log("eat from Animal");
  }
  static foo() {
    console.log("foo");
  }
}
class Bird {
  name = 'bird';
  constructor(age, name) {
    this.animal = new Animal(age);
    this.name = name;
  }
  static fly() {
    Animal.foo();
    console.log("fly");
  }
  eat() {
    this.animal.eat();
    console.log("eat from Bird");
  }
}
// const bird = new Bird(3, 'peaker');
// console.log(bird.animal.age); // 3
// bird.animal.eat(); // eat from Animal
// bird.eat(); // eat from Animal \n eat from Bird
// Bird.fly(); // foo \n fly

class Car { }
const car = new Car();
console.log(car instanceof Car); // true
class Taxi extends Car { }
const taxi = new Taxi();
console.log(taxi instanceof Car); // true
