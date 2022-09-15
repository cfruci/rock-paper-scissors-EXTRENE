// new round
const newRoundBtn = document.querySelector(".new-round-btn");
const abortBtn = document.querySelector("#abort-btn");
newRoundBtn.addEventListener("click", initiateSetup);

// initialize round
const roundsSetup = document.querySelector(".rounds-setup");
const roundsInput = document.querySelector("#rounds");
const beginBtn = document.querySelector(".begin-game-btn");
// const playerIcon = document.querySelector("#player-icon");
// const computerIcon = document.querySelector("#computer-icon");

function initiateSetup() {
  roundsSetup.classList.toggle("active");
  newRoundBtn.style.display = "None";
  const numRounds = roundsInput.value;
  return numRounds;
}

function movePlayers(player, comp) {
  player.classList.add = "active";
}

beginBtn.addEventListener("click", displayGame);

function displayGame() {
  // movePlayers();
  // displayFists();
  // showScoreBoard();
}

// function movePlayers() {}

export { initiateSetup };
