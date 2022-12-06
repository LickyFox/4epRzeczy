function calculate(sign){
    let pierwsza = document.getElementById('pierwsza').value;
    let druga = document.getElementById('druga').value;
    const result = document.getElementById('result')

    
    if(pierwsza.length==0 || druga.length==0){
        result.innerHTML=("Proszę uzupelnic obie liczby")

    }
    else{
        pierwsza = parseInt(pierwsza)
        druga = parseInt(druga) 
        //console.log(typeof parseInt(pierwsza))
    }
    switch(sign){
        case '+':
            result.innerHTML = `${pierwsza} + ${druga} = ${pierwsza+druga}`
            break;
        case '-':
            result.innerHTML = `${pierwsza} - ${druga} = ${pierwsza-druga}`
            break;
        case '*':
            result.innerHTML = `${pierwsza} * ${druga} = ${pierwsza*druga}`
            break;
        case '/':
            if(druga == 0){
                result.innerHTML = 'niewolno dzielic przez zero'
            }
            else{
                result.innerHTML = `${pierwsza} / ${druga} = ${pierwsza/druga}`
            }
            break;
    

    }
}