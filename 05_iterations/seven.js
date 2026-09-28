const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num + 10 )
console.log(newNums)

// Returns array of undefined and not empty array like filter as it stores all the results and not just truly ones
// const newValss = myNums.map( (num) => {num < 10} )
// console.log(newValss) 


const newValss = myNums.map( (num) => num < 10 )
console.log(newValss)


/*
INTERVIEW NOTES: map() vs filter()

1. map()
- Transforms every element and returns a new array
  of the same length.
- Use for modifying, converting, or extracting values.
- Callback's return value becomes the new element.

Example:
nums.map(num => num * 2);  // [2, 4, 6, 8, 10]


2. filter()
- Returns a new array containing elements whose
  callback result is truthy.
- Use for selecting elements based on a condition.
- Keeps original elements, not callback return values.

Example:
nums.filter(num => num > 3);  // [4, 5]


3. Callback Return Values (IMPORTANT)

- Without {}, arrow functions implicitly return
  the expression.

  num => num < 10

- With {}, explicit return is required.

  num => { return num < 10; }

- Without return, the callback returns undefined.

  num => { num < 10; }

map()    -> Stores undefined for every element.
filter() -> undefined is falsy, so rejects every element
            and returns [].

Example:
nums.map(num => num < 3);
 // [true, true, false, false, false]

nums.filter(num => num < 3);
 // [1, 2]


4. Key Differences

map():
- Transforms elements.
- Stores callback return values.
- Same length as original array.

filter():
- Selects elements.
- Keeps original elements with truthy callback results.
- Same length or shorter.

Both return new arrays and don't automatically
modify the original array.


INTERVIEW ONE-LINER:

map() transforms every element and returns a new
array of the same length.

filter() selects elements based on a condition
and returns a new array containing matching elements.

Remember:
Transformation -> map()
Selection       -> filter()
*/
