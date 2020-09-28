const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdownBirthday() {
    const currentDate = new Date();
    const nextBirthday = new Date('16 April 2021');
    //times left until birthday in miliseconds:
    const timesLeft = nextBirthday - currentDate;
    const totalSecondsLeft = Math.floor(timesLeft / 1000);
    const daysLeft = Math.floor(totalSecondsLeft / 60 / 60 / 24);
    const hoursLeft = Math.floor(totalSecondsLeft / 60 / 60) % 24
    const minsLeft = Math.floor(totalSecondsLeft / 60) % 60;
    const secondsLeft = Math.floor(totalSecondsLeft) % 60;
    console.log(daysLeft, hoursLeft, minsLeft, secondsLeft);

    daysEl.innerHTML = daysLeft;
    hoursEl.innerHTML = hoursLeft;
    minutesEl.innerHTML = minsLeft;
    secondsEl.innerHTML = secondsLeft;
}

countdownBirthday();
setInterval(countdownBirthday, 1000);
