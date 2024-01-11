
function printMyName(){
    console.log('a');
    console.log('v');
    console.log('i');
    console.log('s');
    console.log('h');
    console.log('k');
    console.log('a');
    console.log('r');
}

// printMyName()



//note : - when we write a function defination, we pass value called 'parameters'.
function addTwoNum(num1, num2){ 
    return (num1+num2)
}

//note: - when we call a function and we pass value, it's called as 'arguments'.
let addition = addTwoNum(10,20);
// console.log(addition)

// function loginUserFunction(username){
//     return `${username} just logged in...`;
// }

// let usermsg = loginUserFunction('avishkar'); 
// console.log(usermsg)

/* note: -
     if you call function with no argument,
      then it will return 'undefined' except 'null'.
*/

function loginUserFunction(username) {
    if(!username){
        console.log('please enter a username');
        }
    else {

        return `${username} just logged in...`;
    }
}

let usermsg = loginUserFunction();
console.log(usermsg)













