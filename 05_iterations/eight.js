const myNum = [0,1,2,3,4,5]
let initialVal = 0
// const myTotal = myNum.reduce((acc,currentVal) =>{
//     console.log(`acc :${acc} and currentVal :${currentVal}`);
//     console.log(``);
//     return acc + currentVal
// },initialVal)

const myTotal = myNum.reduce( (acc,curr)=> acc + curr,0);
// console.log(myTotal);

const shoppingCart = [
    {
        courseName: 'web development',
        price:2000
    },
    {
        courseName: 'app development',
        price:4999
    },
    {
        courseName: 'data science',
        price:2999
    },
    {
        courseName: 'full stack development',
        price:12000
    },
]

let total = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(total);