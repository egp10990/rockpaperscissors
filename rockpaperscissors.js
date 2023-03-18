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

console.log()