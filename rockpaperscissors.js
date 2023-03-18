function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}    
let computerSelection = getComputerChoice(["Rock", "Paper", "Scissors"]);

function getPlayerChoice(playerInput) {
    return playerInput.toLowerCase();
}
let playerInput = prompt("Rock, paper, or scissors?");
    