const notification = document.getElementById("notification");

setTimeout(() => {
    notification.classList.add("show");
}, 2000);

function hide() {
    notification.classList.remove("show");
}
