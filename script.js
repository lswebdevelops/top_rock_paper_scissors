
   let userCounter = 0;
   let pcCounter = 0;
//    let userName = "prompt("What is your name? ", "User");"
  
let userName = "User"
let buttonR = document.getElementById('btnR');
let buttonP = document.getElementById('btnP');
let buttonS = document.getElementById('btnS');
let userInput = "";


function game(){
 
    

function getComputerChoice(){
    let rockPaperScissor = ["ROCK", "PAPER" , "SCISSORS"];
    //here the computer is randomly choosing its option using Math.random
    let computerSelection = rockPaperScissor[Math.floor(Math.random()*rockPaperScissor.length)];
    return computerSelection;
}
let computerSelection= "";

// listening to button's clicks:
btnR.addEventListener('click', roundRPS);
btnP.addEventListener('click', roundRPS);
btnS.addEventListener('click', roundRPS);


function roundRPS(e){
    if(e.target['id'] === "btnR"){
    userInput = "ROCK";
    console.log(userInput);
    oneRound()
    console.log(`Computer:${computerSelection}`);
    }
    else if(e.target['id'] === "btnP"){
    userInput = "PAPER";
    console.log(userInput);
    oneRound()
    console.log(`Computer:${computerSelection}`);


    }
    else if(e.target['id'] === "btnS"){
    userInput = 'SCISSORS';
    console.log(userInput);
    oneRound()
    console.log(`Computer:${computerSelection}`);


    }
}

function oneRound(){

    // gets the computer's selection
computerSelection= getComputerChoice();
    
    let playerSelection = userInput;
    
    if (playerSelection === computerSelection){
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
    userCounter++;
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
    pcCounter++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
    userCounter++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
    pcCounter++;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
    userCounter++;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
    pcCounter++; }
    let userScore = `Your score is:${userCounter}`;
    let pcScore = `The computer score is: ${pcCounter}`;

    //prints the result to screen:
    document.getElementById('scoreUser').innerText = userScore;
    document.getElementById('scorePC').innerText = pcScore;
   
    }
}
    
    








