const user = {
    username : "Viraj",
    price : 999,

    welcomeMessage : function() {
        // console.log(`${user.username}, welcome to website`);
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
    // this => is used for referring the current context i.e for access the vairbles inside the object's scope 
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) // will return null but when u run the same code in browser the global object is windows which is returned and not null


