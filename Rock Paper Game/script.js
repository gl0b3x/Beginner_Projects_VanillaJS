var playerwin = 0,
  pcwin = 0,
  draw = 0;

const pickRock = document.getElementById("Rock");
const pickPaper = document.getElementById("Paper");
const pickScissors = document.getElementById("Scissors");
const resetButton = document.getElementById("reset");
const computerOptions = ["Rock", "Paper", "Scissors"];
var playerChoice;

reset.addEventListener("click", function() {
    playerwin = 0;
    pcwin = 0;
    draw = 0;
    document.getElementById("yourscore").innerHTML = playerwin;
    document.getElementById("pcscore").innerHTML = pcwin;
    document.getElementById("drawscore").innerHTML = draw;
})

pickRock.addEventListener("click", function () {
  playerChoice = "Rock";
  winner();
});

pickPaper.addEventListener("click", function () {
  playerChoice = "Paper";
  winner();
});

pickScissors.addEventListener("click", function () {
  playerChoice = "Scissors";
  winner();
});

function winner() {
  var choiceNumber = Math.floor(Math.random() * 3);
  var computerChoice = computerOptions[choiceNumber];
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  whatplayerpick(playerChoice, "userpick");
  whatplayerpick(computerChoice, "pcpick");
  if (playerChoice === computerChoice) {
    draw++;
    document.getElementById("sms").innerText = "Draw!";
    document.getElementById("drawscore").innerText = draw;
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      playerwin++;
    document.getElementById("sms").innerText = "Player win!";
    document.getElementById("yourscore").innerText = playerwin;
    } else if (computerChoice === "scissors") {
      pcwin++;
      document.getElementById("sms").innerText = "Pc win!";   
    document.getElementById("pcscore").innerText = pcwin;
    }
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      pcwin++;
      document.getElementById("sms").innerText = "Pc win!";  
    document.getElementById("pcscore").innerText = pcwin;
    } else if (computerChoice === "scissors") {
      playerwin++;
    document.getElementById("sms").innerText = "Player win!";
    document.getElementById("yourscore").innerText = playerwin;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      playerwin++;
    document.getElementById("sms").innerText = "Player win!";
    document.getElementById("yourscore").innerText = playerwin;
    } else if (computerChoice === "rock") {
        pcwin++;
    document.getElementById("sms").innerText = "Pc win!";    
    document.getElementById("pcscore").innerText = pcwin;
    }
  }
}


function whatplayerpick(choice, where) {
  if(choice === "paper"){
    document.getElementById(where).style.backgroundImage = "url(\"images/paper.png\")"
    document.getElementById(where).style.backgroundSize = "contain";
    document.getElementById(where).style.backgroundRepeat = "no-repeat";
  }
  else if(choice === "rock"){
    document.getElementById(where).style.backgroundImage = "url(\"images/rock.png\")"
    document.getElementById(where).style.backgroundSize = "contain";
    document.getElementById(where).style.backgroundRepeat = "no-repeat";
  }
  else if(choice === "scissors"){
    document.getElementById(where).style.backgroundImage = "url(\"images/scissors.png\")"
    document.getElementById(where).style.backgroundSize = "contain";
    document.getElementById(where).style.backgroundRepeat = "no-repeat";
  }
}