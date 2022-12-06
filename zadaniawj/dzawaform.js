function sendimg(){
    const img = document.getElementById('img');
    const button = document.getElementById('button');
    const Tram = document.getElementById('Tram');
    const Mount = document.getElementById('Mount');
    const York = document.getElementById('York');

    if(Tram.checked){
        img.src = 'tram ram.jpg';
    } 
 else if(York.checked){
     img.src = 'niu jork.jpg';
 }
 else{
    img.src = 'snow mount.jpg';

 }
}