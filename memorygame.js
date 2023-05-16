"use strict"
const gameCards = document.querySelectorAll("button");
const cardType1 = `<img height="100px" src="img/horde_icon.png"/>`
const cardType2 = `<img height="100px" src="img/alliance_icon.png"/>`
const cardType3 = `<img height="100px" src="img/wow_icon.png"/>`

gameCards.forEach(function (value, index) {
    value.addEventListener("click", function () {
        showingFace(index);
    });
})

var showingFace = function (cardNumber) {
    switch (gameCards[cardNumber].className) {
    case "cardType1":
        gameCards[cardNumber].innerHTML = cardType1;
        break;
    case "cardType2":
        gameCards[cardNumber].innerHTML = cardType2;
        break;
    case "cardType3":
        gameCards[cardNumber].innerHTML = cardType3;
        break;
    }
} 

//style background = image so there can be transition duration from css.
