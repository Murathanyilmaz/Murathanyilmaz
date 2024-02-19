"use strict"
const portfolioButton = document.getElementById("portfolioButton");
const unitybutton = document.getElementById("unitybutton");
const jumbleButton = document.getElementById("jumbleButton");
const diceButton = document.getElementById("diceButton");
const guessButton = document.getElementById("guessButton");
const memoryGameButton = document.getElementById("memoryGameButton");

portfolioButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.remove("hidden");
    document.querySelector(".unity").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
unitybutton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".unity").classList.remove("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
jumbleButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".unity").classList.add("hidden");
    document.querySelector(".jumble-game").classList.remove("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
diceButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".unity").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.remove("hidden");
    document.querySelector(".pig-game-desc").classList.remove("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
guessButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".unity").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.remove("hidden");
    document.querySelector(".memorygame").classList.add("hidden");
})
memoryGameButton.addEventListener("click", () => {
    document.querySelector(".portfolio").classList.add("hidden");
    document.querySelector(".unity").classList.add("hidden");
    document.querySelector(".jumble-game").classList.add("hidden");
    document.querySelector(".pig-game").classList.add("hidden");
    document.querySelector(".pig-game-desc").classList.add("hidden");
    document.querySelector(".guess-game").classList.add("hidden");
    document.querySelector(".memorygame").classList.remove("hidden");
})

function getPics() {} //just for this demo
const imgs = document.querySelectorAll('.models img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    /*fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';*/
  });
});

function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("arrow").classList.toggle("fa-caret-down");
    document.getElementById("arrow").classList.toggle("fa-caret-up");
}
function dropDownFunction2() {
    document.getElementById("myDropdown").classList.remove("show");
}