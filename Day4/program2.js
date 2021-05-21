"use strict";
// 2. Write a Javascript Program to find the first 50 prime numbers

let count = 0;
for (let counter = 2; counter <= 300; counter++) {
  let notPrime = false;

  for (let i = 2; i <= Math.sqrt(counter); i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(counter);
    count++;
  }
  if (count === 50) break;
}
