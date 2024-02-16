function randomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabetArray[index];
    return alphabet;
}

function keyBoardAlphabet(e){
    const keyPressed = e.key;
    const convertedKeyPressed = keyPressed.toLocaleLowerCase();
    let currentScore = document.getElementById('score').innerText;
    let currentLife = document.getElementById('life').innerText;
    const currentAlphabet = document.getElementById('show-alphabet').innerText.toLocaleLowerCase();
 
    if (convertedKeyPressed === currentAlphabet) {
        currentScore++;
        showScore(currentScore);
        continueGame(currentAlphabet);
    }
    
    else if (keyPressed === 'Escape') {
        showScore(currentScore);
        gameOver(currentAlphabet);
    }

    else{
        currentLife--;
        showLife(currentLife)
        if (currentLife === 0) {
            showScore(currentScore);
            gameOver(currentAlphabet);
        }
    }
}