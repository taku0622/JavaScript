let createCounter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};
let counter = createCounter();
counter(); // 1
counter(); // 2
