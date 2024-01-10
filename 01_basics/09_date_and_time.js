
let currentDate = new Date();

console.log(currentDate.toLocaleDateString());
console.log(currentDate.toDateString());
console.log(currentDate.toJSON());
console.log(currentDate.toLocaleString())
console.log(currentDate.toLocaleTimeString())

let myDateTimestamp= Date.now();
console.log(myDateTimestamp);

//constructor

let myCreatedDate =new Date(2023,0,20);
console.log(myCreatedDate.toDateString());