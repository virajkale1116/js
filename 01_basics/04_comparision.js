console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);   // No strict check 
console.log("02" > 1);  // Js auto internally converts into number


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0); // it considers null 0 only when = is used with < or >

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0); //unlike null UD always returns false

// ===  -> applies strict check where it doesnt convert datatypes for giving output
console.log("2" === 1);







