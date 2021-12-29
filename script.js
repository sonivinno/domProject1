let num, score, highscore = 0;
function setfunct(data, mess) {
  document.querySelector(data).textContent = mess;
}

function init() {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  setfunct(".score1", 20);
  setfunct("#message", "Start guessing....!");
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".input-type").value = "";
  document.querySelector(".question").style.width = "9rem";
  setfunct(".question", "?");
}

init();

document.querySelector("#checked").addEventListener("click", function () {
  const guessnumber = Number(document.querySelector(".input-type").value);
  console.log(guessnumber, typeof val);

  if (!guessnumber || guessnumber > 20 || guessnumber < 0) {
    setfunct("#message", "INVALID NUMBERS!");
  } else if (guessnumber === num) {
    setfunct("#message", " 🎉 Correct Number!");
    setBodyColor("#2ed164");
    document.querySelector(".question").style.width = "13rem";
    setfunct(".question", num);
    if (score > highscore) {
      highscore = score;
      setfunct(".high-score", highscore);
    }
  } else if (guessnumber > num) {
    setfunct("#message", "TOO HIGH!");
    setfunct(".score1", score);
    score--;
    isGameOver();
  } else {
    setfunct("#message", "Too low!");
    setfunct(".score1", score);
    score--;
    isGameOver();
  }
});

function isGameOver() {
  if (score < 1 || score > 20) {
    setfunct("#message", "GAME OVER!");
    setfunct(".score1", 0);
    setBodyColor("#d1462e");
  }
}

function setBodyColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}
