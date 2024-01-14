// array loops

const arr =  [1,23,4,5,6,7,8,8,9]

//for of

/*Syntax:
for (const iterator of object) {
    //body
}
*/

for (const num of arr){
    // console.log(num);
}

greetings = "Hello world!";
for (const greet of greetings){
    if (greet == ' ' ){
        continue
    }
    // console.log(greet);
}

//Maps
 const map = new Map()
 map.set('IN','India');
 map.set('US','United states of america');  
 map.set('Fr','France');
//  console.log(map);


 //for of loop on map
 for (const [key,value] of map){
    console.log(key) ;
 }


 