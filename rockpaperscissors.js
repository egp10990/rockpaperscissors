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

console.log("The computer chose: " + computerSelection);
console.log("You chose: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));

