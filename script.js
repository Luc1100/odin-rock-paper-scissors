function getComputerChoice() {
    let choice = Math.random() * 3
    if (choice < 1) {
        return("rock")
    } else if (choice < 2) {
        return("paper")
    } else {
        return("scissors")
    }

}

function getHumanChoice() {
    return(prompt("Rock, Paper, or Scissors?"))
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection.toLowerCase() == "rock" && computerSelection == "scissors" ||
        humanSelection.toLowerCase() == "paper" && computerSelection == "rock" ||
        humanSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        resultsDiv.textContent = `${humanSelection} beats ${computerSelection}!`;
        humanScore++;
        updateScore()
    } else if (humanSelection.toLowerCase() == "rock" && computerSelection == "paper" ||
            humanSelection.toLowerCase() == "paper" && computerSelection == "scissors" ||
            humanSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        resultsDiv.textContent = `${humanSelection} loses to ${computerSelection}!`
        computerScore++;
        updateScore()
    } else if (humanSelection.toLowerCase() == computerSelection) {
        resultsDiv.textContent = `${humanSelection} ties ${computerSelection}!`
    }
}

function updateScore() {
    if (humanScore == 5) { 
        scoreDiv.textContent = `You win! You ${humanScore} - ${computerScore} Computer`
        computerScore = 0
        humanScore = 0
    } else if (computerScore == 5) {
        scoreDiv.textContent = `You lose! You ${humanScore} - ${computerScore} Computer`
        computerScore = 0
        humanScore = 0
    } else {
        scoreDiv.textContent = `You ${humanScore} - ${computerScore} Computer`
    } 
}

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const resultsDiv = document.querySelector("#results-div");
const scoreDiv = document.querySelector("#scores-div")
let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});
