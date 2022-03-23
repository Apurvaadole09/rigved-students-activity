let read = require("readline-sync");
let name = read.question("Enter your Name: ");
let age = read.question("Enter your Age: ");
console.log(`Hello ${name} your age is ${age}`);

let num1 = read.questionInt("Enter a Number: ");
let num2 = read.questionInt("Enter another Number: ");
let result = num1+num2 ; 
console.log(`Result: ${result}`);