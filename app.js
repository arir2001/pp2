
const ComputerChoiceDisplay = document.getElementById('computer-choice')

const UserChoiceDisplay = document.getElementById('your-choice')

const result = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => 
{
   userChoice = e.target.id
   UserChoiceDisplay.innerHTML = userChoice

   generateComputerChoice()

}))

function generate generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length +1 )

    console.log(randomNumber)
}