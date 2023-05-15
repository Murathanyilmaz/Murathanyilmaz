"use strict"
const portfolioButton = document.getElementById("portfolioButton");
const jumbleButton = document.getElementById("jumbleButton");
const diceButton = document.getElementById("diceButton");
const guessButton = document.getElementById("guessButton");
const warcraftButton = document.getElementById("warcraftButton");
const memoryGameButton = document.getElementById("memoryGameButton");


portfolioButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.remove("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".warcraft").classList.add("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
jumbleButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".jumble-game").classList.remove("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".warcraft").classList.add("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
diceButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.remove("hidden");
    document.querySelector(".pig-game-desc").classList.remove("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".warcraft").classList.add("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
guessButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.remove("hidden");
    document.querySelector(".warcraft").classList.add("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
warcraftButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".warcraft").classList.remove("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
memoryGameButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".warcraft").classList.add("hidden");
    document.querySelector(".memorygame").classList.remove("hidden");
})


