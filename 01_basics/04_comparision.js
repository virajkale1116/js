// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);   // No strict check 
// console.log("02" > 1);  // Js auto internally converts into number


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 12);
// console.log(null <= 0); // it considers null 0 only when = is used with < or >

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined < 0); //unlike null UD always returns false

// // ===  -> applies strict check where it doesnt convert datatypes for giving output
// console.log("2" === "2");
// console.log("2" === 2);


//*********Operations*********** 
// let value = 3
// let negvalue = -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

// let str1 = "Hello"
// let str2 = " Viraj"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2"); 
// console.log(1 + 2 + "23" + 6)
// //always better to use parethesis for reducing confusion

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2
// console.log(num1+ num2*num3)// focus on code redeability and not this 

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter)

console.log("Postfix incrementation")
let x = 3
console.log(x++); // prints cuurent x value
console.log(x); // increments x and then prints it 

console.log("Prefix incrementation")
let a = 3
const b = ++a;
console.log(a); // 4
console.log(b); // 4
// Increase x by 1.
// x becomes 4.
// Return 4.
// Put that returned value into y.