// let createCounter = () => {
//   let count = 0;
//   return () => {
//     count++;
//     console.log(count);
//   };
// };
// let counter = createCounter();
// counter(); // 1
// counter(); // 2

let genetatePerson = (name) => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age,
    incrementAge: () => {
      age++;
    },
  };
};

const jiro = genetatePerson('Jiro');
console.log(jiro.getAge()); // 0
jiro.incrementAge();
jiro.incrementAge();
console.log(jiro.getAge()); // 2
console.log(jiro.getName());// Jiro

const tom = genetatePerson('Tom');
tom.incrementAge();
tom.incrementAge();
tom.incrementAge();
console.log(tom.getAge());  // 3
