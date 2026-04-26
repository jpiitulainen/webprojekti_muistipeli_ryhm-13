function calculateScore() {
  return Math.max(1000 - (moves * 10 + seconds * 2), 0);
}

function showWinScreen() {
  const winScreen = document.getElementById("win-screen");
  winScreen.classList.remove("hidden");

  document.getElementById("final-time").textContent = seconds + "s";
  document.getElementById("final-moves").textContent = moves;
  document.getElementById("final-score").textContent = calculateScore();
}

function resetGameUI() {
  document.getElementById("fish-name").textContent = "";
}

/*
Lähteet:
W3Schools - JavaScript Functions
https://www.w3schools.com/js/js_functions.asp

W3Schools - JavaScript HTML DOM Document
https://www.w3schools.com/js/js_htmldom_document.asp

JavaScript.info - Functions
https://javascript.info/function-basics

OpenAI - ChatGPT (GPT-5) Tekoälyä käytetty koodin korjaamiseen ja selittämiseen.
*/
