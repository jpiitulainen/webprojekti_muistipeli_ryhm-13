const fish = [
  { name: "siika", image: "images/siika.webp" },
  { name: "pasuri", image: "images/Pasuri.png" },
  { name: "vimpa", image: "images/Vimpa.png" },
  { name: "sulkava", image: "images/Sulkava.png" },
  { name: "sorva", image: "images/Sorva.png" },
  { name: "kiiski", image: "images/Kiiski.jpg" },
  { name: "salakka", image: "images/Salakka.png" },
  { name: "sayne", image: "images/Sayne.png" },
  { name: "made", image: "images/Made.png" },
  { name: "taimen", image: "images/Taimen.jpg" },
  { name: "nieria", image: "images/Nieriä.jpg" },
  { name: "harjus", image: "images/Harjus.jpg" },
  { name: "ankerias", image: "images/Ankerias.jpg" },
  { name: "turska", image: "images/Turska.jpg" },
  { name: "sarki", image: "images/Särki.png" },
  { name: "kirjolohi", image: "images/Kirjolohi.jpg" },
  { name: "muikku", image: "images/Muikku.jpg" },
  { name: "ahven", image: "images/Ahven.png" }
];

let deck = [...fish, ...fish].map((card, index) => ({
  ...card,
  backImage: "images/kortti.png",
  id: index,
  flipped: false,
  matched: false
}));

deck.forEach(card => {
  const el = document.createElement("div");
  el.classList.add("card");

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
});

console.log(deck);