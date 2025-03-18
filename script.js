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