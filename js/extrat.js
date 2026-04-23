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
