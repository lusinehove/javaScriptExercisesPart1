var document = document || {};

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();

var content = '';
var image = '';

if (hour >= 0 && hour <= 7 && minutes >= 0 && minutes <= 59) {
    content += '<h2>' + 'Good Morning' + '</h2>';
    image += '<img src="image/morning.jpg">';
}

else if (hour >= 8 && hour <= 15 && minutes >= 0 && minutes <= 59) {
    content += '<h2>' + 'Good Afternoon' + '</h2>';
    image += '<img src="image/day.jpg">';
}

else if (hour >= 16 && hour <= 23 && minutes >= 0 && minutes <= 59) {
    content += '<h2>' + 'Good Evening' + '</h2>';
    image += '<img src="image/evening.jpg">';
}

document.querySelector('#h1').innerHTML = content;
document.querySelector('#image').innerHTML = image;
