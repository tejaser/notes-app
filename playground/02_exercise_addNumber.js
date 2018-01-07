console.log("Exercise 02 started...");

const calc = require("./02_calc.js");

let a = 5;
let b = 6;

console.log(`The sum of number ${a} and ${b} is ${calc.addNumber(a, b)}`);
console.log(
  `The subtraction of number ${a} and ${b} is ${calc.subNumber(a, b)}`
);
console.log(
  `The multiplication of number ${a} and ${b} is ${calc.mulNumber(a, b)}`
);
console.log(`The division of number ${a} and ${b} is ${calc.divNumber(a, b)}`);
