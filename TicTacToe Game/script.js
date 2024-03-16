let currentplayer = 1;
let currentsign = "x";
let gamewin = 0;
let drawscore = 0;
let winofplayer1 = 0;
let winofplayer2 = 0;

let place1, place2, place3, place4, place5, place6, place7, place8, place9;

function clicked(id) {
    if(currentplayer == 1) {
            document.getElementById(id).innerHTML = "<span class =\" " + currentsign + " \" >" + currentsign + "</span>"
            document.getElementById(id).style.pointerEvents = 'none';
            currentplayer = 2;
            currentsign = "o";
            document.getElementById("info").innerText = "Current Player: " + currentplayer;
            document.getElementById("info1").innerText = "Current sign: " + currentsign;
            checkplace();
            checkwin();
            draw();
        }
    else if(currentplayer == 2) {
            document.getElementById(id).innerHTML = "<span class =\" " + currentsign + " \" >" + currentsign + "</span>"
            document.getElementById(id).style.pointerEvents = 'none';
            currentplayer = 1;
            currentsign = "x";
            document.getElementById("info").innerText = "Current Player: " + currentplayer;
            document.getElementById("info1").innerText = "Current sign: " + currentsign;
            checkplace();
            checkwin();
            draw();
    }
}

function checkplace() {
    place1 = document.getElementById("table1").innerText;
    place2 = document.getElementById("table2").innerText;
    place3 = document.getElementById("table3").innerText;
    place4 = document.getElementById("table4").innerText;
    place5 = document.getElementById("table5").innerText;
    place6 = document.getElementById("table6").innerText;
    place7 = document.getElementById("table7").innerText;
    place8 = document.getElementById("table8").innerText;
    place9 = document.getElementById("table9").innerText;
}

