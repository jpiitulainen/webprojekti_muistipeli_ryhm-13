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

/*
Lähteet:

W3Schools - querySelector()
https://www.w3schools.com/jsref/met_document_queryselector.asp

W3Schools - Math.random()
https://www.w3schools.com/jsref/jsref_random.asp

JavaScript.info - Functions
https://javascript.info/function-basics

JavaScript.info - setTimeout and setInterval
https://javascript.info/settimeout-setinterval

OpenAI - ChatGPT (GPT-5) Tekoälyä käytetty korjaamaan koodia ja selittämään sitä.
