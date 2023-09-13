let interval;
let score = 0;

function changeColor(){
    let hexnumber=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',];
    let hexcode = '';
    for (let i = 0;i<6;i++) {
        var randomIndex = Math.floor(Math.random() * hexnumber.length);
        hexcode += hexnumber[randomIndex]
        
    }

    document.getElementById('hexcode').innerHTML=hexcode;
    document.getElementsByTagName('body')[0].style.background = '#' + hexcode;
    document.getElementById('hexcode').style.display = 'none';

    
}
function startchangeColor(){
    interval = setInterval(changeColor, 500);
}

function stopchangeColor(){
    clearInterval(interval);
}
function checkGuess() {
    
    const guessInput = document.getElementById('guessInput').value;
    const hexcode = document.getElementById('hexcode').textContent;

    if (guessInput.toUpperCase() === hexcode) {
        score++;
        document.getElementById('score').textContent = score;
        document.getElementById('message').textContent = 'Correct! Well done.';
    } else {
        document.getElementById('message').textContent = 'Try again.';
    }

    // Generate a new color for the next round
    //changeColor();
    document.getElementById('guessInput').value = '';
    document.getElementById('hexcode').style.display = 'inline';

}