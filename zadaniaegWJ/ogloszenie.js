const ad = document.getElementById('ad')
const discount = document.getElementById('discount')
const button = document.getElementById('countbutton')
const result = document.getElementById('result')

button.addEventListener('click',()=>{
    let ads=Number(ad.value)
    let price

    if(ads<=50){
        price=2*ads
    }
    else{
        price=ads
    }

    if(discount.checked){
        price=0.2*ads
    }

    result.innerHTML=`Koszt ogłoszeń: ${price}PLN`
})