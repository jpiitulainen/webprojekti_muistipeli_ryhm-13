let seconds = 0;
let moves = 0;

setInterval(() => {
  seconds++;
  document.getElementById("timer").textContent = seconds + "s";
}, 1000);

function updateMoves() {
  moves++;
  document.getElementById("moves").textContent = moves;
}

/*
Lähteet:
W3Schools - JavaScript Timing Events
https://www.w3schools.com/js/js_timing.asp

JavaScript.info - setTimeout and setInterval
https://javascript.info/settimeout-setinterval

OpenAI ChatGPT (GPT-5) Tekoälyä käytetty koodin korjaamiseen ja selittämiseen.
*/
