"use strict";
// 3. Write a Javascript program to find the sign of the product of 3 numbers

const x = -10;
const y = -50;
const z = 20;

let sum = x * y * z;
if (sum > 0 || sum === 0) {
  console.log("The sign is +ve");
} else console.log("The sign is -ve");
