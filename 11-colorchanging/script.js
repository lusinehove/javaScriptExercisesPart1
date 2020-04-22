var document = document || {};

var color = ["coral", "black", "blue", "green", "yellow", "red", "pink", "gray", "brown", "purple"];

//console.log(color);

var changeColors = setInterval(setColor, 500);
var i = 0;

function setColor() {
  var circle = document.getElementById('colors');

    circle.style.backgroundColor = color[i];
    if (i === color.length) {
        i = 0;
    }
    else {
      i++;  
    }  
}
 

//function stopColor() {
//  clearInterval(changeColors);
//}




