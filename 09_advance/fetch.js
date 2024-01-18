//fetch without using async await
fetch('https://api.github.com/users/avishkarsGit')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    // console.log(data.repos_url)
}).catch((e)=>console.log(e));  

/* fetch using async await
async function getAllData(){
    try {
        const response = await fetch('https://api.github.com/users/avishkarsGit')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

getAllData()

*/