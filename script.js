const eggButtons = document.querySelectorAll('.egg-btn');
const huntStatus = document.getElementById('huntStatus');
const clueList = document.getElementById('clueList');
const finalCard = document.getElementById('finalCard');
const finalHint = document.getElementById('finalHint');
const finalEggButton = document.getElementById('finalEggButton');
const finalReveal = document.getElementById('finalReveal');
const confetti = document.getElementById('confetti');
const bunnyStatus = document.getElementById('bunnyStatus');

const clues = [
  '🗝️ Clue 1: Look for joy in tiny moments.',
  '🌸 Clue 2: Surprises bloom after curiosity.',
  '⭐ Clue 3: The final egg opens for persistent explorers.'
];

let cluesFound = 0;
let bunnyAwake = false;

eggButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button.dataset.found === 'true') {
      return;
    }

    button.dataset.found = 'true';
    button.textContent = '🐣';
    cluesFound += 1;

    const clue = document.createElement('li');
    clue.textContent = clues[index];
    clueList.appendChild(clue);

    huntStatus.textContent = `Clues found: ${cluesFound} / ${eggButtons.length}`;

    if (cluesFound === eggButtons.length) {
      finalCard.classList.remove('locked');
      finalHint.textContent = 'All clues solved! Tap the golden egg for your reveal.';
      finalEggButton.disabled = false;
    }
  });
});

finalEggButton.addEventListener('click', () => {
  finalEggButton.textContent = '🐰✨';
  finalReveal.classList.remove('hidden');
  confetti.classList.remove('hidden');
  confetti.textContent = '🎊 ✨ 🎉 ✨ 🎊';
});

window.addEventListener('scroll', () => {
  if (bunnyAwake) {
    return;
  }

  const scrollDepth = (window.scrollY + window.innerHeight) / document.body.scrollHeight;

  if (scrollDepth >= 0.55) {
    bunnyAwake = true;
    bunnyStatus.classList.add('bunny-awake');
    bunnyStatus.textContent = '🐰 Bunny guide awake! Hidden surprise triggered by scroll.';
  }
});
