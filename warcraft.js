"use strict"
//RACE BUTTONS STYLE
const raceButtons = [];
for (let i = 1; i <= 26; i++) {
    raceButtons[i] = document.querySelector(`.raceButton${i}`);
}

raceButtons.forEach(function (value, index) {
    value.addEventListener("click", function () {
        racePickingEvent(index);
    });
})

var disableClass = function(classNumbers) {
    classButtons[classNumbers].disabled = true;
    if (classButtons[classNumbers].disabled) classButtons[classNumbers].classList.remove(`classButton${classNumbers}bg`);
}

var racePickingEvent = function (pickedRace) {
    for (let i = 1; i <= 26; i++) {
        raceButtons[i].classList.remove("buttonHorde");
        raceButtons[i].classList.remove("buttonAlliance");
    }
    (pickedRace < 14) ? raceButtons[pickedRace].classList.add("buttonHorde"):raceButtons[pickedRace].classList.add("buttonAlliance");
    //ENABLING CLASSES
    for (let i = 1; i <= 13; i++) {
        classButtons[i].disabled = false;
    }
    switch (pickedRace) {
        case 1://ORC
        case 6://GOBLIN
        case 10://VULPERA
            var classesToDisable = [8, 10, 12, 13];
            break;
        case 2://TAUREN
        case 9://ZANDALARI
            var classesToDisable = [11, 12, 13];
            break;
        case 3://TROLL
            var classesToDisable = [10, 12, 13];
            break;
        case 4://UNDEAD
        case 12://NIGHTBORNE
        case 17://GNOME
        case 21://VOID ELF
        case 22://MECHAGNOME
            var classesToDisable = [8, 9, 10, 12, 13];
            break;
        case 5://BELF
            var classesToDisable = [8, 9, 13];
            break;
        case 7://PANDAREN HORDE
        case 11://MAGHAR
        case 20://PANDAREN ALLIANCE
            var classesToDisable = [8, 10, 11, 12, 13];
            break;
        case 8://HMT
        case 23://KULTIRAN
            var classesToDisable = [10, 11, 12, 13];
            break;
        case 13 ://DRACTHYR HORDE
        case 26 ://DRACTHYR ALLIANCE
            var classesToDisable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            break;
        case 14://HUMAN
            var classesToDisable = [8, 9, 12, 13]; 
            break;
        case 15://NELF
            var classesToDisable = [9, 10, 11, 13]; 
            break;
        case 16://DWARF
        case 24://DARKIRON
            var classesToDisable = [8, 12, 13]; 
            break;
        case 18://DRAENEI
            var classesToDisable = [8, 11, 12, 13]; 
            break;
        case 19://WORGEN
            var classesToDisable = [9, 10, 12, 13]; 
            break;
        case 25://LFD
            var classesToDisable = [8, 9, 11, 12, 13]; 
    }
    classesToDisable.forEach(disableClass);
}

//CLASS BUTTONS STYLE
const classButtons = [];
for (let i = 1; i <= 13; i++) {
    classButtons[i] = document.querySelector(`.classButton${i}`);
    classButtons[i].disabled = true;
}

classButtons.forEach(function (value, index) {
    value.addEventListener("click", function () {
        classPickingEvent(index);
    });
})

var classPickingEvent = function (pickedClass) {
    for (let i = 1; i <= 13; i++) {
        classButtons[i].classList.remove(`classButton${i}bg`);
    }
    classButtons[pickedClass].classList.add(`classButton${pickedClass}bg`);
}