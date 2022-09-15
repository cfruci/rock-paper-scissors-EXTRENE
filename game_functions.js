function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);

  switch (randNum) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
    default:
      break;
  }
}

function playRound(playerSelection) {
  const compChoice = getComputerChoice();
  const playerChoice = playerSelection;

  if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    return "Player scores!";
  }
  if (playerChoice === compChoice) {
    return "Tie";
  }
  return "Computer scores!";
}

export default function playGame(numRounds, playerChoice) {
  let playerScore = 0;
  let compScore = 0;

  for (let i = 0; i < numRounds; i++) {
    const roundResult = playRound(playerChoice);
    if (roundResult === "Player scores!") {
      playerScore += 1;
    } else if (roundResult === "Computer scores!") {
      compScore += 1;
    }
  }

  if (playerScore > compScore) {
    return "Player wins!";
  }
  if (compScore > playerScore) {
    return "Comp wins!";
  }
  return "Tie!";
}
