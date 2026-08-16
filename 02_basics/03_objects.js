// Singleton
// Object.create

// Onject literals 

const mySym = Symbol("Key1")

const JsUser = {
    name: "Viraj", // Js considers name as a string value
    "Full Name" : "Viraj Rahul Kale",
    [mySym] : 134, // have to use [] for referring a sybol otheriwise its treated as a normal key variable
    age : 18, 
    location: "Pune",
    email : "viraj@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.age) // use dis method when key is not written in string 
console.log(JsUser["Full Name"]); // use when key is already initialized in string only 
console.log(JsUser["isLoggedIn"])
console.log(typeof mySym);
console.log(JsUser[mySym]);

JsUser.email = "vk@yahoo.com"
// Object.freeze(JsUser) //After applying no more changes are applicable
JsUser.email = "vk@ms.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
