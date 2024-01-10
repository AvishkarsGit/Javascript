const name = "avishkar"
const repoCount = 40

// ******* old approch *******
// console.log(name + repoCount)

// modern day approach
console.log(`my name is ${name.toUpperCase()} and my repositroy count is ${repoCount}`);

const gameName = new String('avishkar');
console.log(gameName[0]);

console.log(gameName.__proto__);   

console.log(gameName.length)

let newString = gameName.substring(0,3)
console.log(newString)

newString = '   vishal  ';
console.log(newString)
console.log(newString.trim())

const url = "https://www.udemy.com/home/my%20courses/learning/";
console.log(url)

let replacedUrl = url.replace('%20', '-');
console.log(replacedUrl);

let str = "Build Native apps for iOS & Android using Angular and the powerful features that Ionic offers along with Capacitor.Learn Nodejs (Typescript) with MongoDB from Basics to Advanced with proper & optimised coding file structure.Build Food Delivery App like Swiggy / Zomato / Uber-Eats (includes Customer App & Admin Panel in the Same App) with Ionic Angular & Capacitor, Nodejs (backend)."

let str2 = str.split('.');
for (let i = 0; i<str2.length;i++){

    console.log(`${i+1}.${str2[i]}`);
   
}