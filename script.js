
function getComputerChoice(){
    let moves =["rock","paper","scissors"];
    let choice = Math.floor(Math.random()*3)    
    return moves[choice];
}
function getPlayerChoice(){
    let input = prompt("Rock Paper or Scissors");
    input = input.toLowerCase();
    if(input ==="rock"||input==="paper"||input==="scissors"){
        return input;
    }
    else{
        console.log("invalid choice");
        getPlayerChoice();
    }
}
function game(){
    let playerScore = 0;
    let computerScore=0;
    
    for(i=0; i<5; i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        if(playerChoice == computerChoice){
            console.log("tie go again");
            i--;
        }
        else if(playerChoice ==="rock"){
            if(computerChoice ==="scissors"){
                playerScore++;
                console.log("rock beats scissors you win");
            } 
            if(computerChoice ==="paper"){
                computerScore++;
                console.log("paper beats rock you lose");
            }
        }
        else if(playerChoice ==="paper"){
            if(computerChoice ==="rock"){
                playerScore++;
                console.log("paper beats rock you win");
            } 
            if(computerChoice ==="scissors"){
                computerScore++;
                console.log("scissors beats paper you lose");
            }
        }
        else if(playerChoice ==="scissors"){
            if(computerChoice ==="paper"){
                playerScore++;
                console.log("scissors beats paper you win");
            } 
            if(computerChoice ==="paper"){
                computerScore++;
                console.log("rock beats scissors you lose");
            }
        }
        
    }
    if(playerScore>computerScore){
        console.log ("you win final score: " + playerScore + " to" + computerScore) 

    }
    else{
        console.log ("you lose final score: " + playerScore + " to " + computerScore) 

    }
}

game();