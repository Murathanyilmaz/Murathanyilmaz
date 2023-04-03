"use strict"
const words = ["KALEM", "PİLOT", "ÇAYCI", "SÜTLÜ", "PRUVA", "KATİP", "ASLAN", "ÇUBUK", "TOPAL", "YALIN", "YILKI", "ZEBRA", "ÇAVUŞ", "ORMAN", "HAVUÇ", "ŞEBEK", "KERİZ", "BARZO", "BEBEK", "BEŞİR", "BEŞİK", "KAVUN", "ÇİLEK", "BEŞER", "GÜMÜŞ", "ALTIN", "BRONZ", "SAVAŞ"];
const wordNumber = Math.trunc(Math.random() * words.length);
const wordOfTheDay = words[wordNumber];
const WOTD = [];
const GUESS = [];
const FLAGGED = []
for (let i = 0; i < 5; i++) {
    WOTD[i] = wordOfTheDay.substring(i, i + 1);
}

for (let i = 0; i < 5; i++) {
    if (WOTD.includes(GUESS[i])) {
        if (WOTD[i] == GUESS[i] && FLAGGED[i] == false) {
            //Background green
            //point++
            FLAGGED[i] == true
        }
    }
    else {
        //Background Gray
    }
}