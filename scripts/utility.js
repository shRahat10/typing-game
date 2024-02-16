function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
} 

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
} 

function showRandomAlphabet(){
    const alphabet = randomAlphabet();
    addBackgroundColor(alphabet);
    document.getElementById('show-alphabet').innerText = alphabet;
}

function showLife(life){
    document.getElementById('life').innerHTML = life;
}

function showScore(score){
    document.getElementById('score').innerHTML = score;
    document.getElementById('final-score').innerHTML = score;
}

function startGame(){
    hideElement('home-page');
    showElement('game-page');
    hideElement('end-page');
    showRandomAlphabet();
}

function gameOver(){
    hideElement('home-page');
    hideElement('game-page');
    showElement('end-page');
    document.getElementById('score').innerText = '0';
    document.getElementById('life').innerText = '3';
}
