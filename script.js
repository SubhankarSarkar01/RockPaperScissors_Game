let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uesrScorenew = document.querySelector("#user-score");
const compScorenew = document.querySelector("#comp-score");

const gencompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play Again!";
  msg.style.backgroundColor = "#081b31";
  console.log("Game was Draw. Play Again!");
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    uesrScorenew.innerText = userScore;
    console.log("user win");
  } else {
    compScore++;
    msg.innerText = `You lose ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScorenew.innerText = compScore;
    console.log("computer win!");
  }
};

const playGame = (userChoice) => {
  console.log("userChoice = ", userChoice);
  const compChoice = gencompChoice();
  console.log("computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper,scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? true : false;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked",userChoice);
    playGame(userChoice);
  });
});
