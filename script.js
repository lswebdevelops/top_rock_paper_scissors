
   let userCounter = 0;
   let pcCounter = 0;
   let userName = prompt("What is your name? ", "User");
  

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
alert(tie);
} else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
alert( "You win! ROCK beats SCISSORS!");
userCounter++;
} else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
alert("You lose! PAPER beats ROCK!");
pcCounter++;
} else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
alert("You win! PAPER beats ROCK!");
userCounter++;
} else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
alert("You lose! SCISSORS beats PAPER!");
pcCounter++;
} else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
alert( "You win! SCISSORS beats PAPER!");
userCounter++;
} else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
alert( "You lose! ROCK beats SCISSORS!");
pcCounter++;

}else{
    alert("Please type 'rock', 'paper' or 'scissors'." );
}
let userScore = `Your score is:${userCounter}`;
let pcScore = `The computer score is: ${pcCounter}`;
alert(pcScore);
alert(userScore);
}
roundRPS();
        
// end of functions in the loop
        
}
//after 5 turns it prints:
alert("End of Game");

}
game()



if(pcCounter < userCounter){
    alert(`${userName} wins`);
}
else if(pcCounter > userCounter){
    alert("Pc wins");
}
else{
    alert("It's a tie")
}
