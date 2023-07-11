let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choice = ["rock","paper","scissors"];
    let choosenChoice = Math.floor(Math.random()*3);
    let computerSelection = choice[choosenChoice];
    return computerSelection;
}

function playerChoose(){
    const selection = prompt("Choose between:rock,scissors,paper");
    const playerSelect = selection.toLowerCase();
    return playerSelect;
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === 'rock' && computerSelection === 'rock') { 
        return 'You tied! You both picked rock';
    }
    
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'You tied! You both picked scissors';
    }
    
    else if (playerSelection === 'paper' &&  computerSelection === 'paper') {
        return 'You tied! You both picked paper';
    }
    
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore ++;
        return 'You lost! Rock crushes scissors';
    }
    
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++;
        return 'You won! Scissors cuts paper';
    }
    
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore ++;
       return 'You Lost! Paper covers rock!';
    }
    
    else if (playerSelection ==='rock' && computerSelection === 'scissors') { 
        playerScore ++;
       return 'You won! Rock crushes scissors';
    }
    
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore ++;
       return 'You lost! Scissors cuts paper';
    }
    
    else if (playerSelection ==='paper' &&computerSelection === 'rock') {
        playerScore ++;
       return 'You won! Paper covers rock';
    }
}
// const playerSelection = "rock";

const game = () =>{
  for (let i = 0; i<5; i++){
    const playerSelection = playerChoose();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore){
    return 'you won the game'
  }else if (playerScore < computerScore){
    return 'you lost the game'
  }else {
    return "it's a tie"
  }
}
console.log(game ());