// const userEmail = "ak@gmail.com"

// if (userEmail) {
//     console.log('got user email');
// }
// else {
//     console.log("Don't have user email")
// }

/* 
    falsy value:
----------------------
    false, 0,-0, BigInt 0n, "", null, undefined,  NaN

    truthy value:
------------------------
    "0", 'false', " ", [], {}, function(){}
*/

// checking array
// ======================
// if(userEmail.length === 0){
//     console.log('array is empty')
// }

//checking object
// ===========================
// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0){
//     console.log('object is empty');
// }

// Nullish coalescing Operator (??): null and undefined
// -------------------------------------------------
// nullish coalescing operator is basically work on null and undefined values
// let val1
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);


// Ternary operator (?)

//condition ? true : false

const iceTea =100
iceTea >= 80 ? console.log('buy') : console.log('purchased')