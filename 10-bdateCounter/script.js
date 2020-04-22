var document = document || {};

function count() {
    
    var date = new Date().getTime();
    var inputDate = document.getElementById('bday').value;
    
    var result = new Date(inputDate).getTime();
    
    var subtrack = result - date;
    var day = Math.floor(subtrack / 1000 / 60 / 60 / 24);
    
    document.getElementById('countDown').innerHTML = 'You have' + day + 'days';
}