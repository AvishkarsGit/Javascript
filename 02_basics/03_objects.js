//objects

const mySym = Symbol('key');

const JsUser = {
    name:'Avishkar',
    age:19,
    [mySym] :'key1',
    location:'pune',
    email:'abc@gmail.com',
    isLoggedin: false,
    lastLoginDays: ['monday','saturday']

}
// console.log(JsUser);

//accessing objects
//1 --
console.log(JsUser.email);
//2--
console.log(JsUser["email"])

JsUser.email = 'avishkar@google.com';

// Object.freeze(JsUser); => object is freez, it can't make changes
JsUser['email'] = 'avishkar@yahoo.com';
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello js user ${this.age}`);
}

console.log(JsUser.greeting());


