function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      break;
  }
}

function getPlayerChoice() {
  // const playerChoice = prompt("Rock, Paper, or Scissors? ");
  const playerChoiceClean = playerChoice.toLowerCase();
  return playerChoiceClean;
}

function playRound(player, comp) {
  console.log(`Player choice: ${player}`);
  console.log(`Comp choice: ${comp}`);
  if (player === comp) {
    return "Tie!";
  }
  if (
    (player === "rock" && comp === "scissors") ||
    (player === "paper" && comp === "rock") ||
    (player === "scissors" && comp === "paper")
  ) {
    return "Player wins!";
  }
  return "Computer wins!";
}

function game() {
  let playerScore = 0;
  let compScore = 0;

  for (let i = 0; i < 5; i++) {
    const compChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const result = playRound(playerChoice, compChoice);
    console.log(result);

    if (result === "Player wins!") {
      playerScore += 1;
    } else if (result === "Computer wins!") {
      compScore += 1;
    }
    console.log(`Player score: ${playerScore}, Computer Score: ${compScore}`);
  }

  if (playerScore > compScore) {
    return "Player wins!";
  }
  if (compScore > playerScore) {
    return "Comp wins!";
  }
  return "It's a Tie!";
}

const finalResult = game();
console.log(finalResult);
