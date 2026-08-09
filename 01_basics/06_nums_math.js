// const score = 400
// console.log(score);
// console.log(typeof score);
 
const balance = new Number(200)
console.log(balance);
console.log(typeof(balance));

console.log("")

// console.log(balance.toExponential());
console.log(typeof balance.toString())
console.log(typeof balance);

console.log("")

// balance = balance.toString();
// console.log(typeof balance); -- cant be done as the keyword used is const 

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(7));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString()); // US Standard

// console.log(Math); // Object
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(5.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));

// Trick
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + 10);


