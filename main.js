let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = ["Rock","Paper","Scissors"];
    let choosenChoice = Math.floor(Math.random()*3);
    let computerSelection = choice[choosenChoice];
    return(computerSelection);
    }
 
  const selection = prompt("Choose between:rock,scissor,paper");
  const playerSelection = selection.toLowerCase();
    
    
    for(let i = 1; i>=5; i++){
   
    function playRound(playerselection,computerSelection){
        
        if ((playerselection === "rock" && computerSelection ==="rock")||(playerselection === "paper" && computerSelection ==="paper")||(playerselection === "scissor" && computerSelection ==="scissor")){
           return "it's a draw";
        }
        
        else if ((playerselection === "paper" && computerSelection ==="rock")||(playerselection === "rock" && computerSelection ==="scissor")){
            return "You win";
            playerScore++;
        }
        else if ((playerselection === "scisssor" && computerSelection ==="rock")||(playerselection === "rock" && computerSelection ==="paper")){
           return "computer wins";
           computerScore++;}
        }
    }
    
    function theWinner(playerScore,computerScore){
    if(playerScore > computerScore){
        return "You won"
    }else return "You lost"
}
console.log(playRound(playerselection,computerSelection));
console.log(getComputerChoice());
console.log(``)