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

var rockButton = document.createElement ('button');
rockButton.id = 'Rock';
rockButton.innerHTML = 'Rock';
document.body.appendChild(rockButton);

var paperButton = document.createElement ('button');
paperButton.id = 'Paper';
paperButton.innerHTML = 'Paper';
document.body.appendChild(paperButton);

var scissorsButton = document.createElement ('button');
scissorsButton.id = 'Scissors';
scissorsButton.innerHTML = 'Scissors';
document.body.appendChild(scissorsButton);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
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
    } else {
        return alert("Error. Please make sure you are spelling correctly!")
    }
}

console.log("The computer chose: " + computerSelection);
console.log("You chose: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(playerScore, computerScore);

