"use strict";

// 1. Write a Javascript program using conditional operator to find the biggest of 3 numbers
const a = 10;
const b = 50;
const c = 20;

let largest = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log("The largest of them is " + largest);
