const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, curr) {
//     console.log(`acc: ${acc}  curr: ${curr}`)
//     return acc + curr;
// }, 0)

// using arrow functions
const myTotal = myNums.reduce( (acc, curr) => {
    // console.log(`acc : ${acc} & curr : ${curr}`)
    return acc + curr
}, 0)

// console.log(`My Grand Total is ${myTotal}`)

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "Mobile development",
        price : 6999
    },
    {
        itemName : "Data Science",
        price : 12999
    }
]

const totalAmount = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(`Total AMOUNT: ${totalAmount}`)

// For == operator, JS converts null to undefined that's why null == 0 is false
// For relational operators (>,<,>=,<=) , JS converts null to number and Number(null) is 0. That's why null >0 is false and null >= 0 is true