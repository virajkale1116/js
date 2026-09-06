// // if
// const isLoggedIn = true
// if(isLoggedIn){
//     console.log("You have been logged in")
// }

// const temperature = 41

// if(temperature == 41){
//     console.log("Less than 50")
// }else{
//     console.log("Temperature is greater than 50")
// }

// console.log("Executed")

// // <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if(score > 100){
//     const power = "fly"
//     // var power = "fly" // var => scope is global
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`) // will excute if the varible is var and not {let, const, etc}

const balance = 1000

// if(balance > 500) console.log("Test1 passed"), // Implicit scope
// console.log("Test2 passed") 
// never do ^ this shit though

// // if, if-else, else stataments
// let fuel = 35;

// if (fuel <= 0) {
//     console.log("Ship stopped");
// } else if (fuel < 20) {
//     console.log("Fuel is critically low");
// } else if (fuel < 50) {
//     console.log("Fuel is getting low");
// } else {
//     console.log("Fuel level is good");
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard ){
    console.log("Allow to buy course")
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in")
}