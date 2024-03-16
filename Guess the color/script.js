let start = document.getElementById("play")
let easymode = document.getElementById("easy")
let hardmode = document.getElementById("hard")
let arrayoOfColors = [];
let boxColor1, boxColor2, boxColor3, boxColor4, boxColor5, boxColor6;
let correctColor;
let easy = 1;
let buttonArray = ["color1", "color2", "color3", "color4", "color5", "color6"]

window.onload = (event) => {
    giveThemColor();
    setup();
};

start.addEventListener("click", function () {
    giveThemColor();
    setup();
});

easymode.addEventListener("click", function () {
    easy = 1;
    easymode.classList.add("selected");
    hardmode.classList.remove("selected");
    removeGroup2();
    giveThemColor();
    setup();
});

hardmode.addEventListener("click", function () {
    easy = 0;
    hardmode.classList.add("selected");
    easymode.classList.remove("selected");
    addGroup2();
    giveThemColor();
    setup();
});


function removeGroup2() {
    let group2 = document.getElementById('group2');
    if (group2) {
        group2.parentNode.removeChild(group2);
    }
}

function addGroup2() {
    let group1 = document.getElementById('group1');
    let group2 = document.getElementById("group2");
    if (group2 === null) {
        let newGroup2 = document.createElement('div');
        newGroup2.id = 'group2';

        for (let i = 4; i <= 6; i++) {
            let newDiv = document.createElement('div');
            newDiv.id = 'color' + i;
            newDiv.classList.add("boxforcolor");
            newGroup2.appendChild(newDiv);
        }

        group1.parentNode.insertBefore(newGroup2, group1.nextSibling);
    }
}

function giveThemColor() {
    arrayoOfColors = []
    if (easy) {
        for (i = 0; i < 3; i++) {
            arrayoOfColors.push(makeColor());
        }
    } else {
        for (i = 0; i < 6; i++) {
            arrayoOfColors.push(makeColor());
        }
        boxColor4 = arrayoOfColors[3];
        boxColor5 = arrayoOfColors[4];
        boxColor6 = arrayoOfColors[5];
        document.getElementById("color4").style.backgroundColor = boxColor4;
        document.getElementById("color5").style.backgroundColor = boxColor5;
        document.getElementById("color6").style.backgroundColor = boxColor6;
    }
    boxColor1 = arrayoOfColors[0];
    boxColor2 = arrayoOfColors[1];
    boxColor3 = arrayoOfColors[2];
    document.getElementById("color1").style.backgroundColor = boxColor1;
    document.getElementById("color2").style.backgroundColor = boxColor2;
    document.getElementById("color3").style.backgroundColor = boxColor3;

    correctColor = arrayoOfColors[getRandomInt(0, arrayoOfColors.length - 1)];
    document.getElementById("gues").innerHTML = correctColor;
}

function setup() {
    for (i = 0; i < buttonArray.length; i++) {
        document.getElementById(buttonArray[i]).style.opacity = "1";
    }
    document.getElementById("result").style.opacity = 0;
    document.getElementById("upperblock").style.backgroundColor = "#2C8E99";
    for (i = 0; i < buttonArray.length; i++) {
        let element = document.getElementById(buttonArray[i]);
        element.addEventListener("click", function (event) {
            document.getElementById("result").style.opacity = 1;
            if (element.style.backgroundColor == correctColor) {
                document.getElementById("upperblock").style.backgroundColor = correctColor;
                document.getElementById("play").innerHTML = "New Game!";
                document.getElementById("result").innerHTML = "Correct!"
                for (i = 0; i < 6; i++) {
                    document.getElementById(buttonArray[i]).style.opacity = "1";
                    document.getElementById(buttonArray[i]).style.backgroundColor = correctColor;
                }

            } else {
                element.style.opacity = "0";
                document.getElementById("result").innerHTML = "Try Again!"
            };
        });
    }
}

function makeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}