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

eggButton.addEventListener("click", () => {
  eggClicks += 1;

  if (eggClicks === 1) {
    eggButton.textContent = "🪺";
    eggStatus.textContent = "A crack appears... click again!";
  } else {
    eggButton.textContent = "🐣";
    eggStatus.textContent = "Surprise! A chick popped out of the egg.";
  }
});

boxButton.addEventListener("click", () => {
  boxButton.textContent = "🎉";
  boxStatus.textContent = "You found: a golden bunny token!";
});

cardButton.addEventListener("click", () => {
  cardButton.textContent = "📬";
  cardStatus.textContent = "Happy Easter! Secret surprise: You get an extra life in the hunt.";
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
    huntStatus.textContent = `${bunniesFound} / 3 bunnies found.`;

    if (bunniesFound === bunnyButtons.length) {
      huntReward.classList.remove("hidden");
    }
  });
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selection = quizForm.treat.value;
  quizResult.textContent = `You picked ${selection}, but surprise—you've been chosen as the Easter Bunny's assistant! 🐰✨`;
});
