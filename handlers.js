const newMatchBtn = document.querySelector(".new-match-btn");
// const abortBtn = document.querySelector("#abort-btn");
const matchSetup = document.querySelector(".match-setup");
const beginBtn = document.querySelector(".begin-game-btn");
const weaponsDiv = document.querySelector(".weapon-selection");
// const playerIcon = document.querySelector("#player-icon");
// const computerIcon = document.querySelector("#computer-icon");

function initiateSetup() {
  matchSetup.classList.toggle("active");
  newMatchBtn.style.display = "None";
}

function prepStage() {
  matchSetup.classList.toggle("active");
  weaponsDiv.classList.toggle("active");

  // movePlayers();
  // displayFists();
  // showScoreBoard();
}

// function resetGame() {

// }

newMatchBtn.addEventListener("click", initiateSetup);
beginBtn.addEventListener("click", prepStage);
// abortBtn.addEventListener("click", resetGame);
