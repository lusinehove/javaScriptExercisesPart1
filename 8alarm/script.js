var document = document || {};

//function countDown() {
//    
//    var input = document.getElementById('serSeconds').value;
//    
//    var result = setTimeout(alertfunction() input * 1000);
//}
//function alertFunction() {
//    alert('Hello!');
//}


function countDown() {
    var input = document.getElementById('setSeconds').value;
    var result = setTimeout(function(){
        alert('Hello!');
    }, input * 1000);
}