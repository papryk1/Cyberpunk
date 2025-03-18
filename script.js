const player = {
    health: 100,
    attackPower: 10,
    defense: 5,
    hacking: 8,
    location: "start"
};

const enemy = {
    health: 50,
    attackPower: 8,
    defense: 3
};

function startGame() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
    loadStory(player.location);
}

function startCombat() {
    document.querySelector('.game-screen').style.display = 'none';
    document.querySelector('.combat-screen').style.display = 'block';
    document.getElementById("combat-log").innerText = "Spotkałeś przeciwnika!";
}

function attack() {
    let playerDamage = Math.max(player.attackPower - enemy.defense, 1);
    enemy.health -= playerDamage;
    let enemyDamage = Math.max(enemy.attackPower - player.defense, 1);
    player.health -= enemyDamage;

    let log = `Zadałeś ${playerDamage} obrażeń. Wróg ma teraz ${enemy.health} HP.\n` +
              `Wróg zadał ci ${enemyDamage} obrażeń. Masz teraz ${player.health} HP.`;

    document.getElementById("combat-log").innerText = log;

    if (enemy.health <= 0) {
        document.getElementById("combat-log").innerText += "\nPokonałeś wroga!";
        player.location = "victory";
        saveGame();
        document.querySelector('.combat-screen').style.display = 'none';
        document.querySelector('.game-screen').style.display = 'block';
        loadStory("victory");
    } else if (player.health <= 0) {
        document.getElementById("combat-log").innerText += "\nZginąłeś!";
    }
}

function saveGame() {
    localStorage.setItem("playerData", JSON.stringify(player));
    alert("Gra zapisana!");
}

function loadGame() {
    let savedData = localStorage.getItem("playerData");
    if (savedData) {
        Object.assign(player, JSON.parse(savedData));
        startGame();
        alert("Gra wczytana!");
    } else {
        alert("Brak zapisanego stanu gry.");
    }
}

function loadStory(scene) {
    player.location = scene;
    document.getElementById("story-text").innerText = `Jesteś w ${scene}`;
}