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

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const resultContainer = document.querySelector("#result")
    const humanPara = document.createElement("p");
    const compPara = document.createElement("p");
    const resultPara = document.createElement("p");

    humanPara.textContent = `Human Score: ${humanScore}`;
    compPara.textContent = `Human Score: ${computerScore}`;

    resultContainer.appendChild(humanPara);
    resultContainer.appendChild(compPara);
    resultContainer.appendChild(resultPara);

    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")) {
            humanScore++;

            humanPara.textContent = `Human Score: ${humanScore}`;

            resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        } else if (humanChoice === computerChoice) {
            resultPara.textContent = "It's a draw!";
            return;
        } else {
            computerScore++;

            compPara.textContent = `Human Score: ${computerScore}`;

            resultPara.textContent =`You Lose! ${computerChoice} beats ${humanChoice}.`;
        }

        switch (5) {
            case computerScore:
                resultPara.textContent = "You sadly lost. Better luck next time!";
                break;
            case humanScore:
                resultPara.textContent = "Congratulations, you win!";
                break;
        }
    }
}

playGame();