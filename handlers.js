const newMatchBtn = document.querySelector(".new-match-btn");
const matchSetup = document.querySelector(".match-setup");
const matchOptions = document.querySelector(".match-options");
const gameAssets = document.querySelector(".game-assets");
const abortBtn = document.querySelector(".abort-btn");

// functions
function initiateSetup() {
  matchSetup.classList.add("active");
  newMatchBtn.style.visibility = "Hidden";
}

function handleSubmit(event) {
  event.preventDefault();
  prepStage();
  const numRounds = event.target[0].value;
  const playerAvatar = event.target[1].value;
  const computerAvatar = event.target[2].value;
}

function prepStage() {
  matchSetup.classList.remove("active");
  gameAssets.classList.add("active");
  abortBtn.style.visibility = "Visible";
}

function resetGame() {
  newMatchBtn.style.visibility = null;
  gameAssets.classList.remove("active");
  abortBtn.style.display = "Hidden";
  // add function to reset score
}

// event listeners
newMatchBtn.addEventListener("click", initiateSetup);
matchOptions.addEventListener("submit", handleSubmit);
abortBtn.addEventListener("click", resetGame);
