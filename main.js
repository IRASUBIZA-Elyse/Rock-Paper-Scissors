function getComputerChoice(){
    let choice = ["Rock","Paper","Scissors"];
    let choosenChoice = Math.floor(Math.random()*3);
    let computerChoosed = choice[choosenChoice];
    return(computerChoosed);
    }
