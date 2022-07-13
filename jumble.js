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

function endgame(sonuc) {
    letterLocation = 7;
    const bildir = sonuc ? "Tebrikler kazandınız!" : "Kaybettiniz :(";
    alert(`${bildir}
Doğru kelime: ${wordOfTheDay}`);
    endJumble = true;
}

for (let i = 0; i < buttons.length; i++) {
    tiklanan[i] = "#button" + buttons[i];
    document.querySelector(tiklanan[i]).addEventListener("click", () => {
        if (letterLocation <= 5) {
            document.querySelector(`#harf${letterLocation}`).textContent = buttons[i];
            letterLocation++;
        }
        document.querySelector(tiklanan[i]).blur();
    })
}

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
                document.querySelector(`#button${mevcut}`).style.backgroundColor = "gray";
                if (!wordOfTheDaySliced.includes(mevcut)) {
                    flags[i] = 0;
                }
                else {
                    if (wordOfTheDaySliced[i] == mevcut) {
                        flags[i] = 2;
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
                flags[i] == 0 ? document.querySelector(`#harf${i + 1}`).style.backgroundColor = "#d8d8d8" : false;
                flags[i] == 1 ? document.querySelector(`#harf${i + 1}`).style.backgroundColor = "orange" : false;
                flags[i] == 2 ? document.querySelector(`#harf${i + 1}`).style.backgroundColor = "#0b812f" : false;
            }
            for (let i = -25; i <= 30; i++) {
                if (document.querySelector(`#harf${i}`)) {
                    document.querySelector(`#harf${i}`).id = `harf${i - 5}`;
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