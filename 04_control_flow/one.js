// const temprature = 20
/*
code :1
===========================
if (temprature === 20){
    console.log(`temperature is equal to 20 i.e ${temprature}`);
}
else 
{
    console.log(`temperature is not equal to 20 i.e ${temprature}`);
}
console.log(`executed`);


code :2
============================
const balance = 2000
if (balance > 1000){
    console.log(`you are eligible for withdrawl amount . balance  = ${balance}`);
}
else{
    console.log(`you are not eligible for withdrawl amount . balance  = ${balance}`);
}
*/

// code :3
// ======================================



const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn && debitCard){
    console.log(' allowed to buy course');
}

if( loggedInFromEmail || loggedInFromGoogle ){
    console.log('user logged in');
}
