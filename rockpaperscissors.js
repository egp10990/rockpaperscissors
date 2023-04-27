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
        alert('You tied!');
    }else if(compSelection=='Paper'){
        alert('You Lose! Paper covers rock!');
        computerScore++;
    }else if(compSelection=='Scissors'){
        alert('You win! Rock crushes scissors!');
        playerScore++;
    }else if(computerScore==5){alert('Game Over! Computer is the winner!');}
        else{
            alert("You won!");
    }}
})
paperButton.addEventListener('click', ()=>{
    if(computerScore <5 && playerScore<5){
    compSelection= getComputerChoice();
    if(compSelection=='Paper'){
        alert('You tied!');
    }else if(compSelection=='Scissors'){
        alert('You Lose! Scissors cuts paper!');
        computerScore++;
    }else if(compSelection=='Rock'){
        alert('You win! Paper covers rock!');
        playerScore++;
    }}else if(computerScore==5){alert('Game Over! Computer is the winner!');
    }else{
            alert("You won!");
        }
})
scissorsButton.addEventListener('click', ()=>{
    if(computerScore <5 && playerScore<5){
        compSelection= getComputerChoice();
    if(compSelection=='Scissors'){
        alert('You tied.');
    }else if(compSelection=='Rock'){
        alert('You Lose! Rock crushes scissors!');
        computerScore++;
    }else if(compSelection=='Paper'){
        alert('You win! Scissors cut paper!');
        playerScore++;

    }}else if(computerScore==5){alert('Game Over! Computer is the winner!');
        }else{
            alert("You won!");
    }
})

console.log (computerScore, playerScore);
