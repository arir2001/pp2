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


const cardChosen = []
const gridDisplay = document.querySelector("#grid")

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/pics/oldguy.jpg')
        card.setAttribute('data-id', i)

        card.addEventListener('click', flipCard)

        console.log(card, i)

        gridDisplay.appendChild(card)
    }
}

createBoard()

function flipCard() {
    //finding out the way the aarray has been randomly sorted
    console.log(cardArray)
    // "this" keyword allows whatever item we clicked to be noted
    // we get the data id of the chosen card
    const cardId = this.getAttribute('data-id')
    //then we find the caard's place in the shuffled aarray
    console.log(cardArray[cardId].name)
    //placing the chosen cards into the cardchosen rray
    cardChosen.push(cardArray[cardId].name)
}




