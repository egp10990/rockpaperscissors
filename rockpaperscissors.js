function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}    
let computerSelection = getComputerChoice(["Rock", "Paper", "Scissors"]);

function getPlayerChoice(playerSelection) {
    return playerSelection.toLowerCase();
}
let playerSelection = prompt("Rock, paper, or scissors?");

function playRound (playerSelection, computerSelection) {
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
