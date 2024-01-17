

const start = document.querySelector('#start');
const stop = document.querySelector('#stop')

function randomColorGenerator(){
    const hex = '0123456789ABCDEF';
    let color ='#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId
let change = function colorChanger(){
    document.body.style.backgroundColor = randomColorGenerator()   
}
start.addEventListener('click',()=>{
    if(!intervalId){
        intervalId = setInterval(change,1000)
    }
})

stop.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = null
})
