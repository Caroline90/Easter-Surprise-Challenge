const eggButton = document.getElementById("eggButton");
const eggStatus = document.getElementById("eggStatus");
const boxButton = document.getElementById("boxButton");
const boxStatus = document.getElementById("boxStatus");
const cardButton = document.getElementById("cardButton");
const cardStatus = document.getElementById("cardStatus");
const huntStatus = document.getElementById("huntStatus");
const huntReward = document.getElementById("huntReward");
const bunnyButtons = document.querySelectorAll(".hidden-bunny");
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

let eggClicks = 0;
let bunniesFound = 0;

const gifts = [
  "a glittery carrot crown 👑🥕",
  "a chocolate treasure coin 🍫🪙",
  "a spring confetti popper 🎊",
  "a bunny booster charm 🐇✨"
];

eggButton.addEventListener("click", () => {
  eggClicks += 1;

  if (eggClicks === 1) {
    eggButton.textContent = "🥚";
    eggStatus.textContent = "Tiny cracks appeared... keep going!";
  } else if (eggClicks === 2) {
    eggButton.textContent = "🪺";
    eggStatus.textContent = "The shell is splitting open!";
  } else {
    eggButton.textContent = "🐣";
    eggStatus.textContent = "It hatched! Surprise chick unlocked!";
  }
});

boxButton.addEventListener("click", () => {
  const gift = gifts[Math.floor(Math.random() * gifts.length)];
  boxButton.textContent = "🎁";
  boxStatus.textContent = `You found ${gift}`;
});

cardButton.addEventListener("click", () => {
  cardButton.textContent = "💖";
  cardStatus.textContent = "Happy Easter! Secret surprise: +1 lucky hop on your next adventure.";
});

bunnyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.found === "true") {
      return;
    }

    button.dataset.found = "true";
    button.style.opacity = "1";
    button.textContent = "✅";
    bunniesFound += 1;
    huntStatus.textContent = `${bunniesFound} / ${bunnyButtons.length} bunnies found.`;

    if (bunniesFound === bunnyButtons.length) {
      huntReward.classList.remove("hidden");
    }
  });
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selection = quizForm.treat.value;
  quizResult.textContent = `You chose ${selection}... unexpected twist: you're today's Head Bunny Detective! 🕵️🐰`;
});
