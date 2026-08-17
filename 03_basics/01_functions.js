function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // Dont need to give type in js
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = addTwoNumbers(4,5);
// console.log("Result:",result)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged inn!`;
}
// console.log(loginUserMessage("Viraj"))
// console.log(loginUserMessage())
// console.log(loginUserMessage(5))

function calculateCartPrice(value1, value2, ...num1){
    return num1
}
// ...  => acts as rest or spread operator according to the need and condition
// console.log(calculateCartPrice(200, 400, 450, 900));

const user = {
    name : "Viraj",
    price : 990
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    name : "RK",
    price : 340
})

const myNewArray = [200, 300, 100, 500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log("The second element of the array is",returnSecondValue(myNewArray))
// console.log(returnSecondValue([12,13,141,51]))