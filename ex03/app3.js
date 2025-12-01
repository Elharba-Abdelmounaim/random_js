const images = ['image/paper1.jpg', 'image/rock1.jpg', 'image/scissor1.png'];
const imgc = document.getElementById("choice");
const choice = document.getElementById("user")
const userimage = document.getElementById("userchoice")
const userchioce =document.getElementById("userchoice")
const showresult =document.getElementById("whowin")
const score =document.getElementById("score")
var r = 0
var indice
var id
var cmpu = 0
var cmpl = 0

function changeImage(){
    r = Math.round(Math.random() * 3);
    imgc.src = images[r]
}

function arreter(){
    clearInterval(id)
    result()
}
function result(){
    if((indice==0 && r==1)
    || (indice==1 && r==2)
    ||(indice==2 && r==0)){
        showresult.textContent="win"
        showresult.style.color="green"
        cmpu++
    }else if(indice==r){
        showresult.textContent="egalite"
        showresult.style.color="yellow"
    }
    else{
         showresult.textContent="lose"
         showresult.style.color="red"
         cmpl++
    }
    userchioce.style.pointerEvents="auto"
    score.textContent = cmpl + "-" + cmpu

}

function userchoice(index){
    showresult.textContent=""

    indice=index
    userimage.src = images[index]
    userchioce.style.pointerEvents="none"
    id = setInterval(changeImage,1)
    setTimeout(arreter,1000)
}
