function showWinScreen() {
  const winScreen = document.getElementById("win-screen");
  winScreen.classList.remove("hidden");
}

function resetGameUI() {
  document.getElementById("fish-name").textContent = "";
}
