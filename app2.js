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



const gridDisplay = document.querySelector("#grid")

function createBoard() {
    for (let i = 0; i< 10; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        console.log(card, i)
    }
}

createBoard()