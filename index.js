const choices = document.querySelectorAll(".choices");
const message = document.querySelector("#msg");
const UserScore = document.querySelector("#UserScore");
const CompScore = document.querySelector("#CompScore");
const compMsg = document.querySelector("#compMsg");
let userScore = 0;
let compScore = 0;
// Genrate computer choice
const compChoice = () => {
  const values = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  let Compvalue = values[index];
  return Compvalue;
};
// Genrate user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let computerChoice = compChoice();
    let userChoice = choice.getAttribute("id");
    compMsg.innerText = `Computer Chose ${computerChoice}`;
    PlayGame(userChoice, computerChoice);
  });
});
// check the wining conditions
const PlayGame = (userChoice, computerChoice) => {
  // console.log("Computer Choice", computerChoice);
  // console.log("user Choice", userChoice);
  if (computerChoice === userChoice) {
    // game draw
    drawGame();
  } else {
    let userWins = true;
    if (userChoice === "rock") {
      // paper, scissors
      userWins = computerChoice === "paper" ? false : true;
      // console.log(userWins, "userWins")
    } else if (userChoice === "paper") {
      // rock, paper
      userWins = computerChoice === "scissors" ? false : true;
      // console.log(userWins, "userWins");
    } else {
      // paper , scossors
      userWins = computerChoice === "rock" ? false : true;
      // console.log(userWins, "userWins");
    }
    showWiner(userWins);
  }
};

// if game was draw
const drawGame = () => {
  // console.log("The game was draw");
  message.innerText = "The game was draw";
};

const showWiner = (userWins) => {
  // console.log("userWins", userWins);
  if (userWins) {
    // console.log("User Wins!");
    message.innerText = "You Wins!";
    userScore++;
    UserScore.innerText = userScore;
  } else {
    // console.log("User Lose!");
    message.innerText = "You lose!";
    compScore++;
    CompScore.innerText = compScore;
  }
};
