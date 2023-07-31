const { app, BrowserWindow } = require('electron');
const express = require('express');
const router = express.Router();

const path = require('path')
//timer still bugs out after restarting it


router.get('/', (req, res) => {
    res.send(express.static('/'))
})












const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
})
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})

function incrementTimer() {
    if (timerIsOn == "on") {
        if (seconds < 10) {
            seconds+= 1;
            timer.innerHTML = `${minutes}:${tens}${seconds}`;
        }
        if (seconds >= 10) {
            tens+= 1;
            seconds = 0;
            timer.innerHTML = `${minutes}:${tens}${seconds}`;
        }
        if (tens >= 6) {
            minutes+= 1;
            tens = 0;
        }
        timer.innerHTML = `${minutes}:${tens}${seconds}`;
}}

function runTimer() {
    timerIsOn = 'on';
    if (timerIsOn == 'on' && seconds <= 0) {
        let interv = setInterval(incrementTimer, 1000);
        clearInterval(interv);
    }
}

function pause() {
    timerIsOn = 'off';
}

function resetTimer() {
    timerIsOn = 'off';
    seconds = 0;
    tens = 0;
    minutes = 0;
    timer.innerHTML = `${minutes}:${tens}${seconds}`;
    console.log('hi');
}
