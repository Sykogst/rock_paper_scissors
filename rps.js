function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"]
    let compChoice = rps[Math.floor(Math.random() * rps.length)];
    // console.log(compChoice)
    return compChoice
}

function getPlayerChoice() {
    while (true) {
        let playerInput = prompt("Enter: rock, paper, or scissors: ").toLowerCase();

        if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
            return playerInput;
        } else {
            alert("Invalid choice, please enter rock, paper, or scissors.");
        }
    }
}

function playRound(playerSelection, computerSelection) {

}