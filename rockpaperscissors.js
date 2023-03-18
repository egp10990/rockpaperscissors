function getComputerChoice () {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
    return computerChoice;
}
function getPlayerChoice() {
    let playerInput = prompt("Do you choose Rock, Paper, or Scissors?");
    let result = playerInput.toLowerCase();
    return result;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You tied.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose. Paper covers Rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win. Rock crushes Scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win. Paper covers Rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose. Scissors cuts Paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose. Rock crushes Scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win. Scissors cuts Paper."
    }
}
function game() {
    let computerScore = 0,
    playerScore = 0;
    for (i = 0; i < 3; i ++) {
        const result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        if(result.includes("Win")) {
        playerScore ++;
        console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
    } else if (result.includes("Lose")) {
        computerScore ++;
        console.log(`Computer: ${computerScore} | Player: ${playerScore}`)
    }
    } 
}