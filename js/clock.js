const clock = document.getElementById("myClock");
const nameSpan = document.getElementById("myName");
const body = document.body;

const date = new Date();

const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
window.onload = function() {
    let sign = prompt("What's your Name?");
    nameSpan.innerHTML = sign;
}

function showTime() {
    const date = new Date();
    convertHex(date.toLocaleTimeString());
    clock.innerHTML = `${date.toLocaleTimeString()} ${days[date.getDay()]}`;

}

function convertHex(date) {
    let dateToArray = date.split(':');
    let r1 = Math.floor(Math.random() * 3)
    let r2 = Math.floor(Math.random() * 3)
    let r3 = Math.floor(Math.random() * 3)
    let bgColor = `#${dateToArray[r1]}${dateToArray[r2]}${dateToArray[r3]}`;
    body.style.backgroundColor = bgColor;

}
showTime();
setInterval(() => {
    showTime();
}, 1000);