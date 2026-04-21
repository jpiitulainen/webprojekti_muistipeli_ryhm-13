const fish = document.querySelector(".fish");

function moveFish() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 50 - 25;
  const rotate = Math.random() * 20 - 10;

  fish.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
}

setInterval(moveFish, 2000);

window.onload = () => {
  document.body.style.opacity = "1";
};
