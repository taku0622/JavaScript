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
// key一覧：['3', 'name', 'age', 'greeting', 'const', 'current city', '3.1', '-4', 'interests']
console.log(Object.keys(person));
// value一覧：[3, 'John', 30, ƒ, 'const', 'Tokyo', 3.1, -4, Array(2)]
console.log(Object.values(person));
// key&valueが配列で一覧：[[key, value],[key, value],[key, value]...]
console.log(Object.entries(person));


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

