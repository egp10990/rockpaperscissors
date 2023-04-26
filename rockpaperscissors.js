let playerScore = 0;
let computerScore = 0;
let playerSelection = getPlayerChoice();

var rockButton = document.createElement ('button');
rockButton.id = 'Rock';
rockButton.innerHTML = 'Rock';
document.body.appendChild(rockButton);
document.getElementById("Rock").onclick = getPlayerChoice;


var paperButton = document.createElement ('button');
paperButton.id = 'Paper';
paperButton.innerHTML = 'Paper';
document.body.appendChild(paperButton);
document.getElementById("Paper").onclick = getPlayerChoice; 


var scissorsButton = document.createElement ('button');
scissorsButton.id = 'Scissors';
scissorsButton.innerHTML = 'Scissors';
document.body.appendChild(scissorsButton);
document.getElementById("Scissors").onclick = getPlayerChoice;

function getPlayerChoice() {
    var playerSelection = this.id;
    console.log("You chose: " + playerSelection);
}


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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You tied.";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        return "You lose. Paper covers Rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You win. Rock crushes Scissors."
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return "You win. Paper covers Rock."
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lose. Scissors cuts Paper."
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You lose. Rock crushes Scissors."
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win. Scissors cuts Paper."
    } else {
        return "Error. Please make sure you are spelling correctly!"
    }
}

let computerSelection = getComputerChoice();

console.log(playerScore, computerScore);


