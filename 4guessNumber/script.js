var document = document || {};

function play() {
    var randomNumber = Math.floor(Math.random() * 10) +1;
    var myNumber = document.getElementById('inputNumber').value;
    
    
    console.log(randomNumber);
    console.log(myNumber);
    
    if(myNumber == randomNumber) {
        alert('Let try agian!');
    }
    else if (myNumber > randomNumber) {
        alert('You won!');
    }
    else {
        alert('You lost');
    }
}