// singleton object
// const tinder = new Object();  -> singleton object

const tinder = {}

tinder.id = 1010
tinder.name = 'avishkar'
tinder.isLoggedin = false

// console.log(tinder)

const regularUser = {
    email: 'some@gmail.com',
    fullName : {
        userfullname:{
            firstname:'avishkar',
            lastname:'kumbhar'
        }
    }
}

// console.log(regularUser.fullName);

const obj1 = {
    1:'a',
    2:'b',
    3:'c'
}

const obj2 = {
    4:'d',
    5:'e'
}

//array of object


const arr = [
    {
        id : 1010,
        user: 'avishkar'
    },
    {
        id: 1011,
        user: 'abhijeet'
    }
]

console.log(arr);

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1, ...obj2}
// console.log('obj 3: ',obj3);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));

console.log(tinder.hasOwnProperty('isLoggedin'));


const course = [ 
    
]

//destructoring
for (let i = 0;i<course.length;i++){
    const { course_instructor: instructor } = course[i]
    console.log(instructor);
}

