var n = Math.round(Math.random()*100);
console.log(n)
const inp = document.getElementById('nombre');
const form = document.getElementById('form');
const get = document.getElementById('get')

var tontative= 0

function deviner(){
    console.log('hello world')
    var valeur_saisir=inp.value;
    if(n>valeur_saisir){
         get.textContent="le nombre est encors plus grand"
         get.classList.add("erreur")
         inp.value=""
         inp.focus()
         tontative++
    }     
    else if(n<valeur_saisir){
        get.textContent="le nombre est encors plus petit"
        get.classList.remove("succes")
        get.classList.add("erreur")
         inp.value=""
         inp.focus()
         tontative++
    }     
    else {
        tontative++;
        get.textContent="bravo"+" :  "+tontative
        get.classList.add("succes")
        
    }
}
