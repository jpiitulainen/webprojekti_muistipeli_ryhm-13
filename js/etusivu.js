const fish = document.querySelector(".fish");

function moveFish() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 50 - 25;

  fish.style.transform = `translate(${x}px, ${y}px)`;
}

setInterval(moveFish, 2000);
