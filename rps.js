function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"]
    let compChoice = rps[Math.floor(Math.random() * rps.length)];
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
        alert(choices + "It's a tie, playing another round")
        return playRound(getPlayerChoice(), getComputerChoice());
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

function whoWins(playerWins, computerWins) {
  if (playerWins > computerWins) {
      alert("You won the game")
  } else {
      alert("You lost the game")
  }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 1; i <= 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        if (result.includes("You win!")) {
            playerWins ++
        } else {
            computerWins ++
        }

        let score = `\nPlayer: ${playerWins}, Computer: ${computerWins}`;
        alert(result + score);
        
        if (playerWins >= 3 || computerWins >= 3) {
            whoWins(playerWins, computerWins);
            break;
        }
    }
}

game()
