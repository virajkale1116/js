const accountId = 1
let accountEmail = "viraj@gmail.com"
var accountPassword = "12234"
accountCity = "Pune"
let accountHolder;

// accountId = 2 Not allowed due to const

accountEmail = "v@gmail.com"
accountPassword = "211212"
accountCity = "Kolkata"

/*
Prefer not to use var because of issue in block scope 
and function scope
*/
  
console.table([accountId, accountEmail, accountPassword, accountCity, accountHolder])