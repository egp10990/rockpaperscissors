function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}    
let computerSelection = getComputerChoice(["Rock", "Paper", "Scissors"]);