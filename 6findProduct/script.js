var document = document || {};

var products = ['eggs', 'milk', 'bread', 'sugar', 'fruits', 'honey', 'coffee', 'fruits', 'water'];

function find() {
    
    var searchProduct = document.getElementById('mySearch').value;
    
    var productContent = '';
    
    for (var i =0; i < products.length; i++) {
        if (searchProduct === products[i]) {
            productContent = searchProduct;
            break;
        }
        }
    
    
        if (productContent === '') {
            document.getElementById('text').innerHTML = 'No product founds';
        }
        else {
            document.getElementById('text').innerHTML = productContent;
        }
    
}
    
