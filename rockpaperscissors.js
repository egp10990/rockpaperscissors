let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissors"]
    let randomChoice = Math.floor(Math.random()* computerChoices.length) + 1
    if (randomChoice === 1){
        return "Rock"
    } if (randomChoice === 2) {
        return "Paper"
    } if (randomChoice === 3) {
        return "Scissors"
    }
}

let playerSelection1 = prompt("Rock, paper, or scissors?");
let computerSelection = getComputerChoice().toLowerCase();
let playerSelection = playerSelection1.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        return "You tied.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose. Paper covers Rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win. Rock crushes Scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win. Paper covers Rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose. Scissors cuts Paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose. Rock crushes Scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win. Scissors cuts Paper."
    }
}

console.log("The computer chose: " + computerSelection);
console.log("You chose: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (i = 0; i <= 5; i++) {
        var playerSelection1 = prompt("Rock, paper, or scissors?");
        var computerSelection = getComputerChoice().toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log("Computer chose: "+ computerSelection);
        console.log("Player chose: " + playerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Final computer score: " + computerScore);
    console.log("Final player score: " + playerScore);
}

game();