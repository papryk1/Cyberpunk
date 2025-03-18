let pointsLeft = 20;

const classDescriptions = {
    "Fixer": "Fixer to pośrednik w świecie przestępczym. Zna odpowiednich ludzi, załatwia rzeczy poza prawem i jest mistrzem negocjacji.",
    "Solo": "Solo to elitarny najemnik, specjalista od walki i ochrony. Doskonałe umiejętności bojowe i szybkie refleksy czynią go niebezpiecznym przeciwnikiem.",
    "Netrunner": "Netrunner to haker, który włamać się może do każdego systemu. Korzysta z cyberprzestrzeni do zdobywania informacji i hakowania wrogów.",
    "Tech": "Tech to specjalista od napraw, modyfikacji i technologii. Potrafi budować i ulepszać broń oraz cyberwszczepy.",
    "Nomad": "Nomad to członek wędrownych klanów, żyjący poza miastem. Ma doskonałe umiejętności przetrwania i znajomość pojazdów."
};

function startCharacterCreation() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.character-creation').style.display = 'block';
    updateClassInfo();
}

function changeStat(stat, change) {
    let statElement = document.getElementById("stat" + stat);
    let currentValue = parseInt(statElement.innerText);
    if (change > 0 && pointsLeft > 0) {
        statElement.innerText = currentValue + 1;
        pointsLeft--;
    } else if (change < 0 && currentValue > 1) {
        statElement.innerText = currentValue - 1;
        pointsLeft++;
    }
    document.getElementById("pointsLeft").innerText = pointsLeft;
}

function updateClassInfo() {
    let selectedClass = document.getElementById("charClass").value;
    document.getElementById("classDescription").innerText = classDescriptions[selectedClass];
    document.getElementById("classImage").src = "images/" + selectedClass + ".png";
}

function saveCharacter() {
    if (pointsLeft > 0) {
        alert("Musisz rozdać wszystkie punkty przed zapisaniem postaci!");
        return;
    }

    let character = {
        name: document.getElementById("charName").value,
        class: document.getElementById("charClass").value,
        stats: {
            INT: parseInt(document.getElementById("statINT").innerText),
            REF: parseInt(document.getElementById("statREF").innerText),
            DEX: parseInt(document.getElementById("statDEX").innerText),
            TECH: parseInt(document.getElementById("statTECH").innerText),
            COOL: parseInt(document.getElementById("statCOOL").innerText),
            LUCK: parseInt(document.getElementById("statLUCK").innerText)
        }
    };

    localStorage.setItem("character", JSON.stringify(character));
    alert("Postać zapisana!");
    startGame();
}