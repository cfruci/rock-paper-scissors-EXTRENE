// import { numRounds } from "/handlers.js";
import * as exports from "./handlers.js";

let numRounds;

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
      return null;
  }
}

function getPlayerChoice() {
  const playerChoice = this.dataset.weapon;
  return playerChoice;
}

function getRounds() {
  const roundsInput = document.querySelector("#rounds-input");
}

function playRound() {
  const compChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();

  if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    return "Player wins round!";
  }
  if (playerChoice === compChoice) {
    return "Round ends in a tie";
  }
  return "Computer wins round!";
}

function playGame(numRounds) {
  let playerScore = 0;
  let compScore = 0;
  console.log(numRounds);

  for (let i = 0; i < numRounds; i += 1) {
    const roundResult = playRound();
    if (roundResult === "Player scores!") {
      playerScore += 1;
    } else if (roundResult === "Computer scores!") {
      compScore += 1;
    }
  }

  if (playerScore > compScore) {
    return "Player wins match!";
  }
  if (compScore > playerScore) {
    return "Comp wins match!";
  }
  return "Match ends in draw!";
}

function activateButtons(button) {
  button.addEventListener("click", getPlayerChoice);
}

const choiceBtns = document.querySelectorAll(".choice-btn");
choiceBtns.forEach(activateButtons);
