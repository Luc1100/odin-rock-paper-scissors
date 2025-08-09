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
        return(`${humanSelection} beats ${computerSelection}`)
    } else if (humanSelection.toLowerCase() == "rock" && computerSelection == "paper" ||
            humanSelection.toLowerCase() == "paper" && computerSelection == "scissors" ||
            humanSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return(`${computerSelection} beats ${humanSelection}`)
    } else if (humanSelection.toLowerCase() == computerSelection) {
        return(`${humanSelection} ties ${computerSelection}`)
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        let result = playRound(humanSelection, computerSelection)

        if (result == 1) {
            humanScore++
            console.log(`You win! ${humanSelection} beats ${computerSelection}!`)
        } else if (result == -1) {
            computerScore++
            console.log(`You lose! ${computerSelection} beats ${humanSelection}!`)
        } else if (result == 0) {
            console.log(`${computerSelection} ties ${humanSelection}!`)
        }
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore < computerScore) {
        console.log("Computer wins!")
    } else {
        console.log("You tie!")
    }
}

// playGame()
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const resultsDiv = document.querySelector("#results-div");

rockBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    resultsDiv.textContent = playRound("rock", computerChoice)
});

paperBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    resultsDiv.textContent = playRound("paper", computerChoice)
});

scissorsBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    resultsDiv.textContent = playRound("scissors", computerChoice)
});
