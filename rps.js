function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"]
    let compChoice = rps[Math.floor(Math.random() * rps.length)]
    // console.log(compChoice)
    return compChoice
}