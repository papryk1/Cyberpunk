function startGame() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
    loadStory();
}

function loadGame() {
    let savedGame = localStorage.getItem("gameState");
    if (savedGame) {
        alert("Gra wczytana!");
    } else {
        alert("Brak zapisanej gry.");
    }
}

function showSettings() {
    alert("Ustawienia gry (do zaimplementowania)");
}

function loadStory() {
    document.getElementById("storyText").innerText = "Witaj w świecie Cyberpunk!";
}
function startCharacterCreation() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.character-creation').style.display = 'block';
}

function randomizeStats() {
    let stats = ["INT", "REF", "DEX", "TECH", "COOL", "LUCK", "BODY", "EMP", "MOVE"];
    stats.forEach(stat => {
        let value = Math.floor(Math.random() * 10) + 2; // Losuje wartość od 2 do 11
        document.getElementById("stat" + stat).innerText = value;
    });
}

function saveCharacter() {
    let character = {
        name: document.getElementById("charName").value,
        class: document.getElementById("charClass").value,
        stats: {
            INT: parseInt(document.getElementById("statINT").innerText),
            REF: parseInt(document.getElementById("statREF").innerText),
            DEX: parseInt(document.getElementById("statDEX").innerText),
            TECH: parseInt(document.getElementById("statTECH").innerText),
            COOL: parseInt(document.getElementById("statCOOL").innerText),
            LUCK: parseInt(document.getElementById("statLUCK").innerText),
            BODY: parseInt(document.getElementById("statBODY").innerText),
            EMP: parseInt(document.getElementById("statEMP").innerText),
            MOVE: parseInt(document.getElementById("statMOVE").innerText)
        }
    };

    localStorage.setItem("character", JSON.stringify(character));
    alert("Postać zapisana!");
    startGame(); // Przeniesienie do gry po zapisaniu postaci
}