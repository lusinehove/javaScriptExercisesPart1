var document = document || {};

function countDown () {
    
    var input = document.getElementById('setSeconds').value;
    
    var result = setInterval(function(){
        
        document.getElementById('outPut').innerHTML = input;
        input--;
    
    if (input < 0){
    clearInterval(result);
    }  
    }, 1000)
    
}