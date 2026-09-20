// for loop
// const array = [1, 23, 45]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }


// for(let i = 1; i <= 10; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// //Break
// for(let index = 1; index <= 20; index++){
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`)
// }

// Continue
for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Skipped 5 and continued`);
        continue;
    }
    console.log(`Value of i is ${index}`)
}
