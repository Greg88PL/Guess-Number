const randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;

const game = () => {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Twoje liczby: ";
  }
  guesses.textContent += userGuess + " ";
  if (userGuess === randomNumber) {
    lastResult.textContent = "Brawo! Odgadłeś liczbę!";
    lastResult.style.backgroundColor = "green";
    document.body.style.backgroundColor = "yellowgreen";
    lowOrHi.textContent = "";
    guessSubmit.disabled = true;
    guessField.disabled = true;
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!KONIEC GRY - PRZEGRAŁEŚ!!!";
    document.body.style.backgroundColor = "tomato";
    lowOrHi.textContent = "";
    guessSubmit.disabled = true;
    guessField.disabled = true;
  } else {
    lastResult.textContent = "Niestety nie zgadłeś! Próbuj dalej!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Liczba jest większa!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Liczba jest mniejsza!";
    }
  }
  guessCount++;
  guessField.value = "";
};

const enterKey = (e) => {
  if (e.key === "Enter") {
    game();
  }
};

guessSubmit.addEventListener("click", game);
guessField.addEventListener("keyup", enterKey);
