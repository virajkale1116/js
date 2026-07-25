// 1. Primitive Datatypes:
// (7) types: String, Number, null, undefined, bigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null // typeof null => object 
let userEmail = undefined //Undefined also u can assgin it as undefined 

console.log(typeof score) // number
console.log(typeof scoreValue) // number
console.log(typeof isLoggedIn) // boolean
console.log(typeof outsideTemp) // object
console.log(typeof userEmail) // undefined


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)

console.log(typeof anotherId) // symbol
console.log(id == anotherId)

const bigNumber = 2342334476563547n
console.log(typeof bigNumber) // bigint
console.log(bigNumber)

//***********XXXXXXXXXXXXXXX************

//2. Reference (Non Primitive)
// Array, Objects, Functions

const heroes = ["Spiderman", "Batman", "Hulk", "Panther"]
console.log(heroes) 
console.log(typeof heroes) // object

let myObj = {
    name: "Viraj",
    age: 20
}
console.log(myObj) 
console.log(typeof myObj) // object


const myFunc = function(){
    console.log("Hello world!");
    
}
console.log(typeof myFunc) // function

