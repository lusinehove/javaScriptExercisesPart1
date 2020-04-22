var document = document || {};

var counter = 0;

function count(sign) {
    if (sign === '+') {
        counter++;
    }
    else {
        counter--;
    }
    document.getElementById('text'). innerHTML = "You clikced " + counter;
}