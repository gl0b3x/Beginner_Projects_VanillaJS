const hint = document.getElementById("Hint");
const leftLive = document.getElementById("countOfLives");
const wordPlace = document.getElementById("correctWorld");

let counter = 0;
let random;
let randomWorld;
let arrayOfWorld = ["Laptop", "mouse", "window", "bottle"];
let correctWorld = [];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let clue = ["Computer for travelling", "Using to use pc", "You can open it and breathe", "You can drink from it"]

let lives = 6;

function buttonsCreate() {
    let alphabetPlace = document.getElementById("alphabet");
    for (let i = 0; i < alphabet.length; i++) {
        let button = document.createElement("button");
        button.id = alphabet[i]
        button.textContent = alphabet[i];
        alphabetPlace.appendChild(button);
        button.onclick = function () {
            checkWord(button);
        }
    }
}

function wordCreate() {
    getRandomIndex();
    randomWorld = arrayOfWorld[random];
    correctWorld = randomWorld.split("").map(letter => letter.toUpperCase());
    for (let i = 0; i < randomWorld.length; i++) {
        let div = document.createElement("div");
        div.id = i;
        div.textContent = "-";
        wordPlace.appendChild(div);
    }
}

function checkWord(button) {
    let foundMatch = false;
    foundLetter = button.innerText;

    for (let i = 0; i < correctWorld.length; i++) {
        if (correctWorld[i] === button.innerText.toUpperCase()) {
            document.getElementById(i).innerHTML = foundLetter;
            button.style.opacity = 0.3;
            foundMatch = true;
            counter += 1;
            checkWin();
        }
    }

    if (!foundMatch) {
        button.style.opacity = 0;
        if (lives > 3) {
            lives = lives - 1;
            leftLive.innerText = lives;
        } else if (lives <= 3 && lives > 0) {
            hint.innerHTML = clue[random];
            lives = lives - 1;
            leftLive.innerText = lives;
        } else if (lives == 0) {
            button.style.opacity = 0;
            leftLive.innerText = "You Dead";
        }
    }
}

function getRandomIndex() {
    random = Math.floor(Math.random() * arrayOfWorld.length);
}

leftLive.innerText = lives;
buttonsCreate();
wordCreate();

function reset() {
    wordCreate();
}

function checkWin() {
    if (counter == correctWorld.length) {
        leftLive.innerText = "You won!"
    }
}