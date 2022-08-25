let userCounter = 0;
let pcCounter = 0; 
let userName = "User";
// let userName = prompt("Give your name or:","User");

// listeners for user's choise
let buttonR = document.getElementById('btnR');
let buttonP = document.getElementById('btnP');
let buttonS = document.getElementById('btnS');
// listeners for pc's choise
let pcR = document.getElementById('divR');
let pcP = document.getElementById('divP');
let pcS = document.getElementById('divS');
//listeners for hidding images and borders after match is over
let divButtons = document.getElementById('buttons');
let divPCHands = document.getElementById('options');



let userInput = "";

function game(){ 
document.getElementById('happenningP').innerText = "Choose an option";
startGame.remove();
function getComputerChoice(){
    let rockPaperScissor = ["ROCK", "PAPER" , "SCISSORS"];
    //here the computer is randomly choosing its option using Math.random
    let computerSelection = rockPaperScissor[Math.floor(Math.random()*rockPaperScissor.length)];
    return computerSelection;
} 

// getComputerChoice
let computerSelection= "";

// listening to button's clicks:
btnR.addEventListener('click', roundRPS);
btnP.addEventListener('click', roundRPS);
btnS.addEventListener('click', roundRPS);


   // creates a class for computer's hands transition in CSS

function computerTransitions(e){
 
    if(computerSelection === "ROCK"){
divR.className= 'pcTransition';
divP.className= 'pcHandHidden';
divS.className= 'pcHandHidden';

        
    }else if(computerSelection === "PAPER"){
        divR.className= 'pcHandHidden';
        divP.className= 'pcTransition';
        divS.className= 'pcHandHidden';
        
       
    }else if(computerSelection === "SCISSORS"){
        divR.className= 'pcHandHidden';
        divP.className= 'pcHandHidden';
        divS.className= 'pcTransition';
        
    }
}



function roundRPS(e){
    if(e.target['id'] === "btnR"){
    userInput = "ROCK";
    // console.log(userInput);
    oneRound()
    // console.log(`Computer:${computerSelection}`);
    computerTransitions()
    }
    else if(e.target['id'] === "btnP"){
    userInput = "PAPER";
    // console.log(userInput);
    oneRound()
    // console.log(`Computer:${computerSelection}`);
    computerTransitions()

    }
    else if(e.target['id'] === "btnS"){
    userInput = 'SCISSORS';
    // console.log(userInput);
    oneRound()
    // console.log(`Computer:${computerSelection}`);
    computerTransitions()

    }
} // roundRPS

function oneRound(){

    // gets the computer's selection
computerSelection= getComputerChoice();
    
    let playerSelection = userInput;
    // checks the selections and prints to the screen 
    if (playerSelection === computerSelection){
        let tie = `It's a tie! ${playerSelection} is igual to ${computerSelection}`
document.getElementById('happenningP').innerText = tie;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        document.getElementById('happenningP').innerText =  "You win! ROCK beats SCISSORS!";
    userCounter++;
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        document.getElementById('happenningP').innerText = "You lose! PAPER beats ROCK!";
    pcCounter++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        document.getElementById('happenningP').innerText = "You win! PAPER beats ROCK!";
    userCounter++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        document.getElementById('happenningP').innerText = "You lose! SCISSORS beats PAPER!";
    pcCounter++;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
    userCounter++;
    document.getElementById('happenningP').innerText = "You win! SCISSORS beats PAPER!";
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        document.getElementById('happenningP').innerText = "You lose! ROCK beats SCISSORS!";
    pcCounter++; }
    let userScore = `Your score is:${userCounter}`;
    let pcScore = `The computer score is: ${pcCounter}`;

    //prints the result to screen:
    document.getElementById('scoreUser').innerText = userScore;
    document.getElementById('scorePC').innerText = pcScore;
   
    //remove items after match is over: 
    function removeItemOver(){
        divPCHands.style.display= "none";
        divButtons.style.display= "none";
        buttonR.remove();
        buttonP.remove();
        buttonS.remove();
        happenningP.remove();
            }
   if(pcCounter === 5 || userCounter === 5){
    if(pcCounter < userCounter){
        document.getElementById('scoreUser').innerText = `${userName} won`;
        document.getElementById('scorePC').innerText = "";
        removeItemOver();
        var el = document.querySelector("#youNerd")
        var img = document.createElement("img");
        img.id = "imgNerd";
        img.setAttribute('src', 'images/youNerd.png');
     el.appendChild(img);
        
        // here add an event that sets all the images and buttons to display: 'none',
        // and show an image of a user breaking a pc

       }
       else if(pcCounter > userCounter){
        document.getElementById('scorePC').innerText = "Computer won";
         document.getElementById('scoreUser').innerText = "";
         removeItemOver();
         var el = document.querySelector("#youLoser")
        var img = document.createElement("img");
        img.id = "imgLoser";
        img.setAttribute('src', 'images/loser.png');
        el.appendChild(img);
 // here add an event that sets all the images and buttons to display: 'none';
 // and show an image of a pc taking the world..lol
   } 
 }

} // oneRound

} // game()
    

// Reload everything:
function reload() {
    reload = location.reload();
}









