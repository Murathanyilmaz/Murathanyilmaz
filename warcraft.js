"use strict"
//RACE BUTTONS
const raceButtons = [];
for (let i = 1; i <= 26; i++) {
    raceButtons[i] = document.querySelector(`.raceButton${i}`);
}

raceButtons.forEach(function (value, index) {
    value.addEventListener("click", function () {
        racePickingEvent(index);
    });
})

var racePickingEvent = function (pickedRace) {
    for (let i = 1; i <= 26; i++) {
        let raceButton = "raceButton" + i;
        if (i == pickedRace) {
            if (i < 14) { 
                document.querySelector(`.${raceButton}`).classList.add("buttonHorde");
                document.querySelector(`.${raceButton}`).innerHTML = `<img width=40px src="img/horde_icon.png"/>`;
            }
            else {
                document.querySelector(`.${raceButton}`).innerHTML = `<img width=40px src="img/alliance_icon.png"/>`;
                document.querySelector(`.${raceButton}`).classList.add("buttonAlliance");
            }
            document.querySelector(`.${raceButton}`).classList.remove("buttonGray");
        }
        else {
            document.querySelector(`.${raceButton}`).classList.remove("buttonHorde");
            document.querySelector(`.${raceButton}`).classList.remove("buttonAlliance");
            document.querySelector(`.${raceButton}`).classList.add("buttonGray");
        }
    }
}

//CLASS BUTTONS
const classButtons = [];
for (let i = 1; i <= 13; i++) {
    classButtons[i] = document.querySelector(`.classButton${i}`);
}

classButtons.forEach(function (value, index) {
    value.addEventListener("click", function () {
        classPickingEvent(index);
    });
})

var classPickingEvent = function (pickedClass) {
    for (let i = 1; i <= 13; i++) {
        let classButton = "classButton" + i;
        let classColor = classButton + "bg";
        if (i == pickedClass) {
            document.querySelector(`.${classButton}`).classList.add(`${classColor}`);
            document.querySelector(`.${classButton}`).classList.remove("buttonGray");
        }
        else {
            document.querySelector(`.${classButton}`).classList.remove(`${classColor}`);
            document.querySelector(`.${classButton}`).classList.add("buttonGray");
        }
    }
}