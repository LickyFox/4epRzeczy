let shoppingList = document.getElementById('shoppingList');
let products = ['chleb','cukier','cytryny'];
for(let product of products){
    addProduct(product);

}
function addProduct(product){
    let li = document.createElement('li');
    li.innerText = product;
    shoppingList.appendChild(li);
}

let imgList = [ 'wisetree.jpg','wisetree2.jpg','wisetree3.jfif','wisetree4.jpg' ];