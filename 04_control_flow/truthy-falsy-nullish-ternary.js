// const userEmail = "viraj.ai"
// if(userEmail){
//     console.log("Got the user email")
// }else{
//     console.log("Dont have user email")
// }

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}


// // How to check whether the array is empty or not?
// const myArray = []
// if(myArray.length === 0){
//     console.log("Array is empty")
// }


// // How to check whether the Object is empty or not?
// const Obj = {}
// if(Object.keys(Obj).length === 0){
//     console.log("Object is empty")
// }

// // Comparing falsy values
// if(false == 0){
//     console.log("true")
// }

// if("" == 0){
//     console.log("true")
// }

// if(false == ""){
//     console.log("true")
// }


// ********************************************************
// Nullish Coalescing Operator (??): Avoids => {null && undefined}

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 12 ?? 20

// console.log(val1);


// Eg 2
function getUsername() {
    return null;
}

let username = getUsername() ?? "Guest";
// console.log(username);


// Ternary Operator
// condition ? true : false
// Basically a shorter version of if-else statements
const iceTeaPrice = 110
iceTeaPrice <= 80 ? console.log("More than 80") : console.log("Less than 80")

