// new round
const newRoundBtn = document.querySelector(".new-round-btn");
newRoundBtn.addEventListener("click", initiateSetup);

// initialize round
const roundsSetup = document.querySelector(".rounds-setup");
const numRounds = document.querySelector("#rounds").value;
const beginBtn = document.querySelector(".begin-game-btn");

// in-game choices
const choiceBtns = document.querySelectorAll(".choice-btn");
choiceBtns.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

function initiateSetup() {
  roundsSetup.classList.toggle("active");
}

function getPlayerChoice(event) {
  const playerChoice = event.target.dataset.weapon;
  return playerChoice;
}

export { numRounds, getPlayerChoice, beginBtn };
