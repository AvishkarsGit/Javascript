let userScore = 0
let compScore = 0
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userPoint = document.querySelector('#user-score');
const compPoint = document.querySelector('#comp-score');



choices.forEach((choice) =>{
    choice.addEventListener('click',(e)=>{
        const choiceId = choice.getAttribute('id');
        playGame(choiceId);
    })
})

function drawGame(){
    msg.innerHTML = 'Game is Drawn'
        msg.style.backgroundColor = 'yellow'
        msg.style.color = 'black'
}

function playGame(userChoice){
    //Generate computer choice
    const compChoice = generateComputerChoice()

    if(userChoice === compChoice){
        //Draw Game
        drawGame()
    }
    else{
        let userWin = true 
        if(userChoice === 'rock'){
            //scissor, paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            userWin = compChoice === 'scissor' ? false : true
        }
        else {
            userWin = compChoice === 'rock' ? false : true
        }

        showWinner(userWin)
    }
}


function showWinner(userWin){
    if(userWin){
        userScore += 1

        userPoint.innerHTML = userScore
        msg.innerHTML = 'You Win'
        msg.style.backgroundColor = 'green'
        msg.style.color = 'white'
    }
    else{
        compScore += 1
        compPoint.innerHTML = compScore
        msg.innerHTML = 'You loos'
        msg.style.backgroundColor = 'red'
        msg.style.color = 'white'
    }
}
function generateComputerChoice(){
    const options = ["rock","paper","scissors"]
    const randomIndex = Math.floor(Math.random(options.length)*3)
    return options[randomIndex]
}
