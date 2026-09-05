const user = {
    username : "Viraj",
    price : 999,

    welcomeMessage : function() {
        // console.log(`${user.username}, welcome to website`);
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        // l
    }
    // this => is used for referring the current context i.e for access the vairbles inside the object's scope 
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) // will return null but when u run the same code in browser the global object is windows which is returned and not null

// function js(){
//     let username = "Viraj"
//     console.log(username);
//     console.log(this.username); // will return undefined,, only works for objects
//     console.log(this)
// }
// js();


// // Syntax for arrow fn 
// const chai = () => {
//     let name = "Viraj";
//     console.log(this);
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2, 3))

// Impicit way to do so:
// const addTwo =  (num1,  num2) => (num1 + num2)
const addTwo =  (num1,  num2) => ({username : "Viraj"})
// Need to mention return when curl braces are used
console.log(addTwo(2, 3))

