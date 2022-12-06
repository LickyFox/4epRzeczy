function oblicz(){
    const piling = document.getElementById('piling');
    const maska = document.getElementById('maska');
    const mtwarzy= document.getElementById('mtwarzy');
    const mbrwi = document.getElementById('rbrwi');
    const wynik = document.getElementById('wynik');

    let cena = 0 ;
    if(piling.checked){
        cena+=45;
    }
    if(maska.checked){
        cena+=30;
    }
    if(mtwarzy.checked){
        cena+=20;
    }
    if(rbrwi.checked){
        cena+=5;
    }
    wynik.innerHTML = `Cena zabiegow : ${cena}`;
}