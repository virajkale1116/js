const name = "Viraj"
const repoCount = 50

console.log(name + repoCount + " Value"); // dont prefer this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('fcmobile')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4) // result doesnt include the last index
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);


const newstringone = ' Viraj    '
console.log(newstringone)
console.log(newstringone.trim())

const url = "hhtps://viraj.com/viraj%20kale"
console.log(url.replace('%20', '-'));
console.log(url.includes('viraj'))
console.log(url.includes('hitesh'))

console.log(gameName.split(''));


const str = "apple#banana#mango";
const fruits = str.split("#");
console.log(fruits[2]);

const Myurl = "https://chat.openai.com";
const parts = Myurl.split(".");
console.log(parts);
