//primitive data type

let age = 19
console.log('value=',age,'\ntype = ',typeof(age));
let name = 'avishkar'
console.log('value = ',name,'\ntype = ',typeof(name))

const id = Symbol('123')
console.log(id)
const anotherId = Symbol('123')
console.log(anotherId)

console.log(id === anotherId)

//non -primitive data type

const myArray = ['avishkar','abhijeet','android']

console.log(myArray);
let myObj = {
    name:'avishkar',
    age: 19
};

console.log(myObj)

function myFunction(a,b){
    console.log(a+b)
}


myFunction(10,20);
