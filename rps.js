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
    let choices = `Player chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`;

    if (playerSelection === computerSelection) {
      return choices + "It's a tie"
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return choices + "You win!";
    } else {
        return choices + "You lose!";
    }
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
let result = playRound(playerChoice, computerChoice);
alert(result);