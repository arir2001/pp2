const squares = document.querySelectorAll('.square');

const soil = document.querySelector('.soil');

const mole = document.querySelector('.mole');
const trick = document.querySelector('.trick');
const friend = document.querySelector('.friend');

const mybutton =  document.querySelector("#mybigbutton")
const mybutton2 =  document.querySelector("#mybigbutton2")

const level2Button =  document.querySelector("#level2")
const level3Button =  document.querySelector("#level3")

let time = 60;
const endtime = 60;

let score = document.querySelector('#score');
let oopsiescore = document.querySelector('#oopsiescore');
let molescore = document.querySelector('#molescore');

let result  = 0;
let oopsie  = 0;
let molestrick  = 0;


//score alerts

function scoreCounter(){
    if (score.textContent == 4){
        alert("you win!");
        
        startstop(true);
    }
    if (oopsiescore.textContent == 4){
        alert("you have killed many rabbits. You lose!");
        startstop(true);
    }
    if (molescore.textContent == 4){
        alert("The moles just stole your hammer. You lose!");
        startstop(true);
    }
}


//assigning the classes to each square
function randomMole(){
    //to 3 choose random numbers
    var arr = [];
    while(arr.length < 3){
        var r = Math.floor(Math.random() * 8) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    //to clear the previous square classes
    squares.forEach(square => {
        klass = square.getAttribute("class");

        square.classList.remove('soil');

        square.classList.remove('mole');
        square.classList.remove('friend');
        square.classList.remove('trick');
    } )

    //to assign new squares to the classes
    let randomMole= squares[a];
    randomMole.classList.add('soil');

    let randomFriend= squares[b];
    randomFriend.classList.add('soil');

    let randomTrick= squares[c];
    randomTrick.classList.add('soil');

    function PopUp(){
        randomMole.classList.remove('soil');
        randomFriend.classList.remove('soil');
        randomTrick.classList.remove('soil');

        randomMole.classList.add('mole');
        randomFriend.classList.add('friend');
        randomTrick.classList.add('trick');
    }

    timerPopUp = setTimeout(PopUp, 1000)

    scoreCounter()

    // to know which id has been hit
    hitPosition = randomMole.id;
    hitFriend = randomFriend.id;
    hitTrick = randomTrick.id;
}


//if a square with the id hit-x has been hit, the point is added to the appropriate score. 
squares.forEach(square => {
    square.addEventListener('mousedown' , () => {
        if (square.id == hitPosition){
            result ++
            score.textContent = result;
            hitPosition = null;
        }

        if (square.id == hitFriend){
            oopsie ++
            oopsiescore.textContent = oopsie;
            hitFriend = null;
        }

        if (square.id == hitTrick){
            molestrick ++
            molescore.textContent = molestrick;
            hitTrick = null;
        }
    })
} )


//now start-stop function which allows the game to be started and restarted using buttons. 
//the var stop is set to null to begin with, false if start button pressed, true if stop button pressed.
//when start is pressed, the moveMole2 function starts, which moves the squares around the grid in a specified time frame.
// when stop is pressed, the timer is cleared, paused, and blue squares removed. 
let stop = null;

function startstop(stop){
    if (stop == false){
        console.log('start button pressed');
        moveMole2()
        mybutton.disabled = true;
        mybutton2.disabled = false;
    
    }else if (stop == true){
        console.log('stopped!');

        clearInterval(timergame);
        clearTimeout(timerPopUp, 1300);
        clearInterval(countdownTimer);
        currentTime = 60;
        timeleft.textContent = currentTime;

        molescore.textContent = 0;
        score.textContent = 0;
        oopsiescore.textContent = 0;

        mybutton.disabled = false; //disabling buttons once clicked
        mybutton2.disabled = true;

        //clearing the game
        squares.forEach(square => {
            square.classList.remove('soil');
            square.classList.remove('mole');
            square.classList.remove('friend');
            square.classList.remove('trick');
        })
    }
}


//timer: 
let timeleft = document.querySelector('#time-left');
let currentTime = 60;


//starting the game!
function moveMole2(){
    //assigning squares new classes every 1400 ms
    timergame = setInterval(randomMole, 1400);

    //ending the game once the 60 secs are over
    function countDown(){
        currentTime--
        timeleft.textContent = currentTime;
    
        if (currentTime ==0){
            alert("GAME OVER!")
            startstop(true)
        }
    }
    
    countdownTimer = setInterval(countDown, 1000)
};



//buttons to start and stop the game
mybutton.addEventListener('click' , startstop() )
mybutton2.addEventListener('click' , startstop() )




