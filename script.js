import playGame from "./game_functions.js";
import { numRounds, getPlayerChoice, beginBtn } from "/handlers.js";

const gameResult = playGame(numRounds, getPlayerChoice);
console.log(gameResult);
