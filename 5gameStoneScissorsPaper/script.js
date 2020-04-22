var document = document || {};

var values = ['stone', 'scissors', 'paper'];

function play(number) {
    
    var randomNumber = Math.floor(Math.random() *3);
    console.log(values[number]);
    console.log(values[randomNumber]);
    
    if (values[number] === values[randomNumber]){
        alert('We are equal!');
    }
    else if (values[number] === 'stone') {
        if (values[randomNumber] === 'scissors') {
            alert('You won!');
        }
        else if (values[randomNumber] === 'paper') {
            alert('You lost!');
        }
    }
    else if (values[number] === 'scissors') {
        if(values[randomNumber] === 'stone') {
            alert('You lost!');
        }
        else if (values[randomNumber] === 'paper') {
            alert('you won!');
        }
    else if (values[number] === 'paper') {
        if (values[randomNumber] === 'stone'){
            alert('You won!');
        }
        else if (values[randomNumber] === 'scissors') {
            alert('You  lost!');
        }
    }
    }
}