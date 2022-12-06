function CalculatePrice(){
    const area = document.getElementById('Area');
    const square = document.getElementById('square');
    const rectangle = document.getElementById('rectangle');
    const result = document.getElementById('result');
    let price=0;

    if(square.checked){
        price=70*area.value;
    }
    else{
        price=80*area.value;
    }

    result.innerHTML = `Koszt kafelkowanie ${price}`
    //console.log(typeof area.value)
    //console.log(square.checked)
    //console.log(rectangle.checked)
}