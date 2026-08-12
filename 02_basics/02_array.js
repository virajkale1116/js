// const marvel = ["thor", "Ironman", "Spiderman"]
// const dc = ["Superman", "flash", "batman"]

// marvel.push(dc); // causes array in array  
// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][1]); // return flash, accessing array element in another array 

// // Concat
// const AllHeroes =  marvel.concat(dc)
// // console.log(AllHeroes)

// // // Spread op: Better than concat as in here we can add as many arrays we want using '...'
// // const AllHeroes = [...marvel, ...dc]
// // console.log(AllHeroes)

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = another_array.flat(3) 
// console.log(real_another_array); // all elements are spread out evenly 

console.log(Array.isArray("Viraj"));
console.log(Array.from("Viraj"))
console.log(Array.from({name : "Viraj"})) // will return empty string as we have to explicitly mention whether we want key or the value to be converted into array
// ^ Interesting case for interviews 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// For array conversion from any other datatype we use 'from'=> for single value to be cconverted into array and we use 'of' => for list of values to be converted into one single array 
