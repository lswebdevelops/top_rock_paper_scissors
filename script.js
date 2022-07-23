
   
  

function game(){
    for(let i = 0; i <=4; i++){
    
//here starting the functions: 
function getComputerChoice(){
    let rockPaperScissor = ["ROCK", "PAPER" , "SCISSORS"];
    //here the computer is randomly choosing its option using Math.random
    let computerSelection = rockPaperScissor[Math.floor(Math.random()*rockPaperScissor.length)];
    return computerSelection;
       
}
let computerSelection= getComputerChoice();

function roundRPS(){
let userInput = prompt("Type rock, paper or scissors","paper");
let playerSelection = userInput.toUpperCase();
if (playerSelection === computerSelection){
let tie = `It's a tie! ${playerSelection} is igual to ${computerSelection}`
console.log(tie);
} else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
console.log( "You win! ROCK beats SCISSORS!");
} else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
console.log("You lose! PAPER beats ROCK!");
} else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
console.log("You win! PAPER beats ROCK!");
} else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
console.log("You lose! SCISSORS beats PAPER!");
} else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
console.log( "You win! SCISSORS beats PAPER!");
} else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
console.log( "You lose! ROCK beats SCISSORS!");
}else{
    console.log("Please type 'rock', 'paper' or 'scissors'." );
}
}
roundRPS();
        
// end of functions in the loop
        
}
//after 5 turns it prints:
console.log("End of Game");
}
game()


