// shoping cart function
function calculateCartPrice(...num1){  // ... -> rest operator and spread operator
    return num1
}
// console.log(calculateCartPrice(2,3,5,7,4))  


const user = {
    username: 'avishkar',
    price:100
}

function handleObject(anyobject){
    console.log(` username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject({
     username: 'sam',
     price:200
})

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray
}

console.log(myNewArray[1])

