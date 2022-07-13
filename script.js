"use strict"
const jumbleButton = document.getElementById("jumbleButton");
const diceButton = document.getElementById("diceButton");
const guessButton = document.getElementById("guessButton");
const portfolioButton = document.getElementById("portfolioButton");
const menuButton = document.querySelector(".menu");
const navigasyon = document.querySelector(".navigation");

jumbleButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.remove("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
})
diceButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".pig-game").classList.remove("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
})
guessButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.remove("hidden");
})
portfolioButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.remove("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
})

menuButton.addEventListener("click", () => {
    document.querySelector(".butonlar").classList.toggle("hidden");
})