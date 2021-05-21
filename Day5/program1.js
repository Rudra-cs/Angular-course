// 1. Write a function in arrow function format to check whether a number is perfect or not. A
// perfect number is a positive integer that is equal to the sum of its all proper positive divisors
// except the number itself. 6 is perfect number as 1+ 2+3 = 6, 28 is another perfect
// number as 1+2+4+7+14=28

const check = (n) => {
  // To store sum of divisors
  let sum = 1;

  // Find all divisors and add them
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      if (i * i != n) sum = sum + i + n / i;
      else sum = sum + i;
    }
  }
  // If sum of divisors is equal to
  // n, then n is a perfect number
  if (sum == n && n != 1) return `${n} is a Perfect no `;

  return `${n} is not a Perfect no `;
};

console.log(check(6));
console.log(check(8));
console.log(check(28));
console.log(check(56));
