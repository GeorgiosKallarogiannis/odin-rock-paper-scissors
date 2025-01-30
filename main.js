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

console.log(getComputerChoice());
