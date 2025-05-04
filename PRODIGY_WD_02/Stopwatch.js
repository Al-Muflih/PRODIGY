let hours = 0;
let minutes = 0;
let seconds = 0;
let lapCounter = 1;
let intervalId;
let isRunning = false;

const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');
const lapButton = document.getElementById('lap-button');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const lapList = document.getElementById('lap-list');

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);

function startStopwatch() {
    if (!isRunning) {
        intervalId = setInterval(updateStopwatch, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
}

function resetStopwatch() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapCounter = 1;
    lapList.innerHTML = '';
    hoursDisplay.textContent = '00';
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    clearInterval(intervalId);
    isRunning = false;
}

function recordLap() {
  const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  const lapListItem = document.createElement('LI');
  lapListItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
  lapList.appendChild(lapListItem);
  lapCounter++;
}


function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    hoursDisplay.textContent = padZero(hours);
    minutesDisplay.textContent = padZero(minutes);
    secondsDisplay.textContent = padZero(seconds);
}

function padZero(time) {
    return (time < 10) ? `0${time}` : time.toString();
}