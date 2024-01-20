function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultElement = document.getElementById("result");

    if (playerChoice === computerChoice) {
        resultElement.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}
