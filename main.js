let computerSelected = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = ["rock","paper","scissor"];
    let choosenChoice = Math.floor(Math.random()*3) + 1;
    let computerSelection = choice[choosenChoice];
    return(computerSelection);
    }
    const selection = prompt("Choose between:rock,scissor,paper");
    const playerSelection = selection.toLowerCase();

    for(let i = 1; i<=5; i++){
   
    function playRound(playerSelection,computerSelected){
        
        
        if (playerSelection == computerSelected){
           return "it's a draw";
        }
        
        else if ((playerSelection == "paper" && computerSelected =="rock")||(playerselection == "rock" && computerSelected =="scissor")){
            return "You win";
            playerScore++;
        }
        else if ((playerSelection == "scisssor" && computerSelected =="rock")||(playerselection == "rock" && computerSelected =="paper")){
           return "computer wins";
           computerScore++;}
        }
    }
    
    function theWinner(playerScore,computerScore){
    if(playerScore > computerScore){
        return "You lost";
    }else if (playerScore == computerScore){
        return "You won";
   }
}
console.log(`computer choose: ${getComputerChoice()}`);
console.log(`you choose: ${playerSelection}`)
console.log(playRound(playerSelection,computerSelected));
console.log(theWinner(playerScore,computerScore));

