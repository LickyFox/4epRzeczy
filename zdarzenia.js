

function change(p){
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

if(p === 'p1'){
  p1.innerHTML = "Szarość"
  p1.style.color='grey'
  p2.innerHTML = "Czerwień"
  p2.style.color='red'

}
else{
    p1.innerHTML = "Czerwień"
    p1.style.color='red'
    p2.innerHTML = "Szarość"
    p2.style.color='grey'
}

}
let tree = document.getElementById('tree');
function toSzare(){

    tree.src='szaretree.jpg'
}
function toCzerwone(){

    tree.src='czerwtree.jpg'
}
function toColor(){

    tree.src='wisetree.jpg'
}

//console.log(p);

