// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Viraj"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Viraj",
            lastName: "Kale"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName)
// console.log(regularUser.fullname?.userfullname.firstName) 
// // ? => Optional Chaining i.e If the thing before ?. exists, continue. If it's null or undefined, don't throw an error — just return undefined.

const obj2 = {2 : "a", 4: "b"}
// obj1 acts as target and obj2 acts as source so better use {empty} as target 
// const obj3 = { obj1 ,  obj2}
// const obj3 = Object.assign({},obj1, obj2)
// const obj3 = Object.assign(obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "v@gmail.com"
    },
    {
        id : 4,
        email : "j@gmail.com"
    },
    {
        id : 3,
        email : "l@gmail.com"
    },
    {
        id : 2,
        email : "k@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // gives values in array so now u could even loop them 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array in array for every key value pair and every key value pair is in string format 

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // return whether the object has this value 
console.log(tinderUser.hasOwnProperty('isLogged'))
