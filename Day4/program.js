"use strict";

// 1. Write a Javascript program using conditional operator to find the biggest of 3 numbers
const a = 10;
const b = 50;
const c = 20;

let big = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log("The largest of them is " + big);

// 2. Write a Javascript Program to find the first 50 prime numbers

for (let counter = 1; counter <= 50; counter++) {
  let notPrime = false;
  for (let i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(counter);
  }
}

// 3. Write a Javascript program to find the sign of the product of 3 numbers

const x = -10;
const y = -50;
const z = 20;

let sum = x + y + z;
if (sum > 0 || sum === 0) {
  console.log("The sign is +ve");
} else console.log("The sign is -ve");

/* 4. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of
three print "HTML" instead of the number and for the multiples of five print "CSS". For
numbers which are multiples of both three and five print "JAVASCRIPT" */

let j;
for (j = 1; j <= 100; j++) {
  // number divisible by 3 and 5 will
  // always be divisible by 15, print "JAVASCRIPT"
  if (j % 15 == 0) console.log("JAVASCRIPT");
  // number divisible by 3? print 'HTML'
  // in place of the number
  else if (j % 3 == 0) console.log("HTML");
  // number divisible by 5, print 'CSS'
  // in place of the number
  else if (j % 5 == 0) console.log("CSS");
  // print the number
  else console.log(j);
}
