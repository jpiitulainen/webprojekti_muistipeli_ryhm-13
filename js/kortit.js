document.addEventListener("DOMContentLoaded", () => {

const game = document.getElementById("game");
const nameBox = document.getElementById("fish-name");

const fish = [
  { name: "siika", image: "images/siika.webp" },
  { name: "pasuri", image: "images/Pasuri.png" },
  { name: "vimpa", image: "images/Vimpa.png" },
  { name: "sulkava", image: "images/Sulkava.png" },
  { name: "sorva", image: "images/Sorva.png" },
  { name: "kiiski", image: "images/Kiiski.jpg" },
  { name: "salakka", image: "images/Salakka.png" },
  { name: "säyne", image: "images/sayne.jpg" },
  { name: "made", image: "images/Made.png" },
  { name: "taimen", image: "images/Taimen.jpg" },
  { name: "nieriä", image: "images/Nieriä.jpg" },
  { name: "harjus", image: "images/Harjus.jpg" },
  { name: "ankerias", image: "images/Ankerias.jpg" },
  { name: "turska", image: "images/Turska.jpg" },
  { name: "särki", image: "images/Särki.png" },
  { name: "kirjolohi", image: "images/Kirjolohi.jpg" },
  { name: "muikku", image: "images/Muikku.jpg" },
  { name: "ahven", image: "images/Ahven.png" }
];

let deck = [...fish, ...fish].map((card, index) => ({
  ...card,
  backImage: "images/kortti.png",
  id: index
}));

deck.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
const totalPairs = fish.length;

deck.forEach(card => {
  const el = document.createElement("div");
  el.classList.add("card");
  el.dataset.name = card.name;

  el.innerHTML = `
    <div class="inner">
      <div class="front">
        <img src="${card.image}">
      </div>
      <div class="back">
        <img src="${card.backImage}">
      </div>
    </div>
  `;

  el.addEventListener("click", () => {
    if (lockBoard) return;
    if (el.classList.contains("flipped")) return;
    if (el.classList.contains("matched")) return;

    el.classList.add("flipped");
    nameBox.textContent = card.name;

    if (!firstCard) {
      firstCard = el;
      return;
    }

    secondCard = el;
    updateMoves();
    lockBoard = true;

    if (
      firstCard.dataset.name === secondCard.dataset.name &&
      firstCard !== secondCard
    ) {
      matchedPairs++;

      firstCard.classList.add("matched");
      secondCard.classList.add("matched");

      if (matchedPairs === totalPairs) {
        showWinScreen();
      }

      firstCard = null;
      secondCard = null;
      lockBoard = false;

    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");

        nameBox.textContent = "";

        firstCard = null;
        secondCard = null;
        lockBoard = false;
      }, 800);
    }
  });

  game.appendChild(el);
});

});
