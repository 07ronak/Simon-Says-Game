let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["green", "red", "yellow", "blue"];

let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");
let main = document.querySelector("main");

//step 1: pressing any key starts the game
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

//step 2: Random button will flash and level will get updated.
function firstFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 150);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;
  let randomIndex = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIndex];
  randomButton = document.querySelector(`.${randomColor}`);
  firstFlash(randomButton);
  gameSeq.push(randomColor);
}

//step 3: Adding Event Listener on Buttons
function btnPress() {
  let pressedButton = this;
  userFlash(pressedButton);
  let userColor = pressedButton.getAttribute("id");
  //console.log(userColor);
  userSeq.push(userColor);
  checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

//step 4: matching sequence
function checkSeq(index) {
  if (userSeq[index] === gameSeq[index]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerText = `Game over! You reached till Level ${level}.\n Press any key to start`;
    /* document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150); */
    reset();
  }
}

//step 5: Reset
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  gameOver();
}

function gameOver() {
  main.classList.add("gameover");
  h1.classList.add("gameover");
  h3.classList.add("gameover");
  setTimeout(function () {
    main.classList.remove("gameover");
    h1.classList.remove("gameover");
    h3.classList.remove("gameover");
  }, 300);
}
