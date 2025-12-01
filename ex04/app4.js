const notification = document.getElementById('notif');

function hide(){
    notification.classList.remove("Show");
}

function showmotif(){
    if(!notification.classList.contains("Show")) {
        notification.classList.add("Show");
        setTimeout(hide, 1700);
    }
}
