"use strict"
const jumbleButton = document.getElementById("jumbleButton");
const diceButton = document.getElementById("diceButton");
const guessButton = document.getElementById("guessButton");

jumbleButton.addEventListener("click", () => {
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.remove("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
})
diceButton.addEventListener("click", () => {
    document.querySelector(".pig-game").classList.remove("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
})
guessButton.addEventListener("click", () => {
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.remove("hidden");
})