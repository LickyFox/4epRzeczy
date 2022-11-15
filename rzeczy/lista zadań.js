function addToShoppingList(){
    const product = document.getElementById('product')
    const productList = document.getElementById('productList')


    if (product.value.length > 2){
    let li = document.createElement('li')
    li.innerHTML=product.value 
    productList.appendChild(li)
    }
    product.value = ''

    console.log
}