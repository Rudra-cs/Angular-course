"use strict";
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
