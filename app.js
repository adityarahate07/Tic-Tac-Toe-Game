// Select Elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // O starts first

// Winning Patterns
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Reset Game Function
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// Add Click Event to Boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

// Disable Boxes
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// Enable Boxes
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// Show Winner
const showWinner = (winner) => {
  msg.innerText = "Congratulations! Winner is " + winner;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Check Winner
const checkWinner = () => {
  for (let pattern of winPatterns) {

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return;
      }
    }
  }
};

// Button Events
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);



