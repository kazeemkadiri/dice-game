(function () {
  let player1Dice = 0;
  let player2Dice = 0;

  const h1Selector = document.querySelector("h1");

  // This function generates a random number between 1 and 6
  const generateRandomNumber = (maxDiceValue) => {
    return Math.ceil(Math.random() * maxDiceValue);
  };

  const setDiceImage = (playerNumber, playerDiceNumber) => {
    document.querySelector(
      `img.img${playerNumber}`
    ).src = `images/dice${playerDiceNumber}.png`;
  };

  // Add listener for click event on h1 tag to refresh  dicee roll
  h1Selector.addEventListener("click", (e) => {
    player1DiceNumber = generateRandomNumber(6);
    player2DiceNumber = generateRandomNumber(6);

    // Set the dice image for each player

    // For player1
    setDiceImage(1, player1DiceNumber);

    // For player2
    setDiceImage(2, player2DiceNumber);

    //Display winner of the game in the h1 tag
    let winner = "Draw";

    if (player1DiceNumber > player2DiceNumber) {
      winner = "1";
    } else if (player2DiceNumber > player1DiceNumber) {
      winner = "2";
    }

    if (winner !== "Draw") {
      h1Selector.innerHTML = `<div class="d-flex"><span>${
        winner === "1" ? "🏅 " : ""
      } Player ${winner} Wins!</span> ${winner === "2" ? " 🏅" : ""}</div>`;
    } else {
      h1Selector.innerHTML = `<div class="d-flex">Draw</div>`;
    }
  });
})();
