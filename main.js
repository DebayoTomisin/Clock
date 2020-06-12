const secondHand = document.querySelector('.second');
const minHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`

    const hour = now.getHours()
    const hoursDegree = ((hour / 12) * 360) + ((seconds / 60) * 6) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();