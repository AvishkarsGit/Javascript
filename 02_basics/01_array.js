//array
const myArray = [0,1,2,3,4,5]

for(let i =0 ;i<myArray.length;i++){
    console.log(myArray[i])
}

myArray.push(10)
console.log(myArray);

myArray.pop()
console.log(myArray);

//check includes
console.log(myArray.includes(91));

//reverse operation
console.log(myArray.reverse())

const newArray = [4,6,36,26,8,32,78,23,64,78,11]
console.log('initial array:',newArray)

//sort operation
const sortArray = newArray.sort();
console.log('sorted array:',sortArray);

//slice operation
const arr1 = newArray.slice(1,5);
console.log(arr1);

console.log('original array: ',newArray);


//splice operation
const arr2 = newArray.splice(1,5);
console.log('original array now :',newArray);
console.log(arr2);