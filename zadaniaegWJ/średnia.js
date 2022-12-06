const polak = document.getElementById('pol')
const nowak = document.getElementById('now')
const rysik = document.getElementById('rys')
const button = document.getElementById('button')
const result = document.getElementById('result')

function isGood(data){
    return data.length>0 && !isNaN(data)
}

button.addEventListener('click', ()=>{
    if (isGood(pol.value) && isGood(now.value) && isGood(rys.value)){
        let a=Number(pol.value)
        let b=Number(now.value)
        let c=Number(rys.value)
        result.innerHTML=`średnia ocen ${(a+b+c)/3}`
    }
    else{
        result.innerHTML='wpisz poprawne dane';
    }
})