function getComputerChoice (choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}
const choices = ['Rock', 'Paper', 'Scissors'];
console.log(getComputerChoice(choices));

function playRound(playerSelection, computerSelection) {

}
const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));