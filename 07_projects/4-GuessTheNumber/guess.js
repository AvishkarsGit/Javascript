let randomNumber = generateRandomNumber();

const userInput = document.querySelector('#userInput');
const submit = document.querySelector('.button');
const previousGuess = document.querySelector('#prevGuess');
const remaining = document.querySelector('#attempts');
const resultText = document.querySelector('.result');
const div = document.querySelector('.container');

let prevGuess = []
let numOfAttempts = 1;
let playGame = true;
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
})

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else {
        prevGuess.push(guess);
        if(numOfAttempts === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame();        
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess){
    userInput.value = ''
    previousGuess.innerHTML += `${guess}, `;
    numOfAttempts++;
    remaining.innerHTML = `${11-numOfAttempts}`;

}

function displayMessage(message){
    resultText.innerHTML =`${message}`;
}
 
function checkGuess(guess){
    
    if (guess < randomNumber){
        displayMessage(`Guess is too low`)
    }
    else if(guess > randomNumber) {
        displayMessage(`Guess is too large`)
    }
    else {
        displayMessage(`You win. Random number is ${randomNumber}`)
        endGame();
    }
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    const p = document.createElement('p');
    p.innerHTML = '<h2 id="newGame">New Game</h2>'
    div.appendChild(p);
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = generateRandomNumber();
        prevGuess = []
        numOfAttempts = 1
        previousGuess.innerHTML = ''
        remaining.innerHTML = `${11-numOfAttempts}`;
        userInput.removeAttribute('disabled')
        div.removeChild(h2)
        playGame = true;
    })
}

function generateRandomNumber()
{
    let random=parseInt(Math.random()*100+1);
    return random
}