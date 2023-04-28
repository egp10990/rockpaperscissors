const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let rock = document.getElementById('rock');
let paper= document.getElementById('paper');
let scissors= document.getElementById('scissors');

var rockButton = document.createElement ('button');
rockButton.id = 'rock';
rockButton.innerHTML = 'Rock';
document.body.appendChild(rockButton);



var paperButton = document.createElement ('button');
paperButton.id = 'paper';
paperButton.innerHTML = 'Paper';
document.body.appendChild(paperButton);


var scissorsButton = document.createElement ('button');
scissorsButton.id = 'scissors';
scissorsButton.innerHTML = 'Scissors';
document.body.appendChild(scissorsButton);

var scoreCounter = document.createElement ('div');
scoreCounter.id = 'score';
document.body.appendChild(scoreCounter);

var winOrLose = document.createElement ('div');
winOrLose.id = 'win or lose';
document.body.appendChild(winOrLose);
document.getElementById('win or lose').innerHTML = (`Player Score: ${playerScore} Computer Score: ${computerScore}`);



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

rockButton.addEventListener('click', ()=>{
    if(computerScore <5 && playerScore<5){
    compSelection= getComputerChoice();
    if(compSelection=='Rock'){
        return winOrLose.textContent = "You tied.";
    }else if(compSelection=='Paper'){
        computerScore++;
        return winOrLose.textContent = 'You Lose! Paper covers rock!';
    }else if(compSelection=='Scissors'){
        playerScore++;
        return winOrLose.textContent = 'You win! Rock crushes scissors!';
    }else if(computerScore==5){return winOrLose.textContent ='Game Over! Computer is the winner!';
    }else {
            return winOrLose.textContent = "You won the game!";
        }
    }
})

paperButton.addEventListener('click', ()=>{
    if(computerScore <5 && playerScore<5){
    compSelection= getComputerChoice();
    if(compSelection=='Paper'){
        return winOrLose.textContent = 'You tied!';
    }else if(compSelection=='Scissors'){
        computerScore++;
        return winOrLose.textContent = 'You Lose! Scissors cuts paper!';
    }else if(compSelection=='Rock'){
        playerScore++;
        return winOrLose.textContent = 'You win! Paper covers rock!';
    }}else if(computerScore==5){return winOrLose.textContent = 'Game Over! Computer is the winner!';
    }else{
        return winOrLose.textContent = "You won the game!";
        }
})
scissorsButton.addEventListener('click', ()=>{
    if(computerScore <5 && playerScore<5){
        compSelection= getComputerChoice();
    if(compSelection=='Scissors'){
        return winOrLose.textContent ='You tied.';
    }else if(compSelection=='Rock'){
        computerScore++;
        return winOrLose.textContent ='You Lose! Rock crushes scissors!';
    }else if(compSelection=='Paper'){
        playerScore++;
        return winOrLose.textContent ='You win! Scissors cut paper!';
    }}else if(computerScore==5){return winOrLose.textContent ='Game Over! Computer is the winner!';
        }else{
            return winOrLose.textContent ="You won the game!";
    }
})

