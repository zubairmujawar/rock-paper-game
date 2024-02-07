const choices = document.querySelectorAll(".choices");

let userScore = 0;
let compScore = 0;
// Genrate computer choice
const compChoice = () => {
  const values = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  let Compvalue = values[index];
  console.log("Computer Choice", Compvalue);
};
// Genrate user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    console.log("user Choice is", userChoice); // new
    compChoice();
    PlayGame();
    return userChoice;
  });
});
// check the wining conditions
const PlayGame = (userChoice) => {
  if (compChoice === userChoice) {
    // game draw
    drawGame();
  } else {
    let userWins = false;
    if (userChoice === "rock") {
      // paper, scissors
      userWins = compChoice === "paper" ? false : true;

    } else if (userChoice === "paper") {
      // rock, paper
      userWins = compChoice === "scissors" ? false : true;

    } else {
      // paper , scossors
      userWins = compChoice === "rock" ? false : true;
    }
    showWiner(userWins);
  }
};

// if game was draw
const drawGame = () => {
  console.log("The game was draw");
};

const showWiner = (userWins) => {
  console.log("userWins", userWins);
  if (userWins) {
    console.log("User Wins!");
  } else {
    console.log("User Lose!");
  }
};
