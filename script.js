// import {getComputerChoice, getPlayerChoice, playRound, playGame } from "./gameplay_functions.js";

const setupBox = document.querySelector(".setup");
const startBtn = document.querySelector(".start-game-btn");
const currentGame = document.querySelector(".current-game");
startBtn.addEventListener("click", playRound);

const newGameBtn = document.querySelector(".new-game-btn");
newGameBtn.addEventListener("click", initiateSetup);

function initiateSetup() {
  setupBox.classList.toggle("active");
  // newGameBtn.style.display = "None";
}

const choiceBtns = document.querySelectorAll(".choice-btn");
choiceBtns.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

// const finalResult = game();
