// for loop
/*
    
    syntax: 
  ===========
    for (initialization ; condition ; increment/decrement) {
        body
    }
*/

for (let index = 0 ; index <10;index++){
    const element = index
    // console.log(element)
}

//nested for loop
for (let i = 0 ;i <10;i++) {
    // console.log(`outer loop - iteration :${i+1}`);
    for(let j = 0; j<10;j++){
        // console.log(j)
    }
}

// for loop on array

let myArray = ["Avishkar", "Abhijeet", "Harry"]

for (let  i = 0;  i < myArray.length;  i++) {
    const element = myArray[i];
    // console.log(element)   
}


//for loop with break and continue keyword
//break
// for (let i = 1; i<=10; i++){
//     if (i == 5){
//         console.log(`dectect ${i}`)
//         break
//     }
//     console.log(i);
// }
//continue
for (let i = 1; i<=10; i++){
    if (i == 5){
        console.log(`dectect ${i}`)
        continue
    }
    console.log(i);
}