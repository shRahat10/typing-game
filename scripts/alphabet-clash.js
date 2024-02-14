function randomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabetArray[index];
    return alphabet;
}

document.addEventListener('keyup', keyBoardAlphabet);

function keyBoardAlphabet(e){
    const keyPressed = e.key;
    if (keyPressed === 'Escape') {
        gameOver();
    }

    const convertedKeyPressed = keyPressed.toLocaleLowerCase();
    let currentScore = document.getElementById('score').innerText;
    let currentLife = document.getElementById('life').innerText;
    const currentAlphabet = document.getElementById('show-alphabet').innerText.toLocaleLowerCase();
    
    if (convertedKeyPressed === currentAlphabet) {
        currentScore++;
        showScore(currentScore);
        startGame();
    }
    else{
        currentLife--;
        showLife(currentLife)
        if (currentLife === 0) {
            showScore(currentScore);
            gameOver();
        }
    }
}