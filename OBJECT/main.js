const interests = 'interests';
const person = {
  name: 'John',
  age: 30,
  greeting: () => hello,
  const: 'const',                     // 予約語
  'current city': 'Tokyo',            // 文字列
  3: 3,                               // 数値
  3.1: 3.1,                           // 小数
  '-4': -4,                           // 負は文字列のみ
  [interests]: ['music', 'travel'],   // 変数
};
person.name = 'Taku'; // 値変更
person.gender = 'man' // 値追加
delete person.age;    //  property(age)削除

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

