const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (element) => {
    // console.log(element)
});
// For-each loop doesnt return anything 
// console.log(values)


/*
INTERVIEW NOTES: forEach()

1. What is forEach()?
- forEach() is an array method that executes a callback
  function once for each element of the array.
- Automatically passes the current element to the callback.
- Does not require manually managing the index or loop condition.

2. What arguments does the callback receive?
- value: Current element
- index: Current element's index
- array: Original array

Example:
arr.forEach((value, index, array) => {
    console.log(value, index);
});

3. Can forEach() return a new array?
- No. forEach() always returns undefined.
- Any value returned from its callback is ignored.
- Use map() if you want to transform elements and
  obtain a new array.

4. Why is forEach() used?
- Mainly for performing actions (side effects) on each element.
- Examples: logging, updating the DOM, calling functions.

5. Can we use break or continue inside forEach()?
- No. break and continue cannot be used to control
  a forEach() loop.
- Use for...of or a regular for loop if you need
  to stop or skip iterations.

6. Can we use return inside a forEach() callback?
- Yes, but it only exits the current callback invocation.
- It does NOT stop the entire forEach() loop.
- Its returned value is ignored by forEach().

7. Difference between forEach(), map(), and filter():
- forEach(): Performs an action; returns undefined.
- map(): Transforms every element; returns a new array.
- filter(): Selects elements matching a condition;
  returns a new array.

8. Can forEach() be used on a plain object?
- Not directly. forEach() is an Array method.
- Object.entries(obj).forEach() can be used to
  iterate over an object's key-value pairs.

9. Does forEach() modify the original array?
- Not automatically.
- It can modify the original array if the callback
  explicitly changes its elements or mutates objects
  contained in it.

INTERVIEW ONE-LINER:
forEach() executes a callback for each array element
and is mainly used for side effects. It returns
undefined and is not suitable when a new array
or early termination is required.
*/


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4;
// } )

// {} -> when we use curly braces i.e scope we have to explicitly return as compared to the normal case of parethesis wherin it is implicitly returned 

// Scenario: returning using for each 

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
} )

// console.log(newNums)


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2015 },
  { title: 'Book Nine', genre: 'Fiction', publish: 2005, edition: 2018 }
];

let userBooks  = books.filter( (bk) => bk.genre === "History" )
userBooks = books.filter( (bk) => { // Overwritting userbooks sorted by genre
    return bk.publish >= 2000 
} )

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
} )

console.log(userBooks)