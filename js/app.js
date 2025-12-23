const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const hourBox = document.querySelector('.hourBox')
const minuteBox = document.querySelector('.minuteBox')
const secondBox = document.querySelector('.secondBox')
let span = document.querySelector('.span')
const time = new Date()
let totalSeconds = time.getSeconds()

let period
function updateClock() {
    const now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    period = "Am"
    if(hours >= 12){
        period = "Pm"
    }
    hours = hours % 12
    if (hours === 0) {
        hours = 12
    }

    totalSeconds = totalSeconds + 1
    let secondDeg = (totalSeconds * 6) - 96

    let minuteDeg = (minutes * 6) - 90

    let hoursDeg = ((hours + ((minutes) / 60)) * 30) - 90

    console.log(hoursDeg)
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)'
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)'
    hourHand.style.transform = 'rotate(' + hoursDeg + 'deg)'

    span.innerHTML = period

    if (seconds < 10) {
        secondBox.innerHTML = "0" + seconds
    } else {
        secondBox.innerHTML = seconds
    }

    if (hours < 10) {
        hourBox.innerHTML = "0" + hours
    } else {
        hourBox.innerHTML = hours
    }

    if (minutes < 10) {
        minuteBox.innerHTML = "0" + minutes
    } else {
        minuteBox.innerHTML = minutes
    }

}

updateClock();
setInterval(updateClock, 1000);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("SW Registered"))
    .catch(err => console.log("SW Error:", err));
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

