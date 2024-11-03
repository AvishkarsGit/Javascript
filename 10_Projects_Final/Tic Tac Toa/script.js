let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset')
let winMsg = document.querySelector('.winner');
let turnX = true;

let count = 0;

// winnig pattern
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
        box.addEventListener('click',()=>{
            if (turnX === true) {
                box.innerText = `X`;
                box.style.color = 'blue'
                turnX = false;
            }
            else {
                box.innerText = 'O';
                box.style.color = 'orange'
                turnX = true;
            }
            box.disabled = true;
            count++;
            
            let isWinner = checkWinner();
            
            if (count === 9 && !isWinner) {
                gameDraw();
            }
        })

})


resetBtn.addEventListener('click',()=>{
    boxes.forEach((box)=> {
        box.disabled = false; 
        box.innerText = '';
        turnX = true;
        boxes.forEach((box)=>{
            box.style.backgroundColor = 'aliceblue';
        })
        winMsg.style.visibility = 'hidden';
        count = 0;
    })
})


//check winner
function checkWinner() {
    for(let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1!="" && pos2!="" && pos3!=""){
            if (pos1 ===  pos2 && pos2 === pos3) {
                showWinner(pos1,pattern);
                return true;
            }
        }
    }
}

function gameDraw() {
    winMsg.style.visibility = 'visible';
    winMsg.innerText = `Game is Drawn`;
}

function showWinner(winner,pattern) {
    boxes[pattern[0]].style.backgroundColor = 'green';
    boxes[pattern[1]].style.backgroundColor = 'green';
    boxes[pattern[2]].style.backgroundColor = 'green';

    winMsg.style.visibility = 'visible';
    winMsg.innerText = `Winner '${winner}'`;
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}
