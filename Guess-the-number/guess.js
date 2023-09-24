"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no valid input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ Enter Number!";
    displayMessage("⛔ Enter Number!");
  }

  // when palyer wins
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    document.querySelector(".number").style.fontSize = "9rem";

    //highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }

  // when guess is too high

  //when guess it wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high" : "📈 Too low";
      displayMessage(guess > secretNumber ? "📈 Too high" : "📈 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   "💣 You Lost the game! 💥";
      displayMessage("💣 You Lost the game! 💥");
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "💣 You Lost the game! 💥";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }

  // //when guess s too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💣 You Lose! 💥";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

const againbtn = document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    const guess = Number(document.querySelector(".guess"));
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").style.fontSize = "6rem";
    document.querySelector(".number").textContent = "?";

    document.querySelector(".check");
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
  });
