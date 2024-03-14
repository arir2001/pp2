const squares = document.querySelectorAll('.square');

const mole = document.querySelector('.mole');

let timeleft = document.querySelector('#time-left');

let time = 60;

const endtime = 60;

const score = document.querySelector('#score');


let result  = 0;

function randomsquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    } )

    let randomsquare= squares[Math.floor(Math.random() * 9)];

    randomsquare.classList.add('mole');
}


function moveMole(event){
    event.stopPropagation();

    let timerId = null;

    timerId = setInterval(randomsquare, 300);
}

const mybutton =  document.querySelector("#mybigbutton")

mybutton.addEventListener('click' , moveMole() )