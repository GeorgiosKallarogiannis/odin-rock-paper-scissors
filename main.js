function getComputerChoice() {
    const randomNum = Math.random();
    const roundedNum = Math.floor(randomNum * 100);

    if (roundedNum >= 0 && roundedNum < 33) {
        return "rock";
    } else if (roundedNum > 32 && roundedNum < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt().toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else if (humanChoice === computerChoice) {
            console.log("It's a draw!");
            return;
        } else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Congratulations, you win!");
    } else {
        console.log("You sadly lost. Better luck next time!");
    }
}

playGame();