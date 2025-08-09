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
        return(1)
    } else if (humanSelection.toLowerCase() == "rock" && computerSelection == "paper" ||
            humanSelection.toLowerCase() == "paper" && computerSelection == "scissors" ||
            humanSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return(-1)
    } else if (humanSelection.toLowerCase() == computerSelection) {
        return(0)
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

playGame()

