new Promise(function(resolve,reject){
    setTimeout(()=>{
        // console.log('Async Task')
        resolve()
    },1000)
}).then(function(){
    // console.log('Async resolved')
})

//data passing
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'me',email:'ak@example.com'})
    },1000)
})

promiseOne.then(function(user){
    // console.log(user)
})

//promise two
const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'me',password:'123'})
        }
        else{
            reject('ERROR:something went wrong');
        }
    },1000)
})  

promiseTwo.then((user)=>{
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch((error)=>{
    console.log(error)
}).finally(()=>console.log('finally executed'))

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'me',password:'123'})
        }
        else{
            reject('ERROR:something went wrong');
        }
    },1000)
});

async function consumedPromiseThree(){
   try {
     const response = await promiseThree
     console.log(response)
   } catch (error) {
        console.log(error);
   }
}

consumedPromiseThree()