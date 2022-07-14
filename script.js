"use strict"
const jumbleButton = document.getElementById("jumbleButton");
const diceButton = document.getElementById("diceButton");
const guessButton = document.getElementById("guessButton");
const portfolioButton = document.getElementById("portfolioButton");
const contactButton = document.getElementById("contactButton");
const cvButton = document.getElementById("cvButton");

jumbleButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.remove("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".cv").classList.add("hidden"); document.querySelector(".contact").classList.add("hidden");
})
diceButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".pig-game").classList.remove("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".cv").classList.add("hidden"); document.querySelector(".contact").classList.add("hidden");
})
guessButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.remove("hidden");
    document.querySelector(".cv").classList.add("hidden"); document.querySelector(".contact").classList.add("hidden");
})
portfolioButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.remove("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".cv").classList.add("hidden"); document.querySelector(".contact").classList.add("hidden");
})
cvButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".cv").classList.remove("hidden"); document.querySelector(".contact").classList.add("hidden");
})
contactButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".cv").classList.add("hidden"); document.querySelector(".contact").classList.remove("hidden");
})