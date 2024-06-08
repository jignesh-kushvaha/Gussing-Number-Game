let guess = document.getElementById("myNumber");
let guessbtn = document.getElementById("guessbtn");
let output = document.getElementById("output");
let attemptLeft = document.getElementById("attempt-left");

let minNum = 1;
let maxNum = 10;

let randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(randomNumber);

let guessCount = 0;
let result = false;

guessbtn.onclick = function () {
  
    if (guess.value < minNum || guess.value > maxNum) {
      guessCount++;
      output.textContent = `${guess.value} is out of range`;
    } else {
      guessCount++;
      if (guess.value == randomNumber) {
        output.textContent = `You guessed it in ${guessCount} attempt 👏👏`;
        gameCompleted();
      } else if (guess.value < randomNumber) {
        output.textContent = `${guess.value} is lower than the number`;
        attemptLeft.textContent = `You have ${3 - guessCount} attempts left`;
      } else if (guess.value > randomNumber) {
        output.textContent = `${guess.value} is higher than the number`;
        attemptLeft.textContent = `You have ${3 - guessCount} attempts left`;
      }
    }
    if (guessCount == 3) {
        output.textContent = `Game Over 😵‍💫`;
        gameCompleted();
      }
  };

function gameCompleted() {
  guess.disabled = true;
  guessbtn.disabled = true;
  guess.value = "";
  guessCount = 0;
  attemptLeft.textContent = `Guess Number = ${randomNumber}`;
  let reloadbtn = document.createElement("button");
  reloadbtn.type = "button";
  reloadbtn.textContent = "New Game";
  reloadbtn.className = "reload-btn";

  reloadbtn.onclick = function () {
    window.location.reload();
  };

  attemptLeft.appendChild(reloadbtn);
}
