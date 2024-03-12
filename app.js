
const ComputerChoiceDisplay = document.getElementById('computer-choice')

const UserChoiceDisplay = document.getElementById('your-choice')

const result = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let resulting

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => 
{   userChoice = e.target.id
    UserChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()

    generateResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1

    if (randomNumber ===1){
        computerChoice = 'rock'
    }

    if (randomNumber ===2){
        computerChoice = 'scissors'
    }

    if (randomNumber ===3){
        computerChoice = 'paper'
    }
    ComputerChoiceDisplay.innerHTML = computerChoice
}

function generateResult() {
    if (computerChoice == userChoice){
        resulting = 'draw!'
    }

    if(computerChoice == 'paper' && userChoice == 'rock'){
        resulting = 'Computer wins!'
    }


    if(computerChoice == 'scissors' && userChoice == 'paper') {
        resulting = 'Computer wins!'
    }


    if(computerChoice == 'rock' && userChoice == 'scissors'){
        resulting = 'Computer wins!'
    }

    if(userChoice == 'paper' && computerChoice == 'rock'){
        resulting = 'You win!'
    }


    if(userChoice == 'scissors' && computerChoice == 'paper') {
        resulting = 'You win!'
    }


    if(userChoice == 'rock' && computerChoice == 'scissors'){
        resulting = 'You win!'
    }

    result.innerHTML = resulting
}
