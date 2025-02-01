let humanScore = 0;
let computerScore = 0;

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

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());