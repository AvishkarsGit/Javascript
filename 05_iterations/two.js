//while loop

//syntax
/*
while( condition ){
    body
}
*/

let index  = 0
while(index <=10) {
    // console.log(index);
    index = index + 2
}

//array using while loop

let myArray = ['flash','iron-man','batman']
let arr = 0
while(arr < myArray.length){
    // console.log(myArray[arr]);
    arr = arr + 1
}

//do while
/* Syntax:
do {

}while(condition);

*/

let score = 11;
do {
    console.log(score);
    score = score + 1
}while(score <=10);