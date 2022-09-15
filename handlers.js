const newRoundBtn = document.querySelector(".new-round-btn");
const abortBtn = document.querySelector("#abort-btn");
const roundsSetup = document.querySelector(".rounds-setup");
const beginBtn = document.querySelector(".begin-game-btn");
const weaponsDiv = document.querySelector(".weapon-selection");
// const playerIcon = document.querySelector("#player-icon");
// const computerIcon = document.querySelector("#computer-icon");

function initiateSetup() {
  roundsSetup.classList.toggle("active");
  newRoundBtn.style.display = "None";
}

// function movePlayers(player, comp) {
//   player.classList.add = "active";
// }

function prepStage() {
  roundsSetup.classList.toggle("active");
  weaponsDiv.classList.toggle("active");

  // movePlayers();
  // displayFists();
  // showScoreBoard();
}

function resetGame() {
  console.log("hello");
}

newRoundBtn.addEventListener("click", initiateSetup);
beginBtn.addEventListener("click", prepStage);
abortBtn.addEventListener("click", resetGame);
