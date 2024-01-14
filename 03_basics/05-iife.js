//Immedietly invoked function expression (IIFE)

/*
    sometimes, global scope variable makes problem. for avoiding that you will make iife.
    syntax: 
        -----------
        (function defination)()
 */

(function connection(){
    console.log('DB connection established');
})();


(function connection() { // named iife
    console.log('DB connection two established');
})();

( () => {
    // simple iife
    console.log(`Db connect...`);
})();


( (name) =>{
    // simple iife with parameter
    console.log(`hi , ${name}`);
})('avishkar')