document.addEventListener("DOMContentLoaded", () => {

const game = document.getElementById("game");
const nameBox = document.getElementById("fish-name");

const fish = [
  { name: "siika", image: "images/Siika1.jpg" },
  { name: "pasuri", image: "images/pasuri1.png" },
  { name: "vimpa", image: "images/Vimpa1.jpg" },
  { name: "sulkava", image: "images/Sulkava1.jpg" },
  { name: "sorva", image: "images/Sorva1.jpg" },
  { name: "kiiski", image: "images/Kiiski1.jpg" },
  { name: "salakka", image: "images/Salakka1.jpg" },
  { name: "säyne", image: "images/Sayne1.jpg" },
  { name: "made", image: "images/made1.jpeg" },
  { name: "taimen", image: "images/taimen1.jpg" },
  { name: "nieriä", image: "images/Nieriä1.jpg" },
  { name: "harjus", image: "images/harjus1.jpg" },
  { name: "ankerias", image: "images/Ankerias1.jpg" },
  { name: "turska", image: "images/turska1.jpg" },
  { name: "särki", image: "images/Särki1.jpg" },
  { name: "kirjolohi", image: "images/kirjolohi1.jpg" },
  { name: "muikku", image: "images/Muikku1.jpg" },
  { name: "ahven", image: "images/Ahven1.jpg" }
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

/*
Lähteet: W3Schools JavaScript Timing Events
https://www.w3schools.com/js/js_arrays.asp

JavaScript.info - setTimeout and setInterval
https://javascript.info/settimeout-setinterval

W3Schools - JavaScript Array Sort
https://www.w3schools.com/js/js_array_sort.asp

JavaScript.info - DOMContentLoaded
https://javascript.info/onload-ondomcontentloaded

OpenAI ChatGPT (GPT-5) - Tekoälyä käytetty koodin korjaamiseen ja selittämiseen.
*/
