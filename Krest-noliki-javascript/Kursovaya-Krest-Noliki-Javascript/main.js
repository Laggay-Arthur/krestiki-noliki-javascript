var ceil = document.getElementsByClassName("game-item"),
  reset = document.getElementById("reset-game"),
  message = document.getElementById("message"),
  comp = document.getElementById("comp");
friend = document.getElementById("friend");
player = "X";
stepCount = 0;
var who = true;
winCombinations = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9]
],
  dataX = [],
  dataO = [];

for (var i = 0; i < ceil.length; i++) {
  ceil[i].addEventListener("click", currentStep);
}

function currentStep() {
  var num = +this.getAttribute("data-ceil");
  if (!this.textContent) {
    this.innerText = player;
    player === "X"
      ? dataX.push(num) && this.classList.add("x")
      : dataO.push(num) && this.classList.add("o");
    if (
      (dataO.length > 2 || dataX.length > 2) &&
      (checkWin(dataO, num) || checkWin(dataX, num))
    ) {
      for (var i = 0; i < ceil.length; i++) {
        ceil[i].removeEventListener("click", currentStep);
      }

      alert("Победил игрок " + player);
      return (message.innerText = "Победил игрок " + player);

    }
    stepCount++;
    changePlayer();
    //stepCount++;
    stepCount === 9
      ? (message.innerText = "Ничья")
      : (message.innerText = "Ходит игрок " + player);
  }
}

function changePlayer() {
  if (player === "X") {
    (player = "O");
    if (who == false) {
      if (stepCount < 10) { compstep(); }
      //alert('Против вас играет компьютер');
    }
  }
  else {
    (player = "X")
  };
}

reset.addEventListener("click", function () {
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].innerText = "";
  }
  dataO = [];
  dataX = [];
  player = "X";
  stepCount = 0;
  message.innerText = "Ходит игрок " + player;
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener("click", currentStep);
    //ceil[i].className("game0-item");
    ceil[i].classList.remove("x", "o");

  }
});

function checkWin(arr, number) {
  for (var w = 0, wLen = winCombinations.length; w < wLen; w++) {
    var someWinArr = winCombinations[w],
      count = 0;
    if (someWinArr.indexOf(number) !== -1) {
      for (var k = 0, kLen = someWinArr.length; k < kLen; k++) {
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++;
          if (count === 3) {


            return true;
          }
        }
      }
      count = 0;
    }
  }
}
comp.addEventListener("click", getcomp);
function getcomp() {
  who = false;
}
function getfriend() {
  who = true;
}
friend.addEventListener("click", getfriend);
function compstep() {
  var array3 = dataX.concat(dataO);
  if (stepCount < 10) {
    while (1) {
      var myrandom = getRandomInRange(1, 9);
      if (array3.indexOf(myrandom) == -1) {
        switch (myrandom) {
          case 1: document.getElementById('1').click(); break;
          case 2: document.getElementById('2').click(); break;
          case 3: document.getElementById('3').click(); break;
          case 4: document.getElementById('4').click(); break;
          case 5: document.getElementById('5').click(); break;
          case 6: document.getElementById('6').click(); break;
          case 7: document.getElementById('7').click(); break;
          case 8: document.getElementById('8').click(); break;
          case 9: document.getElementById('9').click(); break;
        }


        return;
        //document.getElementById('').click();
      } continue;

    }
    //var c1 = document.getElementById('c1'); 
    //document.querySelectorAll( 'div[data-ceil="6"]' ).click();
  }
}
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
