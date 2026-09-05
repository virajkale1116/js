// Immediately Invoked Function Expressions (IIFE)
/* 2 main resons: i> When fn is attached with some database, iife helps establish connection with DB immediately.
ii> To avoid global variables from polluting the function
*/

// 1> Normal way for function execution
// function js(){
//     console.log("DB connected")
// }
// js();

// 2> IIFE | Syntax: (fn definition)(execution call)
(function js(){
    console.log("DB connected");
})();

// Should use ';' in practice while using iife as compiler has to know where to stop

(() => {
    console.log("DB connection eastablished succesfully!");
})();

// Eg: Paramter passing through iife way
((name) => {
    console.log(`Hello ${name}`);
})("Viraj")
