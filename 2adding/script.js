var document = document || {};

var x = 0;
var y = 0;


function count (number) {
    if (number === 0) {
        x = number;
    } 
    else {
        y = number;
    }

}
 function sum() {
     alert(x+y);
     x = 0;
     y = 0;
 }