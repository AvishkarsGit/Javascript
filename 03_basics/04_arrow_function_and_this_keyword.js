/*
    note: - 
    this: - 
        - this keyword refers current context of scope.
        - this keyword only works with the object. not a function.

 */

const user = {
    username :'avishkar',
    price: 999,

    welcomeMsg: function(){
       console.log(`${this.username}, welcome to website`);
       console.log(this)
    }
}

// user.welcomeMsg()
// user.username = 'sam'
// user.welcomeMsg()

// console.log(this);


// function one(){
//     let username = 'avishkar'
//     console.log(this.username);
// }

// one()

// *********** arrow function ******************
// const chai  = () => {
//     let username  = 'avishkar'
//     console.log(this);
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2     // -> explicit return
// }

// const addTwo = (num1, num2) => num1 + num2  // implicit return
const addTwo = (num1, num2) => (num1 + num2)  // implicit return


console.log(addTwo(2,3));



