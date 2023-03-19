function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let randomChoice = Math.floor(Math.random()* choices.length) + 1
    if (randomChoice === 1){
        return "Rock"
    } if (randomChoice === 2) {
        return "Paper"
    } if (randomChoice === 3) {
        return "Scissors"
    }
}


