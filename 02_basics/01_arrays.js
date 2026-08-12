// array 

// const myArr = [0,1,2,3,4,5, true, "hitesh"]
const myArr = [0,1,2,3,4,5]
// const myHeros = ["Spiderman", "Batman"];

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);
// console.log(myArr2[0]);

// Array methods

// myArr.push(6);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9)  // adds an element at the start of the array 
// myArr.shift(); // Doesnt require parameter, removes the first element 

// array question functions
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); // makes the array binary and converts into string

// console.log(newArr);
// console.log(typeof(newArr)); // string

// console.log(myArr);

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3);// Just returns the sliced value excluding 3
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // removes the spliced part from the original array 
console.log("C ", myArr);
console.log(myn2);

