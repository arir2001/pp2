const squares = document.querySelectorAll('.square')

const mole = document.querySelector('.mole')

const timeleft = document.querySelector('#time-left')

const score = document.querySelector('#score')


let result  = 0

function randomsquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    } )

    let randomsquare= squares[Math.floor(Math.random() * 9)]

    console.log("this is", randomsquare)

    randomsquare.classList.add('mole')
}