const readLine = require('readline-sync');
//1
let x = Number(readLine.question("Give me a number:"));
 let y = Number(readLine.question("Give me another number:"));
let sum = (`${x+y}`);
 console.log(sum);
// 2
let a = Number(readLine.question("Give me a number:"));
let b = Number(readLine.question("Give me another number:"));
let difference = (`${a-b}`);
console.log(difference);
//3
let c = Number(readLine.question("Give me a number:"));
let d = Number(readLine.question("Give me another number:"));
let product = (`${c*d}`);
console.log(product);
//4
let e = Number(readLine.question("Give me a number:"));
let f = Number(readLine.question("Give me another number:"));
let quotient = (`${e/f}`);
console.log(quotient);
//5
let g = Number(readLine.question("Give me a number:"))
;let h = Number(readLine.question("Give me another number:"));
let remainder = (`${g/h}`);
console.log(remainder);

//6
let name = (readLine.question("Enter name:"));
let last = (readLine.question("Enter last name:"));
let dad = (`greetings ${last} ${name}`);
console.log (dad);
