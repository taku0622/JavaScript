let ok = false;
let maybeOk = true;
// if (ok) {
//   console.log("OK!");
// } else if (maybeOk) {
//   console.log("maybe OK...");
// } else {
//   console.log("NO!");
// }

// const coffee1 = { name: "black", size: "small" };
// const coffee2 = { name: "black", size: "small" };

// console.log(coffee1 === coffee2); // false
// console.log(coffee1 == coffee2); // false

// const fruits1 = ["apple", "banana"];
// const fruits2 = ["apple", "banana"];

// console.log(fruits1 === fruits2); // false
// console.log(fruits1 == fruits2); // false

// ok = '' || 'ok'; // 0
// console.log(ok); // false
// ok = true || false;
// console.log(ok); // true

const inputUser = ''
const userName = inputUser || 'sampleName';
// console.log(userName);

// function vegetableColor(vegetable) {
//   let color = "";
//   switch (vegetable) {
//     case 'tomato':
//       color = 'red';
//       break;
//     case 'carrot':
//     case 'pumpkin':
//       color = 'orange';
//       break;
//     case 'onion':
//       color = 'white';
//       break;
//     default:
//       color = 'not found';
//       break;
//   }
//   console.log(`${vegetable} is ${color}`);
// }
// if (vegetable === "tomato") {
//   console.log('tomato is red.');
// } else if (vegetable === "pumpkin") {
//   console.log('pumpkin is orange.');
// } else if (vegetable === "onion") {
//   console.log('onion is white.');
// }

// vegetableColor('carrot');

let count = 0;
while (count < 10) {
  console.log("while: " + count);
  count++;
}

do {
  console.log("do-while: " + count);
  count++;
} while (count < 10);