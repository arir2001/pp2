const squares = document.querySelectorAll('.square');


const mound = document.querySelector('.mound');

const molehint = document.querySelector('.molehint');
const friendhint = document.querySelector('.friendhint');
const trickhint = document.querySelector('.trickhint');

const mole = document.querySelector('.mole');
const friend = document.querySelector('.friend');
const trick = document.querySelector('.trick');

const mybutton =  document.querySelector("#mybigbutton")
const mybutton2 =  document.querySelector("#mybigbutton2")

const level1Button =  document.querySelector("#level1")
const level2Button =  document.querySelector("#level2")
const level3Button =  document.querySelector("#level3")

const easyButton =  document.querySelector("#easy")
const harderButton =  document.querySelector("#harder")
const hardestButton =  document.querySelector("#hardest")

//variable 
let time = 60;

const endtime = 60;

// names for the elements selectors
let score = document.querySelector('#score');
let oopsiescore = document.querySelector('#oopsiescore');
let molescore = document.querySelector('#molescore');

//names for the actual score.
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


assigning = 0 //starting values
popping = 0 //pops up the 

x = 0
function easiness(x){
    if (x == 0){
        alert('choose a difficulty level before you begin!')
        return x=0
    }

    if (x == 1){
        console.log('easy button pressed');
        easyButton.disabled = false;
        harderButton.disabled = true;
        hardestButton.disabled = true;

        return assigning = 1800 , popping = 1200
    }

    if (x == 2){
        console.log('harder button pressed');
        easyButton.disabled = true;
        harderButton.disabled = false;
        hardestButton.disabled = true;

        return assigning = 1800 , popping = 1600
    }

    if (x == 3){
        console.log('hardest button pressed');
        easyButton.disabled = true;
        harderButton.disabled = true;
        hardestButton.disabled = false;
 
        return assigning = 1300 , popping = 1100 
    }
}

//assigning the classes to each square
function randomMole(){
    //to 3 choose random numbers
    var arr = [];
    var lis = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var newlis = []
    var newlis2 = []
    var newlis3 = []


    //to 3 choose random numbers
    while(arr.length < 3){
        var r = Math.floor(Math.random() * 8) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    for (let i = 0; i < 9; i++) {
        if (lis[i] !== a) {
            newlis.push(lis[i]);
        }
    }
    for (let i = 0; i < 8; i++) {
        if (newlis[i] !== b) {
            newlis2.push(newlis[i]);
        }
    }
    for (let i = 0; i < 7; i++) {
        if (newlis2[i] !== c) {
            newlis3.push(newlis2[i]);
        }
    }//this is the list of squares without mole, friend or trick. 

    //to clear the previous square classes
    squares.forEach(square => {
        square.classList.remove('mound');

        square.classList.remove('molehint');
        square.classList.remove('friendhint');
        square.classList.remove('trickhint');

        square.classList.remove('mole');
        square.classList.remove('friend');
        square.classList.remove('trick');

    } )

    //to make the behind look like mounds. 
    for(let i = 0; i < 7; i++) {
        squares[newlis2[i]].classList.add('mound')
        }
    //to assign new hint squares
    let randomMole= squares[a];
    let randomFriend= squares[b];
    let randomTrick= squares[c];

    randomMole.classList.add('molehint');
    randomFriend.classList.add('friendhint');
    randomTrick.classList.add('trickhint');

    //assign the actual pop ups moles, rabbits, trick
    function PopUp(){
        randomMole.classList.add('mole');
        randomFriend.classList.add('friend');
        randomTrick.classList.add('trick');
    }

    timerPopUp = setTimeout(PopUp, popping)

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
        console.log(assigning, popping)

        if (assigning != 0){
            moveMole2()
            mybutton.disabled = true;
            mybutton2.disabled = false;
        }else{
            alert("choose a difficulty!")
        }
        
    
    }else if (stop == true){
        console.log('stopped!');

        //clearing the game
        squares.forEach(square => {
            square.classList.remove('mound');

            square.classList.remove('molehint');
            square.classList.remove('friendhint');
            square.classList.remove('trickhint');

            square.classList.remove('mole');
            square.classList.remove('friend');
            square.classList.remove('trick');

            console.log('entered')
        })

        clearInterval(timergame);
        clearTimeout(timerPopUp);
        clearInterval(countdownTimer);
        currentTime = 60;
        timeleft.textContent = currentTime;

        result  = 0;
        oopsie  = 0;
        molestrick  = 0;

        molescore.textContent = 0;
        score.textContent = 0;
        oopsiescore.textContent = 0;
        assigning = 0;
        popping = 0;

        mybutton.disabled = false; //disabling buttons once clicked
        mybutton2.disabled = true;

        easyButton.disabled = false;
        harderButton.disabled = false;
        hardestButton.disabled = false;
    }
}


//timer: 
let timeleft = document.querySelector('#time-left');
let currentTime = 60;


//starting the game!
function moveMole2(){
    //assigning squares new classes every 1400 ms
    timergame = setInterval(randomMole, assigning);

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




