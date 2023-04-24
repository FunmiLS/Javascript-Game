const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice 
let result

//Function to run game
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

    //Display the users choice when button is clicked
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    // display computer choice and result
    generateComputerChoice()
    getResult()

}))

//Writing a function to generate the computer's choice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)+ 1
    
    // math.floor : returns closest integer value
    // math.random * length : returns a number between 0 and 2
    

    if (randomNumber == 1) {
        computerChoice = 'rock'
    }
    if (randomNumber == 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber == 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    
    // inner html returns the text content only
}

function getResult() {
    if (computerChoice === userChoice){
        result = "Draw!"
    }
    if (computerChoice === 'rock' && userChoice === "paper"){
        result = "You win!"
    }
    if (computerChoice === 'rock' && userChoice === "scissors"){
        result = "You lose!"
    }
    if (computerChoice === 'paper' && userChoice === "scissors"){
        result = "You win!"
    }
    if (computerChoice === 'paper' && userChoice === "rock"){
        result = "You lose!"
    }
    if (computerChoice === 'scissors' && userChoice === "rock"){
        result = "You win!"
    }
    if (computerChoice === 'scissors' && userChoice === "paper"){
        result = "You lose!"
    }
    resultDisplay.innerHTML = result
}