function checkwin() {
    if(place1 == "X" && place2 == "X" && place3 == "X") {
        winofplayer1++;
        document.getElementById("table1").style.borderColor = "#90EE90";
        document.getElementById("table2").style.borderColor = "#90EE90";
        document.getElementById("table3").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place4 == "X" && place5 == "X" && place6 == "X") {
        winofplayer1++;
        document.getElementById("table4").style.borderColor = "#90EE90";
        document.getElementById("table5").style.borderColor = "#90EE90";
        document.getElementById("table6").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place7 == "X" && place8 == "X" && place9 == "X") {
        winofplayer1++;
        document.getElementById("table7").style.borderColor = "#90EE90";
        document.getElementById("table8").style.borderColor = "#90EE90";
        document.getElementById("table9").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place1 == "X" && place4 == "X" && place7 == "X") {
        winofplayer1++;
        document.getElementById("table1").style.borderColor = "#90EE90";
        document.getElementById("table4").style.borderColor = "#90EE90";
        document.getElementById("table7").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place2 == "X" && place5 == "X" && place8 == "X") {
        winofplayer1++;
        document.getElementById("table2").style.borderColor = "#90EE90";
        document.getElementById("table5").style.borderColor = "#90EE90";
        document.getElementById("table8").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place3 == "X" && place6 == "X" && place9 == "X") {
        winofplayer1++;
        document.getElementById("table3").style.borderColor = "#90EE90";
        document.getElementById("table6").style.borderColor = "#90EE90";
        document.getElementById("table9").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place1 == "X" && place5 == "X" && place9 == "X") {
        winofplayer1++;
        document.getElementById("table1").style.borderColor = "#90EE90";
        document.getElementById("table5").style.borderColor = "#90EE90";
        document.getElementById("table9").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place3 == "X" && place5 == "X" && place7 == "X") {
        winofplayer1++;
        document.getElementById("table3").style.borderColor = "#90EE90";
        document.getElementById("table5").style.borderColor = "#90EE90";
        document.getElementById("table7").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
   
    else if(place1 == "O" && place2 == "O" && place3 == "O") {
        winofplayer2++;
        document.getElementById("table1").style.borderColor = "#90EE90";
        document.getElementById("table2").style.borderColor = "#90EE90";
        document.getElementById("table3").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place4 == "O" && place5 == "O" && place6 == "O") {
        winofplayer2++;
        document.getElementById("table4").style.borderColor = "#90EE90";
        document.getElementById("table5").style.borderColor = "#90EE90";
        document.getElementById("table6").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place7 == "O" && place8 == "O" && place9 == "O") {
        winofplayer2++;
        document.getElementById("table7").style.borderColor = "#90EE90";
        document.getElementById("table8").style.borderColor = "#90EE90";
        document.getElementById("table9").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place1 == "O" && place4 == "O" && place7 == "O") {
        winofplayer2++;
        document.getElementById("table1").style.borderColor = "#90EE90";
        document.getElementById("table4").style.borderColor = "#90EE90";
        document.getElementById("table7").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place2 == "O" && place5 == "O" && place8 == "O") {
        winofplayer2++;
        document.getElementById("table2").style.borderColor = "#90EE90";
        document.getElementById("table5").style.borderColor = "#90EE90";
        document.getElementById("table8").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place3 == "O" && place6 == "O" && place9 == "O") {
        winofplayer2++;
        document.getElementById("table3").style.borderColor = "#90EE90";
        document.getElementById("table6").style.borderColor = "#90EE90";
        document.getElementById("table9").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place1 == "O" && place5 == "O" && place9 == "O") {
        winofplayer2++;
        document.getElementById("table1").style.borderColor = "#90EE90";
        document.getElementById("table5").style.borderColor = "#90EE90";
        document.getElementById("table9").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }
    else if(place3 == "O" && place5 == "O" && place7 == "O") {
        winofplayer2++;
        document.getElementById("table3").style.borderColor = "#90EE90";
        document.getElementById("table5").style.borderColor = "#90EE90";
        document.getElementById("table7").style.borderColor = "#90EE90";
        win();
        gamewin = 1;
    }  
}

function win() {
    document.getElementById("table1").style.pointerEvents = 'none';
    document.getElementById("table2").style.pointerEvents = 'none';
    document.getElementById("table3").style.pointerEvents = 'none';
    document.getElementById("table4").style.pointerEvents = 'none';
    document.getElementById("table5").style.pointerEvents = 'none';
    document.getElementById("table6").style.pointerEvents = 'none';
    document.getElementById("table7").style.pointerEvents = 'none';
    document.getElementById("table8").style.pointerEvents = 'none';
    document.getElementById("table9").style.pointerEvents = 'none';
    document.getElementById("score1").innerHTML = winofplayer1;
    document.getElementById("score2").innerHTML = winofplayer2;
    document.getElementById("info").innerText = "Player" + currentplayer + "is Winner";
    setTimeout(() => {
        location.reload()
    }, 1500);
}

function draw() {
    if(place1 != "" && place2 != "" && place3 != "" && place4 != "" && place5 != "" && place6 != "" && place7 != "" && place8 != "" && place9 != "" && gamewin == 0) {
        drawscore++;
        document.getElementById("score3").innerText = drawscore;
        setTimeout(() => {
            location.reload()
        }, 1000);
    }
}


function saveGame() {
    var gameSave = {
        winofplayer1 : winofplayer1,
        winofplayer2: winofplayer2,
        drawscore: drawscore,
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.winofplayer1 !== "undefined")
    winofplayer1 = savedGame.winofplayer1;
  if (typeof savedGame.winofplayer2 !== "undefined")
    winofplayer2 = savedGame.winofplayer2;
  if (typeof savedGame.drawscore !== "undefined")
    drawscore = savedGame.drawscore;
  document.getElementById("score1").innerText = winofplayer1;
  document.getElementById("score2").innerText = winofplayer2;
  document.getElementById("score3").innerText = drawscore;
}

window.onload = function () {
    loadGame();
}

window.onbeforeunload = function (e) {
    saveGame();
};

function reset() {
    winofplayer1 = 0;
    winofplayer2 = 0;
    drawscore = 0;
    location.reload();
}