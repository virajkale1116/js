let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

// Creating date object

// let myCreatedDate = new Date(2006, 0, 11)
// let myCreatedDate = new Date(2006, 0, 11, 6, 3) // IN js month starts from 0
let myCreatedDate = new Date("01-11-2006") // MM-DD-YY
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myCreatedDate.getTime() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay);

console.log(
    newDate.toLocaleString('default', {
        weekday: "long"
    })
);
// use ctrl+space for using vs suggestion intelligence