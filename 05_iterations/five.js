const coding = ['js','ruby','java','python','c'];

//for-each loop
coding.forEach(function (item) {
    // console.log(item);
})

//for-each loop using arrow function
coding.forEach((item)=>{
    // console.log(item);
})

//parameters of for-each loop
coding.forEach((item,arr,index)=>{
    console.log(item);
    console.log(arr);
    console.log(index);
})

//function reference passing
function printData(item){
    // console.log(item);
} 
coding.forEach(printData);

