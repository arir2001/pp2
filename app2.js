const cardArray = [
    {
        name: 'fries',
        img: 'assets/pics/fries.jpg',
    },

    {
        name: 'pizza',
        img: 'assets/pics/pizza.jpg',
    },
    {
        name: 'paper',
        img: 'assets/pics/paper.jpg',
    },

    {
        name: 'rock',
        img: 'assets/pics/rock.jpg',
    },

    {
        name: 'nicewoman',
        img: 'assets/pics/nicewoman.jpg',
    },

    {
        name: 'wheat',
        img: 'assets/pics/wheat.jpg',
    },

    {
        name: 'fries',
        img: 'assets/pics/fries.jpg',
    },

    {
        name: 'pizza',
        img: 'assets/pics/pizza.jpg',
    },
    {
        name: 'paper',
        img: 'assets/pics/paper.jpg',
    },

    {
        name: 'rock',
        img: 'assets/pics/rock.jpg',
    },

    {
        name: 'nicewoman',
        img: 'assets/pics/nicewoman.jpg',
    },

    {
        name: 'wheat',
        img: 'assets/pics/wheat.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random()) 


let cardChosen = []
let cardChosenIds = []

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")


function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/pics/oldguy.jpg')
        card.setAttribute('data-id', i)

        card.addEventListener('click', flipCard)

        gridDisplay.appendChild(card)
    }
}

createBoard()

//gaathering all the image tags into a const
//pushing the image ids into 

i = 0
function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    
    if (cardChosenIds[1] == cardChosenIds[0]){
        alert("You chose the same image twice")

        cards[cardChosenIds[0]].setAttribute('src', 'assets/pics/oldguy.jpg')
        console.log[cardChosenIds[1]]


    } else if (cardChosen[1] == cardChosen[0] ){

        if (cardChosenIds[1] != cardChosenIds[0]){

        console.log(cardChosenIds[0], cardChosenIds[1])
        alert('You found a match')

        cards[cardChosenIds[0]].setAttribute('src', 'assets/pics/smiley.png')
        cards[cardChosenIds[1]].setAttribute('src', 'assets/pics/smiley.png')

        i ++ 

        console.log(i)
        console.log(cards.length/2)

        if (i == cards.length/2){
            console.log()
            resultDisplay.textContent = 'Congrats you won!'
        }

    }} else {
        cards[cardChosenIds[0]].setAttribute('src', 'assets/pics/oldguy.jpg')
        cards[cardChosenIds[1]].setAttribute('src', 'assets/pics/oldguy.jpg')  
    }



    cardChosen = []
    cardChosenIds = []

}

//finding out the way the aarray has been randomly sorted
// "this" keyword allows whatever item we clicked to be noted
// we get the data id of the chosen card
//then we find the caard's place in the shuffled aarray
//placing the chosen cards into the cardchosen array
// set the new source of the image to now be the image of the id in the aarray.

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    
    this.setAttribute('src', cardArray[cardId].img)

    if (cardChosen.length == 2){
        setTimeout( checkMatch, 900)
    }
}





