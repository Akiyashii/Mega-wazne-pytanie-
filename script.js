var nieMessages = [
    "Nie",
    "Jesteś pewna?",
    "Czy aby na pewno?",
    "Czemu mi to robisz :(",
    "No weź, nie bądź taka..",
    "Nie uda ci się odmówić :PP",
    "Klikaj już tak, Głuptasie :3"
];

var nieClickCount = 0;
var takClickCount = 0;

function selectOption(option) {
    if (option === 'Tak') {
        increaseTakButtonSize();  // Zwiększ rozmiar "Tak"
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
            setBackground();
            setTimeout(displayHuraAndLoveText, 500);
            setTimeout(displayNextSceneButton, 4000);
        });
    } else if (option === 'Nie') {
        handleNieClick();
    }
}

function increaseTakButtonSize() {
    var takButton = document.getElementById('Tak-button');
    var currentTakSize = parseFloat(window.getComputedStyle(takButton).fontSize);
    var newTakSize = currentTakSize * 1.10; // Zwiększ o 10% na kliknięcie
    takButton.style.fontSize = newTakSize + 'px';
}

function handleNieClick() {
    var nieButton = document.getElementById('Nie-button');
    nieButton.innerText = nieMessages[nieClickCount % nieMessages.length]; 
    nieClickCount++;

    // Zmniejsz rozmiar przycisku "Nie"
    var currentFontSize = parseFloat(window.getComputedStyle(nieButton).fontSize);
    var newSize = currentFontSize * 0.90; // Zmniejsz o 10% na kliknięcie
    nieButton.style.fontSize = newSize + 'px';

    if (newSize <= 5) {
        nieButton.style.display = 'none'; // Ukryj, gdy stanie się za mały
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

function setBackground() {
    document.body.style.backgroundImage = "url('tlo.PNG')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

function displayHuraAndLoveText() {
    if (document.querySelector('.hura-message')) return;

    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    var huraText = document.createElement('h1');
    huraText.innerText = 'Huraaaaa!! :3';
    huraText.className = 'caveat-text hura-text';

    var loveText = document.createElement('h2');
    loveText.innerText = 'Kocham Cię <3';
    loveText.className = 'caveat-text love-text';
    loveText.style.opacity = 0;

    messageContainer.appendChild(huraText);
    messageContainer.appendChild(loveText);

    var targetContainer = document.getElementById('image-container');
    targetContainer.appendChild(messageContainer);

    setTimeout(function () {
        loveText.style.animation = "fadeIn 2s forwards";
    }, 3000);
}

function displayNextSceneButton() {
    var nextButton = document.createElement('button');
    nextButton.innerText = "Chciałbym ci jeszcze powiedzieć kilka słów od serca c:";
    nextButton.className = 'next-scene-button';
    nextButton.onclick = goToNextScene;
    document.body.appendChild(nextButton);
}

function goToNextScene() {
    document.body.innerHTML = '';
    document.body.style.backgroundColor = '#FFB6C1';

    var kotekImage = new Image();
    kotekImage.src = 'kotek.png';
    kotekImage.alt = 'Kotek z serduszkami';
    kotekImage.className = 'kotek-image';

    document.body.appendChild(kotekImage);
}

displayCat();
