const secretNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 10;
let remainingAttempts = maxAttempts;
let gameOver = false;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attempts = document.getElementById('attempts');

function endGame(finalMessage) {
  message.textContent = finalMessage;
  guessInput.disabled = true;
  guessButton.disabled = true;
  gameOver = true;
}

guessButton.addEventListener('click', () => {
  if (gameOver) return;

  const guess = parseInt(guessInput.value, 10);

  if (Number.isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Digite um número válido entre 1 e 100.';
    return;
  }

  remainingAttempts -= 1;

  if (guess === secretNumber) {
    endGame('Você acertou!');
  } else if (remainingAttempts === 0) {
    endGame(`Você perdeu! O número secreto era ${secretNumber}.`);
  } else if (guess < secretNumber) {
    message.textContent = 'O número secreto é maior.';
  } else {
    message.textContent = 'O número secreto é menor.';
  }

  attempts.textContent = `Tentativas restantes: ${remainingAttempts}`;
  guessInput.value = '';
  guessInput.focus();
});
