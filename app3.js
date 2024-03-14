const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const trick = document.querySelector('.trick');
const friend = document.querySelector('.friend');

const mybutton =  document.querySelector("#mybigbutton")
const mybutton2 =  document.querySelector("#mybigbutton2")

let timeleft = document.querySelector('#time-left');

let time = 60;
const endtime = 60;
const score = document.querySelector('#score');
let result  = 0;


// choosing a random square from the array, making it blue behind. 
function randomMole(){
    
    var arr = [];

    while(arr.length < 3){
        var r = Math.floor(Math.random() * 8) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    squares.forEach(square => {
        klass = square.getAttribute("class");

        console.log('this is', klass);

        square.classList.remove('mole');
        square.classList.remove('friend');
        square.classList.remove('trick');
    } )

    let randomMole= squares[a];
    randomMole.classList.add('mole');

    let randomFriend= squares[b];
    randomFriend.classList.add('friend');

    let randomTrick= squares[c];
    randomTrick.classList.add('trick');

    console.log('this is mole' , randomMole);
    console.log('this is friend' , randomFriend);
    console.log('this is trick' , randomTrick);
}


//now start-stop function which allows the game to be started and restarted using buttons. 
//the var stop is set to null to begin with, false if start button pressed, true if stop button pressed.
//when start is pressed, the moveMole2 function starts, which moves the squares around the grid in a specified time frame.
// when stop is pressed, the timer is cleared, paused, and blue squares removed. 
let stop = null;

function startstop(stop){
    if (stop == false){
        console.log('start button pressed');
        moveMole2()
    
    }else if (stop == true){
        console.log('stopped!');
        clearInterval(timermole);
        clearInterval(timertrick);
        clearInterval(timerfriend);

        //clearing the game
        squares.forEach(square => {
            square.classList.remove('mole');
            square.classList.remove('friend');
            square.classList.remove('trick');})

    }
}

function moveMole2(){
    timermole = setInterval(randomMole, 1000);
    timertrick = setInterval(randomMole, 1000);
    timerfriend = setInterval(randomMole, 1000);
};

mybutton.addEventListener('click', startstop())
mybutton2.addEventListener('click', startstop())

