"use strict"
const words = ["KALEM", "PİLOT", "ÇAYCI", "SÜTLÜ", "PRUVA", "KATİP", "ASLAN", "ÇUBUK", "TOPAL", "YALIN", "YILKI", "ZEBRA", "ÇAVUŞ", "ORMAN", "HAVUÇ", "ŞEBEK", "KERİZ", "BARZO", "BEBEK", "BEŞİR", "BEŞİK", "KAVUN", "ÇİLEK", "BEŞER", "GÜMÜŞ", "ALTIN", "BRONZ", "SAVAŞ"];
const allowed = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "Q", "R", "S", "Ş", "T", "U", "Ü", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "q", "r", "s", "ş", "t", "u", "ü", "v", "w", "x", "y", "z"];
const buttons = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "Q", "R", "S", "Ş", "T", "U", "Ü", "V", "W", "X", "Y", "Z"];
let tiklanan = [];
const wordNumber = Math.trunc(Math.random() * words.length);
const wordOfTheDay = words[wordNumber];
const wordOfTheDaySliced = [];
const flags = [];
const flaggedFor = [];
let endJumble = false;
let sayac = 6;
let letterLocation = 1;
let puan = 0;

function endgame(sonuc) {
    letterLocation = 7;
    const bildir = sonuc ? "Tebrikler kazandınız!" : "Kaybettiniz :(";
    alert(`${bildir}
Doğru kelime: ${wordOfTheDay}`);
    endJumble = true;
}

for (let i = 0; i < buttons.length; i++) {
    tiklanan[i] = "button" + buttons[i];
    document.getElementById(tiklanan[i]).addEventListener("click", () => {
        if (letterLocation <= 5) {
            document.getElementById(`harf${letterLocation}`).textContent = buttons[i];
            letterLocation++;
        }
        document.getElementById(tiklanan[i]).blur();
    })
}
document.getElementById("buttonBackspace").addEventListener("click", () => {
    letterLocation--;
    document.querySelector(`#harf${letterLocation}`).textContent = "";
    document.querySelector(tiklanan[i]).blur();
})


document.addEventListener('keydown', (event) => {
    if (endJumble == false && (allowed.includes(event.key) || event.key == "Backspace" || event.key == "Enter")) {
        if (event.code == "Backspace" && letterLocation > 1) {
            letterLocation--;
            document.querySelector(`#harf${letterLocation}`).textContent = "";
        }
        else if (event.key !== "Backspace" && event.key !== "Enter" && letterLocation <= 5) {
            document.querySelector(`#harf${letterLocation}`).textContent = event.key.toLocaleUpperCase();
            letterLocation++;
        }
        else if (letterLocation == 6 && event.code == "Enter") {
            for (let i = 0; i < 5; i++) {
                wordOfTheDaySliced[i] = wordOfTheDay.substring(i, i + 1);
            }
            for (let i = 0; i < 5; i++) {
                let mevcut = document.querySelector(`#harf${i + 1}`).textContent;
                if (!wordOfTheDaySliced.includes(mevcut)) {
                    flags[i] = 0;
                    flaggedFor[i] = mevcut;
                }
                else {
                    if (wordOfTheDaySliced[i] == mevcut) {
                        flags[i] = 2;
                        flaggedFor[i] = mevcut;
                        wordOfTheDaySliced[i] = "?";
                        for (let k = 0; k < 5; k++) {
                            if (flags[k] == 1 && flaggedFor[k] == mevcut) {
                                flags[k] = 0;
                                break;
                            }
                        }
                    }
                    else {
                        flags[i] = 1;
                        flaggedFor[i] = mevcut;
                        for (let k = 0; k < 5; k++) {
                            if (k != i && flags[k] == 1 && flaggedFor[k] == mevcut) {
                                flags[k] = 0;
                                break;
                            }
                        }
                    }
                }
                console.log(flags[i], flaggedFor[i], mevcut)
            }
            for (let i = 0; i < 5; i++) {
                if (flags[i] == 0) {
                    document.getElementById(`harf${i + 1}`).style.backgroundColor = "#d8d8d8";
                    document.getElementById(`button${flaggedFor[i]}`).style.backgroundColor = "gray";
                }
                else if (flags[i] == 1) {
                    document.getElementById(`harf${i + 1}`).style.backgroundColor = "orange";
                    document.getElementById(`button${flaggedFor[i]}`).style.backgroundColor = "orange";
                }
                else if (flags[i] == 2) {
                    document.getElementById(`harf${i + 1}`).style.backgroundColor = "#0b812f";
                    document.getElementById(`button${flaggedFor[i]}`).style.backgroundColor = "#0b812f";
                    puan++;
                }
            }
            if (puan == 5) {
                endgame(true);
            }
            puan = 0;
            for (let i = -25; i <= 30; i++) {
                if (document.getElementById(`harf${i}`)) {
                    document.getElementById(`harf${i}`).id = `harf${i - 5}`;
                }
            }
            sayac--
            if (sayac > 0) {
                letterLocation = 1;
            }
            else {
                endgame(false);
            }
        }
    }
})