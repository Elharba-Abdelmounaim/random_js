const p = document.getElementById('heure')

function heure(){
    var d = new Date()
    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    p.textContent = h+":"+m+":"+s
    p.classList.add("ped")
}
setInterval(heure,1000)