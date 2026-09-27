// for of 
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Hello World!"
// for(const greet of greetings){
//     // if(greet == " "){
//     //     continue
//     // }
//     console.log(greet)
// }


// Maps
const map = new Map()
map.set('IN', "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set('IN', "India")

// map only takes in unique values , so india wont be stored twice
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.4

// console.log(map)

for(const [key, value] of map){
    // console.log(key, ":-", value)
    // console.log(`${key} :- ${value}`)
    // this we use for destructuring i.e for having key and value seperately otherwise instead of [key, value] we could have just written key and it would have given us key and value both but as a single unit inside an array
}

// const myObject = {
//     "game1" : "NFS",
//     "game2" : "Spiderman"
// }"" -> doesnt matter 

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

// for(const [key, value] of myObject){
//     console.log(`${key} :- ${value}`)
// }

// for...of works on iterables like arrays, strings, and Maps. Plain objects are not iterable by default, so using for...of directly on myObject throws a TypeError.

// Execution using for-in loop :
// for(const key in myObject){
//     // console.log(myObject[key])
//     console.log(`${key} :- ${myObject[key]}`)
// }

// To iterate over object properties, use for...in or Object.entries() with for...of