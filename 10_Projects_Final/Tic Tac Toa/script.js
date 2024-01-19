let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.new-game-btn');
let result = document.querySelector('.msg');
let turnO = true


let box = []
let winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let count = 0

resetBtn.addEventListener('click',(e)=>{
    boxes.forEach((box)=>{
        box.innerHTML = '';
    })
    result.innerHTML = ''
    turnO = true
    count = 0
})

boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        count++;
        if(turnO){
            box.innerHTML = 'X';
            turnO = false
        }
        else{
            box.innerHTML = 'O';
            turnO = true
        }
        box.disabled = true
        checkWinner()

        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            gameDrawn();
        }
    })
})

function gameDrawn(){
    result.style.color = 'red'
    result.innerHTML = `Game is Drawn`; 
}
function checkWinner(){
    
   for(let pattern of winner){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1)
                return true;    
            } 
        }
    }
}

function showWinner(position){
    result.style.color = 'green'
    result.innerHTML = `WINNER  : ${position}`
    boxes.forEach((box)=>{
        box.disabled = true
    })
}
