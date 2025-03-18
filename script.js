const story = {
    "start": {
        "text": "Jest noc w Night City. Siedzisz w ciemnym barze, gdy nagle podchodzi do ciebie tajemniczy Fixer.",
        "choices": [
            { "text": "Posłuchaj, co ma do powiedzenia", "next": "fixer_talk" },
            { "text": "Zignoruj go i wyjdź", "next": "leave_bar" }
        ]
    },
    "fixer_talk": {
        "text": "Fixer mówi: 'Mam dla ciebie zlecenie. Ktoś zginął w dziwnych okolicznościach. Potrzebuję kogoś z twoimi umiejętnościami.'",
        "choices": [
            { "text": "Przyjąć zlecenie", "next": "accept_mission" },
            { "text": "Odmówić", "next": "decline_mission" }
        ]
    },
    "leave_bar": {
        "text": "Wychodzisz na neonową ulicę Night City. Może to był błąd?",
        "choices": []
    },
    "accept_mission": {
        "text": "Fixer uśmiecha się i podaje ci plik z informacjami. Czas zacząć śledztwo.",
        "choices": []
    },
    "decline_mission": {
        "text": "Fixer wzrusza ramionami. 'Twoja strata.' Odchodzi, zostawiając cię samemu sobie.",
        "choices": []
    }
};

function startGame() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
    loadStory("start");
}

function loadStory(scene) {
    document.getElementById("story-text").innerText = story[scene].text;
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    
    story[scene].choices.forEach(choice => {
        let button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => loadStory(choice.next);
        choicesDiv.appendChild(button);
    });
}